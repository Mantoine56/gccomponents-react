import { TableCell } from './Table.types';

/**
 * Filters rows based on filter values
 * @param rows - Array of rows to filter
 * @param filterValues - Record of filter values by column index
 * @param filterCaseSensitive - Whether filtering should be case sensitive
 * @returns Filtered rows
 */
export const filterRows = (
  rows: TableCell[][],
  filterValues: Record<number, string>,
  filterCaseSensitive: boolean = false
): TableCell[][] => {
  // If no filter values, return all rows
  const hasFilters = Object.keys(filterValues).length > 0;
  if (!hasFilters) return rows;
  
  return rows.filter(row => {
    return Object.entries(filterValues).every(([colIndex, filterValue]) => {
      if (!filterValue.trim()) return true;
      
      const columnIndex = parseInt(colIndex, 10);
      const cellValue = row[columnIndex]?.text || '';
      
      if (filterCaseSensitive) {
        return cellValue.includes(filterValue);
      } else {
        return cellValue.toLowerCase().includes(filterValue.toLowerCase());
      }
    });
  });
};

/**
 * Gets visible rows based on pagination
 * @param rows - Array of rows to paginate
 * @param hasPagination - Whether pagination is enabled
 * @param currentPage - Current page number (1-indexed)
 * @param itemsPerPage - Number of items per page
 * @returns Visible rows for the current page
 */
export const getPaginatedRows = (
  rows: TableCell[][],
  hasPagination: boolean,
  currentPage: number,
  itemsPerPage: number
): TableCell[][] => {
  if (!hasPagination || !rows.length) return rows;
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, rows.length);
  return rows.slice(startIndex, endIndex);
};

/**
 * Calculates the total number of columns including selection column
 * @param headerCount - Number of headers
 * @param selectable - Whether the table has selectable rows
 * @returns Total number of columns
 */
export const getEffectiveColumnCount = (
  headerCount: number,
  selectable: boolean
): number => {
  return headerCount + (selectable ? 1 : 0);
};

/**
 * Checks if all visible rows are selected
 * @param visibleRows - Array of visible rows
 * @param selectedRows - Array of selected row indices
 * @param hasPagination - Whether pagination is enabled
 * @param currentPage - Current page number (1-indexed)
 * @param itemsPerPage - Number of items per page
 * @returns Whether all visible rows are selected
 */
export const areAllRowsSelected = (
  visibleRows: TableCell[][],
  selectedRows: number[],
  hasPagination: boolean,
  currentPage: number,
  itemsPerPage: number
): boolean => {
  if (!visibleRows.length) return false;
  
  return visibleRows.every((_, index) => 
    selectedRows.includes(
      hasPagination ? (currentPage - 1) * itemsPerPage + index : index
    )
  );
}; 