function divisors(integer) {
  let factors = [];

  for (let i = 2; i <= Math.ceil(integer / 2); i++) {
    if (integer % i === 0) factors.push(i);
  }

  return !factors.length ? `${integer} is prime` : factors;
}
