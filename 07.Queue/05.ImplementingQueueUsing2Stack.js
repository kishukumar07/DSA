/*  
Algorithm2:- enqueue Operation takes O(n) && Dequeue takesO(1)


Enqueue => 1.pop stack2 and push it in stack1 while st2!=empty
           2.push el(enqueue-x)to the stack2 
           3.pop stack1 and put it in stack2 while st1!=empty 

Dequeue => pop el to stack2   
*/


class queue {

    constructor(){
 this.st1=[]
 this.st2=[]
}

//we want enque and dequeue to be here


}

let Queue =new queue()   // { st1: [], st2: []  }  //Q= [] For Dry run



//you rememeber we just doing our dequeue in other st : using other stack2 
//but here we'll make our st2 as main Queue & we'll use other array st1  just to enqueue el  


dequeue=()=>{
let v= Queue.st2.pop();
return v; 
}


enqueue=(x)=>{

while(Queue.st2.length!=0){
    Queue.st1.push(Queue.st2.pop()); 
}

    Queue.st1.push(x); 

    while(Queue.st1.length!=0){
        Queue.st2.push(Queue.st1.pop()); 
    }

}


//all elements in st2 (st2 looks like Queue :we used st1 just for enqueue  operation here) which makes enqueue Operation takes O(n) && Dequeue takesO(1)

enqueue(2); 
enqueue(3); 
enqueue(4); 
console.log(Queue.st2) ;  // 4,3,2  //this is st2 in rev manner bcs of dequeue operation 
console.log(dequeue()) //2
console.log(Queue.st2) //4,3
console.log(dequeue()) //3
enqueue(3)                
console.log(Queue.st2); //3,4      






