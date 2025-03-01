import React, { useState, useEffect } from 'react';
import './Table.css';

/**
 * TableHeader interface for column headers
 */
export interface TableHeader {
  /**
   * Text content for the header
   */
  text: string;
  
  /**
   * Optional HTML content (use carefully for accessibility)
   */
  html?: string;
  
  /**
   * Optional id for the header
   */
  id?: string;
  
  /**
   * Optional sort direction for the column
   */
  sortDirection?: 'none' | 'asc' | 'desc';
  
  /**
   * Whether the column is sortable
   */
  sortable?: boolean;

  /**
   * Whether the column is filterable
   */
  filterable?: boolean;
}

/**
 * TableCell interface for row cells
 */
export interface TableCell {
  /**
   * Text content for the cell
   */
  text: string;
  
  /**
   * Optional HTML content (use carefully for accessibility)
   */
  html?: string;
  
  /**
   * Optional id for the cell
   */
  id?: string;
}

/**
 * Props for the Table component
 */
export interface TableProps {
  /**
   * A descriptive title for the table, important for accessibility
   */
  caption?: string;
  
  /**
   * Additional CSS classes for the caption
   */
  captionClasses?: string;
  
  /**
   * Whether to display horizontal borders between rows
   * @default true
   */
  hasHorizontalBorders?: boolean;
  
  /**
   * Whether to display vertical borders between columns
   * @default false
   */
  hasVerticalBorders?: boolean;
  
  /**
   * Whether to display borders around all cells (grid layout)
   * @default false
   */
  hasCellBorders?: boolean;
  
  /**
   * Whether to display alternating row background colors
   * @default false
   */
  isStriped?: boolean;
  
  /**
   * Whether the table is responsive (horizontally scrollable on small screens)
   * @default true
   */
  isResponsive?: boolean;
  
  /**
   * Controls the density of the table rows
   * - 'default': Standard spacing
   * - 'compact': Reduced padding
   * - 'dense': Minimum padding, smaller text
   * @default 'default'
   */
  density?: 'default' | 'compact' | 'dense';
  
  /**
   * Whether the first cell in each row is a header
   * @default false
   */
  firstCellIsHeader?: boolean;
  
  /**
   * The language of the component
   * @default 'en'
   */
  lang?: 'en' | 'fr';
  
  /**
   * Array of header objects for table headers
   */
  headers: TableHeader[];
  
  /**
   * Array of arrays containing row data
   */
  rows: TableCell[][];
  
  /**
   * Whether to enable pagination
   * @default false
   */
  hasPagination?: boolean;
  
  /**
   * Where to display pagination controls
   * @default 'bottom'
   */
  paginationPosition?: 'top' | 'bottom' | 'both';
  
  /**
   * Number of items to display per page
   * @default 10
   */
  itemsPerPage?: number;
  
  /**
   * Current active page
   * @default 1
   */
  currentPage?: number;
  
  /**
   * Total number of items across all pages
   * If not provided, uses rows.length
   */
  totalItems?: number;
  
  /**
   * Callback function when page changes
   */
  onPageChange?: (page: number) => void;
  
  /**
   * Callback function when a sortable column header is clicked
   */
  onSort?: (columnIndex: number, direction: 'asc' | 'desc') => void;
  
  /**
   * Whether to enable row selection
   * @default false
   */
  selectable?: boolean;
  
  /**
   * Type of selection allowed
   * @default 'multiple'
   */
  selectionType?: 'single' | 'multiple';
  
  /**
   * Array of indices of pre-selected rows
   */
  selectedRows?: number[];
  
  /**
   * Callback function when row selection changes
   */
  onRowSelect?: (selectedIndices: number[]) => void;
  
  /**
   * Whether to make the table a data table with additional features
   * @default false
   */
  isDataTable?: boolean;
  
  /**
   * Custom empty state message when there are no rows
   */
  emptyStateMessage?: string;
  
  /**
   * Custom renderer for empty state
   */
  emptyStateRenderer?: React.ReactNode;
  
