let divideTimeingSum = 0;

const findLargestPalindrome = n => {
  const start = Date.now();

  let largestN = Math.pow(10, n) - 1;

  let i, j, largestSum;

  i = j = largestN;
  largestSum = i * j;

  while(largestSum) {
    // 不是回文则递减
    if (!isPalindrome(largestSum)) {
      largestSum--;
      continue;
    } else {
      if (canBeDivide(largestSum, largestN)) {
        console.log('Cost: ', Date.now() - start, 'ms');
        return largestSum % 1337;
      } else {
        largestSum = getNextPalindrome(largestSum);
        continue;
      }
    }
  }

  console.log('Cost: ', Date.now() - start, 'ms');
  console.log('Divide timing total: ', divideTimeingSum, 'ms');

  return largestSum % 1337;
};


const canBeDivide = (sum, n) => {
  let x, y;
  let flag = false;

  console.log(sum, n);

  const divideStart = Date.now();

  let mid = Math.floor(Math.sqrt(sum));
  x = y = mid;
  let tmp = x * y;

  while (tmp != sum) {
    if (tmp < sum) {
      x++;
      if (x > n) {
        return false;
      }
    } else {
      y--;
      if (y < Math.floor(n / 10)) {
        return false;
      }
    }

    tmp = x * y;
  }


  const divideTiming = Date.now() - divideStart;
  divideTimeingSum += divideTiming;
  console.log('Divid timing: ', divideTiming, 'ms');

  return true;
}

const isPalindrome = n => n.toString().split('').reverse().join('') === n.toString()

const getNextPalindrome = n => {
  let l = ('' + n).length;
  // 偶数位回文
  if (l % 2 === 0) {
    let pre = n.toString().slice(0, l / 2);
    pre = (parseInt(pre, 10) - 1).toString();
    return parseInt((pre + pre.split('').reverse().join('')), 10);
  } else {
    // 奇数回文
    n = n.toString();
    let pre = n.slice(0 , Math.floor(l / 2));
    pre = (parseInt(pre, 10) - 1).toString();

    const mid = n[Math.floor(l / 2) + 1];

    return parseInt(pre + mid + pre.split('').reverse().join(''), 10);
  }
}

console.log(findLargestPalindrome(7));
