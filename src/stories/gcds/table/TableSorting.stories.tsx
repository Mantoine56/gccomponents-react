/**
 * Table Component - Sorting Stories
 * 
 * This file contains stories for the Table component that focus on sorting functionality,
 * including single-column and multi-column sorting.
 */

import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Table } from '../../../components/lib';
import { TableHeader } from '../../../components/lib/Table/Table.types';

const meta = {
  title: 'Components/Table/Sorting',
  component: Table,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Examples of sortable tables with the ability to sort by clicking on column headers.'
      }
    }
  }
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * A table with basic sorting functionality on all columns.
 * Clicking on a column header will sort the table by that column.
 */
export const BasicSorting: Story = {
  render: function SortableTable(args) {
    const [sortIndex, setSortIndex] = useState<number | null>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [tableRows, setTableRows] = useState([...args.rows]);
    
    // Create headers with sortable property
    const sortableHeaders: TableHeader[] = args.headers.map((header, index) => ({
      ...header,
      sortable: true,
      sortDirection: sortIndex === index ? sortDirection : 'none'
    }));
    
    // Handle sorting
    const handleSort = (columnIndex: number) => {
      // Toggle sort direction if clicking the same column again
      const newDirection = sortIndex === columnIndex && sortDirection === 'asc' ? 'desc' : 'asc';
      
      setSortIndex(columnIndex);
      setSortDirection(newDirection);
      
      // Actually sort the rows based on the column and direction
      const sortedRows = [...args.rows].sort((a, b) => {
        const valueA = a[columnIndex].text;
        const valueB = b[columnIndex].text;
        
        // Handle numeric values (remove currency symbols, commas, and percentage signs)
        const cleanValueA = String(valueA).replace(/[$,\s%]/g, '');
        const cleanValueB = String(valueB).replace(/[$,\s%]/g, '');
        
        if (!isNaN(Number(cleanValueA)) && !isNaN(Number(cleanValueB))) {
          return newDirection === 'asc' 
            ? Number(cleanValueA) - Number(cleanValueB) 
            : Number(cleanValueB) - Number(cleanValueA);
        }
        
        // Handle date values
        const dateA = new Date(valueA);
        const dateB = new Date(valueB);
        
        if (!isNaN(dateA.getTime()) && !isNaN(dateB.getTime())) {
          return newDirection === 'asc' 
            ? dateA.getTime() - dateB.getTime() 
            : dateB.getTime() - dateA.getTime();
        }
        
        // Handle string values
        return newDirection === 'asc' 
          ? String(valueA).localeCompare(String(valueB)) 
          : String(valueB).localeCompare(String(valueA));
      });
      
      setTableRows(sortedRows);
    };
    
    return (
      <div>
        <p>Click on any column header to sort the table. Click again to reverse the sort order.</p>
        <Table
          {...args}
          headers={sortableHeaders}
          rows={tableRows}
          onSort={(columnIndex) => handleSort(columnIndex)}
        />
      </div>
    );
  },
  args: {
    caption: 'Sortable Product Data',
    hasHorizontalBorders: true,
    hasCellBorders: true,
    isStriped: true,
    hasShadow: true,
    isResponsive: true,
    hasHoverEffect: true,
    headers: [
      { text: 'Product Name' },
      { text: 'Category' },
      { text: 'Price' },
      { text: 'Stock' },
      { text: 'Last Updated' }
    ],
    rows: [
      [
        { text: 'Smartphone X' },
        { text: 'Electronics' },
        { text: '$999.99' },
        { text: '45' },
        { text: '2023-04-15' }
      ],
      [
        { text: 'Wireless Headphones' },
        { text: 'Audio' },
        { text: '$159.99' },
        { text: '120' },
        { text: '2023-05-22' }
      ],
      [
        { text: 'Smart Watch' },
        { text: 'Wearables' },
        { text: '$349.99' },
        { text: '78' },
        { text: '2023-03-10' }
      ],
      [
        { text: 'Laptop Pro' },
        { text: 'Computers' },
        { text: '$1,499.99' },
        { text: '32' },
        { text: '2023-06-01' }
      ],
      [
        { text: 'Wireless Keyboard' },
        { text: 'Accessories' },
        { text: '$89.99' },
        { text: '65' },
        { text: '2023-05-18' }
      ]
    ]
  }
};

