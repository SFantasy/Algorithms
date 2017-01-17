// https://leetcode.com/problems/intersection-of-two-arrays/

var results = {}
  
  nums1.forEach(n => {
    results[n] = { f: true, s: false }
  });
  
  nums2.forEach(n => {
    if (results[n]) {
      results[n].s = true;
    } else {
      results[n] = { f: false, s: true }
    }
  });
  
  var ret = [];
  
  for (var num in results) {
    if (results[num].f && results[num].s) ret.push(parseInt(num, 10));
  }
  
  return ret;
  
