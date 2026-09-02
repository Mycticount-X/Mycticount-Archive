import './Journey.css';

const Journey = () => {
  const journeyData = [
    {
      id: 1,
      institution: "Bina Nusantara IT Division",
      role: "Associate Developer - Full Stack Developer",
      roleColor: "text-blue-600",
      period: "Jan 2026 - Present",
      logo: "./Logo/itdiv.jpg",
      description: "Developing and maintaining scalable enterprise applications utilizing React and ASP.NET. Managing deployment pipelines via Azure DevOps while collaborating with cross-functional teams to deliver high-quality software solutions.",
      tags: [
        { text: "React", bgColor: "bg-purple-100", textColor: "text-purple-700" },
        { text: "ASP.NET", bgColor: "bg-green-100", textColor: "text-green-700" },
        { text: "Azure DevOps", bgColor: "bg-blue-100", textColor: "text-blue-700" },
      ]
    },
    {
      id: 2,
      institution: "S-Class Binus",
      role: "Vice President",
      roleColor: "text-purple-600",
      period: "Aug 2025 - Present",
      logo: "./Logo/sclass.jpg",
      description: "As Vice President, I directed the overall operations of S-Class and oversaw three core divisions: Product Creation, Competition, and Research. I spearheaded major programs such as General Training and Gatherings, and successfully structured an active Discord community to foster engagement, seamless communication, and collaboration among high-achieving students.",
      tags: [
        { text: "SigmaLab", bgColor: "bg-red-100", textColor: "text-red-700" },
        { text: "Product Creation", bgColor: "bg-green-100", textColor: "text-green-700" }
      ]
    },
    {
      id: 3,
      institution: "Myctix Archive",
      role: "Founder",
      roleColor: "text-teal-600",
      period: "Aug 2025 - Present",
      logo: "./Logo/myctix-archive.jpg",
      description: "Founded and manage a comprehensive Notion-based learning platform tailored for Computer Science students. Curated structured study guides and course outlines, successfully supporting over 100 active users.",
      tags: [
        { text: "100+ Users", bgColor: "bg-teal-100", textColor: "text-teal-700" },
        { text: "4.9/5 Rating", bgColor: "bg-blue-100", textColor: "text-blue-700" }
      ]
    },
    {
      id: 4,
      institution: "Binus SLC",
      role: "Ex-Trainee Assistant Laboratory",
      roleColor: "text-green-600",
      period: "Sep 2024 - Dec 2024",
      logo: "./Logo/slc.jpg",
      description: "Participated in Core Training and Pre-Training programs at Binus Software Laboratory Center, developing foundational skills in technical instruction, laboratory operations, and academic mentorship. Gained intensive hands-on experience across diverse technical domains, including Data Structures & Algorithms, Java/JavaFX, basic Full-Stack Development, Computer Vision, networking with Cisco Packet Tracer, and SQL/NoSQL databases (MySQL, MongoDB, SQLite).",
      tags: []
    },
    {
      id: 5,
      institution: "Bina Nusantara University",
      role: "BINUS Ambassador",
      roleColor: "text-blue-600",
      period: "Jun 2023 - Jun 2024",
      logo: "./Logo/binus.jpg",
      description: "As a Binus Ambassador at BINUS University, I represented the university in various academic, social, and promotional activities aimed at strengthening BINUS's image and engagement with prospective students. My responsibilities included doing promotion and providing insights about campus life and academic programs. Through this role, I honed my communication and interpersonal skills while building a strong sense of professionalism and school pride.",
      tags: []
    }
    
    // {
    //   id: 6,
    //   institution: "Teach for Indonesia",
    //   role: "Volunteer English Lecturer",
    //   roleColor: "text-pink-600",
    //   period: "2024",
    //   description: "Served as volunteer English Lecturer, mentoring young learners to improve their language skills.",
    //   tags: []
    // }
    // {
    //   id: 1,
    //   institution: "Binus University",
    //   role: "Computer Science Student",
    //   roleColor: "text-blue-600",
    //   period: "2024 - Present",
    //   description: "Currently pursuing Bachelor's degree in Computer Science with a GPA of 3.96. Specializing in artificial intelligence and software development.",
    //   tags: [
    //     { text: "GPA: 3.96", bgColor: "bg-blue-100", textColor: "text-blue-700" }
    //   ]
    // },
    // {
    //   id: 4,
    //   institution: "DSC Binus",
    //   role: "PIC of Logistics and Events",
    //   roleColor: "text-orange-600",
    //   period: "2024 - 2025",
    //   description: "Coordinated major events including DSC Olympiad and DSC Welcoming Party 2025, managing logistics and team operations.",
    //   tags: [
    //     { text: "Outstanding Performance", bgColor: "bg-orange-100", textColor: "text-orange-700" }
    //   ]
    // },
  ];

  return (
    <section id="journey" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Journey</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
            My work and professional experience across various fields.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {journeyData.map((item, index) => (
              <div 
                key={item.id} 
                className="timeline-item fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="timeline-dot"></div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 card-hover transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="shrink-0 flex justify-center md:justify-start">
                      <img
                        src={item.logo}
                        alt={`${item.institution} logo`}
                        className="w-16 h-16 object-cover rounded-lg border border-gray-200"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{item.institution}</h3>
                          <p className={`${item.roleColor} font-medium`}>{item.role}</p>
                        </div>
                        <span className="text-gray-500 font-medium mt-2 md:mt-0">{item.period}</span>
                      </div>

                      <p className="text-gray-700">{item.description}</p>

                      {item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {item.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className={`px-3 py-1 rounded-full text-sm font-medium ${tag.bgColor} ${tag.textColor}`}
                            >
                              {tag.text}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;