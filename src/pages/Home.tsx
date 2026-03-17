import { useState, useEffect } from 'react';

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

  return (
    <section id="home" className="pt-20 pb-16 relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>

      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-40 float-animation" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-300 rounded-lg opacity-30 float-animation" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-400 rounded-full opacity-20 float-animation" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left fade-in-up">
            <div className="inline-block mb-4">
              <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                👋 Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Hi, I'm <span className="gradient-text">Michael</span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6 font-medium">
              <span id="typingText" className="typing-text border-r-2 border-gray-700 pr-1">{text}</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Passionate about building innovative solutions and participating in hackathons.
              Currently studying at Binus University with a GPA of 3.93.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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
            <div className="flex gap-4 mt-8 justify-center md:justify-start">
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
          </div>

          {/* Profile Image */}
          <div className="flex justify-center fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img src="./assets/photo.jpg" alt="Michael Ahlovely Stevenson" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg">
                <div className="text-sm font-medium">Open to Opportunities</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-200 card-hover">
            <div className="text-4xl font-bold text-blue-600 mb-2">3.93</div>
            <div className="text-gray-600 font-medium">GPA</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-200 card-hover">
            <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
            <div className="text-gray-600 font-medium">Projects</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-200 card-hover">
            <div className="text-4xl font-bold text-blue-600 mb-2">6+</div>
            <div className="text-gray-600 font-medium">Certificates</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-200 card-hover">
            <div className="text-4xl font-bold text-blue-600 mb-2">4</div>
            <div className="text-gray-600 font-medium">Organizations</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;