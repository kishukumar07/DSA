//implementation of queue using two stack 


/*
Algorithm1:-   if  enqueue Operation takes O(1) && Dequeue takesO(n)

for Enqueue => push el to stack1 
for dequeue  => 1.pop Element from stack1 nd push it in Stack2 while stack 1 != empty  then 
                2. pop the 2nd  stack (this will be your dequed element) then 
                3. put back pop while Stack2!=empty   
*/


class queue {

    constructor(){
 this.st1=[]
 this.st2=[]
}
//we want enque and dequeue to be here


}

let Queue =new queue()   // { st1: [], st2: []  }  //Q= []



 enqueue=(x)=>{
Queue.st1.push(x); //pushing the element in the top of the st1 
}


dequeue=()=>{
while(Queue.st1.length!=0){
    Queue.st2.push(Queue.st1.pop());
}
let el = Queue.st2.pop(); 
while(Queue.st2.length!=0){
    Queue.st1.push(Queue.st2.pop());
}
return el; 
}


//all elements in st1 (st1 looks like Queue :we used st2 just for dequeue operation here)

enqueue(2); 
enqueue(3); 
enqueue(4); 
console.log(Queue.st1) ;  // 2,3,4
console.log(dequeue()) //2
console.log(Queue.st1) //3,4
console.log(dequeue()) //3
enqueue(3)                
console.log(Queue.st1); //4 3





