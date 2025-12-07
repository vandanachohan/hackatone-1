const fs = require('fs');
const path = require('path');

// Path to the original config file
const configPath = path.join(__dirname, 'Physical-AI-Humanoid-Robotics', 'docusaurus.config.ts');

// Read the original config
let configContent = fs.readFileSync(configPath, 'utf8');

// Replace the baseUrl for Vercel deployment (from /hackatone-1/ to /)
configContent = configContent.replace(/baseUrl: '\/hackatone-1\/',/, "baseUrl: '/',");

// Optionally update the URL to reflect the Vercel deployment URL
configContent = configContent.replace(
  /url: 'https:\/\/vandanachohan\.github\.io',/,
  "url: 'https://hackatone-1-agb0wfxvq-vandanachans-projects.vercel.app',"
);

// Write the updated config back
fs.writeFileSync(configPath, configContent);

console.log('Updated docusaurus.config.ts for Vercel deployment');