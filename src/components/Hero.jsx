import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="home" className="flex items-center min-h-screen pt-20">
      <div className="container px-6 mx-auto">
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="mb-4">
            <span className="inline-block px-3 py-1 mb-6 font-mono text-sm border rounded-full border-accent/30">
              Full-Stack Developer
            </span>
          </motion.div>
          
          <motion.h1 
            variants={item} 
            className="mb-6 text-5xl font-bold md:text-7xl gradient-text"
          >
            Hi, I&apos;m <span className="text-accent">Aimad</span>
          </motion.h1>
          
          <motion.p 
            variants={item}
            className="max-w-2xl mb-8 text-xl text-gray-400"
          >
            I build exceptional and accessible digital experiences for the web, 
            focusing on clean code and modern technologies.
          </motion.p>
          
          <motion.div variants={item} className="flex flex-wrap gap-4 mb-12">
            <a href="#projects" className="btn btn-primary">
              View My Work
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </motion.div>
          
          <motion.div variants={item} className="flex items-center gap-6">
            <a 
              href="https://github.com/aimadoubrik" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors duration-300 hover:text-white"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors duration-300 hover:text-white"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="text-gray-400 transition-colors duration-300 hover:text-white"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute hidden transform -translate-x-1/2 bottom-10 left-1/2 md:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <div className="flex flex-col items-center">
            <span className="mb-2 text-sm text-gray-400">Scroll Down</span>
            <div className="w-[2px] h-8 bg-accent/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[scrollDown_1.5s_ease-in-out_infinite]"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero