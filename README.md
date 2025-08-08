# React + Vite + Tailwind + shadcn/ui Template

A modern frontend template with React, Vite, Tailwind CSS, and shadcn/ui components pre-configured.

## Features

- ⚡️ **Vite** - Lightning fast HMR and optimized builds
- ⚛️ **React 18** - Latest React with TypeScript
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧩 **shadcn/ui** - Beautiful, accessible components
- 📦 **TypeScript** - Type safety and better DX
- 🎯 **Path Aliases** - Clean imports with `@/` prefix

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   └── ui/           # shadcn/ui components
├── lib/
│   └── utils.ts      # Utility functions
├── App.tsx           # Main app component
├── main.tsx          # Application entry point
└── index.css         # Global styles with Tailwind
```

## Adding New shadcn/ui Components

You can manually add shadcn/ui components by:

1. Installing required Radix UI primitives
2. Creating the component in `src/components/ui/`
3. Following the patterns from existing components

Example components included:
- Button
- Card
- Tabs

## Customization

### Theme

Edit the CSS variables in `src/index.css` to customize colors:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... other variables */
}
```

### Tailwind Config

Modify `tailwind.config.js` to add custom colors, fonts, or plugins.

## Tech Stack

- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Radix UI](https://radix-ui.com)
- [TypeScript](https://www.typescriptlang.org)

## License

MIT