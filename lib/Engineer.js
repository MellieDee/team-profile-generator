const Employee = require('./Employee');

class Engineer {
  constructor(gitHubName, role) {
    this.gitHubName = gitHubName;
    this.role = role;
  };


  getGitHubName() {
    console.log(this.gitHubName);
  };


  getRole() {
    return {
      role: this.role
  };
};
}


module.exports = Engineer;