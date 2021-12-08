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


test("Can get gitHub via getGitHubName()", () => {
  const gitHubName = this.gitHubName;
  const eng = new Engineer(gitHubName);
  expect(eng.getGitHubName()).toBe(gitHubName);
  console.log(gitHubName)
});



test("getRole() should return \"Engineer\"", () => {
  const role = "Engineer";
  const eng = new Engineer("Eileen");
  expect(eng.getRole()).toBe(role);
  console.log(role);
});

