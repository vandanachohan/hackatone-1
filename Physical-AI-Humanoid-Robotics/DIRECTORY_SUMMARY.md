# Physical AI & Humanoid Robotics Textbook - Directory Structure

## Overview
This directory contains a complete Docusaurus-based textbook project focused on Physical AI and Humanoid Robotics.

## Key Components

### Documentation (`physical-ai-robotics-textbook/docs/`)
- **Complete textbook**: 20+ chapters covering all aspects of Physical AI and Humanoid Robotics
- **Chapter files**: 
  - `01-introduction-to-physical-ai.md` - Introduction to Physical AI concepts
  - `ch01-introduction/` to `ch20-conclusion/` - Structured chapter directories
  - `.md` and `.mdx` files with comprehensive textbook content
- **Tutorials**: Practical examples and exercises

### Source Code (`src/`)
- **React components**: Custom UI elements for the textbook
- **Homepage features**: Custom sections and components

### Configuration
- **`docusaurus.config.ts`**: Main configuration for the textbook site
- **`sidebars.ts`**: Navigation structure for the textbook
- **`package.json`**: Dependencies and build scripts

### Assets (`static/`, `blog/`)
- **Images and diagrams**: Technical illustrations and diagrams
- **Blog posts**: Additional content and updates

## How to Run Locally

1. Navigate to the Physical-AI-Humanoid-Robotics directory:
   ```bash
   cd Physical-AI-Humanoid-Robotics
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run start
   ```

4. View the textbook at: http://localhost:3000

## GitHub Pages Deployment

This project is configured for GitHub Pages deployment:
- The site will be available at: https://vandanachohan.github.io/hackatone-1/
- Uses the `gh-pages` branch for deployment
- Automatically builds via GitHub Actions workflow