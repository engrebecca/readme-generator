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
            message: "What is the name of your project?",
            name: "project"
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
            name: "installCommand"
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
            name: "contributing"
        }
    ]);
}

function generateMD(answers){
    return `
    `
}

promptUser()
    .then(function(answers){
        console.log(answers);
    });