/**
 * A table with sorting indicators that clearly show the sort direction.
 * This example includes improved visual feedback for the sorting state.
 */
export const SortingWithIndicators: Story = {
  render: function SortingWithIndicatorsTable(args) {
    const [sortIndex, setSortIndex] = useState<number | null>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [tableRows, setTableRows] = useState([...args.rows]);
    
    // Create headers with sortable property and default icons
    const sortableHeaders: TableHeader[] = args.headers.map((header, index) => ({
      ...header,
      sortable: true,
      // Include HTML for sort icons
      html: sortIndex === index 
        ? `${header.text} ${sortDirection === 'asc' ? '▲' : '▼'}`
        : `${header.text} <span style="opacity: 0.3">⇕</span>`,
      sortDirection: sortIndex === index ? sortDirection : 'none'
    }));
    
    // Handle sorting (same as basic sorting)
    const handleSort = (columnIndex: number) => {
      const newDirection = sortIndex === columnIndex && sortDirection === 'asc' ? 'desc' : 'asc';
      
      setSortIndex(columnIndex);
      setSortDirection(newDirection);
      
      const sortedRows = [...args.rows].sort((a, b) => {
        const valueA = a[columnIndex].text;
        const valueB = b[columnIndex].text;
        
        // Handle numeric values
        const cleanValueA = String(valueA).replace(/[$,\s%]/g, '');
        const cleanValueB = String(valueB).replace(/[$,\s%]/g, '');
        
        if (!isNaN(Number(cleanValueA)) && !isNaN(Number(cleanValueB))) {
          return newDirection === 'asc' 
            ? Number(cleanValueA) - Number(cleanValueB) 
            : Number(cleanValueB) - Number(cleanValueA);
        }
        
        // Handle date values
        const dateA = new Date(valueA);
        const dateB = new Date(valueB);
        
        if (!isNaN(dateA.getTime()) && !isNaN(dateB.getTime())) {
          return newDirection === 'asc' 
            ? dateA.getTime() - dateB.getTime() 
            : dateB.getTime() - dateA.getTime();
        }
        
        // Handle string values
        return newDirection === 'asc' 
          ? String(valueA).localeCompare(String(valueB)) 
          : String(valueB).localeCompare(String(valueA));
      });
      
      setTableRows(sortedRows);
    };
    
    return (
      <div>
        <p>This example shows clear sorting indicators in the column headers.</p>
        <Table
          {...args}
          headers={sortableHeaders}
          rows={tableRows}
          onSort={(columnIndex) => handleSort(columnIndex)}
        />
      </div>
    );
  },
  args: {
    caption: 'User Activity',
    hasHorizontalBorders: true,
    hasCellBorders: false,
    isStriped: true,
    hasShadow: true,
    color: 'blue',
    isResponsive: true,
    headers: [
      { text: 'User' },
      { text: 'Last Login' },
      { text: 'Sessions' },
      { text: 'Avg. Duration' }
    ],
    rows: [
      [
        { text: 'john.smith@example.com' },
        { text: '2023-06-14' },
        { text: '47' },
        { text: '15m 32s' }
      ],
      [
        { text: 'sarah.jones@example.com' },
        { text: '2023-06-15' },
        { text: '23' },
        { text: '8m 45s' }
      ],
      [
        { text: 'michael.brown@example.com' },
        { text: '2023-06-10' },
        { text: '68' },
        { text: '22m 18s' }
      ],
      [
        { text: 'emma.wilson@example.com' },
        { text: '2023-06-12' },
        { text: '35' },
        { text: '12m 05s' }
      ],
      [
        { text: 'david.miller@example.com' },
        { text: '2023-06-08' },
        { text: '19' },
        { text: '6m 30s' }
      ]
    ]
  }
};

