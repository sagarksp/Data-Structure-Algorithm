// function sum(a,b){
//     console.log(a+b)
// }
// sum(2,8)

const sum =(a,b)=>{
    // console.log(a+b)
    
    return(a+b)
}

const valll = sum(4,2)
console.log(valll)
console.log("hello world")


//arrays 

const arr1 = [2,4,"sagar" ,[502,2,5]]
console.log(arr1[3][2])

//finding the person is eligible for vote or not
let vote = (age)=>{
    if(age<=0){
        console.log("age can not be negative")
    }
    else if(age>=18){
        console.log("Eligible")
    }
    else {
        console.log("not eligible")
    }
}
vote(18)


//finding if the number is even or not
let isEven = (num)=>{
    let rem = num%2;
    if(rem==0){
        console.log("even number ")
    }
    else{
        console.log("odd number")
    }
}
isEven(546546456546)