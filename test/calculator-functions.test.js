const {
  sum,
  sub,
  mul,
  div,
  pow,
  sqrt,
  sin,
  cos,
  tan,
  cot,
  abs,
  log,
  log10,
  log2,
} = require("../functions/calculator-functions");

describe("calculator functions test", () => {
  describe("sum tests ", () => {
    test.each([
      [1, 1, 2],
      [-1, 2, 1],
      [2, 1, 3],
    ])("%i + %i equals %i", (number1, number2, expected) => {
      expect(sum(number1, number2)).toBe(expected);
    });
  });

  describe("sub tests ", () => {
    test.each([
      [1, 1, 0],
      [-1, 2, -3],
      [2, 2, 0],
    ])("%i - %i equals %i", (number1, number2, expected) => {
      expect(sub(number1, number2)).toBe(expected);
    });
  });

  describe("mul tests ", () => {
    test.each([
      [1, 1, 1],
      [-1, 2, -2],
      [2, 2, 4],
    ])("%i * %i equals %i", (number1, number2, expected) => {
      expect(mul(number1, number2)).toBe(expected);
    });
  });

  describe("div tests ", () => {
    test.each([
      [1, 1, 1],
      [-1, 2, -0.5],
      [2, 2, 1],
    ])("%i / %i equals %f", (number1, number2, expected) => {
      expect(div(number1, number2)).toBe(expected);
    });
  });

  describe("pow tests ", () => {
    test.each([
      [1, 5, 1],
      [-1, 5, -1],
      [2, 2, 4],
    ])("%i ^ %i equals %i", (number1, number2, expected) => {
      expect(pow(number1, number2)).toBe(expected);
    });
  });

  describe("sqrt tests ", () => {
    test.each([
      [16, 4],
      [25, 5],
      [36, 6],
    ])("√%i equals %i", (number, expected) => {
      expect(sqrt(number)).toBe(expected);
    });
  });

  describe("sin tests ", () => {
    test.each([
      [Math.PI / 2, 1],
      [Math.PI / 4, 0.7071067811865475],
      [(2 * Math.PI) / 3, 0.8660254037844387],
    ])("sin(%f) equals %f", (number, expected) => {
      expect(sin(number)).toBe(expected);
    });
  });

  describe("cos tests ", () => {
    test.each([
      [Math.PI, -1],
      [Math.PI / 3, 0.5000000000000001],
      [Math.PI / 4, 0.7071067811865476],
    ])("cos(%f) equals %f", (number, expected) => {
      expect(cos(number)).toBe(expected);
    });
  });

  describe("tan tests ", () => {
    test.each([
      [Math.PI / 4, 0.9999999999999999],
      [Math.PI / 3, 1.7320508075688767],
      [(2 * Math.PI) / 3, -1.7320508075688783],
    ])("tan(%f) equals %f", (number, expected) => {
      expect(tan(number)).toBe(expected);
    });
  });

  describe("cot tests ", () => {
    test.each([
      [(2 * Math.PI) / 3, -0.5773502691896254],
      [Math.PI / 3, 0.577350269189626],
      [Math.PI / 4, 1.0000000000000002],
    ])("cot(%f) equals %f", (number, expected) => {
      expect(cot(number)).toBe(expected);
    });
  });

  describe("abs tests ", () => {
    test.each([
      [16, 16],
      [-25, 25],
      [-36, 36],
    ])("abs(%i) equals %i", (number, expected) => {
      expect(abs(number)).toBe(expected);
    });
  });

  describe("log tests ", () => {
    test.each([
      [50, 3.912023005428146],
      [150, 5.0106352940962555],
      [5, 1.6094379124341003],
    ])("log(%i) equals %f", (number, expected) => {
      expect(log(number)).toBe(expected);
    });
  });

  describe("log10 tests ", () => {
    test.each([
      [10, 1],
      [100, 2],
      [50, 1.6989700043360187],
    ])("log10(%i) equals %f", (number, expected) => {
      expect(log10(number)).toBe(expected);
    });
  });

  describe("log2 tests ", () => {
    test.each([
      [16, 4],
      [25, 4.643856189774724],
      [100, 6.643856189774724],
    ])("log2(%i) equals %f", (number, expected) => {
      expect(log2(number)).toBe(expected);
    });
  });
});
