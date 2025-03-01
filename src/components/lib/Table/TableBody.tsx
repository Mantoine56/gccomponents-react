import React from 'react';
import './TableBody.css';
import { TableCell } from './Table.types';

/**
 * Props for the TableBody component
 */
export interface TableBodyProps {
  /**
   * Array of rows, each containing an array of cell objects
   */
  rows: TableCell[][];
  
  /**
   * Whether the table has selectable rows
   */
  selectable?: boolean;
  
  /**
   * Array of selected row indices
   */
  selectedRows: number[];
  
  /**
   * Whether the table has striped rows
   */
  isStriped?: boolean;
  
  /**
   * Whether the first cell in each row should be a header
   */
  firstCellIsHeader?: boolean;
  
  /**
   * Whether the table has pagination
   */
  hasPagination?: boolean;
  
  /**
   * Current page number (1-indexed)
   */
  currentPage: number;
  
  /**
   * Number of items per page
   */
  itemsPerPage: number;
  
  /**
   * Message to display when there are no rows
   */
  emptyStateMessage?: string;
  
  /**
   * Custom renderer for empty state
   */
  emptyStateRenderer?: React.ReactNode;
  
  /**
   * Callback for when a row is selected
   */
  onRowSelect?: (rowIndex: number) => void;
  
  /**
   * Function to get the total number of columns including selection column
   */
  getEffectiveColumnCount: () => number;
}

/**
 * TableBody component for rendering the body of a table
 * This component handles row rendering, selection, and empty states
 */
export const TableBodyComponent: React.FC<TableBodyProps> = ({
  rows,
  selectable = false,
  selectedRows = [],
  isStriped = false,
  firstCellIsHeader = false,
  hasPagination = false,
  currentPage = 1,
  itemsPerPage = 10,
  emptyStateMessage = 'No data available',
  emptyStateRenderer,
  onRowSelect,
  getEffectiveColumnCount,
}) => {
  // Render empty state if there are no rows
  if (!rows || rows.length === 0) {
    return (
      <tbody className="gcds-table__body">
        <tr>
          <td colSpan={getEffectiveColumnCount()} className="gcds-table__empty-state">
            {emptyStateRenderer 
              ? emptyStateRenderer 
              : <span>{emptyStateMessage}</span>
            }
          </td>
        </tr>
      </tbody>
    );
  }
  
  return (
    <tbody className="gcds-table__body">
      {rows.map((row, rowIndex) => {
        const absoluteRowIndex = hasPagination 
          ? (currentPage - 1) * itemsPerPage + rowIndex 
          : rowIndex;
        const isSelected = selectedRows.includes(absoluteRowIndex);
        const rowClassNames = [
          'gcds-table__row',
          isStriped && rowIndex % 2 !== 0 ? 'gcds-table__row--striped' : '',
          isSelected ? 'gcds-table__row--selected' : '',
        ].filter(Boolean).join(' ');
        
        return (
          <tr
            key={`row-${rowIndex}`} 
            className={rowClassNames}
            onClick={selectable && onRowSelect ? () => onRowSelect(absoluteRowIndex) : undefined}
            aria-selected={isSelected ? 'true' : undefined}
          >
            {selectable && (
              <td className="gcds-table__cell gcds-table__cell--selection">
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => onRowSelect && onRowSelect(absoluteRowIndex)}
                  aria-label={`Select row ${absoluteRowIndex + 1}`}
                  onClick={(e) => e.stopPropagation()} // Prevent row click from triggering twice
                />
              </td>
            )}
            {row.map((cell, cellIndex) => {
              // If firstCellIsHeader is true and this is the first cell in the row, render as th
              if (firstCellIsHeader && cellIndex === 0) {
                return (
                  <th
                    key={`cell-${rowIndex}-${cellIndex}`}
                    scope="row"
                    className="gcds-table__header"
                  >
                    {cell.html ? (
                      <span dangerouslySetInnerHTML={{ __html: cell.html }} />
                    ) : (
                      cell.text
                    )}
                  </th>
                );
              }
              
              // Otherwise render as td
              return (
                <td
                  key={`cell-${rowIndex}-${cellIndex}`}
                  className="gcds-table__cell"
                >
                  {cell.html ? (
                    <span dangerouslySetInnerHTML={{ __html: cell.html }} />
                  ) : (
                    cell.text
                  )}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
}; 