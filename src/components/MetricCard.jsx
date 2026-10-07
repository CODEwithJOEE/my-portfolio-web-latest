import { useEffect, useRef, useState } from "react";
import useInView from "../hooks/useInView";
import { CARD } from "../styles/uiStyles";

export default function MetricCard({ kpi, label }) {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const target = parseInt(kpi, 10) || 0;
  const suffix = String(kpi).replace(/[0-9]/g, "");
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);
  const loopRef = useRef(null);

  useEffect(() => {
    if (!inView) {
      clearInterval(timerRef.current);
      clearInterval(loopRef.current);
      return;
    }

    const duration = 2000;
    const stepTime = 20;
    const totalSteps = Math.max(1, Math.floor(duration / stepTime));
    const increment = target / totalSteps;

    const run = () => {
      let current = 0;
      setCount(0);
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timerRef.current);
        }
        setCount(Math.floor(current));
      }, stepTime);
    };

    run();
    loopRef.current = setInterval(run, 8000);

    return () => {
      clearInterval(timerRef.current);
      clearInterval(loopRef.current);
    };
  }, [inView, target]);

  return (
    <div ref={ref} className={`${CARD} px-5 py-4 text-center`}>
      <div className="text-2xl font-extrabold">
        {count}
        {suffix}
      </div>
      <div className="text-sm opacity-80">{label}</div>
    </div>
  );
}
