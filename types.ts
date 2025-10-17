// FIX: Import FC type from react to avoid namespace error.
import type { FC } from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  liveLink?: string;
  repoLink?: string;
}

export interface Skill {
  name: string;
  // FIX: Use the imported FC type directly instead of React.FC.
  icon: FC<{ className?: string }>;
}

export interface NavLink {
    name: string;
    href: string;
}
