import React, { memo } from 'react';
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
 * Row component for better performance with memoization
 */
const TableRow = memo(({ 
  row, 
  rowIndex, 
  selectable, 
  isSelected, 
  firstCellIsHeader, 
  onSelect 
}: { 
  row: TableCell[]; 
  rowIndex: number; 
  selectable?: boolean; 
  isSelected?: boolean; 
  firstCellIsHeader?: boolean; 
  onSelect?: (rowIndex: number) => void; 
}) => {
  return (
    <tr 
      className={`gcds-table__row ${isSelected ? 'gcds-table__row--selected' : ''}`}
      aria-selected={isSelected}
    >
      {/* Selection checkbox */}
      {selectable && (
        <td className="gcds-table__cell gcds-table__checkbox-cell">
          <input
            type="checkbox"
            className="gcds-table__checkbox"
            checked={isSelected}
            onChange={() => onSelect?.(rowIndex)}
            aria-label={`Select row ${rowIndex + 1}`}
          />
        </td>
      )}
      
      {/* Render row cells */}
      {row.map((cell, cellIndex) => {
        const CellTag = firstCellIsHeader && cellIndex === 0 ? 'th' : 'td';
        const scope = firstCellIsHeader && cellIndex === 0 ? 'row' : undefined;
        
        return (
          <CellTag
            key={cell.id || `cell-${rowIndex}-${cellIndex}`}
            scope={scope}
            className="gcds-table__cell"
            data-label={firstCellIsHeader && cellIndex > 0 ? row[0].text : undefined}
          >
            {cell.html ? (
              <span dangerouslySetInnerHTML={{ __html: cell.html }} />
            ) : (
              cell.text
            )}
          </CellTag>
        );
      })}
    </tr>
  );
});

TableRow.displayName = 'TableRow';

/**
 * TableBody component for rendering the body of a table
 * This component handles row rendering, selection, and empty states
 */
export const TableBodyComponent: React.FC<TableBodyProps> = memo(({
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
  
  // Calculate row indices based on pagination
  const getRowIndex = (index: number): number => {
    return hasPagination ? (currentPage - 1) * itemsPerPage + index : index;
  };
  
  // Check if a row is selected
  const isRowSelected = (index: number): boolean => {
    return selectedRows.includes(getRowIndex(index));
  };
  
  return (
    <tbody className={`gcds-table__body ${isStriped ? 'gcds-table__body--striped' : ''}`}>
      {rows.map((row, index) => (
        <TableRow
          key={`row-${getRowIndex(index)}`}
          row={row}
          rowIndex={getRowIndex(index)}
          selectable={selectable}
          isSelected={isRowSelected(index)}
          firstCellIsHeader={firstCellIsHeader}
          onSelect={onRowSelect}
        />
      ))}
    </tbody>
  );
}, (prevProps, nextProps) => {
  // Custom comparison function to determine if the component should re-render
  
  // Check if rows data changed (reference equality)
  if (prevProps.rows !== nextProps.rows) return false;
  
  // Check if selected rows changed
  if (
    prevProps.selectedRows.length !== nextProps.selectedRows.length ||
    !prevProps.selectedRows.every((row, i) => row === nextProps.selectedRows[i])
  ) return false;
  
  // Check if pagination state changed
  if (
    prevProps.hasPagination !== nextProps.hasPagination ||
    prevProps.currentPage !== nextProps.currentPage ||
    prevProps.itemsPerPage !== nextProps.itemsPerPage
  ) return false;
  
  // If we get here, nothing important changed, so we can skip re-rendering
  return true;
}); 