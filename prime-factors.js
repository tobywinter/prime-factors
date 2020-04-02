class PrimeFactors {
  constructor() {}

  generate(number) {
    let primes = [];

    for (let primeFactor = 2; number > 1; ) {
      for (; this.isDivisibleBy(number, primeFactor); number /= primeFactor) {
        primes.push(primeFactor);
      }
      primeFactor++;
    }

    return primes;
  }

  isDivisibleBy(number, divider) {
    return number % divider === 0;
  }
}

module.exports = {
  PrimeFactors
};
