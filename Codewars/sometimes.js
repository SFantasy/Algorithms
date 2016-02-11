function sometimes(fn) {
  var time = 1;

  return function () {
    function increment () {
      time++;
    }

    if (time >= 4 && time % 2 === 0) {
      increment();
      return "hmm, I don't know!";
    } else {
      increment();
      return fn.apply(0, arguments);
    }
  };
}
