

// let str="abadbc"; 
let str="abcabc"; 

function unique(str){

    var dict={}; 
var queue=[]; 
let i=0; 

while(i<=str.length-1){
if(dict[str[i]]===undefined){
    dict[str[i]]=1; 
    queue.push(str[i]); 
}else{
    dict[str[i]]++; 
queue.shift(); 
}

if(queue.length!==0){
    console.log(queue[0]); 
}else{
    console.log("#")
}
    i++; 
}

}


unique(str); 