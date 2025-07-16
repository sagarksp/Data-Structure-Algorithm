// //By using brute force or inbuilt javascript function 

let s ="   fly me   to   the moon  "

// function string1(s){
//   s=  s.trim();
//  s =s.split(" ");

//  // array m ban gya to last element array ki length nikal degi
// return s[s.length-1].length

// }

// console.log(string1(s))

// Approach second 

const string2 = (s)=>{
   let n = s.length-1;

    // while(n>=0){
    //     if(s[n] !== " ") break;
    //     n--
    // }

    // while(n>=0){
    //     if(s[n] === " ") break;
    //     n--;
    //     count++
    // }

    //also do 

    while(n>=0){
        if(s[n] === " "){
            n--
        }else 
            {
                break;
            }  
        } 
        let count = 0;
        while(n>=0){
            if(s[n] !== " "){
                count++;
                n--
            }
            else{
                break
            }
        }
    
    return count
}

console.log(string2(s))