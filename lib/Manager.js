const Employee = require('./Employee');

class Manager extends Employee {
  constructor(office, role, name = '') {
    super(name);
    this.office = office;
    this.role = role;
  };

  getRole() {
    const role = 'ManFromJs';
      return role;
  };
}


module.exports = Manager;