import { Mail, Github } from "lucide-react";
import { profile } from "../data/profile";
import useTypewriter from "../hooks/useTypewriter";
import useAge from "../hooks/useAge";
import { TECH_COLORS, TECH_CURSOR } from "../styles/uiStyles";

import ActionPill from "./ActionPill";
import Avatar from "./Avatar";
import {
  SIDEBAR_ASIDE,
  SIDEBAR_ACTIONS,
  SIDEBAR_SUMMARY,
  SECTION_TITLE,
} from "../styles/uiStyles";

export default function Sidebar({ onSelectContact }) {
  const typed = useTypewriter(profile.techRotation, {
    typeSpeed: 90,
    deleteSpeed: 50,
    holdTime: 1000,
    gapTime: 250,
  });
  const age = useAge(profile.birthDateISO);

  return (
    <aside className={SIDEBAR_ASIDE}>
      <div className="space-y-4">
        {/* Avatar */}
        <div className="aspect-square flex items-center justify-center">
          <Avatar
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            size="full"
            className="scale-105"
            isLCP
          />
        </div>

        <h2 className={SECTION_TITLE}>
          {profile.headlineGreeting}{" "}
          <span className="text-sky-400">{profile.name}</span>
        </h2>

        <p className={SIDEBAR_SUMMARY}>{profile.summary}</p>

        <p className="text-base md:text-lg">
          {profile.specialtiesLabel}{" "}
          <span
            className={`font-semibold transition-colors duration-300 drop-shadow-[0_0_4px_rgba(255,255,255,0.35)] ${
              TECH_COLORS[typed] || "text-sky-400"
            }`}
          >
            {typed}
          </span>
          <span
            className={`ml-0.5 inline-block w-[1ch] border-r-2 animate-pulse ${
              TECH_CURSOR[typed] || "border-sky-400"
            }`}
            aria-hidden
          />
        </p>

        {/* contact & socials */}
        <div className={SIDEBAR_ACTIONS}>
          <ActionPill as="button" onClick={onSelectContact} Icon={Mail}>
            {profile.ctas.contact}
          </ActionPill>

          <ActionPill href={profile.links.github} Icon={Github}>
            {profile.ctas.github}
          </ActionPill>
        </div>

        <p className="text-sm opacity-75">{profile.location}</p>
      </div>
    </aside>
  );
}
