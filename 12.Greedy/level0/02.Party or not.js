function runProgram(input) {
  let lines = input.trim().split("\n");
  let T = +lines[0].trim();

  let lineIndex = 1;
  for (let t = 0; t < T; t++) {
    let [n, c, r] = lines[lineIndex++].trim().split(" ").map(Number);
    let arr = lines[lineIndex++].trim().split(" ").map(Number);

    arr.sort((a, b) => a - b);

    let need = 0;
    for (let i = 0; i < c; i++) {
      need += arr[i];
    }

    if (need <= r) {
      console.log("Party");
    } else {
      console.log("Sad");
    }
  }
}

// Example input string to test the function
const input = `3
5 3 10
1 2 3 4 5
4 2 3
2 2 2 2
6 4 15
5 1 3 2 6 4`;

runProgram(input);
