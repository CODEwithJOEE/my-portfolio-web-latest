// src/Section/Skills.jsx
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skillsGroups } from "../data/skillsData.js";

import { SECTION, SECTION_TITLE, SKILL_PILL, CARD } from "../styles/uiStyles";
import PaginationNav from "../components/PaginationNav";

export default function Skills() {
  const pageSize = 4;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(skillsGroups.length / pageSize);
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const currentGroups = useMemo(
    () => skillsGroups.slice(start, end),
    [start, end]
  );

  return (
    <div className={SECTION}>
      <h2 className={SECTION_TITLE}>Skills</h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="grid gap-4 grid-cols-1 sm:grid-cols-2"
        >
          {currentGroups.map((group) => (
            <div key={group.title} className={`${CARD} p-4`}>
              <h3 className="text-lg font-semibold text-sky-400 mb-3">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => {
                  const Icon = s.icon;
                  return (
                    <span key={s.name} className={SKILL_PILL}>
                      {Icon && (
                        <span
                          className="text-lg"
                          style={{ color: s.color || "#6B7280" }}
                        >
                          <Icon />
                        </span>
                      )}
                      {s.name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination */}
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <PaginationNav
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
          ariaLabel="Skills pagination"
        />
      </div>
    </div>
  );
}
