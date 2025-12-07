#!/usr/bin/env node

// This script modifies the Docusaurus config before building for Vercel
const fs = require('fs');
const path = require('path');

// Read the current docusaurus config
const configPath = path.join(__dirname, 'Physical-AI-Humanoid-Robotics', 'docusaurus.config.ts');
let configContent = fs.readFileSync(configPath, 'utf8');

// Replace the baseUrl for Vercel deployment (from /hackatone-1/ to /)
configContent = configContent.replace(/baseUrl: '\/hackatone-1\/',/, "baseUrl: '/',");

// Write the modified config back
fs.writeFileSync(configPath, configContent);

console.log('Updated docusaurus.config.ts for Vercel deployment (changed baseUrl to \'/\')');