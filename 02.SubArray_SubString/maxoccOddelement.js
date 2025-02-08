function longestRepeatedOdd(N, array) {
    // Write code here
    let count = 0;
    let maxc=0; 
    for (let i = 0; i <= array.length-1; i++){
        if (array[i] % 2 !== 0){
            count++
        }else if (array[i] % 2 === 0){
            count =0; 
            continue;
        }
     maxc<count? maxc=count:''
    }
    console.log(maxc)
}
longestRepeatedOdd(10,[2,1,1,2,1,1,1,1,1,0]);  //5 times oddno 1repeated so ==> output:5
