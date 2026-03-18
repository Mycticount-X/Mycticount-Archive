const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Myctix Archive",
      description: "A digital marketplace and resource hub for educational materials, integrated with Notion.",
      icon: "fas fa-ticket-alt",
      bgGradient: "from-teal-400 to-teal-600",
      tags: [
        { name: "React", style: "bg-blue-100 text-blue-700" },
        { name: "Notion API", style: "bg-green-100 text-green-700" },
        { name: "Tailwind", style: "bg-purple-100 text-purple-700" }
      ],
      link: "https://myctix-archive.vercel.app/"
    },
    {
      id: 2,
      title: "Cychael of Energy",
      description: "Smart mobile application for auditing and analyzing household energy consumption efficiency.",
      icon: "fas fa-atom",
      bgGradient: "from-green-400 to-green-600",
      tags: [
        { name: "React Native", style: "bg-blue-100 text-blue-700" },
        { name: "Firebase", style: "bg-orange-100 text-orange-700" },
        { name: "AI/ML", style: "bg-green-100 text-green-700" }
      ],
      link: "https://github.com/Joes131205/cychael-energy"
    },
    {
      id: 3,
      title: "Ocean Trade",
      description: "A specialized e-commerce platform designed to facilitate maritime asset trading and ship sales.",
      icon: "fas fa-ship",
      bgGradient: "from-blue-400 to-blue-600",
      tags: [
        { name: "Next.js", style: "bg-blue-100 text-blue-700" },
        { name: "MongoDB", style: "bg-purple-100 text-purple-700" },
        { name: "Tailwind", style: "bg-pink-100 text-pink-700" }
      ],
      link: "https://ocean-trade.vercel.app/"
    },
    {
      id: 4,
      title: "Gesture Deck",
      description: "A simple interactive rock paper scissors game controlled entirely by hand gestures using Computer Vision.",
      icon: "fas fa-gamepad",
      bgGradient: "from-purple-400 to-purple-600",
      tags: [
        { name: "Python", style: "bg-green-100 text-green-700" },
        { name: "OpenCV", style: "bg-blue-100 text-blue-700" },
        { name: "MediaPipe", style: "bg-purple-100 text-purple-700" }
      ],
      link: "https://github.com/Mycticount-X/GestureDeck"
    },
    {
      id: 5,
      title: "Encryption and Decryption App",
      description: "Python Tkinter-based application for securing sensitive data through text encryption and decryption.",
      icon: "fas fa-lock",
      bgGradient: "from-red-400 to-red-600",
      tags: [
        { name: "Python", style: "bg-green-100 text-green-700" },
        { name: "Tkinter", style: "bg-blue-100 text-blue-700" },
        { name: "Cryptography", style: "bg-red-100 text-red-700" }
      ],
      link: "https://github.com/Mycticount-X/Encryption-and-Decryption-Program"
    },
    {
      id: 6,
      title: "The Cnake",
      description: "A classic retro arcade game simulation running within a Command Line Interface (CLI) environment.",
      icon: "fas fa-dragon",
      bgGradient: "from-yellow-400 to-yellow-600",
      tags: [
        { name: "C", style: "bg-blue-100 text-blue-700" },
        { name: "CLI", style: "bg-gray-100 text-gray-700" },
        { name: "Game Dev", style: "bg-green-100 text-green-700" }
      ],
      link: "https://github.com/Mycticount-X/The-Cnake"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
            Some of my recent work and projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={project.id} 
              className="card-hover bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Bagian Atas: Ikon dengan Gradien Dinamis */}
              <div className={`h-48 bg-gradient-to-br ${project.bgGradient} flex items-center justify-center text-white`}>
                <i className={`${project.icon} text-6xl transform transition-transform duration-300 hover:scale-110`}></i>
              </div>
              
              {/* Bagian Bawah: Konten */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 h-20">{project.description}</p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className={`px-3 py-1 rounded-full text-sm font-medium ${tag.style}`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
                
                {/* Link */}
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 group"
                >
                  <span>View Project</span>
                  <i className="fas fa-arrow-right transform group-hover:translate-x-1 transition-transform"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;