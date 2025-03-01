/**
 * Table Component Stories
 * 
 * NOTE: This file contains the original stories for the Table component.
 * For more organized and feature-specific examples, please see the modular stories in:
 * - src/stories/gcds/table/TablePagination.stories.tsx
 * - src/stories/gcds/table/TableSorting.stories.tsx
 * - src/stories/gcds/table/TableFiltering.stories.tsx
 * - src/stories/gcds/table/TableSelection.stories.tsx
 * - src/stories/gcds/table/TableStyles.stories.tsx
 * 
 * This file is kept for backward compatibility and will be deprecated in the future.
 */

import React, { useState, useEffect } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Table, TableHeader } from '../../components/lib/Table';

const meta = {
  title: 'Components/Table (Deprecated)',
  component: Table,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'DEPRECATED: Please use the more organized stories in the Table folder instead. This file contains the original Table component stories and will be removed in a future update.'
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
      description: 'Additional CSS classes for the caption.'
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
    },
    hasShadow: {
      control: 'boolean',
      description: 'Whether to add a shadow effect to the table for better depth perception.',
      defaultValue: false
    },
    hasStripedColumns: {
      control: 'boolean',
      description: 'Whether to display alternating column background colors.',
      defaultValue: false
    },
    color: {
      control: 'select',
      options: ['blue'],
      description: 'Color theme for the table.',
    },
    hasHoverEffect: {
      control: 'boolean',
      description: 'Whether rows change background color on hover.',
      defaultValue: false
    },
    isCardStyle: {
      control: 'boolean',
      description: 'Whether to style the table as a card with additional padding and borders.',
      defaultValue: false
    },
    stackOnMobile: {
      control: 'boolean',
      description: 'Whether the table transforms to a stacked layout on mobile devices.',
      defaultValue: false
    },
    isFilterable: {
      control: 'boolean',
      description: 'Whether to enable column filtering.',
      defaultValue: false
    },
    filterPlaceholder: {
      control: 'text',
      description: 'Placeholder text for filter inputs.',
    },
    onFilter: {
      action: 'filterChanged',
      description: 'Callback function when filter values change.',
    },
    filterCaseSensitive: {
      control: 'boolean',
      description: 'Whether filter matching should be case sensitive.',
      defaultValue: false
    },
    filterableHeaders: {
      control: 'object',
      description: 'Array of column indices that should have filters.',
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * A basic implementation of the Table component with headers and rows.
 * This serves as the foundation for all other table variations.
 */
export const Basic: Story = {
  args: {
    caption: 'Monthly Website Statistics',
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
      { text: 'Page Views' },
      { text: 'Conversion Rate' }
    ],
    rows: [
      [
        { text: 'January' },
        { text: '12,500' },
        { text: '48,200' },
        { text: '3.2%' }
      ],
      [
        { text: 'February' },
        { text: '14,800' },
        { text: '52,700' },
        { text: '3.5%' }
      ],
      [
        { text: 'March' },
        { text: '16,300' },
        { text: '61,400' },
        { text: '3.8%' }
      ]
    ]
  }
};

/**
 * A table with the first cell in each row as a header.
 * This pattern is useful for data that has a clear row-based organization.
 */
export const RowHeaders: Story = {
  args: {
    caption: 'Service Usage Statistics',
    hasHorizontalBorders: true,
    hasVerticalBorders: false,
    isStriped: false,
    isResponsive: true,
    density: 'default',
    firstCellIsHeader: true,
    hasShadow: true,
    hasHoverEffect: true,
    lang: 'en',
    headers: [
      { text: 'Service' },
      { text: 'Users' },
      { text: 'Sessions' },
      { text: 'Completion Rate' }
    ],
    rows: [
      [
        { text: 'Apply for passport' },
        { text: '45,300' },
        { text: '52,420' },
        { text: '92%' }
      ],
      [
        { text: 'Apply for citizenship' },
        { text: '32,400' },
        { text: '40,120' },
        { text: '87%' }
      ],
      [
        { text: 'Update contact information' },
        { text: '28,700' },
        { text: '31,050' },
        { text: '95%' }
      ]
    ]
  }
};

/**
 * A striped table with alternating row colors for improved readability.
 * Particularly useful for tables with many rows.
 */
