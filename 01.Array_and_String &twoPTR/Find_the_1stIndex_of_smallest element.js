// Problem: you are given an array A of N elements. You are allowed to remove only one element which makes the sum of all the Remaining Element exactly divisible by 7 



function findIndex(arr) {

    let sum = 0;
    for (let i = 0; i < arr.length; i++) { //O(n)
        sum += arr[i];
    }
    // console.log(sum);

    let min = Infinity;

    let index;  //undefined

    for (let i = 0; i < arr.length; i++) {    //O(n)

        if (arr[i] < min && (sum - arr[i]) % 7 == 0) {
            // console.log(1)
            index = i;
            min = arr[i];

        }
    }

    return (index);
}


console.log(findIndex([14, 8, 2, 14, 7, 4]));  //4









//if question will say witout substracting then ? app2 prefixsum + sliding window
console.log(finding([14, 8, 2, 14, 7, 4]));

function finding(arr, n = arr.length) {

    let rightPrefixsum = new Array(n + 1);  
    let leftPrefixsum = new Array(n + 1);

    let suml = 0;
    let sumr = 0;
    rightPrefixsum[n] = sumr;
    leftPrefixsum[0] = suml;

    for ( let i = 0, j = n - 1; i < n - 1, j >= 0; i++, j--) {  //O(n)

        suml += arr[i];
        sumr += arr[j];

        // console.log(suml, sumr)

        leftPrefixsum[i + 1] = sumr;
        rightPrefixsum[j] = suml;
    }

    console.log(rightPrefixsum + "\n" + leftPrefixsum);

let minimumel = Infinity; 

for(let i=0; i<=leftPrefixsum.length-1; i++){   //O(n)

if(  Math.abs(leftPrefixsum[i]-rightPrefixsum[i]) %7 === 0 && (minimumel > arr[i])        )
{
minimumel =arr[i]; 
}

}


    return minimumel;
}
