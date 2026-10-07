import { lazy, Suspense, useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";
import { APP_SHELL } from "./styles/uiStyles";
import {
  Home,
  User,
  Briefcase,
  Phone,
  BookOpenCheck,
  Award,
} from "lucide-react";

// Lazy-load sections (code splitting)
const About = lazy(() => import("./Section/About"));
const Projects = lazy(() => import("./Section/Projects"));
const Experience = lazy(() => import("./Section/Experience"));
const Skills = lazy(() => import("./Section/Skills"));
const Education = lazy(() => import("./Section/Education"));
const Contact = lazy(() => import("./Section/Contact"));
const Certificates = lazy(() => import("./Section/Certificates"));

const PAGES = [
  { id: "about", label: "About", icon: <User size={16} />, Component: About },
  {
    id: "projects",
    label: "Project",
    icon: <Briefcase size={16} />,
    Component: Projects,
  },
  {
    id: "experience",
    label: "Experience",
    icon: <BookOpenCheck size={16} />,
    Component: Experience,
  },
  {
    id: "skills",
    label: "Skills",
    icon: <Home size={16} />,
    Component: Skills,
  },
  {
    id: "education",
    label: "Education",
    icon: <Award size={16} />,
    Component: Education,
  },
  {
    id: "contact",
    label: "Contact",
    icon: <Phone size={16} />,
    Component: Contact,
  },
  {
    id: "certificates",
    label: "Certificates",
    icon: <Award size={16} />,
    Component: Certificates,
  },
];

export default function App() {
  const [active, setActive] = useState("about");

  const navPages = PAGES.map(({ id, label, icon }) => ({ id, label, icon }));
  const Active = PAGES.find((p) => p.id === active)?.Component ?? About;

  const onNavigate = useCallback((id) => setActive(id), []);
  const onSelectContact = useCallback(() => setActive("contact"), []);

  return (
    <div className={APP_SHELL}>
      <Header pages={navPages} active={active} onSelect={onNavigate} />

      <Layout
        left={<Sidebar onSelectContact={onSelectContact} />}
        right={
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <Suspense fallback={<SectionFallback />}>
                <Active onNavigate={onNavigate} />
              </Suspense>
            </motion.div>
          </AnimatePresence>
        }
        footer="Joemarie Ronday"
      />
    </div>
  );
}

function SectionFallback() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-sky-400 border-t-transparent" />
    </div>
  );
}
