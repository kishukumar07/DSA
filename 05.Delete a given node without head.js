const head = {
    data: 4,
    next: { data: 5, next: { data: 3, next: null } }
}
let node =head.next; 
// let node = head.next.next;


let x=deletenode(node);
//you are given a node you need to delete the node 


function deletenode(node) {
    if (!node) {
        return false; // Handle null node case
      }

      if (!node.next) { // It's the tail node. We can't delete it directly in O(1) time without the head.
        return false; // Indicate failure. Caller needs to handle tail deletion.
      }

    node.data = node.next.data;
    node.next = node.next.next;
    return true; // Indicate success
}

console.log(head);  //checking purpose 