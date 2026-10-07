// ============================================================================
// UI STYLES — CENTRALIZED DESIGN SYSTEM
// Everything is dark-mode only (your app uses <html class="dark">)
// ============================================================================

// ============================================================================
// BASE ELEMENTS (CARD, SECTION, BUTTONS, CHIPS)
// ============================================================================

// Card style shared across all sections
export const CARD =
  "rounded-2xl border border-white/10 bg-slate-900/70 " +
  "shadow-none backdrop-blur-sm";

// Section container
export const SECTION = "space-y-6";

// Section titles & subtitles
export const SECTION_TITLE = "text-2xl md:text-3xl font-bold";
export const SECTION_SUBTITLE = "mt-2 text-slate-300/90 text-base";

// Base button
export const BTN_BASE =
  "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium " +
  "transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed";

// Primary button
export const BTN_PRIMARY =
  BTN_BASE + " bg-sky-300 text-black hover:bg-sky-400 shadow-sm";

// Secondary (outline) button
export const BTN_SECONDARY =
  BTN_BASE + " border border-white/10 bg-slate-900/60 hover:bg-slate-800";

// Pagination pill buttons
export const BTN_PILL =
  BTN_BASE +
  " px-3 py-2 border border-white/10 bg-slate-900/60 hover:bg-slate-800";

// Active pagination pill
export const BTN_PILL_ACTIVE =
  BTN_BASE + " px-3 py-2 bg-sky-600 text-white border border-sky-600";

// Chip (for tech badges / status tags)
export const CHIP =
  "inline-flex items-center rounded-full px-2.5 py-1 text-xs border border-white/10 " +
  "bg-slate-900/70";
//==============================================================================
// AVATAR
//=============================================================================

export const PROFILE_SECTION =
  "overflow-hidden rounded-full flex items-center justify-center";

export const PROFILE = "object-cover object-top w-full h-full rounded-full";

export const NO_IMAGE =
  "text-xs text-gray-400 dark:text-gray-500 text-center p-2";

// ============================================================================
// APP SHELL
// ============================================================================
export const APP_SHELL =
  "min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 " +
  "text-slate-100";

// ============================================================================
// HEADER
// ============================================================================

export const HEADER_BAR =
  "sticky top-0 z-40 backdrop-blur bg-slate-900/60 border-b border-white/10";

export const HEADER_BRAND_BUTTON =
  "text-lg font-semibold tracking-wide hover:opacity-90 transition";

// Desktop nav
export const HEADER_DESKTOP_NAV = "hidden md:flex items-center gap-6 text-sm";
export const HEADER_DESKTOP_LINK_BASE = "transition hover:opacity-90";
export const HEADER_DESKTOP_LINK_ACTIVE =
  "font-semibold underline underline-offset-4";
export const HEADER_DESKTOP_LINK_INACTIVE = "opacity-80";

// Mobile toggle button
export const HEADER_MOBILE_TOGGLE =
  "md:hidden inline-flex h-9 w-9 items-center justify-center rounded-xl " +
  "border border-white/10 hover:bg-white/5 transition";

// Mobile collapse wrapper
// uiStyles.js
export const HEADER_MOBILE_COLLAPSE =
  "md:hidden transition-[max-height,opacity] duration-200 " +
  "motion-reduce:transition-none";
// Enhanced mobile panel
export const HEADER_MOBILE_PANEL =
  "mt-3 rounded-2xl border border-white/10 bg-slate-900/95 " +
  "shadow-xl ring-1 ring-white/5 overflow-hidden";

// Mobile menu item base
export const HEADER_MOBILE_ITEM =
  "w-full text-left px-4 py-3 text-sm flex items-center justify-between " +
  "gap-2 transition border-b border-white/5 last:border-b-0 " +
  "hover:bg-white/5 active:bg-white/10";

// Mobile active / inactive states
export const HEADER_MOBILE_LINK_ACTIVE = "font-semibold text-sky-400";
export const HEADER_MOBILE_LINK_INACTIVE = "opacity-85";

// ============================================================================
// Skills ICONS
// ============================================================================
export const SKILL_PILL = `
  inline-flex items-center gap-2 rounded-full
  px-3 py-1 text-sm
  border border-white/10
  bg-white/5
  dark:bg-white/5
  transition-all hover:scale-105 hover:shadow-sm
`;

// ============================================================================
// ACTION PILL (for sidebar social/contact buttons)
// ============================================================================
export const ACTION_PILL =
  "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm " +
  "transition hover:bg-white/5 focus-visible:outline-none " +
  "focus-visible:ring-2 focus-visible:ring-blue-500/50";

// ============================================================================
// CERTIFICATES
// ============================================================================
export const CERT_CARD =
  "rounded-2xl border border-white/10 bg-white/5 shadow-none p-4 text-center " +
  "cursor-pointer hover:bg-white/10 transition";

