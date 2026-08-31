import { useMemo, useState } from "react";

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
      id: 7,
      title: "Pantryon",
      description: "A cloud-based mobile inventory management app aimed at minimizing food waste through automatic reminders, expiry date recording, barcode scanning features, and intelligent recipe recommendations.",
      image: "./logo.jpg",
      tags: [
        { name: "Flutter", style: "bg-blue-100 text-blue-700" },
        { name: "Supabase", style: "bg-teal-100 text-teal-700" },
        { name: "Dart", style: "bg-green-100 text-green-700" }
      ],
      link: "https://github.com/Mycticount-X/Pantryon-Mobile",
      demoLink: "https://github.com/Mycticount-X/Pantryon-Mobile/releases"
    },
    {
      id: 10,
      title: "Verilink",
      description: "A machine learning-powered web application designed to proactively detect malicious URLs and phishing threats using lexical feature analysis.",
      image: "./logo.jpg",
      tags: [
        { name: "React", style: "bg-blue-100 text-blue-700" },
        { name: "FASTAPI", style: "bg-yellow-100 text-yellow-700" },
        { name: "Machine Learning", style: "bg-green-100 text-green-700" }
      ],
      link: "https://github.com/Mycticount-X/Verilink",
      demoLink: "https://verilink-nine.vercel.app/"
    },
    {
      id: 9,
      title: "Heart-Pulse",
      description: "A data-driven health application designed to predict and forecast cardiovascular risks over a 10-year trajectory.",
      image: "./logo.jpg",
      tags: [
        { name: "Flutter", style: "bg-blue-100 text-blue-700" },
        { name: "Supabase", style: "bg-teal-100 text-teal-700" },
        { name: "FASTAPI", style: "bg-yellow-100 text-yellow-700" },
        { name: "Computer Vision", style: "bg-green-100 text-green-700" }
      ],
      link: "https://github.com/Mycticount-X/Heart-Pulse"
    },
    {
      id: 2,
      title: "Cychael of Energy",
      description: "A cloud-based mobile application designed to help users audit and optimize their household energy consumption efficiency.",
      image: "./logo.jpg",
      tags: [
        { name: "React Native", style: "bg-blue-100 text-blue-700" },
        { name: "Firebase", style: "bg-orange-100 text-orange-700" },
        { name: "EAS Build", style: "bg-gray-100 text-gray-700" },
        // { name: "Gen-AI", style: "bg-green-100 text-green-700" },
      ],
      link: "https://github.com/Joes131205/cychael-energy"
    },
    {
      id: 11,
      title: "Intervon",
      description: "An AI-powered interview coach designed for real-time and objective job interview simulation.",
      image: "./logo.jpg",
      tags: [
        { name: "React", style: "bg-blue-100 text-blue-700" },
        { name: "FASTAPI", style: "bg-yellow-100 text-yellow-700" },
        { name: "Docker", style: "bg-indigo-100 text-indigo-700" },
        { name: "Llama", style: "bg-gray-100 text-gray-700" },
        { name: "Pinecone", style: "bg-amber-100 text-amber-700" },
        { name: "Whisper", style: "bg-emerald-100 text-emerald-700" },
      ],
      link: "https://github.com/Mycticount-X/Intervon",
    },
    {
      id: 8,
      title: "OncoCare",
      description: "An AI-powered medical platform utilizing Computer Vision and Deep Learning for precise breast cancer ultrasound image classification.",
      image: "./logo.jpg",
      tags: [
        { name: "React", style: "bg-blue-100 text-blue-700" },
        { name: "Supabase", style: "bg-teal-100 text-teal-700" },
        { name: "FASTAPI", style: "bg-yellow-100 text-yellow-700" },
        { name: "Computer Vision", style: "bg-green-100 text-green-700" }
      ],
      link: "https://github.com/Mycticount-X/OncoCare"
    },
    {
      id: 1,
      title: "Myctix Archive",
      description: "A digital marketplace and resource hub for educational materials, integrated with Notion.",
      image: "./logo.jpg",
      tags: [
        { name: "React", style: "bg-blue-100 text-blue-700" },
        { name: "Notion", style: "bg-gray-100 text-gray-700" },
        { name: "Tailwind", style: "bg-purple-100 text-purple-700" }
      ],
      link: "https://github.com/Mycticount-X/Myctix-Archive", 
      demoLink: "https://myctix-archive.vercel.app/"
    },
    {
      id: 3,
      title: "Ocean Trade",
      description: "A specialized e-commerce platform designed to facilitate maritime asset trading and ship sales.",
      image: "./logo.jpg",
      tags: [
        { name: "HTML", style: "bg-red-100 text-red-700" },
        { name: "CSS", style: "bg-purple-100 text-purple-700" },
        { name: "JavaScript", style: "bg-yellow-100 text-yellow-700" }
      ],
      link: "https://github.com/Mycticount-X/ocean-trade",
      demoLink: "https://ocean-trade.vercel.app/"
    },
    {
      id: 12,
      title: "RentCar",
      description: "A web-based car rental platform allowing users to browse, compare, and book vehicles from various providers.",
      image: "./logo.jpg",
      tags: [
        { name: "ASP.NET", style: "bg-blue-100 text-blue-700" },
        { name: "MySQL", style: "bg-yellow-100 text-yellow-700" },
      ],
      link: "https://github.com/Mycticount-X/RentCar",
    },
    {
      id: 4,
      title: "Gesture Deck",
      description: "A simple interactive rock paper scissors game controlled entirely by hand gestures using Computer Vision.",
      image: "./logo.jpg",
      tags: [
        { name: "Python", style: "bg-green-100 text-green-700" },
        { name: "OpenCV", style: "bg-blue-100 text-blue-700" },
        { name: "MediaPipe", style: "bg-purple-100 text-purple-700" }
      ],
      link: "https://github.com/Mycticount-X/GestureDeck"
    },
    // {
    //   id: 5,
    //   title: "Encryption and Decryption App",
    //   description: "Python Tkinter-based application for securing sensitive data through text encryption and decryption.",
    //   image: "./logo.jpg",
    //   tags: [
    //     { name: "Python", style: "bg-green-100 text-green-700" },
    //     { name: "Tkinter", style: "bg-blue-100 text-blue-700" },
    //     { name: "Cryptography", style: "bg-red-100 text-red-700" }
    //   ],
    //   link: "https://github.com/Mycticount-X/Encryption-and-Decryption-Program"
    // },
    {
      id: 6,
      title: "The Cnake",
      description: "A classic retro arcade game simulation running within a Command Line Interface (CLI) environment.",
      image: "./logo.jpg",
      tags: [
        { name: "C", style: "bg-blue-100 text-blue-700" },
        { name: "CLI", style: "bg-gray-100 text-gray-700" },
        { name: "Game Dev", style: "bg-green-100 text-green-700" }
      ],
      link: "https://github.com/Mycticount-X/The-Cnake"
    },
    {
      id: 13,
      title: "MyctixFlow",
      description: "An interactive Kanban-style productivity tool offering extensive workflow customization and seamless drag-and-drop mechanics.",
      image: "./logo.jpg",
      tags: [
        { name: "React", style: "bg-blue-100 text-blue-700" },
      ],
      link: "https://github.com/Mycticount-X/MyctixFlow",
    },
  ];

  
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projectsData.length / itemsPerPage);

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return projectsData.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage]);

  const goToPage = (page: number) => {
    const nextPage = Math.min(Math.max(page, 1), totalPages);
    setCurrentPage(nextPage);

    setTimeout(() => {
      const projectSection = document.getElementById('projects');
      if (projectSection) {
        projectSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

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
          {currentItems.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </div>

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

export default Projects;