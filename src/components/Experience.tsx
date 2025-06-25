
export const Experience = () => {
  const experiences = [
    {
      period: "Jan 2024 - Present",
      company: "COGNIZANT",
      position: "PROGRAMMER ANALYST",
      description: "A test automation engineer is mandatory for better working and the best results from the software. Automation test engineers are highly important as they perform automatic tests on the latest and present software by designing and developing programs. With the help of various tests."
    },
    {
      period: "AICTE INTERNSHIP",
      company: "AI-ML VIRTUAL INTERNSHIP",
      position: "Machine Learning Intern",
      description: "Practical experience in AI and ML through hands-on projects. Exposure to a variety of tools and frameworks used in the industry. Insights into the broader applications and implications of AI and ML. Free digital certificate of completion, highlighting your achievements during the program."
    }
  ];

  const project = {
    title: "DISTANCE POLE MAINTENANCE DEVICE",
    filingDate: "May 13, 2022",
    issueDate: "Jun 10, 2022",
    applicationNumber: "202231027724",
    patentOffice: "India"
  };

  const certifications = [
    "NPTEL/COURSERA/Udemy",
    "1.Softskills & Pesonality",
    "2.Core Java",
    "3.Automation Testing using Selenium-Java",
    "4.Cisco Networking Academy",
    "5.AWS Cloud Foundation",
    "6.Java Script basics",
    "7.Programming skills with Python"
  ];

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">{exp.period}</p>
                  <h3 className="text-xl font-semibold text-slate-800 mb-1">{exp.company}</h3>
                  <h4 className="text-lg font-medium text-yellow-600 mb-3">{exp.position}</h4>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Project</h3>
            <div className="border-l-4 border-yellow-400 pl-4">
              <h4 className="text-lg font-semibold text-slate-800 mb-2">{project.title}</h4>
              <div className="text-sm text-slate-600 space-y-1">
                <p>Filing date: {project.filingDate}</p>
                <p>Issue date: {project.issueDate}</p>
                <p>Application number: {project.applicationNumber}</p>
                <p>Patent Office: {project.patentOffice}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Certifications</h3>
            <div className="space-y-2">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-slate-600">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
