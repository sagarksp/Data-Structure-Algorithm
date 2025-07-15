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

// function insertion(a){

//     for(let i=1;i<a.length;i++){
//         let current  = a[i];
//         let p = i-1

//         while(p>=0 && current<a[p]){
//             a[p+1] = a[p];
//             p--
//         }
//         a[p+1] = current
//     }
//     return a
// }

// const a = [7,4,3,5,1,2]

// console.log(insertion(a))

//Merge sorted array
 let arr1 = [1,3,5,7];
 let arr2 = [2,4,8,9];

function mergeSort(arr1, arr2){
    let m = arr1.length;
    let n = arr2.length;
    let p1=m-1;
    let p2=n-1;

    for(let i=m+n-1 ;i>=0; i--){
        if(p2<0) break;

        if(p1>=0 && arr1[p1]>arr2[p2]){
            arr1[i] = arr1[p1]
            p1--
        }
        else{
            arr1[i] = arr2[p2];
            p2--
        }
         
    }
   return arr1
}
console.log(mergeSort(arr1,arr2))