  // New props inspired by Flowbite
  hasShadow?: boolean;
  hasStripedColumns?: boolean;
  color?: 'blue' | 'green' | 'red' | 'purple';
  hasHoverEffect?: boolean;
  isCardStyle?: boolean;
  stackOnMobile?: boolean;

  /**
   * Whether to enable column filtering
   * @default false
   */
  isFilterable?: boolean;

  /**
   * Filter placeholder text
   * @default 'Filter...'
   */
  filterPlaceholder?: string;

  /**
   * Callback when filter values change
   */
  onFilter?: (filterValues: Record<number, string>) => void;

  /**
   * Whether the filter should be case sensitive
   * @default false
   */
  filterCaseSensitive?: boolean;

  /**
   * Whether to enable header click-to-filter
   * @default false
   */
  hasHeaderFilters?: boolean;

  /**
   * Array of column indices that should have header filters
   * If not provided, all columns have header filters when hasHeaderFilters is true
   */
  filterableHeaders?: number[];
}

/**
 * Table component
 * 
 * A structured data display component that allows users to view and interact
 * with tabular data. It supports various styling options, responsive behavior,
 * and pagination for large datasets.
 * 
 * This component follows the GCDS design system guidelines for consistent
 * appearance and behavior with other GCDS components.
 */
