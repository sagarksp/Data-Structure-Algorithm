// let n = 5 ;
// for(let i=0;i<n;i++){
//    let row = "";
//     for(let j=0;j<n-(i+1);j++){
//         row = row + "-"
//     }
//     for(let k=0;k<=i;k++){
//         row = row + "*"
//     }
//     console.log(row)
// }

// let n = 1214;
// let rev=0;
// let ncopy = n;

// while(n>0){
//     rev = rev*10 + n%10;
//     n = Math.floor(n/10)
//     // return rev
// }
// if(rev === ncopy){
//     console.log("palindrome")
// }
// else{
//     console.log(rev + "not palindrome")
// }


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

let arr = ["s","a","g","a","r"]
console.log(reverse(arr))