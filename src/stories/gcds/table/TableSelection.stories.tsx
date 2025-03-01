/**
 * Table Component - Selection Stories
 * 
 * This file contains stories for the Table component that focus on row selection functionality,
 * including single and multiple row selection with various actions.
 */

import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Table } from '../../../components/lib';

const meta = {
  title: 'Components/Table/Selection',
  component: Table,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Examples of tables with row selection capabilities.'
      }
    }
  }
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * A table with basic single row selection.
 * This example demonstrates selecting a single row at a time and tracking the selected row.
 */
export const SingleRowSelection: Story = {
  render: function SingleRowSelectionTable(args) {
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    
    // Handle row selection - accepts array of selected indices
    const handleRowSelect = (selectedIndices: number[]) => {
      // If there's a selected index and it's the currently selected row, deselect it
      // Otherwise, select the first index in the array
      if (selectedIndices.length > 0) {
        const newSelectedIndex = selectedIndices[0];
        setSelectedRow(selectedRow === newSelectedIndex ? null : newSelectedIndex);
      } else {
        setSelectedRow(null);
      }
    };
    
    return (
      <div>
        <p>
          Click on a row to select it. Click again to deselect.
          {selectedRow !== null && (
            <strong> Selected row: {selectedRow + 1}</strong>
          )}
        </p>
        <Table
          {...args}
          selectable={true}
          selectedRows={selectedRow !== null ? [selectedRow] : []}
          onRowSelect={handleRowSelect}
        />
      </div>
    );
  },
  args: {
    caption: 'User Directory',
    hasHorizontalBorders: true,
    isStriped: true,
    hasShadow: true,
    headers: [
      { text: 'User ID' },
      { text: 'Name' },
      { text: 'Email' },
      { text: 'Role' },
      { text: 'Status' }
    ],
    rows: [
      [
        { text: '001' },
        { text: 'John Doe' },
        { text: 'john.doe@example.com' },
        { text: 'Administrator' },
        { text: 'Active' }
      ],
      [
        { text: '002' },
        { text: 'Jane Smith' },
        { text: 'jane.smith@example.com' },
        { text: 'Editor' },
        { text: 'Active' }
      ],
      [
        { text: '003' },
        { text: 'Robert Johnson' },
        { text: 'robert.j@example.com' },
        { text: 'Viewer' },
        { text: 'Inactive' }
      ],
      [
        { text: '004' },
        { text: 'Maria Garcia' },
        { text: 'maria.g@example.com' },
        { text: 'Editor' },
        { text: 'Active' }
      ],
      [
        { text: '005' },
        { text: 'James Wilson' },
        { text: 'james.w@example.com' },
        { text: 'Administrator' },
        { text: 'Active' }
      ],
      [
        { text: '006' },
        { text: 'Patricia Martinez' },
        { text: 'patricia.m@example.com' },
        { text: 'Viewer' },
        { text: 'Active' }
      ],
      [
        { text: '007' },
        { text: 'Michael Brown' },
        { text: 'michael.b@example.com' },
        { text: 'Editor' },
        { text: 'Inactive' }
      ]
    ]
  }
};

/**
 * A table with multiple row selection via checkboxes.
 * This example demonstrates selecting multiple rows using checkboxes and performing actions on selected rows.
 */
