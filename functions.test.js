const functions = require("./functions");

test("Adds 2 plus 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("adds 2 + 2 to not equal", () => {
  expect(functions.add(2, 3)).not.toBe(2);
});

test("should be null", () => {
  expect(functions.add(2, 3)).not.toBe(2);
});
