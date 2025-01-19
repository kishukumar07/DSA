// Given an array of integers, find the closest (not considering the distance, but value) greater or the same value on the left of every element. If an element has no greater or same value on the left side, print -1.

// Input : arr= [10, 5, 11, 6, 20, 12]
// Output : -1, 10, -1, 10, -1, 20 
// The first element has nothing on the left side, so the answer for first is -1. 
// Second, element 5 has 10 on the left, so the answer is 10. 
// Third element 11 has nothing greater or the same, so the answer is -1. 
// Fourth element 6 has 10 as value wise closes, so the answer is 10 
// Similarly, we get values for the fifth and sixth elements.




//approach1. using bruteforce :  A simple solution is to run two nested loops. We pick an outer element one by one. For every picked element, we traverse toward the left of it and find the closest (value-wise) greater element. The time complexity of this solution is O(n*n)

// approach2. using stack implementation : Tc =>O(n) && SC=>O{n} 
 

let arr = [16, 10, 8, 3, 16, 9, 7, 12, 12, 2]
let result = new Array(arr.length).fill(0);
// console.log(result)
let st = new Array();  //stack 




for (let i = 0; i < arr.length; i++) {

    while (st[st.length - 1] !== undefined &&  st[st.length-1] <= arr[i]) {  //checking the top of stack if the top el is greater then currel if not we'll  pop it    && while top of stack is not empty 
        st.pop(); 
    }

    if (st[st.length - 1] === undefined) { //if there is no greater el in stack leads to empty in this case well save -1 to result 
        result[i] = -1;
    }
    else {
        result[i]= st[st.length - 1];  //else we'll store top el of stack to result 
    }

    st.push(arr[i]); //pushing the curr el to the top of the stack 

}



console.log(result.join(" "));  