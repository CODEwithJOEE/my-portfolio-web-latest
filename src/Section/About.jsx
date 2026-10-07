import MetricCard from "../components/MetricCard";
import {
  SECTION,
  SECTION_TITLE,
  SECTION_SUBTITLE,
  BTN_PRIMARY,
  BTN_SECONDARY,
} from "../styles/uiStyles";

export default function About({ onNavigate }) {
  return (
    <div className={SECTION}>
      <header>
        <h2 className={SECTION_TITLE}>About</h2>
        <p className={SECTION_SUBTITLE}>
          I build fast, accessible websites — currently shipping production
          features at OBI Services.
        </p>
      </header>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold">What I do</h3>
        <p className="leading-relaxed">
          I work across the front-end stack: <strong>React</strong> for
          componentized UIs, <strong>PHP + WordPress</strong> for content-heavy
          sites, and <strong>Kotlin</strong> when a project needs an Android
          app. My focus is clean architecture, SEO-friendly structure, and UX
          that holds up on a 3-year-old phone.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold">What I've shipped</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Maintained and improved{" "}
            <a
              href="https://obi.services/"
              target="_blank"
              rel="noreferrer"
              className="text-sky-400 underline underline-offset-4"
            >
              obi.services
            </a>{" "}
            — the corporate site — including SEO and load-time improvements.
          </li>
          <li>
            Built 8 projects end-to-end, from a Kotlin disaster-response app to
            a MongoDB-backed milk-tea ordering site.
          </li>
          <li>
            Administered network + OS upgrades across a university campus during
            a 200-hour OJT.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold">How I work</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Clarity first:</strong> define the goal before writing any
            code.
          </li>
          <li>
            <strong>Ship small:</strong> small, reviewable changes beat big-bang
            launches.
          </li>
          <li>
            <strong>Measure:</strong> if I say "faster," I have a number to back
            it up.
          </li>
          <li>
            <strong>Accessibility is default:</strong> semantic HTML and
            keyboard support aren't extras.
          </li>
        </ul>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <MetricCard kpi="1+" label="Year Professional" />
        <MetricCard kpi="8+" label="Projects Shipped" />
        <MetricCard kpi="3+" label="Live in Production" />
      </section>

      <div className="flex flex-wrap gap-3 pt-2">
        <button
          onClick={() => onNavigate?.("projects")}
          className={BTN_PRIMARY}
        >
          See My Work
        </button>
        <button
          onClick={() => onNavigate?.("contact")}
          className={BTN_SECONDARY}
        >
          Let’s Collaborate
        </button>
      </div>
    </div>
  );
}
