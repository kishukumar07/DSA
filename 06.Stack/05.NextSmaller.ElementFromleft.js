const arr=[39,27,11,4,24,32,32,1]; 
const n=arr.length; 



//main logic: while the top of stack is not less than or equal  to the current el we'll pop()the stack -this may lead to underflow so we'll add && stack is not empty 


//if (stackisempty): there is no lesser element - we'll assign result[i]with -1 
//if (stackis not empty well got our smaller element at the top of the stack ) so  well assign the result[i] with top of stack 


//at last we are pushing current el to the st ....
//just we'll increment i++




function smallerelfromleft(arr,n){

//creating st (stack)
let st = new Array(); 
//creating a result arr
let result = new Array(n).fill(0); 

    
let i=0;
while(i<n){
 while( st[st.length-1] >=  arr[i] && st[st.length-1] !==undefined ){
    // console.log(`${st[st.length-1] >=  arr[i] }&&${ st[st.length-1] !==undefined}`)
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

}






smallerelfromleft(arr,n); 