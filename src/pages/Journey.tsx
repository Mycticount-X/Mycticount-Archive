const Journey = () => {
  const journeyData = [
    {
      id: 1,
      institution: "Binus University",
      role: "Computer Science Student",
      roleColor: "text-blue-600",
      period: "2024 - Present",
      description: "Currently pursuing Bachelor's degree in Computer Science with a GPA of 3.96. Specializing in artificial intelligence and software development.",
      tags: [
        { text: "GPA: 3.96", bgColor: "bg-blue-100", textColor: "text-blue-700" }
      ]
    },
    {
      id: 2,
      institution: "Binus SLC",
      role: "Ex-Trainee Assistant Laboratory",
      roleColor: "text-green-600",
      period: "2024",
      description: "Participated in Core Training program at Binus University Student Laboratory Center.",
      tags: []
    },
    {
      id: 3,
      institution: "S-Class Binus",
      role: "Vice President",
      roleColor: "text-purple-600",
      period: "2024 - Present",
      description: "Serving as the Vice President of S-Class with a focus on Product Creation, leading initiatives in digital product development and actively participating in hackathons to drive innovative solutions.",
      tags: [
        { text: "SigmaLab", bgColor: "bg-red-100", textColor: "text-red-700" },
        { text: "Product Creation", bgColor: "bg-green-100", textColor: "text-green-700" }
      ]
    },
    {
      id: 4,
      institution: "DSC Binus",
      role: "Event Coordinator & PIC of Logistics",
      roleColor: "text-orange-600",
      period: "2024 - 2025",
      description: "Coordinated major events including DSC Olympiad and DSC Welcoming Party 2025, managing logistics and team operations.",
      tags: [
        { text: "Outstanding Performance", bgColor: "bg-orange-100", textColor: "text-orange-700" }
      ]
    },
    {
      id: 5,
      institution: "Myctix Archive",
      role: "Founder",
      roleColor: "text-teal-600",
      period: "2024 - Present",
      description: "Created a digital learning platform on Notion for Binus Computer Science students, helping 100+ students with structured study materials.",
      tags: [
        { text: "100+ Users", bgColor: "bg-teal-100", textColor: "text-teal-700" },
        { text: "4.9/5 Rating", bgColor: "bg-blue-100", textColor: "text-blue-700" }
      ]
    },
    {
      id: 6,
      institution: "Teach for Indonesia",
      role: "Volunteer English Lecturer",
      roleColor: "text-pink-600",
      period: "2024",
      description: "Served as volunteer English Lecturer, mentoring young learners to improve their language skills.",
      tags: []
    }
  ];

  return (
    <section id="journey" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Journey</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
            My academic and organizational journey
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
                
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;