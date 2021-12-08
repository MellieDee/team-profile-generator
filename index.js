const inquirer = require('inquirer');
const { writeFile } = require('./src/writeHTML.js');
const generateHtmlTemp = require('./src/html-template.js');



const teamInfoPrompt = () => {
  return inquirer
    .prompt([


    //  ******* MANAGER ************/
      // ** Name **
      {
        type: 'input',
        name: 'name',
        message: "What is Manager's name? (Required)",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter their name!');
            return false;
          }
        }
      },

      // ** ID  **
      {
        type: 'input',
        name: 'id',
        message: "What is Team Manager's ID? (Required)",
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter their ID!');
            return false;
          }
        }
      },

      // ** eMail **
      {
        type: 'input',
        name: 'email',
        message: "What is Manager's eMail address? (Required)",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter their eMail!');
            return false;
          }
        }
      },

      // ** Office Number **
      {
        type: 'input',
        name: 'office',
        message: "What is Manager's Office number? (Required)",
        validate: officeInput => {
          if (officeInput) {
            return true;
          } else {
            console.log('Please enter their office number?');
            return false;
          }
        }
      },

    //  ******* MANAGER ENDS ************/


    //  ** NEXT TEAM MEMBER  ***********
      {
        type: 'list',
        name: 'type',
        message: 'Would you like to enter an Engineer or Itern, now? (Required)',
        choices: ['Engineer', 'Intern', 'Not Now']
      },


      //** ENGINEER */
      //  ** GitHub userNAME **
      {
        type: 'input',
        name: 'gitHubName',
        message: "What is the Engineer's Github Username? (Required)",
        when: (typeInput) = ('Engineer'),
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
        when: (typeInput) = ('Intern'),
        validate: schoolInput => {
          if (schoolInput) {
            return true;
          } else {
            console.log('Please enter their school!');
            return false;
          }
        }
      },

      // //** NOT NOW */
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
    ])
    .then(data => {
      return data;
    })
}

// ** Running the app
teamInfoPrompt()
  .then(data => {
    return generateHtmlTemp(data)
  })
  .then(HTML => {
    return writeFile(HTML)
  })
  .catch(err => {
    console.log(err);
  });


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