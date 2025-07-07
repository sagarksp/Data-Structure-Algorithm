var search = function(nums, target) {
    let left = 0;
    let right = (nums.length-1);

    while(right>=left){
        let middle = Math.floor((left+right)/2);

        if(target === nums[middle]){
            
            return middle
        }
        
        else if(nums[middle]<target){
            left = middle+1
             
             
        }
      else{
        right = middle-1
      }
     
       
    }
    
    return -1;
    
};

let nums = [-1,0,3,5,9,12]
console.log(search(nums, 9))