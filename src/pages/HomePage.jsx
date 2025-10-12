import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedBg from '../components/AnimatedBg';

export default function HomePage({ navigateTo }) {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [heroParticles, setHeroParticles] = useState([]);
  const [featureParticles, setFeatureParticles] = useState([]);

  // Generate particles for hero section
  useEffect(() => {
    const heroPs = Array.from({ length: 120 }, (_, i) => ({
      id: i,
      startX: (Math.random() - 0.5) * 600,
      startY: (Math.random() - 0.5) * 600,
      delay: Math.random() * 0.8,
      duration: 1.4 + Math.random() * 0.8,
      size: Math.random() * 3 + 1.5,
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setHeroParticles(heroPs);

    const featurePs = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      startX: (Math.random() - 0.5) * 400,
      startY: (Math.random() - 0.5) * 400,
      delay: 1 + Math.random() * 0.6,
      duration: 1.2 + Math.random() * 0.6,
      size: Math.random() * 2.5 + 1,
      opacity: Math.random() * 0.4 + 0.2,
    }));
    setFeatureParticles(featurePs);

    setPageLoaded(true);
  }, []);

  // Particle component
  const Particle = ({ particle, delay = 0 }) => (
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
        delay: particle.delay + delay,
        ease: 'easeOut',
      }}
    />
  );

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 1.4 + index * 0.1,
        type: 'spring',
        stiffness: 200,
        damping: 20,
      },
    }),
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-20 sm:pt-24 lg:pt-28 overflow-hidden">
        <AnimatedBg />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />

        {/* Hero Particle Container */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {heroParticles.map((particle) => (
            <Particle key={particle.id} particle={particle} />
          ))}
        </div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 w-full max-w-sm sm:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl text-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Welcome Badge */}
          <motion.div
            className="inline-block mb-4 sm:mb-6 lg:mb-8 px-3 sm:px-4 lg:px-6 py-1 sm:py-2 lg:py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-xs sm:text-sm lg:text-base font-medium"
            variants={item}
          >
            ✨ Welcome to my portfolio
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight"
            variants={item}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Engineer & Full-Stack Developer
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-slate-300 mb-3 sm:mb-4 lg:mb-6 max-w-full sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-2 sm:px-0"
            variants={item}
          >
            Crafting intelligent systems, production-grade solutions, and innovative applications
          </motion.p>

          {/* Location & Specialization */}
          <motion.p
            className="text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl text-slate-400 mb-6 sm:mb-8 lg:mb-10 max-w-full sm:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-0"
            variants={item}
          >
            📍 Bengaluru, Karnataka | Specializing in LLMs, RAG, Full-Stack Development
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex gap-3 sm:gap-4 lg:gap-6 justify-center flex-wrap mb-8 sm:mb-10 lg:mb-12"
            variants={item}
          >
            <motion.button
              onClick={() => navigateTo('projects')}
              className="px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-2 sm:py-3 lg:py-4 xl:py-5 2xl:py-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition flex items-center gap-2 text-xs sm:text-sm lg:text-base xl:text-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </motion.button>
            <motion.button
              onClick={() => navigateTo('contact')}
              className="px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-2 sm:py-3 lg:py-4 xl:py-5 2xl:py-6 border border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition text-xs sm:text-sm lg:text-base xl:text-lg"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(34, 211, 238, 0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-3 sm:gap-4 lg:gap-6"
            variants={item}
          >
            {[
              { icon: Github, href: 'https://github.com/rohithrajv007', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/rohith-v-raj', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:rajrohith.003@gmail.com', label: 'Email' }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 lg:p-4 xl:p-5 2xl:p-6 bg-slate-800/50 hover:bg-cyan-500/20 rounded-lg transition border border-slate-700 hover:border-cyan-500"
                custom={i}
                variants={socialVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                title={social.label}
              >
                <social.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Stats/Features Section */}
      <section className="relative w-full py-8 sm:py-12 lg:py-16 xl:py-20 2xl:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 bg-slate-900/30 overflow-hidden">
        {/* Feature Particle Container */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {featureParticles.map((particle) => (
            <Particle key={particle.id} particle={particle} delay={0} />
          ))}
        </div>

        <motion.div className="w-full max-w-sm sm:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
            {[
              {
                icon: '🚀',
                title: 'Production Systems',
                desc: 'Built and deployed scalable AI/ML systems'
              },
              {
                icon: '🧠',
                title: 'AI Expertise',
                desc: 'Specialized in LLM fine-tuning and RAG systems'
              },
              {
                icon: '⚡',
                title: 'Full-Stack Dev',
                desc: 'End-to-end development capabilities'
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                className="p-4 sm:p-6 lg:p-8 xl:p-10 2xl:p-12 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl lg:rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition group h-full backdrop-blur-sm"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{
                  duration: 0.6,
                  delay: 1.6 + idx * 0.15,
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                }}
              >
                <motion.div
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-3 sm:mb-4 lg:mb-6"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.6 + idx * 0.1 }}
                >
                  {card.icon}
                </motion.div>

                <motion.h3
                  className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 sm:mb-3 lg:mb-4 group-hover:text-cyan-400 transition"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.7 + idx * 0.15, duration: 0.5 }}
                >
                  {card.title}
                </motion.h3>

                <motion.p
                  className="text-xs sm:text-sm lg:text-base xl:text-lg text-slate-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.75 + idx * 0.15, duration: 0.5 }}
                >
                  {card.desc}
                </motion.p>

                {/* Card accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-b-xl lg:rounded-b-2xl"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{
                    delay: 1.8 + idx * 0.15,
                    duration: 0.5,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}