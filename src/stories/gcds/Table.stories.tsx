import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table, TableHeader } from '../../components/lib/Table';

/**
 * The Table component displays tabular data in a structured format, helping users compare and analyze information efficiently.
 * 
 * Use Tables when you need to present data in rows and columns that have a logical relationship to each other. Tables are particularly
 * useful for displaying:
 * - Comparative data
 * - Data that needs to be sorted or filtered
 * - Information that needs to be scanned quickly
 * - Complex data that benefits from a structured format
 * 
 * ## Properties
 * - `caption`: (Optional) Text to describe the table's purpose, displayed as a caption.
 * - `captionClasses`: (Optional) Additional CSS classes for the caption.
 * - `hasHorizontalBorders`: (Optional) Whether to display horizontal borders between rows. Default is true.
 * - `hasVerticalBorders`: (Optional) Whether to display vertical borders between columns. Default is false.
 * - `hasCellBorders`: (Optional) Whether to display borders around all cells. Default is false.
 * - `isStriped`: (Optional) Whether to display alternating row background colors. Default is false.
 * - `isResponsive`: (Optional) Whether the table is responsive (horizontally scrollable on small screens). Default is true.
 * - `density`: (Optional) Controls the density of the table rows ('default', 'compact', or 'dense'). Default is 'default'.
 * - `lang`: (Optional) The language of the component. Default is 'en'.
 * - `firstCellIsHeader`: (Optional) Whether the first cell in each row is a header. Default is false.
 * - `headers`: (Required) Array of header objects with text/html content for table headers.
 * - `rows`: (Required) Array of arrays containing row data as objects with text/html content.
 * - `hasPagination`: (Optional) Whether to enable pagination. Default is false.
 * - `paginationPosition`: (Optional) Where to display pagination controls ('top', 'bottom', or 'both'). Default is 'bottom'.
 * - `itemsPerPage`: (Optional) Number of items to display per page. Default is 10.
 * - `currentPage`: (Optional) Current active page. Default is 1.
 * - `totalItems`: (Optional) Total number of items across all pages. If not provided, uses rows.length.
 * - `onPageChange`: (Optional) Callback function when page changes.
 * - `selectable`: (Optional) Whether to enable row selection. Default is false.
 * - `selectionType`: (Optional) Type of selection allowed ('single' or 'multiple'). Default is 'multiple'.
 * - `selectedRows`: (Optional) Array of indices of pre-selected rows.
 * - `onRowSelect`: (Optional) Callback function when row selection changes.
 * 
 * ## Accessibility Considerations
 * - Always include a caption to describe what information the table contains
 * - Use table headers (th) for both columns and rows as appropriate
 * - For complex tables with multiple levels of headers, use appropriate scope attributes
 * - Ensure color contrast meets WCAG requirements, particularly when using striped rows
 * - Test tables with screen readers to ensure they're properly navigable
 * - Pagination controls should be keyboard navigable and announce page changes to screen readers
 * - Selection checkboxes should be properly labeled and have appropriate ARIA attributes
 */

