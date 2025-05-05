function runProgram(input) {


    let lines = input.trim().split("\n");
    const n = Number(lines[0]);
    let mat = [];
    for (let i = 1; i <= n; i++) {
        mat.push(lines[i].trim().split(" ").map(Number));
    }



    let paths = [];
    ratInMaze(mat, n, '', paths);



    if (paths.length) {
        console.log(paths.join(" "));
    } else {
        console.log(-1);
    }


}


function ratInMaze(mat, n, path, paths, i = 0, j = 0) {

    if (i < 0 || j < 0 || i === n || j === n) return;


    if (mat[i][j] === 0) return;    //pehle check kro then logic lgao   
    //baki else condn hoga


    if (i == n - 1 && j == n - 1) {
        paths.push(path);
        return;
    }

    mat[i][j] = 0;
    ratInMaze(mat, n, path + 'D', paths, i + 1, j);
    ratInMaze(mat, n, path + 'R', paths, i, j + 1);
    ratInMaze(mat, n, path + 'L', paths, i, j - 1);
    ratInMaze(mat, n, path + 'U', paths, i - 1, j);
    mat[i][j] = 1;
}




