let st = new Array(); 


// st.push()
// st.pop()

const peek = ()=>{
     return st[st.length-1]; 
}


st.push(4)
st.push(6)
st.push(87)
st.push(0)
st.push(3)
st.pop()
st.pop()

console.log(peek()); 