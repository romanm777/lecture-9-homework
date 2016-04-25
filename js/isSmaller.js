// isSmaller - a function which accepts two arguments and returns true if first one has lesser value than second one or false otherwise.
// E.g. isSmaller(5, -1); // => false
// Tip: consider reusing isBigger function

function isSmaller(first, second) {
  return isBigger(second, first);
}
