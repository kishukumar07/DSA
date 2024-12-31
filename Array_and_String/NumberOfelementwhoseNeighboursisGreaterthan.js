function x(arr){
    let count =0; 
    for(let i=0; i<arr.length; i++){

        if(arr[i+1] > arr[i] && arr[i-1] > arr[i]){
            count++; 
        }
    
    }
return count; 
}

console.log(x([5,7,6,9,8])); 
