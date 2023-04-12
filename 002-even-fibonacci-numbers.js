function fiboEvenSum(n) {
  let counter = 0;
  let result = 0;
  let arr = [];
  while (result < n) {
    counter++;
    result = fibo(counter);
    arr.push(result);
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 !== 0) {
      arr.splice(i, 1);
    }
  }
  let sum = 0;
  for (let element of arr) {
    sum += element;
  }
  return sum;
}

function fibo(n) {
  if (n <= 1) {
    return n;
  }
  return fibo(n - 1) + fibo(n - 2);
}

console.log(fiboEvenSum(10));
