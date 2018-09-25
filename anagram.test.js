const isAnagram = require("./anagram");

test("isAnagram func exists", () => {
  expect(typeof isAnagram).toEqual("function");
});

test("cinema is an anagram of iceman", () => {
  expect(isAnagram("cinema", "iceman")).toBeTruthy();
});

test("dormitory should anagram dirty room##", () => {
  expect(isAnagram("Dormitory", "dirty room##")).toBeTruthy();
});

test("hello is not anagram of aloha", () => {
  expect(isAnagram("hello", "aloha")).toBeFalsy();
});
