const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name = '', id, email, office) {
    super(name, id, email);
    this.office = office;
  };

  getRole() {
    const role = 'Manager';
      return role;
  };
}


module.exports = Manager;