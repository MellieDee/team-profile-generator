//create special list item
// const generateProjectUrl = projectUrl => {
//   if (!projectUrl) {
//   return 'Does not have a deployment URL.'
//   }
//   return `
// ${projectUrl}
// `;
// };

function generateRole(empArr) {
  switch(getRole()) {
    case 'Manager':
      return `
      <h3 class="card-subhead" id="role">Manager</h3>
      `

    case 'Engineer':
      return `
      <h3 class="card-subhead" id="role">Engineer</h3>
      `
    case 'Intern':
    return `
    <h3 class="card-subhead" id="role">Intern</h3>
    `
  }
}
// const Engineer = require('./lib/Engineer.js');


const generateGitHubName = gitHubName => {
  if (!gitHubName) {
    return '';
  }
  return `
  <li class="list-group-item team-properties" id="github">
  <a href='https://github.com/${data.githubName.replace(/ /g, "")}' class="link" target="_blank">${data.gitHubName}</li>
  `
}

// create cards
const generateCards= (name, role, email) => {
  if (name, role, email) {

  return `
  <div class="card-deck">

  <div class="card m-1">
    <div class="card-block">

      <div class="card-header text-center">
        <h2 class="card-title" id="name">${data.name}</h2>
        ${generateRole(data.role)}
      </div>

      <ul class="list-group list-group-flush card-list">
        <li class="list-group-item team-properties text-left" id="emp-id">${data.id}</li>
        <li class="list-group-item  team-properties" id="email">${data.email}</li>
      ${generateGitHubName(data.gitHubName)}
      </ul>
    </div>

  </div>
</div>
  `;
};
}

// export function to generate entire page
//from portfolio sample
// module.exports = templateData => {
//   // destructure page data by section
//   const { projects, about, ...header } = templateData;

const generateHtmlTemp = () => {
  const { name, id, email, role} = data
  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
  
    <title>Team</title>
  
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"
      integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
  
  
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Oswald:wght@600&display=swap"
      rel="stylesheet">
  
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
  
  
    <link rel="stylesheet" href="style.css">
  </head>
  
  
  
  <body class="body-gradient">
    <header class="container-fluid">
      <div class="container" id="header">
        <i class="far fa-address-card"></i>
        <h1>OUR TEAM</h1>
  
      </div>
    </header>


${generateCards(name, role, email)}




    </body>


    <footer class="container-fluid">
      <h4>&copy; 2021</h4>
    </footer>
    
    
    
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous">
      </script>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous">
      </script>
    
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous">
      </script>
    
    </body>
    
    </html>
    '
    `;
}

module.exports = generateHtmlTemp
