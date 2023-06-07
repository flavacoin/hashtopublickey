const fs = require('fs');
const ejs = require('ejs');

// Define your variables here
const myVariable = 'Hello, World!';

// Read the template file
const template = fs.readFileSync('README-template.md', 'utf8');

// Render the template with variables
const rendered = ejs.render(template, { myVariable }, { delimiter: '?' });

// Write the updated content to README.md
fs.writeFileSync('README.md', rendered, 'utf8');

console.log('README.md updated successfully!');
