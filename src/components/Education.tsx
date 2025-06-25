
export const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      institution: "JIS COLLEGE OF ENGINEERING",
      period: "2019 - 2023",
      grade: "PERCENT- 83%"
    },
    {
      degree: "HIGHER SECONDARY",
      institution: "BHATPARA AMARKRISHNA PATHSALA",
      period: "",
      grade: "PERCENT- 69.7%"
    }
  ];

  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Education</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="relative mb-8 last:mb-0">
              <div className="flex items-start">
                <div className="flex flex-col items-center mr-6">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                  {index !== education.length - 1 && (
                    <div className="w-0.5 h-24 bg-slate-200 mt-2"></div>
                  )}
                </div>
                <div className="bg-slate-50 p-6 rounded-xl flex-1 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{edu.degree}</h3>
                  <h4 className="text-lg font-medium text-yellow-600 mb-2">{edu.institution}</h4>
                  <div className="flex flex-col sm:flex-row sm:justify-between text-slate-600">
                    {edu.period && <span>{edu.period}</span>}
                    <span className="font-medium">{edu.grade}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
