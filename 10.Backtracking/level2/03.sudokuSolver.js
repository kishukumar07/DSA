function runProgram(input) {
    // Write code here
    const lines = input.trim().split("\n");
    //  console.log(lines);

    let sudoku = [];
    for (let i = 0; i < lines.length; i++) {
        sudoku.push(lines[i].trim().split(" ").map(Number));
    }

    //   console.log(sudoku);

    if (solve(sudoku)) {
        // If solvable, print the sudoku
        for (let i = 0; i < sudoku.length; i++) {
            console.log(sudoku[i].join(" "));
        }
    } else {
        // If not solvable
        console.log(-1);
    }

}
function solve(sudoku, n = sudoku.length, row = 0, colm = 0) {
    // If we reached the end of the row, move to next row
    if (colm === n) {
        row++;
        colm = 0;
    }

    // If we reached end of the board, solved!
    if (row === n) {
        return true;
    }

    // If cell already filled, move to next cell
    if (sudoku[row][colm] !== 0) {
        return solve(sudoku, n, row, colm + 1);
    }

    // Try filling cell with numbers 1 to 9
    for (let el = 1; el <= 9; el++) {
        if (isCellSafe(sudoku, row, colm, el)) {
            sudoku[row][colm] = el;   // place number

            if (solve(sudoku, n, row, colm + 1)) {
                return true;          // if success, done
            }

            sudoku[row][colm] = 0;     // undo if it doesn't lead to a solution
        }
    }

    return false; // no valid number found
}




function isCellSafe(sudoku, row, colm, el) {
    // Check column
    for (let i = 0; i < sudoku.length; i++) {
        if (sudoku[i][colm] === el) return false;
    }

    // Check row
    for (let i = 0; i < sudoku.length; i++) {
        if (sudoku[row][i] === el) return false;
    }

    // Check 3x3 grid
    let startRow = Math.floor(row / 3) * 3;
    let startCol = Math.floor(colm / 3) * 3;

    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            if (sudoku[i][j] === el) return false;
        }
    }

    // If passed all checks, it's safe
    return true;
}





