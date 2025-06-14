//count the total number 

//eg = 259  count == 3
//eg = 123456789  count = 9

function counter(n){

    if(n==0){//is me hum jab man lo n=0 hoga to wo wala corner case nhi ho jayega
        return 1 
    }
    n = Math.abs(n)//sari n ki value jo negative bhi hogi use bhi positive kr dega 
    let count = 0;
    while(n>0){
        n = Math.floor(n/10);//point k right side wali value ko ignore kr dege

        count++
        
    }
    return count;
    
}


console.log(counter(-256))
