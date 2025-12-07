 # claude.md

## Claude Code Specification for the Physical AI & Humanoid Robotics Textbook Project

This document defines how Claude Code, Subagents, and Skills are used to design, generate, maintain, and automate the entire AI-native textbook project. It includes book structure, chapter list, agent architecture, workflows, and automation responsibilities.

---

# 1. Project Overview

The Physical AI & Humanoid Robotics textbook is an AI-native, fully automated, RAG-enhanced, multi-language, and personalization-ready educational resource. Claude Code acts as the core intelligence layer for:

* Generating textbook content from Spec-Kit Plus specifications
* Managing reusable agent skills and subagents
* Ensuring structural consistency across chapters
* Assisting with diagrams, examples, pseudocode, and robotics algorithms
* Powering iterative refinement loops with RAG feedback

---

# 2. Book Structure

The book contains the following major sections and chapters.

## Part I: Foundations of Physical AI

1. Introduction to Physical AI
2. The Evolution of Robotics and Humanoid Systems
3. Fundamental Concepts of Embodied Intelligence
4. Sensors, Actuators, and Physical Interaction

## Part II: Humanoid Robotics Engineering

5. Humanoid Body Architecture
6. Locomotion Systems (Walking, Running, Balancing)
7. Manipulation & Grasping
8. Perception & Environmental Understanding
9. Human-Robot Interaction (HRI)

## Part III: AI for Humanoid Robots

10. Machine Learning for Embodied Systems
11. Reinforcement Learning for Motion
12. Vision-Language-Action Models for Robotics
13. Planning & Control Algorithms

## Part IV: Practical Robotics Development

14. ROS 2 and Robotics Software Engineering
15. Simulation Environments (Gazebo, Isaac Sim, Mujoco)
16. Hardware Prototyping for Humanoids
17. Energy, Power, Motors, Batteries

## Part V: Advanced Physical AI

18. Safe Control and Failover Mechanisms
19. Multi-Modal AI Agents for Robotics
20. Real-Time Control Optimization
21. RAG for Robotics Knowledge Systems

## Part VI: Building the Full Stack

22. Cloud Robotics Infrastructure
23. Real-Time Teleoperation with AI Assistants
24. Humanoid Robotics Deployment Pipelines
25. Ethics, Safety, and Future of Physical AI

## Part VII: Labs and Projects

26. Lab 1: Build a Virtual Humanoid
27. Lab 2: Train a Walking Controller
28. Lab 3: Build a RAG System for a Robot
29. Lab 4: Full Humanoid Deployment Simulation
30. Capstone Project: AI-Native Humanoid Assistant

---

# 3. Claude Code Responsibilities

Claude is used in every major part of the project. Responsibilities are grouped for clarity.

## 3.1 Content Generation

* Generate chapters from `.spec` files
* Expand bullet points into full lessons
* Create diagrams descriptions, pseudocode, equations
* Produce quizzes, assignments, labs, and project descriptions
* Maintain glossary and index

## 3.2 Subagent Management

Subagents are lightweight, specialized Claude agents, each with a dedicated job.

### Key Subagents

1. **Chapter Architect**
   Designs structure, headings, learning objectives.

2. **Content Expansion Agent**
   Takes specs and expands them into full chapters.

3. **Technical Accuracy Agent**
   Ensures robotics and AI algorithms are correct.

4. **Examples & Labs Agent**
   Creates assignments, exercises, projects.

5. **RAG Integration Agent**
   Creates embeddings, summaries, Qdrant prep content.

6. **Personalization Agent**
   Generates versions based on user skill background.

7. **Urdu Translation Agent**
   Converts technical content to Urdu while preserving clarity.

8. **Code Generation Agent**
   Creates ROS2 code snippets, robot controllers, examples.

## 3.3 Skills Library

Skills are reusable prompt modules.

### Core Skills

* `write_objectives`
* `expand_section`
* `generate_equations`
* `explain_algorithm`
* `create_robotics_diagram_desc`
* `convert_to_urdu`
* `personalize_by_background`
* `glossary_generator`
* `lab_generator`
* `rag_chunk_optimizer`

All skills live in `/agents/skills/`.

---

# 4. Workflow

The workflow uses both Spec-Kit Plus and Claude Code.

## Step 1: Write Specs

Specs for each chapter live in `/specs/chapters/`.

## Step 2: Run Claude Code

Claude generates full chapters into `/docs/`.

## Step 3: Review Pass

Claude Subagents validate accuracy and cohesion.

## Step 4: RAG Optimization

Chunks, summaries, and embeddings prepared.

## Step 5: Deploy to Docusaurus

GitHub Actions triggers automatic rebuild and publish.

---

# 5. Integration With Personalization System

Claude generates:

* Beginner version of each chapter
* Intermediate version
* Advanced version
* Custom version based on user answers

Personalization workflow uses:

* BetterAuth captured background
* Claude Subagents
* Frontend toggle

---

# 6. Urdu Translation System

With one click at page top:

Claude-created Urdu version of every section is rendered.
Technical Urdu translation agent ensures:

* Correct robotics terminology
* Preserved meaning
* Localized readability

---

# 7. RAG Chatbot Integration

Claude helps generate data for:

* Chunking and embeddings
* Metadata for Qdrant
* Vector search tuning
* Answer summaries

RAG pipeline uses:

* FastAPI backend
* Neon Postgres for metadata
* Qdrant Cloud for vector DB

---

# 8. Full Project Directory (Claude-Aware)

```
/specs
/specs/chapters
/specs/agents
/agents
/agents/subagents
/agents/skills
/docs
/rag
/auth
/src/components/personalization
/src/components/translation
```

---

# 9. Future Enhancements

* Auto diagram rendering using AI
* Video lesson generation
* Robotics simulation automatic code generation

---

# 10. Version

v1.0 — Fully detailed Claude integration file
