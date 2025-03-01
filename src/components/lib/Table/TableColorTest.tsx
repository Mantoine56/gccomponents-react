import React from 'react';
import { Table } from './Table';

/**
 * Component to test the color themes of the Table component.
 * Renders 4 different tables with different color themes: default, blue, green, red, and purple.
 */
export const TableColorTest: React.FC = () => {
  // Sample headers and rows for the tables
  const headers = [
    { text: 'Name' },
    { text: 'Position' },
    { text: 'Department' }
  ];
  
  const rows = [
    [
      { text: 'John Doe' },
      { text: 'Developer' },
      { text: 'Engineering' }
    ],
    [
      { text: 'Jane Smith' },
      { text: 'Designer' },
      { text: 'Design' }
    ],
    [
      { text: 'Bob Johnson' },
      { text: 'Manager' },
      { text: 'Operations' }
    ]
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h2>Default Theme</h2>
        <Table
          caption="Default Theme Table"
          headers={headers}
          rows={rows}
          isStriped={true}
          hasHorizontalBorders={true}
        />
      </div>

      <div>
        <h2>Blue Theme</h2>
        <Table
          caption="Blue Theme Table"
          headers={headers}
          rows={rows}
          isStriped={true}
          hasHorizontalBorders={true}
          color="blue"
        />
      </div>

      <div>
        <h2>Green Theme</h2>
        <Table
          caption="Green Theme Table"
          headers={headers}
          rows={rows}
          isStriped={true}
          hasHorizontalBorders={true}
          color="green"
        />
      </div>

      <div>
        <h2>Red Theme</h2>
        <Table
          caption="Red Theme Table"
          headers={headers}
          rows={rows}
          isStriped={true}
          hasHorizontalBorders={true}
          color="red"
        />
      </div>

      <div>
        <h2>Purple Theme</h2>
        <Table
          caption="Purple Theme Table"
          headers={headers}
          rows={rows}
          isStriped={true}
          hasHorizontalBorders={true}
          color="purple"
        />
      </div>
    </div>
  );
}; 