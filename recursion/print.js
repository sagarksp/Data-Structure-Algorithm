function fun(n,val){
    if(val > n) return;
    console.log(val);
    val = val+1
    fun(n,val)
}


fun(5,1)