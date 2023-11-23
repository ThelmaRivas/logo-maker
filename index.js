// Runs the application using imports from lib/
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const { Shape, Triangle, Circle, Square } = require('./lib/shapes');

async function generateLogo() {
    const { text, textColor, shape, shapeColor } = await inquirer.prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Enter up to three characters:',
          validate: (input) => {
            return input.length <= 3;
          },
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'Enter the text color:',
        },
        {
          type: 'list',
          name: 'shape',
          message: 'Select a shape:',
          choices: ['Circle', 'Triangle', 'Square'],
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Enter the shape color:',
        },
      ]);
   
}