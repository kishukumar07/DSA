var removeOccurrences = function (s, part) {
    //at every step we have to check if (top of stack is that string )--we kept poping 

    let st = [];
    for (let i = 0; i < s.length; i++) {

        st.push(s[i])

        let l = st.length - 1;
        let m = part.length - 1;
        let st2 = [];

        while (st[l] === part[m] && m > -1) {
            let el = st.pop()
            st2.push(el);
            l--;
            m--;
        }

        if (st2.length!==part.length) {  // if at any point the characters don’t match, it means that the stack doesn’t contain part at the top. In that case, any intermediate pops made during the check need to be undone, so the characters are pushed back onto the stack in the correct orde
            while (st2.length!==0) {
                st.push(st2.pop())
            }
        }

    }
    // console.log(st.join("")); 
    return st.join("");

};