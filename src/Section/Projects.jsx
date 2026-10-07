// src/Section/Projects.jsx
import { useMemo, useState } from "react";
import { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MetricCard from "../components/MetricCard";

import { projects } from "../data/projects";
import {
  STATUS_STYLES,
  TECH_STYLES,
  CARD,
  CHIP,
  BTN_PRIMARY,
} from "../styles/uiStyles";
import PaginationNav from "../components/PaginationNav";

export default function Projects() {
  const [page, setPage] = useState(1);
  const pageSize = 2;

  const totals = useMemo(() => {
    const total = projects.length;
    const completed = projects.filter((p) => p.status === "Completed").length;
    const live = projects.filter((p) => p.status === "Live").length;
    const ongoing = projects.filter((p) => p.status === "Ongoing").length;
    return { total, completed, live, ongoing };
  }, []);

  const totalPages = Math.ceil(projects.length / pageSize);
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  const pageItems = useMemo(() => projects.slice(start, end), [start, end]);

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold">Projects</h2>

      {/* Stats */}
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <MetricCard kpi={`${totals.total}`} label="Total" />
        <MetricCard kpi={`${totals.completed}`} label="Completed" />
        <MetricCard kpi={`${totals.live}`} label="Live" />
        <MetricCard kpi={`${totals.ongoing}`} label="Ongoing" />
      </div>

      {/* Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="mt-4 grid gap-6 sm:grid-cols-2"
        >
          {pageItems.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination */}
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-sm opacity-80">
          Showing <strong>{start + 1}</strong>–
          <strong>{Math.min(end, projects.length)}</strong> of{" "}
          <strong>{projects.length}</strong>
        </p>

        <PaginationNav
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
          ariaLabel="Projects pagination"
        />
      </div>
    </div>
  );
}

const ProjectCard = memo(function ProjectCard({
  title,
  status,
  img,
  desc,
  techs,
  live,
  button,
}) {
  return (
    <article className={`${CARD} p-3 flex flex-col`}>
      <div className="relative">
        <div className="rounded-xl overflow-hidden bg-slate-800/40">
          <img
            src={img}
            alt={title}
            className="w-full aspect-video object-contain object-center"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.currentTarget.src = "/projects/placeholder.png";
            }}
          />
        </div>
        <span
          className={`absolute top-2 right-2 rounded-full px-2.5 py-1 text-xs font-semibold ${
            STATUS_STYLES[status] ||
            "bg-slate-500/15 text-slate-300 border border-slate-400/20"
          }`}
        >
          {status}
        </span>
      </div>

      <div className="flex-1 px-1 pt-3 pb-2 flex flex-col">
        <h3 className="font-semibold leading-snug">{title}</h3>
        <p className="mt-2 text-sm opacity-90 leading-relaxed">{desc}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {techs.map((t) => (
            <span
              key={t}
              className={`${CHIP} ${
                TECH_STYLES[t] ||
                "bg-slate-500/15 text-slate-300 border-slate-400/20"
              }`}
              title={t}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4">
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className={BTN_PRIMARY}
          >
            {button || "View Live"}
          </a>
        </div>
      </div>
    </article>
  );
});
