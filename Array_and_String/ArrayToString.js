// Note:  if element of array  is -ve  then put -1  

function arrTostr(arr){
    let bag=""; 
    for(let i=0; i<arr.length; i++){
        let el=arr[i]; 
        if(el<0){
            bag+=-1; 
        }
        else {
            bag+=el; 
        }
    }
    return bag; 
}
console.log(arrTostr([2,-4,5])); 


//we can do this using map function in es6 with .join inbuilt function   
console.log(([2, -4, 5].map((el) => {
    return el > 0 ? el : -1; 
  })).join("")); 
