function runProgram(input) {
    const lines = input.trim().split("\n");
    const [n, x] = lines[0].split(" ").map(Number);
    const arr = lines[1].split(" ").map(Number);

    console.log(countCombinations(arr, x));   
}

function countCombinations(coins, amount) {
    if (amount === 0) return 1;
    if (amount < 0) return 0;

    let ways = 0;
    for (let i = 0; i < coins.length; i++) {
        ways += countCombinations(coins, amount - coins[i]);
    }
    return ways;
}

runProgram("3 9\n2 3 5");
