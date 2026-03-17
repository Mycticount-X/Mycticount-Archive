const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            I'm currently open to new opportunities, collaborations, and freelance projects.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 fade-in-up transition-all duration-300 hover:shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                  Got a project in mind?
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Whether you want to discuss a hackathon idea, need a full-stack web application, or just want to say hi, my inbox is always open!
                </p>
              </div>
              
              <div className="space-y-4">
                <a href="mailto:mxlovers77@gmail.com" className="flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 hover:scale-105 transition-all duration-300 group border border-transparent hover:border-blue-100">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
                    <i className="fas fa-envelope text-2xl"></i>
                  </div>
                  <div className="ml-5">
                    <p className="text-sm text-gray-500 font-medium tracking-wide">EMAIL ME AT</p>
                    <p className="text-gray-900 font-bold text-lg">mxlovers77@gmail.com</p>
                  </div>
                </a>

                <a href="https://wa.me/6281519870235" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-green-50 hover:scale-105 transition-all duration-300 group border border-transparent hover:border-green-100">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors shadow-sm">
                    <i className="fab fa-whatsapp text-2xl"></i>
                  </div>
                  <div className="ml-5">
                    <p className="text-sm text-gray-500 font-medium tracking-wide">CHAT ON WHATSAPP</p>
                    <p className="text-gray-900 font-bold text-lg">+62 815 1987 0235</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="relative h-full flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl transform rotate-3 scale-105 transition-transform duration-500 hover:rotate-6"></div>
              <div className="relative bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-sm border border-white/50 w-full text-center">
                
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                  <i className="fas fa-map-marker-alt text-4xl text-white"></i>
                </div>
                
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Based In</h4>
                <p className="text-gray-600 text-lg mb-8 font-medium">Jakarta, Indonesia</p>
                
                <div className="pt-8 border-t border-gray-100">
                  <p className="text-sm text-gray-500 font-semibold mb-4 uppercase tracking-widest">Connect With Me</p>
                  <div className="flex justify-center gap-4">
                    <a href="https://github.com/Mycticount-X" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-50 hover:bg-gray-900 hover:text-white hover:-translate-y-2 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm">
                      <i className="fab fa-github text-xl"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/michael-ahlovely-stevenson-7b1b62325/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-50 hover:bg-blue-600 hover:text-white hover:-translate-y-2 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm">
                      <i className="fab fa-linkedin-in text-xl"></i>
                    </a>
                    <a href="https://www.instagram.com/michael23master" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-50 hover:bg-pink-600 hover:text-white hover:-translate-y-2 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm">
                      <i className="fab fa-instagram text-xl"></i>
                    </a>
                    <a href="https://www.youtube.com/@Mycticount_23X" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-50 hover:bg-red-600 hover:text-white hover:-translate-y-2 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm">
                      <i className="fab fa-youtube text-xl"></i>
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;