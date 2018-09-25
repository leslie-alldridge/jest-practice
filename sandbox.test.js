const functionsSand = require("./sandbox");

test("async data result", () => {
  return functionsSand.result().then(data => {
    expect(data).toBeTruthy();
  });
});
