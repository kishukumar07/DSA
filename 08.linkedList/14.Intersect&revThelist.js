/*you have to find the point of intersection and from there you have to reverse the list and share the head of the list 
// sample inp:                     //  sample Out:
 list1=1->3->4->5->2->108               list=>>> 108-->2-->5         
list2=7-->5-->2-->108     
*/

function revwhereIntersect(n1, n2, head1, head2) {
    let temp1 = head1;
    let temp2 = head2;

    let lendiff = Math.abs(n1 - n2); //finding len diff of both list

    if (n1 > n2) {
        while (lendiff !== 0) {
            temp1 = temp1.next;
            lendiff--;
        }
    } else {
        while (lendiff !== 0) {
            temp2 = temp2.next;
            lendiff--;
        }
    }     //incremented those pointer whose length is big
    // temp1 ,temp2 are at equal position now in both lists --here we start rev

    return revlist(temp1);

}
//creating revvlistfunction 
function revlist(head) {

    let prev = null;
    let current = head;

    while (current !== null) {
        let nx = current.next;
        current.next = prev;
        prev = current;
        current = nx;
    }
    return prev; //if watn to return the head of the reversed list 

}

//Approach 2: first rev the both list and then  compare and make new list while temp1.data!==temp2.data while L1!==NULL || l2!==null

let revlist1 = revlist(head1);
let revlist2 = revlist(head2);

//finding common output 
function findrevlistscommon(revlist1, revlist2) {
    let temp1 = revlist1;
    let temp2 = revlist2;

    let bag = "";
    while (temp1 !== null || temp2 !== null) {
        if (temp1.data == temp2.data) {
            bag += temp1.data
            temp1 = temp1.next;
            temp2 = temp2.next;
        }
        else {
            break;
        }
    }
    return bag; //we can creat a list also using bag for code snippet purpost
}
