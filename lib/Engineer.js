const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name = '', id, email, gitHubName) {
    super(name, id, email);
    this.gitHubName = gitHubName;
  };


  getGitHubName() {
    return this.gitHubName
  };


  getRole() {
    const role = 'Engineer';
      return role;
  };
}


module.exports = Engineer;