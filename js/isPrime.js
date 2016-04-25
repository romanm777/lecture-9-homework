// isPrime - a function which accepts one integer argument and returns true if
// it is prime number or false otherwise (http://www.mathsisfun.com/definitions/prime-number.html).
// E.g. isPrime(5); // => true

function isPrime(num) {
  if(num <= 1 || parseInt(num) !== num) {
    return false;
  }

  for(var i = 2; i < num; ++i) {
    if(num % i === 0.0) {
      return false;
    }
  }

  return true;
}
