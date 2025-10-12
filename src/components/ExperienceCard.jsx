import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';

export default function ExperienceCard({ experience }) {
  return (
    <motion.div
      className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-8 border border-slate-700 hover:border-cyan-500/50 transition"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div>
          <motion.h3
            className="text-2xl font-bold text-cyan-400 flex items-center gap-2"
            whileHover={{ x: 5 }}
          >
            <Briefcase className="w-6 h-6" /> {experience.role}
          </motion.h3>
          <p className="text-lg text-slate-300 mt-1">{experience.company}</p>
          <p className="text-slate-500 text-sm mt-1 flex items-center gap-1">
            <MapPin className="w-4 h-4" /> {experience.location}
          </p>
        </div>
        <span className="text-slate-400 font-semibold mt-4 md:mt-0">{experience.period}</span>
      </div>
      <ul className="space-y-2">
        {experience.highlights.map((highlight, i) => (
          <motion.li
            key={i}
            className="flex items-start gap-3 text-slate-300"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <span className="text-cyan-400 mt-1 font-bold">▸</span>
            <span>{highlight}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}