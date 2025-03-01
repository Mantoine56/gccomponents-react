import React, { useState, useEffect, useMemo, useCallback } from 'react';
import './TableBase.css';
import './TableHeader.css';
import './TableBody.css';
import './TablePagination.css';
import './TableFilters.css';
import './TableResponsive.css';
import { TableProps, TableHeader } from './Table.types';
import { TableHeaderComponent } from './TableHeader';
import { TableBodyComponent } from './TableBody';
import { TablePaginationComponent } from './TablePagination';
import { 
  filterRows, 
  getPaginatedRows, 
  getEffectiveColumnCount as getColumnCount,
  areAllRowsSelected,
  TableLogger
} from './tableUtils';

/**
 * Table component with sorting, filtering, and pagination features
 * This component allows for displaying tabular data with various styling options
 * and interactive features like sorting, filtering, and pagination.
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
  // Validate table data
  if (!TableLogger.validateTableData(headers, rows)) {
    TableLogger.warn('Table rendered with invalid data structure');
  }
  
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
  
  // Use either controlled or uncontrolled current page and selection
  const activePage = useMemo(() => 
    externalCurrentPage !== undefined ? externalCurrentPage : internalCurrentPage, 
    [externalCurrentPage, internalCurrentPage]
  );
  
  const activeSelectedRows = useMemo(() => 
    externalSelectedRows !== undefined ? externalSelectedRows : internalSelectedRows,
    [externalSelectedRows, internalSelectedRows]
  );
  
  // Calculate total pages
  const effectiveTotalItems = useMemo(() => 
    totalItems !== undefined ? totalItems : rows.length, 
    [totalItems, rows.length]
  );
  
  const totalPages = useMemo(() => 
    Math.ceil(effectiveTotalItems / itemsPerPage), 
    [effectiveTotalItems, itemsPerPage]
  );
  
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
  
  // Memoize filtered rows to prevent unnecessary filtering
  const filteredRows = useMemo(() => {
    // Only apply filtering if enabled or if there are header filters
    if (!isFilterable && !hasHeaderFilters) {
      return rows;
    }
    return filterRows(rows, filterValues, filterCaseSensitive);
  }, [rows, filterValues, filterCaseSensitive, isFilterable, hasHeaderFilters]);
  
  // Get visible rows based on pagination and filters
  const getVisibleRows = useCallback(() => {
    return getPaginatedRows(
      filteredRows,
      hasPagination,
      activePage,
      itemsPerPage
    );
  }, [filteredRows, hasPagination, activePage, itemsPerPage]);
  
  // Function to handle page changes
  const handlePageChange = useCallback((pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    
    setInternalCurrentPage(pageNumber);
    
    // Call the external handler if provided
    if (onPageChange) {
      onPageChange(pageNumber);
    }
  }, [totalPages, onPageChange]);
  
  // Function to handle sorting
  const handleSort = useCallback((columnIndex: number, header: TableHeader) => {
    if (!header.sortable || !onSort) return;
    
    const currentDirection = header.sortDirection || 'none';
    let newDirection: 'asc' | 'desc';
    
    // Toggle sort direction
    if (currentDirection === 'none' || currentDirection === 'desc') {
      newDirection = 'asc';
    } else {
      newDirection = 'desc';
    }
    
    onSort(columnIndex, newDirection);
  }, [onSort]);
  
  // This handles row selection checkboxes
  const handleRowSelect = useCallback((rowIndex: number) => {
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
  }, [selectable, selectionType, internalSelectedRows, onRowSelect]);
  
  // Handle select all rows
  const handleSelectAll = useCallback(() => {
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
  }, [
    selectable, 
    selectionType, 
    getVisibleRows, 
    hasPagination, 
    activePage, 
    itemsPerPage, 
    activeSelectedRows,
    onRowSelect
  ]);
  
  // Function to calculate the total number of columns including selection column
  const getEffectiveColumnCount = useCallback((): number => {
    return getColumnCount(headers.length, selectable);
  }, [headers.length, selectable]);
  
  // Handle filter icon click
  const toggleFilterDropdown = useCallback((columnIndex: number, event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent sort from triggering if header is also sortable
    
    setActiveFilterColumn(prevColumn => 
      prevColumn === columnIndex ? null : columnIndex
    );
    
    if (activeFilterColumn !== columnIndex) {
      setTempFilterValue(filterValues[columnIndex] || '');
    }
  }, [activeFilterColumn, filterValues]);
  
  // Apply filter from dropdown
  const applyFilter = useCallback(() => {
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
  }, [activeFilterColumn, filterValues, tempFilterValue, onFilter]);
  
  // Clear filter for specific column
  const clearColumnFilter = useCallback(() => {
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
  }, [activeFilterColumn, filterValues, onFilter]);
  
  // Create table headers
  const renderHeaders = useCallback(() => {
    const visibleRows = getVisibleRows();
    const allSelected = areAllRowsSelected(
      visibleRows, 
      activeSelectedRows, 
      hasPagination, 
      activePage, 
      itemsPerPage
    );
    
    return (
      <TableHeaderComponent
        headers={headers}
        selectable={selectable}
        selectionType={selectionType}
        allRowsSelected={allSelected}
        lang={lang}
        hasHeaderFilters={hasHeaderFilters}
        filterableHeaders={filterableHeaders}
        filterValues={filterValues}
        activeFilterColumn={activeFilterColumn}
        tempFilterValue={tempFilterValue}
        filterPlaceholder={filterPlaceholder}
        onSelectAll={handleSelectAll}
        onSort={handleSort}
        onToggleFilterDropdown={toggleFilterDropdown}
        onApplyFilter={applyFilter}
        onClearColumnFilter={clearColumnFilter}
        onTempFilterValueChange={setTempFilterValue}
      />
    );
  }, [
    getVisibleRows, 
    activeSelectedRows, 
    hasPagination, 
    activePage, 
    itemsPerPage,
    headers,
    selectable,
    selectionType,
    lang,
    hasHeaderFilters,
    filterableHeaders,
    filterValues,
    activeFilterColumn,
    tempFilterValue,
    filterPlaceholder,
    handleSelectAll,
    handleSort,
    toggleFilterDropdown,
    applyFilter,
    clearColumnFilter
  ]);
  
  // Render table rows with proper classes for selection state
  const renderRows = useCallback(() => {
    return (
      <TableBodyComponent
        rows={getVisibleRows()}
        selectable={selectable}
        selectedRows={activeSelectedRows}
        isStriped={isStriped}
        firstCellIsHeader={firstCellIsHeader}
        hasPagination={hasPagination}
        currentPage={activePage}
        itemsPerPage={itemsPerPage}
        emptyStateMessage={emptyStateMessage}
        emptyStateRenderer={emptyStateRenderer}
        onRowSelect={handleRowSelect}
        getEffectiveColumnCount={getEffectiveColumnCount}
      />
    );
  }, [
    getVisibleRows,
    selectable,
    activeSelectedRows,
    isStriped,
    firstCellIsHeader,
    hasPagination,
    activePage,
    itemsPerPage,
    emptyStateMessage,
    emptyStateRenderer,
    handleRowSelect,
    getEffectiveColumnCount
  ]);
  
  // Render pagination controls
  const renderPagination = useCallback(() => {
    // Don't render pagination if there's only one page
    if (!hasPagination || totalPages <= 1) return null;
    
    return (
      <TablePaginationComponent
        currentPage={activePage}
        totalPages={totalPages}
        lang={lang}
        onPageChange={handlePageChange}
      />
    );
  }, [hasPagination, totalPages, activePage, lang, handlePageChange]);
  
  // Build table classes based on props
  const tableClasses = useMemo(() => {
    return [
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
  }, [
    hasHorizontalBorders,
    hasVerticalBorders,
    hasCellBorders,
    isStriped,
    isResponsive,
    density,
    isDataTable,
    hasShadow,
    hasStripedColumns,
    color,
    hasHoverEffect,
    isCardStyle,
    stackOnMobile
  ]);
  
  // Table wrapper classes for responsive behavior
  const wrapperClasses = 'gcds-table-wrapper';
  
  try {
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
          {renderRows()}
        </table>
        
        {/* Bottom pagination if enabled */}
        {hasPagination && (paginationPosition === 'bottom' || paginationPosition === 'both') && renderPagination()}
      </div>
    );
  } catch (error) {
    TableLogger.handleError(error, (
      <div className="gcds-table-error">
        <p>Error rendering table: {error instanceof Error ? error.message : 'Unknown error'}</p>
      </div>
    ), 'Error rendering Table component');
    
    // Return a simplified error fallback UI
    return (
      <div className="gcds-table-error-container">
        <p>An error occurred while rendering the table.</p>
      </div>
    );
  }
};
