
function runProgram(input) {

    const lines = input.trim().split("\n");
    const n = + lines[0];
    const arr = lines[1].trim().split(" ").map(Number);

    // console.log(arr,n)


    let result = [];
    subset(arr, 0, [], result);
    console.log(result.length);
}


function subset(arr, index, sub, result) {

    if (index === arr.length) {
        if (sub) {
            //we have to sum of sub === odd
            //  result.push(sub);
            let sum = 0;
            for (let i = 0; i < sub.length; i++) {
                sum += sub[i];
            }

            if (sum % 2 === 1 || sum % 2 === -1) result.push(sub);

        }

        return;
    }


    subset(arr, index + 1, [...sub, arr[index]], result);
    subset(arr, index + 1, sub, result);




}

