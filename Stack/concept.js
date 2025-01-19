/*Implement stack ADT using array 
the stack should have the following functions 
push() ~ to add an element into the stack 
pop() ~ to remove the element from element
peek() ~ to peek the top element of the stack */


let stack = new Array(5);
// console.log(stack); 

//taking one refrence variable 
let top = -1;


//Implementing the push()
const push = (el) => {
    if (top == stack.length - 1) {
        console.log("stack Overflow");
        return
    }
    top++;
    stack[top] = el;
}




//Implementing the pop() -- it will remove the top element and return it 

const pop = () => {
    if (top == -1) {
        return "stack underflow"
    }
    top--;  //removing the top el
    return stack[top + 1] //returning the top el
}




//Implementing peek() -- it will just return the top el of the stack thats it 

const peek = () => {
    if (top == -1) {
        return "stack is empty"
    }
    return stack[top]
}




//implementing operations 
push(3);
push(5);
push(4);

console.log(peek());
console.log(pop());
console.log(pop());
console.log(pop());

console.log(peek());
console.log(peek());
push(3);
push(5);
push(4);
push(4);
push(4);
push(4);
push(4);