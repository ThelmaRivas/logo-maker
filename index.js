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

    let shapeObj;
    switch (shape) {
        case 'Triangle':
            shapeObj = new Triangle(shapeColor);
            break;
        case 'Circle':
            shapeObj = new Circle(shapeColor);
            break;
        case 'Square':
            shapeObj = new Square(shapeColor);
            break;
        default:
            throw new Error('Invalid shape');
    }

    const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" height="200" width="300">
      ${shapeObj.render()}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;

    const folderPath = './examples';
    fs.mkdirSync(folderPath, { recursive: true });

    const fileName = `logo_${Date.now()}.svg`;
    const filePath = path.join(folderPath, fileName);

    fs.writeFileSync(filePath, svgContent);
    console.log(`Generated ${filePath}`);

};

generateLogo();