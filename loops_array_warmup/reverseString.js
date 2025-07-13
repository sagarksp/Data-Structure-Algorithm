function reverse(arr){
    n= Math.floor(arr.length)

    let x=n-1;
    for(let i=0;i<n/2;i++){
        let temp = arr[i];
        arr[i] = arr[x];
        arr[x] = temp
        x--
        
    }
    return  arr
}

// let arr = ["h","e", "l","l","o"]
let arr = ["s","a","g","a","r"]
console.log(reverse(arr))