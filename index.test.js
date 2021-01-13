const g = require("./index.js");

test("test count 7", () => {
  const testCase = [
    {
      input: 7,
      output: 1,
    },
    {
      input: 20,
      output: 2,
    },
    {
      input: 70,
      output: 8,
    },
    {
      input: 100,
      output: 20,
    },
    {
      input: 1000,
      output: 300,
    },
  ];

  testCase.forEach(({input, output}) => {
    expect(g(input)).toBe(output);
  })


})
