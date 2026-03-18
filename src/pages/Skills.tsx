const Skills = () => {
  const technicalSkills = [
    {
      title: "Programming Languages",
      icon: "fas fa-code",
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      bgLight: "bg-blue-50",
      skills: [
        { name: "Python", style: "bg-yellow-100 text-yellow-700" },
        { name: "TypeScript", style: "bg-blue-100 text-blue-700" },
        { name: "JavaScript", style: "bg-orange-100 text-orange-700" },
        { name: "C/C++", style: "bg-green-100 text-green-700" },
        { name: "Java", style: "bg-red-100 text-red-700" },
        { name: "R", style: "bg-purple-100 text-purple-700" }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: "fas fa-brain",
      color: "pink",
      gradient: "from-pink-500 to-rose-500",
      bgLight: "bg-pink-50",
      skills: [
        { name: "TensorFlow", style: "bg-red-100 text-red-700" },
        { name: "PyTorch", style: "bg-orange-100 text-orange-700" },
        { name: "Scikit-learn", style: "bg-yellow-100 text-yellow-700" },
        { name: "OpenCV", style: "bg-green-100 text-green-700" },
        { name: "Azure AI", style: "bg-purple-100 text-purple-700" }
      ]
    },
    {
      title: "Web Development",
      icon: "fas fa-laptop-code",
      color: "purple",
      gradient: "from-purple-500 to-indigo-500",
      bgLight: "bg-purple-50",
      skills: [
        { name: "HTML5", style: "bg-red-100 text-red-700" },
        { name: "CSS3", style: "bg-orange-100 text-orange-700" },
        { name: "Node.js", style: "bg-green-100 text-green-700" },
        { name: "React", style: "bg-blue-100 text-blue-700" },
        { name: "Tailwind", style: "bg-cyan-100 text-cyan-700" },
      ]
    },
    {
      title: "Mobile Development",
      icon: "fas fa-mobile-alt",
      color: "green",
      gradient: "from-emerald-400 to-green-600",
      bgLight: "bg-green-50",
      skills: [
        { name: "React Native", style: "bg-blue-100 text-blue-700" },
        { name: "Flutter", style: "bg-cyan-100 text-cyan-700" }
      ]
    },
    {
      title: "Database & Backend",
      icon: "fas fa-database",
      color: "orange",
      gradient: "from-orange-400 to-red-500",
      bgLight: "bg-orange-50",
      skills: [
        { name: "MySQL", style: "bg-blue-100 text-blue-700" },
        { name: "PostgreSQL", style: "bg-purple-100 text-purple-700" },
        { name: "MongoDB", style: "bg-green-100 text-green-700" },
        { name: "Firebase", style: "bg-red-100 text-red-700" },
        { name: "FastAPI", style: "bg-orange-100 text-orange-700" },
        { name: "Supabase", style: "bg-yellow-100 text-yellow-700" },
      ]
    },
    {
      title: "Tools & Others",
      icon: "fas fa-tools",
      color: "gray",
      gradient: "from-gray-600 to-slate-800",
      bgLight: "bg-gray-100",
      skills: [
        { name: "Git", style: "bg-gray-100 text-gray-700" },
        { name: "GitHub", style: "bg-orange-100 text-orange-700" },
        { name: "Docker", style: "bg-blue-100 text-blue-700" },
        { name: "Figma", style: "bg-purple-100 text-purple-700" },
        { name: "VS Code", style: "bg-blue-100 text-blue-700" },
        { name: "Postman", style: "bg-green-100 text-green-700" }
      ]
    }
  ];

  const softSkills = [
    { name: "Leadership", icon: "fas fa-users", color: "text-blue-600" , level: null , gradient: "from-blue-600 to-blue-500" },
    { name: "Teamwork", icon: "fas fa-handshake", color: "text-green-600" , level: null , gradient: "from-green-600 to-green-500" },
    { name: "Communication", icon: "fas fa-comments", color: "text-red-600" , level: null , gradient: "from-red-600 to-red-500" },
    { name: "Problem Solving", icon: "fas fa-lightbulb", color: "text-yellow-500" , level: null , gradient: "from-yellow-500 to-yellow-400" }
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

        {/* Technical Skills Section */}
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
                    className={`px-4 py-2 rounded-xl text-sm font-semibold border border-gray-100 hover:shadow-md hover:border-${category.color}-200 transition-all duration-300 cursor-default ${skill.style}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="mt-12" data-aos="fade-up" data-aos-offset="0">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-30 bg-gradient-to-br from-blue-50 to-purple-50"></div>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center relative z-10">
              Beyond the Code: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Soft Skills</span>
            </h3>

            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8 relative z-10">
              Personal strengths and collaboration habits that make projects run smoothly.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 80}
                  className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-transform transform hover:-translate-y-1"
                >
                  <div className="w-16 h-16 mb-4 rounded-full flex items-center justify-center ring-1 ring-gray-100">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-white/80 to-transparent">
                      <i className={`${skill.icon} ${skill.color} text-2xl`}></i>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 tracking-wide">{skill.name}</h4>
                  <div className="mt-3 w-full">
                    <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                      <div className={`h-2 rounded-full bg-gradient-to-r ${skill.gradient}`} style={{ width: `${skill.level ?? 100}%` }}></div>
                    </div>
                    <div className="mt-2 text-xs text-gray-500">{skill.level ? `${skill.level}% mastery` : 'Proven in real projects'}</div>
                  </div>
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