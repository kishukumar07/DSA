//given the data creat a node and insert it in tail and return head 

const head = {
    data: 4,
    next: { data: 5, next: { data: 3, next: null } }
}  //fake list 

const data = "x";
insertAtTail(head, data) //invoking the function 

function insertAtTail(head, data) {

    class Node {
        constructor(data, next = null) {
            this.data = data,
                this.next = next;
        }
    }//created a constructor class (to cread node )

    //let traverse the list and find the tail 


    let tail = head;

    while (tail.next != null) { //at that point the next of tell will be null  
        tail = tail.next;
    }


    let node = new Node(data);
    tail.next = node;

    //  console.log(tail.next)
    console.log(head)
    return head;
}