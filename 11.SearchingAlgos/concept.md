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










 