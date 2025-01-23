/* Description : 2 players  Ram and shyam are playing a game where in they both stand opposite to each other and there are n boxes  b/w them 
each boxes contains some numbers of stone in it . They can move in these boxes in one direction ie .. ram can move only towars shayam and shayam  towards ram , also they cannot cross each other . 
as nd when they step foot in a box they collect all the stones  in their bag and then they can decide weather to move forward or not 
the task is that at the end of the game the total number of stones in both the bags should be same . they cannot cross each other and cannot stand in the same box as well.  

Find the maximum no of stones each can collect so that they both can have same no of stones after covering X1 and X2 boxes  respectively (X1+X2<=n)

if they cannot have equal number of stones the output 0
if there exists some numbers of stones they can collect so that they have equal stone then they are said to win the game .Description

*/

// sampleInput:               sampleoutPut
// arr=[100 ,8,97 ,2,1]        100 



// =>Approach 2 pointer -->O(n)

let arr = [100, 8, 97, 2, 1];
let arr1=[100,8,96,2,1]; 
let arr2=[12,8,8,6,10,2,6,4]; 
maxEqualNoOfstones(arr1); 

function maxEqualNoOfstones(arr) {
    let i = 0;
    let j = arr.length - 1;
    let sum1 = arr[i];
    let sum2 = arr[j];
    let max = 0;
    while (i < j) {
        if (sum2 < sum1) {
            j--;
            sum2 += arr[j];
        }
        else if (sum1 < sum2) {
            i++;
            sum1 += arr[i];
        } else {
            if (sum1 > max) {
                max = sum1;
            }
            i++;
            j--;
            sum1 += arr[i];
            sum2 += arr[j];
        }
    }
    console.log(max);
}









