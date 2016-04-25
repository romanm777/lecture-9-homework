// getMin - a function which accepts arbitrary number of integer arguments and returns the one with the smallest value.
// E.g. getMin(3, 0, -3); // => -3
// Tip: since arguments is like array, you can use simple iteration over it
// and use arguments[ i ] to get the argument of a given index

function getMin() {
  var length = arguments.length;
  if(length === 0) {
    return undefined;
  }

  var min = arguments[0];

  for(var i = 1; i < length; ++i) {
    if(arguments[i] < min) {
      min = arguments[i];
    }
  }

  return min;
}
