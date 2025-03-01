# GC Design System Extended Component Library

This project extends the [GC Design System Components](https://github.com/cds-snc/gcds-components) to provide additional React components that follow the Government of Canada design system guidelines.

## Overview

This component library builds upon the official GC Design System to provide:

- Enhanced versions of existing GCDS components
- Additional components not found in the core library
- Composition patterns for complex UI scenarios
- Full TypeScript support and documentation

## Installation

```bash
npm install @your-org/gcds-extended-components
```

## Usage

```jsx
import { EnhancedButton, CustomCard } from '@your-org/gcds-extended-components';

function App() {
  return (
    <div>
      <EnhancedButton variant="primary" size="large">Click Me</EnhancedButton>
      <CustomCard title="Card Title" footerText="Card Footer">
        Card content goes here
      </CustomCard>
    </div>
  );
}
```

## Development

This project uses:
- React + TypeScript
- Vite for development and building
- GC Design System Components as a foundation

### Getting Started

1. Clone this repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`

### Directory Structure

- `/src/components/lib` - The component library source code
- `/src/stories` - Component documentation and examples
- `/src/styles` - Shared styles and theme extensions

## Contributing

Contributions are welcome! Please see our contributing guidelines for details.

## License

[Add appropriate license information]
