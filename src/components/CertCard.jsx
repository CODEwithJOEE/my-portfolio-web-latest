// src/components/CertCard.jsx
import { useEffect, useState } from "react";
import { CERT_CARD, CERT_IMG_WRAPPER } from "../styles/uiStyles";
import ImageModal from "./ImageModal";

export default function CertCard({ title, issuer, date, img }) {
  const [show, setShow] = useState(false);

  // ESC to close (keep this, it still works with ImageModal)
  useEffect(() => {
    if (!show) return;
    const onKey = (e) => e.key === "Escape" && setShow(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [show]);

  return (
    <>
      {/* Card */}
      <article
        onClick={() => setShow(true)}
        className={CERT_CARD}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setShow(true)}
        aria-label={`Open certificate: ${title}`}
      >
        <div className={CERT_IMG_WRAPPER}>
          <img
            src={img}
            alt={title}
            className="w-full object-cover"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.currentTarget.src = "/certificates/placeholder.jpg";
            }}
          />
        </div>

        <h3 className="mt-3 font-semibold">{title}</h3>
        <p className="text-sm opacity-80">
          Issued by {issuer} — {date}
        </p>
      </article>

      {/* Shared modal */}
      <ImageModal
        open={show}
        onClose={() => setShow(false)}
        img={img}
        title={title}
        subtitle={`Issued by ${issuer} — ${date}`}
      />
    </>
  );
}
