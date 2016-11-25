/*function reduce(arr, fn, initial) {
  if (!arr.length) return initial;
  arr = arr.slice();
  initial = fn(initial, arr.shift());
  return reduce(arr, fn, initial);
}*/

function reduce(arr, fn, initial) {
  return (function reduceOne(index, value) {
    if (index > arr.length - 1) return value;
    return reduceOne(index + 1, fn(value, arr[index], index, arr));
  })(0, initial);
}

module.exports = reduce;
