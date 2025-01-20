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



let st=new Array(); 

let i=0; 
while(i<=str.length-1){

  if(str[i]===st[st.length-1]){
   st.pop(); 
  }
else{
  st.push(str[i]); 
}
i++

}

console.log("with second method \t =>> "+ st.join("")); 