export const Striped: Story = {
  args: {
    caption: 'Annual Budget Allocation',
    hasHorizontalBorders: true,
    hasVerticalBorders: false,
    isStriped: true,
    isResponsive: true,
    density: 'default',
    firstCellIsHeader: false,
    hasShadow: true,
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
 * A compact table with reduced padding for dense data presentation.
 * Useful when space is limited or when displaying large datasets.
 */
export const Compact: Story = {
  args: {
    caption: 'Project Timeline',
    hasHorizontalBorders: true,
    hasVerticalBorders: false,
    isStriped: true,
    isResponsive: true,
    density: 'compact',
    firstCellIsHeader: false,
    color: 'blue',
    hasHoverEffect: true,
    lang: 'en',
    headers: [
      { text: 'Task' },
      { text: 'Assignee' },
      { text: 'Start Date' },
      { text: 'End Date' },
      { text: 'Status' }
    ],
    rows: [
      [
        { text: 'Research' },
        { text: 'Maria Chen' },
        { text: '2023-01-15' },
        { text: '2023-02-28' },
        { text: 'Complete' }
      ],
      [
        { text: 'Design' },
        { text: 'John Smith' },
        { text: '2023-03-01' },
        { text: '2023-04-15' },
        { text: 'Complete' }
      ],
      [
        { text: 'Development' },
        { text: 'Alex Johnson' },
        { text: '2023-04-16' },
        { text: '2023-06-30' },
        { text: 'In progress' }
      ],
      [
        { text: 'Testing' },
        { text: 'Sarah Lee' },
        { text: '2023-07-01' },
        { text: '2023-07-31' },
        { text: 'Not started' }
      ],
      [
        { text: 'Deployment' },
        { text: 'David Wilson' },
        { text: '2023-08-01' },
        { text: '2023-08-15' },
        { text: 'Not started' }
      ]
    ]
  }
};

/**
 * A dense table with minimum padding and smaller text for maximum data density.
 * Best used for technical or administrative interfaces with experienced users.
 */
export const Dense: Story = {
  args: {
    caption: 'Detailed Project Metrics',
    hasHorizontalBorders: true,
    hasVerticalBorders: false,
    isStriped: true,
    hasShadow: true,
    isResponsive: true,
    density: 'dense',
    firstCellIsHeader: false,
    color: 'blue',
    hasHoverEffect: true,
    lang: 'en',
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
 * A table with cell borders (grid layout) for clear cell separation.
 * This style works well for data that needs clear visual boundaries between cells.
 */
export const CellBorders: Story = {
  args: {
    caption: 'Product Inventory',
    hasHorizontalBorders: true,
    hasVerticalBorders: true,
    hasCellBorders: true,
    isStriped: false,
    isResponsive: true,
    hasShadow: true,
    density: 'default',
    firstCellIsHeader: false,
    hasHoverEffect: true,
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
 * A table with vertical borders between columns for improved column separation.
 * Combined with cell borders for a complete grid view of data.
 */
export const VerticalBorders: Story = {
  args: {
    caption: 'Quarterly Financial Reports',
    hasHorizontalBorders: true,
    hasVerticalBorders: true,
    hasCellBorders: true,
    isStriped: true,
    isResponsive: true,
    hasShadow: true,
    density: 'compact',
    firstCellIsHeader: false,
    color: 'blue',
    hasHoverEffect: true,
    lang: 'en',
    headers: [
      { text: 'Quarter' },
      { text: 'Revenue' },
      { text: 'Expenses' },
      { text: 'Profit' },
      { text: 'Growth' }
    ],
    rows: [
      [
        { text: 'Q1 2023' },
        { text: '$3.2M' },
        { text: '$2.1M' },
        { text: '$1.1M' },
        { text: '+5.2%' }
      ],
      [
        { text: 'Q2 2023' },
        { text: '$3.8M' },
        { text: '$2.3M' },
        { text: '$1.5M' },
        { text: '+8.1%' }
      ],
      [
        { text: 'Q3 2023' },
        { text: '$4.1M' },
        { text: '$2.5M' },
        { text: '$1.6M' },
        { text: '+6.7%' }
      ],
      [
        { text: 'Q4 2023' },
        { text: '$4.7M' },
        { text: '$2.8M' },
        { text: '$1.9M' },
        { text: '+9.4%' }
      ]
    ],
    isDataTable: true
  }
};

/**
 * A table with French language support for bilingual interfaces.
 * Demonstrates language localization for all table elements.
 */
export const FrenchLanguage: Story = {
  args: {
    caption: 'Statistiques mensuelles',
    hasHorizontalBorders: true,
    hasVerticalBorders: false,
    isStriped: true,
    isResponsive: true,
    hasShadow: true,
    isCardStyle: true,
    density: 'default',
    color: 'blue',
    firstCellIsHeader: false,
    lang: 'fr',
    headers: [
      { text: 'Mois' },
      { text: 'Visiteurs' },
      { text: 'Pages vues' },
      { text: 'Taux de conversion' }
    ],
    rows: [
      [
        { text: 'Janvier' },
        { text: '12 500' },
        { text: '48 200' },
        { text: '3,2%' }
      ],
      [
        { text: 'Février' },
        { text: '14 800' },
        { text: '52 700' },
        { text: '3,5%' }
      ],
      [
        { text: 'Mars' },
        { text: '16 300' },
        { text: '61 400' },
        { text: '3,8%' }
      ]
    ]
  }
};

/**
 * A table with pagination for handling large datasets.
 * Demonstrates how users can navigate through multiple pages of data.
 */
export const WithPagination: Story = {
  args: {
    caption: 'Employee Directory',
    hasHorizontalBorders: true,
    hasVerticalBorders: false,
    isStriped: true,
    isResponsive: true,
    hasShadow: true,
    density: 'default',
    firstCellIsHeader: false,
    hasHoverEffect: true,
    color: 'blue',
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
 * A table with pagination controls at both top and bottom.
 * Useful for long tables where users may need to navigate from either end.
 */
export const PaginationTopAndBottom: Story = {
  args: {
    ...WithPagination.args,
    paginationPosition: 'both',
    caption: 'Document Registry',
    color: 'blue',
    isCardStyle: true,
  }
};

/**
 * A table with selectable rows for multi-item operations.
 * Demonstrates how users can select multiple rows for batch operations.
 */
export const SelectableRows: Story = {
  args: {
    caption: 'Task Management',
    hasHorizontalBorders: true,
    hasVerticalBorders: false,
    isStriped: true,
    isResponsive: true,
    hasShadow: true,
    density: 'default',
    firstCellIsHeader: false,
    hasHoverEffect: true,
    isCardStyle: true,
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
 * A table with single row selection for choosing one option.
 * Ideal for interfaces where users need to make a single choice from options.
 */
export const SingleRowSelection: Story = {
  args: {
    caption: 'Select a Subscription Plan',
    hasHorizontalBorders: true,
    hasVerticalBorders: false,
    hasCellBorders: true,
    isStriped: true,
    isResponsive: true,
    hasShadow: true,
    density: 'default',
    firstCellIsHeader: false,
    hasHoverEffect: true,
    color: 'blue',
    lang: 'en',
    selectable: true,
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
 * A table with sortable columns for interactive data organization.
 * Users can click on column headers to sort data in ascending or descending order.
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
    caption: 'Sortable Product Data',
    hasHorizontalBorders: true,
    hasVerticalBorders: false,
    hasCellBorders: true,
    isStriped: true,
    hasShadow: true,
    isResponsive: true, 
    density: 'default',
    hasHoverEffect: true,
    color: 'blue',
    isCardStyle: true,
    lang: 'en',
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
 * A table with an empty state to handle the no-data scenario gracefully.
 * Shows users a helpful message when no data is available.
 */
export const EmptyState: Story = {
  args: {
    caption: 'Search Results',
    hasHorizontalBorders: true,
    hasVerticalBorders: false,
    isStriped: false,
    isResponsive: true,
    hasShadow: true,
    density: 'default',
    isCardStyle: true,
    color: 'blue',
    lang: 'en',
    headers: [
      { text: 'ID' },
      { text: 'Name' },
      { text: 'Email' },
      { text: 'Role' }
    ],
    rows: [],
    emptyStateMessage: 'No results match your search criteria. Try adjusting your filters or search terms.'
  }
};

/**
 * A comprehensive data table with multiple features combined.
 * Demonstrates how various features can work together in a real-world application.
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
      <div>
        <h3>Enhanced Data Table with Multiple Features</h3>
        <p className="mb-4">
          This example combines sorting, selection, pagination, and visual enhancements.
          Try clicking on column headers, selecting rows, and navigating between pages.
        </p>
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
      </div>
    );
  },
  args: {
    caption: 'Employee Management System',
    hasHorizontalBorders: true,
    hasVerticalBorders: false,
    hasCellBorders: true,
    isStriped: true,
    isResponsive: true,
    hasShadow: true,
    density: 'compact',
    firstCellIsHeader: false,
    hasHoverEffect: true,
    color: 'blue',
    isCardStyle: true,
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
    ],
    paginationPosition: "bottom",
    selectionType: "multiple" 
  }
};

/**
 * A demonstration of pagination functionality with both integrated and standalone controls.
 * Shows how pagination can be customized in different contexts.
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
        <p className="mb-4">This example shows pagination within a table context.</p>
        <Table
          {...args}
          hasPagination={true}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        
        <h3 style={{ marginTop: '2rem' }}>Standalone Pagination Example</h3>
        <p className="mb-4">This demonstrates how pagination controls can be used independently of a table.</p>
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
    caption: 'Employee Directory with Custom Pagination',
    hasHorizontalBorders: true,
    isStriped: true,
    hasShadow: true,
    isCardStyle: true,
    density: 'default',
    color: 'blue',
    hasHoverEffect: true,
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
 * A clear demonstration of cell borders with rounded corners.
 * Shows how cell borders can be used to create a grid-like appearance with improved aesthetics.
 */
export const CellBordersOnly: Story = {
  args: {
    caption: 'Cell Borders with Rounded Corners',
    hasHorizontalBorders: false,
    hasVerticalBorders: false,
    hasCellBorders: true,
    isStriped: false,
    isResponsive: true,
    hasShadow: true,
    density: 'default',
    firstCellIsHeader: false,
    hasHoverEffect: true,
    lang: 'en',
    headers: [
      { text: 'Feature' },
      { text: 'Description' },
      { text: 'Status' },
      { text: 'Priority' }
    ],
    rows: [
      [
        { text: 'Cell Borders' },
        { text: 'Creates clear visual separation between data points' },
        { text: 'Implemented' },
        { text: 'High' }
      ],
      [
        { text: 'Rounded Corners' },
        { text: 'Softens the appearance for improved aesthetics' },
        { text: 'Implemented' },
        { text: 'Medium' }
      ],
      [
        { text: 'Box Shadow' },
        { text: 'Adds depth and raises table from background' },
        { text: 'Implemented' },
        { text: 'Low' }
      ]
    ]
  }
};

/**
 * Table with a shadow effect for better depth and hierarchy.
 * The shadow helps the table stand out from the background, creating visual hierarchy.
 */
export const TableWithShadow: Story = {
  args: {
    caption: 'Table with Shadow Effect',
    hasHorizontalBorders: true,
    hasVerticalBorders: false,
    isStriped: true,
    density: 'default',
    hasShadow: true,
    hasHoverEffect: true,
    headers: [
      { text: 'Feature' },
      { text: 'Description' },
      { text: 'Benefit' }
    ],
    rows: [
      [
        { text: 'Shadow Effect' },
        { text: 'Adds subtle drop shadow to table' },
        { text: 'Creates visual hierarchy' }
      ],
      [
        { text: 'Rounded Corners' },
        { text: 'Softens table edges' },
        { text: 'Modern aesthetic appeal' }
      ],
      [
        { text: 'Border Radius' },
        { text: 'Consistent with GCDS design system' },
        { text: 'Visual consistency' }
      ]
    ]
  }
};

/**
 * Table with alternating column backgrounds to improve readability across wide tables.
 * This feature is particularly useful for tables with many columns.
 */
export const StripedColumns: Story = {
  args: {
    caption: 'Table with Striped Columns',
    hasHorizontalBorders: true,
    hasVerticalBorders: false,
    isStriped: false,
    hasStripedColumns: true,
    hasShadow: true,
    density: 'default',
    hasHoverEffect: true,
    headers: [
      { text: 'Q1' },
      { text: 'Q2' },
      { text: 'Q3' },
      { text: 'Q4' },
      { text: 'Annual' },
      { text: 'Target' },
      { text: 'Variance' }
    ],
    rows: [
      [
        { text: '$3.2M' },
        { text: '$3.8M' },
        { text: '$4.1M' },
        { text: '$4.7M' },
        { text: '$15.8M' },
        { text: '$15.0M' },
        { text: '+5.3%' }
      ],
      [
        { text: '$2.1M' },
        { text: '$2.3M' },
        { text: '$2.5M' },
        { text: '$2.8M' },
        { text: '$9.7M' },
        { text: '$10.0M' },
        { text: '-3.0%' }
      ],
      [
        { text: '$1.1M' },
        { text: '$1.5M' },
        { text: '$1.6M' },
        { text: '$1.9M' },
        { text: '$6.1M' },
        { text: '$5.0M' },
        { text: '+22.0%' }
      ]
    ]
  }
};

/**
 * Table with hover effect to highlight rows as the user moves their cursor.
 * Improves usability by providing visual feedback on mouse interaction.
 */
export const HoverEffect: Story = {
  args: {
    caption: 'Table with Row Hover Effect',
    hasHorizontalBorders: true,
    hasVerticalBorders: false,
    hasCellBorders: true,
    isStriped: true,
    hasShadow: true,
    density: 'default',
    hasHoverEffect: true,
    headers: [
      { text: 'Action Item' },
      { text: 'Owner' },
      { text: 'Status' },
      { text: 'Due Date' }
    ],
    rows: [
      [
        { text: 'Complete project proposal' },
        { text: 'John Smith' },
        { text: 'In Progress' },
        { text: '2023-08-15' }
      ],
      [
        { text: 'Schedule kickoff meeting' },
        { text: 'Maria Garcia' },
        { text: 'Completed' },
        { text: '2023-08-10' }
      ],
      [
        { text: 'Finalize budget estimates' },
        { text: 'Robert Johnson' },
        { text: 'Not Started' },
        { text: '2023-08-20' }
      ],
      [
        { text: 'Present to stakeholders' },
        { text: 'Sarah Lee' },
        { text: 'Scheduled' },
        { text: '2023-08-25' }
      ]
    ]
  }
};

/**
 * Table with blue color theme for visual categorization.
 * Color themes can help users recognize tables by their purpose or category.
 */
export const BlueColorVariant: Story = {
  args: {
    caption: 'Sales Performance (Blue Theme)',
    hasHorizontalBorders: true,
    hasVerticalBorders: false,
    hasCellBorders: true,
    isStriped: true,
    hasShadow: true,
    density: 'default',
    color: 'blue',
    hasHoverEffect: true,
    headers: [
      { text: 'Sales Rep' },
      { text: 'Region' },
      { text: 'Q1 Sales' },
      { text: 'Q2 Sales' },
      { text: 'YTD Total' }
    ],
    rows: [
      [
        { text: 'John Smith' },
        { text: 'East' },
        { text: '$245,000' },
        { text: '$312,000' },
        { text: '$557,000' }
      ],
      [
        { text: 'Maria Garcia' },
        { text: 'West' },
        { text: '$321,000' },
        { text: '$378,000' },
        { text: '$699,000' }
      ],
      [
        { text: 'Robert Chen' },
        { text: 'Central' },
        { text: '$197,000' },
        { text: '$235,000' },
        { text: '$432,000' }
      ]
    ]
  }
};

/**
 * Table with card-like styling for a more contained presentation.
 * Card styling adds padding and defined borders for a more distinct UI element.
 */
export const CardStyle: Story = {
  args: {
    caption: 'Project Schedule in Card Style',
    hasHorizontalBorders: true,
    hasVerticalBorders: false,
    hasCellBorders: false,
    isStriped: true,
    isResponsive: true,
    hasShadow: true,
    density: 'default',
    firstCellIsHeader: false,
    hasHoverEffect: true,
    isCardStyle: true,
    color: 'blue',
    lang: 'en',
    headers: [
      { text: 'Phase' },
      { text: 'Start Date' },
      { text: 'End Date' },
      { text: 'Status' },
      { text: 'Owner' }
    ],
    rows: [
      [
        { text: 'Discovery' },
        { text: '2023-09-01' },
        { text: '2023-09-15' },
        { text: 'Completed' },
        { text: 'Maria Chen' }
      ],
      [
        { text: 'Design' },
        { text: '2023-09-16' },
        { text: '2023-10-15' },
        { text: 'In Progress' },
        { text: 'David Lee' }
      ],
      [
        { text: 'Development' },
        { text: '2023-10-16' },
        { text: '2023-12-15' },
        { text: 'Not Started' },
        { text: 'John Smith' }
      ],
      [
        { text: 'Testing' },
        { text: '2023-12-16' },
        { text: '2023-12-31' },
        { text: 'Not Started' },
        { text: 'Sarah Wilson' }
      ]
    ]
  }
};

/**
 * Table that stacks vertically on mobile devices for better responsive behavior.
 * Each row transforms into a vertical card on small screens, improving readability.
 */
export const StackOnMobile: Story = {
  args: {
    caption: 'Responsive Table that Stacks on Mobile',
    hasHorizontalBorders: true,
    hasVerticalBorders: false,
    hasCellBorders: true,
    isStriped: true,
    hasShadow: true,
    density: 'default',
    hasHoverEffect: true,
    isCardStyle: true,
    stackOnMobile: true,
    headers: [
      { text: 'Product' },
      { text: 'Category' },
      { text: 'Price' },
      { text: 'Stock' },
      { text: 'Rating' }
    ],
    rows: [
      [
        { text: 'Smartphone X20' },
        { text: 'Electronics' },
        { text: '$899.99' },
        { text: '42' },
        { text: '4.7/5' }
      ],
      [
        { text: 'Bluetooth Headphones' },
        { text: 'Audio' },
        { text: '$149.99' },
        { text: '78' },
        { text: '4.5/5' }
      ],
      [
        { text: 'Wireless Keyboard' },
        { text: 'Accessories' },
        { text: '$59.99' },
        { text: '25' },
        { text: '4.2/5' }
      ],
      [
        { text: 'Smart Watch' },
        { text: 'Wearables' },
        { text: '$199.99' },
        { text: '15' },
        { text: '4.8/5' }
      ]
    ]
  }
};

/**
 * Table combining multiple style options to showcase customization possibilities.
 * Demonstrates how various styling options can be combined for maximum impact.
 */
export const TableWithCombinedStyles: Story = {
  args: {
    caption: 'Advanced Table with Combined Styling',
    hasHorizontalBorders: true,
    hasVerticalBorders: false,
    hasCellBorders: true,
    isStriped: true,
    hasStripedColumns: false,
    hasShadow: true,
    density: 'compact',
    firstCellIsHeader: false,
    hasHoverEffect: true,
    color: 'blue',
    isCardStyle: true,
    lang: 'en',
    selectable: true,
    selectionType: 'multiple',
    headers: [
      { text: 'Project' },
      { text: 'Client' },
      { text: 'Status' },
      { text: 'Budget' },
      { text: 'Timeline' },
      { text: 'Team Size' }
    ],
    rows: [
      [
        { text: 'Website Redesign' },
        { text: 'Acme Corp' },
        { text: 'In Progress' },
        { text: '$75,000' },
        { text: 'Q3 2023' },
        { text: '5' }
      ],
      [
        { text: 'Mobile App Development' },
        { text: 'XYZ Industries' },
        { text: 'Planning' },
        { text: '$120,000' },
        { text: 'Q4 2023' },
        { text: '8' }
      ],
      [
        { text: 'E-commerce Platform' },
        { text: 'Global Retail' },
        { text: 'Completed' },
        { text: '$200,000' },
        { text: 'Q2 2023' },
        { text: '12' }
      ],
      [
        { text: 'CRM Implementation' },
        { text: 'Local Services' },
        { text: 'On Hold' },
        { text: '$85,000' },
        { text: 'TBD' },
        { text: '6' }
      ]
    ]
  }
};

/**
 * A table with filtering capabilities for interactive data exploration.
 * Users can filter data in each column to quickly find what they need.
 */
export const FilterableTable: Story = {
  name: 'Table with Column Filtering',
  args: {
    caption: 'Employee Directory with Filtering',
    hasHorizontalBorders: true,
    hasVerticalBorders: false,
    hasCellBorders: false,
    isStriped: true,
    isResponsive: true,
    isFilterable: true,
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
    ],
    filterPlaceholder: 'Filter...'
  }
};

/**
 * A table with specific filterable columns and pagination combined.
 * Demonstrates how to limit filtering to specific columns and how filtering works with pagination.
 */
export const FilterableWithPagination: Story = {
  render: function FilterablePaginatedTableStory(args) {
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredRows, setFilteredRows] = useState(args.rows);
    
    // Handle page change
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
    
    // Handle filter changes
    const handleFilter = (filterValues: Record<number, string>) => {
      // Filter the rows based on the filter values
      if (Object.keys(filterValues).length > 0) {
        const filtered = args.rows.filter(row => {
          return Object.entries(filterValues).every(([colIndex, filterValue]) => {
            if (!filterValue.trim()) return true;
            
            const columnIndex = parseInt(colIndex, 10);
            const cellValue = row[columnIndex]?.text || '';
            
            return cellValue.toLowerCase().includes(filterValue.toLowerCase());
          });
        });
        
        setFilteredRows(filtered);
        setCurrentPage(1); // Reset to first page when filter changes
      } else {
        setFilteredRows(args.rows);
      }
    };
    
    return (
      <div>
        <p className="mb-4">
          This example combines filtering with pagination. Only Department, Role, and Status columns are filterable.
          Showing {filteredRows.length} total items, page {currentPage} of {Math.ceil(filteredRows.length / 5)}.
        </p>
        <Table
          {...args}
          isFilterable={true}
          filterableHeaders={[2, 3, 4]} // Only Department, Role, Status columns
          onFilter={handleFilter}
          hasPagination={true}
          itemsPerPage={5}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          totalItems={filteredRows.length}
          rows={filteredRows}
        />
      </div>
    );
  },
  args: {
    caption: 'Employee Directory with Filtering',
    hasHorizontalBorders: true,
    hasVerticalBorders: false,
    hasCellBorders: true,
    isStriped: true,
    hasShadow: true,
    isResponsive: true,
    hasHoverEffect: true,
    isCardStyle: true,
    color: 'blue',
    density: 'default',
    headers: [
      { text: 'ID' },
      { text: 'Name' },
      { text: 'Department', filterable: true },
      { text: 'Role', filterable: true },
      { text: 'Status', filterable: true },
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
    ],
    filterPlaceholder: 'Filter...'
  }
}; 

/**
 * Table with Header Filters
 *
 * This story demonstrates tables with clickable filter icons in the headers.
 * Users can click on the filter icon to open a dropdown with filtering options.
 */
export const HeaderFilters: Story = {
  name: 'Table with Header Filters',
  args: {
    caption: 'Employee Directory with Header Filters',
    hasHorizontalBorders: true,
    hasVerticalBorders: false,
    hasCellBorders: false,
    isStriped: true,
    hasHoverEffect: true,
    isResponsive: true,
    hasShadow: true,
    color: 'blue',
    hasHeaderFilters: true, // Enable the header filters
    headers: [
      { text: 'Name', filterable: true, sortable: true },
      { text: 'Department', filterable: true },
      { text: 'Position', filterable: true },
      { text: 'Email', filterable: true },
      { text: 'Status', filterable: true }
    ],
    rows: [
      [
        { text: 'John Smith' },
        { text: 'Engineering' },
        { text: 'Senior Developer' },
        { text: 'john.smith@example.com' },
        { text: 'Active' }
      ],
      [
        { text: 'Emily Johnson' },
        { text: 'Marketing' },
        { text: 'Marketing Manager' },
        { text: 'emily.johnson@example.com' },
        { text: 'Active' }
      ],
      [
        { text: 'Michael Brown' },
        { text: 'Finance' },
        { text: 'Financial Analyst' },
        { text: 'michael.brown@example.com' },
        { text: 'Away' }
      ],
      [
        { text: 'Jessica Williams' },
        { text: 'HR' },
        { text: 'HR Director' },
        { text: 'jessica.williams@example.com' },
        { text: 'Active' }
      ],
      [
        { text: 'David Miller' },
        { text: 'Engineering' },
        { text: 'Frontend Developer' },
        { text: 'david.miller@example.com' },
        { text: 'On leave' }
      ],
      [
        { text: 'Sarah Davis' },
        { text: 'Sales' },
        { text: 'Sales Representative' },
        { text: 'sarah.davis@example.com' },
        { text: 'Active' }
      ],
      [
        { text: 'Thomas Wilson' },
        { text: 'Engineering' },
        { text: 'Backend Developer' },
        { text: 'thomas.wilson@example.com' },
        { text: 'Active' }
      ],
      [
        { text: 'Jennifer Garcia' },
        { text: 'Product' },
        { text: 'Product Manager' },
        { text: 'jennifer.garcia@example.com' },
        { text: 'Active' }
      ]
    ],
  },
  
  render: function HeaderFiltersTable(args) {
    const [filteredCount, setFilteredCount] = React.useState(args.rows.length);
    
    // Handle filter changes
    const handleFilter = (filterValues: Record<number, string>) => {
      // Count how many rows would remain after filtering
      let filtered = args.rows;
      
      if (Object.keys(filterValues).length > 0) {
        filtered = args.rows.filter(row => {
          return Object.entries(filterValues).every(([colIndex, filterValue]) => {
            if (!filterValue.trim()) return true;
            
            const columnIndex = parseInt(colIndex, 10);
            const cellValue = row[columnIndex]?.text || '';
            
            return cellValue.toLowerCase().includes(filterValue.toLowerCase());
          });
        });
      }
      
      setFilteredCount(filtered.length);
    };
    
    return (
      <div>
        <p>Click on the filter icon (⋮⋮) in any column header to filter the data. {filteredCount < args.rows.length && `Showing ${filteredCount} of ${args.rows.length} rows.`}</p>
        <Table {...args} onFilter={handleFilter} />
      </div>
    );
  },
  
  parameters: {
    docs: {
      description: {
        story: `
This table demonstrates the header filter functionality, allowing users to filter data directly from column headers.
Each column header has a filter icon that, when clicked, opens a dropdown where users can enter filter criteria.
This approach provides a clean user interface similar to what users expect in data management applications like Excel.

The filter controls appear on demand rather than taking up permanent space above the table, which provides a cleaner look when filters aren't needed.
        `
      }
    }
  }
};

/**
 * Table with Header Filters and Pagination
 * 
 * This story demonstrates header filtering combined with pagination.
 */
export const HeaderFiltersWithPagination: Story = {
  name: 'Table with Header Filters and Pagination',
  args: {
    caption: 'Project Status with Header Filters and Pagination',
    hasHorizontalBorders: true,
    isStriped: true,
    hasHoverEffect: true,
    hasShadow: true,
    color: 'blue',
    hasPagination: true,
    itemsPerPage: 5,
    hasHeaderFilters: true, // Enable header filters
    filterableHeaders: [0, 1, 2, 4], // Only make some columns filterable
    headers: [
      { text: 'Project Name', filterable: true, sortable: true },
      { text: 'Department', filterable: true },
      { text: 'Status', filterable: true },
      { text: 'Budget', filterable: false },
      { text: 'Priority', filterable: true }
    ],
    rows: [
      [
        { text: 'Website Redesign' },
        { text: 'Marketing' },
        { text: 'In Progress' },
        { text: '$125,000' },
        { text: 'High' }
      ],
      [
        { text: 'Mobile App Development' },
        { text: 'Engineering' },
        { text: 'Planning' },
        { text: '$250,000' },
        { text: 'High' }
      ],
      [
        { text: 'Data Migration' },
        { text: 'IT' },
        { text: 'Completed' },
        { text: '$75,000' },
        { text: 'Medium' }
      ],
      [
        { text: 'CRM Implementation' },
        { text: 'Sales' },
        { text: 'In Progress' },
        { text: '$180,000' },
        { text: 'High' }
      ],
      [
        { text: 'Employee Training Program' },
        { text: 'HR' },
        { text: 'Planning' },
        { text: '$50,000' },
        { text: 'Medium' }
      ],
      [
        { text: 'Product Launch Campaign' },
        { text: 'Marketing' },
        { text: 'In Progress' },
        { text: '$300,000' },
        { text: 'Critical' }
      ],
      [
        { text: 'Office Relocation' },
        { text: 'Operations' },
        { text: 'On Hold' },
        { text: '$450,000' },
        { text: 'Low' }
      ],
      [
        { text: 'Customer Feedback System' },
        { text: 'Customer Support' },
        { text: 'Planning' },
        { text: '$90,000' },
        { text: 'Medium' }
      ],
      [
        { text: 'Security Audit' },
        { text: 'IT' },
        { text: 'In Progress' },
        { text: '$120,000' },
        { text: 'Critical' }
      ],
      [
        { text: 'Inventory Management System' },
        { text: 'Operations' },
        { text: 'Planning' },
        { text: '$200,000' },
        { text: 'High' }
      ],
      [
        { text: 'Social Media Strategy' },
        { text: 'Marketing' },
        { text: 'Completed' },
        { text: '$65,000' },
        { text: 'Medium' }
      ],
      [
        { text: 'Annual Report' },
        { text: 'Finance' },
        { text: 'In Progress' },
        { text: '$40,000' },
        { text: 'High' }
      ]
    ],
  },
  
  render: function HeaderFiltersWithPaginationTable(args) {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [filterValues, setFilterValues] = React.useState<Record<number, string>>({});
    const [filteredRows, setFilteredRows] = React.useState(args.rows);
    
    // Handle page changes
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
    
    // Handle filter changes
    const handleFilter = (newFilterValues: Record<number, string>) => {
      setFilterValues(newFilterValues);
      
      // Filter the rows based on the new filter values
      if (Object.keys(newFilterValues).length > 0) {
        const filtered = args.rows.filter(row => {
          return Object.entries(newFilterValues).every(([colIndex, filterValue]) => {
            if (!filterValue.trim()) return true;
            
            const columnIndex = parseInt(colIndex, 10);
            const cellValue = row[columnIndex]?.text || '';
            
            return cellValue.toLowerCase().includes(filterValue.toLowerCase());
          });
        });
        
        setFilteredRows(filtered);
      } else {
        setFilteredRows(args.rows);
      }
      
      // Reset to first page when filters change
      setCurrentPage(1);
    };
    
    return (
      <div>
        <p>
          This example combines header filtering with pagination. 
          {Object.keys(filterValues).length > 0 && 
            ` Showing ${filteredRows.length} of ${args.rows.length} rows after filtering.`
          }
        </p>
        <Table 
          {...args} 
          onFilter={handleFilter} 
          currentPage={currentPage}
          onPageChange={handlePageChange}
          rows={filteredRows}
          totalItems={filteredRows.length}
        />
      </div>
    );
  },
  
  parameters: {
    docs: {
      description: {
        story: `
This table demonstrates how header filtering works together with pagination. The table allows users to:

1. Filter data by clicking filter icons in select column headers (Project Name, Department, Status, and Priority)
2. Navigate through pages of filtered results
3. Combines the power of filtering and pagination for large datasets

Note that the filtered results affect the pagination, automatically recalculating the total number of pages based on the filtered set of data.
        `
      }
    }
  }
};