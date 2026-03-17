import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Journey', href: '#journey' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-full">
              <img src="/logo.jpg" alt="Michael" className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-xl text-gray-900">Michael AS</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex desktop-nav space-x-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link text-gray-700 hover:text-blue-600 font-medium">
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <a href="./assets/CV_Michael.pdf" download className="hidden md:inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md font-medium">
              <i className="fas fa-download"></i>
              <span>Download CV</span>
            </a>

            {/* Hamburger Button */}
            <button
              className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
              onClick={closeMobileMenu}
            >
              {link.name}
            </a>
          ))}
          <a href="./assets/CV_Michael.pdf" download className="block py-3 px-4 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors font-medium text-center">
            <i className="fas fa-download mr-2"></i>Download CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;