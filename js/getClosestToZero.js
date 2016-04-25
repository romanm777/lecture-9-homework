// getClosestToZero - a function which accepts arbitrary number of integer arguments and returns one closest to 0 (zero).
// E.g. getClosestToZero(9, 5, -4, -9); // => -4
// 	Tip: Math.abs() might be helpful

function getClosestToZero() {
  var length = arguments.length;
  if(length === 0) {
    return undefined;
  }

  var tempCloseZero = arguments[0];
  var tempAbsClose = Math.abs(arguments[0]);

  for(var i = 1; i < length; ++i) {
    var curAbs = Math.abs(arguments[i]);

    if(curAbs < tempAbsClose) {
      tempCloseZero = arguments[i];
      tempAbsClose = curAbs;
    }
  }

  return tempCloseZero;
}
