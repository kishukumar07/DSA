//last node of the cycle should be nulls

function deletecycle(head) {

// If list is empty or has only one node without loop
if (head == null || head.next == null) return;




let slow =head; 
let fast =head; 


slow=slow.next; 
fast=fast.next.next; 

//step1.detect the cycle
while(fast!==null && fast.next!==null){
    if(fast==slow){
        console.log("both ptr at /found circular : ",fast.data);
      break;  //we got an circle
    }
    fast=fast.next.next; 
    slow=slow.next;
}

//at this point the both pointers will be at the position where the matched
// step2. making slow ptr at head and gradually increase both with one increment while bothptr.next is not same

 slow=head;
    while(fast.next!==slow.next){
slow=slow.next; 
fast=fast.next; 
    }
//at this point we got the end point of the list  and we make it null
fast.next=null; 

return head;
}






//lets creat a circular list -----drivers side code 
class Node{
    constructor(data,next=null){
this.data=data; 
this.next=next;
    }
}



let n1=new Node(1); 
let n2=new Node(2); 
let n3=new Node(3); 
let n4=new Node(4); 
let n5=new Node(5); 
let n6=new Node(6);

let head=n1;

n1.next=n2; 
n2.next=n3; 
n3.next=n4; 
n4.next=n5; 
n5.next=n6; 
n6.next=n3; //creating a cycle here 




// invoking out our function 
deletecycle(head); 



// Function to print the linked list
function printList(head) {
    let current = head;
    let output = "";
    while (current !== null) {
        output += current.data + " -> ";
        current = current.next;
    }
    output += "null";
    console.log(output);
}

// Print the list after cycle removal
printList(head);  //1 -> 2 -> 3 -> 4 -> null 


