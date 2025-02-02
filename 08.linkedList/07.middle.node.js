function findingmiddlenode(head){
    let i=head; 
    let j=head; 
while( j!=null && j.next!=null ){
 i=i.next; 
 j=j.next.next; 
}
let middlenode=i; 
console.log(middlenode);
return  middlenode;
}
const head = {
    data: 4,
    next: { data: 5, next: { data: 3, next: null } }
}
findingmiddlenode(head); 