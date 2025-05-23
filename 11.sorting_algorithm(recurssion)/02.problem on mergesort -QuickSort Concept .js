/* 
So basically in merge sort (which is a recursive algorithm )  ,it takes O(N) ; SpaceComplexity while holding the sorted value of the subpart ...

This was the problem in that  ...  which is solved by the quick sortAlgorithm it sorts the array in  O(1) --without taking extra space .


So what is the Quick Sort  algorithm?  and how it works ...? 

QuickSort is a recursive sorting algorithm based on the Divide and Conquer approach that picks an element as a pivot  and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.

It works on the principle of divide and conquer, breaking down the problem into smaller sub-problems.

There are mainly three steps in the algorithm:

Choose a Pivot: Select an element from the array as the pivot. The choice of pivot can vary (e.g., first element, last element, random element, or median).

Partition the Array: Rearrange the array around the pivot. After partitioning, all elements smaller than the pivot will be on its left, and all elements greater than the pivot will be on its right. The pivot is then in its correct position, and we obtain the index of the pivot.

Recursively Call: Recursively apply the same process to the two partitioned sub-arrays (left and right of the pivot).

Base Case: The recursion stops when there is only one element left in the sub-array, as a single element is already sorted.  ~ GFG 






/*
summary -
-pick pivot 
-pivot placing 
-place element wrt pivot 
        -dividing problem in sub part and repeat - recursively 
        Base Case:(low===high ) return;  (there is only one element left sub-array) 
        */

// what is pivot then ...  
//  it is a element of list which is used to be place at its suitable place and using this pivot we could arrangge the recursively sort the array 



// oky if we chosse the n-1 -> the element as pivot ... in general if the arrar is sorted  this will lead to O(N**2) TC  OTHERWISE THE TC WILL BE o(N * LOGN)       THE 2ND PART OF TC FOR BS .. IN SORTED ARRAY PIVOT'S BEST INDEX IS ITSELF ... SO BS FROM LOW TO HIGH ALWAYS....





























