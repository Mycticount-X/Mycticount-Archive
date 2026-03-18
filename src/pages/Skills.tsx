const Skills = () => {
  const technicalSkills = [
    {
      title: "Programming Languages",
      icon: "fas fa-code",
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      bgLight: "bg-blue-50",
      skills: ["Python", "TypeScript", "JavaScript", "C/C++", "Java", "R"]
    },
    {
      title: "AI & Machine Learning",
      icon: "fas fa-brain",
      color: "pink",
      gradient: "from-pink-500 to-rose-500",
      bgLight: "bg-pink-50",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Azure AI"] // Menambahkan Azure AI sesuai sertifikasimu!
    },
    {
      title: "Web Development",
      icon: "fas fa-laptop-code",
      color: "purple",
      gradient: "from-purple-500 to-indigo-500",
      bgLight: "bg-purple-50",
      skills: ["React", "Next.js", "Node.js", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap"]
    },
    {
      title: "Mobile Development",
      icon: "fas fa-mobile-alt",
      color: "green",
      gradient: "from-emerald-400 to-green-600",
      bgLight: "bg-green-50",
      skills: ["React Native", "Flutter"]
    },
    {
      title: "Database & Backend",
      icon: "fas fa-database",
      color: "orange",
      gradient: "from-orange-400 to-red-500",
      bgLight: "bg-orange-50",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Supabase"] 
    },
    {
      title: "Tools & Others",
      icon: "fas fa-tools",
      color: "gray",
      gradient: "from-gray-600 to-slate-800",
      bgLight: "bg-gray-100",
      skills: ["Git & GitHub", "Docker", "Figma", "Postman", "VS Code"]
    }
  ];

  const softSkills = [
    { name: "Leadership", icon: "fas fa-users", color: "text-blue-600" },
    { name: "Teamwork", icon: "fas fa-handshake", color: "text-green-600" },
    { name: "Communication", icon: "fas fa-comments", color: "text-purple-600" },
    { name: "Problem Solving", icon: "fas fa-lightbulb", color: "text-yellow-500" }
  ];

  return (
    <section id="skills" className="py-24 bg-white relative">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Technologies</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6">
            A comprehensive overview of my technical expertise and tools I use to build digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {technicalSkills.map((category, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className={`absolute -right-16 -top-16 w-32 h-32 bg-gradient-to-br ${category.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

              <div className="flex items-center mb-8 relative z-10">
                <div className={`w-14 h-14 ${category.bgLight} rounded-2xl flex items-center justify-center mr-5 shadow-inner transform group-hover:rotate-6 transition-transform duration-300`}>
                  <i className={`${category.icon} text-2xl bg-clip-text text-transparent bg-gradient-to-br ${category.gradient}`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2.5 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold bg-gray-50 text-gray-700 border border-gray-100 hover:bg-white hover:shadow-md hover:border-${category.color}-200 transition-all duration-300 cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12" data-aos="fade-up" data-aos-offset="0">
          <div className="bg-gradient-to-br from-gray-900 to-blue-950 rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center relative z-10">
              Beyond the Code: <span className="text-blue-400">Soft Skills</span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
              {softSkills.map((skill, index) => (
                <div 
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <i className={`${skill.icon} ${skill.color} text-3xl`}></i>
                  </div>
                  <h4 className="font-bold text-white tracking-wide">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;