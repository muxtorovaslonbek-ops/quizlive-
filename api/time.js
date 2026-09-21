// Vercel serverless function: returns the server's current time.
// The browser uses it to correct for a wrong clock on the player's / host's device
// (question timers compare against Firebase server time, so a device clock that is
// off by even a few seconds would make questions look "already expired").
export default function handler(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  res.end(JSON.stringify({ now: Date.now() }));
}
