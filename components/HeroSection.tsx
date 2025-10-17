import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center text-center bg-matte-black">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Hola, soy John Doe
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-gold-accent mb-8"
        >
          Desarrollador de Software & Entusiasta de la Tecnología
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          href="#proyectos"
          className="bg-gold-accent text-matte-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
        >
          Ver mi trabajo
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
