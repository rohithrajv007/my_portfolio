import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navigation({ currentPage, navigateTo }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', id: 'home', icon: '🏠' },
    { name: 'Projects', id: 'projects', icon: '💼' },
    { name: 'About', id: 'about', icon: '👤' },
    { name: 'Contact', id: 'contact', icon: '✉️' }
  ];

  // Logo animation variants
  const logoContainerVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.1,
      rotateZ: 10,
      transition: { duration: 0.3 }
    }
  };

  const logoBallVariants = {
    rest: { opacity: 0, scale: 0 },
    hover: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 10,
      }
    }
  };

  // Floating particles for RR click
  const particleVariants = {
    initial: { opacity: 1, scale: 1, y: 0, x: 0 },
    animate: (custom) => ({
      opacity: 0,
      scale: 0,
      y: -100 - Math.random() * 50,
      x: (Math.random() - 0.5) * 100,
      transition: {
        duration: 0.8,
        delay: custom * 0.05,
      }
    })
  };

  // Menu item variants
  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.4,
        ease: 'easeOut'
      }
    }),
    hover: {
      scale: 1.05,
      color: '#06b6d4',
      transition: {
        duration: 0.2
      }
    }
  };

  // Underline variants
  const underlineVariants = {
    initial: { scaleX: 0, originX: 0 },
    animate: {
      scaleX: 1,
      transition: {
        duration: 0.4,
        ease: 'easeInOut'
      }
    }
  };

  const handleLogoClick = () => {
    navigateTo('home');
    // Logo animation triggered by parent
  };

  const handleMenuItemClick = (id) => {
    navigateTo(id);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-3 sm:py-4 flex justify-between items-center">
        
        {/* Logo with enhanced animation */}
        <motion.div
          onClick={handleLogoClick}
          className="relative cursor-pointer text-xl sm:text-2xl lg:text-3xl font-bold"
          variants={logoContainerVariants}
          initial="rest"
          whileHover="hover"
          whileTap={{ scale: 0.85 }}
        >
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 rounded-lg blur-lg bg-gradient-to-r from-cyan-500 to-blue-500"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.3 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Text */}
          <motion.span
            className="relative bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent block"
            whileHover={{
              backgroundPosition: '200% center'
            }}
          >
            RR
          </motion.span>

          {/* Floating particles on click */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              custom={i}
              variants={particleVariants}
              initial="initial"
              whileHover="animate"
              style={{
                left: '50%',
                top: '50%',
              }}
            />
          ))}

          {/* Rotating circle */}
          <motion.div
            className="absolute -inset-3 border border-cyan-500/30 rounded-lg"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div 
          className="hidden md:flex gap-2 lg:gap-4 xl:gap-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative group"
              custom={index}
              initial="hidden"
              animate="visible"
              variants={menuItemVariants}
            >
              <motion.button
                onClick={() => handleMenuItemClick(item.id)}
                className={`relative px-3 sm:px-4 lg:px-5 py-2 font-medium text-xs sm:text-sm lg:text-base transition duration-300 flex items-center gap-1 ${
                  currentPage === item.id
                    ? 'text-cyan-400'
                    : 'text-slate-300 hover:text-cyan-400'
                }`}
                whileHover="hover"
                variants={menuItemVariants}
              >
                {/* Icon */}
                <motion.span
                  className="text-sm sm:text-base lg:text-lg"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.2,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {item.icon}
                </motion.span>

                {/* Text */}
                {item.name}

                {/* Background glow on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg -z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              {/* Animated underline */}
              {currentPage === item.id && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                  variants={underlineVariants}
                  initial="initial"
                  animate="animate"
                  layoutId="underline"
                />
              )}

              {/* Sparkle effect on hover */}
              <motion.div
                className="absolute -top-2 -right-2 text-cyan-400"
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Menu Toggle */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden hover:bg-slate-800 p-2 rounded transition relative"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            initial={false}
            animate={{ rotate: menuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: menuOpen ? 1 : 0,
          height: menuOpen ? 'auto' : 0,
          transition: {
            duration: 0.3,
            ease: 'easeInOut'
          }
        }}
        className="md:hidden bg-slate-900 border-t border-slate-800 overflow-hidden"
      >
        <motion.div
          className="p-3 sm:p-4 space-y-2 sm:space-y-3"
          initial="hidden"
          animate={menuOpen ? 'visible' : 'hidden'}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
              },
            },
            hidden: {
              transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
              },
            },
          }}
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.3,
                  },
                },
              }}
            >
              <motion.button
                onClick={() => handleMenuItemClick(item.id)}
                className={`w-full text-left px-4 sm:px-5 py-2 sm:py-3 hover:bg-slate-800/50 rounded-lg transition text-sm sm:text-base font-medium flex items-center gap-2 ${
                  currentPage === item.id
                    ? 'text-cyan-400 bg-slate-800/30'
                    : 'text-slate-300 hover:text-cyan-400'
                }`}
                whileHover={{
                  scale: 1.03,
                  x: 5,
                  backgroundColor: 'rgba(15, 23, 46, 0.3)',
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                {/* Icon with rotation */}
                <motion.span
                  className="text-base sm:text-lg"
                  whileHover={{
                    rotate: 20,
                    scale: 1.2,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {item.icon}
                </motion.span>

                {/* Text */}
                <span>{item.name}</span>

                {/* Active indicator */}
                {currentPage === item.id && (
                  <motion.div
                    className="ml-auto w-2 h-2 bg-cyan-400 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 15,
                    }}
                  />
                )}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </nav>
  );
}