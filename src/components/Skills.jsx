import { motion } from 'framer-motion'
import { Cpu, Sparkles } from 'lucide-react'

const Skills = () => {
  const frontendSkills = [
    "HTML5", "CSS3", "JavaScript (ES6+)", 
    "React.js", "Next.js", "Tailwind CSS", 
    "Framer Motion", "Redux", "Bootstrap",
  ]

  const backendSkills = [
    "Node.js", 
    "MongoDB", "MySQL", "Supabase",
    "Docker", "Git"
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const skillItem = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    }
  }

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-accent/10 to-dark">
      <div className="container px-6 mx-auto">
        <motion.div 
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Skills & Expertise</h2>
          <div className="w-20 h-1 mx-auto mb-6 bg-white"></div>
          <p className="max-w-2xl mx-auto text-gray-400">
            My technical skills and areas of expertise in web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <div className="h-full card">
              <div className="flex items-center mb-6">
                <Cpu className="mr-3 text-white" size={24} />
                <h3 className="text-xl font-bold">Frontend Development</h3>
              </div>
              
              <motion.div 
                className="flex flex-wrap gap-2"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {frontendSkills.map((skill, index) => (
                  <motion.span 
                    key={index} 
                    className="skill-badge"
                    variants={skillItem}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <div className="h-full card">
              <div className="flex items-center mb-6">
                <Sparkles className="mr-3 text-white" size={24} />
                <h3 className="text-xl font-bold">Backend Development</h3>
              </div>
              
              <motion.div 
                className="flex flex-wrap gap-2"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {backendSkills.map((skill, index) => (
                  <motion.span 
                    key={index} 
                    className="skill-badge"
                    variants={skillItem}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h3 className="mb-4 text-xl font-bold text-center">My Development Process</h3>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-accent/30">
                <span className="font-bold">01</span>
              </div>
              <h4 className="mb-2 font-bold">Discovery</h4>
              <p className="text-sm text-gray-400">Understanding requirements and planning architecture</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-accent/30">
                <span className="font-bold">02</span>
              </div>
              <h4 className="mb-2 font-bold">Design</h4>
              <p className="text-sm text-gray-400">Creating wireframes and visual designs</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-accent/30">
                <span className="font-bold">03</span>
              </div>
              <h4 className="mb-2 font-bold">Development</h4>
              <p className="text-sm text-gray-400">Building the application with clean code</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-accent/30">
                <span className="font-bold">04</span>
              </div>
              <h4 className="mb-2 font-bold">Deployment</h4>
              <p className="text-sm text-gray-400">Testing, optimization, and launch</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills