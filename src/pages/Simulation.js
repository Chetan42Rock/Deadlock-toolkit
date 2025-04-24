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
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Deadlock Simulation</h1>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Process/Resource Configuration */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 text-purple-300">Configuration</h2>
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-purple-200">Number of Processes</label>
                  <input 
                    type="number" 
                    min="1" 
                    value={processes}
                    onChange={(e) => {
                      setProcesses(e.target.value);
                      updateDimensions(e.target.value, resources);
                    }}
                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-purple-200">Number of Resources</label>
                  <input 
                    type="number" 
                    min="1" 
                    value={resources}
                    onChange={(e) => {
                      setResources(e.target.value);
                      updateDimensions(processes, e.target.value);
                    }}
                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Available Resources */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 text-purple-300">Available Resources</h2>
              <div className="overflow-x-auto">
                <div className="flex space-x-4 min-w-max">
                  {available.map((val, i) => (
                    <div key={i} className="flex-none w-24">
                      <label className="block text-sm mb-2 text-purple-200">R{i+1}</label>
                      <input
                        type="number"
                        min="0"
                        value={val}
                        onChange={(e) => {
                          const newAvailable = [...available];
                          newAvailable[i] = parseInt(e.target.value) || 0;
                          setAvailable(newAvailable);
                        }}
                        className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Allocation Matrix */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 text-purple-300">Allocation Matrix</h2>
              <div className="overflow-x-auto">
                <table className="w-max min-w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left text-purple-200"></th>
                      {Array.from({length: resources}).map((_, i) => (
                        <th key={i} className="px-4 py-2 text-center text-purple-200">R{i+1}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {allocation.map((row, i) => (
                      <tr key={i}>
                        <td className="px-4 py-2 text-purple-200">P{i+1}</td>
                        {row.map((val, j) => (
                          <td key={j} className="px-4 py-2">
                            <input
                              type="number"
                              min="0"
                              value={val}
                              onChange={(e) => updateMatrix(allocation, setAllocation, i, j, e.target.value)}
                              className="w-20 p-2 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white text-center transition-all duration-300"
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
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 text-purple-300">Request Matrix</h2>
              <div className="overflow-x-auto">
                <table className="w-max min-w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left text-purple-200"></th>
                      {Array.from({length: resources}).map((_, i) => (
                        <th key={i} className="px-4 py-2 text-center text-purple-200">R{i+1}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {request.map((row, i) => (
                      <tr key={i}>
                        <td className="px-4 py-2 text-purple-200">P{i+1}</td>
                        {row.map((val, j) => (
                          <td key={j} className="px-4 py-2">
                            <input
                              type="number"
                              min="0"
                              value={val}
                              onChange={(e) => updateMatrix(request, setRequest, i, j, e.target.value)}
                              className="w-20 p-2 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white text-center transition-all duration-300"
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

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Processing...' : 'Detect Deadlock'}
            </button>
          </div>

          {/* Example Presets Section */}
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4 text-purple-300">Preset Examples:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-red-500/50 transition-all duration-300">
                <h4 className="text-lg font-semibold text-red-400 mb-3">Deadlock Example</h4>
                <p className="text-purple-200 mb-4">Resource allocation with guaranteed deadlock where:</p>
                <div className="text-sm text-purple-200 mb-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div>P1 → R1</div>
                    <div>R1 → P2</div>
                    <div>P2 → R2</div>
                    <div>R2 → P1</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    // First set dimensions
                    setProcesses(2);
                    setResources(2);
                    
                    // Create a clean reset of all matrices
                    const resetAllocation = Array(2).fill().map(() => Array(2).fill(0));
                    const resetRequest = Array(2).fill().map(() => Array(2).fill(0));
                    const resetAvailable = Array(2).fill(0);
                    
                    // Apply reset
                    setAllocation(resetAllocation);
                    setRequest(resetRequest);
                    setAvailable(resetAvailable);
                    
                    // Wait for state update then apply new values
                    setTimeout(() => {
                      setAllocation([
                        [1, 0],
                        [0, 1]
                      ]);
                      setRequest([
                        [0, 1],
                        [1, 0]
                      ]);
                      setAvailable([0, 0]);
                    }, 50);
                  }}
                  className="w-full px-4 py-2 bg-red-500/70 hover:bg-red-600/70 rounded-lg text-white font-medium transition-all duration-300"
                >
                  Load Deadlock Example
                </button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-green-500/50 transition-all duration-300">
                <h4 className="text-lg font-semibold text-green-400 mb-3">Cycle Without Deadlock</h4>
                <p className="text-purple-200 mb-4">Resource graph with a cycle but no deadlock where:</p>
                <div className="text-sm text-purple-200 mb-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div>P1 → R1</div>
                    <div>P3 → R2</div>
                    <div>R1 → P2, P3</div>
                    <div>R2 → P1, P4</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    // First set dimensions
                    setProcesses(4);
                    setResources(2);
                    
                    // Create a clean reset of all matrices
                    const resetAllocation = Array(4).fill().map(() => Array(2).fill(0));
                    const resetRequest = Array(4).fill().map(() => Array(2).fill(0));
                    const resetAvailable = Array(2).fill(0);
                    
                    // Apply reset
                    setAllocation(resetAllocation);
                    setRequest(resetRequest);
                    setAvailable(resetAvailable);
                    
                    // Wait for state update then apply new values
                    setTimeout(() => {
                      // Correct allocation matrix - P1 has R1, P3 has R2
                      setAllocation([
                        [0, 1], // P1 has 1 of R1
                        [1, 0], // P2 has nothing
                        [1, 0], // P3 has 1 of R2
                        [0, 1]  // P4 has nothing
                      ]);
                      
                      // Correct request matrix - P1 wants R2, P2 wants R1, P3 wants R1, P4 wants R2
                      setRequest([
                        [1, 0], // P1 wants 1 of R2
                        [0, 0], // P2 wants 1 of R1
                        [0, 1], // P3 wants 1 of R1
                        [0, 0]  // P4 wants 1 of R2
                      ]);
                      
                      // Set available after resetting to ensure it's clean
                      setAvailable([0, 0]); // 1 of each resource is available
                    }, 50);
                  }}
                  className="w-full px-4 py-2 bg-green-500/70 hover:bg-green-600/70 rounded-lg text-white font-medium transition-all duration-300"
                >
                  Load Cycle Without Deadlock
                </button>
              </div>
            </div>
          </div>
        </form>

        {result && (
          <div className="mt-12 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-6 text-purple-300">Results</h2>
            <div className="space-y-6">
              {result.error ? (
                <p className="text-red-400">{result.error}</p>
              ) : result.isSafe ? (
                <div>
                  <div className="flex items-center text-green-400 mb-4">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-lg">System is in safe state (No deadlock)</p>
                  </div>
                  <p className="text-purple-200">Safe sequence: {result.safeSequence.map(p => `P${p+1}`).join(' → ')}</p>
                </div>
              ) : (
                <div>
                  <div className="flex items-center text-red-400 mb-4">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <p className="text-lg">System is in unsafe state (Deadlock detected)</p>
                  </div>
                  
                  {/* Deadlock Visualization */}
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300">
                    <h2 className="text-2xl font-bold mb-6 text-purple-300">Deadlock Visualization</h2>
                    <div className="relative h-[500px] flex items-center justify-center">
                      <svg className="w-full h-full" viewBox="0 0 1000 500">
                        {/* Arrow marker definition */}
                        <defs>
                          <marker
                            id="arrowhead"
                            markerWidth="10"
                            markerHeight="7"
                            refX="9"
                            refY="3.5"
                            orient="auto"
                          >
                            <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                          </marker>
                        </defs>

                        {/* Processes */}
                        {Array.from({ length: processes }, (_, i) => (
                          <g key={`process-${i}`}>
                            <circle
                              cx={200 + (i * 200)}
                              cy={100}
                              r={30}
                              className={`${
                                result?.deadlockedProcesses?.includes(i)
                                  ? 'fill-yellow-500 animate-pulse'
                                  : 'fill-purple-500'
                              } stroke-white stroke-2`}
                            />
                            <text
                              x={200 + (i * 200)}
                              y={100}
                              textAnchor="middle"
                              dominantBaseline="middle"
                              className="text-white font-bold"
                            >
                              P{i+1}
                            </text>
                          </g>
                        ))}

                        {/* Resources */}
                        {Array.from({ length: resources }, (_, i) => (
                          <g key={`resource-${i}`}>
                            <rect
                              x={150 + (i * 200)}
                              y={300}
                              width={60}
                              height={40}
                              rx={5}
                              className="fill-pink-500 stroke-white stroke-2"
                            />
                            <text
                              x={180 + (i * 200)}
                              y={320}
                              textAnchor="middle"
                              dominantBaseline="middle"
                              className="text-white font-bold"
                            >
                              R{i+1}
                            </text>
                          </g>
                        ))}

                        {/* Allocation Edges */}
                        {allocation.map((row, i) =>
                          row.map((value, j) => {
                            if (value > 0) {
                              const startX = 200 + (i * 200);
                              const startY = 130;
                              const endX = 180 + (j * 200);
                              const endY = 300;
                              
                              // Calculate curve height based on whether paths might cross
                              // More distant connections get more curved paths
                              const distance = Math.abs(i - j);
                              const curveHeight = distance > 0 ? 60 + (distance * 20) : 40;
                              const controlY = (startY + endY) / 2 - curveHeight;
                              
                              // Offset the text position horizontally to avoid overlap on crossing paths
                              const textOffset = distance > 0 ? (i < j ? -20 : 20) : 0;
                              
                              return (
                                <g key={`alloc-${i}-${j}`}>
                                  <path
                                    d={`M ${startX} ${startY} C ${startX} ${controlY}, ${endX} ${controlY}, ${endX} ${endY}`}
                                    className="stroke-green-500 stroke-2 fill-none"
                                    markerEnd="url(#arrowhead)"
                                  />
                                  <rect
                                    x={(startX + endX) / 2 + textOffset - 12}
                                    y={controlY - 25}
                                    width={24}
                                    height={20}
                                    rx={4}
                                    className="fill-purple-900/80 stroke-green-500"
                                  />
                                  <text
                                    x={(startX + endX) / 2 + textOffset}
                                    y={controlY - 12}
                                    textAnchor="middle"
                                    className="text-green-400 text-sm font-medium"
                                  >
                                    {value}
                                  </text>
                                </g>
                              );
                            }
                            return null;
                          })
                        )}

                        {/* Request Edges */}
                        {request.map((row, i) =>
                          row.map((value, j) => {
                            if (value > 0) {
                              const startX = 180 + (j * 200);
                              const startY = 300;
                              const endX = 200 + (i * 200);
                              const endY = 130;
                              
                              // Calculate curve height based on whether paths might cross
                              // More distant connections get more curved paths
                              const distance = Math.abs(i - j);
                              const curveHeight = distance > 0 ? 60 + (distance * 20) : 40;
                              const controlY = (startY + endY) / 2 + curveHeight;
                              
                              // Offset the text position horizontally to avoid overlap on crossing paths
                              const textOffset = distance > 0 ? (i < j ? 20 : -20) : 0;
                              
                              return (
                                <g key={`req-${i}-${j}`}>
                                  <path
                                    d={`M ${startX} ${startY} C ${startX} ${controlY}, ${endX} ${controlY}, ${endX} ${endY}`}
                                    className="stroke-red-500 stroke-2 fill-none"
                                    strokeDasharray="5,5"
                                    markerEnd="url(#arrowhead)"
                                  />
                                  <rect
                                    x={(startX + endX) / 2 + textOffset - 12}
                                    y={controlY + 5}
                                    width={24}
                                    height={20}
                                    rx={4}
                                    className="fill-purple-900/80 stroke-red-500"
                                  />
                                  <text
                                    x={(startX + endX) / 2 + textOffset}
                                    y={controlY + 18}
                                    textAnchor="middle"
                                    className="text-red-400 text-sm font-medium"
                                  >
                                    {value}
                                  </text>
                                </g>
                              );
                            }
                            return null;
                          })
                        )}

                        {/* Legend */}
                        <g transform="translate(50, 450)">
                          <circle cx={20} cy={0} r={8} className="fill-purple-500 stroke-white stroke-2" />
                          <text x={40} y={5} className="text-white text-sm">Process</text>
                          
                          <rect x={120} y={-8} width={16} height={16} rx={2} className="fill-pink-500 stroke-white stroke-2" />
                          <text x={150} y={5} className="text-white text-sm">Resource</text>
                          
                          <line x1={220} y1={0} x2={270} y2={0} className="stroke-green-500 stroke-2" />
                          <text x={300} y={5} className="text-white text-sm">Allocation</text>
                          
                          <line x1={400} y1={0} x2={450} y2={0} className="stroke-red-500 stroke-2" strokeDasharray="5,5" />
                          <text x={480} y={5} className="text-white text-sm">Request</text>
                        </g>
                      </svg>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4 text-purple-300">Prevention Methods:</h3>
                    <div className="space-y-6">
                      <p className="text-purple-200">Based on the deadlock detected in your simulation, the <span className="text-green-400 font-medium">Banker's Algorithm</span> is recommended as the best prevention strategy:</p>
                      
                      <div className="bg-white/5 rounded-lg p-5">
                        <h4 className="text-lg font-semibold text-green-400 mb-3">Banker's Algorithm</h4>
                        <p className="text-purple-200 mb-3">This deadlock avoidance technique is most suitable for your simulation because:</p>
                        <ul className="list-disc pl-6 space-y-2 text-purple-200">
                          <li>It guarantees deadlock avoidance while maximizing resource utilization</li>
                          <li>Works with your existing resource allocation and request matrices</li>
                          <li>Allows processes to specify maximum resource needs in advance</li>
                          <li>Ensures the system stays in a "safe state" where at least one execution sequence can complete</li>
                        </ul>
                        <div className="mt-4">
                          <h5 className="text-md font-semibold text-purple-300">Implementation Steps:</h5>
                          <ol className="list-decimal pl-6 space-y-2 text-purple-200 mt-2">
                            <li>Calculate the <span className="text-yellow-400">Need matrix</span> (Maximum resources - Currently allocated)</li>
                            <li>Check if a resource request would leave the system in a safe state</li>
                            <li>Grant the request only if the system remains safe</li>
                            <li>Periodically run safety algorithm to verify system state</li>
                          </ol>
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-purple-300 mt-4">Alternative Prevention Methods:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                        <div className="flex flex-col bg-white/5 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <svg className="w-5 h-5 mr-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <span className="text-purple-300 font-medium">Resource Ordering</span>
                          </div>
                          <p className="text-purple-200 text-sm mt-1">Assigns a global ordering to resource types and requires processes to request resources in increasing order, breaking the circular wait condition.</p>
                        </div>
                        
                        <div className="flex flex-col bg-white/5 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <svg className="w-5 h-5 mr-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <span className="text-purple-300 font-medium">Process Termination</span>
                          </div>
                          <p className="text-purple-200 text-sm mt-1">Selectively terminates deadlocked processes to break the deadlock. Can use criteria like process priority or which would free the most resources.</p>
                        </div>
                        
                        <div className="flex flex-col bg-white/5 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <svg className="w-5 h-5 mr-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <span className="text-purple-300 font-medium">Resource Preemption</span>
                          </div>
                          <p className="text-purple-200 text-sm mt-1">Temporarily takes resources away from processes to break deadlocks. Resources are later returned to original processes when safe.</p>
                        </div>
                        
                        <div className="flex flex-col bg-white/5 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <svg className="w-5 h-5 mr-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <span className="text-purple-300 font-medium">Hold and Wait Prevention</span>
                          </div>
                          <p className="text-purple-200 text-sm mt-1">Requires processes to request all needed resources at once before execution begins, preventing incremental resource allocation that leads to deadlocks.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Simulation;
