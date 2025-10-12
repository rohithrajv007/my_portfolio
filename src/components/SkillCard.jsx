import React from 'react';
import { Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SkillCard({ category, skills: skillList }) {
  return (
    <motion.div
      className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition h-full"
      whileHover={{ scale: 1.05, borderColor: '#06b6d4' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-lg font-bold text-cyan-400 mb-4 pb-3 border-b border-slate-600">
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
            <span className="text-slate-300 text-sm group-hover:text-cyan-300 transition">
              {skill}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}