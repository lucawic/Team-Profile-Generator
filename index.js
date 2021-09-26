
//for inquirer
const inquirer = require('inquirer');
//require file system to generate html
const fs = require('fs');

//routed employee classes
const employeeArray = [];
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const writeFile = require('./utils/writeFile.js');
const htmlGenerator = require('./src/htmlGenerator.js');

/*/Filepath to the HTML
const generateHTMLFilePath = require ('./dist/TeamProfile.html');
*/

//array of objects that holds team members globally 

// TODO: Create an array of questions for user input
//Intitial command prompt questions: for manager role
const managerPrompt = () => {
return inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message: 'What is the Team Manager name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is the Manager Employee ID?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the Manager email?',
      },
      {
        type: 'input',
        name: 'officenumber',
        message: 'What is the Manager Office Number?',
      },
    ])
.then((answers) => {
    const {name, id, email, officenumber} = answers;
    const manager = new Manager (name, id, email, officenumber);
    employeeArray.push(manager);
    console.log(employeeArray);
});
}

const promptTeam = teamData => {
    // If there's no 'projects' array property, create one
    if(!teamData) {
        teamData = [];
    }
    console.log(`
  =======================
   Add a New Team Member
  =======================
  `);
    return inquirer.prompt([

        {
          type: 'confirm',
          name: 'addEmployee',
          message: 'Add a new team Member?',
          default: true,
        },
        {
          type: 'list',
          name: 'role',
          message: 'What is the Employee role?',
          choices: ['Engineer','Intern'],
          when:({addEmployee}) => {
            if (addEmployee) {
              return true;
            }else{
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'name',
          message: 'What is the Engineers Name?',
          when: ({role}) => {
            if (role === 'Engineer') {
              return true;
            }else{
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'id',
          message: 'What is the Engineers Employee ID?',
          when: ({role}) => {
            if (role === 'Engineer') {
              return true;
            }else{
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is the Engineers Email?',
          when: ({role}) => {
            if (role === 'Engineer') {
              return true;
            }else{
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'github',
          message: 'What is the Engineers Github?',
          when: ({role}) => {
            if (role === 'Engineer') {
              return true;
            }else{
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'name',
          message: 'What is the intern Name?',
          when: ({role}) => {
            if (role === 'Intern') {
              return true;
            }else{
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'id',
          message: 'What is the intern Employee ID?',
          when: ({role}) => {
            if (role === 'Intern') {
              return true;
            }else{
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is the intern Email?',
          when: ({role}) => {
            if (role === 'Intern') {
              return true;
            }else{
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'school',
          message: 'What is the Interns school?',
          when: ({role}) => {
            if (role === 'Intern') {
              return true;
            }else{
              return false;
            }
          },
  
        },
  
      ]).then((answers)=>{
        console.log(answers);
        if(answers.role === 'Engineer'){
          const {name, id, email, github} = answers;
          const engineer = new Engineer(name, id, email, github);
          employeeArray.push(engineer);
          console.log(employeeArray);
        }
        if(answers.role === 'Intern'){
          const {name, id, email, school} = answers;
          const intern = new Intern(name, id, email, school);
          employeeArray.push(intern);
          console.log(employeeArray);
        }
      }
      )
      .then(promptAddAnotherTeamMember);  
    };
  const promptAddAnotherTeamMember = () => {
    return inquirer.prompt([
      {
        type: 'confirm',
        name: 'confirmAddTeam',
        message: 'Add additional team members?',
        default: false
      }
    ])
    .then(answers => {
      if (answers.confirmAddTeam) {
      console.log('Adding a new team member');
      return promptTeam();
    }
    });
  }
  
  managerPrompt()
  .then(promptTeam)
  .then(()=>{
    writeFile(htmlGenerator(employeeArray));
  });




/*
    function addEngineer(){
    inquirer.prompt ([{
        type: 'input',
        message: 'Enter team engineer name',
        name: 'engineerName'
    }, {
        type: 'input',
        message: 'Enter team engineer employeeID',
        name: 'engineerID'
    }, {
        type: 'input',
        message: 'Enter team engineer email',
        name: 'engineerEmail'
    }, {
        type: 'input',
        message: 'Enter team engineer Github',
        name: 'engineerGithub'
    }, {
        type: 'list',
        message: 'Select team members to add',
        name: 'additionalTeamMember',
        choices:["Engineer", "Intern", "Exit"]
    }])
    
    .then (answers => {
        //creating manager object
        let engineer = new Manager(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
        //add manager to global team member object
        teamMembers.push(engineer);
        //additional team member options
        evaluateAdditionalTeamMemberResult(answers.additionalTeamMember);
    })
        .catch(error => {
            //boiler plate error handling from inquire
          if(error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
          } else {
            // Something else went wrong
          }
        });
    }
    function addIntern(){
        inquirer.prompt ([{
            type: 'input',
            message: 'Enter team intern name',
            name: 'engineerName'
        }, {
            type: 'input',
            message: 'Enter team intern employeeID',
            name: 'engineerID'
        }, {
            type: 'input',
            message: 'Enter team intern email',
            name: 'engineerEmail'
        }, {
            type: 'input',
            message: 'Enter team intern School',
            name: 'internSchool'
        }, {
            type: 'list',
            message: 'Select team members to add',
            name: 'additionalTeamMember',
            choices:["Engineer", "Intern", "Exit"]
        }])
        
        .then (answers => {
            //creating manager object
            let intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.iternSchool);
            //add manager to global team member object
            teamMembers.push(intern);
            //additional team member options
            evaluateAdditionalTeamMemberResult(answers.additionalTeamMember);
        })
            .catch(error => {
                //boiler plate error handling from inquire
              if(error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
              } else {
                // Something else went wrong
              }
            });
        }



        
function evaluateAdditionalTeamMemberResult(result)
        {
            if(result === "Engineer") {
                addEngineer();
            } else if(result === "Intern") {
                addIntern();
            }else {
                generateHTML();
            }
        }
function generateInitialHTML() {
    return `
    <!DOCTYPE html>
    <html lang = "en">
        <meta charset = "UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="./teamProfile.css">
        </head>
        <body>
        <div class="teamNavBar">
            <h1 class ="navBarTitle">My Team</h2>
        </div>
        <div class = "cardBody">`
}

function generateTeamMemberHTML(teamMember) {
    return `
    <div class="teamMemberCard">
        <div class="teamMemberTitle">
            <h3>${teamMember.getName()} - ${teamMember.getRole()}</h3>
        </div>
        <div class="teamMemberBody">
            <ul>
                <li> ID:${teammember.getID()}</li>
                <li>Email: <a href="mailto:${teamMember.getEmail()}">${teamMember.getEmail()}</a></li>
                ${teamMember.getRoleHtml}
            </ul>
        </div>
    </div>`;
}
    
function generateFinalHTML(){
    return `    
    </div>
    </body>
    </html>`;
}

function generateHTML(){
        //create a new file to overwrite existing
    fs.writeFileSync(generatedHTMLFilePath, "");
        //setup string to hold data for html 
    let htmlData = generateInitialHTML();
        //loop through all the team members 
        for (var a in teamMember) {
            htmlData += generateTeamMemberHTML(teamMembers[a]);
        }
    //add the rest of html
htmlData += generateFinalHTML();
        //write data to file
        fs.writeFileSync(generatedHTMLFilePath,htmlData);
}

*/