export const MultipleRowSelection: Story = {
  render: function MultipleRowSelectionTable(args) {
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    
    // Handle row selection with updated type signature
    const handleRowSelect = (selectedIndices: number[]) => {
      setSelectedRows(selectedIndices);
    };
    
    // Select all rows
    const handleSelectAll = () => {
      if (selectedRows.length === args.rows.length) {
        setSelectedRows([]);
      } else {
        setSelectedRows(Array.from({ length: args.rows.length }, (_, i) => i));
      }
    };
    
    // Perform an action on selected rows (just an example)
    const handleAction = (action: string) => {
      alert(`${action} action performed on rows: ${selectedRows.map(i => i + 1).join(', ')}`);
    };
    
    return (
      <div>
        <div style={{ marginBottom: '1rem' }}>
          <p>
            {selectedRows.length > 0 
              ? `${selectedRows.length} rows selected` 
              : 'No rows selected'}
          </p>
          
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button 
              onClick={handleSelectAll}
              style={{ padding: '0.5rem 1rem' }}
            >
              {selectedRows.length === args.rows.length ? 'Deselect All' : 'Select All'}
            </button>
            
            <button 
              onClick={() => handleAction('Approve')}
              disabled={selectedRows.length === 0}
              style={{ 
                padding: '0.5rem 1rem', 
                backgroundColor: selectedRows.length ? '#10b981' : '#e5e7eb',
                color: selectedRows.length ? 'white' : '#9ca3af',
                border: 'none',
                borderRadius: '4px',
                cursor: selectedRows.length ? 'pointer' : 'not-allowed'
              }}
            >
              Approve Selected
            </button>
            
            <button 
              onClick={() => handleAction('Delete')}
              disabled={selectedRows.length === 0}
              style={{ 
                padding: '0.5rem 1rem', 
                backgroundColor: selectedRows.length ? '#ef4444' : '#e5e7eb',
                color: selectedRows.length ? 'white' : '#9ca3af',
                border: 'none',
                borderRadius: '4px',
                cursor: selectedRows.length ? 'pointer' : 'not-allowed'
              }}
            >
              Delete Selected
            </button>
          </div>
        </div>
        
        <Table
          {...args}
          selectable={true}
          selectionType="multiple"
          selectedRows={selectedRows}
          onRowSelect={handleRowSelect}
        />
      </div>
    );
  },
  args: {
    caption: 'Pending Requests',
    hasHorizontalBorders: true,
    isStriped: true,
    hasShadow: true,
    color: 'blue',
    headers: [
      { text: 'Request ID' },
      { text: 'Requester' },
      { text: 'Type' },
      { text: 'Date' },
      { text: 'Status' }
    ],
    rows: [
      [
        { text: 'REQ-001' },
        { text: 'John Doe' },
        { text: 'Time Off' },
        { text: '2023-06-15' },
        { text: 'Pending' }
      ],
      [
        { text: 'REQ-002' },
        { text: 'Jane Smith' },
        { text: 'Expense' },
        { text: '2023-06-16' },
        { text: 'Pending' }
      ],
      [
        { text: 'REQ-003' },
        { text: 'Robert Johnson' },
        { text: 'Equipment' },
        { text: '2023-06-17' },
        { text: 'Pending' }
      ],
      [
        { text: 'REQ-004' },
        { text: 'Maria Garcia' },
        { text: 'Time Off' },
        { text: '2023-06-18' },
        { text: 'Pending' }
      ],
      [
        { text: 'REQ-005' },
        { text: 'James Wilson' },
        { text: 'Expense' },
        { text: '2023-06-19' },
        { text: 'Pending' }
      ],
      [
        { text: 'REQ-006' },
        { text: 'Patricia Martinez' },
        { text: 'Training' },
        { text: '2023-06-20' },
        { text: 'Pending' }
      ],
      [
        { text: 'REQ-007' },
        { text: 'Michael Brown' },
        { text: 'Equipment' },
        { text: '2023-06-21' },
        { text: 'Pending' }
      ],
      [
        { text: 'REQ-008' },
        { text: 'Sarah Davis' },
        { text: 'Time Off' },
        { text: '2023-06-22' },
        { text: 'Pending' }
      ]
    ]
  }
};

/**
 * A table with row selection and detailed view.
 * This example demonstrates selecting a row and displaying its details in an adjacent panel.
 */
