// Goal> to console yes if arr can be modified into all zeroes otherwise no 
//  operation "you can subtract ith -1 and i+1th -1"

// App.1 brute force 
// App.2 sumofevenindexes-sumofoddindexes=0 ==>O(n)


let arr=[1,2,2,4,3]; 
n=arr.length; 
let sumevenind=0; 
let sumoddind=0; 
for(let i=0; i<=n-1; i++ )
{
    if(i%2==0){
        sumevenind+=arr[i]; 
    }
    else {
        sumoddind+=arr[i]; 
    }

}

sumevenind - sumoddind?  console.log("No") : console.log("Yes")