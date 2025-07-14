// function insertion(arr){
//     let n=arr.length
//     let i = 0
//     let x=1;

//     while(n<=0){
//         if(arr[i]>arr[x]){
//             let temp = arr[i];
//             arr[i] = arr[x];
//             arr[x] = temp;
//             x++
//         }
//     }
//     return arr

// }

// let arr= [7,4,3,5,1,2];
// console.log(insertion(arr))


//Insertion sort 

function insertion(a){

    for(let i=1;i<a.length;i++){
        let current  = a[i];
        let p = i-1

        while(p>=0 && current<a[p]){
            a[p+1] = a[p];
            p--
        }
        a[p+1] = current
    }
    return a
}

const a = [7,4,3,5,1,2]

console.log(insertion(a))