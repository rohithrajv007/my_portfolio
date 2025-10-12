import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';

export default function ExperienceCard({ experience }) {
  const [isInView, setIsInView] = useState(false);
  const [particlePositions, setParticlePositions] = useState([]);

  // Generate random particle positions
  useEffect(() => {
    const particles = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      startX: (Math.random() - 0.5) * 400,
      startY: (Math.random() - 0.5) * 400,
      delay: Math.random() * 0.6,
      duration: 1.2 + Math.random() * 0.8,
      size: Math.random() * 4 + 2,
      opacity: Math.random() * 0.6 + 0.4,
    }));
    setParticlePositions(particles);
  }, []);

  // Particle component
  const Particle = ({ particle }) => (
    <motion.div
      className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 pointer-events-none"
      style={{
        width: particle.size,
        height: particle.size,
        boxShadow: `0 0 ${particle.size * 2}px rgba(6, 182, 212, 0.6)`,
      }}
      initial={{
        x: particle.startX,
        y: particle.startY,
        opacity: 0,
      }}
      animate={
        isInView
          ? {
              x: 0,
              y: 0,
              opacity: [0, particle.opacity, particle.opacity, 0],
            }
          : {
              x: particle.startX,
              y: particle.startY,
              opacity: 0,
            }
      }
      transition={{
        duration: particle.duration,
        delay: particle.delay,
        ease: 'easeOut',
      }}
    />
  );

  // Connecting lines between particles
  const ConnectingLine = ({ particle1, particle2, progress }) => {
    const distance = Math.sqrt(
      Math.pow(particle2.startX - particle1.startX, 2) +
        Math.pow(particle2.startY - particle1.startY, 2)
    );

    if (distance > 120) return null;

    return (
      <motion.line
        x1={particle1.startX}
        y1={particle1.startY}
        x2={particle2.startX}
        y2={particle2.startY}
        stroke="rgba(6, 182, 212, 0.3)"
        strokeWidth="1"
        initial={{ opacity: 0, strokeDasharray: distance, strokeDashoffset: distance }}
        animate={
          isInView
            ? {
                opacity: [0, 0.5, 0.2, 0],
                strokeDashoffset: [distance, 0, 0, 0],
              }
            : { opacity: 0 }
        }
        transition={{
          duration: 1.5,
          delay: Math.min(particle1.delay, particle2.delay),
          ease: 'easeOut',
        }}
      />
    );
  };

  // Card reveal animation
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 },
    },
  };

  // Content reveal animation
  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.9 + i * 0.1,
        ease: 'easeOut',
      },
    }),
  };

  // Border glow animation
  const borderGlowVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0, 0.5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: 0.8,
      },
    },
  };

  return (
    <motion.div
      onViewportEnter={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
      viewport={{ once: false, amount: 0.5 }}
      className="relative"
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      variants={cardVariants}
    >
      {/* Particle container */}
      <div className="absolute inset-0 overflow-hidden rounded-xl lg:rounded-2xl pointer-events-none">
        {/* SVG for connecting lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-40"
          width="100%"
          height="100%"
          style={{
            filter: 'blur(0.5px)',
          }}
        >
          {particlePositions.slice(0, 40).map((particle1, i) =>
            particlePositions.slice(i + 1, i + 2).map((particle2, j) => (
              <ConnectingLine
                key={`${i}-${j}`}
                particle1={particle1}
                particle2={particle2}
                progress={0}
              />
            ))
          )}
        </svg>

        {/* Particles */}
        {particlePositions.map((particle) => (
          <Particle key={particle.id} particle={particle} />
        ))}
      </div>

      {/* Glow effect lines */}
      <motion.div
        className="absolute inset-0 rounded-xl lg:rounded-2xl pointer-events-none"
        variants={borderGlowVariants}
        initial="initial"
        animate="animate"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-transparent to-blue-500/20 rounded-xl lg:rounded-2xl blur-lg" />
      </motion.div>

      {/* Main Card */}
      <motion.div
        className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-10 2xl:p-12 border border-slate-700 hover:border-cyan-500/50 transition backdrop-blur-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        {/* Header section */}
        <motion.div
          className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 sm:mb-8 lg:mb-10"
          custom={0}
          variants={contentVariants}
        >
          <div className="flex-1">
            {/* Title with icon animation */}
            <motion.h3
              className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent flex items-center gap-2 sm:gap-3"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-cyan-400 flex-shrink-0" />
              </motion.div>
              {experience.role}
            </motion.h3>

            {/* Company */}
            <motion.p
              className="text-base sm:text-lg lg:text-xl text-slate-300 mt-2 sm:mt-3"
              custom={1}
              variants={contentVariants}
            >
              {experience.company}
            </motion.p>

            {/* Location */}
            <motion.p
              className="text-xs sm:text-sm lg:text-base text-slate-400 mt-1 sm:mt-2 flex items-center gap-1 sm:gap-2"
              custom={2}
              variants={contentVariants}
            >
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              {experience.location}
            </motion.p>
          </div>

          {/* Period */}
          <motion.div
            className="text-xs sm:text-sm lg:text-base text-slate-400 font-semibold mt-4 md:mt-0 px-3 sm:px-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700/50"
            custom={3}
            variants={contentVariants}
            whileHover={{
              backgroundColor: 'rgba(6, 182, 212, 0.1)',
              borderColor: 'rgba(6, 182, 212, 0.5)',
            }}
          >
            {experience.period}
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-6 sm:mb-8 lg:mb-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        />

        {/* Highlights */}
        <motion.ul className="space-y-3 sm:space-y-4 lg:space-y-5">
          {experience.highlights.map((highlight, i) => (
            <motion.li
              key={i}
              className="flex items-start gap-2 sm:gap-3 group"
              custom={4 + i}
              variants={contentVariants}
              whileHover={{ x: 5 }}
            >
              {/* Animated bullet */}
              <motion.span
                className="text-cyan-400 mt-0.5 sm:mt-1 font-bold flex-shrink-0"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                ▸
              </motion.span>

              {/* Text */}
              <span className="text-xs sm:text-sm lg:text-base text-slate-300 group-hover:text-cyan-300 transition">
                {highlight}
              </span>

              {/* Hover line */}
              <motion.div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-500/20 to-transparent rounded pointer-events-none"
                initial={{ opacity: 0, width: 0 }}
                whileHover={{ opacity: 1, width: '100%' }}
                transition={{ duration: 0.3 }}
                style={{ zIndex: -1 }}
              />
            </motion.li>
          ))}
        </motion.ul>

        {/* Bottom accent line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent rounded-b-xl lg:rounded-b-2xl"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        />
      </motion.div>

      {/* Corner glow effects */}
      <motion.div
        className="absolute top-0 left-0 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none -z-10"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.9,
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl pointer-events-none -z-10"
        animate={{
          opacity: [0.2, 0.3, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.9,
        }}
      />
    </motion.div>
  );
}