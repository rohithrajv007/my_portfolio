import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingAnimation() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <motion.div
        className="relative w-24 h-24"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      >
        <motion.div
          className="absolute inset-0 border-4 border-transparent border-t-cyan-400 border-r-blue-500 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-2 border-4 border-transparent border-b-cyan-400 border-l-blue-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>
      <motion.p
        className="absolute text-cyan-400 font-semibold"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Loading...
      </motion.p>
    </div>
  );
}