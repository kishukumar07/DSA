/**
 * Recursively builds expressions by inserting +, - and *
 * @param {string} num       // the string of digits
 * @param {number} target    // the target value
 * @param {number} index     // current position in num
 * @param {string} expr      // expression built so far
 * @param {number} runningTotal // current total of expr
 * @param {number} lastTerm     // last “chunk” value (with sign) for handling *
 * @param {string[]} results // array to collect valid expressions
 */
function dfs(num, target, index, expr, runningTotal, lastTerm, results) { // dfs(num, target, 0, "", 0, 0, results);
  if (index === num.length) {
    if (runningTotal === target) {
      results.push(expr);
    }
    return;
  }

  for (let i = index + 1; i <= num.length; i++) {
    const snippet = num.slice(index , i);  //holding left part till i    
    // Skip numbers with leading zeros
    if (snippet.length > 1 && snippet[0] === '0') {
      break;
    }

    const cur = Number(snippet);  // string to number  

    if (index === 0) {
      // First chunk: start the expression
      dfs(num, target, i, snippet, cur, cur, results);
    } else {
      // +
      dfs(num, target,
          i,
          expr + '+' + snippet,
          runningTotal + cur,
          cur,
          results);

      // -
      dfs(num, target,
          i,
          expr + '-' + snippet,
          runningTotal - cur,
          -cur,
          results);

      // * (undo lastTerm, then add lastTerm*cur)
      dfs(num, target,
          i,
          expr + '*' + snippet,
          runningTotal - lastTerm + lastTerm * cur,
          lastTerm * cur,
          results);
    }
  }
}

/**
 * @param {string} num    // the string of digits, e.g. "1234"
 * @param {number} target // the target value, e.g. 10
 * @return {string[]}     // all expressions that evaluate to target
 */
function addOperators(num, target) {
  const results = [];
  dfs(num, target, 0, "", 0, 0, results);
  return results;
}

// --- Example usage ---
console.log(addOperators("123", 6));   // [ '1+2+3', '1*2*3' ]
console.log(addOperators("232", 8));   // [ '2*3+2', '2+3*2' ]
console.log(addOperators("105", 5));   // [ '1*0+5', '10-5' ]
console.log(addOperators("00", 0));    // [ '0+0', '0-0', '0*0' ]
