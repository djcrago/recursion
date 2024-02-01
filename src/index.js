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
