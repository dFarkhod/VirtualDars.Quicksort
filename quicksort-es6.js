function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[Math.floor(Math.random() * arr.length)];

  let equal = [];
  let left = [];
  let right = [];

  for (const value of arr) {
    if (value < pivot) {
        left.push(value);
    } else if (value > pivot) {
        right.push(value);
    } else {
        equal.push(value);
    }
  }

  let finalArr = quickSort(left).concat(equal).concat(quickSort(right));
  return finalArr;
}

const unsortedArray = [3, 6, 8, 10, 1, 2, 1, 7];
console.log(unsortedArray);
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray);
