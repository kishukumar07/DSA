let arr1=[4,55,23] ;
let arr2= [1,3,4]; 
//we want arr1 and arr2 will be sorted in one array.
let n =arr1.length; 
let m=arr2.length; 

let result=new Array(n+m).fill(0); 

merge(arr1,arr2,n,m,result); 

function merge(arr1,arr2,n,m,result){

let ptr1=0,ptr2=0; 
let k=0; 

    while(ptr1<n && ptr2<m){

        if(arr1[ptr1] <=arr2[ptr2]){
            result[k++]=arr1[ptr1];
    
            ptr1++;  
            
        }else{
            result[k++]= arr2[ptr2++]; 
        }

        
    }

    while(ptr1<n){
        
result[k++]=arr1[ptr1++]

    }

    while(ptr2<m){
result[k++]=arr2[ptr2++]; 
    }

}



console.log(result); 

















