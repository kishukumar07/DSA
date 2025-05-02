function runProgram(input) {
    // Write code here
    let lines = input.trim().split("\n");

    let n = +lines[0];
    let str = lines[1];

    let result = [];
    possiblesequence(str, n, 0, "", result);
    // console.log(result);
    result.sort().forEach((el) => console.log(el));
    // result.sort().forEach((el) => console.log(el));

}


function possiblesequence(str, n, i, substr, result) {

    if (i == n) {
        if (substr) {
            // console.log(substr)
            result.push(substr);
        }
        return;
    }

    possiblesequence(str, n, i + 1, substr + str[i], result); //take 
    possiblesequence(str, n, i + 1, substr, result);    //dont take 

}

// Run the program with the test case

runProgram("4\nabcd"); 
/*
a
ab
abc
abcd
abd
ac
acd
ad
b
bc
bcd
bd
c
cd
d
*/
console.log("\n"); 

runProgram("4\naabc");  //the output should be different .... this is the problem 
/*
a
aa
aab
aabc
aac
ab
abc
ac
a
ab
abc
ac
b
bc
c
*/


//T.c=O(2^n);   ==> n<=20  #contraints ...