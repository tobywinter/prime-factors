const { PrimeFactors } = require("./prime-factors");

describe("PrimeFactors", () => {
  it.each([
    [[], 1],
    [[2], 2],
    [[3], 3],
    [[2, 2], 4],
    [[2, 3], 6],
    [[2, 2, 2], 8],
    [[3, 3], 9]
  ])("should generate %p when given %i", (expected, given) => {
    const primeFactors = new PrimeFactors();
    expect(primeFactors.generate(given)).toStrictEqual(expected);
  });
});
