const axios = require("axios");

functionsSand = {
  result: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then(res => res.data)
      .catch(err => "error")
};

module.exports = functionsSand;
