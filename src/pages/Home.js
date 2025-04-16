import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-900 text-white p-8">
      <h1 className="text-5xl font-bold">Deadlock Detection & Prevention Tool</h1>
      <p className="mt-4 text-lg">Understand, Simulate, and Prevent Deadlocks Visually</p>
      <a href="/simulation" className="mt-6 px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 transition">
        Start Simulation
      </a>
      <div className="mt-8">
        <h2 className="text-3xl font-semibold">What is a Deadlock?</h2>
        <p className="mt-2 text-lg">A deadlock is a situation where a set of processes is blocked because each process is holding a resource and waiting for another resource acquired by some other process.</p>
      </div>
      <div className="mt-8">
        <h2 className="text-3xl font-semibold">Necessary Conditions for Deadlock</h2>
        <ul className="mt-2 list-disc list-inside">
          <li><strong>Mutual Exclusion:</strong> Only one process can use a resource at any given time.</li>
          <li><strong>Hold and Wait:</strong> A process is holding at least one resource and waiting to acquire other resources.</li>
          <li><strong>No Preemption:</strong> A resource cannot be taken from a process unless the process releases it.</li>
          <li><strong>Circular Wait:</strong> A set of processes are waiting for each other in a circular fashion.</li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-3xl font-semibold">Methods of Handling Deadlocks</h2>
        <ul className="mt-2 list-disc list-inside">
          <li><strong>Deadlock Prevention:</strong> Ensures that at least one of the necessary conditions for deadlock cannot hold.</li>
          <li><strong>Deadlock Avoidance:</strong> Requires prior knowledge of resource needs to avoid deadlock.</li>
          <li><strong>Deadlock Detection and Recovery:</strong> Detects deadlocks and recovers from them.</li>
          <li><strong>Deadlock Ignorance:</strong> Allows deadlocks to occur and handles them as they arise.</li>
        </ul>
      </div>
      <footer className="mt-8">
        <a href="https://github.com/Chetan42Rock/Deadlock-toolkit.git" className="text-gray-300">GitHub</a>
      </footer>
    </div>
  );
};

export default Home;
