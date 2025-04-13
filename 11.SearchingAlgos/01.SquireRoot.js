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