// src/hooks/useNow.js
import { useEffect, useState } from "react";

/**
 * Returns a Date that refreshes at midnight local time.
 * Use it to keep "Present (X months)" durations fresh.
 */
export default function useNow() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    let timer;
    const scheduleMidnight = () => {
      const next = new Date();
      next.setHours(24, 0, 0, 0);
      timer = setTimeout(() => {
        setNow(new Date());
        scheduleMidnight();
      }, next.getTime() - Date.now());
    };
    scheduleMidnight();
    return () => clearTimeout(timer);
  }, []);

  return now;
}
