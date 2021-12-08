const Manager = require('../lib/Engineer');
jest.mock('../lib/Employee');


test('creates a new engineer obj', () => {
const man = new Manager('Mary');
expect(typeof(man)).toBe("object");
});


test("Set name via constructor arguments", () => {
const name = "EmployeeMockName"
const man = new Manager(name);
expect(man.name).toBe(name);
});

test("Set office via constructor arguments", () => {
const office = "Office 222";
const man = new Manager(office);
expect(man.office).toBe(office);
console.log(man)
});


// test("getRole() should return \"Manager\"", () => {
// const testValue = "Manager";
// const man = new Manager("Mary");
// expect(man.getRole()).toBe(testValue);
// });
