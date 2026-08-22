import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

const Education = () => {
  const [expandedOrg, setExpandedOrg] = useState<string | null>('dsc');

  const universityInfo = {
    name: 'Bina Nusantara University',
    logo: './Education/binus.jpg',
    gpa: '3.97',
    streaming: 'Intelligent System',
    description: [
      <>Experienced in <strong>Full-Stack Web and Mobile Development</strong>, building scalable applications to solve real-world problems.</>,
      <>Selected for the <strong>Elite S-Class program</strong> at BINUS University, an exclusive class and academic training for top-performing students.</>,
      <>Maintaining an <strong>Exceptional Academic Record</strong> while holding active leadership roles across 4 different student organizations.</>,
      <>Trusted as <strong>PIC of Event and Logistics</strong> for large-scale tech events, including DSC Olympiad 2025 and DSC Welcoming Party 2025.</>,
      <>Recognized with the <strong>'Outstanding Performance'</strong> award at DSC Binus for exceptional contributions to event management and organizational growth.</>,
      <>Competitive Hackathon Participant (<strong>Microsoft elevAIte 2024, Gemastik 2025, DevFest Jakarta 2025</strong>), consistently delivering innovative tech solutions under pressure.</>,
      <>Active contributor to <strong>Academic Research Paper</strong>, specifically focusing on <strong>Artificial Intelligence and Computer Vision</strong> at prominent research conferences.</>
    ]
  };

  const organizations = [
    {
      id: 'dsc',
      name: 'Data Science Club',
      shortName: 'GDSC',
      logo: './Education/dsc.jpg',
      currentPosition: 'PIC of Events and Logistics',
      roles: [
        { title: 'PIC of Events', period: 'Agu 2025 - Des 2025' },
        { title: 'PIC of Logistics', period: 'Agu 2025 - Okt 2025' },
        { title: 'Activist of Human Capital', period: 'Jan 2025 - Present' },
        { title: 'Member', period: 'Agu 2024 - Jan 2025' }
      ]
    },
    {
      id: 'himti',
      name: 'HIMTI (Himpunan Mahasiswa Teknik Informatika)',
      shortName: 'HIMTI',
      logo: './Education/himti.jpg',
      currentPosition: 'Activist of Education',
      roles: [
        { title: 'Activist of Education', period: 'Jan 2025 - Present' },
        { title: 'Member', period: 'Agu 2024 - Jan 2025' }
      ]
    },
    {
      id: 'csc',
      name: 'Cyber Security Community',
      shortName: 'CSC',
      logo: './Education/csc.jpg',
      currentPosition: 'Member',
      roles: [
        { title: 'Member', period: 'Agu 2024 - Present' },
      ]
    },
    {
      id: 'slab',
      name: 'Sigma Lab',
      shortName: 'SLAB',
      logo: './logo.jpg',
      currentPosition: 'General Coordinator',
      roles: [
        { title: 'General Coordinator', period: 'Jan 2026 - Present' },
        { title: 'Member', period: 'Jan 2025 - Jan 2026' },
      ]
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const toggleOrg = (id: string) => {
    setExpandedOrg(expandedOrg === id ? null : id);
  };

  return (
    <section id="education" className="py-20 bg-gray-50 relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100 rounded-full opacity-30 translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            My academic journey and active roles in student organizations.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          <motion.div variants={cardVariants} className="lg:col-span-5 flex">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 w-full flex flex-col hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-6 mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-50 shadow-sm flex-shrink-0">
                  <img src={universityInfo.logo} alt={universityInfo.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                    {universityInfo.name.split(' ').map((word, i) => (
                      <span key={i} className="block">{word}</span>
                    ))}
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6" aria-label="Academic achievements">
                <div className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">GPA</p>
                  <p className="mt-1 text-2xl font-bold text-black">
                    {universityInfo.gpa} <span className="text-sm font-medium text-gray-500">/ 4.00</span>
                  </p>
                </div>
                <div className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Streaming</p>
                  <p className="mt-1 text-lg font-bold leading-8 text-black">{universityInfo.streaming}</p>
                </div>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4">
                  {universityInfo.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-gray-600">
                      <i className="fas fa-check-circle text-blue-500 mt-1 flex-shrink-0"></i>
                      <span className="leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
		
		      {/* Organization */}
          <motion.div variants={cardVariants} className="lg:col-span-7 flex flex-col space-y-4">
            {organizations.map((org) => (
              <div 
                key={org.id} 
                className={`bg-white border ${expandedOrg === org.id ? 'border-blue-400 shadow-lg' : 'border-gray-200 shadow-md'} rounded-2xl overflow-hidden transition-all duration-300`}
              >
                {/* Accordion Header */}
                <div 
                  className="p-6 cursor-pointer flex items-center justify-between group"
                  onClick={() => toggleOrg(org.id)}
                >
                  <div className="flex items-center space-x-5">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100 group-hover:border-blue-300 transition-colors flex-shrink-0">
                      <img src={org.logo} alt={org.shortName} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {org.name}
                      </h4>
                      <p className="text-gray-500 font-medium">
                        {org.currentPosition}
                      </p>
                    </div>
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-gray-50 text-gray-400 transition-transform duration-300 ${expandedOrg === org.id ? 'rotate-180 bg-blue-50 text-blue-600' : 'group-hover:bg-gray-100'}`}>
                    <i className="fas fa-chevron-down"></i>
                  </div>
                </div>

                {/* Accordion Body */}
                <AnimatePresence>
                  {expandedOrg === org.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-2">
                        <div className="pt-4 border-t border-gray-100">
                          <ul className="relative border-l-2 border-blue-100 ml-3 space-y-5">
                            {org.roles.map((role, idx) => (
                              <li key={idx} className="ml-6">
                                <span className="absolute flex items-center justify-center w-3 h-3 bg-blue-500 rounded-full -left-[7px] ring-4 ring-white"></span>
                                <h5 className="font-bold text-gray-800 text-lg">{role.title}</h5>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{role.period}</time>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;