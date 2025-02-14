
var ProductOfNumbers = function() {
    //this is Super function
    
      //ProductOfNumbers() Initializes the object with an empty stream.  //call with new keyword 
    this.stream=[] //an empty stream
    
    };
    
    /** 
     * @param {number} num
     * @return {void}
     */
    ProductOfNumbers.prototype.add = function(num) {
    //we  can acess ProductofNumber() from here ~Prototypical Inheritance     
        //  console.log(new ProductOfNumbers()) //tested !oky
    
              this.stream.push(num) //Appends the integer num to the stream.//tested!oky
    
    // console.log(this.stream) //tested !oky
    };
    
    /** 
     * @param {number} k
     * @return {number}
     */
    ProductOfNumbers.prototype.getProduct = function(k) {
        //we  can acess  ProductofNumber() from here ~Prototypical Inheritance
        //  console.log(ProductOfNumbers) //tested !oky
    
    
    console.log(this.stream)//oky tested
    let currStream=this.stream;
    
    // console.log(currStream.length) //tested
    
    let product=1
    
    for (let i = currStream.length-1; i >=currStream.length-k; i--){
    product*=currStream[i]
    }
    
    console.log(product)//check
    
    return product; 
    
    
    };
    
    /** 
     * Your ProductOfNumbers object will be instantiated and called as such:
     * var obj = new ProductOfNumbers()
     * obj.add(num)
     * var param_2 = obj.getProduct(k)
     */