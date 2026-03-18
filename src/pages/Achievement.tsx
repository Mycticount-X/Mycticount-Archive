const Achievement = () => {
  const achievementsData = [
    {
      id: 1,
      title: "Vice President of S-Class",
      description: "The School of Computer Science's flagship class in the Product Creation division, focuses on the development of technology products.",
      image: "/s-class.jpg",
      icon: "fas fa-star",
      imgBg: "from-yellow-50 to-yellow-100",
      iconBg: "from-yellow-400 to-yellow-600"
    },
    {
      id: 2,
      title: "Hackathon Enthusiast",
      description: "Participated in various Hackathon such as Microsoft elevAIte 2024, Gemastik 2025, and DevFest Jakarta 2025.",
      image: "/gemastik.jpeg",
      icon: "fas fa-laptop-code",
      imgBg: "from-blue-50 to-blue-100",
      iconBg: "from-blue-400 to-blue-600"
    },
    {
      id: 3,
      title: "Ex-Trainee of SLC",
      description: "Joined as a trainee laboratory assistant and participate in Core Training at Binus University Student Laboratory Center.",
      image: "/aslab.jpg",
      icon: "fas fa-user-graduate",
      imgBg: "from-purple-50 to-purple-100",
      iconBg: "from-purple-400 to-purple-600"
    },
    {
      id: 4,
      title: "App and Web Developer",
      description: "Developed innovative applications showcased in various hackathons, demonstrating creativity and technical skills.",
      image: "/hackathon.png",
      icon: "fas fa-code",
      imgBg: "from-indigo-50 to-indigo-100",
      iconBg: "from-indigo-400 to-indigo-600"
    },
    {
      id: 5,
      title: "CTF Olympiad",
      description: "Participated in prestigious Capture The Flag competitions, including Crack The Shield 2025 and National Cyber Week 2025.",
      image: "/ctf.jpg",
      icon: "fas fa-shield-alt",
      imgBg: "from-red-50 to-red-100",
      iconBg: "from-red-400 to-red-600"
    },
    {
      id: 6,
      title: "Founder of Myctix Archive",
      description: "A digital learning companion built on Notion, designed exclusively for Binus freshmen who want to master their courses with clarity, structure, and less stress.",
      image: "/myctix-archive.jpeg",
      icon: "fas fa-book",
      imgBg: "from-teal-50 to-teal-100",
      iconBg: "from-teal-400 to-teal-600"
    },
    {
      id: 7,
      title: "Multi-Organization Involvement",
      description: "Actively contributed to four different organisations, taking on diverse roles that strengthened my leadership, collaboration, and project execution skills.",
      image: "/organisation.jpeg",
      icon: "fas fa-network-wired",
      imgBg: "from-orange-50 to-orange-100",
      iconBg: "from-orange-400 to-orange-600"
    },
    {
      id: 8,
      title: "English Lecturer at TFI",
      description: "Served as a volunteer English lecturer at Teach for Indonesia, teaching and mentoring many young learners to improve their language skills.",
      image: "/teaching.jpg",
      icon: "fas fa-chalkboard-teacher",
      imgBg: "from-pink-50 to-pink-100",
      iconBg: "from-pink-400 to-pink-600"
    },
    {
      id: 9,
      title: "Event and Logistic Coordinator",
      description: "Led major organisational events such as the DSC Olympiad and DSC Welcoming Party 2025, coordinating teams and ensuring smooth event execution.",
      image: "/event.jpeg",
      icon: "fas fa-people-carry",
      imgBg: "from-green-50 to-green-100",
      iconBg: "from-green-400 to-green-600"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
            My accomplishments and recognitions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsData.map((item, index) => (
            <div 
              key={item.id} 
              className="card-hover bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-200 fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gambar dengan Background Gradien Dinamis */}
              <div className={`h-48 bg-gradient-to-br ${item.imgBg} flex items-center justify-center overflow-hidden border-b border-gray-200`}>
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="p-6">
                {/* Ikon dengan Background Gradien Dinamis */}
                <div className={`w-12 h-12 bg-gradient-to-br ${item.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                  <i className={`${item.icon} text-white text-xl`}></i>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement;