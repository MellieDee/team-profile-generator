const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(gitHubName, role, name = '') {
    super(name);
    this.gitHubName = gitHubName;
    this.role = role;
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