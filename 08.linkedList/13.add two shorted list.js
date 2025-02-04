//add two reversed linkedlist and return it head
function addrevlist(head1,head2){
let temp1=head1; 
let temp2=head2; 

let sum; 
let carry=0; 

let domeynode=new Node(); 
let head=domeynode; 



while(temp1!==null ||temp2!==null){
 sum=0; 
    if(temp1!==null){
        sum+=temp1.val;
        temp1=temp1.next 
    }

    if(temp2!==null){
        sum+=temp2.val; 
        temp2=temp2.next; 
    }
sum+=carry; 
carry=Math.floor(sum/10);
let digit=sum%10;
let newnode =new Node(digit); 
domeynode.next=newnode; 
domeynode=domeynode.next; 
}
if(carry){
    let newnode =new Node(carry); 
    domeynode.next=newnode; 
    domeynode=domeynode.next;   
}



return head.next; 
}





