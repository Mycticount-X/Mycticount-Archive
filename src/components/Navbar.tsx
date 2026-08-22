import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    closeMobileMenu();

    const targetId = href.replace('#', '');
    const target = document.getElementById(targetId);

    if (target) {
      setTimeout(() => {
        const navbarOffset = 72;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarOffset;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });

        window.history.replaceState(null, '', href);
      }, 150);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Journey', href: '#journey' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-full">
              <img src="/logo.jpg" alt="Michael" className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-xl text-gray-900">Michael AS</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex desktop-nav space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-gray-500 hover:text-blue-600 font-medium"
                onClick={handleNavClick(link.href)}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <a href="./CV_Michael.pdf" download className="hidden lg:inline-flex items-center space-x-2 bg-black text-white px-6 py-2 rounded-lg hover:bg-blue-300 hover:text-black transition-colors shadow-md font-medium">
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
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-white/90 backdrop-blur-md"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-3 px-4 text-gray-500 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                  onClick={handleNavClick(link.href)}
                >
                  {link.name}
                </a>
              ))}
              <a href="./CV_Michael.pdf" download className="block py-3 px-4 bg-black text-white hover:bg-blue-300 hover:text-black rounded-lg transition-colors font-medium text-center">
                <i className="fas fa-download mr-2"></i>Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;