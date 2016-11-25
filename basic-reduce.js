function countWords(inputWords) {
  return inputWords.reduce(function (o, val) {
    o.hasOwnProperty(val) ? o[val]++ : o[val] = 1;
    return o;
  }, {});
}

module.exports = countWords;
