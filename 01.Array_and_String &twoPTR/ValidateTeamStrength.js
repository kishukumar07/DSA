// problem.There are two teams , given array -> length=2n , the first n elements of array represents strength of first team and the 2nd n element represents the strength of the second team . you have to take the absolute diff of the total  strength of both the array and if the diff is less than k :print -> valid else invalid 



function validateteamStr(n,k,arr){ 
    team1TotalStrength = 0;  
    team2TotalStrength = 0;
    let diff;   
    for(let i=0; i<=2n; i++){ //O(n)
     if(i<=n){
        team1TotalStrength+=arr[i]; 
     }
     else{
     team2TotalStrength+=arr[i]; 
     }
     }
     diff=Math.abs(team1TotalStrength-team2TotalStrength); 
    //  console.log(diff);
     if(diff<k) console.log("valid"); 
     else console.log("Invalid"); 
}


validateteamStr(6,5,[1,2,3,4,5,6]); 