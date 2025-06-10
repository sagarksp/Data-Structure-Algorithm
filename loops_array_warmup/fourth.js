//finding the smallest number from an array 

function smallest(arr){
    let min = Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i]
        }
    }
    return min;
}

let arr=[4,9,0,2,8,7,1,-1,-2]

console.log(smallest(arr))