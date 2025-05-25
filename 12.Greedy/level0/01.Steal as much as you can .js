
function runProgram(input) {
    // Write code here

    let lines = input.trim().split("\n");
    let w = +lines[0];
    let n = +lines[1];
    let values = lines[2].trim().split(" ").map(Number);
    let weights = lines[3].trim().split(" ").map(Number);

    let board = [];

    for (let i = 0; i < n; i++) {
        board[i] = []; // Initialize the row
        board[i][0] = values[i] / weights[i];
        board[i][1] = values[i];
        board[i][2] = weights[i];
    }

    board.sort((a, b) => b[0] - a[0]);


    let result = stealCalculation(board, n, w);
    console.log(result);


}


function stealCalculation(board, n, w) {

    let result = 0;

    for (let i = 0; i < n; i++) {

        if (board[i][2] <= w) {
            result += board[i][1];
            w -= board[i][2];
        } else {
            result += w * board[i][0];
            break;
        }

    }


    return result.toFixed(0);
}



