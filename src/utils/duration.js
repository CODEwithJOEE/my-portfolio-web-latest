// src/utils/duration.js

/**
 * Returns the number of full months between two dates.
 * If `end` is omitted, uses "now".
 */
export function monthsBetween(startISO, endISO) {
  const start = new Date(startISO);
  const end = endISO ? new Date(endISO) : new Date();

  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return 0;

  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  // Adjust if we haven't reached the start day yet in the end month
  if (end.getDate() < start.getDate()) months -= 1;

  return Math.max(0, months);
}

/**
 * Formats a duration between two dates as a human string.
 * Examples: "1 month", "3 months", "1 year 2 months", "2 years"
 */
export function formatDuration(startISO, endISO) {
  const total = monthsBetween(startISO, endISO);
  if (total === 0) return "Less than a month";

  const years = Math.floor(total / 12);
  const months = total % 12;

  const parts = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? "year" : "years"}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? "month" : "months"}`);

  return parts.join(" ");
}

/**
 * Builds the full period label: "Apr 14, 2025 — Present (1 year 2 months)"
 * or "Aug 2024 — Apr 2025 (8 months)"
 */
export function buildPeriodLabel(startISO, endISO) {
  const fmt = (iso) =>
    new Date(iso).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });

  const startLabel = fmt(startISO);
  const endLabel = endISO ? fmt(endISO) : "Present";
  const duration = formatDuration(startISO, endISO);

  return `${startLabel} — ${endLabel} (${duration})`;
}
