function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr.splice(i, 1);
        arr.splice(j, 0, temp[0]);
      }
    }
  }
  return arr;
}
var IS = insertionSort(11,2,28,22,6,12,21);
