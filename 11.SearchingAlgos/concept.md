revision for binary search   
                                  REMEMBER ITS ALL ABOUT SEARCHING THE KEY 

How to deal with the runtime error ...

-> compile time error  >>>The more you practice the better you become . -> at evaluations 

there is no dp without recursion and backtracking ___>>.._..<<___




Q.What to do to become better make as much submissions as possible . 
=> Dont't leave after solving once . 
=> solve multiple times from scratch . 




                                            { Todays - Agenda }
              Search -
                -linear search 
                -binary search 



LinearSearch : - 
   
    A[] -> [49,9,20,1,50,11,4,13,3,42]
    key = 42   

function linearsearch(arr , key , i ){

if( i == arr.length ){    //base case 
 return  -1 ; 
}


if(arr[i]== key) return i ; 

 return linearsearch(arr ,key , i+1); 


}  

//time complexity => O(n)  ~ this is the best option when it comes with unsorted array  bcs sorting will have nlogn Tc



Can we say Brute force = linearsearch 
=> ofc ... for
                                       UNSORTED ARRAY 
    if we start searchig for a key from a random position we dont know where to search next  if the item is not at that random position . 
    Bcs in unsorted arrangement there is no realation between the items and their neighbours . 
any random item can be at any random position . 
   we don't  make any random searches ---ofc one way is brute force but  this is too time taking ...



BY the way in  
                                         SORTED ARRAY 
 
There is a well establized relation between the items and the neighbours.

if the order is ascending - > previous item / lhs-items  < current item <  next item / rhs-items 
if the order is descending -> pervious item / lhs-items > current item > next item / rhs-items 


Dont we think if we have to make a move after first move it will be easier while searching the key ....
at every move we'compare the current arrayelement with that key and move to the lefthandside or RightHandSide ??? 
its should be great way   

SO From where we take first move 
--mean from which index should we start ----- cause we are deling with the sorted array 
--so don't u think we should start it from MIDLE INDEX 


OR YAHI TOH BINARY-SEARCH-ALGORITHM HAIN !! ...


                       ? _ SORTED_ARRAY <=> BINARY SEARCH  _ ?

BinarySearch : - 
   
    A[] -> [49,9,20,1,50,11,4,13,3,42]
    key = 42   

function binarySearch(arr,key,low,high){

if(low>high) return -1 ; //main case 

let mid = low + high - low/2 ;  //main case 
if( arr[mid] === key ) return key ; 
else if(arr[mid]<key) {
return binarySearch(arr , key , mid-1 ,high )                                           //recursive callings on certain conditions ...
}
else {
return binarySearch(arr , key , low , mid+1);  //moving to right index
}

}


OVERFLOW CONDITION IN BINARY SEARCH ALGO.
  so while finding the mid we are doing 
                mid = low +high /2 


 assume low and high is a very big no and because js is a dynamically typed programming language 
      - we cant see the size limit of dataTypes like int has 4 bytes.... 
In C, the size of data types varies, with char being 1 byte, int typically 2 or 4 bytes, float 4 bytes, double 8 bytes, and the size of long and long long


so whlie compiler first add low+high may lead to condition of integeroverflow ...
-java has this problem of integer overflow in binary search algo in their library till past 9 years .

The best way to get rid is to

 mid  = low + high-low /2   it's a simple replace which saves computing cost and data size won't exceed .





FACT : 
    If it is written all the 7 billion names
    - finding your and checking the presence of a particular name
    -it will take 35 iterations only with BINARYSEARCHALGORITHM
  

how? lets ...see..

 COMPARASION HOW FAST "BINARYSEARCH" IS ? VS "LINEARSEARCH"
---------------------------------------------------------------------------
     :: 10 ** 3 =~ 2 ** 30
---------------------------------------------------------------------------
----> if i already have linearSearch then why do I need BinarySearch ? <---
   
    let's understand this by an example ...
