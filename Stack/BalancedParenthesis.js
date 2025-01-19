// leetcode20.BalancedParanthesis


var isValid = function (s) {

    //logic if str[i] is left bracket then push it into stack else if right one you have to check the stack top if same pop the stack , also check weathet the stack is not empty and if the both el is matching in correct order 

    n = s.length;
    let stack = new Array(); //in js there is no inbuilt stack  :so use array Implementation

    //creating a peek functionality  
    const peek = () => {
        return stack[stack.length - 1];  //returns the top of element 
    }


    //main logic here 
    for (let i = 0; i < n; i++) {

        if (s[i] == "{" || s[i] == '(' || s[i] == '[') {

            stack.push(s[i]);
        }

        else {
            // console.log( peek(), ifpairmatches( peek(),s[i]))
            if (peek() != undefined && ifpairmatches( peek() ,s[i])) {
                
                stack.pop();
            }
            else {
                return "false"
            }
        }
    }
    //final condition check 
    if (peek() === undefined) {  //mean stack is empty when peek() is undefined 
        // console.log(1); 
        return "true"
    } else {
        // console.log(1); 
        return "false"
    }


    //creating a function ifpairmatches

    function ifpairmatches(topofstack, el) {

        // console.log("fun"+el,topofstack);
        if ( topofstack === '{' && el=== '}') {
            return true;
        }

        if (topofstack === '[' && el === ']') {
            return true;
        }

        if (topofstack === '(' && el === ')') {
            return true;
        }

        return false;

    }




    //TC=>O(?)
    //SC =>O(?)


};


console.log(isValid("(]"))  