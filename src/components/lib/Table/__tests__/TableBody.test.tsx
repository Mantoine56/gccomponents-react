/**
 * TableBody Component Tests
 * 
 * This file contains tests for the TableBody component,
 * focusing on row selection and visual styling aspects.
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table } from '../../index';
import { expect } from '@storybook/test';

describe('TableBody Component', () => {
  const sampleHeaders = [
    { text: 'Name' },
    { text: 'Position' },
    { text: 'Department' }
  ];
  
  const sampleRows = [
    [
      { text: 'John Smith' },
      { text: 'Developer' },
      { text: 'Engineering' }
    ],
    [
      { text: 'Jane Doe' },
      { text: 'Designer' },
      { text: 'UX' }
    ],
    [
      { text: 'Robert Johnson' },
      { text: 'Manager' },
      { text: 'Product' }
    ]
  ];

  it('renders rows correctly', () => {
    const { container } = render(
      <Table
        headers={sampleHeaders}
        rows={sampleRows}
      />
    );
    
    // Check that all rows are rendered
    const tableRows = container.querySelectorAll('.gcds-table__row');
    expect(tableRows.length).toBe(sampleRows.length + 1); // +1 for header row
    
    // Check that all cells have the correct content
    const firstRowCells = tableRows[1].querySelectorAll('.gcds-table__cell');
    expect(firstRowCells[0].textContent).toBe('John Smith');
    expect(firstRowCells[1].textContent).toBe('Developer');
    expect(firstRowCells[2].textContent).toBe('Engineering');
  });
  
  it('applies striped rows styling when isStriped is true', () => {
    const { container } = render(
      <Table
        headers={sampleHeaders}
        rows={sampleRows}
        isStriped={true}
      />
    );
    
    // Check that the table has the striped class
    const table = container.querySelector('.gcds-table');
    expect(table?.classList.contains('gcds-table--striped')).toBe(true);
  });
  
  it('renders selectable rows when selectable is true', () => {
    const { container } = render(
      <Table
        headers={sampleHeaders}
        rows={sampleRows}
        selectable={true}
      />
    );
    
    // Check that selection checkboxes are rendered
    const checkboxes = container.querySelectorAll('input[type="checkbox"]');
    expect(checkboxes.length).toBeGreaterThan(0);
  });
  
  it('displays empty state message when there are no rows', () => {
    render(
      <Table
        headers={sampleHeaders}
        rows={[]}
        emptyStateMessage="No data available"
      />
    );
    
    // Check that the empty state message is displayed
    expect(screen.getByText('No data available')).toBeInTheDocument();
  });
}); 