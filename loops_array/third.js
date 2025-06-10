//Write a function that returns the largest number in an array

function findLargest(arr){

    let max=0;

    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max;
}

let arr = [5,0,7,10,8,17,1,22,93,1,-7]

console.log(findLargest(arr))