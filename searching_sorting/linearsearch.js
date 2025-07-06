function linearSearch(arr, target){
    for(let i=0; i<arr.length;i++){
        if(arr[i]==target){
            return i
        }
    }
    return -1
}
let arr= [0,1,10,5,3,7]
console.log(linearSearch(arr,55))