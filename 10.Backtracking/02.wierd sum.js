
function runProgram(input) {
  // Write code here
  //   let find k= max el in array;  
  //   then find subsequence   sum equals k;  
  //   Same as finding trucks capacity =k  ;


  let lines = input.trim().split("\n");

  let t = +lines[0];

  let j = 1;

  while (t > 0) {

    let n = +lines[j++];
    let arr = lines[j++].split(" ").map(Number);
    let maxel = Math.max(...arr);
    let k = maxel;
    arr.splice(arr.indexOf(maxel), 1); //removing the max el from array
    choicewala(arr, n, 0, k) ? console.log("Yes") : console.log("No");
    t--;
  }
}

function choicewala(arr, n, i, maxel) {

  if (maxel === 0) {
    return 1;
  }
  if (i >= n || maxel < 0) return 0;  // Ensure recursion stops correctly


  let ch1 = choicewala(arr, n, i + 1, maxel - arr[i]); //include
  let ch2 = choicewala(arr, n, i + 1, maxel); //exclude       

  return (ch1 || ch2);

}






//here is another soln reverse manner 
function runProgram(input) {

  const lines = input.trim().split("\n");
  let t = +lines[0];
  let j = 1;

  while (t > 0) {
    let n = +lines[j++];
    let arr = lines[j++].split(" ").map(Number);


    let max = -Infinity;
    for (let i = 0; i <= arr.length - 1; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }

    /*
    Goal : "our goal is to check weathere if 
            is there any subset sum = maxel (Yes vs No)" ;
    */

    //we have to remove maxel from array before applying the logic ....

    arr.splice(arr.indexOf(max), 1);

    // console.log(arr); 

    let result = checksubsetsum(arr, arr.length, max);
    (result) ? console.log("Yes") : console.log("No");

    t--;
  }



}

function checksubsetsum(arr, n, max, i = 0, sub = []) {
  if (i === n) {

    let sum = 0;
    for (let j = 0; j < sub.length; j++) {
      sum += sub[j];
    }
    return sum === max;
  }


  let x = checksubsetsum(arr, n, max, i + 1, [...sub, arr[i]]);
  let y = checksubsetsum(arr, n, max, i + 1, sub);

  return x || y;
}




