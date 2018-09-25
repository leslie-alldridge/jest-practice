const functions = require("./functions");

test("Adds 2 plus 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("adds 2 + 2 to not equal", () => {
  expect(functions.add(2, 3)).not.toBe(2);
});

test("should be null", () => {
  expect(functions.isNull()).toBeNull()
});

test("should be the falsey", () => {
  expect(functions.checkValue(null)).toBeFalsy()
});

test("should be our user", () => {
  expect(functions.createUser()).toMatchObject({
    firstname: 'leslie',
    lastname: 'alldridge'
  })
});

test("should be under load 1600", () => {
  const load1 = 800
  const load2 = 500
  expect(load1+load2).toBeLessThanOrEqual(1600)
});

test("there is no i in team", () => {
  expect('team').not.toMatch(/I/i);
});

test("admin should be a user", () => {
  const usernames = ['leslie', 'yusuki', 'admin']
  expect(usernames).toContain('admin')
}); 

test("async data", () => {
  expect.assertions(1);
  return functions.fetchUser()
  .then(data => {
    expect(data.title).toEqual('delectus aut autem')
  })
}); 