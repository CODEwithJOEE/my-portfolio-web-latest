// src/components/EduCard.jsx
import { useState } from "react";
import { EDU_CARD, EDU_ACCENT_BAR } from "../styles/uiStyles";
import ImageModal from "./ImageModal";

export default function EduCard({ name, subtitle, logo, details }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <article className={EDU_CARD}>
        <span className={EDU_ACCENT_BAR} />

        <div className="px-4 py-5 md:px-6 flex flex-col items-center text-center">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="focus:outline-none"
          >
            <img
              src={logo}
              alt={name}
              className="w-28 h-28 md:w-32 md:h-32 object-contain mb-3"
            />
          </button>

          <h3 className="font-semibold text-base md:text-lg">{name}</h3>
          <p className="mt-1 text-xs md:text-sm opacity-75">{subtitle}</p>
        </div>
      </article>

      {/* Shared modal (same look as certificates) */}
      <ImageModal
        open={open}
        onClose={() => setOpen(false)}
        img={logo}
        title={name}
        subtitle={subtitle}
        body={details} // this is your sentence instead of bullets
      />
    </>
  );
}