/**
 * An example of persistent sorting that maintains state between renders.
 * This is a more realistic example of how sorting would be used in a real application.
 */
export const PersistentSorting: Story = {
  render: function PersistentSortingTable(args) {
    // Initialize with a default sort on the first column
    const [sortIndex, setSortIndex] = useState<number>(0);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    
    // Apply initial sort to rows
    const initialSortedRows = [...args.rows].sort((a, b) => {
      const valueA = a[0].text;
      const valueB = b[0].text;
      return valueA.localeCompare(valueB);
    });
    
    const [tableRows, setTableRows] = useState(initialSortedRows);
    
    // Create headers with sortable property
    const sortableHeaders: TableHeader[] = args.headers.map((header, index) => ({
      ...header,
      sortable: true,
      sortDirection: sortIndex === index ? sortDirection : 'none'
    }));
    
    // Handle sorting
    const handleSort = (columnIndex: number) => {
      const newDirection = sortIndex === columnIndex && sortDirection === 'asc' ? 'desc' : 'asc';
      
      setSortIndex(columnIndex);
      setSortDirection(newDirection);
      
      const sortedRows = [...args.rows].sort((a, b) => {
        const valueA = a[columnIndex].text;
        const valueB = b[columnIndex].text;
        
        // Handle numeric values
        const cleanValueA = String(valueA).replace(/[$,\s%]/g, '');
        const cleanValueB = String(valueB).replace(/[$,\s%]/g, '');
        
        if (!isNaN(Number(cleanValueA)) && !isNaN(Number(cleanValueB))) {
          return newDirection === 'asc' 
            ? Number(cleanValueA) - Number(cleanValueB) 
            : Number(cleanValueB) - Number(cleanValueA);
        }
        
        // Handle string values
        return newDirection === 'asc' 
          ? String(valueA).localeCompare(String(valueB)) 
          : String(valueB).localeCompare(String(valueA));
      });
      
      setTableRows(sortedRows);
    };
    
    return (
      <div>
        <p>This table is pre-sorted by the first column and maintains its sort state.</p>
        <Table
          {...args}
          headers={sortableHeaders}
          rows={tableRows}
          onSort={(columnIndex) => handleSort(columnIndex)}
        />
      </div>
    );
  },
  args: {
    caption: 'Employee Directory',
    hasHorizontalBorders: true,
    isStriped: true,
    hasHoverEffect: true,
    hasShadow: true,
    color: 'green',
    headers: [
      { text: 'Name' },
      { text: 'Department' },
      { text: 'Position' },
      { text: 'Office Location' },
      { text: 'Email' }
    ],
    rows: [
      [
        { text: 'Alice Johnson' },
        { text: 'Engineering' },
        { text: 'Frontend Developer' },
        { text: 'New York' },
        { text: 'alice.j@example.com' }
      ],
      [
        { text: 'Bob Smith' },
        { text: 'Marketing' },
        { text: 'Marketing Manager' },
        { text: 'Chicago' },
        { text: 'bob.s@example.com' }
      ],
      [
        { text: 'Carol Williams' },
        { text: 'HR' },
        { text: 'HR Specialist' },
        { text: 'Los Angeles' },
        { text: 'carol.w@example.com' }
      ],
      [
        { text: 'David Brown' },
        { text: 'Engineering' },
        { text: 'Backend Developer' },
        { text: 'Seattle' },
        { text: 'david.b@example.com' }
      ],
      [
        { text: 'Eva Davis' },
        { text: 'Finance' },
        { text: 'Financial Analyst' },
        { text: 'Boston' },
        { text: 'eva.d@example.com' }
      ]
    ]
  }
}; 