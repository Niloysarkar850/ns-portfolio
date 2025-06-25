
export const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block bg-yellow-400 text-slate-800 px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce">
              Available for Opportunities
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-6 animate-fade-in">
              <span className="inline-block hover:animate-pulse">NILOY</span>{" "}
              <span className="inline-block hover:animate-pulse" style={{ animationDelay: '0.1s' }}>SARKAR</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-slate-600 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Programmer & Analyst
              </span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl animate-fade-in leading-relaxed" style={{ animationDelay: '0.3s' }}>
              Passionate about automation testing and software development. 
              Experienced in creating efficient solutions and performing quality assurance 
              through comprehensive testing frameworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a
                href="#contact"
                className="bg-yellow-400 hover:bg-yellow-500 text-slate-800 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
              >
                Get In Touch
              </a>
              <a
                href="#experience"
                className="border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
              >
                View Work
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="relative group">
              <div className="w-80 h-80 bg-yellow-400 rounded-2xl transform rotate-6 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-105"></div>
              <img
                src="/lovable-uploads/8365c14b-d98c-480b-8bb4-348390c5601b.png"
                alt="Niloy Sarkar"
                className="absolute top-0 left-0 w-80 h-80 object-cover rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1"
              />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-slate-800 font-bold text-lg">👋</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
