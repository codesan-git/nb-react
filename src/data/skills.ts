// src/data/skills.ts
import type { Skill } from "@/types";

export const skills: Skill[] = [
  {
    name: "TypeScript",
    icon: "📘",
    color: "bg-brutal-blue dark:bg-brutal-blue",
    description: "Type-safe JavaScript untuk aplikasi yang robust",
    level: "Advanced",
  },
  {
    name: "Tailwind CSS",
    icon: "🎨",
    color: "bg-brutal-pink dark:bg-brutal-pink",
    description: "Utility-first CSS framework untuk styling cepat",
    level: "Expert",
  },
  {
    name: "Docker",
    icon: "🐳",
    color: "bg-brutal-yellow dark:bg-brutal-yellow",
    description: "Containerization untuk deployment yang konsisten",
    level: "Intermediate",
  },
  {
    name: "Nginx",
    icon: "🚀",
    color: "bg-brutal-green dark:bg-brutal-green",
    description: "Web server dan reverse proxy berkinerja tinggi",
    level: "Intermediate",
  },
  {
    name: "PostgreSQL",
    icon: "🐘",
    color: "bg-brutal-blue dark:bg-brutal-blue",
    description: "Sistem manajemen basis data relasional open source",
    level: "Intermediate",
  },
];
