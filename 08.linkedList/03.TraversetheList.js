//traverse and print the data of the linkedlist or find the length of linkedlist

const head= {
    data: 4,
    next: { data: 5, next:  { data: 3, next: null } }
  }  //fake list 


traverse(head)

  function traverse(head){
let  temp =head;
let length=0; 

    while(temp!==null){   //at last temp will be null not temp.data (if temp hi null hai toh .data kha se aayega)
        console.log(temp.data)
        length++; 
        temp =temp.next //incrementing the temp 
    }
    console.log("length of list :",length); 
  }