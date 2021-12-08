  const Engineer = require('../lib/Engineer');
  jest.mock('../lib/Employee');


test('creates a new engineer obj', () => {
  const eng = new Engineer('Eileen');
  expect(typeof(eng)).toBe("object");
});


test("Set name via constructor arguments", () => {
  const name = "EmployeeMockName"
  const eng = new Engineer(name);
  expect(eng.name).toBe(name);
});

// test("Set gitHubName via constructor arguments", () => {
//   const gitHubName = "gitHubEileen";
//   const eng = new Engineer(gitHubName);
//   expect(eng.gitHubName).toBe(gitHubName);
//   console.log(gitHubName)
// });

test("Can get gitHub via getGitHubName()", () => {
  const gitHubName = "melliedee";
  const eng = new Engineer(gitHubName);
  expect(eng.getGitHubName()).toBe(gitHubName);
  console.log(gitHubName)
});



test("getRole() should return \"Engineer\"", () => {
  const role = "EngFromJs";
  const eng = new Engineer("Eileen");
  expect(eng.getRole()).toBe(role);
  console.log(role);
});