export const Table: React.FC<TableProps> = ({
  caption,
  captionClasses,
  hasHorizontalBorders = true,
  hasVerticalBorders = false,
  hasCellBorders = false,
  isStriped = false,
  isResponsive = true,
  density = 'default',
  firstCellIsHeader = false,
  lang = 'en',
  headers = [],
  rows = [],
  hasPagination = false,
  paginationPosition = 'bottom',
  itemsPerPage = 10,
  currentPage: externalCurrentPage,
  totalItems,
  onPageChange,
  onSort,
  selectable = false,
  selectionType = 'multiple',
  selectedRows: externalSelectedRows,
  onRowSelect,
  isDataTable = false,
  emptyStateMessage,
  emptyStateRenderer,
  
  // New props with default values
  hasShadow = false,
  hasStripedColumns = false,
  color,
  hasHoverEffect = false,
  isCardStyle = false,
  stackOnMobile = false,

  // Filter props
  isFilterable = false,
  filterPlaceholder = 'Filter...',
  onFilter,
  filterCaseSensitive = false,
  
  // New header filter props
  hasHeaderFilters = false,
  filterableHeaders,
}) => {
  // State for internal pagination when not controlled externally
  const [internalCurrentPage, setInternalCurrentPage] = useState(externalCurrentPage || 1);
  
  // State for internal row selection when not controlled externally
  const [internalSelectedRows, setInternalSelectedRows] = useState<number[]>(externalSelectedRows || []);
  
  // State for filter values
  const [filterValues, setFilterValues] = useState<Record<number, string>>({});
  
  // State to manage which filter dropdown is open
  const [activeFilterColumn, setActiveFilterColumn] = useState<number | null>(null);
  
  // State for temporary filter values (before applying)
  const [tempFilterValue, setTempFilterValue] = useState<string>('');
  
  // Use either controlled or uncontrolled current page
  const activePage = externalCurrentPage !== undefined ? externalCurrentPage : internalCurrentPage;
  
  // Use either controlled or uncontrolled selected rows
  const activeSelectedRows = externalSelectedRows !== undefined ? externalSelectedRows : internalSelectedRows;
  
  // Calculate total pages
  const effectiveTotalItems = totalItems !== undefined ? totalItems : rows.length;
  const totalPages = Math.ceil(effectiveTotalItems / itemsPerPage);
  
  // Update internal page when external page changes
  useEffect(() => {
    if (externalCurrentPage !== undefined) {
      setInternalCurrentPage(externalCurrentPage);
    }
  }, [externalCurrentPage]);
  
  // Update internal selected rows when external selection changes
  useEffect(() => {
    if (externalSelectedRows !== undefined) {
      setInternalSelectedRows(externalSelectedRows);
    }
  }, [externalSelectedRows]);
  
  // Function to handle page changes
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    
    setInternalCurrentPage(pageNumber);
    
    // Call the external handler if provided
    if (onPageChange) {
      onPageChange(pageNumber);
    }
  };
  
  // Function to handle click outside filter dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeFilterColumn !== null) {
        const target = event.target as HTMLElement;
        const filterDropdown = document.querySelector('.gcds-table__filter-dropdown');
        
        // Don't close if clicking within the dropdown
        if (filterDropdown && !filterDropdown.contains(target) && 
            !target.classList.contains('gcds-table__header-filter-icon')) {
          setActiveFilterColumn(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeFilterColumn]);
  
  // Get visible rows based on pagination and filtering
  const getVisibleRows = () => {
    let filteredRows = rows;
    
    // Apply filtering if enabled and there are filter values
    const hasFilters = Object.keys(filterValues).length > 0;
    
    if ((isFilterable || hasHeaderFilters) && hasFilters) {
      filteredRows = rows.filter(row => {
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
    }
    
    // Then apply pagination
    if (!hasPagination || !filteredRows.length) return filteredRows;
    
    const startIndex = (activePage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredRows.length);
    return filteredRows.slice(startIndex, endIndex);
  };
  
  // Handle sort
  const handleSort = (columnIndex: number, header: TableHeader) => {
    if (!header.sortable || !onSort) return;

    const newDirection = header.sortDirection === 'asc' ? 'desc' : 'asc';
    onSort(columnIndex, newDirection);
  };
  
  // This handles row selection checkboxes
  const handleRowSelect = (rowIndex: number) => {
    if (!selectable) return;
    
    let newSelectedRows = [...internalSelectedRows];
    
    if (selectionType === 'single') {
      // Single selection mode: only one row can be selected
      newSelectedRows = newSelectedRows.includes(rowIndex) ? [] : [rowIndex];
    } else {
      // Multiple selection mode: toggle selection
      if (newSelectedRows.includes(rowIndex)) {
        newSelectedRows = newSelectedRows.filter(idx => idx !== rowIndex);
      } else {
        newSelectedRows.push(rowIndex);
      }
    }
    
    setInternalSelectedRows(newSelectedRows);
    onRowSelect?.(newSelectedRows);
  };
  
  // Handle select all rows
  const handleSelectAll = () => {
    if (!selectable || selectionType === 'single') return;
    
    const visibleRows = getVisibleRows();
    const visibleIndices = visibleRows.map((_, index) => 
      hasPagination ? (activePage - 1) * itemsPerPage + index : index
    );
    
    // If all visible rows are selected, deselect all; otherwise, select all
    const allSelected = visibleIndices.every(index => activeSelectedRows.includes(index));
    const newSelectedRows = allSelected ? [] : visibleIndices;
    
    // Update internal state
    setInternalSelectedRows(newSelectedRows);
    
    // Call external handler if provided
    if (onRowSelect) {
      onRowSelect(newSelectedRows);
    }
  };

  // Function to calculate the total number of columns including selection column
  const getEffectiveColumnCount = (): number => {
    return headers.length + (selectable ? 1 : 0);
  };

  // Handle filter icon click
  const toggleFilterDropdown = (columnIndex: number, event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent sort from triggering if header is also sortable
    
    if (activeFilterColumn === columnIndex) {
      setActiveFilterColumn(null);
    } else {
      setActiveFilterColumn(columnIndex);
      setTempFilterValue(filterValues[columnIndex] || '');
    }
  };

  // Apply filter from dropdown
  const applyFilter = () => {
    if (activeFilterColumn !== null) {
      const newFilterValues = { ...filterValues };
      
      if (tempFilterValue.trim()) {
        newFilterValues[activeFilterColumn] = tempFilterValue;
      } else {
        delete newFilterValues[activeFilterColumn];
      }
      
      setFilterValues(newFilterValues);
      setActiveFilterColumn(null);
      
      // Call external handler if provided
      if (onFilter) {
        onFilter(newFilterValues);
      }
    }
  };

  // Clear filter for specific column
  const clearColumnFilter = () => {
    if (activeFilterColumn !== null) {
      const newFilterValues = { ...filterValues };
      delete newFilterValues[activeFilterColumn];
      
      setFilterValues(newFilterValues);
      setTempFilterValue('');
      setActiveFilterColumn(null);
      
      // Call external handler if provided
      if (onFilter) {
        onFilter(newFilterValues);
      }
    }
  };

  // Create table headers
  const renderHeaders = () => {
    return (
      <thead className="gcds-table__head">
        <tr className="gcds-table__row">
          {/* Select all checkbox for multiple selection */}
          {selectable && selectionType === 'multiple' && (
            <th className="gcds-table__header gcds-table__checkbox-cell">
              <input
                type="checkbox"
                className="gcds-table__checkbox"
                checked={
                  getVisibleRows().length > 0 &&
                  getVisibleRows().every((_, index) => 
                    activeSelectedRows.includes(
                      hasPagination ? (activePage - 1) * itemsPerPage + index : index
                    )
                  )
                }
                onChange={handleSelectAll}
                aria-label={lang === 'en' ? 'Select all rows' : 'Sélectionner toutes les lignes'}
              />
            </th>
          )}
          
          {headers.map((header, index) => {
            const sortableClass = header.sortable ? 'gcds-table__header--sortable' : '';
            const sortDirectionClass = header.sortDirection && header.sortDirection !== 'none' 
              ? `gcds-table__header--${header.sortDirection}` 
              : '';
            
            // Determine if this column should have a filter
            const isFilterableHeader = hasHeaderFilters && 
              (!filterableHeaders || filterableHeaders.includes(index));
            
            const filterableClass = isFilterableHeader ? 'gcds-table__header--filterable' : '';
            const hasActiveFilter = filterValues[index] !== undefined;
            
            return (
              <th 
                key={header.id || `header-${index}`} 
                scope="col" 
                className={`gcds-table__header ${sortableClass} ${sortDirectionClass} ${filterableClass}`}
                onClick={header.sortable ? () => handleSort(index, header) : undefined}
                aria-sort={header.sortDirection === 'asc' ? 'ascending' : header.sortDirection === 'desc' ? 'descending' : undefined}
              >
                <div className="gcds-table__header-content">
                  {header.html ? (
                    <span dangerouslySetInnerHTML={{ __html: header.html }} />
                  ) : (
                    header.text
                  )}
                  
                  {/* Filter icon for filterable columns */}
                  {isFilterableHeader && (
                    <span 
                      className={`gcds-table__header-filter-icon ${hasActiveFilter ? 'gcds-table__header-filter-icon--active' : ''}`}
                      onClick={(e) => toggleFilterDropdown(index, e)}
                      aria-label={`Filter by ${header.text}`}
                      title={`Filter by ${header.text}`}
                    >
                      {/* Filter icon (funnel shape) */}
                      ⋮⋮
                      {hasActiveFilter && (
                        <span className="gcds-table__filter-badge-count">1</span>
                      )}
                    </span>
                  )}
                  
                  {/* Filter dropdown */}
                  {activeFilterColumn === index && (
                    <div className="gcds-table__filter-dropdown">
                      <div className="gcds-table__filter-dropdown-header">
                        <span className="gcds-table__filter-dropdown-title">
                          {lang === 'en' ? 'Filter by' : 'Filtrer par'} {header.text}
                        </span>
                        <button 
                          className="gcds-table__filter-dropdown-close"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveFilterColumn(null);
                          }}
                          aria-label={lang === 'en' ? 'Close filter' : 'Fermer le filtre'}
                        >
                          ✕
                        </button>
                      </div>
                      
                      <div className="gcds-table__filter-input-group">
                        <input
                          type="text"
                          className="gcds-table__filter-input"
                          placeholder={filterPlaceholder}
                          value={tempFilterValue}
                          onChange={(e) => setTempFilterValue(e.target.value)}
                          aria-label={`Filter by ${header.text}`}
                          // Auto-focus the input when dropdown opens
                          autoFocus
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                      
                      <div className="gcds-table__filter-actions">
                        <button 
                          className="gcds-table__filter-button gcds-table__filter-button--clear"
                          onClick={(e) => {
                            e.stopPropagation();
                            clearColumnFilter();
                          }}
                        >
                          {lang === 'en' ? 'Clear' : 'Effacer'}
                        </button>
                        <button 
                          className="gcds-table__filter-button gcds-table__filter-button--apply"
                          onClick={(e) => {
                            e.stopPropagation();
                            applyFilter();
                          }}
                        >
                          {lang === 'en' ? 'Apply' : 'Appliquer'}
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {header.sortable && (
                    <span className="gcds-table__sort-icon" aria-hidden="true">
                      {header.sortDirection === 'asc' ? '▲' : header.sortDirection === 'desc' ? '▼' : ''}
                    </span>
                  )}
                </div>
              </th>
            );
          })}
        </tr>
      </thead>
    );
  };

  // Render table rows with proper classes for selection state
  const renderRows = () => {
    if (!rows || rows.length === 0) {
      return (
        <tr>
          <td colSpan={getEffectiveColumnCount()} className="gcds-table__empty-state">
            {emptyStateRenderer 
              ? emptyStateRenderer 
              : <span>{emptyStateMessage || 'No data available'}</span>
            }
          </td>
        </tr>
      );
    }

    const visibleRows = getVisibleRows();

    return visibleRows.map((row, rowIndex) => {
      const absoluteRowIndex = hasPagination 
        ? (activePage - 1) * itemsPerPage + rowIndex 
        : rowIndex;
      const isSelected = activeSelectedRows.includes(absoluteRowIndex);
      const rowClassNames = [
        'gcds-table__row',
        isStriped && rowIndex % 2 !== 0 ? 'gcds-table__row--striped' : '',
        isSelected ? 'gcds-table__row--selected' : '',
      ].filter(Boolean).join(' ');
      
      return (
        <tr 
          key={`row-${rowIndex}`} 
          className={rowClassNames}
          onClick={selectable ? () => handleRowSelect(absoluteRowIndex) : undefined}
          aria-selected={isSelected ? 'true' : undefined}
        >
          {selectable && (
            <td className="gcds-table__cell gcds-table__cell--selection">
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => handleRowSelect(absoluteRowIndex)}
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
    });
  };

  // Render pagination controls
  const renderPagination = () => {
    // Don't render pagination if there's only one page
    if (!hasPagination || totalPages <= 1) return null;
    
    // Maximum number of page buttons to show
    const maxPageButtons = 5;
    
    // Calculate which page buttons to show
    const pageButtons: (number | string)[] = [];
    
    if (totalPages <= maxPageButtons) {
      // Show all pages if there are fewer than maxPageButtons
      for (let i = 1; i <= totalPages; i++) {
        pageButtons.push(i);
      }
    } else {
      // Always show first and last pages
      // Show pages around the current page for context
      pageButtons.push(1);
      
      // Calculate start and end of the middle section
      let startPage = Math.max(2, activePage - 1);
      let endPage = Math.min(totalPages - 1, activePage + 1);
      
      // Adjust if we're near the beginning
      if (activePage <= 3) {
        endPage = Math.min(totalPages - 1, maxPageButtons - 1);
      }
      
      // Adjust if we're near the end
      if (activePage >= totalPages - 2) {
        startPage = Math.max(2, totalPages - (maxPageButtons - 2));
      }
      
      // Add ellipsis if there's a gap after the first page
      if (startPage > 2) {
        pageButtons.push('ellipsis-start');
      }
      
      // Add the middle pages
      for (let i = startPage; i <= endPage; i++) {
        pageButtons.push(i);
      }
      
      // Add ellipsis if there's a gap before the last page
      if (endPage < totalPages - 1) {
        pageButtons.push('ellipsis-end');
      }
      
      // Add the last page
      if (totalPages > 1) {
        pageButtons.push(totalPages);
      }
    }
    
    // Text for previous/next buttons
    const prevText = lang === 'en' ? 'Previous' : 'Précédent';
    const nextText = lang === 'en' ? 'Next' : 'Suivant';
    
    return (
      <div className="gcds-table__pagination">
        <div className="gcds-pagination">
          <ul className="gcds-pagination__list">
            {/* Previous button */}
            <li className="gcds-pagination__item">
              <button
                className="gcds-pagination__button gcds-pagination__button--prev"
                onClick={() => handlePageChange(Math.max(1, activePage - 1))}
                disabled={activePage === 1}
                aria-label={lang === 'en' ? 'Go to previous page' : 'Aller à la page précédente'}
              >
                {prevText}
              </button>
            </li>
            
            {/* Page number buttons */}
            {pageButtons.map((page, index) => {
              if (page === 'ellipsis-start' || page === 'ellipsis-end') {
                return (
                  <li key={`ellipsis-${index}`} className="gcds-pagination__item">
                    <span className="gcds-pagination__ellipsis">...</span>
                  </li>
                );
              }
              
              const pageNum = page as number;
              return (
                <li key={`page-${pageNum}`} className="gcds-pagination__item">
                  <button
                    className={`gcds-pagination__button ${activePage === pageNum ? 'gcds-pagination__button--current' : ''}`}
                    onClick={() => handlePageChange(pageNum)}
                    aria-label={lang === 'en' ? `Go to page ${pageNum}` : `Aller à la page ${pageNum}`}
                    aria-current={activePage === pageNum ? 'page' : undefined}
                  >
                    {pageNum}
                  </button>
                </li>
              );
            })}
            
            {/* Next button */}
            <li className="gcds-pagination__item">
              <button
                className="gcds-pagination__button gcds-pagination__button--next"
                onClick={() => handlePageChange(Math.min(totalPages, activePage + 1))}
                disabled={activePage === totalPages}
                aria-label={lang === 'en' ? 'Go to next page' : 'Aller à la page suivante'}
              >
                {nextText}
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  // Build table classes based on props
  const tableClasses = [
    'gcds-table',
    hasHorizontalBorders && 'gcds-table--horizontal-borders',
    hasVerticalBorders && 'gcds-table--vertical-borders',
    hasCellBorders && 'gcds-table--cell-borders',
    isStriped && 'gcds-table--striped',
    isResponsive && 'gcds-table--responsive',
    density !== 'default' && `gcds-table--${density}`,
    isDataTable && 'gcds-table--data-table',
    
    // New classes based on new props
    hasShadow && 'gcds-table--shadow',
    hasStripedColumns && 'gcds-table--striped-columns',
    color && `gcds-table--${color}`,
    hasHoverEffect && 'gcds-table--hover',
    isCardStyle && 'gcds-table--card',
    stackOnMobile && 'gcds-table--stack',
  ].filter(Boolean).join(' ');

  // Table wrapper classes for responsive behavior
  const wrapperClasses = 'gcds-table-wrapper';

  return (
    <div className={wrapperClasses} data-lang={lang}>
      {/* Top pagination if enabled */}
      {hasPagination && (paginationPosition === 'top' || paginationPosition === 'both') && renderPagination()}
      
      <table className={tableClasses}>
        {caption && (
          <caption className={captionClasses || 'gcds-table__caption'}>
            {caption}
          </caption>
        )}
        {headers.length > 0 && renderHeaders()}
        <tbody className="gcds-table__body">
          {renderRows()}
        </tbody>
      </table>
      
      {/* Bottom pagination if enabled */}
      {hasPagination && (paginationPosition === 'bottom' || paginationPosition === 'both') && renderPagination()}
    </div>
  );
};

export default Table; 