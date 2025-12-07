# Implementation Plan for MDX Generation

## Project
Physical AI & Humanoid Robotics Textbook  
Using Docusaurus + Spec-Kit Plus + Claude Code + RAG system

## Objectives
1. Generate MDX chapters automatically from chapter specifications.
2. Maintain a clean, reproducible pipeline for book generation.
3. Integrate Subagents and Skills for reusable content generation.
4. Ensure MDX files meet Docusaurus formatting and folder structure.

## Inputs
- /specs/001-generate-mdx/chapters/*.spec
- /specs/book.json (metadata)
- /agents/skills/*
- /agents/subagents/*

## Outputs
- /docs/book/*.mdx
- Auto-generated sidebar entries
- Appendices & glossary MDX files

## Steps
1. Parse chapter specs.
2. Validate structure (title, outcomes, sections).
3. Generate MDX for each chapter.
4. Apply templates (frontmatter, headings, structure, formatting).
5. Write MDX into `/docs/book`.
6. Generate `sidebar.js` entries.
7. Log generation summary.

## Acceptance Criteria
- All MDX files generate without manual editing.
- `sp.generate` runs without errors.
- RAG pipeline can ingest generated MDX.
