const inquirer = require('inquirer');


// Required files
const { writeFile } = require('./src/writeHTML.js');
const generateHtmlTemp = require('./src/html-template.js');


// Constructors
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// create an array for each employee type and the base for inquirer questions
// run inquirer prompt for basic employee questions
// check length of team array if it was 0 then manager questions else what kind of employee
// after each set push to team array using the constructor
// if the user is done, run writefile function using the team array

// define employee array to hold all Team members
empArr = []


//  ********* MANAGER ************/
const managerPrompt = () => {

  console.log(`

  ============= Add a Manager   =============

  `);

  return inquirer
    .prompt([
      // ** Manager Name **
      {
        type: 'input',
        name: 'name',
        message: "What is the Manager's name? (Required)",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter their name!');
            return false;
          }
        }
      },

      // ** Manager ID  **
      {
        type: 'input',
        name: 'id',
        message: "What is the Manager's employee ID? (Required)",
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter their ID!');
            return false;
          }
        }
      },

      // ** Manager eMail **
      {
        type: 'input',
        name: 'email',
        message: "What is the Manager's eMail address? (Required)",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter their eMail!');
            return false;
          }
        }
      },

      // ** Manager Office **
      {
        type: 'input',
        name: 'office',
        message: "What is the Manager's Office Number? (Required)",
        validate: officeInput => {
          if (officeInput) {
            return true;
          } else {
            console.log('Please enter their office number?');
            return false;
          }
        }
      },

    ])
    .then(manData => {
      const { name, id, email, office } = manData;
      const manager = new Manager(name, id, email, office);
      empArr.push(manager);
    })
};
//  ********* MANAGER ENDS ************/




//  ********* NEXT TEAM MEMBERS  ***********
const teamInfoPrompt = () => {

  console.log(`

  ============= Add a Different Team Member   =============

  `);
  
  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'role',
        message: "Would you like to add a Engineer or Intern,  or Exit and get your HTML? (Required)",
        choices: ['Engineer', 'Intern', 'Exit'],
      },

      // ** Name  **
      {
        type: 'input',
        name: 'name',
        message: "What is the Team member's name? (Required)",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter their name!');
            return false;
          }
        },
        when: (answers) => answers.role !== "Exit"
      },

      // ** ID  **
      {
        type: 'input',
        name: 'id',
        message: "What is the Team Member's employee ID? (Required)",
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter their ID!');
            return false;
          }
        },
        when: (answers) => answers.role !== "Exit"
      },

      // ** eMail **
      {
        type: 'input',
        name: 'email',
        message: "What is the Team Member's eMail address? (Required)",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter their eMail!');
            return false;
          }
        },
        when: (answers) => answers.role !== "Exit"
      },

      //** ENGINEER */
      //  ** GitHub userNAME **
      {
        type: 'input',
        name: 'gitHubName',
        message: "What is the Engineer's Github Username? (Required)",
        when: (input) => input.role === 'Engineer',
        validate: gitHubNameInput => {
          if (gitHubNameInput) {
            return true;
          } else {
            console.log('Please enter their GitHub username!');
            return false;
          }
        }
      },

      //** INTERN */
      //  ** School **
      {
        type: 'input',
        name: 'school',
        message: "What is the Intern's school? (Required)",
        when: (input) => input.role === 'Intern',
        validate: schoolInput => {
          if (schoolInput) {
            return true;
          } else {
            console.log('Please enter their school!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmAddTeam',
        message: 'Would you like to enter another Team Member?',
        default: false,
        when: (answers) => answers.role !== "Exit"
      },


    ])
    .then(teamData => {
      const { name, id, email, role, gitHubName, school } = teamData;

      // check to see what role, then determine what Class to use
      if (role === 'Engineer') {

        const engineer = new Engineer(name, id, email, gitHubName);

        // push Engineer into the array
        empArr.push(engineer);
        console.log(empArr + "Eng");
      } else if (role === 'Intern') {
        const intern = new Intern(name, id, email, school);

        // push intern into the array
        empArr.push(intern);
        console.log(empArr + "Intern");

      } else {
        console.log('exit')
        
        // Exit
        return empArr
      }

      // determine whether or not new employee is desired
      if (teamData.confirmAddTeam) {
        return teamInfoPrompt(teamData);
      } else {
        console.log(empArr)
        return empArr
      }
    });
};




//  ** Running the app
managerPrompt()
  .then(teamInfoPrompt)
  .then(empArr => {
    console.log(empArr);

    return generateHtmlTemp(empArr)
  })
  .then(HTML => {
    console.log("fromWriteFilthen", HTML)
    return writeFile(HTML)
  })
  .catch(err => {
    console.log(err);
  });











// ** Running the app
// teamInfoPrompt()
//   .then(data => {
//     console.log(data);

//     return generateHtmlTemp(data)
//   })
//   .then(HTML => {
//     console.log("fromWriteFilthen", HTML)
//     return writeFile(HTML)
//   })
//   .catch(err => {
//     console.log(err);
//   });


//userInfoPrompt()
//   .then(promptProject)
//   .then(portfolioData => {
//     return generatePage(portfolioData)
//   })
//   .then(pageHTML => {
//     return writeFile(pageHTML)
//   })
//   .then(writeFileResponse => {
//     console.log(writeFileResponse)
//     return copyFile();
//   })
//   .then(copyFileResponse => {
//     console.log(copyFileResponse)
//   })
// .catch (err => {
//   console.log(err);
// });

//   ****   POSSIBLE USE LATER ******
// {
//   type: 'confirm',
//   name: 'confirmAddMan',
//   message: 'Would you like to enter another manager?',
//   default: false
// }
// const addTeamQuestion = () => {
//   return inquirer
//     .prompt([
//       {
//       type: 'confirm',
//       name: 'confirmAddTeam',
//       message: 'Would you like to enter a Team Member?',
//       default: true
//       }
//     ])
//     .then
// }
// addTeamQuestion()


      // //** NOT NOW */
      // if (manData.confirmAddMan) {
      //   return managerPrompt(manData);
      // } else {
      //   console.log(teamArr)
      //   return teamArr
      // }
      // //  ** NOT NOW **
      // {
      //   type: 'input',
      //   name: 'notNow',
      //   message: "Ok; your HTML is generated!",
      //   when: (typeInput) = ('Not Now'),
      //   validate: Input => {
      //     if (gitHubNameInput) {
      //       return true;
      //     } else {
      //       console.log('Please enter their GitHub username!');
      //       return false;
      //     }
      //   }
      // },

      // .then(data => {
      //   return data;
      // })