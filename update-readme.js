const fs = require('fs');
const ejs = require('ejs');

// Define your variables here
const myVariable = 'something!';

// Read the template file
const template = fs.readFileSync('README-template.md', 'utf8');

// Render the template with variables
const rendered = ejs.render(template, { myVariable });

// Write the updated content to README.md
fs.writeFileSync('README.md', rendered, 'utf8');
