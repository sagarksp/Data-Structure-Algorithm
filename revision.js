function insertion(arr){
    let n=arr.length
    let i = 0
    let x=1;

    while(n<=0){
        if(arr[i]>arr[x]){
            let temp = arr[i];
            arr[i] = arr[x];
            arr[x] = temp;
            x++
        }
    }
    return arr

}

let arr= [7,4,3,5,1,2];
console.log(insertion(arr))