// src/styles/motionPresets.js

/**
 * Returns true if the user has requested reduced motion.
 * Safe to call on the server (returns false).
 */
export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === true;

// Backdrop / overlay
export const MODAL_BACKDROP_MOTION = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

// Modal body
export const MODAL_BODY_MOTION = prefersReducedMotion()
  ? {}
  : {
      initial: { scale: 0.9, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 0.9, opacity: 0 },
    };

// Shared transition
export const MODAL_TRANSITION = prefersReducedMotion()
  ? { duration: 0 }
  : { duration: 0.22, ease: "easeOut" };

// Reusable page/section motion preset
export const PAGE_MOTION = prefersReducedMotion()
  ? { initial: false, animate: {}, exit: {} }
  : {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -10 },
    };

export const PAGE_TRANSITION = prefersReducedMotion()
  ? { duration: 0 }
  : { duration: 0.22, ease: "easeOut" };
