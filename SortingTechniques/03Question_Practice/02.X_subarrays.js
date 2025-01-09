/* Description: Given a array A having N positive integers. count all the subarrays  having length X, such that each subarray has no integer greater than k 

Input : first line : single integer T denoting the number of test cases
        2ndline  : three space separated integers denoting the value of N,K and X .
        next line: N single space separated integers denoting the elements of array A. */

// sample Input :        sampleoutput : 2
let input1 = `
1
4 3 2
1 3 2 5 
`

let input2 = `
2
4 3 2
1 3 2 5 3  
4 4 2 
1 3 5 6 
`

count(input2); //invoking  with input2

function count(input) {

        let lines = input.trim().split("\n");
        // console.log(lines); 
        let testcaseline = lines[0].split(" ").map(Number);
        let t = testcaseline[0];
        //      console.log(t);

        let j = 1;

        while (t > 0) {
                let [n, k, x] = lines[j++].split(" ").map(Number);
                // console.log(n,k,x);
                let arr = lines[j++].trim().split(" ").map(Number)
                //        console.log(arr);


                //so we have n k x and arr 
                var subarrayCount = 0;
                let count = 0;
                i = 0;
                while (i < n) {

                        if (arr[i] > k) {
                                count = 0;
                        } else {
                                count++;
                        }

                        if (count >= x) {
                                subarrayCount++;

                        }
                        i++;

                }
                console.log("no of sub array =\t" + subarrayCount);
                t--;  //decreasing test case 

        }

        return subarrayCount;

}

