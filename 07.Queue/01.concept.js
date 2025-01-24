/* Queue --FIFO(first in first out )
Operations :-    enqueue() ~ add element x to the rear of the Queue   
                 dequeue()~ remove and return the element at the fornt of the queue
                 Peek()   ~ Return (not remove ) the Element at the front of the queue
*/

/*ARRAY IMPLEMENTATION OF QUEUE ADT */


let queue = new Array(4); //creating a queue (implemneting array) //length should be fixed in queue


let rear=-1; //where we add elements
let front=0; //from where we remove elements

function enqueue(x){
if(rear === queue.length-1){
    console.log("overflow");
    return;  
}
    rear++; 
queue[rear]=x; 
console.log("done")
}

function dequeue(){
   if(front>rear){

return "UNDERFLOW"; 
   }
    front++; 
    return queue[front-1];
     
}




//operations 



enqueue(2); 
enqueue(6); 
enqueue(4); 
enqueue(3); 
enqueue(45); 
enqueue(55); 
enqueue(55); 




console.log(dequeue()) 
console.log(dequeue()) 
console.log(dequeue()) 
console.log(dequeue()) 
console.log(dequeue()) 


// enqueue(3);  //there is space but it will show overflow
console.log(queue,front,rear);  

// A problem with simple array implementation of Queue 
//  it has empty space but it will show overflow ------SO WE HAVE "CIRCULARQUEUE "






