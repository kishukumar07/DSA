function checkpallist(head){

    let stack=[]; 
let curr =head; 
while (curr!==null){
    stack.push(curr.data); 
    curr=curr.next; 
}

console.log(stack)
let temp=head; 
while(stack.length!=0){
    let el =stack.pop(); 
    // console.log(el,temp.data)
if(el!==temp.data){
    console.log("not pal")
    return "notpal"; 
}
temp=temp.next; 
}
console.log(" pal");
return "pal"; 
}


//recomended to use .val in js in place of .data





//drivers code

class Node{
    constructor (data,next=null){
        this.data=data, 
        this.next=next
    }
}

let n1=new Node(2)
let n2=new Node(1,n1)
// let n3=new Node(2,n2)
// let n4=new Node(1,n3)

let head=n2


// console.log(head) ; 
//invoking the function 
checkpallist(head); 
