import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">About This Project</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-purple-800 p-6 rounded-lg">
          <h2 className="text-2xl mb-4">Project Purpose</h2>
          <p>
            This tool helps visualize and understand deadlocks in operating systems.
            It demonstrates how deadlocks occur and provides methods to prevent them.
          </p>
        </div>

        <div className="bg-purple-800 p-6 rounded-lg">
          <h2 className="text-2xl mb-4">Technologies Used</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>React Router</li>
            <li>Node.js</li>
          </ul>
        </div>

        <div className="bg-purple-800 p-6 rounded-lg">
          <h2 className="text-2xl mb-4">Contributors</h2>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
              <span className="text-xl">Y</span>
            </div>
            <div>
              <p className="font-medium">Chetan Yadav</p>
              <p className="text-sm text-gray-300">Developer</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
              <span className="text-xl">A</span>
            </div>
            <div>
              <p className="font-medium">Alka Singh</p>
              <p className="text-sm text-gray-300">Developer</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
              <span className="text-xl">K</span>
            </div>
            <div>
              <p className="font-medium">P.V.S. Kousik Reddy</p>
              <p className="text-sm text-gray-300">Developer</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-800 p-6 rounded-lg">
          <h2 className="text-2xl mb-4">Resources</h2>
          <a 
            href="https://github.com" 
            className="text-purple-300 hover:text-purple-200 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