const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A reusable Table component following the GCDS design system patterns. Supports pagination, sorting, and responsive behavior.'
      }
    }
  },
  argTypes: {
    caption: { 
      control: 'text',
      description: 'Text that serves as a title or description for the table.'
    },
    captionClasses: { 
      control: 'text',
      description: 'CSS classes to apply to the caption element.'
    },
    hasHorizontalBorders: { 
      control: 'boolean',
      description: 'Whether to display horizontal borders between rows.',
      defaultValue: true
    },
    hasVerticalBorders: { 
      control: 'boolean',
      description: 'Whether to display vertical borders between columns.',
      defaultValue: false
    },
    hasCellBorders: { 
      control: 'boolean',
      description: 'Whether to display borders around all cells.',
      defaultValue: false
    },
    isStriped: { 
      control: 'boolean',
      description: 'Whether to display alternating row background colors.',
      defaultValue: false
    },
    isResponsive: { 
      control: 'boolean',
      description: 'Makes the table horizontally scrollable on small screens.',
      defaultValue: true
    },
    density: { 
      control: 'select',
      options: ['default', 'compact', 'dense'],
      description: 'Controls the density of the table rows.',
      defaultValue: 'default'
    },
    firstCellIsHeader: { 
      control: 'boolean',
      description: 'Specifies whether the first cell in each row is a header.',
      defaultValue: false
    },
    lang: { 
      control: 'radio',
      options: ['en', 'fr'],
      description: 'The language of the component.',
      defaultValue: 'en'
    },
    headers: { 
      control: 'object',
      description: 'Array of header objects with text/html content for table headers.'
    },
    rows: { 
      control: 'object',
      description: 'Array of arrays containing row data as objects with text/html content.'
    },
    hasPagination: {
      control: 'boolean',
      description: 'Whether to enable pagination for the table.',
      defaultValue: false
    },
    paginationPosition: {
      control: 'radio',
      options: ['top', 'bottom', 'both'],
      description: 'Where to display the pagination controls.',
      defaultValue: 'bottom'
    },
    itemsPerPage: {
      control: 'number',
      description: 'Number of rows to display per page.',
      defaultValue: 10
    },
    currentPage: {
      control: 'number',
      description: 'Current active page number.',
      defaultValue: 1
    },
    totalItems: {
      control: 'number',
      description: 'Total number of items across all pages.'
    },
    onPageChange: {
      action: 'pageChanged',
      description: 'Callback function when page changes.'
    },
    selectable: {
      control: 'boolean',
      description: 'Whether to enable row selection.',
      defaultValue: false
    },
    selectionType: {
      control: 'radio',
      options: ['single', 'multiple'],
      description: 'Type of selection allowed.',
      defaultValue: 'multiple'
    },
    selectedRows: {
      control: 'object',
      description: 'Array of indices of pre-selected rows.'
    },
    onRowSelect: {
      action: 'rowsSelected',
      description: 'Callback function when row selection changes.'
    }
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * A basic implementation of the Table component with headers and rows
 */
export const Basic: Story = {
  args: {
    caption: 'Monthly statistics',
    captionClasses: 'gcds-table__caption',
    hasHorizontalBorders: true,
    hasVerticalBorders: false,
    isStriped: false,
    isResponsive: true,
    density: 'default',
    firstCellIsHeader: false,
    lang: 'en',
    headers: [
      { text: 'Month' },
      { text: 'Visitors' },
      { text: 'Page views' }
    ],
    rows: [
      [
        { text: 'January' },
        { text: '12,500' },
        { text: '48,200' }
      ],
      [
        { text: 'February' },
        { text: '14,800' },
        { text: '52,700' }
      ],
      [
        { text: 'March' },
        { text: '16,300' },
        { text: '61,400' }
      ]
    ]
  }
};

/**
 * A table with the first cell in each row as a header
 */
export const RowHeaders: Story = {
  args: {
    caption: 'Service usage statistics',
    hasHorizontalBorders: true,
    hasVerticalBorders: false,
    isStriped: false,
    isResponsive: true,
    density: 'default',
    firstCellIsHeader: true,
    lang: 'en',
    headers: [
      { text: 'Service' },
      { text: 'Users' },
      { text: 'Completion rate' }
    ],
    rows: [
      [
        { text: 'Apply for passport' },
        { text: '45,300' },
        { text: '92%' }
      ],
      [
        { text: 'Apply for citizenship' },
        { text: '32,400' },
        { text: '87%' }
      ],
      [
        { text: 'Update contact information' },
        { text: '28,700' },
        { text: '95%' }
      ]
    ]
  }
};

/**
 * A striped table with alternating row colors
 */
export const Striped: Story = {
  args: {
    caption: 'Annual budget allocation',
    hasHorizontalBorders: true,
    hasVerticalBorders: false,
    isStriped: true,
    isResponsive: true,
    density: 'default',
    firstCellIsHeader: false,
    lang: 'en',
    headers: [
      { text: 'Department' },
      { text: 'Budget' },
      { text: 'Spending' },
      { text: 'Remaining' }
    ],
    rows: [
      [
        { text: 'IT Services' },
        { text: '$1,200,000' },
        { text: '$980,000' },
        { text: '$220,000' }
      ],
      [
        { text: 'Human Resources' },
        { text: '$850,000' },
        { text: '$720,000' },
        { text: '$130,000' }
      ],
      [
        { text: 'Operations' },
        { text: '$2,300,000' },
        { text: '$1,800,000' },
        { text: '$500,000' }
      ],
      [
        { text: 'Marketing' },
        { text: '$750,000' },
        { text: '$695,000' },
        { text: '$55,000' }
      ]
    ]
  }
};

/**
 * A compact table with reduced padding
 */
export const Compact: Story = {
  args: {
    caption: 'Project timeline',
    hasHorizontalBorders: true,
    hasVerticalBorders: false,
    isStriped: false,
    isResponsive: true,
    density: 'compact',
    firstCellIsHeader: false,
    lang: 'en',
    headers: [
      { text: 'Task' },
      { text: 'Start date' },
      { text: 'End date' },
      { text: 'Status' }
    ],
    rows: [
      [
        { text: 'Research' },
        { text: '2023-01-15' },
        { text: '2023-02-28' },
        { text: 'Complete' }
      ],
      [
        { text: 'Design' },
        { text: '2023-03-01' },
        { text: '2023-04-15' },
        { text: 'Complete' }
      ],
      [
        { text: 'Development' },
        { text: '2023-04-16' },
        { text: '2023-06-30' },
        { text: 'In progress' }
      ],
      [
        { text: 'Testing' },
        { text: '2023-07-01' },
        { text: '2023-07-31' },
        { text: 'Not started' }
      ],
      [
        { text: 'Deployment' },
        { text: '2023-08-01' },
        { text: '2023-08-15' },
        { text: 'Not started' }
      ]
    ]
  }
};

/**
 * A dense table with minimum padding and smaller text
 */
export const Dense: Story = {
  args: {
    ...Compact.args,
    caption: 'Detailed project metrics',
    density: 'dense',
    headers: [
      { text: 'Task ID' },
      { text: 'Task Name' },
      { text: 'Assignee' },
      { text: 'Start Date' },
      { text: 'Due Date' },
      { text: 'Status' },
      { text: 'Priority' },
      { text: 'Completion' }
    ],
    rows: [
      [
        { text: 'T-1001' },
        { text: 'Research market trends' },
        { text: 'John Smith' },
        { text: '2023-01-15' },
        { text: '2023-01-30' },
        { text: 'Complete' },
        { text: 'High' },
        { text: '100%' }
      ],
      [
        { text: 'T-1002' },
        { text: 'Competitor analysis' },
        { text: 'Maria Garcia' },
        { text: '2023-01-20' },
        { text: '2023-02-10' },
        { text: 'Complete' },
        { text: 'Medium' },
        { text: '100%' }
      ],
      [
        { text: 'T-1003' },
        { text: 'User interviews' },
        { text: 'David Chen' },
        { text: '2023-02-01' },
        { text: '2023-02-28' },
        { text: 'Complete' },
        { text: 'High' },
        { text: '100%' }
      ],
      [
        { text: 'T-1004' },
        { text: 'Design wireframes' },
        { text: 'Sarah Johnson' },
        { text: '2023-03-01' },
        { text: '2023-03-15' },
        { text: 'Complete' },
        { text: 'High' },
        { text: '100%' }
      ],
      [
        { text: 'T-1005' },
        { text: 'User testing' },
        { text: 'Emily Wilson' },
        { text: '2023-03-16' },
        { text: '2023-03-31' },
        { text: 'In progress' },
        { text: 'Medium' },
        { text: '75%' }
      ]
    ]
  }
};

/**
 * A table with cell borders (grid layout)
 */
export const CellBorders: Story = {
  args: {
    caption: 'Product inventory',
    hasHorizontalBorders: true,
    hasVerticalBorders: true,
    hasCellBorders: true,
    isStriped: false,
    isResponsive: true,
    density: 'default',
    firstCellIsHeader: false,
    lang: 'en',
    headers: [
      { text: 'SKU' },
      { text: 'Product Name' },
      { text: 'Category' },
      { text: 'Price' },
      { text: 'Stock' }
    ],
    rows: [
      [
        { text: 'P-1001' },
        { text: 'Ergonomic Chair' },
        { text: 'Furniture' },
        { text: '$249.99' },
        { text: '34' }
      ],
      [
        { text: 'P-1002' },
        { text: 'Standing Desk' },
        { text: 'Furniture' },
        { text: '$499.99' },
        { text: '15' }
      ],
      [
        { text: 'P-1003' },
        { text: 'Laptop Stand' },
        { text: 'Accessories' },
        { text: '$59.99' },
        { text: '42' }
      ],
      [
        { text: 'P-1004' },
        { text: 'Wireless Mouse' },
        { text: 'Electronics' },
        { text: '$29.99' },
        { text: '78' }
      ]
    ]
  }
};

/**
 * A table with vertical borders between columns
 */
export const VerticalBorders: Story = {
  args: {
    caption: 'Quarterly reports',
    hasHorizontalBorders: true,
    hasVerticalBorders: true,
    hasCellBorders: true,
    isStriped: false,
    isResponsive: true,
    density: 'default',
    firstCellIsHeader: false,
    lang: 'en',

    headers: [
      { text: 'Quarter' },
      { text: 'Revenue' },
      { text: 'Expenses' },
      { text: 'Profit' }
    ],

    rows: [
      [
        { text: 'Q1 2023' },
        { text: '$3.2M' },
        { text: '$2.1M' },
        { text: '$1.1M' }
      ],
      [
        { text: 'Q2 2023' },
        { text: '$3.8M' },
        { text: '$2.3M' },
        { text: '$1.5M' }
      ],
      [
        { text: 'Q3 2023' },
        { text: '$4.1M' },
        { text: '$2.5M' },
        { text: '$1.6M' }
      ],
      [
        { text: 'Q4 2023' },
        { text: '$4.7M' },
        { text: '$2.8M' },
        { text: '$1.9M' }
      ]
    ],

    isDataTable: true
  }
};

/**
 * A table in French language
 */
export const FrenchLanguage: Story = {
  args: {
    caption: 'Statistiques mensuelles',
    hasHorizontalBorders: true,
    hasVerticalBorders: false,
    isStriped: false,
    isResponsive: true,
    density: 'default',
    firstCellIsHeader: false,
    lang: 'fr',
    headers: [
      { text: 'Mois' },
      { text: 'Visiteurs' },
      { text: 'Pages vues' }
    ],
    rows: [
      [
        { text: 'Janvier' },
        { text: '12 500' },
        { text: '48 200' }
      ],
      [
        { text: 'Février' },
        { text: '14 800' },
        { text: '52 700' }
      ],
      [
        { text: 'Mars' },
        { text: '16 300' },
        { text: '61 400' }
      ]
    ]
  }
};

/**
 * A table with pagination
 */
export const WithPagination: Story = {
  args: {
    caption: 'Employee directory',
    hasHorizontalBorders: true,
    hasVerticalBorders: false,
    isStriped: true,
    isResponsive: true,
    density: 'default',
    firstCellIsHeader: false,
    lang: 'en',
    hasPagination: true,
    paginationPosition: 'bottom',
    itemsPerPage: 5,
    currentPage: 1,
    headers: [
      { text: 'Employee ID' },
      { text: 'Name' },
      { text: 'Department' },
      { text: 'Position' },
      { text: 'Location' }
    ],
    rows: [
      [
        { text: '1001' },
        { text: 'John Smith' },
        { text: 'IT' },
        { text: 'Developer' },
        { text: 'Toronto' }
      ],
      [
        { text: '1002' },
        { text: 'Maria Garcia' },
        { text: 'HR' },
        { text: 'Manager' },
        { text: 'Ottawa' }
      ],
      [
        { text: '1003' },
        { text: 'Robert Johnson' },
        { text: 'Finance' },
        { text: 'Analyst' },
        { text: 'Montreal' }
      ],
      [
        { text: '1004' },
        { text: 'Sarah Lee' },
        { text: 'Marketing' },
        { text: 'Specialist' },
        { text: 'Vancouver' }
      ],
      [
        { text: '1005' },
        { text: 'Michael Brown' },
        { text: 'Operations' },
        { text: 'Coordinator' },
        { text: 'Calgary' }
      ],
      [
        { text: '1006' },
        { text: 'Emma Wilson' },
        { text: 'IT' },
        { text: 'Designer' },
        { text: 'Toronto' }
      ],
      [
        { text: '1007' },
        { text: 'David Miller' },
        { text: 'Sales' },
        { text: 'Representative' },
        { text: 'Halifax' }
      ],
      [
        { text: '1008' },
        { text: 'Jennifer Davis' },
        { text: 'Customer Service' },
        { text: 'Specialist' },
        { text: 'Winnipeg' }
      ],
      [
        { text: '1009' },
        { text: 'James Rodriguez' },
        { text: 'Legal' },
        { text: 'Counsel' },
        { text: 'Ottawa' }
      ],
      [
        { text: '1010' },
        { text: 'Sophia Martinez' },
        { text: 'Research' },
        { text: 'Scientist' },
        { text: 'Edmonton' }
      ],
      [
        { text: '1011' },
        { text: 'Thomas Anderson' },
        { text: 'IT' },
        { text: 'Sysadmin' },
        { text: 'Toronto' }
      ],
      [
        { text: '1012' },
        { text: 'Olivia Taylor' },
        { text: 'HR' },
        { text: 'Recruiter' },
        { text: 'Victoria' }
      ],
      [
        { text: '1013' },
        { text: 'William White' },
        { text: 'Finance' },
        { text: 'Controller' },
        { text: 'Quebec City' }
      ],
      [
        { text: '1014' },
        { text: 'Patricia Moore' },
        { text: 'Executive' },
        { text: 'CEO' },
        { text: 'Ottawa' }
      ],
      [
        { text: '1015' },
        { text: 'Richard Harris' },
        { text: 'IT' },
        { text: 'Security Analyst' },
        { text: 'Montreal' }
      ]
    ]
  }
};

/**
 * A table with pagination at both top and bottom
 */
export const PaginationTopAndBottom: Story = {
  args: {
    ...WithPagination.args,
    paginationPosition: 'both',
    caption: 'Document registry'
  }
};

/**
 * A table with selectable rows (multiple selection)
 */
export const SelectableRows: Story = {
  args: {
    caption: 'Task management',
    hasHorizontalBorders: true,
    hasVerticalBorders: false,
    isStriped: true,
    isResponsive: true,
    density: 'default',
    firstCellIsHeader: false,
    lang: 'en',
    selectable: true,
    selectionType: 'multiple',
    selectedRows: [1, 3],
    headers: [
      { text: 'Task ID' },
      { text: 'Description' },
      { text: 'Assignee' },
      { text: 'Due Date' },
      { text: 'Priority' }
    ],
    rows: [
      [
        { text: 'TASK-001' },
        { text: 'Update documentation' },
        { text: 'John Smith' },
        { text: '2023-08-15' },
        { text: 'Medium' }
      ],
      [
        { text: 'TASK-002' },
        { text: 'Fix login bug' },
        { text: 'Maria Garcia' },
        { text: '2023-08-10' },
        { text: 'High' }
      ],
      [
        { text: 'TASK-003' },
        { text: 'Review pull request' },
        { text: 'David Chen' },
        { text: '2023-08-12' },
        { text: 'Low' }
      ],
      [
        { text: 'TASK-004' },
        { text: 'Update dependencies' },
        { text: 'Sarah Johnson' },
        { text: '2023-08-20' },
        { text: 'Medium' }
      ],
      [
        { text: 'TASK-005' },
        { text: 'Deploy to production' },
        { text: 'Robert Wilson' },
        { text: '2023-08-25' },
        { text: 'Critical' }
      ]
    ]
  }
};

/**
 * A table with single row selection
 */
export const SingleRowSelection: Story = {
  args: {
    ...SelectableRows.args,
    caption: 'Select a plan',
    selectionType: 'single',
    selectedRows: [2],
    headers: [
      { text: 'Plan' },
      { text: 'Price' },
      { text: 'Storage' },
      { text: 'Users' },
      { text: 'Support' }
    ],
    rows: [
      [
        { text: 'Basic' },
        { text: '$9.99/mo' },
        { text: '10 GB' },
        { text: '1' },
        { text: 'Email' }
      ],
      [
        { text: 'Pro' },
        { text: '$19.99/mo' },
        { text: '50 GB' },
        { text: '5' },
        { text: 'Email + Chat' }
      ],
      [
        { text: 'Business' },
        { text: '$49.99/mo' },
        { text: '200 GB' },
        { text: '20' },
        { text: 'Priority' }
      ],
      [
        { text: 'Enterprise' },
        { text: '$99.99/mo' },
        { text: 'Unlimited' },
        { text: 'Unlimited' },
        { text: 'Dedicated' }
      ]
    ]
  }
};

/**
 * A table with sortable columns
 */
export const SortableColumns: Story = {
  render: function SortableTable(args) {
    const [sortIndex, setSortIndex] = useState<number | null>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [tableRows, setTableRows] = useState([...args.rows]);
    
    // Create headers with sortable property
    const sortableHeaders: TableHeader[] = args.headers.map((header, index) => ({
      ...header,
      sortable: true,
      sortDirection: sortIndex === index ? sortDirection : undefined
    }));
    
    // Handle sorting
    const handleSort = (columnIndex: number, direction: 'asc' | 'desc') => {
      setSortIndex(columnIndex);
      setSortDirection(direction);
      
      // Actually sort the rows based on the column and direction
      const sortedRows = [...args.rows].sort((a, b) => {
        const valueA = a[columnIndex].text;
        const valueB = b[columnIndex].text;
        
        // Handle numeric values
        if (!isNaN(Number(valueA)) && !isNaN(Number(valueB))) {
          return direction === 'asc' 
            ? Number(valueA) - Number(valueB) 
            : Number(valueB) - Number(valueA);
        }
        
        // Handle string values
        return direction === 'asc' 
          ? String(valueA).localeCompare(String(valueB)) 
          : String(valueB).localeCompare(String(valueA));
      });
      
      setTableRows(sortedRows);
    };
    
    return (
      <Table
        {...args}
        headers={sortableHeaders}
        rows={tableRows}
        onSort={handleSort}
      />
    );
  },
  args: {
    caption: 'Sortable product data',
    hasHorizontalBorders: true,
    isStriped: true,
    density: 'default',
    headers: [
      { text: 'Product ID' },
      { text: 'Name' },
      { text: 'Category' },
      { text: 'Price ($)' },
      { text: 'Stock' }
    ],
    rows: [
      [
        { text: '101' },
        { text: 'Laptop' },
        { text: 'Electronics' },
        { text: '1299.99' },
        { text: '45' }
      ],
      [
        { text: '102' },
        { text: 'Desk Chair' },
        { text: 'Furniture' },
        { text: '249.99' },
        { text: '78' }
      ],
      [
        { text: '103' },
        { text: 'Coffee Maker' },
        { text: 'Appliances' },
        { text: '89.99' },
        { text: '23' }
      ],
      [
        { text: '104' },
        { text: 'Bookshelf' },
        { text: 'Furniture' },
        { text: '129.99' },
        { text: '15' }
      ],
      [
        { text: '105' },
        { text: 'Monitor' },
        { text: 'Electronics' },
        { text: '349.99' },
        { text: '32' }
      ]
    ]
  }
};

/**
 * A table with an empty state
 */
export const EmptyState: Story = {
  args: {
    caption: 'Search results',
    hasHorizontalBorders: true,
    hasVerticalBorders: false,
    isStriped: false,
    isResponsive: true,
    density: 'default',
    lang: 'en',
    headers: [
      { text: 'ID' },
      { text: 'Name' },
      { text: 'Email' },
      { text: 'Role' }
    ],
    rows: [],
    emptyStateMessage: 'No results match your search criteria'
  }
};

/**
 * A data table with multiple features combined
 */
export const DataTable: Story = {
  render: function FullFeaturedDataTable(args) {
    const [sortIndex, setSortIndex] = useState<number | null>(1); // Default sort by Name
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [selectedRows, setSelectedRows] = useState<number[]>([0, 2]);
    const [currentPage, setCurrentPage] = useState(1);
    const [tableRows, setTableRows] = useState([...args.rows]);
    
    // Initial sort on mount
    useEffect(() => {
      handleSort(1, 'asc');
    }, []);
    
    // Create headers with sortable property
    const sortableHeaders: TableHeader[] = args.headers.map((header, index) => ({
      ...header,
      sortable: true,
      sortDirection: sortIndex === index ? sortDirection : undefined
    }));
    
    // Handle sorting
    const handleSort = (columnIndex: number, direction: 'asc' | 'desc') => {
      setSortIndex(columnIndex);
      setSortDirection(direction);
      
      // Actually sort the rows based on the column and direction
      const sortedRows = [...args.rows].sort((a, b) => {
        const valueA = a[columnIndex].text;
        const valueB = b[columnIndex].text;
        
        // Handle numeric values
        if (!isNaN(Number(valueA)) && !isNaN(Number(valueB))) {
          return direction === 'asc' 
            ? Number(valueA) - Number(valueB) 
            : Number(valueB) - Number(valueA);
        }
        
        // Handle date values (detect format YYYY-MM-DD)
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (dateRegex.test(valueA) && dateRegex.test(valueB)) {
          return direction === 'asc'
            ? new Date(valueA).getTime() - new Date(valueB).getTime()
            : new Date(valueB).getTime() - new Date(valueA).getTime();
        }
        
        // Handle string values
        return direction === 'asc' 
          ? String(valueA).localeCompare(String(valueB)) 
          : String(valueB).localeCompare(String(valueA));
      });
      
      setTableRows(sortedRows);
    };
    
    // Handle row selection
    const handleRowSelect = (selectedIndices: number[]) => {
      setSelectedRows(selectedIndices);
      console.log('Selected rows:', selectedIndices);
    };
    
    // Handle page change
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
      console.log('Page changed to:', page);
    };
    
    return (
      <Table
        {...args}
        headers={sortableHeaders}
        rows={tableRows}
        onSort={handleSort}
        selectable={true}
        selectionType="multiple"
        selectedRows={selectedRows}
        onRowSelect={handleRowSelect}
        hasPagination={true}
        currentPage={currentPage}
        itemsPerPage={5}
        onPageChange={handlePageChange}
        isDataTable={true}
      />
    );
  },
  args: {
    caption: 'Complete data table example',
    hasHorizontalBorders: false,
    hasVerticalBorders: false,
    hasCellBorders: true,
    isStriped: true,
    isResponsive: true,
    density: 'compact',
    firstCellIsHeader: false,
    lang: 'en',
    itemsPerPage: 5,
    headers: [
      { text: 'ID' },
      { text: 'Name' },
      { text: 'Department' },
      { text: 'Role' },
      { text: 'Status' },
      { text: 'Location' },
      { text: 'Start Date' }
    ],
    rows: [
      [
        { text: 'EMP-001' },
        { text: 'John Smith' },
        { text: 'IT' },
        { text: 'Senior Developer' },
        { text: 'Active' },
        { text: 'Toronto' },
        { text: '2021-03-15' }
      ],
      [
        { text: 'EMP-002' },
        { text: 'Maria Garcia' },
        { text: 'HR' },
        { text: 'Manager' },
        { text: 'Active' },
        { text: 'Montreal' },
        { text: '2020-06-22' }
      ],
      [
        { text: 'EMP-003' },
        { text: 'Robert Johnson' },
        { text: 'Finance' },
        { text: 'Analyst' },
        { text: 'Active' },
        { text: 'Vancouver' },
        { text: '2022-01-10' }
      ],
      [
        { text: 'EMP-004' },
        { text: 'Sarah Lee' },
        { text: 'Marketing' },
        { text: 'Specialist' },
        { text: 'On Leave' },
        { text: 'Ottawa' },
        { text: '2019-09-05' }
      ],
      [
        { text: 'EMP-005' },
        { text: 'Michael Brown' },
        { text: 'Operations' },
        { text: 'Coordinator' },
        { text: 'Active' },
        { text: 'Calgary' },
        { text: '2022-05-17' }
      ],
      [
        { text: 'EMP-006' },
        { text: 'Emma Wilson' },
        { text: 'IT' },
        { text: 'Designer' },
        { text: 'Active' },
        { text: 'Toronto' },
        { text: '2021-11-30' }
      ],
      [
        { text: 'EMP-007' },
        { text: 'David Miller' },
        { text: 'Sales' },
        { text: 'Representative' },
        { text: 'Active' },
        { text: 'Halifax' },
        { text: '2020-08-12' }
      ],
      [
        { text: 'EMP-008' },
        { text: 'Jennifer Davis' },
        { text: 'Customer Service' },
        { text: 'Lead' },
        { text: 'Inactive' },
        { text: 'Winnipeg' },
        { text: '2018-03-22' }
      ],
      [
        { text: 'EMP-009' },
        { text: 'James Rodriguez' },
        { text: 'Legal' },
        { text: 'Counsel' },
        { text: 'Active' },
        { text: 'Ottawa' },
        { text: '2022-02-14' }
      ],
      [
        { text: 'EMP-010' },
        { text: 'Sophia Martinez' },
        { text: 'Research' },
        { text: 'Scientist' },
        { text: 'Active' },
        { text: 'Edmonton' },
        { text: '2021-07-08' }
      ],
      [
        { text: 'EMP-011' },
        { text: 'Thomas Anderson' },
        { text: 'IT' },
        { text: 'Sysadmin' },
        { text: 'Active' },
        { text: 'Toronto' },
        { text: '2019-11-15' }
      ],
      [
        { text: 'EMP-012' },
        { text: 'Olivia Taylor' },
        { text: 'HR' },
        { text: 'Recruiter' },
        { text: 'Active' },
        { text: 'Victoria' },
        { text: '2022-04-01' }
      ]
    ]
  }
};

