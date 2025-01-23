// 00 01 02 03 04  
// 10 11 12 13 14 
// 20 21 22 23 24 
// 30 31 32 33 34 
// 40 41 42 43 44  

//   order=>n*n

// 00 01 02 03' 04 05 06
// 10 11 12' 13 14' 15 16
// 20 21' 22 23 24 25' 26
// 30' 31 32 33 34 35 36'
// 40 41'42 43 44 45' 46
// 50 51 52' 53 54' 55 56
// 60 61 62 63' 64 65 66
 



// Approach=>
// n -> odd  --> index ->even---> midPoint-->> lastIndex/2 or n-1/2     ~so odd length is compulsory 
// n-> even --> index ->odd  ->> mid Point not possible so we return "oddlengthedArray";   
//execute line by line1 +line2+line3+line4




function diamond( arr,n){
    if(n%2===0){
        return "Error: length is even"; 
    }
    

    return line1+line2+line3+line4; 
}

