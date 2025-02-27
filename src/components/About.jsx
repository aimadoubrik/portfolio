import { motion } from 'framer-motion'
import { Terminal, Layers, Database, Globe } from 'lucide-react'
import profile from '../assets/profile.jpg'

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-dark to-accent/10">
      <div className="container px-6 mx-auto">
        <motion.div 
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">About Me</h2>
          <div className="w-20 h-1 mx-auto mb-6 bg-white"></div>
          <p className="max-w-2xl mx-auto text-gray-400">
            I'm a passionate developer with a keen eye for detail and a determination to deliver the very highest quality.
          </p>
        </motion.div>

        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <div className="relative">
              <div className="overflow-hidden rounded-lg aspect-square bg-gradient-to-tr from-accent to-accent/20">
                <img 
                  src={profile}
                  alt="Developer working" 
                  className="object-cover w-full h-full mix-blend-overlay opacity-60"
                />
              </div>
              <div className="absolute w-48 h-48 border-2 rounded-lg -bottom-6 -right-6 border-white/20"></div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <h3 className="mb-6 text-2xl font-bold">Who I Am</h3>
            <p className="mb-6 text-gray-400">
              I'm a Full Stack Developer with a passion for building beautiful, functional, 
              and user-centered digital experiences. With 2 years of experience in the field, 
              I am always looking for new and innovative ways to bring my clients' visions to life.
            </p>
            <p className="mb-8 text-gray-400">
              I believe that design is about more than just making things look pretty – it's about solving problems 
              and creating intuitive, enjoyable experiences for users.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="card">
                <Terminal className="mb-3 text-white" size={24} />
                <h4 className="mb-1 font-bold">Frontend</h4>
                <p className="text-sm text-gray-400">Creating responsive and interactive UIs</p>
              </div>
              
              <div className="card">
                <Database className="mb-3 text-white" size={24} />
                <h4 className="mb-1 font-bold">Backend</h4>
                <p className="text-sm text-gray-400">Building robust server-side applications</p>
              </div>
              
              <div className="card">
                <Layers className="mb-3 text-white" size={24} />
                <h4 className="mb-1 font-bold">Design</h4>
                <p className="text-sm text-gray-400">Crafting beautiful user experiences</p>
              </div>
              
              {/* <div className="card">
                <Globe className="mb-3 text-white" size={24} />
                <h4 className="mb-1 font-bold">Deployment</h4>
                <p className="text-sm text-gray-400">Launching and scaling applications</p>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About