const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "What is the name of your repo?",
            name: "repo"
        },
        {
            type: "input",
            message: "Please enter a description for your project.",
            name: "description"
        },
        {
            type: "input",
            message: "What license would you like to add for your project?",
            name: "license"
        },
        {
            type: "input",
            message: "What command should be run to install dependencies?",
            name: "install"
        },
        {
            type: "input",
            message: "What command should be run to run tests?",
            name: "runTest"
        },    {
            type: "input",
            message: "What does the user need to know about using the repo?",
            name: "usage"
        },    {
            type: "input",
            message: "What does the user need to know about contributing to the repo?",
            name: "contribute"
        }
    ]);
}

function generateReadMe(answers){
    return `

![GitHub Repo stars](https://img.shields.io/github/stars/${answers.username}/${answers.repo}?style=social)
![GitHub forks](https://img.shields.io/github/forks/${answers.username}/${answers.repo}?style=social)

# ${answers.title}

## Description
${answers.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
    ${answers.install}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contribute}

## Tests
    ${answers.runTest}

## Questions
If you have any questions about this repository, open an issue or contact me directly at <${answers.email}>. You can find more of my work on my GitHub [${answers.username}](https://github.com/${answers.username}).
`;
}

promptUser()
    .then(function(answers){
        const readMe = generateReadMe(answers);
        return writeFileAsync("README.md", readMe);
    })
    .then(function(){
        console.log("Writing README");
    })
    .catch(function(err){
        console.log(err);
    });