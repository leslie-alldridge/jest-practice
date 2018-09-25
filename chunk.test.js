const chunkArray = require("./chunk");

test("should import chunk", () => {
  expect(chunkArray).toBeDefined();
});

test("chunk 10 values with len 2 array", () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const len = 2;
  const chunkedArr = chunkArray(numbers, len);
  expect(chunkedArr).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
});
