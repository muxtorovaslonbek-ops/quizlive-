import { useState, useEffect } from 'react';
import { initGameState, subscribeToGameState } from '../firebase/db';

export default function useGameState() {
  const [gameState, setGameState] = useState(null);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState(null);

  useEffect(() => {
    initGameState().catch((e) => setError(e.message || 'INIT_FAILED'));

    // onSnapshot signature: (snapshot, error) — second arg fires on listener errors
    // (permission denied, quota exceeded, network drop with no recovery).
    const unsub = subscribeToGameState((state) => {
      setGameState(state);
      setError(null);
      setLoading(false);
    }, (err) => {
      setError(err?.message || 'CONNECTION_LOST');
      setLoading(false);
    });

    return unsub;
  }, []);

  return { gameState, loading, error };
}
