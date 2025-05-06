var longestIncreasingPath = function(matrix) {
    if (!matrix || matrix.length === 0) return 0;

    const n = matrix.length;
    const m = matrix[0].length;
    const directions = [[1,0], [-1,0], [0,1], [0,-1]];

    function dfs(i, j, prevVal) {
        if (i < 0 || j < 0 || i >= n || j >= m || matrix[i][j] <= prevVal) {
            return 0;
        }

        let maxLength = 0;
        for (let [dx, dy] of directions) {
            maxLength = Math.max(maxLength, dfs(i + dx, j + dy, matrix[i][j]));
        }

        return 1 + maxLength;
    }

    let result = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            result = Math.max(result, dfs(i, j, -Infinity));
        }
    }

    return result;
};
