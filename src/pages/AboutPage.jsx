import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from '../components/SkillCard';
import ExperienceCard from '../components/ExperienceCard';
import { skills } from '../data/skills';
import { experience, certifications } from '../data/experience';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-slate-950">
      <div className="w-full max-w-sm sm:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 sm:mb-6 lg:mb-8">
            About Me
          </h1>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-6 rounded-full"
            layoutId="underline"
          />
        </motion.div>

        {/* Summary Section */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 2xl:gap-12 mb-16 sm:mb-20 lg:mb-24">
          <motion.div
            className="lg:col-span-2 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-10 2xl:p-12 border border-slate-700 hover:border-cyan-500/50 transition"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 text-cyan-400">
              Professional Summary
            </h2>
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-300 leading-relaxed">
                I'm a Computer Science graduate with a Data Science specialization, passionate about building intelligent systems and production-grade solutions. With expertise in AI/ML, LLMs, and full-stack development, I've successfully delivered commercial products that generate 1000+ leads weekly and achieved 94% accuracy in medical AI applications.
              </p>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-300 leading-relaxed">
                My journey combines hands-on problem-solving with continuous learning. I specialize in architecting scalable systems, fine-tuning LLMs for domain-specific applications, and mentoring technical teams on best practices in full-stack development and machine learning.
              </p>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-300 leading-relaxed">
                Currently at Champions Group, I'm building multi-agent LLM systems and automation platforms that solve real-world business challenges at scale.
              </p>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            className="space-y-3 sm:space-y-4 lg:space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {[
              { label: 'Current Role', value: 'AI Engineer', icon: '💼' },
              { label: 'Location', value: 'Bengaluru, India', icon: '📍' },
              { label: 'Specialization', value: 'AI/ML & Full-Stack', icon: '🎯' },
              { label: 'Status', value: 'Available', icon: '✨' }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl p-6 border border-cyan-500/50 hover:border-cyan-400 transition"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <p className="text-slate-400 text-sm font-medium mb-2">{card.label}</p>
                <p className="text-2xl font-bold text-cyan-400 flex items-center gap-2">
                  {card.icon} {card.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Experience Section */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-4xl font-bold mb-10 pb-4 border-b border-slate-700">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <ExperienceCard key={idx} experience={exp} />
            ))}
          </div>
        </motion.div>

        {/* Technical Skills Section */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold mb-10 pb-4 border-b border-slate-700">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {Object.entries(skills).map(([category, skillList], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <SkillCard category={category} skills={skillList} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-10 pb-4 border-b border-slate-700">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Certifications & Awards
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-8 border border-slate-700 hover:border-cyan-500/50 transition group"
                whileHover={{ scale: 1.02, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="text-4xl flex-shrink-0"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    🏆
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition">
                      {cert.name}
                    </h3>
                    <p className="text-slate-400 text-sm">{cert.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}