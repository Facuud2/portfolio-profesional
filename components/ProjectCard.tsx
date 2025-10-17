import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../types';
import { ChevronLeftIcon, ChevronRightIcon } from './icons/ChevronIcons';
import { LiveIcon, RepoIcon } from './icons/ProjectIcons';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const isEven = index % 2 === 0;

  return (
    <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className={`grid md:grid-cols-2 gap-8 items-center bg-gray-900/50 p-8 rounded-lg shadow-xl`}
    >
      <div className={`relative w-full aspect-video overflow-hidden rounded-lg group ${isEven ? 'md:order-2' : ''}`}>
        <AnimatePresence initial={false}>
          <motion.img
            key={currentImageIndex}
            src={project.images[currentImageIndex]}
            alt={`${project.title} - vista ${currentImageIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeftIcon />
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRightIcon />
        </button>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
            {project.images.map((_, idx) => (
                <div key={idx} className={`w-2 h-2 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-gold-accent' : 'bg-gray-400'}`}></div>
            ))}
        </div>
      </div>
      
      <div className={`${isEven ? 'md:order-1' : ''}`}>
        <h3 className="text-2xl font-bold text-gold-accent mb-3">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <motion.span 
              key={tech} 
              className="bg-gray-700 text-gold-accent text-sm font-medium px-3 py-1 rounded-full cursor-default"
              whileHover={{ scale: 1.05, y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        <div className="flex space-x-4 mt-12">
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-4 py-2 bg-gold-accent text-black font-semibold rounded-lg hover:bg-gold-hover transition-colors hover:bg-yellow-500">
                <LiveIcon />
                Ver en vivo
            </a>
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-4 py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors">
                <RepoIcon />
                Repositorio
            </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;