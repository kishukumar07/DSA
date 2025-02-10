var clearDigits = function(s) {

    s=s.split(""); 
    console.log(s);
     
    s=s.map((el)=>{
       if(isNaN(Number(el))){
        return el ; 
       }else{
        return +(el); 
       }
    })
    console.log(s); 
    
    let st=[]
    
    for(let i=0; i<s.length; i++){ 
        if( typeof(st[st.length-1]) !== typeof(s[i])  &&st.length!=0 ){
                 st.pop()
                 continue; 
        }
          st.push(s[i])
    }
    return st.join(""); 
    
    };