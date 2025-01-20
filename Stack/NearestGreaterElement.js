//form both ~ left or Right :if the condition is true at both side  Prefer left el at same distance


// let arr = [16, 10, 8, 3, 16, 9, 7, 12, 12, 2]
let arr =[5,4,1,3,2]
let result = new Array(arr.length).fill(0);
// console.log(result)
let st = new Array();  //stack 


//writting code for nextGreaterEl from right


var i=arr.length-1;

while(i>=0){
    
    while(st.length!==0 && st[st.length-1]<=arr[i]){
                st.pop(); 
    }
    if(st.length===0){
        result[i]=-1; 
    }
    else{
        result[i]=st[st.length-1]; 
    }
st.push(arr[i]); 
    
    
    i--; 
}

// console.log(result); 


//writting code for nextGreaterEl from Left 




var i = 0;

while(i<=arr.length-1){
    
    while(st.length!==0 && st[st.length-1]<=arr[i]){
                st.pop(); 
    }
    if(st.length===0){
        result[i]=-1; 
    }
    else{
        result[i]=st[st.length-1]; 
    }
st.push(arr[i]); 
    
    
    i++; 
}

console.log(result); 