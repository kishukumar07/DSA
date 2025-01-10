/*Description: You brought virtual reality glasses.
There is only one game installed to it called "The Abondend City"
You are lost in an abondoneed city in order to Escape you have to pay at least the target K number of golden coins. So you decided to collect the gold in the houses of that city. The city contains N houses of that city. the city contains N houses aligned in a straight line. each house contains a number of gold coins.
You need to find out the shortest distance you have to travel untill you collect the needed amount of golden coins to get out . 
you can start from any house i and continue i+1th or i-1th house but  you cant stop at any house 
Note : if it's not possible to collect at least the target number of gold coins then in that case you will ultimately lose the game and you must print -1

// goal=>>  shortest distance to collect the target gold coins 
 sample input 1:                                       sample output 1:
let inp=[1,2,3,4,5];                                       2    
let k=7; 

sample input 2: 
let inp2=[5,1,2,3,4]                                    sample output 2: 
let k=15;                                                 5 

sample input 3: 
let inp3=[5,2,3,4]                                    sample output 2: 
let k=15;                                                  -1 
*/

let inp = [1, 2, 3, 4, 5];

mindistgoal(inp, 23);

function mindistgoal(arr, k) {
    //variable size sliding window will solve this 
    let i = 0;
    let j = 0;
    let n = arr.length;
    let windowSum = 0;
    let mindist = +Infinity;

    while (j <= n - 1) {


        windowSum += arr[j];
        while (windowSum >= k) {
            if (j - i + 1 < mindist) {
                mindist = j - i + 1;
            }
            windowSum -= arr[i];
            i++;
        }

        j++;

    }


    if (mindist === Infinity) {
        console.log(-1); 
    }
    else {
        console.log(mindist);
    }

}




