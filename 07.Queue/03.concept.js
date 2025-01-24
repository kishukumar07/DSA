// *queues in javaScript>..

var queue =new Array(4); //---wrong way bcs u are pushing the el  
var queue =[];  //correct way 

queue.push(3); //enqueue operation ->> push
queue.push(3); //enqueue operation 
queue.push(3); //enqueue operation 
queue.push(3); //enqueue operation 
queue.push(6); //enqueue operation 

console.log(queue); 



console.log(queue.shift()); //dequeue operation -->shift 
console.log(queue.shift()); //dequeue operation 
console.log(queue.shift()); //dequeue operation 
console.log(queue.shift()); //dequeue operation 
console.log(queue.shift()); //dequeue operation 
console.log(queue.shift()); //dequeue operation 
console.log(queue.shift()); //dequeue operation 

console.log(queue); 

queue.push(454); 
queue.push(454); 
queue.push(454); 
console.log(queue); 



// Queue in java using linked list      
//  Queue <Integer > q =new LinkedList <>();  
//  enqueue ==> q.add();  
//  dequeue=>>q.remove(); 