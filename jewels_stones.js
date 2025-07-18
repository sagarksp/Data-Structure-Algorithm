// so in this problem we have to find out no of jewls present in the stones 

let jewels = "aA";
let stones = "aAAbbbb";
//BRUTE FORCE -- APPROACH1
function jewls1(stones, jewels){

    let count=0
    for(let i=0; i<stones.length; i++){
        if(jewels.includes(stones[i])){
            count++
        }
    }
    return count
}
console.log(jewls1(stones,jewels))
//TC = O(m*n) m =length of stone and n is length of jewels
//SC = O(1) constant no extra space 


//APPROACH 2

function jewels2(stones, jewels){

    let count = 0
    for(let i=0; i<stones.length; i++){
        for(let j=0; j<jewels.length; j++){
            if(jewels[j] === stones[i]){
                count++
                break;//agar jewels khtm ho gye to
            }
        }
    }
    return count
}
console.log(jewels2(stones,jewels))


//APPROACH 3 FULLY  OPTIMIZED 
//IN this we use set set is a collection which doesnot contain duplicates 
//to is question m jewls length max 52 ho skti h bs likha h alphabwts hi hoge bs to a-z and A-Z

const jewels3 = (stones, jewels)=>{
    
    //phle jewels ko set m rakh lege
    let jset = new Set();
    for(let i=0; i<jewels.length; i++){
        jset.add(jewels[i])
    }

    let count=0;
    for(let j=0; j<stones.length; j++){
        if(jset.has(stones[j])){ //isme kya hua na set m rakh k jab find karte h value than wo time complexity O(n) letin h
            count++;
        }
    }
    return count
}
console.log(jewels3(stones,jewels))

//Time complexity -- O(n) jo ki m*n se bht badhiya h 
//Space complexity -- O(1) constant isme humne space liye h par hume finite number tak set m rakhna h to wo neglect ho jayegha 