/**
 * Table Component - Responsive Behavior Stories
 * 
 * This file contains stories demonstrating the responsive behavior options for the Table component,
 * including horizontal scrolling and stacked layouts for mobile devices.
 */

import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Table } from '../../../components/lib';

const meta = {
  title: 'Components/Table/Responsive',
  component: Table,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Table Responsive Behavior

The Table component provides two primary approaches to responsive behavior:

1. **Horizontal Scrolling** (\`isResponsive=true\`, \`stackOnMobile=false\`): The default and recommended approach. This maintains the table's structure and allows users to scroll horizontally to see all columns. The table becomes more compact on smaller screens with reduced padding and font sizes.

2. **Stacked Layout** (\`stackOnMobile=true\`): An alternative approach that transforms the table into a card-like layout where each row becomes a vertical card with label-value pairs. This works well for simple data but loses the column relationships.

For most use cases, horizontal scrolling is the recommended approach as it maintains data relationships and follows common industry practices.
        `
      }
    }
  }
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data for the examples
const headers = [
  { text: 'Name' },
  { text: 'Position' },
  { text: 'Department' },
  { text: 'Location' },
  { text: 'Start Date' }
];

const rows = [
  [
    { text: 'John Smith' },
    { text: 'Senior Developer' },
    { text: 'Engineering' },
    { text: 'Ottawa' },
    { text: '2020-03-15' }
  ],
  [
    { text: 'Maria Garcia' },
    { text: 'UX Designer' },
    { text: 'Design' },
    { text: 'Toronto' },
    { text: '2021-06-01' }
  ],
  [
    { text: 'Robert Chen' },
    { text: 'Project Manager' },
    { text: 'Operations' },
    { text: 'Vancouver' },
    { text: '2019-11-10' }
  ]
];

/**
 * The default responsive behavior uses horizontal scrolling to maintain table structure.
 * This is the recommended approach for most tables.
 */
export const DefaultScrollable: Story = {
  args: {
    caption: 'Default Scrollable Table',
    headers,
    rows,
    isResponsive: true,
    stackOnMobile: false,
    hasHorizontalBorders: true,
    isStriped: true
  },
  parameters: {
    docs: {
      description: {
        story: 'This table uses the default responsive behavior with horizontal scrolling. This maintains the relationships between columns and is the recommended approach for most tables. The table becomes more compact on mobile with reduced padding and font sizes. Resize your browser window to see the responsive behavior in action.'
      }
    }
  }
};

/**
 * Table with increased data density for comparison.
 * Shows how more complex tables benefit from the scrollable approach.
 */
export const ComplexScrollableTable: Story = {
  args: {
    caption: 'Complex Scrollable Table',
    headers: [
      { text: 'ID' },
      { text: 'Name' },
      { text: 'Position' },
      { text: 'Department' },
      { text: 'Location' },
      { text: 'Start Date' },
      { text: 'Salary' },
      { text: 'Status' }
    ],
    rows: [
      [
        { text: '001' },
        { text: 'John Smith' },
        { text: 'Senior Developer' },
        { text: 'Engineering' },
        { text: 'Ottawa' },
        { text: '2020-03-15' },
        { text: '$95,000' },
        { text: 'Active' }
      ],
      [
        { text: '002' },
        { text: 'Maria Garcia' },
        { text: 'UX Designer' },
        { text: 'Design' },
        { text: 'Toronto' },
        { text: '2021-06-01' },
        { text: '$82,000' },
        { text: 'Active' }
      ],
      [
        { text: '003' },
        { text: 'Robert Chen' },
        { text: 'Project Manager' },
        { text: 'Operations' },
        { text: 'Vancouver' },
        { text: '2019-11-10' },
        { text: '$105,000' },
        { text: 'On Leave' }
      ]
    ],
    isResponsive: true,
    stackOnMobile: false,
    hasHorizontalBorders: true,
    isStriped: true
  },
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates a more complex table with many columns. The horizontal scrolling approach works particularly well for tables with many columns and complex data relationships.'
      }
    }
  }
};

/**
 * Alternative stacked view for simple tables.
 * This approach converts each row to a card with label/value pairs.
 */
export const StackedAlternative: Story = {
  args: {
    caption: 'Stacked Layout Alternative',
    headers,
    rows,
    isResponsive: true,
    stackOnMobile: true,
    hasHorizontalBorders: true,
    isStriped: true
  },
  parameters: {
    docs: {
      description: {
        story: 'This alternative approach transforms the table into a card-like layout on mobile. Each row becomes a vertical card with label-value pairs. This can work well for simple data where vertical space is not a concern, but it loses the column relationships that make tables useful for comparing data across rows.'
      }
    }
  }
};

/**
 * Comprehensive example showing various responsive table approaches
 */
export const ResponsiveComparison: Story = {
  args: {
    headers,
    rows
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <div>
        <h3>Recommended: Default Scrollable Table</h3>
        <p>Maintains table structure with horizontal scrolling. More compact on mobile.</p>
        <Table
          caption="Default Scrollable Table"
          headers={headers}
          rows={rows}
          isResponsive={true}
          stackOnMobile={false}
          hasHorizontalBorders={true}
          isStriped={true}
        />
      </div>

      <div>
        <h3>Alternative: Stacked Layout</h3>
        <p>Transforms table into card-like layout. Better for simple data where relationships are less important.</p>
        <Table
          caption="Stacked Layout Table"
          headers={headers}
          rows={rows}
          isResponsive={true}
          stackOnMobile={true}
          hasHorizontalBorders={true}
          isStriped={true}
        />
      </div>

      <div>
        <h3>Not Recommended: Non-Responsive Table</h3>
        <p>No responsive behavior at all. Will cause layout issues on mobile.</p>
        <Table
          caption="Non-Responsive Table"
          headers={headers}
          rows={rows}
          isResponsive={false}
          stackOnMobile={false}
          hasHorizontalBorders={true}
          isStriped={true}
        />
      </div>
    </div>
  )
}; 