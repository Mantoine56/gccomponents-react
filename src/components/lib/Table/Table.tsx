import React, { useState, useEffect } from 'react';
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
  areAllRowsSelected
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
    // Apply filtering if enabled and there are filter values
    const filteredRows = (isFilterable || hasHeaderFilters) 
      ? filterRows(rows, filterValues, filterCaseSensitive)
      : rows;
    
    // Then apply pagination
    return getPaginatedRows(filteredRows, hasPagination, activePage, itemsPerPage);
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
    return getColumnCount(headers.length, selectable);
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
  };

  // Render table rows with proper classes for selection state
  const renderRows = () => {
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
  };

  // Render pagination controls
  const renderPagination = () => {
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
        {renderRows()}
      </table>
      
      {/* Bottom pagination if enabled */}
      {hasPagination && (paginationPosition === 'bottom' || paginationPosition === 'both') && renderPagination()}
    </div>
  );
};
