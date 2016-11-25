var slice = [].slice;

function logger(namespace) {
  return function () {
    console.log.apply(
      console, [namespace, slice.call(arguments, 0).join(' ')]
    );
  }
}

module.exports = logger;
