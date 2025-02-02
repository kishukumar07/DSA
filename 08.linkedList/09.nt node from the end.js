function nthnode(head,n){
if(n==null||n===undefined){
    return "not bad"; 
}
    let slow =head; 
    fast=head;
    let count=1;    
while(count<n){
    fast=fast.next; 
    count++
} 
while(fast.next!=null){
slow=slow.next;
fast=fast.next;     
}
console.log(slow); 
return slow;
}

const head = {
    data: 4,
    next: { data: 5, next: { data: 3, next: null } }
}

nthnode(head,1);  //from last 