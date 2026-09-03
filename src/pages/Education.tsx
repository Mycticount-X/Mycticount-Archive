import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { headerVariants, itemVariants, sectionVariants } from '../motion/motion-style';

type Role = {
  title: string;
  period: string;
  description?: React.ReactNode;
};

type Organization = {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  currentPosition: string;
  roles: Role[];
};

const Education = () => {
  const [expandedOrg, setExpandedOrg] = useState<string | null>('dsc');

  const universityInfo = {
    name: 'Bina Nusantara University',
    logo: './Logo/binus.jpg',
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

  const organizations: Organization[] = [
    {
      id: 'dsc',
      name: 'Data Science Club',
      shortName: 'DSC',
      logo: './Logo/dsc.jpg',
      currentPosition: 'PIC of Events and Logistics',
      roles: [
        { 
          title: 'PIC of Events', 
          period: 'Aug 2025 - Dec 2025',
          description: <>During <b>DSC Olympiad 2025</b>, I served as the Person in Charge (PIC) of the Event Division. I was responsible for <b>planning and coordinating the overall event flow</b>, managing the timeline, and ensuring that each session ran according to schedule. I closely <b>supervised event execution</b> on the day of the competition, coordinated with multiple divisions, and addressed on-site issues to maintain a smooth and engaging experience for participants and committees.</>
        },
        { 
          title: 'PIC of Logistics', 
          period: 'Aug 2025 - Oct 2025',
          description: <>During the <b>Welcoming Party 2025</b>, I served as the PIC of the Logistic Division. My responsibilities included <b>overseeing inventory, handling equipment and supplies</b>, and managing food and beverage distribution throughout the event. I collaborated closely with other divisions to ensure <b>seamless operations</b> and a successful event experience for all participants.</>
        },
        { 
          title: 'Activist of Human Capital', 
          period: 'Jan 2025 - Present',
          description: <>As an Activist in the Human Capital (HC) Division, I was responsible for <b>developing and facilitating programs</b> that support both personal and professional growth. The HC Division acts as the heart of DSC, <b>managing member recruitment, internal training, and engagement initiatives</b> that foster teamwork. Through these activities, I contributed to building a supportive environment where members could thrive, share knowledge, and <b>maximize their potential</b> in both technical and interpersonal aspects.</>
        },
        { 
          title: 'Member', 
          period: 'Aug 2024 - Jan 2025',
          description: <>Engaged in a community of students passionate about data. Together, we <b>explored concepts in analytics</b>, shared technical knowledge, and supported each other in <b>developing projects and case studies</b>.</>
        }
      ]
    },
    {
      id: 'himti',
      name: 'HIMTI (Himpunan Mahasiswa Teknik Informatika)',
      shortName: 'HIMTI',
      logo: './Logo/himti.jpg',
      currentPosition: 'Activist of Education',
      roles: [
        { 
          title: 'Activist of Education', 
          period: 'Jan 2025 - Present',
          description: <>As an Activist of the Education Commission at HIMTI BINUS University, I contributed to the <b>academic growth of Informatics students</b> by designing and facilitating various learning initiatives. My responsibilities included developing <b>VBL (Video Based Learning)</b>, organizing study clubs, and managing <b>Notion-based summaries and resources</b> to support students’ understanding of core courses.<br /><br />I also took part in <b>HIMTI Responsi</b>, a pre-exam tutoring program where I helped prepare review sessions and study guides before mid-term and final exams. Through this role, I strengthened my skills in <b>teaching, curriculum planning, and educational content management</b> while promoting a collaborative and supportive learning environment.</>
        },
        { 
          title: 'Member', 
          period: 'Aug 2024 - Jan 2025',
          description: <>As a member of HIMTI, the <b>largest and most influential student association</b> for the School of Computer Science at BINUS University, I actively contributed to fostering a strong <b>academic and professional development community</b> among students.</>
        }
      ]
    },
    {
      id: 'sclass',
      name: 'S-Class',
      shortName: 'S-Class',
      logo: './Logo/sclass.jpg',
      currentPosition: 'Vice President',
      roles: [
        {
          title: 'Vice President',
          period: 'Aug 2025 - Present',
          description: <>As Vice President, I directed the overall operations of S-Class and oversaw three core divisions: <b>Product Creation, Competition, and Research</b>. I spearheaded major programs such as <b>General Training and Gatherings</b>, and successfully structured an active <b>Discord community</b> to foster engagement, seamless communication, and collaboration among high-achieving students.</>
        },
        {
          title: 'Member',
          period: 'Dec 2024 - Aug 2025',
          description: <>During my time as a member, I actively participated in the <b>Product Creation Division</b>, focusing on developing end-to-end applications. I applied my software development skills to build innovative digital products and represented the organization in prestigious national hackathons, notably competing in <b>Microsoft elevAIte 2024</b> and <b>Gemastik 2025</b>.</>
        }
      ]
    },
    {
      id: 'slab',
      name: 'Sigma Lab',
      shortName: 'SLAB',
      logo: './Logo/slab.png',
      currentPosition: 'General Coordinator',
      roles: [
        { 
          title: 'General Coordinator', 
          period: 'Jan 2026 - Present',
          description: <>As General Coordinator, I oversaw the organization's daily operations and managed member participation. I was responsible for <b>coordinating technical training sessions</b>, tracking attendance, and providing <b>hands-on assistance and mentorship</b> to members, ensuring they successfully grasped the curriculum and developed their technical skills.</>
        },
        { 
          title: 'Member', 
          period: 'Jan 2025 - Jan 2026',
          description: <>Operating in collaboration with the <b>S-Class Product Division</b>, I focused on software development and product creation. I applied my technical skills to build competitive applications and actively represented Sigma Lab in major national hackathons, notably competing in <b>Microsoft elevAIte 2024</b> and <b>Gemastik 2025</b>.</>
        }
      ]
    },
    {
      id: 'csc',
      name: 'Cyber Security Community',
      shortName: 'CSC',
      logo: './Logo/csc.jpg',
      currentPosition: 'Member',
      roles: [
        { 
          title: 'Member', 
          period: 'Aug 2024 - Present',
          description: <>As a Member of the Cyber Security Community (CSC) at BINUS University, I actively joined <b>Capture the Flag (CTF) competitions</b> to apply my knowledge of network security, ethical hacking, and digital forensics. Through these competitions, I strengthened my understanding of <b>cybersecurity fundamentals, threat analysis, and system protection</b>.</>
        }
      ]
    },
  ];

  const toggleOrg = (id: string) => {
    setExpandedOrg(expandedOrg === id ? null : id);
  };

  return (
    <motion.section
      id="education"
      className="py-20 bg-gray-50 relative overflow-hidden min-h-screen flex items-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100 rounded-full opacity-30 translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Section Title */}
        <motion.div className="text-center mb-16" variants={headerVariants}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            My academic journey and active roles in student organizations.
          </p>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          <motion.div variants={itemVariants} className="lg:col-span-5 h-fit">
            <div className="card-hover bg-white border border-gray-200 rounded-2xl shadow-lg p-8 w-full flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
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
          <motion.div variants={sectionVariants} className="lg:col-span-7 flex flex-col space-y-4">
            {organizations.map((org) => (
              <motion.div
                key={org.id}
                variants={itemVariants}
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
                                {role.description && (
                                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                                    {role.description}
                                  </p>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;