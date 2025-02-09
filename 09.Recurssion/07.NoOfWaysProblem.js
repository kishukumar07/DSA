// Number of ways Problem: Sandya is running up a staircase with N steps , and can hop(jump) either 1step, 2step, 3step at a time . You have to count , how many possible ways Sandhya can run up to the stairs. 



// solution :Recurssion 
choice=(input)=>{
    if(input===0)return 1; 
    if(input<0)return 0; 
    return choice(input-1)+choice(input-2)+choice(input-3); 
    }
console.log(choice(input));  


//Time complexity :using tree diagram we can  say that total no of calls occurs 3^n for n=3 which is something around max 27calls and if we compare this calls with respect of n so will get tc is 3expo"n" which is worst than O(n)/n^2  ==>more optimize way is Dp will learn further 
//Space complexity => around n is the depth of tree wrt n so O(n)