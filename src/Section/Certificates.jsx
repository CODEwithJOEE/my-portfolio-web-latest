// src/Section/Certificates.jsx
import { motion } from "framer-motion";
import { CERTS } from "../data/certificates";
import CertCard from "../components/CertCard";
import { SECTION, SECTION_TITLE } from "../styles/uiStyles";

export default function Certificates() {
  return (
    <div className={SECTION}>
      <h2 className={SECTION_TITLE}>Certificates</h2>
      <p className="text-center opacity-80">Proof of skills and achievements</p>

      <div className="grid gap-4 sm:grid-cols-2">
        {CERTS.map((c, i) => (
          <motion.div
            key={c.title + c.date}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, delay: i * 0.06, ease: "easeOut" }}
          >
            <CertCard {...c} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
