let arr = [73, 74, 75, 71, 69, 72, 76, 73];


//goal : => reslut array : a[i] = no of days to get a warm temp . if no such day then a[i]=0
//Approach we have to record a result array where each result[i]= index of that warmer day from right then we substract with the orignal index(ie..we have to substract the current index with the warmer day index)





let result = new Array(arr.length); //this will contain the distance of the warmer day 
let finalresult = new Array(arr.length);  //this will contain the distance of warmer day - el distance (el - index)

let st = new Array(); //created a stack 

let i = arr.length - 1;



while (i >= 0) {

    while (st.length != 0 && arr[i] >= arr[st[st.length - 1]]) {
        st.pop();
    }
    if (st.length == 0) {  //dont use st.length-1 use length for measuring element count
        result[i] = 0;
    }
    else {
        result[i] = st[st.length - 1];
    }
    st.push(i);
    i--;
}
console.log(result);  //now we got all the indexes of greater tempratures.. we just have to substract.....the real distance



for (let i = 0; i <= arr.length - 1; i++) {
    if (result[i] > 0) {
        finalresult[i] = result[i] - i;
    } else {
        finalresult[i] = result[i];  //it will intilize 0 bc result[i] cant be -ve ; 
    }

}


console.log(finalresult);  //we got it