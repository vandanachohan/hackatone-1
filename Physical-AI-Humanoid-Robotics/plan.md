# plan.md

## Implementation Plan for Physical AI & Humanoid Robotics Textbook

This plan file is required by Spec-Kit Plus to generate MDX chapters and orchestrate the build pipeline. It defines the tasks, specs, chapter mappings, and generation flow.

---

## 1. Project Title

Physical AI & Humanoid Robotics Textbook

---

## 2. Chapters to Generate

* 001-introduction
* 002-history-of-robotics
* 003-embodied-intelligence
* 004-sensors-and-actuators
* 005-humanoid-architecture
* 006-locomotion
* 007-manipulation
* 008-perception
* 009-human-robot-interaction
* 010-machine-learning
* 011-reinforcement-learning
* 012-vla-models
* 013-planning-and-control
* 014-ros2-engineering
* 015-simulation
* 016-hardware-prototyping
* 017-energy-systems
* 018-safe-control
* 019-multi-modal-agents
* 020-optimization
* 021-rag-robotics
* 022-cloud-robotics
* 023-teleoperation
* 024-deployment-pipelines
* 025-ethics
* 026-lab-1
* 027-lab-2
* 028-lab-3
* 029-lab-4
* 030-capstone

---

## 3. Input Specs Path

All chapter specs must exist in:

```
/specs/001-generate-mdx/chapters
```

Each spec file must follow the naming convention:

```
NNN-chapter-name.spec
```

---

## 4. Output Path

The generated MDX files will be stored in:

```
/docs/
```

---

## 5. Agents & Skills

* subagents defined in `/agents/subagents`
* skills defined in `/agents/skills`
* reusable templates stored in `/specs/templates`

---

## 6. Generation Workflow

1. Read chapter spec
2. Use Claude Code subagents
3. Expand sections into full MDX
4. Generate diagrams descriptions
5. Add quizzes and assignments
6. Save output to `/docs`
7. Run personalization and Urdu variants

---

## 7. Success Criteria

* All MDX chapters generate without errors
* RAG-ready structure created
* No missing spec files

---

## 8. Version

v1.0 — Initial plan for Spec-Kit Plus

