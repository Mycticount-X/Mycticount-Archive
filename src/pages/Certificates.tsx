import { motion } from 'framer-motion';

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
  const certificatesData: Certificate[] = [
    {
      id: "cert1",
      title: "Nvidia Deep Learning",
      issuer: "Issued by Nvidia",
      date: "February 2025",
      description: "Completed a Nvidia Workshop focused on deep learning fundamentals, including neural networks, convolutional networks, recurrent networks, and practical applications.",
      image: "/nvidia.jpg",
      link: "https://www.linkedin.com/in/Michael-Ahlovely-Stevenson/details/certifications/"
    },
    {
      id: "cert2",
      title: "Microsoft Azure AI Fundamental",
      issuer: "Issued by Microsoft",
      date: "April 2025",
      description: "Fundamentals of Artificial Intelligence including machine learning concepts, Natural Language Processing, Computer Vision, AI Ethics, and its applications.",
      image: "/microsoft.jpg",
      link: "https://www.linkedin.com/in/Michael-Ahlovely-Stevenson/details/certifications/"
    },
    {
      id: "cert3",
      title: "Crack The Shield Tournament",
      issuer: "Issued by CSC Binus",
      date: "June 2025",
      description: "Competed in the prestigious Capture The Flag cybersecurity tournament by Cyber Security Community Binus, demonstrating skills in penetration testing and digital forensics.",
      image: "/ctf.jpg",
      link: "https://www.linkedin.com/in/Michael-Ahlovely-Stevenson/details/certifications/"
    },
    {
      id: "cert4",
      title: "PIC of Logistics",
      issuer: "Issued by DSC Binus",
      date: "October 2025",
      description: "During the Welcoming Party 2025, I served as PIC of the Logistics Division, overseeing inventory, equipment, and food distribution while coordinating with other divisions to ensure smooth event operations.",
      image: "/pic-log.jpg",
      link: "https://www.linkedin.com/in/Michael-Ahlovely-Stevenson/details/certifications/"
    },
    {
      id: "cert5",
      title: "Committee of DONGKER DSC 2025",
      issuer: "Issued by DSC Binus",
      date: "February 2025",
      description: "Coordinated the official inauguration and handover ceremony for the Data Science Club, Delegasi Outline Program Kerja (DONGKER), ensuring a seamless leadership transition and honoring the contributions of the outgoing board.",
      image: "/dongker.jpeg",
      link: "https://www.linkedin.com/in/Michael-Ahlovely-Stevenson/details/certifications/"
    },
    {
      id: "cert6",
      title: "Outstanding Performance on DSC Welcoming Party",
      issuer: "Issued by DSC Binus",
      date: "October 2025",
      description: "Awarded for exceptional operational management and logistical execution as the Person in Charge (PIC) of Logistics during the DSC Welcoming Party 2025.",
      image: "/outstanding.png",
      link: "https://www.linkedin.com/in/Michael-Ahlovely-Stevenson/details/certifications/"
    }
  ];

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
            <motion.div 
              key={cert.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="card-hover bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden border-b border-gray-100">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{cert.title}</h3>
                
                <p className="text-sm text-gray-600 mb-2 flex-grow">{cert.description}</p>
                
                <div className="flex items-end justify-between mt-auto pt-4 border-t border-gray-100">
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                      {cert.issuer}
                    </span>
                    <span className="text-sm font-bold text-gray-900">
                      {cert.date}
                    </span>
                  </div>

                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors shadow-sm active:scale-95 inline-flex items-center"
                  >
                    View on LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;