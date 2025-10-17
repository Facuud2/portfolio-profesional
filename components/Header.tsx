import React, { useState, useEffect } from 'react';
// FIX: Import `Variants` type from framer-motion to correctly type animation variants.
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { NAV_LINKS } from '../constants';
import type { NavLink } from '../types';
import { IoMenu, IoClose } from 'react-icons/io5';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    // FIX: Add Variants type to ensure correct type checking for framer-motion props.
    const menuVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, transition: { duration: 0.3 } }
    };

    // FIX: Add Variants type to ensure correct type checking for framer-motion props.
    const navContainerVariants: Variants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
    };

    // FIX: Add Variants type to solve the 'ease' property type error.
    // TypeScript was inferring 'easeOut' as a generic string, which is not assignable to framer-motion's Easing type.
    // By explicitly typing this object as Variants, we guide TypeScript to correctly interpret the 'ease' property.
    const navLinkVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
    };

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled || isMenuOpen ? 'bg-matte-black/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
                }`}
            >
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <a href="#inicio" className="text-2xl font-bold text-gold-accent hover:text-white transition-colors z-50">
                        FC
                    </a>
                    <ul className="hidden md:flex items-center space-x-8">
                        {NAV_LINKS.map((link: NavLink) => (
                            <li key={link.name}>
                                <a href={link.href} className="text-gray-300 hover:text-gold-accent transition-colors duration-300 font-medium">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="md:hidden z-50">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                            {isMenuOpen ? <IoClose className="h-8 w-8 text-white" /> : <IoMenu className="h-8 w-8 text-white" />}
                        </button>
                    </div>
                </nav>
            </motion.header>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 bg-matte-black/95 backdrop-blur-sm z-40 flex items-center justify-center"
                    >
                        <motion.ul
                            variants={navContainerVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-col items-center space-y-8"
                        >
                            {NAV_LINKS.map((link: NavLink) => (
                                <motion.li key={link.name} variants={navLinkVariants}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-gold-accent transition-colors duration-300 font-medium text-3xl"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;