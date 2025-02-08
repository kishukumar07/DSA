let arr = [1, 2, 3, 4, 5];

printArray1(0, arr)  //should print in reverse order like ...first to lastIndex_el  
console.log("output of 2nd loop below ")
printArray2(arr.length - 1, arr)//should print in reverse order like ... lastIndexel to firstIndex_el  


function printArray1(index, arr) {
    if (index > arr.length - 1) {//also written as index === arr.length 
        return;
    }//basecondition 

    console.log(arr[index]);
    printArray1(++index, arr);
}

function printArray2(index, arr) {
    if (index < 0) {  //also written as index === -1
        return;
    }//base condition
    console.log(arr[index--]);
    printArray2(index, arr);
}