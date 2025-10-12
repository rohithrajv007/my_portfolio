import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-8 border border-slate-700 hover:border-cyan-500 transition duration-300 cursor-pointer"
      whileHover={{ scale: 1.03, y: -10 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start justify-between mb-4">
        <motion.div
          className="text-6xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {project.image}
        </motion.div>
        <span className="text-xs px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full font-medium">
          {project.category}
        </span>
      </div>
      <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition">
        {project.title}
      </h3>
      <p className="text-slate-400 mb-4 line-clamp-2">{project.description}</p>
      
      <div className="mb-4 pb-4 border-b border-slate-700">
        <p className="text-sm text-slate-500 mb-2">Key Achievements:</p>
        <div className="flex flex-wrap gap-2">
          {project.achievements.slice(0, 3).map((ach, i) => (
            <motion.span
              key={i}
              className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded font-medium flex items-center gap-1"
              whileHover={{ scale: 1.1 }}
            >
              <Check className="w-3 h-3" /> {ach}
            </motion.span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.slice(0, 4).map((tech, i) => (
          <motion.span
            key={i}
            className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded"
            whileHover={{ backgroundColor: '#06b6d4', color: '#fff' }}
          >
            {tech}
          </motion.span>
        ))}
      </div>

      <motion.button
        className="w-full py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 rounded-lg text-cyan-400 font-semibold hover:from-cyan-500/40 hover:to-blue-500/40 transition"
        whileHover={{ borderColor: '#06b6d4' }}
      >
        View Details <ArrowRight className="w-4 h-4 inline ml-2" />
      </motion.button>
    </motion.div>
  );
}