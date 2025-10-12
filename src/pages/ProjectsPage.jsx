import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function ProjectsPage({ navigateTo }) {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-14 lg:mb-16 xl:mb-20 2xl:mb-24"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-2 sm:mb-4 lg:mb-6">
            Featured Projects
          </h1>
          <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-slate-400">
            Production-grade systems and commercial solutions
          </p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 sm:mt-6 lg:mt-8 rounded-full"
            layoutId="underline"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => navigateTo(`project-${project.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}