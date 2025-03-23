function runProgram(input) {
    // Handling input
    let lines = input.trim().split("\n"); 
    let [n, arr] = [+lines[0], lines[1].split(" ").map(Number)]; 
    
    let result = gensubset(arr,n);
    
 result = result.filter(el => condition(el));

    
    console.log(result.length); 
}

function gensubset(arr,n,k=0,subset=[],result=[]){
    
    if(k===n){
        //logic/base condn -handeling like what if k ===n     
        return result; 
    }
    
    
    
    for(let i=k; i<n; i++){
        //create logic of pushing arr[i] in subset 
        subset.push(arr[i]); 
        //logic of pusing subset in res
        result.push([...subset]); 
        //call
        gensubset(arr,n,i+1,subset,result)
        //distroy - logic of pop arr[i] in subset 
        subset.pop(); 
    }
    
    return result; 
}

function condition(subset) {
    let sum = subset.reduce((acc, curr) => acc + curr, 0);
    return sum % 2 === 1; // Check if the sum is odd
}
