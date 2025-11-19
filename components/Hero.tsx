import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const y3 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Parallax Background Blobs */}
      <motion.div style={{ y: y1, opacity }} className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-accent-light/20 rounded-full mix-blend-multiply filter blur-3xl dark:mix-blend-screen dark:opacity-30 animate-blob" />
      <motion.div style={{ y: y2, opacity }} className="absolute top-[10%] right-[-10%] w-96 h-96 bg-accent-dark/20 rounded-full mix-blend-multiply filter blur-3xl dark:mix-blend-screen dark:opacity-30 animate-blob animation-delay-2000" />
      <motion.div style={{ y: y3, opacity }} className="absolute -bottom-20 left-1/3 w-96 h-96 bg-pink-300/20 dark:bg-pink-600/20 rounded-full mix-blend-multiply filter blur-3xl dark:mix-blend-screen dark:opacity-30 animate-blob animation-delay-4000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h2 variants={item} className="text-lg md:text-xl font-bold text-accent-light dark:text-accent-dark mb-4 tracking-widest uppercase">
            Hello World, I'm
          </motion.h2>
          
          <motion.div variants={item} className="relative inline-block mb-6">
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight relative z-10">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-300 dark:to-white animate-gradient">
                Aimad Oubrik
              </span>
            </h1>
          </motion.div>
          
          <motion.h3 variants={item} className="text-2xl md:text-4xl font-semibold text-slate-600 dark:text-slate-400 mb-8">
            Full Stack Developer
          </motion.h3>
          
          <motion.p variants={item} className="max-w-2xl mx-auto text-base md:text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
            I build pixel-perfect, accessible, and performant web experiences. 
            Specializing in different technologies.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#projects"
              className="group px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-black rounded-lg font-bold hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              View Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact"
              className="px-8 py-3 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white rounded-lg font-bold hover:bg-slate-100 dark:hover:bg-white/10 transition-all active:scale-95"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-12 flex justify-center gap-8">
            {[Github, Linkedin, Twitter].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ scale: 1.2, rotate: 10, color: "#06b6d4" }}
                whileTap={{ scale: 0.9 }}
                className="text-slate-600 dark:text-slate-400 transition-colors p-2"
              >
                <Icon className="w-7 h-7" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-slate-400 to-transparent dark:via-slate-600"></div>
      </motion.div>
    </section>
  );
};