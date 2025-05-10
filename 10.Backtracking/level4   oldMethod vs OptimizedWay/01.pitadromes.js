
function runProgram(input) {

    //   sub.lengh k and sum criteria

    let k = +input;

    let result = [];
    gen(k, [], result);

    console.log(result.join(" "));


}


function gen(k, sub, result) {

    if (sub.length == k) {
        let sumeven = 0, sumodd = 0;

        for (let i = 0; i < sub.length; i++) {
            if (i % 2 === 0) {
                sumeven += sub[i];
            }
            else {
                sumodd += sub[i];
            }
        }


        if (sumeven === sumodd) {
            result.push([...sub].join(""));
        }
        return;
    }


    let start = (sub.length === 0) ? 1 : 0;  // <-- if sub is empty, first digit from 1 to 9; otherwise 0 to 9
    for (let i = start; i <= 9; i++) {
        gen(k, [...sub, i], result);
    }

}



