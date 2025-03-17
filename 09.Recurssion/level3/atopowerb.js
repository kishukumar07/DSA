function power(a, b) {
    if (b === 0) return 1; // Base case: a^0 = 1
    //   if(b===1)return a;  //useless make dryrun 

    let halfPower = power(a, Math.floor(b / 2)); // Recursive call for a^(b/2)

    if (b % 2 === 0) {
      
        return halfPower * halfPower; // If even, return (a^(b/2))^2
    } else {
       
        return a * halfPower * halfPower; // If odd, return a * (a^(b/2))^2
    }
}


console.log(power(2,2)); 