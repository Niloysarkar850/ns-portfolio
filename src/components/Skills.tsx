
import { useState } from "react";

export const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const expertise = [
    "Java", "Python", "JavaScript", "Automation Testing", "Selenium",
    "Test-NG", "Cucumber", "Rest API", "Git", "Full Stack Web Development",
    "ReactJS", "Node.js", "MongoDB", "PostgreSQL", "MySQL"
  ];

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "JavaScript"],
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600"
    },
    {
      title: "Web Development",
      skills: ["Full Stack Web Development", "ReactJS", "Node.js"],
      color: "bg-emerald-500",
      hoverColor: "hover:bg-emerald-600"
    },
    {
      title: "Database Technologies",
      skills: ["MongoDB", "PostgreSQL", "MySQL"],
      color: "bg-indigo-500",
      hoverColor: "hover:bg-indigo-600"
    },
    {
      title: "Testing Frameworks",
      skills: ["Selenium", "TestNG", "Cucumber", "Rest API"],
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "AWS", "Cisco Networking"],
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600"
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Communication"],
      color: "bg-yellow-500",
      hoverColor: "hover:bg-yellow-600"
    }
  ];

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto animate-scale-in"></div>
        </div>

        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">Core Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {expertise.map((skill, index) => (
              <span
                key={skill}
                className="bg-slate-800 text-white px-6 py-3 rounded-full font-medium hover:bg-yellow-500 hover:text-slate-800 transition-all duration-300 cursor-default hover:scale-110 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {skill}
                {hoveredSkill === skill && (
                  <span className="ml-2 animate-bounce">⭐</span>
                )}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
            >
              <div className={`w-12 h-12 ${category.color} ${category.hoverColor} rounded-lg mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                <div className="w-6 h-6 bg-white rounded opacity-80 transition-all duration-300 group-hover:opacity-100"></div>
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                {category.title}
              </h4>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill} 
                    className="flex items-center group-hover:translate-x-2 transition-transform duration-300"
                    style={{ transitionDelay: `${skillIndex * 0.05}s` }}
                  >
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:animate-pulse"></div>
                    <span className="text-slate-600 group-hover:text-slate-800 transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full animate-float">
            <span className="text-sm font-medium">Continuously learning and improving</span>
            <span className="animate-spin">🚀</span>
          </div>
        </div>
      </div>
    </section>
  );
};
