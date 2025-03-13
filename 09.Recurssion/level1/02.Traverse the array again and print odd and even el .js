// two recursive function for print even and odd elements of the array 
function evenArray(n, arr){
    if(n===arr.length){
    	return;
    }
    if (arr[n] % 2 === 0){
    	console.log(arr[n]);
    }
    evenArray(n+1,arr);
    // The initial value of n = 0
}  

function oddArray(n, arr){
    if(n===arr.length){
    	return;
    }
    if (arr[n] % 2 !== 0){
    	console.log(arr[n]);
    }
    oddArray(n+1,arr);
    // The initial value of n = 0
}  

evenArray(0,[1,3,4,5,67]); 
console.log("below output of odd el")
oddArray(0,[1,3,4,5,67]); 






