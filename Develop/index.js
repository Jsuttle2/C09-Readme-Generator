// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs-extra');
const util = require('util');

// TODO: Create an array of questions for user input
function promptUser() {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a brief description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
      },
    ]);
  }

  
  function generateReadme(answers) {
    return `
  # ${answers.title}
  
  ## Description
  ${answers.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## License
  ${answers.license === 'None' ? 'This application has no license.' : `This application is covered under the ${answers.license} license.`}
  
  ## Contributing
  ${answers.contributing}
  
  ## Tests
  ${answers.tests}
  
  ## Questions
  For additional questions or concerns, please contact ${answers.github} at ${answers.email}.
  `;
  }

// TODO: Create a function to write README file
const writeFile = util.promisify(fs.writeFile);

// TODO: Create a function to initialize app
async function init() {
    try {
      const answers = await promptUser();
  
      const readme = generateReadme(answers);
  
      await writeFile('README.md', readme);
  
      console.log('Successfully generated README.md file!');
    } catch (err) {
      console.log(err);
    }
  }

// Function call to initialize app
init();
