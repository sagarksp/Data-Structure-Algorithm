function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let mid = i;
    for (let j = i + 1; j <= n - 1; j++) {
      if (arr[j] < arr[mid]) {
        mid = j;
      }
    }
    //imporovement like if go at 4 than min and i is same
   
      let temp = arr[i];
      arr[i] = arr[mid];
      arr[mid] = temp;
    
  }
  return arr;
}

let arr = [7, 1, 5, 4, 3, 2];
console.log(selectionSort(arr));
