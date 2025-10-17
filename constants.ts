import type { NavLink, Project, Skill } from './types';
import { 
    ReactIcon, TypeScriptIcon, JavaScriptIcon, DockerIcon, GitIcon, TailwindCssIcon,
    CommunicationIcon, TeamworkIcon, ProblemSolvingIcon, CriticalThinkingIcon, AdaptabilityIcon, LeadershipIcon
} from './components/icons/SkillIcons';

export const NAV_LINKS: NavLink[] = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Acerca de mí', href: '#acerca' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Habilidades', href: '#habilidades' },
  { name: 'Contacto', href: '#contacto' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Plataforma E-commerce Avanzada',
    description: 'Una solución de comercio electrónico completa con un panel de administración, pasarelas de pago y un diseño totalmente responsivo.',
    images: [
      'https://picsum.photos/seed/project1a/800/600',
      'https://picsum.photos/seed/project1b/800/600',
      'https://picsum.photos/seed/project1c/800/600',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
    liveLink: '#',
    repoLink: '#',
  },
  {
    id: 2,
    title: 'Aplicación de Gestión de Tareas',
    description: 'Una aplicación intuitiva para la gestión de tareas con funcionalidades de arrastrar y soltar, notificaciones y colaboración en equipo.',
    images: [
      'https://picsum.photos/seed/project2a/800/600',
      'https://picsum.photos/seed/project2b/800/600',
      'https://picsum.photos/seed/project2c/800/600',
    ],
    technologies: ['Vue.js', 'Firebase', 'Vuetify', 'TypeScript'],
    liveLink: '#',
    repoLink: '#',
  },
  {
    id: 3,
    title: 'Portfolio de Fotografía',
    description: 'Un sitio web elegante y minimalista para mostrar el trabajo de un fotógrafo profesional, optimizado para imágenes de alta resolución.',
    images: [
      'https://picsum.photos/seed/project3a/800/600',
      'https://picsum.photos/seed/project3b/800/600',
      'https://picsum.photos/seed/project3c/800/600',
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    liveLink: '#',
    repoLink: '#',
  },
];

export const TECHNICAL_SKILLS: Skill[] = [
    { name: 'React', icon: ReactIcon },
    { name: 'TypeScript', icon: TypeScriptIcon },
    { name: 'JavaScript', icon: JavaScriptIcon },
    { name: 'Docker', icon: DockerIcon },
    { name: 'Git', icon: GitIcon },
    { name: 'Tailwind CSS', icon: TailwindCssIcon },
];

export const SOFT_SKILLS: Skill[] = [
    { name: 'Comunicación', icon: CommunicationIcon },
    { name: 'Trabajo en Equipo', icon: TeamworkIcon },
    { name: 'Resolución de Problemas', icon: ProblemSolvingIcon },
    { name: 'Pensamiento Crítico', icon: CriticalThinkingIcon },
    { name: 'Adaptabilidad', icon: AdaptabilityIcon },
    { name: 'Liderazgo', icon: LeadershipIcon },
];