export const SelectionWithDetailView: Story = {
  render: function SelectionWithDetailViewTable(args) {
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    
    // Handle row selection - accepts array of selected indices
    const handleRowSelect = (selectedIndices: number[]) => {
      // If there's a selected index and it's the currently selected row, deselect it
      // Otherwise, select the first index in the array
      if (selectedIndices.length > 0) {
        const newSelectedIndex = selectedIndices[0];
        setSelectedRow(selectedRow === newSelectedIndex ? null : newSelectedIndex);
      } else {
        setSelectedRow(null);
      }
    };
    
    return (
      <div style={{ display: 'flex', gap: '2rem', flexDirection: 'row', alignItems: 'flex-start' }}>
        <div style={{ flex: '1' }}>
          <Table
            {...args}
            selectable={true}
            selectedRows={selectedRow !== null ? [selectedRow] : []}
            onRowSelect={handleRowSelect}
          />
        </div>
        
        {selectedRow !== null && (
          <div style={{ 
            flex: '1',
            padding: '1.5rem',
            backgroundColor: '#f9fafb',
            borderRadius: '8px',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
            maxWidth: '400px'
          }}>
            <h3 style={{ marginTop: 0 }}>Request Details</h3>
            
            <div style={{ marginBottom: '1rem' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>Request ID</h4>
              <p style={{ margin: '0' }}>{args.rows[selectedRow][0].text}</p>
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>Requester</h4>
              <p style={{ margin: '0' }}>{args.rows[selectedRow][1].text}</p>
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>Type</h4>
              <p style={{ margin: '0' }}>{args.rows[selectedRow][2].text}</p>
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>Date Submitted</h4>
              <p style={{ margin: '0' }}>{args.rows[selectedRow][3].text}</p>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>Status</h4>
              <p style={{ margin: '0' }}>{args.rows[selectedRow][4].text}</p>
            </div>
            
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button style={{ 
                padding: '0.5rem 1rem', 
                backgroundColor: '#10b981', 
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                flex: '1'
              }}>
                Approve
              </button>
              
              <button style={{ 
                padding: '0.5rem 1rem', 
                backgroundColor: '#ef4444', 
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                flex: '1'
              }}>
                Reject
              </button>
            </div>
          </div>
        )}
      </div>
    );
  },
  args: {
    caption: 'Request Queue',
    hasHorizontalBorders: true,
    isStriped: true,
    hasShadow: true,
    color: 'green',
    headers: [
      { text: 'Request ID' },
      { text: 'Requester' },
      { text: 'Type' },
      { text: 'Date' },
      { text: 'Status' }
    ],
    rows: [
      [
        { text: 'REQ-001' },
        { text: 'John Doe' },
        { text: 'Time Off' },
        { text: '2023-06-15' },
        { text: 'Pending' }
      ],
      [
        { text: 'REQ-002' },
        { text: 'Jane Smith' },
        { text: 'Expense' },
        { text: '2023-06-16' },
        { text: 'Pending' }
      ],
      [
        { text: 'REQ-003' },
        { text: 'Robert Johnson' },
        { text: 'Equipment' },
        { text: '2023-06-17' },
        { text: 'Pending' }
      ],
      [
        { text: 'REQ-004' },
        { text: 'Maria Garcia' },
        { text: 'Time Off' },
        { text: '2023-06-18' },
        { text: 'Pending' }
      ],
      [
        { text: 'REQ-005' },
        { text: 'James Wilson' },
        { text: 'Expense' },
        { text: '2023-06-19' },
        { text: 'Pending' }
      ],
      [
        { text: 'REQ-006' },
        { text: 'Patricia Martinez' },
        { text: 'Training' },
        { text: '2023-06-20' },
        { text: 'Pending' }
      ],
      [
        { text: 'REQ-007' },
        { text: 'Michael Brown' },
        { text: 'Equipment' },
        { text: '2023-06-21' },
        { text: 'Pending' }
      ],
      [
        { text: 'REQ-008' },
        { text: 'Sarah Davis' },
        { text: 'Time Off' },
        { text: '2023-06-22' },
        { text: 'Pending' }
      ]
    ]
  }
}; 