import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navigation({ currentPage, navigateTo }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          onClick={() => navigateTo('home')}
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          RR
        </motion.div>

        <div className="hidden md:flex gap-8">
          {menuItems.map(item => (
            <motion.button
              key={item.id}
              onClick={() => navigateTo(item.id)}
              className={`transition duration-300 font-medium text-xs sm:text-sm lg:text-base relative ${
                currentPage === item.id
                  ? 'text-cyan-400'
                  : 'text-slate-300 hover:text-cyan-400'
              }`}
              whileHover={{ y: -2 }}
            >
              {item.name}
              {currentPage === item.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"
                  layoutId="underline"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden hover:bg-slate-800 p-2 rounded">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-slate-900 border-t border-slate-800 p-4 space-y-3"
        >
          {menuItems.map(item => (
            <motion.button
              key={item.id}
              onClick={() => {
                navigateTo(item.id);
                setMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-slate-800 rounded transition text-slate-300 text-sm sm:text-base"
              whileHover={{ x: 5 }}
            >
              {item.name}
            </motion.button>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
