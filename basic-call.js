function duckCount() {
  return [].filter.call([].slice.call(arguments, 0, arguments.length), function (item) {
    return {}.hasOwnProperty.call(item, 'quack');
  }).length;
}

module.exports = duckCount;
