import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  MODAL_BACKDROP_MOTION,
  MODAL_BODY_MOTION,
  MODAL_TRANSITION,
} from "../styles/motionPresets";
import { CERT_MODAL_BACKDROP, CERT_MODAL_BODY } from "../styles/uiStyles";

export default function ImageModal({
  open,
  onClose,
  img,
  title,
  subtitle,
  body,
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={CERT_MODAL_BACKDROP}
          onClick={onClose}
          {...MODAL_BACKDROP_MOTION}
          transition={MODAL_TRANSITION}
          aria-modal="true"
          role="dialog"
          aria-label={title}
        >
          <motion.div
            className={`${CERT_MODAL_BODY} max-w-3xl w-full mx-4 rounded-2xl p-6 relative`}
            onClick={(e) => e.stopPropagation()}
            {...MODAL_BODY_MOTION}
            transition={MODAL_TRANSITION}
          >
            <div className="w-full flex justify-center mb-6">
              <img
                src={img}
                alt={title}
                className="rounded-xl object-contain max-h-[360px]"
                decoding="async"
              />
            </div>

            <h3 className="text-xl font-semibold text-center mb-1">{title}</h3>

            {subtitle && (
              <p className="text-sm opacity-80 text-center mb-4">{subtitle}</p>
            )}

            {body && (
              <p className="text-base leading-relaxed text-justify mb-6">
                {body}
              </p>
            )}

            <div className="flex justify-center">
              <button
                onClick={onClose}
                className="mt-2 px-6 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
