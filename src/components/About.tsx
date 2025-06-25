
export const About = () => {
  const languages = ["English", "Hindi", "Bengali"];
  const activities = [
    "Singing", "Gardening", "Social Work", 
    "Cooking", "Chess", "Reading books"
  ];

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Professional Overview</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              I am a dedicated Programmer Analyst with expertise in automation testing 
              and software development. Currently working at Cognizant as a Test Automation 
              Engineer, I focus on creating robust testing frameworks and ensuring software quality.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              My experience spans across various technologies including Java, Python, 
              Selenium, and cloud platforms. I'm passionate about creating efficient 
              automation solutions that improve software reliability and development workflows.
            </p>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-slate-800 mb-4">Languages</h4>
              <div className="flex flex-wrap gap-3">
                {languages.map((language) => (
                  <span
                    key={language}
                    className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Personal Interests</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Beyond programming, I enjoy a variety of activities that keep me balanced 
              and creative. These hobbies help me stay inspired and bring fresh perspectives 
              to my professional work.
            </p>
            
            <h4 className="text-xl font-semibold text-slate-800 mb-4">Extra Curricular Activities</h4>
            <div className="grid grid-cols-2 gap-3">
              {activities.map((activity) => (
                <div
                  key={activity}
                  className="bg-yellow-50 border border-yellow-200 text-slate-700 px-4 py-3 rounded-lg text-center"
                >
                  {activity}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
