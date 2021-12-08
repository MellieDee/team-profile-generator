const Manager = require('../lib/Manager');
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
console.log(office)
});


// test("getRole() should return \"Manager\"", () => {
// const testValue = "Manager";
// const man = new Manager("Mary");
// expect(man.getRole()).toBe(testValue);
// });
