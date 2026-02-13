import React from "react";

const projects = [
  {
    title: "Encription & Decryption",
    category: "WebGL Experience",
    description: "A high-performance racer built with Three.js and React Three Fiber.",
  },
  {
    title: "Vular Archive",
    category: "E-Commerce",
    description: "headless Shopify store with liquid metal animations.",
  },
  {
    title: "Apex Dashboard",
    category: "SaaS Platform",
    description: "Real-time data visualization with D3.js and WebSocket.",
  },
];

export default function Projects() {
  return (
    <section className="relative z-20 w-full min-h-screen bg-[#121212] px-6 py-24 md:px-12 md:py-32">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight">
                Projects
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">  {/* Adjust mt- if needed */}

  {/* Project 1: Encryption and Decryption */}
  <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 flex flex-col justify-between">
    <div>
      <h3 className="text-2xl font-bold text-white mb-2">Encryption & Decryption Web Application</h3>
      <p className="text-blue-400 uppercase tracking-wider text-sm mb-4">Python • AI/ML • React • HTML/CSS/JavaScript • Data Security</p>
      <p className="text-gray-300 leading-relaxed">
        Developed a secure web tool for encryption and decryption of sensitive data using AI/ML-enhanced algorithms and modern cryptographic methods. Delivered a responsive interface with efficient, high-performance operations.
      </p>
    </div>
    <a 
      href="https://your-vercel-url-for-encryption-project.vercel.app"  // ← Replace with actual Vercel URL
      target="_blank" 
      rel="noopener noreferrer"
      className="mt-6 inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group"
    >
      Visit 
      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
    </a>
  </div>

  {/* Project 2: Linkdin demo */}
  <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 flex flex-col justify-between">
    <div>
      <h3 className="text-2xl font-bold text-white mb-2">Linkdin Clone </h3>
      <p className="text-purple-400 uppercase tracking-wider text-sm mb-4">• HTML • CSS • JavaScript • GitHub</p>
      <p className="text-gray-300 leading-relaxed">
        A modern LinkedIn Clone built using HTML, CSS, and JavaScript, designed to replicate the look and feel of the professional networking platform.
      </p>
    </div>
    <a 
      href="https://linkedin-clone-virid-three.vercel.app/"  // ← Replace with actual Vercel URL
      target="_blank" 
      rel="noopener noreferrer"
      className="mt-6 inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group"
    >
      Visit 
      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
    </a>
  </div>

  {/* Project 3: Myntra clone */}
  <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300 flex flex-col justify-between">
    <div>
      <h3 className="text-2xl font-bold text-white mb-2">Myntra-clone</h3>
      <p className="text-green-400 uppercase tracking-wider text-sm mb-4">HTML • CSS • JavaScript </p>
      <p className="text-gray-300 leading-relaxed">
       A modern Myntra Clone built using HTML, CSS, and JavaScript, designed to replicate the core UI and functionality of the popular e-commerce platform Myntra. 
      </p>
    </div>
    <a 
      href="https://myntra-clone-nine-ruby.vercel.app/"  // ← Replace with actual Vercel URL
      target="_blank" 
      rel="noopener noreferrer"
      className="mt-6 inline-flex items-center text-green-400 hover:text-green-300 font-medium group"
    >
      Visit
      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
    </a>
  </div>

  {/* Project 4: Myntra clone */}
  <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300 flex flex-col justify-between">
    <div>
      <h3 className="text-2xl font-bold text-white mb-2">Myntra-clone</h3>
      <p className="text-green-400 uppercase tracking-wider text-sm mb-4">HTML • CSS • JavaScript </p>
      <p className="text-gray-300 leading-relaxed">
       A modern Myntra Clone built using HTML, CSS, and JavaScript, designed to replicate the core UI and functionality of the popular e-commerce platform Myntra. 
      </p>
    </div>
    <a 
      href="https://myntra-clone-nine-ruby.vercel.app/"  // ← Replace with actual Vercel URL
      target="_blank" 
      rel="noopener noreferrer"
      className="mt-6 inline-flex items-center text-green-400 hover:text-green-300 font-medium group"
    >
      Visit
      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
    </a>
  </div>

  {/* Project 5: Myntra clone */}
  <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300 flex flex-col justify-between">
    <div>
      <h3 className="text-2xl font-bold text-white mb-2">Myntra-clone</h3>
      <p className="text-green-400 uppercase tracking-wider text-sm mb-4">HTML • CSS • JavaScript </p>
      <p className="text-gray-300 leading-relaxed">
       A modern Myntra Clone built using HTML, CSS, and JavaScript, designed to replicate the core UI and functionality of the popular e-commerce platform Myntra. 
      </p>
    </div>
    <a 
      href="https://myntra-clone-nine-ruby.vercel.app/"  // ← Replace with actual Vercel URL
      target="_blank" 
      rel="noopener noreferrer"
      className="mt-6 inline-flex items-center text-green-400 hover:text-green-300 font-medium group"
    >
      Visit
      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
    </a>
  </div>

  {/* Project 6: Myntra clone */}
  <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300 flex flex-col justify-between">
    <div>
      <h3 className="text-2xl font-bold text-white mb-2">Myntra-clone</h3>
      <p className="text-green-400 uppercase tracking-wider text-sm mb-4">HTML • CSS • JavaScript </p>
      <p className="text-gray-300 leading-relaxed">
       A modern Myntra Clone built using HTML, CSS, and JavaScript, designed to replicate the core UI and functionality of the popular e-commerce platform Myntra. 
      </p>
    </div>
    <a 
      href="https://myntra-clone-nine-ruby.vercel.app/"  // ← Replace with actual Vercel URL
      target="_blank" 
      rel="noopener noreferrer"
      className="mt-6 inline-flex items-center text-green-400 hover:text-green-300 font-medium group"
    >
      Visit
      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
    </a>
  </div>

</div>
        </div>
    </section>
  );
}
