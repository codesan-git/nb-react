// src/types/index.ts
export interface NavItem {
  icon: string;
  label: string;
  href?: string;
  onClick?: () => void;
  active?: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  color: string;
  description: string;
  level: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  color: string;
  icon: string;
}
