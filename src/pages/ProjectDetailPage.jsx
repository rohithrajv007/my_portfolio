import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

export default function ProjectDetailPage({ projectId, navigateTo }) {
  const project = projects.find(p => p.id === projectId);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [particles, setParticles] = useState([]);

  // Generate particles
  useEffect(() => {
    const ps = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      startX: (Math.random() - 0.5) * 600,
      startY: (Math.random() - 0.5) * 500,
      delay: Math.random() * 0.7,
      duration: 1.3 + Math.random() * 0.8,
      size: Math.random() * 3 + 1.5,
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setParticles(ps);
    setPageLoaded(true);
  }, []);

  if (!project) return null;

  // Particle component
  const Particle = ({ particle }) => (
    <motion.div
      className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 pointer-events-none"
      style={{
        width: particle.size,
        height: particle.size,
        boxShadow: `0 0 ${particle.size * 2}px rgba(6, 182, 212, 0.7)`,
      }}
      initial={{
        x: particle.startX,
        y: particle.startY,
        opacity: 0,
        scale: 0.5,
      }}
      animate={
        pageLoaded
          ? {
              x: 0,
              y: 0,
              opacity: [0, particle.opacity, particle.opacity, 0],
              scale: [0.5, 1, 1, 0.5],
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

  return (
    <div className="min-h-screen pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 -z-20" />

      {/* Animated background orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"
        animate={{ y: [0, 100, 0], x: [0, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"
        animate={{ y: [0, -100, 0], x: [0, -50, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Back Button */}
        <motion.button
          onClick={() => navigateTo('projects')}
          className="mb-8 sm:mb-10 lg:mb-12 flex items-center gap-2 text-xs sm:text-sm lg:text-base text-cyan-400 hover:text-cyan-300 transition group"
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            animate={{ x: [-5, 0, -5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rotate-180" />
          </motion.span>
          Back to Projects
        </motion.button>

        {/* Particle container */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle) => (
            <Particle key={particle.id} particle={particle} />
          ))}
        </div>

        {/* Main content card */}
        <motion.div
          className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-10 2xl:p-12 border border-slate-700 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 1, type: 'spring', stiffness: 100 }}
        >
          {/* Header */}
          <motion.div
            className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 sm:mb-8 lg:mb-10 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <div className="flex-1">
              <motion.div
                className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold mb-2 sm:mb-3 lg:mb-4 text-cyan-400"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.5 }}
              >
                {project.title}
              </motion.div>
              <motion.p
                className="text-sm sm:text-base lg:text-lg text-cyan-300 font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
              >
                {project.status}
              </motion.p>
            </div>
            <motion.span
              className="text-xs sm:text-sm lg:text-base px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-cyan-500/20 text-cyan-400 rounded-full font-medium h-fit border border-cyan-500/50"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              {project.category}
            </motion.span>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12 pb-8 sm:pb-10 lg:pb-12 border-b border-slate-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          >
            {[
              { label: 'Duration', value: project.duration },
              { label: 'Status', value: project.status, highlight: true },
              { label: 'Impact', value: project.impact, highlight: true }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.7 + idx * 0.1 }}
              >
                <p className="text-xs sm:text-sm text-slate-500 mb-1 sm:mb-2">{stat.label}</p>
                <p className={`text-base sm:text-lg lg:text-xl font-semibold ${stat.highlight ? 'text-cyan-400' : 'text-slate-300'}`}>
                  {stat.value}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Overview */}
          <motion.div
            className="mb-8 sm:mb-10 lg:mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Overview
            </h2>
            <p className="text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl text-slate-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </motion.div>

          {/* Key Achievements */}
          <motion.div
            className="mb-8 sm:mb-10 lg:mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Key Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {project.achievements.map((ach, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 p-4 sm:p-5 lg:p-6 bg-slate-800/50 rounded-lg lg:rounded-xl border border-slate-700 hover:border-cyan-500/50 transition group"
                  whileHover={{ scale: 1.05, borderColor: '#06b6d4' }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 2.2 + i * 0.05 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-400 flex-shrink-0" />
                  </motion.div>
                  <span className="text-xs sm:text-sm lg:text-base text-slate-200 group-hover:text-cyan-300 transition">
                    {ach}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technology Stack */}
          <motion.div
            className="mb-12 sm:mb-14 lg:mb-16"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Technology Stack
            </h2>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {project.tech.map((tech, i) => (
                <motion.span
                  key={i}
                  className="px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 text-cyan-300 rounded-lg font-semibold text-xs sm:text-sm lg:text-base hover:border-cyan-500/80 transition"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(34, 211, 238, 0.3)' }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 2.4 + i * 0.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Project Links Section */}
          <motion.div
            className="mt-12 sm:mt-14 lg:mt-16 pt-8 sm:pt-10 lg:pt-12 border-t border-slate-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10 lg:mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Project Links
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              {/* Live Demo Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.7, duration: 0.5 }}
              >
                {project.links?.live ? (
                  <motion.a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-full flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-4 sm:py-5 lg:py-6 bg-gradient-to-r from-cyan-500 to-blue-500 border border-cyan-500/50 rounded-lg lg:rounded-xl font-semibold text-sm sm:text-base lg:text-lg text-white overflow-hidden"
                    whileHover={{
                      scale: 1.08,
                      boxShadow: '0 20px 40px rgba(6, 182, 212, 0.6)',
                      y: -3,
                    }}
                    whileTap={{ scale: 0.92 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                      animate={{ x: ['100%', '-100%'] }}
                      transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1 }}
                    />

                    <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 relative z-10" />
                    <span className="relative z-10">View Live Demo</span>
                  </motion.a>
                ) : (
                  <div className="w-full text-center p-4 sm:p-5 lg:p-6 bg-slate-800/50 border border-slate-700 rounded-lg lg:rounded-xl">
                    <p className="text-xs sm:text-sm lg:text-base text-slate-400">
                      Project not deployed or free tier is inactive.
                    </p>
                  </div>
                )}
              </motion.div>

              {/* GitHub Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.8, duration: 0.5 }}
              >
                {project.links?.github ? (
                  <motion.a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-full flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-4 sm:py-5 lg:py-6 bg-gradient-to-r from-slate-700 to-slate-800 border border-slate-600 rounded-lg lg:rounded-xl font-semibold text-sm sm:text-base lg:text-lg text-slate-300 hover:text-white hover:border-cyan-500 transition overflow-hidden"
                    whileHover={{
                      scale: 1.08,
                      boxShadow: '0 20px 40px rgba(6, 182, 212, 0.4)',
                      y: -3,
                    }}
                    whileTap={{ scale: 0.92 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  >
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg opacity-0"
                      whileHover={{ opacity: 0.3 }}
                      transition={{ duration: 0.3 }}
                    />

                    <Github className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 relative z-10" />
                    <span className="relative z-10">View on GitHub</span>
                  </motion.a>
                ) : (
                  <div className="w-full text-center p-4 sm:p-5 lg:p-6 bg-slate-800/50 border border-slate-700 rounded-lg lg:rounded-xl">
                    <p className="text-xs sm:text-sm lg:text-base text-slate-400">
                      Internship project, GitHub access is private.
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}