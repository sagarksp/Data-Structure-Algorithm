function palindrome(x){

    let rev= 0;
    let copy = x;

    while(x>0){

        let rem = x%10;//224  rem =2
        rev = (10*rem) + rem; //0*10+2 = 2
        x = x/10
    }

    if(rev === copy){
        return true
    }
    else{
        return false
    }
}

let x=2442;

console.log(palindrome(x))