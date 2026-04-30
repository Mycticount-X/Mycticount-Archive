import { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';

const Home = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const typingTexts = [
    'Computer Science Student',
    'Full Stack Developer',
    'Hackathon Enthusiast',
    'Event Organizer'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % typingTexts.length;
      const fullText = typingTexts[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.6,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: 'easeOut' } 
    },
  };

  return (
    <section id="home" className="pt-20 pb-16 relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>

      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-40 float-animation" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-300 rounded-lg opacity-30 float-animation" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-400 rounded-full opacity-20 float-animation" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <div className="inline-block mb-4 mt-8">
              <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                👋 Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
              Hi, I'm <span className="gradient-text">Michael</span>
            </h1>

            <h2 className="text-2xl lg:text-3xl text-gray-700 mb-2 font-medium">
              <span id="typingText">{text}</span>
            </h2>

            <div className="flex lg:hidden justify-center my-8 fade-in-up">
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden border-8 border-white shadow-xl">
                  <img src="./photo.jpg" alt="Michael Ahlovely Stevenson" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
                  <div className="text-xs font-medium">Open to Opportunities</div>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Passionate about building innovative solutions and participating in hackathons.
              Currently studying at Binus University with a GPA of 3.96.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span>Get In Touch</span>
                <i className="fas fa-arrow-right"></i>
              </a>
              <a href="#projects" className="inline-flex items-center justify-center space-x-2 border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
                <span>View Projects</span>
                <i className="fas fa-code"></i>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center lg:justify-start">
              <a href="https://github.com/Mycticount-X" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/michael-ahlovely-stevenson-7b1b62325/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="https://www.instagram.com/michael23master" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="https://www.youtube.com/@Mycticount_23X" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex justify-center" 
          >
            <div className="relative">
              <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img src="./photo.jpg" alt="Michael Ahlovely Stevenson" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg">
                <div className="text-sm font-medium">Open to Opportunities</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {[
            { value: '3.96', label: 'GPA' },
            { value: '30+', label: 'Projects' },
            { value: '6+', label: 'Certificates' },
            { value: '4', label: 'Organizations' }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-200"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Home;