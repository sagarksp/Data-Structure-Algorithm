//finding out the second largest

//corner cases -- if the array is empty or has only one element than what will be the second  largest

function secondLargestt(arr){

    if(arr.length<2){
        return -1
    }

    let firstLargest = -Infinity;
    let secondLargest = -Infinity

    for(let i=0; i<arr.length; i++){
        if(arr[i]>firstLargest){

            secondLargest=firstLargest;
            firstLargest = arr[i]
        }
        else if(arr[i]>secondLargest && arr[i] != firstLargest){
            secondLargest = arr[i]
        }
    }
    return secondLargest;
}

let arr = [4,2,7,8,11,22,9]

console.log(secondLargestt(arr))