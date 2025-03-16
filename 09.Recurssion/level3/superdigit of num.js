function runProgram(input) {       //call stack size reached ....err partial accepted ??? with this approach ...   
    // Write code here
    const lines = input.trim().split("\n").map(Number);
    let t = lines[0];
    let j = 1;

    while (t > 0) {
        let num = lines[j++];
        //  console.log(num); 
        console.log(superdigit(num));
        t--;
    }

    function superdigit(num) {
        if (Math.floor(num / 10) === 0) return num;
        return superdigit(sumofdigits(num))
    }
    //  console.log(sumofdigits(45))

    function sumofdigits(num, sum = 0) {

        if (num === 0) return 0;

        sum = sumofdigits(Math.floor(num / 10), sum)
        sum += num % 10
        return sum;
    }


}


