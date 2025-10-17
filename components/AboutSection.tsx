import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="acerca" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="flex justify-center md:col-span-1">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-gold-accent shadow-lg">
              <img
                src="./images/profile.jpg"
                alt="Retrato de John Doe"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="md:col-span-2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Acerca de mí
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Soy un apasionado desarrollador de software con una sólida experiencia en la creación de aplicaciones web modernas y eficientes. Mi enfoque se centra en escribir código limpio, escalable y mantenible, utilizando las últimas tecnologías del ecosistema de JavaScript y el BackEnd con Java.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Disfruto resolviendo problemas complejos y colaborando en equipos para construir productos que ofrezcan una experiencia de usuario excepcional. Siempre estoy aprendiendo y buscando nuevas formas de mejorar mis habilidades y aportar valor en la tarea que se me asigne.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
