import { useState, useEffect } from 'react';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  link: string;
}

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const certificatesData: Certificate[] = [
    {
      id: "cert1",
      title: "Nvidia Deep Learning",
      issuer: "Issued by Nvidia",
      date: "February 2025",
      description: "Comprehensive course covering neural networks, convolutional networks, recurrent networks, and deep learning applications.",
      image: "./assets/nvidia.jpg",
      link: "https://www.linkedin.com/in/michael-ahlovely-stevenson-7b1b62325/details/certifications/"
    },
    {
      id: "cert2",
      title: "Microsoft Azure AI Fundamental",
      issuer: "Issued by Microsoft",
      date: "April 2025",
      description: "Fundamentals of Artificial Intelligence including machine learning concepts, AI ethics, and practical applications.",
      image: "./assets/microsoft.jpg",
      link: "https://www.linkedin.com/in/michael-ahlovely-stevenson-7b1b62325/details/certifications/"
    },
    {
      id: "cert3",
      title: "Crack The Shield Tournament",
      issuer: "Issued by CSC Binus",
      date: "June 2025",
      description: "Competed in the prestigious Capture The Flag cybersecurity tournament, demonstrating skills in penetration testing and digital forensics.",
      image: "./assets/ctf.jpg",
      link: "https://www.linkedin.com/in/michael-ahlovely-stevenson-7b1b62325/details/certifications/"
    },
    {
      id: "cert4",
      title: "PIC of Logistics",
      issuer: "Issued by DSC Binus",
      date: "October 2025",
      description: "Person in Charge certification for logistics management, covering supply chain optimization, inventory management, and distribution strategies during DSC Welcoming Party 2025.",
      image: "./assets/pic-log.jpg",
      link: "https://www.linkedin.com/in/michael-ahlovely-stevenson-7b1b62325/details/certifications/"
    },
    {
      id: "cert5",
      title: "DONGKER Certificate",
      issuer: "Issued by DSC Binus",
      date: "February 2025",
      description: "Volunteering on Delegasi Outline Program Kerja (DONGKER) DSC 2025",
      image: "./assets/dongker.jpeg",
      link: "https://www.linkedin.com/in/michael-ahlovely-stevenson-7b1b62325/details/certifications/"
    },
    {
      id: "cert6",
      title: "Outstanding Performance on DSC Welcoming Party",
      issuer: "Issued by DSC Binus",
      date: "October 2025",
      description: "Certificate of having Outstanding Performance on DSC Welcoming Party 2025",
      image: "./assets/outstanding.png",
      link: "https://www.linkedin.com/in/michael-ahlovely-stevenson-7b1b62325/details/certifications/"
    }
  ];

  const openModal = (cert: Certificate) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCert(null), 300); 
    document.body.style.overflow = 'auto'; 
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certificates</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
            Professional certifications and achievements
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((cert, index) => (
            <div 
              key={cert.id} 
              className="certificate-card card-hover bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-2xl fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden group">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button 
                    onClick={() => openModal(cert)}
                    className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
                  >
                    <i className="fas fa-eye mr-2"></i>View
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{cert.issuer}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium
                  ${cert.date.includes('2025') && !cert.date.includes('October') ? 'bg-blue-100 text-blue-700' : 
                    cert.date.includes('October') ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>
                  {cert.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedCert && (
        <div 
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 transition-opacity duration-300"
          onClick={closeModal} 
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full mx-4 overflow-hidden relative animate-[modalOpen_0.3s_ease]"
            onClick={(e) => e.stopPropagation()} 
          >
            <button 
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-gray-100 rounded-full flex items-center justify-center transition-all shadow-md" 
              onClick={closeModal}
            >
              <i className="fas fa-times text-gray-600"></i>
            </button>
            
            <div className="grid md:grid-cols-2">
              <div className="bg-gray-100 h-64 md:h-auto flex items-center justify-center p-4">
                <img src={selectedCert.image} alt="Certificate" className="max-w-full max-h-[500px] object-contain shadow-sm" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{selectedCert.title}</h3>
                <p className="text-gray-600 mb-2">{selectedCert.issuer}</p>
                <p className="text-blue-600 font-medium mb-4">{selectedCert.date}</p>
                <p className="text-gray-700 leading-relaxed mb-8">{selectedCert.description}</p>
                <a 
                  href={selectedCert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors self-start"
                >
                  <i className="fas fa-external-link-alt"></i>
                  <span>View on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;