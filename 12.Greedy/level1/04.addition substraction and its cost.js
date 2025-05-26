function solve(arr, n, x, y ,c, k){

    arr.sort((a,b)=>a-b);
    
    let result=0; 

    for(let i=0; i<k; i++){

        if(arr[i]<c){
            result +=(c- arr[i])*x;   
        }else{
            result +=(arr[i]-c)*y; 
        }


    }
return result; 

}



This JavaScript function solve(arr, n, x, y, c, k) calculates a "cost" based on how far each of the first k elements of the sorted array arr is from a target value c. The cost depends on whether the element is less than or greater than c.