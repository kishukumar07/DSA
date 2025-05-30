var longestCommonSubsequence = function(text1, text2) {
let n= text1.length; 
let m= text2.length ; 
//2d
let dp = new Array(n+1);
for(let i=0; i<n+1; i++){
    dp[i] =new Array(m+1).fill(-1); 
}

 return lcs(text1,text2,n,m,dp);  

};


function lcs(s,t,n,m,dp){

if(n===0 || m===0) return  0; 

if(dp[n][m]!=-1) return dp[n][m]; 

if(s[n-1]===t[m-1]){
 return dp[n][m] = 1+lcs(s,t,n-1,m-1,dp);  
}


return dp[n][m] =  Math.max( lcs(s,t,n-1,m,dp)  ,lcs(s,t,n,m-1,dp)   ) ; 

}




// tc === sc ==n*m 