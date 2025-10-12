import React from 'react';
import { Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SkillCard({ category, skills: skillList }) {
  return (
    <motion.div
      className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 2xl:p-10 border border-slate-700 hover:border-cyan-500/50 transition h-full"
      whileHover={{ scale: 1.05, borderColor: '#06b6d4' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-cyan-400 mb-4 sm:mb-6 lg:mb-8 pb-2 sm:pb-3 lg:pb-4 border-b border-slate-600">
        {category}
      </h3>
      <div className="space-y-3">
        {skillList.map((skill, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-3 group"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <motion.div
              className="flex-shrink-0"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Zap className="w-4 h-4 text-cyan-400" />
            </motion.div>
            <span className="text-xs sm:text-sm lg:text-base text-slate-300 group-hover:text-cyan-300 transition">
              {skill}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}