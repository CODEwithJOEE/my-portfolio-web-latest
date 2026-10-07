// src/Section/Experience.jsx
import { motion } from "framer-motion";
import ExperienceCard from "../components/ExperienceCard";
import { experienceSummary } from "../data/experienceSummary";
import { experienceItems } from "../data/experienceItems";
import { SECTION, SECTION_TITLE } from "../styles/uiStyles";
import { prefersReducedMotion } from "../styles/motionPresets";

export default function Experience() {
  return (
    <div className={SECTION}>
      <h2 className={SECTION_TITLE}>Experience</h2>

      <ul className="list-disc pl-6 space-y-2">
        {experienceSummary.map((s) => (
          <li key={s} className="leading-relaxed">
            {s}
          </li>
        ))}
      </ul>

      <div className="space-y-4">
        {experienceItems.map((item, i) => (
          <motion.div
            key={item.org}
            initial={prefersReducedMotion() ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              prefersReducedMotion()
                ? { duration: 0 }
                : { duration: 0.22, delay: i * 0.06, ease: "easeOut" }
            }
          >
            <ExperienceCard {...item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
