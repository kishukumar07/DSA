function runProgram(input) {
    let lines = input.trim().split("\n"); 
    let [n, k] = lines[0].trim().split(" ").map(Number); 
    let arr = lines[1].trim().split(" ").map(Number);

    arr.sort((a, b) => a - b);  // sort to ensure lexicographical order
    let result = [];

    ways(arr, n, k, result, [], 0);

    if(result.length === 0) {
        console.log(-1);
    } else {
        for(let res of result) {
            console.log(res.join(" "));
        }
    }
}

function ways(coins, n, k, result, sub = [], index = 0) {
    if(k === 0){
        result.push([...sub]);
        return;
    }
    if(k<0){
        return; 
    }
    
    for(let i = index; i < coins.length; i++){
      
        ways(coins, n, k - coins[i], result, [...sub, coins[i]], i); // reuse allowed
    }
}
