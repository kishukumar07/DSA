// Output
// Print each possible subset in a new line.

// Elements within the subset must be in non-decreasing order. All the subsets must be distinct and sorted lexicographically. For an empty subset just print a blank line.



function runProgram(input) {

    let lines = input.trim().split("\n");
    let n = +lines[0];
    let arr = lines[1].trim().split(" ").map(Number);
    let result = [];
    let obj = {};


    heyDrStrainge(arr, n, 0, [], result, obj);


    result.sort(
        (a, b) => {

            for (let i = 0; i < Math.min(a.length, b.length); i++) {
                if (a[i] !== b[i]) return a[i] - b[i];
            }
            return a.length - b.length;

        }).forEach((el) => console.log(el.join(" ")));

}




function heyDrStrainge(arr, n, i, subset, result, obj) {

    if (i === n) {
        subset.sort((a, b) => a - b);

        


        let key = subset.toString();  //seprated by commas 
        if (obj[key] === undefined) {

            result.push(subset);
            obj[key] = 1;
            return;
        }

        return;
    }


    heyDrStrainge(arr, n, i + 1, [...subset, arr[i]], result, obj);
    heyDrStrainge(arr, n, i + 1, subset, result, obj);

}

