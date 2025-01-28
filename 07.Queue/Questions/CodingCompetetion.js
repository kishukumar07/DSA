input = `5
E 1 1
E 2 1
E 1 2
D
D`


function code(input) {
    lines = input.trim().split("\n");
    let testcaseline = lines[0].split(" ").map(Number);  //[5] 
    let t = testcaseline[0];
    // console.log(t) //type:string
    let j = 1;

    //queue schema
    let club1q = [];
    let club2q = [];
    let club3q = [];
    let club4q = [];
    let mainQ = [];



    while (t > 0) {
        let query = lines[j++].trim().split(" ");
        // console.log(query) //for 1st query="E 1 1"
        const command = query[0] //'E'
        const clubid = query[1]; //'1'
        const rollno = query[2]; //'1'split("").map(Number)-->>.[1] {type:Number}
        //so now we have command ,cubeid ,rollno (just we have to write logic here----

        //you have only acess of the mainQ

        enqueue = (clubid, rollno) => {


            mainQcontains = (clubid) => {

                for (let i = 0; i <= mainQ.length - 1; i++) {
                    if (clubid === mainQ[i]) {
                        return true;
                    }
                }
                return false;
            }

            if (!mainQcontains(clubid)) {
                mainQ.push(clubid);
            }
            if (clubid === '1') {
                club1q.push(rollno)
            } else if (clubid === '2') {
                club2q.push(rollno)
            } else if (clubid === '3') {
                club3q.push(rollno)
            } else if (clubid === '4') {
                club4q.push(rollno)
            }
            // console.log(`mainQ : ${mainQ},club1q : ${club1q},club2q : ${club2q},club3q : ${club3q},club4q: ${club4q}`)
        }


        dequeue = () => {
            if (mainQ[0] === "1") {
                console.log("1", club1q.shift());
                if (club1q.length == 0) {
                    mainQ.shift()

                }
            }
            else if (mainQ[0] === "2") {
                console.log("2", club2q.shift());
                if (club2q.length == 0) {
                    mainQ.shift()
                }
            }
            else if (mainQ[0] === "3") {
                console.log("3", club3q.shift());
                if (club3q.length == 0) {
                    mainQ.shift()
                }
            }
            else if (mainQ[0] === "4") {
                console.log("4", club4q.shift());
                if (club4q.length == 0) {
                    mainQ.shift()
                }
            }
            // console.log(`mainQ : ${mainQ},club1q : ${club1q},club2q : ${club2q},club3q : ${club3q},club4q: ${club4q}`)
        }




        if (command === "E") {
            enqueue(clubid, rollno);
        } else if (command === "D") {
            dequeue();
        }


        // console.log(mainQ)
        t--;
    }
}




code(input);  //invoking