/**
 * Table Component - Overview
 * 
 * This is the main entry point for the Table component documentation.
 * It provides an overview of the component and links to the more specific story categories.
 */

import { Meta } from '@storybook/react';
import { Table } from '../../../components/lib';

const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Table Component

The Table component provides a flexible way to display tabular data with support for:

- Sorting
- Filtering
- Pagination
- Row selection
- Various styling options

## Categories

The Table component stories are organized into the following categories:

- **Basic**: Simple examples showing the core functionality
- **Styling**: Examples of different visual styling options
- **Filtering**: Examples of data filtering capabilities
- **Pagination**: Examples of pagination features
- **Selection**: Examples of row selection functionality
- **Sorting**: Examples of column sorting capabilities

Each category contains specific examples demonstrating different aspects of the Table component.
        `
      }
    }
  }
} satisfies Meta<typeof Table>;

export default meta;

// This file doesn't export any stories - it's just a container for documentation 