class Node {
    constructor(val, next = null) {
        this.val = val,
            this.next = next
    }
}


function mergelist(head1, head2) {

    let var1 = head1;
    let var2 = head2;
    let node = new Node();
    let temp = node;

    while (var1 != null && var2 !== null) {

        //we have var1 ,var2 ,node ,temp
        if (var1.val < var2.val) {
            temp.next = var1;
            var1 = var1.next;
        } else {
            temp.next = var2;
            var2 = var2.next;
        }
        temp = temp.next;
        //till here we solved the part of comparing 
    }

    if (var1 !== null) {
        temp.next = var1;
    }
    if (var2 !== null) {
        temp.next = var2;
    }


    const mainhead = node.next;
    return mainhead;

}








//creating two list man

let n1 = new Node(9)
let n2 = new Node(7, n1)
let n3 = new Node(5, n2)
let n4 = new Node(3, n3)
let n5 = new Node(1, n4)

let head1 = n5; //1-->3-->5-->7-->9


let n6 = new Node(7)
let n7 = new Node(6, n6)
let n8 = new Node(5, n7)

let head2 = n8; //5-->6-->7

// console.log(head1,"\n",head2)

print(head1);
print(head2);

const mainhead = mergelist(head1, head2);
print(mainhead);


//let print mainhead list 



function print(mainhead) {
    let curr = mainhead;
    let bag = "";
    while (curr !== null) {
        bag += curr.val + " ";
        curr = curr.next;
    }
    console.log(bag);
}


