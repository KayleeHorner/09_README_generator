const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = [
    {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
          },
          {
            type: 'input',
            message: 'What is the description of your project?',
            name: 'description',
          },
          {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'installation',
          },  
          {
            type: 'input',
            message: 'Please provide usage instructions for this project.',
            name: 'usage',
          }, 
          {
            type: 'list',
            message: 'Which license applies to this project?',
            choices: ['GNU', 'GPLv3', 'MIT', 'Unlicensed'],
            name: 'license',
          }, 
          {
            type: 'list',
            message: 'Which license applies to this project?',
            name: 'contributing',
          },
          {
            type: 'input',
            message: 'How would you test this project?',
            name: 'tests',
            default: 'N/A',
          },
          {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',
          }, 
          {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
          }, 

];

// function to write README file
// function writeToFile(fileName, data) {

   
// fs.writeFile('README_template.md' , md , err => err ? console.error(err) : console.log("Success!")) ;


// });
    
// }

// function to initialize program
function init() {
inquirer
    .prompt (questions);

}

// function call to initialize program
init();
// writeToFile();


