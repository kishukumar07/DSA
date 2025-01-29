let arr=[1,1,1,2,3,5,2]  //output=>[1,2]  

let obj={}; //O(n)

for(let i=0; i<arr.length; i++){ //O(N)   find the frequency of elem.. in array
    if(obj[arr[i]]===undefined){ //obj.1 
        obj[arr[i]]=1; 
    }else{
        obj[arr[i]]++; 
    }
}


console.log(obj); 

let ans=[]; 

for(key in obj){ 
if(obj[key]>1){
ans.push(key); 
} 

}
console.log(ans); 
console.log(ans.map(Number)); 

