//if you are given a head of linkedlist and you have to link a node to the head 
let head = {
    data: 3,
    next: null
}
let data=5; 

insertAtHead(head, data)




function insertAtHead(head, data) {

    //creating constructor class
    class Node {
        constructor(data, next = null) {
            this.data = data,
                this.next = next
        }
    }

    let node = new Node(data, head); //creating new node with the given data and sending head as next   //also do this manually linking the node
    head = node;
    return head;
}


