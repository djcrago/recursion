import './style.css';

function fibs(n) {
  const array = [0, 1];

  for (let i = 1; i <= n - 2; i += 1) {
    const sum = array[i] + array[i - 1];
    array.push(sum);
  }

  return array;
}

console.log(fibs(8));

function fibsRec(n) {
  if (n === 1) {
    return [0];
  }

  if (n === 2) {
    return [0, 1];
  }

  const array = fibsRec(n - 1);

  const previous = array[array.length - 2];
  const current = array[array.length - 1];
  array.push(previous + current);

  return array;
}

console.log(fibsRec(8));

// Merge Sort

function merge(leftArray, rightArray) {
  if (leftArray.length === 0) {
    return rightArray;
  }
  if (rightArray.length === 0) {
    return leftArray;
  }
  let sortedArray = [];

  if (leftArray[0] === rightArray[0]) {
    sortedArray.push(leftArray[0]);
    leftArray.shift();
    if (leftArray.length === 0) {
      while (rightArray.length > 0) {
        sortedArray.push(rightArray[0]);
        rightArray.shift();
      }
    } else {
      const leftNext = merge(leftArray, rightArray);
      sortedArray = merge(sortedArray, leftNext);
    }
  }

  if (leftArray[0] < rightArray[0]) {
    sortedArray.push(leftArray[0]);
    leftArray.shift();
    if (leftArray.length === 0) {
      while (rightArray.length > 0) {
        sortedArray.push(rightArray[0]);
        rightArray.shift();
      }
    } else {
      const leftNext = merge(leftArray, rightArray);
      sortedArray = merge(sortedArray, leftNext);
    }
  }

  if (leftArray[0] > rightArray[0]) {
    sortedArray.push(rightArray[0]);
    rightArray.shift();
    if (rightArray.length === 0) {
      while (leftArray.length > 0) {
        sortedArray.push(leftArray[0]);
        leftArray.shift();
      }
    } else {
      const rightNext = merge(leftArray, rightArray);
      sortedArray = merge(sortedArray, rightNext);
    }
  }

  return sortedArray;
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  const mid = array.length / 2;

  const leftArray = [];
  for (let i = 0; i < mid; i += 1) {
    leftArray.push(array[i]);
  }
  const leftSorted = mergeSort(leftArray);

  const rightArray = [];
  for (let j = mid; j < array.length; j += 1) {
    rightArray.push(array[j]);
  }
  const rightSorted = mergeSort(rightArray);

  const sortedArray = merge(leftSorted, rightSorted);

  return sortedArray;
}

console.log(mergeSort([105, 79, 100, 110]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
