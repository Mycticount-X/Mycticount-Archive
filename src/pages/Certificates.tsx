import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { certificateCardVariants, headerVariants, sectionVariants } from '../motion/motion-style';

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
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const certificatesData: Certificate[] = [
    {
      id: "1",
      title: "Microsoft Certified: Azure Fundamentals (AI-900)",
      issuer: "Issued by Microsoft",
      date: "March 2026",
      description: "Passed the Microsoft AI-900 Certification Exam, demonstrating foundational knowledge of Artificial Intelligence and Microsoft Azure AI services. The certification validates core competencies in machine learning concepts, Natural Language Processing (NLP), Computer Vision, AI ethics, and practical cloud-based AI applications.",
      image: "/Certificates/microsoft-ai-900.jpg",
      link: "https://www.linkedin.com/in/Michael-Ahlovely-Stevenson/details/certifications/"
    },
    {
      id: "2",
      title: "UGM ASEAN Case Competition (UACC) 2026",
      issuer: "Issued by Universitas Gadjah Mada",
      date: "March 2026",
      description: "Competed in the UGM ASEAN Case Competition (UACC) 2026 as a member of 'Team ResiliASEAN'. Demonstrated strong analytical, problem-solving, and strategic thinking skills by developing comprehensive and innovative solutions for complex business cases within the Southeast Asian regional context.",
      image: "/Certificates/uacc.jpg",
      link: "https://www.linkedin.com/in/Michael-Ahlovely-Stevenson/details/certifications/"
    },
    {
      id: "3",
      title: "PayLabs x Alibaba Cloud Mini Hackathon",
      issuer: "Issued by PayLabs and Alibaba Cloud",
      date: "March 2026",
      description: "Participated in the PayLabs x Alibaba Cloud Mini Hackathon and developed 'HoverPay', an innovative biometric payment application. The system utilizes palm vein pattern recognition for secure transactions, fully integrated with the PayLabs Payment Gateway to provide a seamless and contactless user experience.",
      image: "/Certificates/paylabs-alibaba.png",
      link: "https://www.linkedin.com/in/Michael-Ahlovely-Stevenson/details/certifications/"
    },
    {
      id: "4",
      title: "Certificate of Appreciation - Pantryon",
      issuer: "Issued by S-Class Binus",
      date: "July 2026",
      description: "Awarded by S-Class Binus in recognition of active contributions and technical involvement in the development of 'Pantryon', an innovative digital product creation initiative.",
      image: "/Certificates/sc-pantryon.jpg",
      link: "https://www.linkedin.com/in/Michael-Ahlovely-Stevenson/details/certifications/"
    },
    {
      id: "5",
      title: "PIC of Events - DSC Olympiad 2025",
      issuer: "Issued by DSC Binus",
      date: "January 2026",
      description: "During the DSC Olympiad 2025, I served as the PIC of the Event Division, responsible for planning the overall flow, managing timelines, and supervising on-site execution to ensure a seamless and engaging competition.",
      image: "/Certificates/dsc-dsco.jpg",
      link: "https://www.linkedin.com/in/Michael-Ahlovely-Stevenson/details/certifications/"
    },
    {
      id: "6",
      title: "Activist of Human Capital Departement",
      issuer: "Issued by DSC Binus",
      date: "January 2026",
      description: "As an Activist in the Human Capital Division, I facilitated member recruitment, internal training, and engagement programs, helping to build a supportive environment where members could maximize their technical and interpersonal potential.",
      image: "/Certificates/dsc-hc.jpg",
      link: "https://www.linkedin.com/in/Michael-Ahlovely-Stevenson/details/certifications/"
    },
    {
      id: "7",
      title: "Nvidia Deep Learning",
      issuer: "Issued by Nvidia",
      date: "February 2025",
      description: "Completed an Onsite Nvidia Workshop focused on deep learning fundamentals, including neural networks, convolutional networks, recurrent networks, and practical applications.",
      image: "/nvidia.jpg",
      link: "https://www.linkedin.com/in/Michael-Ahlovely-Stevenson/details/certifications/"
    },
    {
      id: "8",
      title: "Microsoft Azure AI Fundamental",
      issuer: "Issued by GreatNusa and Microsoft",
      date: "April 2025",
      description: "Completed the Microsoft Azure AI Fundamentals course, gaining knowledge of artificial intelligence concepts and how to implement AI solutions using Microsoft Azure services.",
      image: "/microsoft.jpg",
      link: "https://www.linkedin.com/in/Michael-Ahlovely-Stevenson/details/certifications/"
    },
    {
      id: "9",
      title: "Crack The Shield Tournament",
      issuer: "Issued by CSC Binus",
      date: "June 2025",
      description: "Joined the prestigious Capture The Flag cybersecurity tournament by Cyber Security Community Binus, demonstrating skills in penetration testing and digital forensics.",
      image: "/ctf.jpg",
      link: "https://www.linkedin.com/in/Michael-Ahlovely-Stevenson/details/certifications/"
    },
    {
      id: "10",
      title: "PIC of Logistics - DSC Welcoming Party 2025",
      issuer: "Issued by DSC Binus",
      date: "October 2025",
      description: "During the Welcoming Party 2025, I served as PIC of the Logistics Division, overseeing inventory, equipment, and food distribution while coordinating with other divisions to ensure smooth event operations.",
      image: "/pic-log.jpg",
      link: "https://www.linkedin.com/in/Michael-Ahlovely-Stevenson/details/certifications/"
    },
    {
      id: "11",
      title: "Committee of DONGKER DSC 2025",
      issuer: "Issued by DSC Binus",
      date: "February 2025",
      description: "Coordinated the official inauguration and handover ceremony for the Data Science Club, Delegasi Outline Program Kerja (DONGKER), ensuring a seamless leadership transition and honoring the contributions of the outgoing board.",
      image: "/dongker.jpeg",
      link: "https://www.linkedin.com/in/Michael-Ahlovely-Stevenson/details/certifications/"
    },
    {
      id: "12",
      title: "Outstanding Performance on DSC Welcoming Party",
      issuer: "Issued by DSC Binus",
      date: "October 2025",
      description: "Awarded for exceptional operational management and logistical execution as the Person in Charge (PIC) of Logistics during the DSC Welcoming Party 2025.",
      image: "/outstanding.png",
      link: "https://www.linkedin.com/in/Michael-Ahlovely-Stevenson/details/certifications/"
    },
  ];

  const totalPages = Math.ceil(certificatesData.length / itemsPerPage);

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return certificatesData.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage]);

  const goToPage = (page: number) => {
    const nextPage = Math.min(Math.max(page, 1), totalPages);
    if (nextPage === currentPage) return;

    setCurrentPage(nextPage);

    setTimeout(() => {
      const certificateSection = document.getElementById('certificates');
      if (certificateSection) {
        certificateSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certificates</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
            Professional certifications and achievements
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {currentItems.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={certificateCardVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
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
                  <div className="flex flex-col flex-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 mb-1">
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
                    className="shrink-0 whitespace-nowrap bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors shadow-sm active:scale-95 inline-flex items-center"
                  >
                    View on LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {totalPages > 1 && (
          <div className="mt-6 flex flex-col gap-6">
            <div className="flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="group px-4 py-2 rounded-md border border-gray-300 text-gray-700 transition-all duration-200 ease-out hover:bg-gray-100 hover:border-blue-600 hover:text-blue-600 hover:-translate-x-0.5 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-x-0"
              >
                <span className="inline-block transition-transform duration-200 group-hover:-translate-x-0.5 group-hover:text-blue-600">
                  ← Previous
                </span>
              </button>

              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => goToPage(page)}
                  className={`relative w-10 h-10 rounded-md border font-medium transition-all duration-300 ease-out hover:scale-110 active:scale-95 ${
                    currentPage === page
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-200 scale-110'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-blue-300'
                  }`}
                >
                  {page}
                  {currentPage === page && (
                    <span
                      key={`ping-${currentPage}`}
                      className="absolute inset-0 rounded-md border-2 border-blue-400 animate-[ping_0.6s_ease-out_1]"
                    />
                  )}
                </button>
              ))}

              <button
                type="button"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="group px-4 py-2 rounded-md border border-gray-300 text-gray-700 transition-all duration-200 ease-out hover:bg-gray-100 hover:border-blue-600 hover:text-blue-600 hover:translate-x-0.5 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-x-0"
              >
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-blue-600">
                  Next →
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;