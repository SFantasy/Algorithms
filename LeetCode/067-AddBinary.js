/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  // 先比较谁比较长
  let A, B;

  if (a.length >= b.length) {
      A = a.split('');
      B = b.split('');
  } else {
      A = b.split('');
      B = a.split('');
  }

  let raiseFlag = false;

  for (let i = A.length - 1; i >= 0; i--) {
      const currentInA = A[i];
      const currentInB = B[i - A.length + B.length];

      // B 仍有值
      if (currentInB !== undefined) {
          if (currentInA === currentInB) {
              if (currentInA === '1') {
                  // 都是 1 才需要操作
                  // 把当前的置为 0
                  A[i] = '0';

                  if (raiseFlag) {
                      A[i] = '1';
                  }

                  // 下一次需要进位
                  raiseFlag = true;
              } else {
                  // 都是 0
                  A[i] = '0';
                  if (raiseFlag) {
                      A[i] = '1';
                      raiseFlag = false;
                  }
              }
          } else {
              // 不等，肯定是 1 了
              A[i] = '1';
              if (raiseFlag) {
                  A[i] = '0';
                  raiseFlag = true;
              }
          }
      } else {
        // 需要进位
        if (raiseFlag) {
          if (currentInA === '1') {
            A[i] = '0';
          } else {
            A[i] = '1';
            raiseFlag = false;
          }
        }
      }
  }

  console.log(A);

  // 需要进位
  if (raiseFlag) {
    return `1${A.join('')}`;
  }

  // 返回比较长的
  return A.join('');
};
