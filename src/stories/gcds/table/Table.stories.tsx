/**
 * Table Component - Basic Stories
 * 
 * This file contains basic stories for the Table component, including simple examples 
 * and styling variations.
 * 
 * IMPORTANT: Most examples have been moved to more specific story files:
 * - TablePagination.stories.tsx: For pagination examples
 * - TableSorting.stories.tsx: For sorting examples
 * - TableFiltering.stories.tsx: For filtering examples
 * - TableSelection.stories.tsx: For row selection examples
 * - TableStyles.stories.tsx: For styling examples
 * - TableColorFix.stories.tsx: For color theme examples
 */

import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Table } from '../../../components/lib';

const meta = {
  title: 'Components/Table/Basic',
  component: Table,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Basic usage examples of the Table component showing various styling options and configurations. For more specific examples, please see the dedicated story files for pagination, sorting, filtering, selection, and styling.'
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
      description: 'Whether to display horizontal borders between rows.'
    },
    hasVerticalBorders: { 
      control: 'boolean',
      description: 'Whether to display vertical borders between columns.'
    },
    hasCellBorders: { 
      control: 'boolean',
      description: 'Whether to display borders around all cells.'
    },
    isStriped: { 
      control: 'boolean',
      description: 'Whether to display alternating row background colors.'
    },
    density: {
      control: { type: 'select' },
      options: ['default', 'compact', 'dense'],
      description: 'Density of the table rows (affects row height).'
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'blue', 'green', 'red', 'purple'],
      description: 'Color theme for the table.'
    }
  }
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic headers and rows for our examples
const simpleHeaders = [
  { text: 'Name' },
  { text: 'Position' },
  { text: 'Department' }
];

const simpleRows = [
  [
    { text: 'John Smith' },
    { text: 'Developer' },
    { text: 'Engineering' }
  ],
  [
    { text: 'Maria Garcia' },
    { text: 'Designer' },
    { text: 'Design' }
  ],
  [
    { text: 'Robert Chen' },
    { text: 'Manager' },
    { text: 'Operations' }
  ]
];

/**
 * The Basic example shows a simple table with headers and rows.
 * This is the most fundamental usage of the Table component.
 */
export const Basic: Story = {
  args: {
    caption: 'Basic Table Example',
    headers: simpleHeaders,
    rows: simpleRows
  }
};

/**
 * CommonStylingVariations demonstrates the most frequently used styling options in a single story.
 * This consolidates multiple separate styling options to reduce sidebar clutter.
 */
export const CommonStylingVariations: Story = {
  args: {
    headers: simpleHeaders,
    rows: simpleRows
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3>Striped Rows</h3>
        <Table
          caption="Striped Rows Example"
          headers={simpleHeaders}
          rows={simpleRows}
          isStriped={true}
        />
      </div>

      <div>
        <h3>With Borders</h3>
        <Table
          caption="Table with Horizontal and Vertical Borders"
          headers={simpleHeaders}
          rows={simpleRows}
          hasHorizontalBorders={true}
          hasVerticalBorders={true}
        />
      </div>

      <div>
        <h3>Compact Density</h3>
        <Table
          caption="Compact Table Example"
          headers={simpleHeaders}
          rows={simpleRows}
          density="compact"
        />
      </div>

      <div>
        <h3>With Cell Borders</h3>
        <Table
          caption="Table with Cell Borders"
          headers={simpleHeaders}
          rows={simpleRows}
          hasCellBorders={true}
        />
      </div>
    </div>
  )
};

// Please see TableStyles.stories.tsx for more styling variations
// Please see TablePagination.stories.tsx for pagination examples
// Please see TableSorting.stories.tsx for sorting examples
// Please see TableFiltering.stories.tsx for filtering examples
// Please see TableSelection.stories.tsx for selection examples 