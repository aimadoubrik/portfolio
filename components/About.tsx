import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

export const About: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section id="about" className="py-24 bg-white dark:bg-black transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-3 text-slate-900 dark:text-white">
              <span className="text-accent-light dark:text-accent-dark font-mono text-2xl">01.</span> 
              About Me
            </h2>
            <div className="space-y-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-light">
              <p>
                I started my coding journey back in 2015 when I hacked together my first HTML/CSS website. 
                Fast forward to today, and I've had the privilege of working at an <span className="text-accent-light dark:text-accent-dark font-medium">advertising agency</span>, 
                a <span className="text-accent-light dark:text-accent-dark font-medium">start-up</span>, and a huge corporation.
              </p>
              <p>
                My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
                I also recently started exploring <span className="font-bold text-slate-900 dark:text-white">Generative AI</span> capabilities with the Gemini API to build smarter interfaces.
              </p>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-slate-200 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-accent-light dark:bg-accent-dark inline-block"></span>
              Tech Stack
            </h3>
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              {SKILLS.map((skill, index) => (
                <motion.div
                  key={skill}
                  variants={item}
                  className="flex items-center gap-3 group"
                >
                  <span className="w-2 h-2 bg-accent-light dark:bg-accent-dark rounded-full group-hover:scale-150 transition-transform duration-300" />
                  <span className="text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors font-mono text-sm">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};