const Intern = require('../lib/Intern');
jest.mock('../lib/Employee');


test('creates a new intern obj', () => {
const intern = new Intern('Iris');
expect(typeof(intern)).toBe("object");
});


test("Set name via constructor arguments", () => {
const name = "EmployeeMockName"
const intern = new Intern(name);
expect(intern.name).toBe(name);
});


test("Can get school via getSchool()", () => {
const school = this.school
const intern = new Intern(school);
expect(intern.getSchool()).toBe(school);
console.log(school)
});



test("getRole() should return \"Engineer\"", () => {
const role = "Intern";
const intern = new Intern("Iris");
expect(intern.getRole()).toBe(role);
console.log(role);
});