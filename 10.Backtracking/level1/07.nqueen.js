// given n queens you have to place in n *n chessboard so that it cannot kill each other . 
let cheshboard = new Array()
cheshboard.push(new Array(4).fill(0))
cheshboard.push(new Array(4).fill(0))
cheshboard.push(new Array(4).fill(0))
cheshboard.push(new Array(4).fill(0))
// console.log(cheshboard); 

let n=  nqueen(cheshboard, row = 0);
console.log(n);

function nqueen(cheshboard, row,ways=0) {

    if (row === cheshboard.length) {
        // console.log("placement \n")
        // console.log(cheshboard) //the placement 
       return 1 ;
    }


ways=0; 
    for(let colm = 0; colm < cheshboard[0].length; colm++) {
        if (isSafe(cheshboard, row, colm)) {
            cheshboard[row][colm] = 1;
     ways += nqueen(cheshboard, row + 1,ways);
            cheshboard[row][colm] = 0;
      
        }
    }

return  ways;

}


function isSafe(board , row , colm ) {

    //check 1
for(i = row; i>=0; i-- ){
    
if(board[i][colm] ===1) return false; 
}

    //check2   
for(let i =row , j=colm; i>=0 && j>=0; i--, j--  ){
    if(board[i][j]===1) return false ;  
}
    
    //check 3
for(let i =row , j=colm; i>=0 && j<=board[0].length; i--, j++  ){
        if(board[i][j]===1) return false ;  
    }
    return true; 
}




