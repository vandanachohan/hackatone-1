 # README.md

## Physical AI & Humanoid Robotics Textbook

This repository contains the full source code for the Physical AI & Humanoid Robotics textbook developed for the Panaversity Hackathon. The project showcases AI-native book creation using Spec-Kit Plus, Claude Code, Docusaurus, and RAG-driven interactive learning.

### Features

* Written using **Spec-Kit Plus** and **Claude Code**
* Published using **Docusaurus** on GitHub Pages
* Embedded **RAG Chatbot** with OpenAI Agents, FastAPI, Neon Serverless Postgres, and Qdrant Cloud
* User **Signup/Signin via BetterAuth** with background data capture
* **Personalization Button** for chapter-level customization
* **One-Click Urdu Translation** option for bilingual accessibility

### Installation

```bash
# install dependencies
npm install
# or
yarn install
```

### Development

```bash
yarn start
```

### Deployment

```bash
yarn build
yarn deploy
```

### Folder Structure

```
/specs              # Spec-Kit Plus specifications
/docs               # Textbook chapters
/agents             # Claude Code Subagents and Skills
/rag                # FastAPI + Qdrant + Neon backend
/auth               # BetterAuth implementation
```

### Contribution

* Fork the repository and open a pull request for changes.
* Use Spec-Kit Plus for spec changes and Claude Code for content generation.

---
