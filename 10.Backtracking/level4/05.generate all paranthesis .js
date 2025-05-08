//approach 1 ...tle 
function runProgram(input) {

    // Write code here
    const lines = input.trim().split("\n").map(Number);
    let t = +lines[0];
    let j = 1;


    while (t > 0) {

        let n = + lines[j++];

        let arr = [];

        for (let i = 0; i < n; i++) {
            arr.push('(');
        }
        for (let i = 0; i < n; i++) {
            arr.push(')');
        }

        // console.log(arr);

        let result = [];

        permute(arr, 2 * n, 0, result);

        console.log(result.length);

        let i = 0;
        while (i < result.length) {
            console.log(result[i].join(""))

            i++;
        }



        t--;
    }




}

let obj = {};
function permute(arr, n, start, result) {

    if (start === n) {
        if (obj[arr]) return;
        else {
            obj[arr] = 1;

            if (isValidParenthesis([...arr])) {

                result.push([...arr]);


            }

        }
        return;
    }

    for (let i = start; i < n; i++) {
        [arr[i], arr[start]] = [arr[start], arr[i]];
        permute(arr, n, start + 1, result);
        [arr[start], arr[i]] = [arr[i], arr[start]];
    }

}


function isValidParenthesis(arr) {
    let st = [];
    let i = 0; // Declare i

    while (i < arr.length) {
        if (arr[i] === '(') {
            st.push(arr[i]);
        } else if (arr[i] === ')') {
            if (st.length === 0) {
                // No matching '('
                return false;
            }
            st.pop();
        }
        i++;
    }

    return st.length === 0; // Stack must be empty if valid
}





//approach 2; 


function generateParenthesis(n) {
    const result = [];
    backtrack('', n, n, result);
    return result;
}

function backtrack(current, open, close, result) {
    if (open === 0 && close === 0) {
        result.push(current);
        return;
    }

    if (open > 0) {
        backtrack(current + '(', open - 1, close, result);
    }

    if (close > open) {
        backtrack(current + ')', open, close - 1, result);
    }
}

// Example usage:
const res = generateParenthesis(3);
console.log(res);



//2^n<=>tc