let n= 10^9  which is equivalent to 2^30 can we say that_ ?.
     .:10**9 =~ 2**30

L.S > tooks O(n) =~ 10**9   =~ 2**30 
BS  > tooks O(log.n) =~ log(10**9)  =~ log(2**30) =~ 30 (log was of base2 as we dividing the array in 2 parts during each iterations)

Conclusion : =>  L.S = 31.5years      ::assuming that i teration tooks 1 sec on behalf of that this conclusion is ...  
                 B.S = 30sec  



THIS IS OKY BUT HOW WE CAN SAY THE TIME COMPLEXITY OF BINARY SEARCH ALGORITHM IS ...LOG-N _?
lets understand this by derivation ...
 -assume at first we have 64elements in array
  - we found mid and after some conditions  we  discarded  one half either either rhs or lhs from mid . 
   - i.e ... 64 /2 
   - next iteration happens again after some conditions we discareds one half
    - i.e ... 64/2*2
       -again same ...
             --so on 
                     --untill  => 64 / 2*2*2....ktimes  = 1  (dont you think at last iteration we have only one element -at basecondn )
                     
   lets find how many times we did this thing basically division in two parts 
                    and after k divisions the algorithm get terminated .
So we Only need to find "K" 

       Finding k ?? 

            => n/2**k = 1 
            => 2^k = n 
            => log^2**k =log n 
            => k = log n

we got it [k= logn ]  => log n times division happens  =~ no of iterations 
:. WE GOT THE TIME COMPLEXITY #NO OF ITERATIONS(ITERATIVECODE) OR FUNCTION CALLS(RECURSIVECODE)  = TIME COMPLEXITY   

HENCE THE TIMECOMPLEXITY OF BINARY SEARCH ALGO IS  ---------->>>> "LOGN"




TC....
BINARY-SEARCH-ALGORITHM  => O(LOG-N) {WROST CASE}
                         => O(1) {BEST CASE - WHEN AT FIRST AND THE ONLY ITERATION WHERE WE FOUND OUR NEED} ...









//find if a given no is perfect squire of another number  without using squire root mean : without finding squire root of that number

//Math.sqrt(num) is banned 



/*
 linear search ->  run a loop till num  
                     -> -will make check if (i squire === num )  return i ; 
                     ->    =>O(n)

 binary search    ->  will mentain a arr =[1,2,3,4.....num-1 ]  -> O(n) space and time 

                     -> for the array we'll check weather the middleEl in the space 
                           -> squireofmiddleEl === num  -> we got that ele
                           ->   "  arr[mid] "     <   num  -> we have to move left part /space 
                           ->   "  arr[mid] "     >   num  -> we have to move for the right part/space 
                           -> => O(log-n)


overall time complexity =? n  
                           */




function main(num) {       
    let arr = new Array();   //O(n)  ->space
    for (let i = 1; i <=num; i++) { //O(n)->time 
        arr.push(i);
    }
    return squareRoot(arr, num);   //(logn-time complexity)
}

function squareRoot(arr, num, low = 0, high = arr.length) { //O(logn)->time

    if (low > high) return -1;

    let mid = Math.floor(low + (high - low) / 2);

    if ((arr[mid] * arr[mid]) === num) {
        return arr[mid];
    }
    else if ((arr[mid] * arr[mid]) > num) {
        return squareRoot(arr, num, low,  mid - 1) //move for left part
    }
    else {
        return squareRoot(arr, num,  mid + 1, high) //move to the right part
    }
}





//invoking 
let result = main(1); 
console.log(result)


// ✅ Here's the Corrected and Optimized Version (No Extra Space Needed):
// javascript

function main(num) {
    return squareRoot(num, 1, num);
}

function squareRoot(num, low, high) {
    if (low > high) return -1;

    let mid = Math.floor(low + (high - low) / 2);
    let square = mid * mid;

    if (square === num) {
        return mid;
    } else if (square > num) {
        return squareRoot(num, low, mid - 1);
    } else {
        return squareRoot(num, mid + 1, high);
    }
}

