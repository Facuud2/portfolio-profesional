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
    title: 'FocuseAR - Planificador de estudios impulsado por Inteligencia Artificial',
    description: 'Una app web orientada para estudiantes que les permite poder planificar sus sesiones de estudio inviertiendo su tiempo en estudiar y no en planificar.',
    images: [
      'proyecto1_1.png',
      'proyecto1_2.png',
      'proyecto1_3.png',
    ],
    technologies: ['React', 'Firebase', 'Gemini API', 'Scrum', 'Kanban'],
    liveLink: 'https://focuse-ar.vercel.app/',
    repoLink: 'https://github.com/Facuud2/FocuseAR',
  },
  {
    id: 2,
    title: 'Comitas App - CMS para gestion de restaurantes',
    description: 'Un CMS ideado para locales gastronomicos que permite gestionar clientes, mesas y llevar un registro de visitas de clientes.',
    images: [
      'proyecto2_1.png',
      'proyecto2_2.png',
      'proyecto2_3.png',
    ],
    technologies: ['JavaScript', 'Spring', 'Java', 'TailwindCSS', 'SCSS'],
    liveLink: 'https://comitas-app.vercel.app/',
    repoLink: 'https://github.com/Facuud2/Comitas-App.git',
  },
  {
    id: 3,
    title: 'Automatizacion de tickets Zammad - Integracion de WhatsApp con sistema de ticketing Zammad',
    description: 'Un flujo de automatizacion usando n8n e integrandola con el sistema de ticketing Zammad orientado a empresas y organizaciones.',
    images: [
      'proyecto3_1.png',
      'proyecto3_2.png',
      'proyecto3_3.png',
    ],
    technologies: ['PostgreSQL', 'Docker', 'n8n', 'Inteligencia Artificial'],
    liveLink: '#',
    repoLink: 'https://github.com/FolkodeGroup/zammad-integracion-whatsapp',
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