# GC Design System Extended Component Library

## Recent Improvements

- **Unit Testing**: Added comprehensive test suite for the Table component using Vitest and Testing Library
- **Color Theming**: Fixed color variables to align with the GC Design System color palette
- **Responsive Design**: Enhanced mobile experience with improved horizontal scrolling
- **Documentation**: Updated README with detailed information about the refactoring and testing

## Overview

This project extends the [GC Design System Components](https://github.com/cds-snc/gcds-components) to provide additional React components that follow the Government of Canada design system guidelines.

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

# Table Component Refactoring

## Overview

This project involved a comprehensive refactoring of the Table component to improve maintainability, readability, and organization. The original monolithic component was split into smaller, more focused components following the single responsibility principle.

## Components

The Table component now consists of the following files:

- **Table.tsx**: Main component that orchestrates the sub-components
- **Table.types.ts**: TypeScript interfaces and types
- **TableHeader.tsx**: Header row with sorting and filtering functionality
- **TableBody.tsx**: Body rows with selection functionality
- **TablePagination.tsx**: Pagination controls and logic
- **TableFilters.tsx**: Filter dropdown UI and functionality
- **tableUtils.ts**: Utility functions for sorting, filtering, etc.

## CSS Modularization

The CSS has been modularized into component-specific files:

- **TableBase.css**: Core table structure styles
- **TableHeader.css**: Header-specific styles
- **TableBody.css**: Body and row styles
- **TablePagination.css**: Pagination UI styles
- **TableFilters.css**: Filter component styles
- **TableResponsive.css**: Mobile adaptations

## Stories Organization

The Storybook stories have been organized by feature:

- **TablePagination.stories.tsx**: Pagination examples
- **TableSorting.stories.tsx**: Sorting examples
- **TableFiltering.stories.tsx**: Filtering examples
- **TableSelection.stories.tsx**: Row selection examples
- **TableStyles.stories.tsx**: Visual styling examples

## Benefits

This refactoring provides several benefits:

1. **Improved Maintainability**: Smaller files are easier to understand and maintain
2. **Better Separation of Concerns**: Each component has a single responsibility
3. **Easier Testing**: Smaller components are easier to test in isolation
4. **Better Developer Experience**: Finding code is easier with logical file organization
5. **Improved Documentation**: Each component and story file includes detailed JSDoc comments

## Usage Example

```jsx
import { Table } from './components/lib';

// Basic usage
<Table
  caption="Employee Directory"
  headers={[
    { text: 'Name' },
    { text: 'Position' },
    { text: 'Department' }
  ]}
  rows={[
    [{ text: 'John Doe' }, { text: 'Developer' }, { text: 'Engineering' }],
    [{ text: 'Jane Smith' }, { text: 'Designer' }, { text: 'Design' }]
  ]}
/>

// With features enabled
<Table
  caption="Employee Directory"
  headers={[
    { text: 'Name', sortable: true },
    { text: 'Position', sortable: true },
    { text: 'Department', filterable: true }
  ]}
  rows={[
    [{ text: 'John Doe' }, { text: 'Developer' }, { text: 'Engineering' }],
    [{ text: 'Jane Smith' }, { text: 'Designer' }, { text: 'Design' }]
  ]}
  isStriped={true}
  hasHorizontalBorders={true}
  hasShadow={true}
  selectable={true}
  hasPagination={true}
  isFilterable={true}
  onSort={(columnIndex, direction) => console.log('Sorting', columnIndex, direction)}
  onFilter={(filterValues) => console.log('Filtering', filterValues)}
  onRowSelect={(selectedIndices) => console.log('Selected', selectedIndices)}
  onPageChange={(page) => console.log('Page changed', page)}
/>
```

## Future Work

Future improvements could include:

1. **Unit Tests**: ✅ Completed
2. **Performance Optimization**: Reducing unnecessary re-renders
3. **Accessibility Improvements**: Enhancing keyboard navigation and screen reader support
4. **Additional Features**: Adding new features like row expansion, column resizing, etc.

## Testing

The Table component now includes a comprehensive test suite using Vitest and Testing Library. The tests cover:

- **Table.test.tsx**: Tests for the main Table component, including structure and styling
- **TableHeader.test.tsx**: Tests for the header component, including sortable headers
- **TableBody.test.tsx**: Tests for the body component, including row rendering and selection
- **TablePagination.test.tsx**: Tests for pagination functionality

### Running Tests

To run the tests:

```bash
npm run test
```

### Test Coverage

The tests cover the following aspects:

1. **Component Rendering**: Verifying that components render correctly with the expected structure
2. **Functionality**: Testing interactive features like pagination, sorting, and selection
3. **Styling**: Verifying that CSS classes are applied correctly based on props
4. **Accessibility**: Ensuring that components are accessible to all users

### Future Test Improvements

1. **Increased Coverage**: Adding tests for TableFilters and other components
2. **Integration Tests**: Testing how components work together in complex scenarios
3. **Visual Regression Tests**: Adding tests to ensure visual consistency