/**
 * A table with pagination rendering example
 */
export const RenderPagination: Story = {
  render: function PaginationExample(args) {
    const [currentPage, setCurrentPage] = useState(1);
    
    // Handle page change
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
      console.log('Page changed to:', page);
    };
    
    const totalPages = 7; // Example total pages
    
    return (
      <div>
        <h3>Table with Custom Pagination Controls</h3>
        <Table
          {...args}
          hasPagination={true}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        
        <h3 style={{ marginTop: '2rem' }}>Standalone Pagination Example</h3>
        <div className="gcds-table__pagination">
          <div className="gcds-pagination">
            <ul className="gcds-pagination__list">
              {/* Previous button */}
              <li className="gcds-pagination__item">
                <button
                  className="gcds-pagination__button gcds-pagination__button--prev"
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  aria-label="Go to previous page"
                >
                  Previous
                </button>
              </li>
              
              {/* Page number buttons */}
              {[1, 2, 3, '...', 7].map((page, index) => {
                if (page === '...') {
                  return (
                    <li key={`ellipsis-${index}`} className="gcds-pagination__item">
                      <span className="gcds-pagination__ellipsis">...</span>
                    </li>
                  );
                }
                
                const pageNum = page as number;
                return (
                  <li key={`page-${page}`} className="gcds-pagination__item">
                    <button
                      className={`gcds-pagination__button ${currentPage === pageNum ? 'gcds-pagination__button--current' : ''}`}
                      onClick={() => handlePageChange(pageNum)}
                      aria-label={`Go to page ${pageNum}`}
                      aria-current={currentPage === pageNum ? 'page' : undefined}
                    >
                      {pageNum}
                    </button>
                  </li>
                );
              })}
              
              {/* Next button */}
              <li className="gcds-pagination__item">
                <button
                  className="gcds-pagination__button gcds-pagination__button--next"
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  aria-label="Go to next page"
                >
                  Next
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  },
  args: {
    caption: 'Employee directory with custom pagination',
    hasHorizontalBorders: true,
    isStriped: true,
    density: 'default',
    headers: [
      { text: 'Employee ID' },
      { text: 'Name' },
      { text: 'Department' },
      { text: 'Position' }
    ],
    rows: [
      [
        { text: '1001' },
        { text: 'John Smith' },
        { text: 'IT' },
        { text: 'Developer' }
      ],
      [
        { text: '1002' },
        { text: 'Maria Garcia' },
        { text: 'HR' },
        { text: 'Manager' }
      ],
      [
        { text: '1003' },
        { text: 'Robert Johnson' },
        { text: 'Finance' },
        { text: 'Analyst' }
      ],
      [
        { text: '1004' },
        { text: 'Sarah Lee' },
        { text: 'Marketing' },
        { text: 'Specialist' }
      ],
      [
        { text: '1005' },
        { text: 'Michael Brown' },
        { text: 'Operations' },
        { text: 'Coordinator' }
      ]
    ],
    itemsPerPage: 2
  }
};

/**
 * A table that clearly demonstrates only the cell borders feature
 */
export const CellBordersOnly: Story = {
  args: {
    caption: 'Cell Borders Demonstration',
    hasHorizontalBorders: false,
    hasVerticalBorders: false,
    hasCellBorders: true,
    isStriped: false,
    isResponsive: true,
    density: 'default',
    firstCellIsHeader: false,
    lang: 'en',
    headers: [
      { text: 'Column 1' },
      { text: 'Column 2' },
      { text: 'Column 3' },
      { text: 'Column 4' }
    ],
    rows: [
      [
        { text: 'Row 1, Cell 1' },
        { text: 'Row 1, Cell 2' },
        { text: 'Row 1, Cell 3' },
        { text: 'Row 1, Cell 4' }
      ],
      [
        { text: 'Row 2, Cell 1' },
        { text: 'Row 2, Cell 2' },
        { text: 'Row 2, Cell 3' },
        { text: 'Row 2, Cell 4' }
      ],
      [
        { text: 'Row 3, Cell 1' },
        { text: 'Row 3, Cell 2' },
        { text: 'Row 3, Cell 3' },
        { text: 'Row 3, Cell 4' }
      ]
    ]
  }
}; 