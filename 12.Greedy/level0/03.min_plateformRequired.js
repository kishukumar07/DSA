// Main function that receives input as a single string
function runProgram(input) {
  // Step 1: Split the input into lines
  let lines = input.trim().split("\n");

  // Step 2: Extract number of trains
  let n = +lines[0];

  // Step 3: Extract arrival and departure times as arrays of strings
  let arrival = lines[1].trim().split(" ");
  let departure = lines[2].trim().split(" ");

  // Step 4: Convert "HH:MM" format into [hour, minute] as numbers for both arrival and departure
  for (let i = 0; i < n; i++) {
    arrival[i] = arrival[i].trim().split(":").map(Number);     // e.g., "9:00" → [9, 0]
    departure[i] = departure[i].trim().split(":").map(Number); // e.g., "9:10" → [9, 10]
  }

  // Step 5: Create a combined list of events (arrival = +1, departure = -1)
  let board = [];

  // Loop 2n times to fill both arrival and departure in one array
  for (let i = 0; i < 2 * n; i++) {
    board[i] = [];

    if (i < n) {
      // Convert arrival time into total minutes and mark it as +1
      board[i][0] = arrival[i][0] * 60 + arrival[i][1]; // e.g., 9 * 60 + 0 = 540
      board[i][1] = 1; // Arrival event
    } else {
      // Convert departure time into total minutes and mark it as -1
      board[i][0] = departure[i - n][0] * 60 + departure[i - n][1];
      board[i][1] = -1; // Departure event
    }
  }

  // Step 6: Sort the board by time
  board.sort((a, b) => {
    if (a[0] === b[0]) {
      // If same time, handle departure (-1) before arrival (+1)
      return a[1] - b[1];
    }
    return a[0] - b[0]; // Sort by time (minutes)
  });

  // Step 7: Traverse the sorted timeline to calculate max platforms required
  let max = 0; // Tracks the maximum platforms required at any time
  let sum = 0; // Tracks current platforms in use

  for (let i = 0; i < 2 * n; i++) {
    sum += board[i][1];           // +1 for arrival, -1 for departure
    max = Math.max(max, sum);     // Update max if more platforms are needed
  }

  // Step 8: Print the result (minimum number of platforms required)
  console.log(max);
}

// 🔽 Function invocation with sample input
const input = `6
9:00 9:40 9:50 11:00 15:00 18:00
9:10 12:00 11:20 11:30 19:00 20:00`;

runProgram(input); // Expected output: 3
