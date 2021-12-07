  const Engineer = require('../lib/Engineer');

test('creates a new engineer obj', () => {
  const eng = new Engineer('Eileen');
  expect(typeof(eng)).toBe("object");
});


// test("Set name via constructor arguments", () => {
//   const name = "Eileen";
//   const eng = new Engineer(name);
//   expect(eng.name).toBe(name);
// });

test("Set gitHubName via constructor arguments", () => {
  const gitHubName = "gitHubEileen";
  const eng = new Engineer(gitHubName);
  expect(eng.gitHubName).toBe(gitHubName);
  console.log(eng)
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const eng = new Engineer("Eileen");
  expect(eng.getRole()).toBe(testValue);
});

