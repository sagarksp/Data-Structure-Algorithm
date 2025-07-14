
function insertion(a){

    for(let i=1;i<a.length;i++){
        let current  = a[i];
        let p = i-1

        while(p>=0 && current<a[p]){
            a[p+1] = a[p];
            p--
        }
        a[p+1] = current
    }
    return a
}

const a = [7,4,3,5,1,2]

console.log(insertion(a))