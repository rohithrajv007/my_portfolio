import React from 'react';
// ⬇️ 1. Import Github and ExternalLink icons
import { ArrowRight, Check, Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

export default function ProjectDetailPage({ projectId, navigateTo }) {
  const project = projects.find(p => p.id === projectId);
  
  if (!project) return null;

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.button
          onClick={() => navigateTo('projects')}
          className="mb-8 flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowRight className="w-5 h-5 rotate-180" /> Back to Projects
        </motion.button>

        <motion.div
          className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-12 border border-slate-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* ... (Your existing header, overview, achievements, and tech stack sections remain the same) ... */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <h1 className="text-5xl font-bold mb-2">{project.title}</h1>
              <p className="text-cyan-400 font-semibold">{project.status}</p>
            </div>
            <span className="text-sm px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full font-medium h-fit">
              {project.category}
            </span>
          </div>
          
           <div className="grid md:grid-cols-3 gap-6 mb-8 pb-8 border-b border-slate-700">
             {[
               { label: 'Duration', value: project.duration },
               { label: 'Status', value: project.status, highlight: true },
               { label: 'Impact', value: project.impact, highlight: true }
             ].map((stat, idx) => (
               <motion.div
                 key={idx}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: idx * 0.1 }}
               >
                 <p className="text-slate-500 mb-1">{stat.label}</p>
                 <p className={`text-lg font-semibold ${stat.highlight ? 'text-cyan-400' : ''}`}>
                   {stat.value}
                 </p>
               </motion.div>
             ))}
           </div>

           <motion.div
             className="mb-8"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.6, delay: 0.2 }}
           >
             <h2 className="text-2xl font-bold mb-4">Overview</h2>
             <p className="text-slate-300 leading-relaxed text-lg">{project.fullDescription}</p>
           </motion.div>

           <motion.div
             className="mb-8"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.6, delay: 0.3 }}
           >
             <h2 className="text-2xl font-bold mb-4">Key Achievements</h2>
             <div className="grid md:grid-cols-2 gap-4">
               {project.achievements.map((ach, i) => (
                 <motion.div
                   key={i}
                   className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700"
                   whileHover={{ scale: 1.05, borderColor: '#06b6d4' }}
                   initial={{ opacity: 0, x: -10 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.3, delay: i * 0.05 }}
                 >
                   <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }}>
                     <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                   </motion.div>
                   <span className="text-slate-200">{ach}</span>
                 </motion.div>
               ))}
             </div>
           </motion.div>

           <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
           >
             <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>
             <div className="flex flex-wrap gap-3">
               {project.tech.map((tech, i) => (
                 <motion.span
                   key={i}
                   className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 text-cyan-300 rounded-lg font-semibold"
                   whileHover={{ scale: 1.1, backgroundColor: 'rgba(34, 211, 238, 0.3)' }}
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 0.3, delay: i * 0.05 }}
                 >
                   {tech}
                 </motion.span>
               ))}
             </div>
           </motion.div>

           {/* === ⬇️ 2. ADD THIS NEW SECTION FOR PROJECT LINKS === */}
           <motion.div
              className="mt-12 pt-8 border-t border-slate-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-center">Project Links</h2>
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* --- Live Demo Column --- */}
                <div className="flex flex-col items-center">
                  {project.links && project.links.live ? (
                    <motion.a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-slate-800 border border-slate-600 rounded-lg font-semibold hover:bg-slate-700 hover:border-cyan-500 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>View Live Demo</span>
                    </motion.a>
                  ) : (
                    <div className="w-full text-center p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
                      <p className="text-slate-400">Project not deployed or free tier is inactive.</p>
                    </div>
                  )}
                </div>

                {/* --- GitHub Repository Column --- */}
                <div className="flex flex-col items-center">
                  {project.links && project.links.github ? (
                     <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-slate-800 border border-slate-600 rounded-lg font-semibold hover:bg-slate-700 hover:border-cyan-500 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5" />
                      <span>View on GitHub</span>
                    </motion.a>
                  ) : (
                    <div className="w-full text-center p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
                      <p className="text-slate-400">Internship project, GitHub access is private.</p>
                    </div>
                  )}
                </div>

              </div>
            </motion.div>
           {/* === END OF NEW SECTION === */}

        </motion.div>
      </div>
    </div>
  );
}