const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Deadlock detection algorithm
function detectDeadlock(allocation, request, available) {
  // Banker's algorithm implementation
  const n = allocation.length;
  const m = available.length;
  let work = [...available];
  let finish = new Array(n).fill(false);
  let safeSequence = [];
  
  // Safety algorithm
  let count = 0;
  while (count < n) {
    let found = false;
    for (let i = 0; i < n; i++) {
      if (!finish[i]) {
        let canAllocate = true;
        for (let j = 0; j < m; j++) {
          if (request[i][j] > work[j]) {
            canAllocate = false;
            break;
          }
        }
        if (canAllocate) {
          for (let j = 0; j < m; j++) {
            work[j] += allocation[i][j];
          }
          safeSequence.push(i);
          finish[i] = true;
          found = true;
          count++;
        }
      }
    }
    if (!found) break;
  }

  return {
    isSafe: count === n,
    safeSequence: safeSequence,
    hasDeadlock: count < n
  };
}

// API Endpoint
app.post('/api/detect', (req, res) => {
  const { allocation, request, available } = req.body;
  const result = detectDeadlock(allocation, request, available);
  res.json(result);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
