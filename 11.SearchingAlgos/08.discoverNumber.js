function runProgram(input) {
  let lines = input.trim().split("\n");
  let [n, k] = lines[0].trim().split(" ").map(Number);
  let arr = lines[1].trim().split(" ").map(Number);

  arr.sort((a, b) => a - b); // Important for binary search

  let j = 2;

  while (j != k + 2) {
    bs(arr, +lines[j++]);
  }
}

function bs(arr, key, low = 0, high = arr.length - 1) {
  if (low > high) {
    console.log("NO");
    return;
  }
  
  let mid = Math.floor(low + (high - low) / 2);

  if (arr[mid] == key) {
    console.log("YES");
    return;
  } else if (arr[mid] < key) {
    bs(arr, key, mid + 1, high);
  } else {
    bs(arr, key, low, mid - 1);
  }
}


