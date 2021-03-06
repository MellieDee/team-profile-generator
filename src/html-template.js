function generateRole(employee) {

  switch (employee.getRole()) {
  
    case 'Manager':
      return `
  <div class="card m-1">
    <div class="card-block">

      <div class="card-header drk-blue text-center">
        <h2 class="card-title" id="name">${employee.name}</h2>
        <div class="icon">
        <i class="fas fa-mug-hot fa-fw"></i>
        <h3 class="card-subhead" id = "role">Manager</h3>
        </div>
      </div>

      <ul class="list-group drk-bluelist-group-flush card-list">
       <li class="list-group-item drk-blue team-properties text-left" id="emp-id">ID: ${employee.id}</li>
       <li class="list-group-item drk-blue team-properties" id="email">eMail: <a href="mailto:${employee.email}">${employee.email}</a></li>
       <li class="list-group-item  drk-blue team-properties" id="office">Office: ${employee.office}</li>
      </ul>

  </div>
 </div>
  `;


    case 'Engineer':
   
      return `
  <div class="card m-1">
    <div class="card-block">
    
      <div class="card-header med-blue text-center">
        <h2 class="card-title" id="name">${employee.name}</h2>
        <div class="icon">
        <i class="fas fa-glasses fa-fw"></i>
        <h3 class="card-subhead" id = "role">Engineer</h3>
        </div>
      </div>
    
      <ul class="list-group med-blue list-group-flush card-list">
        <li class="list-group-item med-blue team-properties text-left" id="emp-id">ID: ${employee.id}</li>
        <li class="list-group-item med-blue team-properties" id="email">eMail: <a href="mailto:${employee.email}">${employee.email}</a></li>
        <li class="list-group-item med-blue team-properties">GitHub: <a href="https://github.com/${employee.gitHubName}" target="_blank">github.com/${employee.gitHubName}</a></li>
      </ul>
    
    </div>
  </div>
      `;

    case 'Intern':
       return `
  <div class="card lite-blue m-1">
    <div class="card-block">
    
      <div class="card-header lite-blue text-center">
        <h2 class="card-title" id="name">${employee.name}</h2>
        <div class="icon">
        <i class="fas fa-graduation-cap fa-fw"></i>
        <h3 class="card-subhead" id = "role">Intern</h3>
        </div>
      </div>
    
      <ul class="list-group  lite-bluelist-group-flush card-list">
        <li class="list-group-item lite-blue team-properties text-left" id="emp-id">ID: ${employee.id}</li>
        <li class="list-group-item  lite-blue team-properties" id="email">eMail: <a href="mailto:${employee.email}">${employee.email}</a></li>
        <li class="list-group-item lite-blue team-properties" id="school">School: ${employee.school}</li>
      </ul>
    
    </div>
  </div>
      `;
  };
}

const generateHtmlTemp = (empArr) => {

  const empCards = empArr.map(generateRole);
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

    <div class="card-deck">
    ${empCards.toString().replace(/,/g, '')}

    </div>

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




// function generateGitLink(employee) {

//   const gitHubLink = `https://github.com/(${employee.gitHubName}).replace(/ /g, '')`

//   return gitHubLink
// };
// generateGitLink