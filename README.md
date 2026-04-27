# PurrSitter

A cat sitting app that connects owners with trusted local sitters. 

## Highlights

**Custom Design System**
Built a three-layer token system from scratch: primitive, semantic, and component tokens. Covers colour, typography, spacing, and border radius. All tokens are defined as CSS custom properties and consumed by components through a strict reference chain.

**React Component Library**
Components are organised by atomic design: atoms, molecules, and organisms. Each component is built in React and TypeScript, styled using component tokens, and kept fully isolated from application logic.

**Storybook Documentation**
Every component is documented in Storybook with stories covering all variants, sizes, and states. 
<!-- Visual regression testing runs through Chromatic. -->

## Tech stack

React, TypeScript, Vite, CSS custom properties, Storybook
<!-- Chromatic -->

## Getting started

```bash
npm install
npm run dev
npm run storybook
```

## Status

In progress. Components are built and documented one at a time.