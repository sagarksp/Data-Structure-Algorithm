let n = 5 ; 

let swap = 1;
for(let i=0;i<n;i++){
    let row ="";
    

    for(let j=0;j<=i;j++){
        
        row = row + swap;

        if(swap == 0 ){
            swap = 1;
        }
        else{
            swap = 0;
        }
    }
    console.log(row)
}