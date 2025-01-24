//Implementation of Stack using two Queue 


/*  
Algorithm1:- if push Operation takes O(n) && pop takes O(1) 

for push => 1. enqueue el in Q2 ~push
            2. dequeue el  from Q1 and enqueue in Q2
            3. swap the references Q1 - Q2

for pop =>   dequeue the Q1         
      */

class stack {
      constructor(){
           this.q1=[];             
            this.q2=[];           
      }

//we want push and pop to be here

}





let st = new stack(); // { q2: [], q1: [6,5,4,3]  }  //st= [3,4,5,6] For Dry run



push=(x)=>{
st.q2.push(x); 
while(st.q1.length!=0){
      st.q2.push(st.q1.shift()); 
}

let temp = st.q1; 
st.q1=st.q2; 
st.q2=temp; 
}


pop=()=>{
 
      return  st.q1.shift(); 
      }
      



//lets make a dry run 
push(3)
push(4)
push(5)
push(6)
console.log(st.q1)
      console.log(pop())  //6
      console.log(pop())  //5
console.log(st.q1)  

