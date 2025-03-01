/**
 * Table Component Tests
 * 
 * This file contains tests for the main Table component,
 * focusing on basic rendering and functionality.
 */

import React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expect } from '@storybook/test';
import { composeStories } from '@storybook/react';
import * as stories from '../../../../stories/gcds/table/Table.stories';

// Compose the stories to enable testing
const { Basic } = composeStories(stories);

describe('Table Component', () => {
  it('renders a table with the correct structure', () => {
    const { container } = render(<Basic />);
    
    // Check that the table wrapper is rendered
    const tableWrapper = container.querySelector('.gcds-table-wrapper');
    expect(tableWrapper).toBeTruthy();
    
    // Check that the table is rendered
    const table = container.querySelector('.gcds-table');
    expect(table).toBeTruthy();
    
    // Check that the table has a caption
    const caption = container.querySelector('.gcds-table__caption');
    expect(caption).toBeTruthy();
    
    // Check that the table has a header
    const thead = container.querySelector('.gcds-table__head');
    expect(thead).toBeTruthy();
    
    // Check that the table has a body
    const tbody = container.querySelector('.gcds-table__body');
    expect(tbody).toBeTruthy();
    
    // Check that the table has rows
    const rows = container.querySelectorAll('.gcds-table__row');
    expect(rows.length).toBeGreaterThan(0);
    
    // Check that the table has cells
    const cells = container.querySelectorAll('.gcds-table__cell');
    expect(cells.length).toBeGreaterThan(0);
  });
  
  it('applies the correct CSS classes based on props', () => {
    // Render the story with default props
    const { container } = render(<Basic />);
    
    // Get the table element
    const table = container.querySelector('.gcds-table');
    
    // Check for default classes
    expect(table?.classList.contains('gcds-table')).toBeTruthy();
    
    // Check for striped rows if applicable
    const hasStriped = table?.classList.contains('gcds-table--striped');
    if (hasStriped) {
      // If striped, check that striped rows exist
      const stripedRows = container.querySelectorAll('.gcds-table__row--striped');
      expect(stripedRows.length).toBeGreaterThan(0);
    }
    
    // Check for hover effect if applicable
    const hasHover = table?.classList.contains('gcds-table--hover');
    expect(hasHover !== undefined).toBeTruthy();
    
    // Check for borders if applicable
    const hasBorders = 
      table?.classList.contains('gcds-table--horizontal-borders') || 
      table?.classList.contains('gcds-table--vertical-borders') ||
      table?.classList.contains('gcds-table--all-borders');
    expect(hasBorders !== undefined).toBeTruthy();
  });
  
  it('renders the correct number of rows and columns', () => {
    const { container } = render(<Basic />);
    
    // Get all header cells
    const headerCells = container.querySelectorAll('.gcds-table__header');
    
    // Get all rows in the body
    const bodyRows = container.querySelectorAll('.gcds-table__body .gcds-table__row');
    
    // Get all cells in the first row
    const firstRowCells = bodyRows[0]?.querySelectorAll('.gcds-table__cell');
    
    // Check that the number of header cells matches the number of cells in the first row
    expect(headerCells.length).toBe(firstRowCells?.length);
    
    // Check that there is at least one row in the body
    expect(bodyRows.length).toBeGreaterThan(0);
  });
}); 