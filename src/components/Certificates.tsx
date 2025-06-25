
import { useState } from "react";
import { Download, FileImage, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Certificates = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const certificates = [
    {
      title: "AWS Cloud Foundation",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Fundamentals of cloud computing and AWS services",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      downloadUrl: "https://drive.google.com/file/d/1ZXAnenOe4JKn0n2yAJSIs-0KM77UqG9B/view?usp=sharing",
      verifyUrl: "https://drive.google.com/file/d/1ZXAnenOe4JKn0n2yAJSIs-0KM77UqG9B/view?usp=sharing"
    },
    {
      title: "Core Java Certification",
      issuer: "Oracle",
      date: "2023",
      description: "Java programming fundamentals and object-oriented concepts",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      downloadUrl: "#",
      verifyUrl: "#"
    },
    {
      title: "Selenium WebDriver",
      issuer: "Udemy",
      date: "2023",
      description: "Automation testing with Selenium WebDriver",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      downloadUrl: "#",
      verifyUrl: "#"
    },
    {
      title: "Cisco Networking Academy",
      issuer: "Cisco",
      date: "2022",
      description: "Network fundamentals and routing protocols",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      downloadUrl: "#",
      verifyUrl: "#"
    },
    {
      title: "Python Programming",
      issuer: "Coursera",
      date: "2022",
      description: "Python programming skills and data structures",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      downloadUrl: "#",
      verifyUrl: "#"
    },
    {
      title: "JavaScript Basics",
      issuer: "freeCodeCamp",
      date: "2023",
      description: "JavaScript fundamentals and DOM manipulation",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      downloadUrl: "#",
      verifyUrl: "#"
    }
  ];

  const handleDownload = (cert: any) => {
    // In a real app, this would download the actual certificate
    console.log(`Downloading certificate: ${cert.title}`);
    // Create a temporary download link
    const link = document.createElement('a');
    link.href = cert.downloadUrl;
    link.download = `${cert.title.replace(/\s+/g, '_')}_Certificate.pdf`;
    link.click();
  };

  return (
    <section id="certificates" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto animate-scale-in"></div>
          <p className="text-slate-600 mt-6 text-lg max-w-2xl mx-auto">
            Professional certifications that validate my expertise in various technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className="group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in border-0 shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={cert.imageUrl}
                  alt={cert.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleDownload(cert)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-slate-800 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                      title="Download Certificate"
                    >
                      <Download size={20} />
                    </button>
                    <button
                      onClick={() => window.open(cert.verifyUrl, '_blank')}
                      className="bg-white hover:bg-gray-100 text-slate-800 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                      title="Verify Certificate"
                    >
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
                {hoveredCard === index && (
                  <div className="absolute top-2 right-2 bg-yellow-400 text-slate-800 p-1 rounded-full animate-bounce">
                    <FileImage size={16} />
                  </div>
                )}
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-slate-800 group-hover:text-yellow-600 transition-colors duration-300">
                  {cert.title}
                </CardTitle>
                <CardDescription className="text-sm text-slate-500">
                  {cert.issuer} • {cert.date}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-slate-600 text-sm leading-relaxed">
                  {cert.description}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <button
                    onClick={() => handleDownload(cert)}
                    className="flex items-center space-x-2 text-yellow-600 hover:text-yellow-700 transition-colors duration-300 font-medium"
                  >
                    <Download size={16} />
                    <span>Download</span>
                  </button>
                  <span className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded-full">
                    Verified
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-slate-600 mb-4">
            Looking to verify any of these certificates? Click the verify button on each certificate.
          </p>
          <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">
            <FileImage size={16} />
            <span className="text-sm font-medium">All certificates are verified and authentic</span>
          </div>
        </div>
      </div>
    </section>
  );
};
