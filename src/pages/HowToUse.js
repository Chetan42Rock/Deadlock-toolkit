import React from 'react';

const HowToUse = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">How to Use the Simulation</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Configuration Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-purple-300">1. Configuration</h2>
            <div className="space-y-4">
              <p className="text-purple-200">Start by setting up your simulation environment:</p>
              <ul className="list-disc pl-6 space-y-2 text-purple-200">
                <li>Set the number of processes in your system</li>
                <li>Define the number of resource types</li>
                <li>Input the available resources for each type</li>
              </ul>
            </div>
          </div>

          {/* Matrices Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-purple-300">2. Setting Up Matrices</h2>
            <div className="space-y-4">
              <p className="text-purple-200">Configure two important matrices:</p>
              <ul className="list-disc pl-6 space-y-2 text-purple-200">
                <li><span className="text-green-400">Allocation Matrix:</span> Shows resources currently allocated to each process</li>
                <li><span className="text-red-400">Request Matrix:</span> Shows resources requested by each process</li>
              </ul>
            </div>
          </div>

          {/* Running Simulation */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-purple-300">3. Running the Simulation</h2>
            <div className="space-y-4">
              <p className="text-purple-200">After setting up your matrices:</p>
              <ul className="list-disc pl-6 space-y-2 text-purple-200">
                <li>Click the "Detect Deadlock" button</li>
                <li>The system will analyze your configuration</li>
                <li>Results will show if the system is in a safe state</li>
              </ul>
            </div>
          </div>

          {/* Understanding Results */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-purple-300">4. Understanding Results</h2>
            <div className="space-y-4">
              <p className="text-purple-200">The visualization will show:</p>
              <ul className="list-disc pl-6 space-y-2 text-purple-200">
                <li><span className="text-green-400">Green arrows:</span> Allocation edges</li>
                <li><span className="text-red-400">Red arrows:</span> Request edges</li>
                <li><span className="text-yellow-400">Yellow nodes:</span> Deadlocked processes</li>
              </ul>
            </div>
          </div>

          {/* Tips Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300 md:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-purple-300">Tips for Effective Simulation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-purple-300">Common Scenarios to Try:</h3>
                <ul className="list-disc pl-6 space-y-2 text-purple-200">
                  <li>Simple deadlock between two processes</li>
                  <li>Circular wait with multiple processes</li>
                  <li>Safe state with proper resource allocation</li>
                  <li>Resource competition scenarios</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-purple-300">Best Practices:</h3>
                <ul className="list-disc pl-6 space-y-2 text-purple-200">
                  <li>Start with small numbers (2-3 processes)</li>
                  <li>Ensure total allocation ≤ available resources</li>
                  <li>Test both safe and unsafe states</li>
                  <li>Experiment with different prevention methods</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToUse; 