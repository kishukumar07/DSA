function generateExp(str, target, result, i = 0, path = "", evalVal = 0, residual = 0) {
  // Base case: if we reach the end of the string
  if (i === str.length) {
    // If evaluated value matches target, add the expression to the result
    if (evalVal === target) {
      result.push(path);
    }
    return;
  }

  let currStr = "";
  let num = 0;

  // Iterate to form numbers by choosing digits from i to j
  for (let j = i; j < str.length; j++) {
    // Skip numbers with leading zero
    if (j > i && str[i] === '0') break;

    currStr += str[j]; // Form the current number string
    num = num * 10 + Number(str[j]); // Convert it into an actual number

    if (i === 0) {
      // For the very first number, just take it (no operator before)
      generateExp(str, target, result, j + 1, currStr, num, num);
    } else {
      // Addition case
      generateExp(str, target, result, j + 1, path + '+' + currStr, evalVal + num, num);

      // Subtraction case
      generateExp(str, target, result, j + 1, path + '-' + currStr, evalVal - num, -num);

      // Multiplication case
      generateExp(
        str,
        target,
        result,
        j + 1,
        path + '*' + currStr,
        evalVal - residual + residual * num,
        residual * num
      );
    }
  }
}  
