function largestPalindromeProduct(n) {
  let result = 0;
  let product = 0;
  for (let i = 10 ** (n - 1); i < 10 ** n; i++) {
    for (let j = 10 ** (n - 1); j < 10 ** n; j++) {
      product = i * j;
      if (isPalindrome(product) && product > result) {
        result = i * j;
      }
    }
  }
  return result;
}

function isPalindrome(n) {
  let number = n.toString();
  let numberReversed = number.split('').reverse().join('');
  return number == numberReversed;
}

console.log(largestPalindromeProduct(3));
