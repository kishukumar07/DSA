/*sample input                                  sampleOutput
  "aaabccddd"                                       "abd"
hint:->> aaabccddd ->>abccddd ->abddd ->abd
*/


const str = "aaabccddd";
// Approach1.two ptr approach (without stack)=>O(n)
let bag = "";
for (let i = 0; i <= str.length - 1; i++) {
  if (str[i] === str[i + 1]) {  // takes constant time 
    i++;//on next iteration i will incremented by 2 
  }
  else {
    bag += str[i];
  }
}
(!bag) ? console.log("Empty String") : console.log(bag);



//Approach2 using stack Adt: => const str="aaabccddd";  =>>