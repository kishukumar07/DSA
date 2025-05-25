function runProgram(input) {
    // Write code here
    let str = input.trim();
    let arr = [...str];
    let bag = "";
    //console.log(str);
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === '?') {

            if (arr[i - 1] !== 'b' && arr[i + 1] !== 'b') {
                arr[i] = 'b';
            }
            else {
                arr[i] = 'a';
            }
        }

    }

    console.log(arr.join(""));

}
