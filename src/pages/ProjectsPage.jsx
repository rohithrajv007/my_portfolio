import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function ProjectsPage({ navigateTo }) {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [headerParticles, setHeaderParticles] = useState([]);
  const [projectParticles, setProjectParticles] = useState([]);

  // Generate particles for header and projects
  useEffect(() => {
    // Header particles
    const headerPs = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      startX: (Math.random() - 0.5) * 500,
      startY: (Math.random() - 0.5) * 300,
      delay: Math.random() * 0.6,
      duration: 1.3 + Math.random() * 0.7,
      size: Math.random() * 3 + 1.5,
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setHeaderParticles(headerPs);

    // Project grid particles
    const projectPs = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      startX: (Math.random() - 0.5) * 800,
      startY: (Math.random() - 0.5) * 600,
      delay: 0.8 + Math.random() * 0.6,
      duration: 1.4 + Math.random() * 0.8,
      size: Math.random() * 2.5 + 1,
      opacity: Math.random() * 0.4 + 0.2,
    }));
    setProjectParticles(projectPs);

    setPageLoaded(true);
  }, []);

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
        className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"
        animate={{
          y: [0, 100, 0],
          x: [0, 50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"
        animate={{
          y: [0, -100, 0],
          x: [0, -50, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="w-full max-w-sm sm:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto relative z-10">
        {/* Header with particle formation */}
        <div className="relative mb-12 sm:mb-16 lg:mb-20 xl:mb-24 2xl:mb-28">
          {/* Header particle container */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {headerParticles.map((particle) => (
              <Particle key={particle.id} particle={particle} />
            ))}
          </div>

          <motion.div
            className="relative text-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Title with gradient and animation */}
            <motion.h1
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Featured Projects
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl text-slate-400 mb-6 sm:mb-8 lg:mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              Production-grade systems and commercial solutions
            </motion.p>

            {/* Animated underline */}
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            />

            {/* Decorative lines - hidden on mobile, visible on larger screens */}
            <motion.div
              className="hidden sm:block absolute left-0 top-1/2 w-16 sm:w-20 h-px bg-gradient-to-r from-cyan-500/50 to-transparent"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            />
            <motion.div
              className="hidden sm:block absolute right-0 top-1/2 w-16 sm:w-20 h-px bg-gradient-to-l from-cyan-500/50 to-transparent"
              initial={{ scaleX: 0, originX: 1 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            />
          </motion.div>
        </div>

        {/* Project Grid with particle formation */}
        <div className="relative">
          {/* Project particle container */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {projectParticles.map((particle) => (
              <Particle key={`project-${particle.id}`} particle={particle} />
            ))}
          </div>

          {/* Grid layout - RESPONSIVE CLASSES PRESERVED */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 2,
                },
              },
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                  delay: 2 + index * 0.15,
                }}
              >
                <ProjectCard
                  project={project}
                  onClick={() => navigateTo(`project-${project.id}`)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom accent line */}
        <motion.div
          className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mt-20 sm:mt-24 lg:mt-28"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        />
      </div>

      {/* Floating side decorations - hidden on mobile to prevent overflow */}
      <motion.div
        className="hidden sm:block fixed left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-3xl sm:text-4xl opacity-10 pointer-events-none"
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        💻
      </motion.div>

      <motion.div
        className="hidden sm:block fixed right-2 sm:right-4 top-1/3 text-3xl sm:text-4xl opacity-10 pointer-events-none"
        animate={{
          y: [0, 30, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        🚀
      </motion.div>
    </div>
  );
}