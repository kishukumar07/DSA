function odditems(arr){
 let bag=""; 
 for(let i=0; i<arr.length; i++){
    if(arr[i]%2===1){
    // console.log(i); 
        bag+=arr[i]; 

    }
 }
 return bag; 

}

console.log(odditems([2,3,6,6,8,,7,7,10])); 
