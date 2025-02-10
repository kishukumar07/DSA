var mostCompetitive = function(nums, k) {

    let st=[]; 
    let atmp= nums.length-k; 
    for(let i=0; i<nums.length; i++){
        while(st.length > 0 && st[st.length-1] > nums[i]  && atmp > 0 ){
            st.pop(); 
             atmp--
        }    
        st.push(nums[i])
     
    }
    return st.slice(0, k); //at last we have to make slice the extra part 
    };