function odd(n){
    let isOdd = n%2!=0 ;
    if(n==0){
        return isOdd?arr[0]:0
    }
    // console.log(n)
    console.log(arr[n])

    if(isOdd){
        return arr[n] + odd(n-1)
    }
    else{
        return 0+ odd(n-1)
    }

    //  return (isOdd?arr[n]:0)+odd(n-1)
}
let arr =[5,3,2,10,1]
console.log(odd(arr.length-1))