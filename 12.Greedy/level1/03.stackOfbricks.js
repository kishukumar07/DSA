function runProgram(input) {
  let lines = input.trim().split("\n");
  let t = +lines[0];
  let j = 1;

  while (t > 0) {
    let n = +lines[j++];
    let x = +lines[j++];
    let y = +lines[j++];
    let stack1 = [];
    let stack2 = [];

    for (let i = j; i < j + n; i++) {
      let [el1, el2] = lines[i].trim().split(" ").map(Number);
      stack1.push(el1);
      stack2.push(el2);
    }

    j = j + n; // update j for next test case
    console.log(solve(stack1, stack2, x, y, n));
    t--;
  }
}

function solve(st1, st2, x, y, n) {
  st1.sort((a, b) => a - b);
  st2.sort((a, b) => a - b);
  let ans = 0;

  for (let i = 0; i < n; i++) {
    if (st1[i] < st2[i]) {
      ans += (st2[i] - st1[i]) * x;
    } else {
      ans += (st1[i] - st2[i]) * y;
    }
  }

  return ans;
}
