function remove(nums,val){

    let count=0;

    for(let i=0;i<nums.length;i++){
        if(nums[i]==val){
            nums[i] = nums[i+1]
        }
        else  count++
        
       
    }
    return count;

}

let nums = [0,1,2,2,3,0,4,0,2]
let val  = 3 

console.log(remove(nums,val))