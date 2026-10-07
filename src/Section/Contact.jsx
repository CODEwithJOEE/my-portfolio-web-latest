// src/Section/Contact.jsx
import { useState } from "react";
import { MdContentCopy } from "react-icons/md";

import ContactChip from "../components/ContactChip";
import { CONTACTS, EMAIL } from "../data/contactData";
import { PERSON_SCHEMA } from "../data/personSchema";
import { SKILL_PILL, SECTION, SECTION_TITLE } from "../styles/uiStyles";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Clipboard might not be available (HTTP, older browsers, etc.)
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <div className={SECTION}>
      <header>
        <h2 className={SECTION_TITLE}>Contact</h2>
        <p className="opacity-80 text-sm md:text-base">
          Reach me on any platform below.{" "}
          <span className="opacity-70">I typically reply within 24 hours.</span>
        </p>
      </header>

      {/* Contact chips */}
      <div className="flex flex-wrap gap-3">
        {CONTACTS.map((c) => (
          <ContactChip key={c.name} {...c} />
        ))}

        {/* Copy email button */}
        <button type="button" onClick={copyEmail} className={SKILL_PILL}>
          <MdContentCopy size={18} className="opacity-80" />
          {copied ? "Email copied!" : "Copy Email"}
        </button>

        {/* SR-only status for screen readers */}
        <span aria-live="polite" className="sr-only">
          {copied ? "Email copied to clipboard" : ""}
        </span>
      </div>

      {/* JSON-LD for Person */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(PERSON_SCHEMA),
        }}
      />
    </div>
  );
}
