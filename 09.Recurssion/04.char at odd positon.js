function charAtOddPos(N,str) {
    if (N == str.length){
    	return;
    }
    if(N%2===1)console.log(str[N])
    charAtOddPos(++N,str)
}
charAtOddPos(0,"NIKET"); 



function charAtEvenPos(N,str) {
    if (N == str.length){
    	return;
    }
    if(N%2===0)console.log(str[N])
    charAtOddPos(++N,str)
}
console.log("fun2:output")
charAtEvenPos(0,"NIKET"); 