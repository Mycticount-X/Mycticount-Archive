const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-gray-800 pb-12">
          
          {/* Brand & About */}
          <div className="md:col-span-2 pr-0 md:pr-12">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500 p-0.5">
                <img src="/photo.jpg" alt="Michael" className="w-full h-full object-cover rounded-full" />
              </div>
              <span className="font-bold text-2xl tracking-tight">Michael A.S</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Computer Science student passionate about building innovative solutions, tackling hackathons, and developing high-impact digital products.
            </p>
            <div className="inline-block bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3">
              <p className="text-blue-400 text-sm font-medium italic">
                "Everyone is Smart in Their Respective Talent"
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-100 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'Journey', 'Certificates', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <span className="w-0.5 h-4 bg-blue-600 mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0"></span>
                    <span className="transform transition-transform duration-300 group-hover:translate-x-2">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-100 uppercase tracking-wider text-sm">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a href="https://myctix-archive.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <i className="fas fa-external-link-alt text-xs mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0"></i>
                  <span className="transform transition-transform duration-300 group-hover:translate-x-2">Myctix Archive</span>
                </a>
              </li>
              <li>
                <a href="./assets/CV_Michael.pdf" download className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <i className="fas fa-download text-xs mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0"></i>
                  <span className="transform transition-transform duration-300 group-hover:translate-x-2">Download CV</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/Mycticount-X" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <i className="fab fa-github text-xs mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0"></i>
                  <span className="transform transition-transform duration-300 group-hover:translate-x-2">GitHub</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/michael-ahlovely-stevenson-7b1b62325/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <i className="fab fa-linkedin text-xs mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0"></i>
                  <span className="transform transition-transform duration-300 group-hover:translate-x-2">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Michael Ahlovely Stevenson. All rights reserved.</p>
          <p className="mt-4 md:mt-0 flex items-center bg-gray-800 px-4 py-2 rounded-full">
            Made with <i className="fas fa-heart text-red-500 mx-1.5 animate-pulse"></i> and <i className="fas fa-coffee text-amber-600 mx-1.5"></i>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;