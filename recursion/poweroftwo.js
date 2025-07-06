function fun(n) {
     console.log(n)
    if(n==1 || n==2) return true;
    return ((n%2==0 && n>1)   )?fun(n/2):false
    
   

    
    
};
let n=6;
console.log(fun(n))