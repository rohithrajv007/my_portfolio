import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-6 sm:py-8 lg:py-10 2xl:py-12 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 border-t border-slate-800 text-center text-slate-500 bg-slate-950/50">
      <motion.p
        className="mb-4 text-xs sm:text-sm lg:text-base"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        © 2025 Rohith Raj. AI Engineer | Data Scientist | Full-Stack Developer
      </motion.p>
      <motion.div
        className="flex justify-center gap-2 sm:gap-3 lg:gap-4 text-xs sm:text-sm lg:text-base"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <a href="https://github.com/rohithrajv007" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
          GitHub
        </a>
        <span>•</span>
        <a href="https://linkedin.com/in/rohith-v-raj" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
          LinkedIn
        </a>
        <span>•</span>
        <a href="mailto:rajrohith.003@gmail.com" className="hover:text-cyan-400 transition">
          Email
        </a>
      </motion.div>
    </footer>
  );
}
