/*
# Technique: 
We want to find the **maximum height** (H) at which we can cut trees 
such that the **total wood collected is at least the required weight (W)**.

- Imagine you're setting a saw blade at some height H (mid).
- All tree parts above H will be cut.
- We'll calculate how much wood we collect if we cut at height H.
- Based on how much we collect, we'll adjust our saw height using Binary Search.

# Step-by-step Logic:

1. Find the mid height between the current low and high.
2. Start cutting all trees that are taller than mid.
   For each tree taller than mid:
     -> add (tree height - mid) to total wood.
3. Compare collected wood with the target weight W:

   a) If wood === W:
      -> Perfect! Return mid as the required saw height.

   b) If wood < W:
      -> We're not collecting enough wood.
         So, we need to cut deeper (i.e., lower the blade),
         => move to the **left half** of the array (high = mid - 1).

   c) If wood > W:
      -> We're collecting more than needed, 
         so maybe we can increase the blade height a little to waste less wood,
         => move to the **right half** (low = mid + 1),
         and store the current `mid` as a possible result.

4. Repeat this process recursively until low > high.

5. Finally, return the best saw height found where at least W wood is collected.

# Time Complexity:
- Sorting the array initially takes O(n log n)
- Binary Search takes O(log maxHeight), and in each step, we loop through n elements to compute wood.
=> Total complexity: O(n log maxHeight)

# Output:
- The maximum blade height (H) that gives at least W wood.
*/
function runProgram(input) {
  let lines = input.trim().split("\n");
  let [n, target] = lines[0].trim().split(" ").map(Number);
  let arr = lines[1].trim().split(" ").map(Number);

  let maxH = Math.max(...arr); // cutting height can be from 0 to max height of tree

  let result = bs(arr, n, target, 0, maxH, -1);

  console.log(result);
}

function bs(arr, n, target, low, high, resultIndex) {
  if (low > high) {
    return resultIndex;
  }

  let mid = Math.floor((low + high) / 2);
  let wood = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] > mid) {
      wood += arr[i] - mid;
    }
  }

  if (wood >= target) {
    // store mid as potential answer and try a higher cut
    return bs(arr, n, target, mid + 1, high, mid);
  } else {
    // not enough wood, try a lower cut
    return bs(arr, n, target, low, mid - 1, resultIndex);
  }
}


