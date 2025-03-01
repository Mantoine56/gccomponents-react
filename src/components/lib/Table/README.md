# Table Component

The Table component is a feature-rich, customizable table implementation with support for sorting, filtering, pagination, and row selection.

## Component Structure

The Table component has been refactored to follow a modular architecture with the following components:

1. **Table.tsx**: Main component that orchestrates all sub-components
2. **Table.types.ts**: TypeScript interfaces and types for the Table component
3. **TableHeader.tsx**: Header row rendering with sorting and filtering capabilities
4. **TableBody.tsx**: Table body rendering with row selection and empty state handling
5. **TablePagination.tsx**: Pagination controls for navigating between pages
6. **TableFilters.tsx**: Filter dropdown UI for column filtering
7. **tableUtils.ts**: Utility functions for filtering, pagination, and other operations

## CSS Structure

The CSS has been modularized into the following files:

1. **TableBase.css**: Core table styles (wrapper, table, caption, borders, empty states)
2. **TableHeader.css**: Header styles (sortable headers, column themes)
3. **TableBody.css**: Row and cell styles (selection, stripes, hover effects)
4. **TablePagination.css**: Pagination controls styling
5. **TableFilters.css**: Filter dropdown and UI components
6. **TableResponsive.css**: Responsive behavior for different screen sizes

This modularization improves maintainability and makes it easier to understand the styling structure of each component.

## Usage

```tsx
import { Table } from '@/components/lib';
import type { TableHeader, TableCell } from '@/components/lib';

// Define table headers
const headers: TableHeader[] = [
  { text: 'Name', sortable: true, sortDirection: 'none' },
  { text: 'Email', sortable: true, sortDirection: 'none' },
  { text: 'Role', sortable: true, sortDirection: 'none' },
];

// Define table rows
const rows: TableCell[][] = [
  [{ text: 'John Doe' }, { text: 'john@example.com' }, { text: 'Admin' }],
  [{ text: 'Jane Smith' }, { text: 'jane@example.com' }, { text: 'User' }],
  [{ text: 'Bob Johnson' }, { text: 'bob@example.com' }, { text: 'Editor' }],
];

// Render the table
const MyTable = () => (
  <Table
    caption="User Information"
    headers={headers}
    rows={rows}
    hasPagination={true}
    itemsPerPage={10}
    isFilterable={true}
    selectable={true}
  />
);
```

## Features

- **Sorting**: Click on sortable column headers to sort the table
- **Filtering**: Filter table data by column values
- **Pagination**: Navigate through large datasets with pagination controls
- **Row Selection**: Select single or multiple rows
- **Responsive Design**: Adapts to different screen sizes
- **Customizable Styling**: Various props to customize the table appearance

## Props

See `Table.types.ts` for a complete list of props and their documentation.

## Refactoring Notes

This component was refactored from a monolithic implementation to a modular architecture to improve:

- **Maintainability**: Smaller files are easier to understand and maintain
- **Separation of concerns**: Each component has a single responsibility
- **Testability**: Smaller components are easier to test in isolation
- **Developer experience**: Finding code is easier with logical file organization

The refactoring was done in phases:
1. TypeScript interface extraction
2. Sub-component extraction
3. Utility function extraction

Future work includes:
1. CSS modularization
2. Stories refactoring
3. Unit test implementation 