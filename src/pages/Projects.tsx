interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: { name: string; style: string }[];
  link?: string;
  demoLink?: string;
}

const ProjectCard = ({ project, index }: { project: ProjectItem; index: number }) => {
  const projectButtonText = project.link ? (project.demoLink ? "Project" : "View Project") : "";
  const demoButtonText = project.demoLink ? (project.link ? "Demo" : "View Demo") : "";

  return (
    <div 
      className="card-hover bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 fade-in-up flex flex-col h-full"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="h-64 w-full bg-gray-100 overflow-hidden relative group shrink-0">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{project.description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag, tagIndex) => (
            <span 
              key={tagIndex} 
              className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${tag.style}`}
            >
              {tag.name}
            </span>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-row gap-3 mt-auto">
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 inline-flex justify-center items-center px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              <i className="fas fa-code mr-2"></i>
              {projectButtonText}
            </a>
          )}

          {project.demoLink && (
            <a 
              href={project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 inline-flex justify-center items-center px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              <i className="fas fa-external-link-alt mr-2"></i>
              {demoButtonText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectsData: ProjectItem[] = [
    {
      id: 1,
      title: "Myctix Archive",
      description: "A digital marketplace and resource hub for educational materials, integrated with Notion.",
      image: "./logo.png",
      tags: [
        { name: "React", style: "bg-blue-100 text-blue-700" },
        { name: "Notion API", style: "bg-green-100 text-green-700" },
        { name: "Tailwind", style: "bg-purple-100 text-purple-700" }
      ],
      link: "https://github.com/Mycticount-X/Myctix-Archive", 
      demoLink: "https://myctix-archive.vercel.app/"
    },
    {
      id: 2,
      title: "Cychael of Energy",
      description: "Smart mobile application for auditing and analyzing household energy consumption efficiency.",
      image: "./logo.png",
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
      image: "./logo.png",
      tags: [
        { name: "Next.js", style: "bg-blue-100 text-blue-700" },
        { name: "MongoDB", style: "bg-purple-100 text-purple-700" },
        { name: "Tailwind", style: "bg-pink-100 text-pink-700" }
      ],
      link: "https://github.com/Mycticount-X/ocean-trade",
      demoLink: "https://ocean-trade.vercel.app/"
    },
    {
      id: 4,
      title: "Gesture Deck",
      description: "A simple interactive rock paper scissors game controlled entirely by hand gestures using Computer Vision.",
      image: "./logo.png",
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
      image: "./logo.png",
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
      image: "./logo.png",
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
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;