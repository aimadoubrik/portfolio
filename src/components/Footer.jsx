import { Code } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-8 border-t bg-accent/10 border-accent/20">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center mb-4 md:mb-0">
            <Code className="mr-2 text-white" size={20} />
            <span className="font-mono font-bold">AIMAD<span className="text-white">.</span></span>
          </div>
          
          <div className="text-sm text-gray-400">
            &copy; {currentYear} Developer Portfolio. All rights reserved.
          </div>
          
          <div className="mt-4 md:mt-0">
            <a 
              href="#home" 
              className="text-gray-400 transition-colors duration-300 hover:text-white"
            >
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer