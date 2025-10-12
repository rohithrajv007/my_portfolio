import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SkillCard from '../components/SkillCard';
import ExperienceCard from '../components/ExperienceCard';
import { skills } from '../data/skills';
import { experience, certifications } from '../data/experience';

export default function AboutPage() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [headerParticles, setHeaderParticles] = useState([]);
  const [summaryParticles, setSummaryParticles] = useState([]);
  const [experienceParticles, setExperienceParticles] = useState([]);
  const [skillsParticles, setSkillsParticles] = useState([]);
  const [certParticles, setCertParticles] = useState([]);

  // Generate particles for all sections
  useEffect(() => {
    const headerPs = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      startX: (Math.random() - 0.5) * 500,
      startY: (Math.random() - 0.5) * 300,
      delay: Math.random() * 0.5,
      duration: 1.2 + Math.random() * 0.6,
      size: Math.random() * 3 + 1.5,
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setHeaderParticles(headerPs);

    const summaryPs = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      startX: (Math.random() - 0.5) * 400,
      startY: (Math.random() - 0.5) * 350,
      delay: 0.6 + Math.random() * 0.4,
      duration: 1.1 + Math.random() * 0.5,
      size: Math.random() * 2.5 + 1,
      opacity: Math.random() * 0.4 + 0.2,
    }));
    setSummaryParticles(summaryPs);

    const experiencePs = Array.from({ length: 70 }, (_, i) => ({
      id: i,
      startX: (Math.random() - 0.5) * 600,
      startY: (Math.random() - 0.5) * 400,
      delay: 1.2 + Math.random() * 0.5,
      duration: 1.3 + Math.random() * 0.6,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.3 + 0.2,
    }));
    setExperienceParticles(experiencePs);

    const skillsPs = Array.from({ length: 90 }, (_, i) => ({
      id: i,
      startX: (Math.random() - 0.5) * 700,
      startY: (Math.random() - 0.5) * 500,
      delay: 1.8 + Math.random() * 0.5,
      duration: 1.4 + Math.random() * 0.7,
      size: Math.random() * 2.5 + 1,
      opacity: Math.random() * 0.3 + 0.2,
    }));
    setSkillsParticles(skillsPs);

    const certPs = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      startX: (Math.random() - 0.5) * 500,
      startY: (Math.random() - 0.5) * 350,
      delay: 2.4 + Math.random() * 0.5,
      duration: 1.2 + Math.random() * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.3 + 0.2,
    }));
    setCertParticles(certPs);

    setPageLoaded(true);
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
    <div className="min-h-screen pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background orbs */}
      <motion.div
        className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"
        animate={{ y: [0, 80, 0], x: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"
        animate={{ y: [0, -80, 0], x: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="w-full max-w-sm sm:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="relative mb-20 sm:mb-24 lg:mb-28 xl:mb-32 2xl:mb-36">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {headerParticles.map((particle) => (
              <Particle key={particle.id} particle={particle} />
            ))}
          </div>

          <motion.div
            className="relative text-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h1
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              About Me
            </motion.h1>

            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto mt-6 sm:mt-8 lg:mt-10 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            />
          </motion.div>
        </div>

        {/* Summary Section */}
        <div className="relative mb-20 sm:mb-24 lg:mb-28 xl:mb-32">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {summaryParticles.map((particle) => (
              <Particle key={`summary-${particle.id}`} particle={particle} />
            ))}
          </div>

          <div className="relative grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 2xl:gap-12">
            <motion.div
              className="lg:col-span-2 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-10 2xl:p-12 border border-slate-700 hover:border-cyan-500/50 transition backdrop-blur-sm"
              initial={{ opacity: 0, x: -40, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 1.4, type: 'spring', stiffness: 100 }}
            >
              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                Professional Summary
              </motion.h2>
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                {[
                  "I'm a Computer Science graduate with a Data Science specialization, passionate about building intelligent systems and production-grade solutions. With expertise in AI/ML, LLMs, and full-stack development, I've successfully delivered commercial products that generate 1000+ leads weekly and achieved 94% accuracy in medical AI applications.",
                  "My journey combines hands-on problem-solving with continuous learning. I specialize in architecting scalable systems, fine-tuning LLMs for domain-specific applications, and mentoring technical teams on best practices in full-stack development and machine learning.",
                  "Currently at Champions Group, I'm building multi-agent LLM systems and automation platforms that solve real-world business challenges at scale."
                ].map((text, idx) => (
                  <motion.p
                    key={idx}
                    className="text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl text-slate-300 leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 + idx * 0.1, duration: 0.5 }}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              className="space-y-3 sm:space-y-4 lg:space-y-6"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.4, type: 'spring', stiffness: 100 }}
            >
              {[
                { label: 'Current Role', value: 'AI Engineer', icon: '💼' },
                { label: 'Location', value: 'Bengaluru, India', icon: '📍' },
                { label: 'Specialization', value: 'AI/ML & Full-Stack', icon: '🎯' },
                { label: 'Status', value: 'Available', icon: '✨' }
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl p-4 sm:p-5 lg:p-6 2xl:p-8 border border-cyan-500/50 hover:border-cyan-400 transition group"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 20,
                    delay: 1.5 + idx * 0.12,
                  }}
                >
                  <p className="text-xs sm:text-sm text-slate-400 font-medium mb-2">{card.label}</p>
                  <p className="text-lg sm:text-xl lg:text-2xl 2xl:text-3xl font-bold text-cyan-400 flex items-center gap-2">
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: idx * 0.1 }}
                    >
                      {card.icon}
                    </motion.span>
                    {card.value}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="relative mb-20 sm:mb-24 lg:mb-28 xl:mb-32">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {experienceParticles.map((particle) => (
              <Particle key={`exp-${particle.id}`} particle={particle} />
            ))}
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.0 }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold mb-8 sm:mb-10 lg:mb-12 pb-4 sm:pb-6 lg:pb-8 border-b border-slate-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.1, duration: 0.5 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Professional Experience
              </span>
            </motion.h2>
            <div className="space-y-6 sm:space-y-8 lg:space-y-10">
              {experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 20,
                    delay: 2.2 + idx * 0.2,
                  }}
                >
                  <ExperienceCard experience={exp} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Technical Skills Section */}
        <div className="relative mb-20 sm:mb-24 lg:mb-28 xl:mb-32">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {skillsParticles.map((particle) => (
              <Particle key={`skill-${particle.id}`} particle={particle} />
            ))}
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.6 }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold mb-8 sm:mb-10 lg:mb-12 pb-4 sm:pb-6 lg:pb-8 border-b border-slate-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.7, duration: 0.5 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 2xl:gap-10">
              {Object.entries(skills).map(([category, skillList], idx) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 20,
                    delay: 2.8 + idx * 0.12,
                  }}
                >
                  <SkillCard category={category} skills={skillList} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications Section */}
        <div className="relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {certParticles.map((particle) => (
              <Particle key={`cert-${particle.id}`} particle={particle} />
            ))}
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 3.2 }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold mb-8 sm:mb-10 lg:mb-12 pb-4 sm:pb-6 lg:pb-8 border-b border-slate-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.3, duration: 0.5 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Certifications & Awards
              </span>
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 2xl:gap-12">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-10 2xl:p-12 border border-slate-700 hover:border-cyan-500/50 transition group backdrop-blur-sm"
                  whileHover={{ scale: 1.02, y: -5 }}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 20,
                    delay: 3.4 + idx * 0.15,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="text-3xl sm:text-4xl lg:text-5xl flex-shrink-0"
                      animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      🏆
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl lg:text-2xl 2xl:text-3xl font-bold text-cyan-400 mb-2 sm:mb-3 group-hover:text-cyan-300 transition">
                        {cert.name}
                      </h3>
                      <p className="text-xs sm:text-sm lg:text-base text-slate-400">
                        {cert.desc}
                      </p>
                    </div>
                  </div>

                  {/* Card accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-b-xl lg:rounded-b-2xl"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{
                      delay: 3.5 + idx * 0.15,
                      duration: 0.5,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}