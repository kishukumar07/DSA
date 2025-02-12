var removeKdigits = function(num, k) {

    if(k===1 && num.length==1){
        return "0"
    }
    let attemp= k
    let st=[]
    for(let i=0; i<num.length; i++){      //O(n*k)
    while(st.length && st[st.length-1] > num[i] && attemp>0   ){
        st.pop()
         attemp--; 
    }
    st.push(num[i]);
    }
                         // ^
    //main logic upward ---^
    while(attemp!==0){  //  After the loop, if k is still greater than 0, it means you haven't used up all your removals. This will happen when the number is non-decreasing
    st.pop()
    attemp--
    }
    
    console.log(st) 
    
    let st2=st.join("") //eg. [0,0,12,0]   /is str oky                  //O(n)
    let str=""; // after operations eg.str should be =[ 12 ,0] /is str oky 
      
    // what will be operations ? lets do it..
    let mark=false; 
    for(let i=0; i<st2.length; i++){  //O(n)
        if(st2[i]!=0){ 
          mark=true; 
        }
       if(mark){
        str+=st2[i]; 
       }
    }
    // returning final ...
    if(!str)return str+=0; 
    return str
    };   