// invoking
let result2 = main(49);
console.log(result2); // Output: 7



 
BINARY SEARCH ALGORITHM :- is all about .... "DISCARDING ONEPART AND KEEPING ANOTHER HALF IS THE ONLY THING "
                            -THIS IS THE ONLY THING WE ARE GOING TO USE A LOT OF TIMES -how to discard this is technique that we have to modify only each and every time.
                            



                            --------------------------------------------------------------------------
                                  LOWER BOUND :-  INDEX OF FIRST ELEMENT GREATER THAN EQUALS KEY     
                            --------------------------------------------------------------------------
let's understand this by an eg ...
                                    in finding the key's index problem with binary search ...
                                       eg.  arr=[2,5,5,7,9,15]          and      key =5 
                                                 0 1 2 3 4 5 <- index
                                         the normal binary search algo returns the first mid as an index of key
                                           i.e resultIndex =  2nd index  
But what if i want Index of First Element greater than equals to that key . {lowerbound ~   >=  key  :remember }


 => dont you think we have to modify of BinarySearchAlgorithm ..

                                               so if this is the array => [2,5,5,5,5,7,9,15]   //sorted 
                                                                           0 1 2 3 4 5 6 7
                           => #technique
                                 we'll store /modify result's value again and again ....whenever midel equals or greater than that key .....
                                 and if this happens we'll  move towards left bcs it requires first element index which is greater or equals ...
                                 i.e =>     result = mid ;  
                                            high = mid-1; 
                                 
                             else condition {  //the middle element is lesser than the key ... in this case bcs array is sorted we have to move for right part
                                                         ie. low =mid+1;    
                                                }
                                   this conditions will iterate only till the low < high 


                           =># algorithm 
                                       step_1 .     declaration and initialization ~ result =-1 , low =0 , high =arr.length-1;  
                         	       step_2 .     making a while loop the base condition should be low > high 

                                       step_3.      finding middle Index  =? low +high-low/2 
                                   
                                       step_4.      checking the middleEl if is >= key  -----> reinitialization result with  mid  
                                     step_4_{ii}.   moving to the left part i.e. high =mid -1
                                      
                                     step_5.         else -> low =mid+1 //moving to the right part in sorted array Bs
                                          
                                     step5. we'll return result after the loop . 
                          
                          =>#conclusion : this will return the -1 (first initialized value -denoting that there is no such lowerbound present)
                                          otherwise this will return the lower bound  ✓✓

 
                          => #sourceCode => 
 

 



                             -------------------------------------------------------------------
                                  UPPER BOUND :-  INDEX OF FIRST ELEMENT GREATER THAN KEY
                             -------------------------------------------------------------------
                          similar to lower bound ... just have to modify the techniques ...here  
                                                         
 						
									#technique  => we will have to find the only greater element ...at this time we only reinitilize the result as mid 
                                                                                                                          and will move to the left side bcs we need first > el than key 
                                                                         
                                                                                         else // the midel will be the lesser or equals to key . in this case we need to move for right part 												in the sorted arr in order to find the greater elemnet  
                               										 and - after this the whole thing will be same as lower bound technique.  


                                                                        #algorithm  =>   
                                                                                step1. Initilize result =-1 , low =0 , high =arr.lenght-1; 
                                                                                step2. Declaring while loop with condition (low < high )
                                                                                step3. Finding midd el 
                                                                                step4. Checking if midel is > key   ->  result = mid  
                                                                             step4.ii. high =mid-1 ; //moving left part bcs we need first greater el in sorted arr  
                                                                            step5. else condn // midel is less or equals key we have to move to to right part inorder to get the greater el 
                                                                                     i.e .. low =mid+1 
                                                                       
                                                                              step6. finally we have to return the result /arr[result ]have {if not found -edgecase result will be -1 }
 

                                                                        #sourceCode  => 

 

 