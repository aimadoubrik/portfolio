import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderOpen, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } },
  };

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-[#0a0a0a] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-16 flex items-center gap-3">
             <span className="text-accent-light dark:text-accent-dark font-mono text-2xl">02.</span> 
             Featured Projects
          </h2>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {PROJECTS.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                className="bg-white dark:bg-dark-card rounded-xl overflow-hidden shadow-xl dark:shadow-none dark:border border-dark-border cursor-pointer group relative flex flex-col h-full"
              >
                <div className="h-52 overflow-hidden relative">
                  <div className="absolute inset-0 bg-accent-light/10 dark:bg-accent-dark/10 z-10 group-hover:bg-transparent transition-colors duration-300" />
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                     <span className="px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-sm">
                       View Project
                     </span>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <FolderOpen className="w-8 h-8 text-accent-light dark:text-accent-dark" />
                    <div className="flex gap-2 text-slate-400">
                      {project.liveUrl && <ExternalLink className="w-5 h-5 hover:text-accent-light dark:hover:text-accent-dark transition-colors" />}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <li key={tag} className="text-xs font-mono text-slate-500 dark:text-slate-500">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};