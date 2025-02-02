function reverse(head){
class Node{
     constructor(data,node=null){
        this.data=data;
        this.next=node;  
     }
}

let previous=null; 
let current=head;
while(current!=null){
let nx=current.next; 
current.next=previous; 
previous=current; 
current=nx; 
}

head=previous; 
console.log(head); 
return head; 
}

const head = {
    data: 4,
    next: { data: 5, next: { data: 3, next: null } }
}
reverse(head) ; 