import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">About This Project</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Purpose */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-purple-300">Project Purpose</h2>
            <p className="text-purple-200">
              This tool helps visualize and understand deadlocks in operating systems.
              It demonstrates how deadlocks occur and provides methods to prevent them.
              Our goal is to make complex deadlock concepts more accessible through interactive visualization.
            </p>
          </div>

          {/* Technologies Used */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-purple-300">Technologies Used</h2>
            <ul className="space-y-3 text-purple-200">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                React
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Tailwind CSS
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                React Router
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Node.js
              </li>
            </ul>
          </div>

          {/* Contributors */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-purple-300">Contributors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-3 shadow-lg">
                  <span className="text-2xl font-bold">Y</span>
                </div>
                <p className="font-medium text-purple-300">Chetan Yadav</p>
                <p className="text-sm text-purple-200">Developer</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-3 shadow-lg">
                  <span className="text-2xl font-bold">A</span>
                </div>
                <p className="font-medium text-purple-300">Alka Singh</p>
                <p className="text-sm text-purple-200">Developer</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-3 shadow-lg">
                  <span className="text-2xl font-bold">K</span>
                </div>
                <p className="font-medium text-purple-300">P.V.S. Kousik Reddy</p>
                <p className="text-sm text-purple-200">Developer</p>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-purple-300">Resources</h2>
            <div className="space-y-4">
              <a 
                href="https://github.com/Chetan42Rock/Deadlock-toolkit.git" 
                className="flex items-center text-purple-200 hover:text-purple-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub Repository
              </a>
              <a 
                href="/how-to-use" 
                className="flex items-center text-purple-200 hover:text-purple-300 transition-colors"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                How to Use Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
