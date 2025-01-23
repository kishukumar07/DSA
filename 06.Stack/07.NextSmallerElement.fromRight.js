let arr = [16, 10, 8, 3, 16, 9, 7, 12, 12, 2] 


//approach :same a prevuius here only here we start loop reversed


let i=arr.length-1; 

let st = new Array(); 
let ans = new Array(arr.length); 


while(i>=0){
    
    while(st[st.length-1]>=arr[i] && st.length!==0){ //exact same approach just we used >=
        st.pop()
    }
    if(st.length===0){
ans[i]=-1; 
    }
    else{
        ans[i]=st[st.length-1]; 
    }
    
 st.push(arr[i]); 

    i--
} 

console.log(ans); 