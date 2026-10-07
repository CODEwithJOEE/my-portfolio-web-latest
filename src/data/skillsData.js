import {
  FaPhp,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaWordpress,
  FaGithub,
  FaFigma,
  FaReact,
} from "react-icons/fa";

import {
  SiKotlin,
  SiMysql,
  SiSqlite,
  SiCanva,
  SiXampp,
  SiVite,
  SiTailwindcss,
  SiVercel,
  SiNextdotjs,
  SiSupabase,
} from "react-icons/si";

export const skillsGroups = [
  {
    title: "Languages",
    skills: [
      { name: "PHP", icon: FaPhp, color: "#8892be" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
      { name: "HTML", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
    ],
  },
  {
    title: "Libraries & Frameworks",
    skills: [
      { name: "React", icon: FaReact, color: "#61DBFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" }, // ✅ white
    ],
  },
  {
    title: "Build Tools & Styling", // ✅ bagong pangalan
    skills: [
      {
        name: "WordPress (themes & plugins)",
        icon: FaWordpress,
        color: "#21759B",
      },
      { name: "Vite", icon: SiVite, color: "#41D1FF" },
      { name: "TailWind CSS", icon: SiTailwindcss, color: "#38bdf8" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "SQLite", icon: SiSqlite, color: "#0D597F" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    ],
  },
  {
    title: "Version Control & Collaboration",
    skills: [{ name: "Git / GitHub", icon: FaGithub, color: "#FFFFFF" }], // ✅ white
  },
  {
    title: "UI/UX & Design",
    skills: [
      { name: "Canva", icon: SiCanva, color: "#07B9CE" },
      { name: "Figma", icon: FaFigma, color: "#F24E1E" },
    ],
  },
  {
    title: "Hosting & Deployment",
    skills: [
      { name: "XAMPP", icon: SiXampp, color: "#FB7A24" },
      { name: "GitHub Pages", icon: FaGithub, color: "#FFFFFF" }, // ✅ white
      { name: "WordPress Hosting", icon: FaWordpress, color: "#21759B" },
      { name: "Vercel app", icon: SiVercel, color: "#FFFFFF" }, // ✅ white
    ],
  },
  {
    title: "Strengths",
    skills: [
      { name: "Clean & Maintainable Code" },
      { name: "Problem-Solving" },
      { name: "Accessibility-First Approach" },
      { name: "SEO Awareness" },
      { name: "Continuous Learning" },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Team Collaboration" },
      { name: "Client Communication" },
      { name: "Time Management" },
      { name: "Adaptability" },
      { name: "Project Ownership" },
    ],
  },
];
