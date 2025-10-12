import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Code2, Zap } from 'lucide-react';

export default function Footer() {
  // Text reveal animation
  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  // Link animation
  const linkVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: 'easeOut'
      }
    }),
    hover: {
      y: -3,
      color: '#06b6d4',
      transition: { duration: 0.2 }
    }
  };

  // Icon animation
  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.15,
        type: 'spring',
        stiffness: 200,
        damping: 20
      }
    }),
    hover: {
      scale: 1.3,
      rotate: 360,
      transition: { duration: 0.4 }
    }
  };

  // Separator animation
  const separatorVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  // Floating animation
  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  // Heart beat animation
  const heartBeatVariants = {
    animate: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/rohithrajv007',
      icon: Github,
      color: 'hover:text-cyan-400',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/rohith-v-raj',
      icon: Linkedin,
      color: 'hover:text-blue-400',
      gradient: 'from-blue-400 to-purple-500'
    },
    {
      name: 'Email',
      href: 'mailto:rajrohith.003@gmail.com',
      icon: Mail,
      color: 'hover:text-purple-400',
      gradient: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <footer className="relative py-8 sm:py-12 lg:py-16 xl:py-20 2xl:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 border-t border-slate-800 text-center text-slate-500 bg-gradient-to-b from-slate-950 to-slate-950/50 overflow-hidden">
      
      {/* Background elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl -z-10"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -z-10"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-8 sm:mb-10 lg:mb-12"
          variants={separatorVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        />

        {/* Main Content */}
        <motion.div
          className="space-y-6 sm:space-y-8 lg:space-y-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
              }
            }
          }}
        >
          
          {/* Copyright Text with Animation */}
          <motion.div
            className="space-y-3 sm:space-y-4"
            variants={textVariants}
          >
            <motion.p
              className="text-xs sm:text-sm lg:text-base text-slate-400 flex items-center justify-center gap-2 flex-wrap"
            >
              <motion.span
                className="text-slate-300 font-medium"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                © 2025 Rohith Raj
              </motion.span>
              
              <motion.span
                className="text-cyan-400"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              >
                •
              </motion.span>

              <motion.span
                className="flex items-center gap-1"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                AI Engineer
                <motion.span
                  className="text-cyan-400"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🤖
                </motion.span>
              </motion.span>

              <motion.span
                className="text-blue-400"
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              >
                •
              </motion.span>

              <motion.span
                className="flex items-center gap-1"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Data Scientist
                <motion.span
                  className="text-blue-400"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  📊
                </motion.span>
              </motion.span>

              <motion.span
                className="text-purple-400"
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              >
                •
              </motion.span>

              <motion.span
                className="flex items-center gap-1"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Full-Stack Developer
                <motion.span
                  className="text-purple-400"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  ⚡
                </motion.span>
              </motion.span>
            </motion.p>

            {/* Tagline */}
            <motion.p
              className="text-xs sm:text-sm lg:text-base text-slate-500 italic flex items-center justify-center gap-1"
              variants={textVariants}
            >
              Crafting excellence with
              <motion.span
                className="inline-block text-red-500"
                variants={heartBeatVariants}
                animate="animate"
              >
                
              </motion.span>
               code
            </motion.p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-4 sm:gap-6 lg:gap-8 flex-wrap"
            variants={textVariants}
          >
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.name}
                className="relative group"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={linkVariants}
              >
                <motion.a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg flex items-center gap-2 transition duration-300 ${link.color} text-xs sm:text-sm lg:text-base font-medium`}
                  whileHover="hover"
                  variants={linkVariants}
                >
                  {/* Icon */}
                  <motion.span
                    className="flex items-center"
                    custom={index}
                    variants={iconVariants}
                  >
                    <link.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  </motion.span>

                  {/* Text */}
                  {link.name}

                  {/* Glow background on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${link.gradient} rounded-lg -z-10 opacity-0 blur-lg`}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Subtle background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${link.gradient} rounded-lg -z-10 opacity-0`}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Divider */}
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            variants={separatorVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ delay: 0.3 }}
          />

          {/* Tech Stack Badge */}
          <motion.div
            className="pt-4 sm:pt-6 lg:pt-8"
            variants={textVariants}
          >
            <motion.p
              className="text-xs sm:text-xs lg:text-sm text-slate-600 mb-3 sm:mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Built with modern technologies
            </motion.p>
            <motion.div
              className="flex justify-center gap-2 sm:gap-3 lg:gap-4 flex-wrap"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.6
                  }
                }
              }}
            >
              {['React', 'Framer Motion', 'Tailwind CSS', 'Node.js'].map((tech, idx) => (
                <motion.span
                  key={tech}
                  className="px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 bg-slate-800/50 border border-slate-700/50 rounded text-xs lg:text-sm text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        type: 'spring',
                        stiffness: 150,
                        damping: 15
                      }
                    }
                  }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgba(6, 182, 212, 0.1)',
                    transition: { duration: 0.2 }
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-10 right-10 text-3xl sm:text-4xl opacity-10"
          variants={floatingVariants}
          animate="animate"
        >
          💻
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-10 text-3xl sm:text-4xl opacity-10"
          variants={floatingVariants}
          animate="animate"
        >
          🚀
        </motion.div>
      </div>
    </footer>
  );
}