// src/components/ExperienceCard.jsx
import useNow from "../hooks/useNow";
import { buildPeriodLabel } from "../utils/duration";
import {
  ROLE_BADGE,
  EXP_CARD,
  EXP_CARD_HEADER,
  EXP_PERIOD,
} from "../styles/uiStyles";

export default function ExperienceCard({
  org,
  role,
  startDate,
  endDate,
  periodOverride,
  bullets,
}) {
  // Re-render at midnight → "Present" duration stays accurate
  useNow();

  const period = periodOverride ?? buildPeriodLabel(startDate, endDate);

  return (
    <article className={EXP_CARD}>
      <div className={EXP_CARD_HEADER}>
        <h3 className="font-semibold">{org}</h3>

        <span
          className={`text-xs font-semibold rounded-full px-3 py-1 ${
            ROLE_BADGE[role] ||
            "bg-slate-500/10 text-slate-200 border border-white/10"
          }`}
        >
          {role}
        </span>
      </div>

      <div className="px-4 pb-4">
        <div className={EXP_PERIOD}>{period}</div>

        <ul className="mt-3 list-disc pl-5 space-y-2 leading-relaxed">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
