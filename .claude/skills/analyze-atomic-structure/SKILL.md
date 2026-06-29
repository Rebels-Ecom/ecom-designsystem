---
name: analyze-atomic-structure
description: Scans the legacy directory to evaluate UI components and proposes a strict Atomic Design classification map for the V2 architecture.
---

## Purpose

Scan the `legacy/` directory to evaluate all 148 UI components and automatically propose a strictly compliant Atomic Design classification for the V2 architecture.

## Execution Triggers

Execute this analysis BEFORE generating or scaffolding any new React 19 code in the `src/` directory.

## Analysis Logic

Parse the imports of every component in the `legacy/` directory and apply the following strict classification rules:

- **Atoms:** The component has ZERO imports from other internal legacy UI components. It is a pure foundational element.
- **Molecules:** The component imports one or more Atoms. It does NOT import any Molecules or Organisms.
- **Organisms:** The component imports Molecules, imports other Organisms, or contains heavy domain-specific state management.

## Output Requirement

Do not modify any source code during this analysis. Generate a new file named `.claude/docs/ATOMIC_MAP.md` containing the proposed structure for the user to review.

## Output Format

Structure the `ATOMIC_MAP.md` document using the exact format below:

# V2 Folder Structure Proposal

## src/components/atoms

- ComponentName (previously legacy/path/ComponentName, Reason: 0 internal dependencies)

## src/components/molecules

- ComponentName (previously legacy/path/ComponentName, Reason: Imports Atoms)

## src/components/organisms

- ComponentName (previously legacy/path/ComponentName, Reason: Imports Molecules or heavy state)
