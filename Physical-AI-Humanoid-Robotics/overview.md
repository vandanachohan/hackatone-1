# overview.md

## Project Overview: Physical AI & Humanoid Robotics Textbook

This document provides a high-level overview of the entire book project, its purpose, technology stack, workflows, and the AI-driven pipeline that powers its creation, personalization, and interactive learning experience.

---

# 1. Vision

The Physical AI & Humanoid Robotics textbook is designed as an AI-native, fully automated educational system. It integrates AI agents, Spec-Kit Plus scaffolding, Claude Code intelligence, and a RAG-enabled chatbot to deliver an immersive, personalized STEM learning experience.

This book will serve as a foundation for teaching robotics, AI, embodied intelligence, and full-stack humanoid engineering.

---

# 2. Core Goals

* Teach Physical AI and humanoid robotics from first principles to advanced systems
* Create a fully generative textbook powered by Spec-Kit Plus and Claude Code
* Provide interactive learning with RAG-backed context-aware chatbot
* Enable user-specific personalization and Urdu translation
* Showcase best practices for AI-native technical publishing

---

# 3. Key Components of the System

## 3.1 Textbook Content Layer

* Fully written using Spec-Kit Plus specs
* Automatically generated MDX chapters via Claude Code
* 30+ chapters across theory, engineering, AI, and hands-on labs

## 3.2 RAG Chatbot Layer

* Powered by FastAPI
* Vector search using Qdrant Cloud
* Metadata and conversation logs stored in Neon Serverless Postgres
* Supports:

  * Whole book Q&A
  * Per-chapter Q&A
  * Selected-text Q&A

## 3.3 Personalization Engine

* User background collected via BetterAuth signup
* Chapter-level “Personalize Content” button
* Claude subagents generate adaptive content:

  * Beginner
  * Intermediate
  * Advanced
  * Custom (based on user profile)

## 3.4 Urdu Translation Engine

* One-click Urdu translation
* Accurate technical localization via Claude Urdu Subagent

---

# 4. Technology Stack Summary

## 4.1 Frontend

* Docusaurus (React-based)
* MDX chapters
* Tailwind CSS (optional)
* Custom components for:

  * Personalization
  * Urdu translation
  * Chatbot iframe/widget

## 4.2 Backend

* FastAPI backend for RAG
* Neon Postgres for metadata
* Qdrant Cloud for vector database
* OpenAI Agents or ChatKit SDK for inference

## 4.3 AI Agents (Claude)

* Subagents for:

  * Content generation
  * Explanation and accuracy verification
  * Lab and exercise creation
  * RAG chunk optimization
  * Personalization
  * Urdu translation

---

# 5. Book Structure

The book contains the following major sections:

1. Foundations of Physical AI
2. Humanoid Robotics Engineering
3. AI for Embodied Systems
4. Practical Robotics Development
5. Advanced Robotics AI
6. Full Stack Cloud & Deployment
7. Labs and Capstone Projects

30 full chapters + glossary + index.

---

# 6. Project Workflow

1. **Define Specs** using Spec-Kit Plus
2. **Generate MDX chapters** using Claude Code
3. **Enhance with Subagents** (accuracy, visuals, labs, glossary)
4. **Process RAG chunks** for embeddings and metadata
5. **Deploy to Docusaurus** using GitHub Actions
6. **Integrate Chatbot** (FastAPI + Qdrant + Neon)
7. **Add Personalization & Urdu Translation** features
8. **Finalize and Publish** to GitHub Pages

---

# 7. Deliverables

* Complete textbook with 30+ chapters
* Fully deployed Docusaurus book
* RAG chatbot embedded in UI
* Personalization and Urdu translation buttons
* Specs, agents, and full codebase included

---

# 8. Target Audience

* Robotics students
* AI engineers
* Hardware developers
* RAG and AI-native systems engineers
* Educators and trainers
* High-level learners in STEM domains

---

# 9. Version

v1.0 — Project overview created.
