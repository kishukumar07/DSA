/*
 Algorithm2 :- if  push takes O(1) && pop takesO(n) ==>NEED CORRECTION

for push => enqueue el to Q1    // q1[ 2 ,3 ]  q2[] => st[2,3]

for pop => 1.dequeue all el from Q1 & enqueue it to Q2 the last element is your target el to make pop operation
           3.swap Q1 and Q2 references ---- this will make Q1 again free wala Q1 
*/





class stack {
    constructor(){
         this.q1=[];             
          this.q2=[];           
    }

//we want push and pop to be here
push=(x)=>{
    st.q1.push(x)   //you have to call push with the stack
}


pop=()=>{

    while(st.q1.length!=1){
        st.q2.push(st.q1.shift()); 
    }
    
let v; 
    if(st.q1.length===1){
v=st.q1.shift(); 
   }
    
    let temp =st.q1; 
    st.q1=st.q2; 
    st.q2=temp; 

return v; 
}



}



let st = new stack(); // { q2: [], q1: [6,5,4,3]  }  //st= [3,4,5,6] For Dry run







//lets make a dry run
console.log(st) 
st.push(3)
st.push(4)
st.push(5)
st.push(6)
console.log(st.q1)
      console.log(st.pop())  //6
      console.log(st.pop())  //5
console.log(st.q1)  

