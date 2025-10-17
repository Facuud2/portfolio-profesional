import React from 'react';
import { motion } from 'framer-motion';
import { TECHNICAL_SKILLS, SOFT_SKILLS } from '../constants';
import type { Skill } from '../types';

const SkillsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="habilidades" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
        >
          Habilidades
        </motion.h2>
        
        <div className="grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-start">
          {/* Columna de Habilidades Blandas */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-16 md:mb-0"
          >
            <h3 className="text-2xl font-bold text-gold-accent text-center mb-8">Habilidades Blandas</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center"
            >
              {SOFT_SKILLS.map((skill: Skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gold-accent/90 hover:text-matte-black transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center justify-center aspect-square"
                >
                  <skill.icon className="w-10 h-10 mb-2" />
                  <p className="font-semibold text-sm sm:text-base">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Divisor Vertical */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:block w-px bg-gray-700 self-stretch"
          ></motion.div>
          
          {/* Columna de Habilidades Técnicas */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, amount: 0.3 }}
             transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-blue-accent text-center mb-8">Habilidades Técnicas</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center"
            >
              {TECHNICAL_SKILLS.map((skill: Skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-blue-accent hover:text-white transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center justify-center aspect-square"
                >
                   <skill.icon className="w-10 h-10 mb-2" />
                   <p className="font-semibold text-sm sm:text-base">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;