import React, { useState } from 'react';

const Simulation = () => {
  const [processes, setProcesses] = useState(3);
  const [resources, setResources] = useState(3);
  const [allocation, setAllocation] = useState([[0, 1, 0], [2, 0, 0], [3, 0, 2]]);
  const [request, setRequest] = useState([[0, 0, 0], [2, 0, 2], [0, 0, 0]]);
  const [available, setAvailable] = useState([2, 1, 0]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/detect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ allocation, request, available }),
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error:', error);
      setResult({
        isSafe: false,
        hasDeadlock: true,
        error: 'Failed to connect to server'
      });
    } finally {
      setLoading(false);
    }
  };

  const updateMatrix = (matrix, setMatrix, row, col, value) => {
    const newMatrix = [...matrix];
    newMatrix[row][col] = parseInt(value) || 0;
    setMatrix(newMatrix);
  };

  const updateDimensions = (newProcesses, newResources) => {
    // Update allocation matrix
    const newAllocation = [];
    for (let i = 0; i < newProcesses; i++) {
      if (i < allocation.length) {
        // Existing row - keep values and adjust columns
        newAllocation[i] = [...allocation[i].slice(0, newResources)];
        if (newResources > allocation[i].length) {
          newAllocation[i].push(...Array(newResources - allocation[i].length).fill(0));
        }
      } else {
        // New row - initialize with zeros
        newAllocation[i] = Array(newResources).fill(0);
      }
    }
    setAllocation(newAllocation);

    // Update request matrix
    const newRequest = [];
    for (let i = 0; i < newProcesses; i++) {
      if (i < request.length) {
        // Existing row - keep values and adjust columns
        newRequest[i] = [...request[i].slice(0, newResources)];
        if (newResources > request[i].length) {
          newRequest[i].push(...Array(newResources - request[i].length).fill(0));
        }
      } else {
        // New row - initialize with zeros
        newRequest[i] = Array(newResources).fill(0);
      }
    }
    setRequest(newRequest);

    // Update available resources
    const newAvailable = [...available.slice(0, newResources)];
    if (newResources > available.length) {
      newAvailable.push(...Array(newResources - available.length).fill(0));
    }
    setAvailable(newAvailable);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Deadlock Simulation</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Process/Resource Configuration */}
          <div className="bg-purple-800 p-6 rounded-lg">
            <h2 className="text-2xl mb-4">Configuration</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-2">Number of Processes</label>
                <input 
                  type="number" 
                  min="1" 
                  value={processes}
                  onChange={(e) => {
                    setProcesses(e.target.value);
                    updateDimensions(e.target.value, resources);
                  }}
                  className="w-full p-2 rounded bg-purple-700 text-white"
                />
              </div>
              <div>
                <label className="block mb-2">Number of Resources</label>
                <input 
                  type="number" 
                  min="1" 
                  value={resources}
                  onChange={(e) => {
                    setResources(e.target.value);
                    updateDimensions(processes, e.target.value);
                  }}
                  className="w-full p-2 rounded bg-purple-700 text-white"
                />
              </div>
            </div>
          </div>

          {/* Available Resources */}
          <div className="bg-purple-800 p-6 rounded-lg">
            <h2 className="text-2xl mb-4">Available Resources</h2>
            <div className="flex space-x-2">
              {available.map((val, i) => (
                <div key={i} className="flex-1">
                  <label className="block text-sm mb-1">R{i+1}</label>
                  <input
                    type="number"
                    min="0"
                    value={val}
                    onChange={(e) => {
                      const newAvailable = [...available];
                      newAvailable[i] = parseInt(e.target.value) || 0;
                      setAvailable(newAvailable);
                    }}
                    className="w-full p-2 rounded bg-purple-700 text-white"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Allocation Matrix */}
          <div className="bg-purple-800 p-6 rounded-lg">
            <h2 className="text-2xl mb-4">Allocation Matrix</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="px-2 py-1"></th>
                    {Array.from({length: resources}).map((_, i) => (
                      <th key={i} className="px-2 py-1">R{i+1}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {allocation.map((row, i) => (
                    <tr key={i}>
                      <td className="px-2 py-1">P{i+1}</td>
                      {row.map((val, j) => (
                        <td key={j} className="px-2 py-1">
                          <input
                            type="number"
                            min="0"
                            value={val}
                            onChange={(e) => updateMatrix(allocation, setAllocation, i, j, e.target.value)}
                            className="w-full p-1 rounded bg-purple-700 text-white"
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Request Matrix */}
          <div className="bg-purple-800 p-6 rounded-lg">
            <h2 className="text-2xl mb-4">Request Matrix</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="px-2 py-1"></th>
                    {Array.from({length: resources}).map((_, i) => (
                      <th key={i} className="px-2 py-1">R{i+1}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {request.map((row, i) => (
                    <tr key={i}>
                      <td className="px-2 py-1">P{i+1}</td>
                      {row.map((val, j) => (
                        <td key={j} className="px-2 py-1">
                          <input
                            type="number"
                            min="0"
                            value={val}
                            onChange={(e) => updateMatrix(request, setRequest, i, j, e.target.value)}
                            className="w-full p-1 rounded bg-purple-700 text-white"
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium disabled:opacity-50"
        >
          {loading ? 'Processing...' : 'Detect Deadlock'}
        </button>
      </form>

      {result && (
        <div className="mt-8 bg-purple-800 p-6 rounded-lg">
          <h2 className="text-2xl mb-4">Results</h2>
          <div className="space-y-4">
            {result.error ? (
              <p className="text-red-400">{result.error}</p>
            ) : result.isSafe ? (
              <div>
                <div className="flex items-center text-green-400">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>System is in safe state (No deadlock)</p>
                </div>
                <p className="mt-2">Safe sequence: {result.safeSequence.map(p => `P${p+1}`).join(' → ')}</p>
              </div>
            ) : (
              <div>
                <div className="flex items-center text-red-400">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p>System is in unsafe state (Deadlock detected)</p>
                </div>
                
                {/* Deadlock Visualization */}
                <div className="mt-6">
                  <h3 className="text-xl mb-3">Deadlock Visualization</h3>
                  <div className="bg-purple-900 p-4 rounded-lg">
                    <div className="flex justify-center">
                      {allocation.map((_, i) => (
                        <div key={i} className="flex flex-col items-center mx-4">
                          <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center mb-2">
                            <span className="font-bold">P{i+1}</span>
                          </div>
                          <div className="flex space-x-4">
                            {allocation[i].map((alloc, j) => (
                              alloc > 0 && (
                                <div key={j} className="flex flex-col items-center">
                                  {/* Allocation Arrow (Process -> Resource) */}
                                  <svg className="w-6 h-6 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd"/>
                                  </svg>
                                  <div className="w-12 h-12 rounded bg-blue-500 flex items-center justify-center mt-1">
                                    <span className="font-bold">R{j+1}</span>
                                    <span className="ml-1 text-xs">{alloc}</span>
                                  </div>
                                  {/* Request Arrow (Resource -> Process) */}
                                  {request[i][j] > 0 && (
                                    <svg className="w-6 h-6 text-red-500 rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd"/>
                                    </svg>
                                  )}
                                </div>
                              )
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 text-center">
                      <p className="text-yellow-300">Circular wait condition detected between processes</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl">Prevention Methods:</h3>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span>Banker's Algorithm</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span>Resource Ordering</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span>Process Termination</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span>Resource Preemption</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Simulation;
