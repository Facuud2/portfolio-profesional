import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, MailIcon } from './icons/SocialIcons';

const ContactSection: React.FC = () => {
  return (
    <section id="contacto" className="py-20 bg-matte-black">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Hablemos
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto mb-8"
        >
          Estoy abierto a nuevas oportunidades y colaboraciones. ¡No dudes en contactarme!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center items-center space-x-6"
        >
          <a href="mailto:facundocarri@hotmail.com.ar" className="text-gray-400 hover:text-gold-accent transition-colors">
            <MailIcon />
          </a>
          <a href="https://github.com/facuud2" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-accent transition-colors">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/facundo-dev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-accent transition-colors">
            <LinkedinIcon />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
