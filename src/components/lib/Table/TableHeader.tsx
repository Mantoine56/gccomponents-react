import React from 'react';
import './TableHeader.css';
import { TableHeader } from './Table.types';
import { TableFiltersComponent } from './TableFilters';

/**
 * Props for the TableHeader component
 */
export interface TableHeaderProps {
  /**
   * Array of header objects defining the table columns
   */
  headers: TableHeader[];
  
  /**
   * Whether the table has selectable rows
   */
  selectable?: boolean;
  
  /**
   * Type of selection (single or multiple)
   */
  selectionType?: 'single' | 'multiple';
  
  /**
   * Whether all visible rows are selected
   */
  allRowsSelected?: boolean;
  
  /**
   * Language for accessibility and labels
   */
  lang?: 'en' | 'fr';
  
  /**
   * Whether the table has header filters
   */
  hasHeaderFilters?: boolean;
  
  /**
   * Array of column indices that are filterable
   */
  filterableHeaders?: number[];
  
  /**
   * Record of active filter values by column index
   */
  filterValues: Record<number, string>;
  
  /**
   * Currently active filter column index
   */
  activeFilterColumn: number | null;
  
  /**
   * Temporary filter value for the active filter
   */
  tempFilterValue: string;
  
  /**
   * Placeholder text for filter inputs
   */
  filterPlaceholder?: string;
  
  /**
   * Callback for when the select all checkbox is clicked
   */
  onSelectAll?: () => void;
  
  /**
   * Callback for when a sortable header is clicked
   */
  onSort?: (columnIndex: number, header: TableHeader) => void;
  
  /**
   * Callback for when a filter icon is clicked
   */
  onToggleFilterDropdown?: (columnIndex: number, event: React.MouseEvent) => void;
  
  /**
   * Callback for when the filter is applied
   */
  onApplyFilter?: () => void;
  
  /**
   * Callback for when a filter is cleared
   */
  onClearColumnFilter?: () => void;
  
  /**
   * Callback for when the filter input value changes
   */
  onTempFilterValueChange?: (value: string) => void;
}

/**
 * TableHeader component for rendering the header row of a table
 * This component handles sorting, filtering, and selection functionality
 */
export const TableHeaderComponent: React.FC<TableHeaderProps> = ({
  headers,
  selectable = false,
  selectionType = 'multiple',
  allRowsSelected = false,
  lang = 'en',
  hasHeaderFilters = false,
  filterableHeaders,
  filterValues,
  activeFilterColumn,
  tempFilterValue,
  filterPlaceholder = 'Filter...',
  onSelectAll,
  onSort,
  onToggleFilterDropdown,
  onApplyFilter,
  onClearColumnFilter,
  onTempFilterValueChange,
}) => {
  return (
    <thead className="gcds-table__head">
      <tr className="gcds-table__row">
        {/* Select all checkbox for multiple selection */}
        {selectable && selectionType === 'multiple' && (
          <th className="gcds-table__header gcds-table__checkbox-cell">
            <input
              type="checkbox"
              className="gcds-table__checkbox"
              checked={allRowsSelected}
              onChange={onSelectAll}
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
              onClick={header.sortable && onSort ? () => onSort(index, header) : undefined}
              aria-sort={header.sortDirection === 'asc' ? 'ascending' : header.sortDirection === 'desc' ? 'descending' : undefined}
            >
              <div className="gcds-table__header-content">
                {header.html ? (
                  <span dangerouslySetInnerHTML={{ __html: header.html }} />
                ) : (
                  header.text
                )}
                
                {/* Filter icon for filterable columns */}
                {isFilterableHeader && onToggleFilterDropdown && (
                  <span
                    className={`gcds-table__header-filter-icon ${hasActiveFilter ? 'gcds-table__header-filter-icon--active' : ''}`}
                    onClick={(e) => onToggleFilterDropdown(index, e)}
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
                  <TableFiltersComponent
                    hasHeaderFilters={hasHeaderFilters}
                    filterValues={filterValues}
                    activeFilterColumn={activeFilterColumn}
                    tempFilterValue={tempFilterValue}
                    filterPlaceholder={filterPlaceholder}
                    lang={lang}
                    headerText={header.text}
                    onTempFilterValueChange={(value: string) => {
                      if (onTempFilterValueChange) onTempFilterValueChange(value);
                    }}
                    onApplyFilter={() => {
                      if (onApplyFilter) onApplyFilter();
                    }}
                    onClearFilter={() => {
                      if (onClearColumnFilter) onClearColumnFilter();
                    }}
                    onCloseFilterDropdown={() => {
                      if (onToggleFilterDropdown) {
                        // Simply close the filter dropdown by setting activeFilterColumn to null
                        // This avoids the need to create a synthetic event
                        onToggleFilterDropdown(index, {} as React.MouseEvent);
                      }
                    }}
                  />
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