function runProgram(input) {
  let lines = input.trim().split("\n");
  let [n, key] = lines[0].trim().split(" ").map(Number);
  let arr = lines[1].trim().split(" ").map(Number);

  let firstIndex = findFirstOccurrence(arr, key);
  let lastIndex = findLastOccurrence(arr, key);

  if (firstIndex !== -1 && lastIndex !== -1) {
    console.log((lastIndex - firstIndex) + 1);
  } else {
    console.log(-1);
  }
}

function findFirstOccurrence(arr, key, low = 0, high = arr.length - 1, result = -1) {
  if (low > high) {
    return result;
  }

  let mid = parseInt(low + (high - low) / 2); // replaced Math.floor with parseInt

  if (arr[mid] === key) {
    return findFirstOccurrence(arr, key, low, mid - 1, mid);
  } else if (arr[mid] < key) {
    return findFirstOccurrence(arr, key, mid + 1, high, result);
  } else {
    return findFirstOccurrence(arr, key, low, mid - 1, result);
  }
}

function findLastOccurrence(arr, key, low = 0, high = arr.length - 1, result = -1) {
  if (low > high) {
    return result;
  }

  let mid = parseInt(low + (high - low) / 2); // replaced Math.floor with parseInt

  if (arr[mid] === key) {
    return findLastOccurrence(arr, key, mid + 1, high, mid);
  } else if (arr[mid] < key) {
    return findLastOccurrence(arr, key, mid + 1, high, result);
  } else {
    return findLastOccurrence(arr, key, low, mid - 1, result);
  }
}
