import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent"></div>
        
        <div className="relative container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Deadlock Detection & Prevention Tool
          </h1>
          <p className="text-xl mb-8 text-purple-200 max-w-2xl">
            Understand, Simulate, and Prevent Deadlocks with our interactive visualization tool
          </p>
          <a 
            href="/simulation" 
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            Start Simulation
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* What is Deadlock */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-4 text-purple-300">What is a Deadlock?</h2>
            <p className="text-lg text-purple-100">
              A deadlock is a situation where a set of processes is blocked because each process is holding a resource and waiting for another resource acquired by some other process.
            </p>
          </div>

          {/* Necessary Conditions */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-4 text-purple-300">Necessary Conditions</h2>
            <ul className="space-y-3 text-purple-100">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3"></span>
                <span><strong className="text-purple-300">Mutual Exclusion:</strong> Only one process can use a resource at any given time.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3"></span>
                <span><strong className="text-purple-300">Hold and Wait:</strong> A process is holding at least one resource and waiting to acquire other resources.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3"></span>
                <span><strong className="text-purple-300">No Preemption:</strong> A resource cannot be taken from a process unless the process releases it.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3"></span>
                <span><strong className="text-purple-300">Circular Wait:</strong> A set of processes are waiting for each other in a circular fashion.</span>
              </li>
            </ul>
          </div>

          {/* Methods of Handling */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-4 text-purple-300">Methods of Handling</h2>
            <ul className="space-y-3 text-purple-100">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3"></span>
                <span><strong className="text-purple-300">Deadlock Prevention:</strong> Ensures that at least one of the necessary conditions for deadlock cannot hold.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3"></span>
                <span><strong className="text-purple-300">Deadlock Avoidance:</strong> Requires prior knowledge of resource needs to avoid deadlock.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3"></span>
                <span><strong className="text-purple-300">Deadlock Detection and Recovery:</strong> Detects deadlocks and recovers from them.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3"></span>
                <span><strong className="text-purple-300">Deadlock Ignorance:</strong> Allows deadlocks to occur and handles them as they arise.</span>
              </li>
            </ul>
          </div>

          {/* Visualization Preview */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-4 text-purple-300">Interactive Visualization</h2>
            <div className="relative h-64 bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-purple-200 mb-4">Experience our interactive deadlock visualization tool</p>
                  <a 
                    href="/simulation" 
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                  >
                    Try it now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-purple-300 mb-4 md:mb-0">
            Deadlock Detection & Prevention Tool
          </div>
          <a 
            href="https://github.com/Chetan42Rock/Deadlock-toolkit.git" 
            className="text-purple-300 hover:text-purple-200 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
