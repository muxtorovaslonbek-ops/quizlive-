/**
 * Server-time correction.
 *
 * Question timers compare `questionStartTime` (a Firebase SERVER timestamp) with the
 * device clock. If a device clock is off by more than the question timer, the question
 * looks expired immediately: answer buttons lock, and the admin panel jumps straight to
 * results (which also reveals the correct answer).
 *
 * Fix: measure how far this device's clock is from the server's, and use serverNow()
 * everywhere instead of Date.now().
 *
 * Source of server time, in order:
 *   1. GET /api/time  (api/time.js, deployed on Vercel) — millisecond accurate.
 *   2. The HTTP `Date` header of that response — ±1 s, works on any static host.
 * If both fail we fall back to the device clock (offset 0), i.e. the old behaviour.
 */
import { useEffect, useState } from 'react';

let offset = 0; // ms to add to Date.now() to get server time

export const serverNow = () => Date.now() + offset;
export const getClockOffset = () => offset;

async function takeSample() {
  const ctrl  = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 4000);
  try {
    const t0  = Date.now();
    const res = await fetch(`/api/time?_=${t0}`, { cache: 'no-store', signal: ctrl.signal });
    const t1  = Date.now();
    const rtt = t1 - t0;
    if (!res.ok || rtt > 5000) return null;

    let serverMs = null;

    // 1) Precise: JSON body from api/time.js
    const type = res.headers.get('content-type') || '';
    if (type.includes('application/json')) {
      try {
        const body = await res.json();
        if (Number.isFinite(body?.now)) serverMs = body.now;
      } catch { /* fall through */ }
    }

    // 2) Fallback: HTTP Date header (1 s resolution → add half a second)
    if (serverMs === null) {
      const date = Date.parse(res.headers.get('date') || '');
      const age  = Number(res.headers.get('age') || 0);
      if (Number.isFinite(date) && age <= 2) serverMs = date + 500;
    }
    if (serverMs === null) return null;

    // The server stamped its time roughly halfway through the round trip.
    return { offset: serverMs - (t0 + t1) / 2, rtt };
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

let markFirstDone;
/** Resolves (never rejects) once the first sync attempt has finished, success or not. */
export const firstSync = new Promise((resolve) => { markFirstDone = resolve; });

/** Take a few samples and keep the one with the smallest round-trip time. */
export async function syncServerClock(samples = 3) {
  let best = null;
  for (let i = 0; i < samples; i++) {
    const s = await takeSample();
    if (s && (!best || s.rtt < best.rtt)) {
      best = s;
      offset = s.offset;
    }
    if (i === 0) markFirstDone();
  }
  markFirstDone();
  return best;
}

/** React hook: true once the first clock sync attempt has finished. */
export function useClockReady() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let alive = true;
    firstSync.then(() => { if (alive) setReady(true); });
    return () => { alive = false; };
  }, []);
  return ready;
}
