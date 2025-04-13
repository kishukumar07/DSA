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
--so don't u think we should start it from mid  



















