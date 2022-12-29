const {
  radianToDegree,
  degreeToRadian,
  isPalindrome,
  selectionSort,
  insertionSort,
} = require("../functions/utill-functions");

describe("utill functions test", () => {
  describe("convert radian to degree tests ", () => {
    test.each([
      [1, 57.29577951308232],
      [-0.5, -28.64788975654116],
      [2, 114.59155902616465],
    ])("%f radian equals %f degree", (angle, expected) => {
      expect(radianToDegree(angle)).toBe(expected);
    });
  });

  describe("convert degree to radian tests ", () => {
    test.each([
      [90, 1.5707963267948966],
      [-270, -4.71238898038469],
      [135, 2.356194490192345],
    ])("%f degree equals %f radian", (angle, expected) => {
      expect(degreeToRadian(angle)).toBe(expected);
    });
  });

  describe("palindrome tests ", () => {
    test.each([
      ["test", false],
      ["abccba", true],
      ["aya", true],
    ])("is %s palindrome? %s", (word, expected) => {
      expect(isPalindrome(word)).toBe(expected);
    });
  });

  describe("selection sort tests ", () => {
    test.each([
      [
        [1, -1, 2, -2],
        [-2, -1, 1, 2],
      ],
      [
        [3, 5, 1, 2],
        [1, 2, 3, 5],
      ],
      [
        [5, 2, 4, 6, 1, 3],
        [1, 2, 3, 4, 5, 6],
      ],
    ])("%s after selection sort : %s", (array, expected) => {
      expect(selectionSort(array)).toStrictEqual(expected);
    });
  });

  describe("insertion sort tests ", () => {
    test.each([
      [
        [1, -1, 2, -2],
        [-2, -1, 1, 2],
      ],
      [
        [3, 5, 1, 2],
        [1, 2, 3, 5],
      ],
      [
        [5, 2, 4, 6, 1, 3],
        [1, 2, 3, 4, 5, 6],
      ],
    ])("%s after insertion sort : %s", (array, expected) => {
      expect(insertionSort(array)).toStrictEqual(expected);
    });
  });
});
