/**
 * Table Component - Styling Stories
 * 
 * This file contains stories showcasing various styling options for the Table component,
 * including borders, colors, density, and other visual customizations.
 */

import { Meta, StoryObj } from '@storybook/react';
import { Table } from '../../../components/lib';

const meta = {
  title: 'Components/Table/Styling',
  component: Table,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Styling variations for the Table component.'
      }
    }
  }
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data for all styling examples
const headers = [
  { text: 'Name' },
  { text: 'Position' },
  { text: 'Department' },
  { text: 'Location' },
  { text: 'Start Date' }
];

const rows = [
  [
    { text: 'John Doe' },
    { text: 'Software Engineer' },
    { text: 'Engineering' },
    { text: 'New York' },
    { text: '2021-06-15' }
  ],
  [
    { text: 'Jane Smith' },
    { text: 'Product Manager' },
    { text: 'Product' },
    { text: 'San Francisco' },
    { text: '2020-03-22' }
  ],
  [
    { text: 'Robert Johnson' },
    { text: 'UX Designer' },
    { text: 'Design' },
    { text: 'Chicago' },
    { text: '2022-01-10' }
  ],
  [
    { text: 'Emily Williams' },
    { text: 'Marketing Specialist' },
    { text: 'Marketing' },
    { text: 'Boston' },
    { text: '2021-09-05' }
  ],
  [
    { text: 'Michael Brown' },
    { text: 'Sales Representative' },
    { text: 'Sales' },
    { text: 'Los Angeles' },
    { text: '2019-11-18' }
  ]
];

/**
 * Default table with minimal styling.
 */
export const DefaultStyling: Story = {
  args: {
    caption: 'Default Table Styling',
    headers,
    rows
  }
};

/**
 * Table with alternating row colors (striped).
 */
export const StripedRows: Story = {
  args: {
    caption: 'Table with Striped Rows',
    headers,
    rows,
    isStriped: true
  }
};

/**
 * Table with horizontal borders between rows.
 */
export const HorizontalBorders: Story = {
  args: {
    caption: 'Table with Horizontal Borders',
    headers,
    rows,
    hasHorizontalBorders: true
  }
};

/**
 * Table with vertical borders between columns.
 */
export const VerticalBorders: Story = {
  args: {
    caption: 'Table with Vertical Borders',
    headers,
    rows,
    hasVerticalBorders: true
  }
};

/**
 * Table with grid-like cell borders.
 */
export const CellBorders: Story = {
  args: {
    caption: 'Table with Cell Borders',
    headers,
    rows,
    hasCellBorders: true
  }
};

/**
 * Table with shadow effect for a card-like appearance.
 */
export const WithShadow: Story = {
  args: {
    caption: 'Table with Shadow',
    headers,
    rows,
    hasShadow: true
  }
};

/**
 * Table styled as a card with shadow and rounded corners.
 */
export const CardStyle: Story = {
  args: {
    caption: 'Card-Style Table',
    headers,
    rows,
    isCardStyle: true,
    hasShadow: true
  }
};

/**
 * Compact density table with reduced padding for denser data display.
 */
export const CompactDensity: Story = {
  args: {
    caption: 'Compact Density Table',
    headers,
    rows,
    density: 'compact',
    hasHorizontalBorders: true
  }
};

/**
 * Dense table with minimal padding for maximum data density.
 */
export const DenseDensity: Story = {
  args: {
    caption: 'Dense Table',
    headers,
    rows,
    density: 'dense',
    hasHorizontalBorders: true
  }
};

/**
 * Blue themed table.
 */
export const BlueTheme: Story = {
  args: {
    caption: 'Blue Theme',
    headers,
    rows,
    color: 'blue',
    isStriped: true,
    hasHorizontalBorders: true
  }
};

/**
 * Green themed table.
 */
export const GreenTheme: Story = {
  args: {
    caption: 'Green Theme',
    headers,
    rows,
    color: 'green',
    isStriped: true,
    hasHorizontalBorders: true
  }
};

/**
 * Red themed table.
 */
export const RedTheme: Story = {
  args: {
    caption: 'Red Theme',
    headers,
    rows,
    color: 'red',
    isStriped: true,
    hasHorizontalBorders: true
  }
};

/**
 * Purple themed table.
 */
export const PurpleTheme: Story = {
  args: {
    caption: 'Purple Theme',
    headers,
    rows,
    color: 'purple',
    isStriped: true,
    hasHorizontalBorders: true
  }
};

/**
 * Table with row hover effect.
 */
export const RowHoverEffect: Story = {
  args: {
    caption: 'Table with Row Hover Effect',
    headers,
    rows,
    hasHoverEffect: true,
    hasHorizontalBorders: true
  }
};

/**
 * Comprehensive styling showcase combining multiple style options.
 */
export const ComprehensiveStyling: Story = {
  args: {
    caption: 'Comprehensive Styling Example',
    headers,
    rows,
    isStriped: true,
    hasHorizontalBorders: true,
    hasShadow: true,
    hasHoverEffect: true,
    density: 'compact',
    color: 'blue'
  }
};

/**
 * Table that stacks vertically on mobile devices for better responsive behavior.
 */
export const StackOnMobile: Story = {
  args: {
    caption: 'Table that Stacks on Mobile',
    headers,
    rows,
    stackOnMobile: true,
    hasHorizontalBorders: true,
    isStriped: true
  },
  parameters: {
    docs: {
      description: {
        story: 'This table will transform to a stacked layout on mobile devices. Resize your browser window to see the effect.'
      }
    }
  }
}; 