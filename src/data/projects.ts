// src/data/projects.ts
import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Project Alpha",
    description: "E-commerce platform dengan React dan Node.js",
    tech: ["React", "Node.js", "MongoDB"],
    color: "bg-brutal-yellow dark:bg-brutal-pink",
    icon: "🛍️",
  },
  {
    title: "Project Beta",
    description: "Dashboard analytics untuk visualisasi data",
    tech: ["Next.js", "TypeScript", "D3.js"],
    color: "bg-brutal-blue dark:bg-brutal-green",
    icon: "📊",
  },
  {
    title: "Project Gamma",
    description: "Mobile app untuk manajemen tugas harian",
    tech: ["React Native", "Firebase"],
    color: "bg-brutal-green dark:bg-brutal-orange",
    icon: "✅",
  },
  {
    title: "Project Delta",
    description: "Landing page untuk startup teknologi",
    tech: ["Vue.js", "Tailwind CSS"],
    color: "bg-brutal-pink dark:bg-brutal-purple",
    icon: "🚀",
  },
];