export const CERT_IMG_WRAPPER =
  "mx-auto max-w-xs rounded-xl overflow-hidden border border-white/10 bg-white/5";

export const CERT_MODAL_BACKDROP =
  "fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50";

export const CERT_MODAL_BODY =
  "bg-slate-900 p-4 rounded-2xl max-w-3xl w-[90%] text-center shadow-lg";

// ============================================================================
// CONTACT CHIP
// ============================================================================
export const CONTACT_CHIP =
  "inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 " +
  "bg-white/5 hover:bg-white/10 transition shadow-none text-sm font-medium " +
  "focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-900";

// ============================================================================
// EDUCATION
// ============================================================================
export const EDU_CARD =
  "relative rounded-2xl border border-white/10 bg-white/5 shadow-none " +
  "overflow-hidden transition-transform hover:-translate-y-1";

export const EDU_ACCENT_BAR =
  "absolute left-0 top-0 h-full w-1.5 bg-sky-500/80";

// ============================================================================
// EXPERIENCE
// ============================================================================
export const EXP_CARD =
  "rounded-2xl border border-white/10 bg-white/5 shadow-none overflow-hidden";

export const EXP_CARD_HEADER = "flex items-center justify-between px-4 pt-4";

export const EXP_PERIOD =
  "mt-1 text-xs opacity-80 border-b border-white/10 pb-3";

// ============================================================================
// LAYOUT
// ============================================================================
export const LAYOUT_MAIN =
  "mx-auto max-w-6xl px-4 py-6 grid gap-6 grid-cols-1 " +
  "md:grid-cols-[320px_minmax(0,_1fr)]";

export const LAYOUT_FOOTER =
  "mx-auto max-w-6xl px-4 pb-10 text-xs opacity-70 text-slate-400";

// ============================================================================
// SIDEBAR
// ============================================================================

export const SIDEBAR_ASIDE = "rounded-2xl bg-transparent";

export const SIDEBAR_ACTIONS = "flex items-center gap-2 flex-wrap";

export const SIDEBAR_SUMMARY =
  "text-sm md:text-base opacity-90 leading-relaxed";

// ============================================================================
// EXPERIENCE ROLE BADGES
// ============================================================================

export const ROLE_BADGE = {
  "OJT Trainee": "bg-slate-500 text-white shadow-sm ring-1 ring-white/15",
  "Web Developer": "bg-sky-500 text-white shadow-sm ring-1 ring-white/15",
  Staff: "bg-emerald-500 text-white shadow-sm ring-1 ring-white/15",
};

// ============================================================================
// PROJECT STATUS & TECH TAGS
// ============================================================================

export const STATUS_STYLES = {
  Completed: "bg-emerald-500 text-white shadow-sm ring-1 ring-white/15",
  Ongoing: "bg-amber-500 text-white shadow-sm ring-1 ring-white/15",
  Live: "bg-sky-500 text-white shadow-sm ring-1 ring-white/15",
};

export const TECH_STYLES = {
  HTML: "bg-orange-500/15 text-orange-300 border border-orange-400/20",
  CSS: "bg-blue-500/15 text-blue-300 border border-blue-400/20",
  JavaScript: "bg-yellow-500/15 text-yellow-300 border border-yellow-400/20",
  MySQL: "bg-cyan-500/15 text-cyan-300 border border-cyan-400/20",
  Kotlin: "bg-indigo-500/15 text-indigo-300 border border-indigo-400/20",
  SQLite: "bg-teal-500/15 text-teal-300 border border-teal-400/20",
  WordPress: "bg-sky-500/15 text-sky-300 border border-sky-400/20",
  PHP: "bg-violet-500/15 text-violet-300 border border-violet-400/20",
  MongoDB: "bg-green-500/15 text-green-300 border border-green-400/20",
  Vite: "bg-purple-500/15 text-purple-300 border border-purple-400/20",
  Java: "bg-orange-500/15 text-orange-300 border border-orange-400/20",
  TailwindCss: "bg-sky-500/15 text-sky-300 border border-sky-400/20",
};

// ============================================================================
// TYPEWRITER TECH COLORS (SIDEBAR)
// ============================================================================

export const TECH_COLORS = {
  HTML: "text-orange-300",
  CSS: "text-blue-300",
  JavaScript: "text-yellow-300",
  Kotlin: "text-indigo-300",
  PHP: "text-violet-300",
  React: "text-cyan-300",
};

export const TECH_CURSOR = {
  HTML: "border-orange-300",
  CSS: "border-blue-300",
  JavaScript: "border-yellow-300",
  Kotlin: "border-indigo-300",
  PHP: "border-violet-300",
  React: "border-cyan-300",
};
