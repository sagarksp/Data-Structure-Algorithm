// FOR LOOPS

//loops has three main parameters initialization and condition and increment and decrement 
//loops is continously executed till the condition is satisfied
for(let i=0;i<4;i++){
    console.log("hello world")
}

for(let i =0;i<=4;i++){
    console.log("hello world 2")
}

for(let i=0;i<9;i=i+2){
    console.log("HW" + i)
}

for(let i=5;i>0;i--){
    console.log("decrement = " + i)
}


//function with loop

function greet(){
    console.log("Namaste!")
}
for(let i=0;i<5;i++){
    greet()
}

//we can also pass the arguments

function greet(i){
    console.log("Namaste! = " + i)
}
for(let i=0;i<5;i++){
    greet(i)
}

//Array with loops

let arr = [10,6,2,0,8,3,223]

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log("even number " + arr[i])
    }
    else{
        console.log("odd number " + arr[i])
    }
}

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }