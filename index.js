// TODO: Include packages needed for this application
const inquirer = requirer('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    type: 'checkbox',
    name: 'license',
    choices: ["MIT", "GPLv3", "GPL"],
    message: 'Pick your license.'
];

.prompt([
    {
    type: 'input',
    name: 'title',
    message: 'What is your project's title?',
     },  
     {
     type: 'input',
     name: 'description',
     message: 'What is a discription of your project?',
     }, 
     {
     type: 'input',
     name: 'installation instructions',
     message: 'What are the instructions to install?',
     },   
     {
     type: 'input',
     name: 'usage information',
     message: 'What is information about usage?',
     },
     {
     type: 'input',
     name: 'contribution guidelines',
     message: 'What are the guidlines to contribute?',
     },
     {
     type: 'input',
     name: 'test instructions',
     message: 'What are the instructions for testing?',
     },
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return README;
};

// TODO: Create a function to initialize app
function init() {

};

// Function call to initialize app
init();
