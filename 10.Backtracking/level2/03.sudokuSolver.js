function runProgram(input) {
    // Write code here
    const lines = input.trim().split("\n");
    //  console.log(lines);
    
    let sudoku=[] ; 
    for (let i =0; i<lines.length; i++){
        sudoku.push(lines[i].split(" ").map(Number));
    }
    
  //   console.log(sudoku);
  
   //have to handel input 
   solve(sudoku);
   console.log(sudoku); // we have solved sudoku ...
   
  }
  function  solve(sudoku,n,colm=0,row=0){
      if(colm=== n)  row+1; 
      if(row === n)    return ;
      if(sudoku[row][colm]!==0) colm+1;
      
      //we have 9 choices for each cell ..
      for(let el=1; el <=9; i++){ 
          if(isCellSafe(sudoku,row,colm,el)){
              sudoku[row][colm]=el; 
            solve(sudoku,n,colm+1,row);
              sudoku[row][colm]=el; 
          }   
      }
  }
  
    
  function isCellSafe(sudoku,row,colm ,el ){
      //we have to check row ,colm ,grid ---return true 
       // --return false  ; 
      
      //checking for row 
      for(let i=0; i<sudoku.length; i++){
          if(sudoku[i][colm] === el ) return false ; 
      }
      //checking for colm
      for(let i=0; i<sudoku.lenght; i++){
          if(sudoku[row][i] ===el) return false; 
      }
      //checking for grid 
      // we have to check in which grid to  check ... with the help of row and colm.. 
      
      
      
  
  
  
  return true;  //at last  
  }
  
  
  
  