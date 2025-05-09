//vvi *you have to tell the no of ways coins should be putten to reach the given amount(any coin should used for any no of times  
// 2+2+5 !== 2+5+2) *
function runProgram(input) {
    const lines = input.trim().split("\n");
    const [n, x] = lines[0].split(" ").map(Number);
    const arr = lines[1].split(" ").map(Number);

    console.log(countCombinations(arr, x));   
}

function countCombinations(coins , amount) {
    if (amount === 0) return 1;
    if (amount < 0) return 0;

    let ways = 0;
    for (let i = 0; i < coins.length; i++) {
        ways += countCombinations(coins, amount - coins[i]);
    }
    return ways;
}

runProgram("3 9\n2 3 5");




/*
            (9) 
      /      |       \
 -2(7)      -3(6)      -5(4)
/  |  \     / | \     / | \
(5)(4)(2) (4)(3)(1) (2)(1)(-1)
...





                                 📋 Summary of Difference
                                 -------------------------
                                 -------------------------
Pehle Wala Code (index based)	                    Correct Code (full coins loop)
Combination ke jaise hai (order nahi matter karta)	Permutation jaise hai (order matter karta)
Tree mein sirf 2 branches (include / exclude)	    Har node se multiple branches (har coin se)
Index aage badhaya jaata hai	                    Coins hamesha repeat ho sakte hain
*/