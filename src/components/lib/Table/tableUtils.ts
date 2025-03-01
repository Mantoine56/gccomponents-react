import { TableCell, TableHeader } from './Table.types';

/**
 * TableLogger - A utility for handling errors and logging in the Table component
 * Provides consistent error handling and logging functionality
 */
export class TableLogger {
  private static isProduction = process.env.NODE_ENV === 'production';
  private static prefix = '[Table Component]';

  /**
   * Log an informational message
   * @param message - The message to log
   * @param data - Optional data to include
   */
  static info(message: string, data?: unknown): void {
    if (!this.isProduction) {
      console.info(`${this.prefix} ${message}`, data !== undefined ? data : '');
    }
  }

  /**
   * Log a warning message
   * @param message - The warning message
   * @param data - Optional data to include
   */
  static warn(message: string, data?: unknown): void {
    console.warn(`${this.prefix} ${message}`, data !== undefined ? data : '');
  }

  /**
   * Log an error message
   * @param message - The error message
   * @param error - Optional error object
   */
  static error(message: string, error?: unknown): void {
    console.error(`${this.prefix} ${message}`, error !== undefined ? error : '');
  }

  /**
   * Handle an error safely
   * @param error - The error to handle
   * @param fallback - Optional fallback value to return
   * @param context - Optional context about where the error occurred
   */
  static handleError<T>(error: unknown, fallback: T, context: string): T {
    const errorMessage = error instanceof Error ? error.message : String(error);
    this.error(`${context}: ${errorMessage}`, error);
    return fallback;
  }

  /**
   * Validate required table data
   * @param headers - Table headers
   * @param rows - Table rows
   * @returns Whether the data is valid
   */
  static validateTableData(headers: TableHeader[], rows: TableCell[][]): boolean {
    if (!Array.isArray(headers)) {
      this.error('Invalid headers: Expected an array');
      return false;
    }

    if (!Array.isArray(rows)) {
      this.error('Invalid rows: Expected an array');
      return false;
    }

    // Check for header consistency
    if (headers.length > 0 && rows.length > 0) {
      const inconsistentRows = rows.filter(row => row.length !== headers.length);
      if (inconsistentRows.length > 0) {
        this.warn(`Inconsistent row length: ${inconsistentRows.length} rows do not match header count (${headers.length})`);
      }
    }

    return true;
  }
}

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
  try {
    // If no filter values, return all rows
    const hasFilters = Object.keys(filterValues).length > 0;
    if (!hasFilters) return rows;
    
    return rows.filter(row => {
      return Object.entries(filterValues).every(([colIndex, filterValue]) => {
        if (!filterValue.trim()) return true;
        
        const columnIndex = parseInt(colIndex, 10);
        // Add null check to avoid runtime errors
        if (columnIndex < 0 || columnIndex >= row.length || !row[columnIndex]) {
          return false;
        }
        
        const cellValue = row[columnIndex]?.text || '';
        
        if (filterCaseSensitive) {
          return cellValue.includes(filterValue);
        } else {
          return cellValue.toLowerCase().includes(filterValue.toLowerCase());
        }
      });
    });
  } catch (error) {
    TableLogger.handleError(error, rows, 'Error filtering rows');
    return rows;
  }
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
  try {
    if (!hasPagination || !rows.length) return rows;
    
    // Validate inputs
    if (currentPage < 1) {
      TableLogger.warn('Invalid page number: Using page 1 instead');
      currentPage = 1;
    }
    
    if (itemsPerPage < 1) {
      TableLogger.warn('Invalid items per page: Using 10 items instead');
      itemsPerPage = 10;
    }
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, rows.length);
    
    // Ensure startIndex is within bounds
    if (startIndex >= rows.length) {
      TableLogger.warn(`Page ${currentPage} is out of bounds: Returning last page`);
      return getPaginatedRows(rows, hasPagination, Math.ceil(rows.length / itemsPerPage), itemsPerPage);
    }
    
    return rows.slice(startIndex, endIndex);
  } catch (error) {
    TableLogger.handleError(error, rows, 'Error paginating rows');
    return rows;
  }
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
  try {
    if (!visibleRows.length) return false;
    
    return visibleRows.every((_, index) => 
      selectedRows.includes(
        hasPagination ? (currentPage - 1) * itemsPerPage + index : index
      )
    );
  } catch (error) {
    TableLogger.handleError(error, false, 'Error checking row selection');
    return false;
  }
};

/**
 * Debounce function to limit the rate at which a function can fire
 * @param fn - The function to debounce
 * @param wait - The number of milliseconds to wait
 * @returns Debounced function
 */
export const debounce = <T extends (...args: unknown[]) => unknown>(
  fn: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;
  
  return function(...args: Parameters<T>) {
    if (timeout) {
      clearTimeout(timeout);
    }
    
    timeout = setTimeout(() => {
      fn(...args);
    }, wait);
  };
}; 