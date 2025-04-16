import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
      <h1 className="text-5xl font-bold">Deadlock Detection & Prevention Tool</h1>
      <p className="mt-4 text-lg">Understand, Simulate, and Prevent Deadlocks Visually</p>
      <a href="/simulation" className="mt-6 px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 transition">
        Start Simulation
      </a>
      <div className="mt-8">
        <h2 className="text-2xl">What is a Deadlock?</h2>
        <p className="mt-2">A deadlock is a situation in computing where two or more processes are unable to proceed because each is waiting for the other to release resources.</p>
      </div>
      <footer className="mt-8">
        <a href="https://github.com" className="text-gray-300">GitHub</a> | <span className="text-gray-300">Author: Your Name</span>
      </footer>
    </div>
  );
};

export default Home;
