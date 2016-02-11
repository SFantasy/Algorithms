function array_diff(a, b) {
  var result = [];

  a.forEach(function (el, index) {
    if (b.indexOf(el) == -1) {
      result.push(el);
    }
  });

  return result;
}
