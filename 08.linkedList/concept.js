//creating a constructor function inside class node 
class Node {
    constructor(data, next = null) { //default parameter
        this.data = data;
        this.next = next;
    }
}


//way1:invoking constructor  function with new keyword 
let node1 = new Node(3);
let node2 = new Node(4);
let node3 = new Node(5);
// connecting the nodes  
const head1 = node1; //assigning the head of linkedlist
node1.next = node2;
node2.next = node3;

console.log(head1)//3-->>4-->>5->>"/" 


// way2: invoking constructor function with new keyword and linking the nodes also 
let n1 = new Node(3); //the first invoked node ===last node of linkedlist
let n2 = new Node(5, n1);
let n3 = new Node(4, n2);
let head = n3;
console.log(head);// 4->>5-->>3->>'/'





