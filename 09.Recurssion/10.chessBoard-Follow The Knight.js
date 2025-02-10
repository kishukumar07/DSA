function runProgram(input) {
    function logic(i, j, n, board) {
        // ✅ Fix 1: Boundary conditions to prevent out-of-bounds recursion
        if (i < 0 || i >= 10 || j < 0 || j >= 10) {
            return;
        }

        // ✅ Fix 2: Base case to stop recursion when n reaches 0
        if (n === 0) {
            board[i][j] = 1;
            return;
        }
        // 8 possible moves of a Knight
        logic(i - 2, j - 1, n - 1, board);
        logic(i - 2, j + 1, n - 1, board);
        logic(i - 1, j - 2, n - 1, board);
        logic(i - 1, j + 2, n - 1, board);
        logic(i + 2, j - 1, n - 1, board);
        logic(i + 2, j + 1, n - 1, board);
        logic(i + 1, j - 2, n - 1, board);
        logic(i + 1, j + 2, n - 1, board);
    }

    function main(i, j, n) {
        // ✅ Fix 3: Properly initialize a 10x10 board
        let board = new Array(10).fill(0).map(() => new Array(10).fill(0));

        // Calling the recursive function
        logic(i - 1, j - 1, n, board);

        // ✅ Fix 4: Count 1s in a more efficient way
        let ans = board.flat().reduce((sum, cell) => sum + cell, 0);
        console.log(ans);
    }

    let [i, j, n] = input.trim().split(" ").map(Number);
    main(i, j, n);
}

// Test Case
runProgram("3 3 1");
runProgram("3 3 2");
