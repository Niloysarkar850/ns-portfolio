
import { Phone, Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          <p className="text-slate-300 mt-6 text-lg max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-slate-700 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-slate-800" />
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm">Phone</p>
                    <p className="text-white font-medium">+91-628982956</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-slate-800" />
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm">Email</p>
                    <p className="text-white font-medium">ndas140850@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <div className="w-6 h-6 bg-slate-800 rounded"></div>
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm">Address</p>
                    <p className="text-white font-medium">
                      Mitrapararoad, Barasat<br />
                      Pin-700124, Swarnapuri
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Send Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-slate-700 text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-colors"
                    placeholder="Enter subject"
                  />
                </div>
                
                <div>
                  <label className="block text-slate-700 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-colors resize-none"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-slate-700">
          <p className="text-slate-400">
            © 2024 Niloy Sarkar. All rights reserved. Built with passion for excellence.
          </p>
        </div>
      </div>
    </section>
  );
};
