# Physical AI & Humanoid Robotics Textbook Deployment Guide

This repository contains a Docusaurus textbook on Physical AI & Humanoid Robotics, along with a backend API server.

## Project Structure
- Root directory: Contains the backend Node.js server
- `Physical-AI-Humanoid-Robotics`: Contains the Docusaurus frontend

## Running Locally

### Backend Server
```bash
npm install
npm run start
```

### Frontend (Docusaurus)
```bash
cd Physical-AI-Humanoid-Robotics
npm install
npm run start
```

## Deployment

### GitHub Pages
The site is configured for GitHub Pages deployment via a GitHub Action workflow.

### Vercel
The site is configured for Vercel deployment with the following configuration:

1. The `vercel.json` file tells Vercel to build from the `Physical-AI-Humanoid-Robotics` directory
2. Before building, the `update-docusaurus-config.js` script modifies the base URL as needed for Vercel deployment
3. The site will be accessible at your Vercel URL with all book content properly displayed

## API Endpoints
- Backend API: `http://localhost:3000/api`
- Textbook API: `http://localhost:3000/api/textbook-content`
- Search API: `http://localhost:3000/api/search`

## Documentation
- Docusaurus documentation: https://docusaurus.io/
- Physical AI & Robotics textbook content in the `Physical-AI-Humanoid-Robotics` directory