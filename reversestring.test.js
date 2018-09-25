const reverseString = require("./reversestring");

test("should import reverse string", () => {
  expect(reverseString).toBeDefined();
});

test("should reverse a string", () => {
  expect(reverseString("hello")).toEqual("olleh");
});

test("should reverse a string of any type", () => {
  expect(reverseString("Hello")).toEqual("olleh");
});
