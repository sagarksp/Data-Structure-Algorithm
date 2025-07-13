function secondLargest(arr){
    let max = -Infinity;
    let second=-Infinity;
    let n = arr.length

    for(let i=0; i<n; i++){
        if(arr[i]>max){
            second = max
            max=arr[i]
           
        }
         if(arr[i]> second &&arr[i]<max){
                second=arr[i]
            }
         
    }
    return second
}

// let arr = [4,9,0,2,8,7,1]
let arr = [-10,-20,-50, -2,-1]
console.log(secondLargest(arr))