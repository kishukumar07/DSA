//you'll be given head and position nd you have to delete the node 

class Node{
    constructor(data) {
        this.data=data; 
        this.next=null; 
    }
}


function deletenodeatPosition(head, position){ 

if(position==1){
    head =head.next; 
    return head; 
}
    let temp=head; 
    let count=1; 
    
    while(count<position-1){ 
        temp=temp.next;
        count++;     
} 
//also take care when  position is for last node

temp.next=temp.next.next;
return head;  
}  





//inviking node


let n1=new Node(1); 
let n2=new Node(2); 
let n3=new Node(3); //creating nodes
let n4=new Node(4); 
let n5=new Node(5); 
let n6=new Node(6); 
n1.next=n2;  //linking nodes
n2.next=n3; 
n3.next=n4; 
n4.next=n5;
n5.next=n6; 
 let head =n1; 



 head=deletenodeatPosition(head, 6);
 console.log(head); 