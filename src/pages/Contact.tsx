import { motion } from 'framer-motion';
import { cardVariants, headerVariants, sectionVariants } from '../motion/motion-style';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-20 bg-white relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            I'm currently open to new opportunities, collaborations, and freelance projects.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-5 gap-6 items-stretch"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Left Side */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-3 bg-white rounded-[2rem] shadow-lg border border-gray-100 p-8 md:p-12 transition-all duration-300 hover:shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-semibold text-green-700">Available for Work</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Got a project in <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">mind?</span>
            </h3>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-lg">
              Whether you want to discuss a hackathon idea, need a full-stack web application, or just want to say hi, my inbox is always open!
            </p>

            {/* Button */}
            <a 
              href="mailto:mxlovers77@gmail.com" 
              className="inline-flex items-center p-2 pr-8 bg-gray-50 rounded-full hover:bg-blue-50 transition-all duration-300 group/btn border border-gray-200 hover:border-blue-200"
            >
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-blue-600 group-hover/btn:bg-blue-600 group-hover/btn:text-white transition-all duration-300 shadow-sm mr-5">
                <i className="fas fa-paper-plane text-xl transition-transform"></i>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold tracking-wider uppercase mb-0.5">Drop a line at</p>
                <p className="text-gray-900 font-bold text-lg">mxlovers77@gmail.com</p>
              </div>
            </a>
          </motion.div>

          {/* Right Side */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Location Card */}
            <motion.div
              variants={cardVariants}
              className="bg-white rounded-[2rem] shadow-lg border border-gray-100 p-8 flex-1 flex flex-col justify-center items-center text-center transition-all duration-300 hover:shadow-xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm border border-blue-100/50">
                <i className="fas fa-map-marker-alt text-3xl"></i>
              </div>
              
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Based In</h4>
              <p className="text-gray-600 font-medium text-lg">South Jakarta, Indonesia</p>
              <p className="text-sm text-gray-400 mt-2">Open to remote work globally</p>
            </motion.div>

            {/* Social Media Card */}
            <motion.div
              variants={cardVariants}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2rem] shadow-lg p-8 text-center flex flex-col justify-center items-center"
            >
              <p className="text-sm text-gray-400 font-semibold mb-6 uppercase tracking-widest">Connect With Me</p>
              
              <div className="flex justify-center gap-3 w-full">
                <a href="https://github.com/Mycticount-X" target="_blank" rel="noopener noreferrer" className="flex-1 aspect-square max-w-[64px] bg-white/10 hover:bg-white hover:text-gray-900 text-white rounded-2xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                  <i className="fab fa-github text-2xl"></i>
                </a>
                <a href="https://www.linkedin.com/in/michael-ahlovely-stevenson-7b1b62325/" target="_blank" rel="noopener noreferrer" className="flex-1 aspect-square max-w-[64px] bg-white/10 hover:bg-[#0A66C2] hover:text-white text-white rounded-2xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                  <i className="fab fa-linkedin-in text-2xl"></i>
                </a>
                <a href="https://www.instagram.com/michael23master" target="_blank" rel="noopener noreferrer" className="flex-1 aspect-square max-w-[64px] bg-white/10 hover:bg-[#E1306C] hover:text-white text-white rounded-2xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
                <a href="https://www.youtube.com/@Mycticount_23X" target="_blank" rel="noopener noreferrer" className="flex-1 aspect-square max-w-[64px] bg-white/10 hover:bg-[#FF0000] hover:text-white text-white rounded-2xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                  <i className="fab fa-youtube text-2xl"></i>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;