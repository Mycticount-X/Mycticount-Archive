import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { cardVariants, headerVariants, sectionVariants } from '../motion/motion-style';

const Achievement = () => {
  const achievementsData = [
    {
      id: 1,
      title: "Vice President of S-Class",
      description: "The School of Computer Science's flagship class in the Product Creation division, focuses on the development of technology products.",
      image: "./Achievement/s-class.jpg",
      icon: "fas fa-star",
      imgBg: "from-yellow-50 to-yellow-100",
      iconBg: "from-yellow-400 to-yellow-600"
    },
    {
      id: 2,
      title: "Hackathon Enthusiast",
      description: "Participated in various Hackathon such as Microsoft elevAIte 2024, Gemastik 2025, and PayLabs x Alibaba Cloud 2026.",
      image: "./Achievement/gemastik.jpeg",
      icon: "fas fa-laptop-code",
      imgBg: "from-blue-50 to-blue-100",
      iconBg: "from-blue-400 to-blue-600"
    },
    {
      id: 3,
      title: "Founder of Myctix Archive",
      description: "A digital learning companion built on Notion, designed exclusively for Binus freshmen who want to master their courses with clarity, structure, and less stress.",
      image: "./Achievement/myctix-archive.jpeg",
      icon: "fas fa-book",
      imgBg: "from-purple-50 to-purple-100",
      iconBg: "from-purple-400 to-purple-600"
    },
    {
      id: 4,
      title: "Ex-Trainee of SLC",
      description: "Joined as a trainee laboratory assistant and participate in Core Training at Binus University Student Laboratory Center.",
      image: "./Achievement/aslab.jpg",
      icon: "fas fa-user-graduate",
      imgBg: "from-pink-50 to-pink-100",
      iconBg: "from-pink-400 to-pink-600"
    },
    {
      id: 5,
      title: "Event and Logistic Coordinator",
      description: "Led major organisational events such as the DSC Olympiad and DSC Welcoming Party 2025, coordinating teams and ensuring smooth event execution.",
      image: "./Achievement/event.jpeg",
      icon: "fas fa-people-carry",
      imgBg: "from-green-50 to-green-100",
      iconBg: "from-green-400 to-green-600"
    },
    {
      id: 6,
      title: "Multi-Organization Involvement",
      description: "Actively contributed to four different organisations, taking on diverse roles that strengthened my leadership, collaboration, and project execution skills.",
      image: "./Achievement/organisation.jpeg",
      icon: "fas fa-network-wired",
      imgBg: "from-orange-50 to-orange-100",
      iconBg: "from-orange-400 to-orange-600"
    },
    {
      id: 7,
      title: "English Lecturer at TFI",
      description: "Served as a volunteer English lecturer at Teach for Indonesia, teaching and mentoring many young learners to improve their language skills.",
      image: "./Achievement/teaching.jpg",
      icon: "fas fa-chalkboard-teacher",
      imgBg: "from-pink-50 to-pink-100",
      iconBg: "from-pink-400 to-pink-600"
    },
    {
      id: 8,
      title: "CTF Olympiad",
      description: "Participated in prestigious Capture The Flag competitions, including Crack The Shield 2025 and National Cyber Week 2025.",
      image: "./Certificates/ctf.jpg",
      icon: "fas fa-shield-alt",
      imgBg: "from-red-50 to-red-100",
      iconBg: "from-red-400 to-red-600"
    },
    {
      id: 9,
      title: "App and Web Developer",
      description: "Developed innovative applications showcased in various hackathons, demonstrating creativity and technical skills.",
      image: "./Achievement/hackathon.png",
      icon: "fas fa-code",
      imgBg: "from-indigo-50 to-indigo-100",
      iconBg: "from-indigo-400 to-indigo-600"
    },
  ];

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(achievementsData.length / itemsPerPage);

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return achievementsData.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage]);

  const goToPage = (page: number) => {
    const nextPage = Math.min(Math.max(page, 1), totalPages);
    setCurrentPage(nextPage);

    setTimeout(() => {
      const achievementSection = document.getElementById('achievements');
      if (achievementSection) {
        achievementSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
            My accomplishments and recognitions
          </p>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="card-hover bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-200"
            >
              <div className={`h-48 bg-gradient-to-br ${item.imgBg} flex items-center justify-center overflow-hidden border-b border-gray-200`}>
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="p-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${item.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                  <i className={`${item.icon} text-white text-xl`}></i>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
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
                className="group px-4 py-2 rounded-md border border-gray-300 text-gray-700 
                          transition-all duration-200 ease-out
                          hover:bg-gray-100 hover:border-blue-600 hover:text-blue-600 hover:-translate-x-0.5
                          active:scale-95
                          disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-x-0"
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
                  className={`relative w-10 h-10 rounded-md border font-medium
                              transition-all duration-300 ease-out
                              hover:scale-110 active:scale-95
                              ${
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
                className="group px-4 py-2 rounded-md border border-gray-300 text-gray-700 
                          transition-all duration-200 ease-out
                          hover:bg-gray-100 hover:border-blue-600 hover:text-blue-600 hover:translate-x-0.5
                          active:scale-95
                          disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-x-0"
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

export default Achievement;