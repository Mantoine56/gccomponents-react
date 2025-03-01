import React from 'react';
import './TableFilters.css';

/**
 * Props for the TableFilters component
 */
export interface TableFiltersProps {
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
   * Language for accessibility and labels
   */
  lang?: 'en' | 'fr';
  
  /**
   * Header text for the active filter column
   */
  headerText?: string;
  
  /**
   * Callback for when the filter input value changes
   */
  onTempFilterValueChange: (value: string) => void;
  
  /**
   * Callback for when the filter is applied
   */
  onApplyFilter: () => void;
  
  /**
   * Callback for when a filter is cleared
   */
  onClearFilter: () => void;
  
  /**
   * Callback for when the filter dropdown is closed
   */
  onCloseFilterDropdown: () => void;
}

/**
 * TableFilters component for rendering filter dropdown
 * This component handles filter UI and interactions
 */
export const TableFiltersComponent: React.FC<TableFiltersProps> = ({
  hasHeaderFilters = false,
  activeFilterColumn,
  tempFilterValue,
  filterPlaceholder = 'Filter...',
  lang = 'en',
  headerText = '',
  onTempFilterValueChange,
  onApplyFilter,
  onClearFilter,
  onCloseFilterDropdown,
}) => {
  // Don't render if header filters are not enabled or no active filter column
  if (!hasHeaderFilters || activeFilterColumn === null) return null;
  
  return (
    <div className="gcds-table__filter-dropdown">
      <div className="gcds-table__filter-dropdown-header">
        <span className="gcds-table__filter-dropdown-title">
          {lang === 'en' ? 'Filter by' : 'Filtrer par'} {headerText}
        </span>
        <button
          className="gcds-table__filter-dropdown-close"
          onClick={(e) => {
            e.stopPropagation();
            onCloseFilterDropdown();
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
          onChange={(e) => onTempFilterValueChange(e.target.value)}
          aria-label={`Filter by ${headerText}`}
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
            onClearFilter();
          }}
        >
          {lang === 'en' ? 'Clear' : 'Effacer'}
        </button>
        <button
          className="gcds-table__filter-button gcds-table__filter-button--apply"
          onClick={(e) => {
            e.stopPropagation();
            onApplyFilter();
          }}
        >
          {lang === 'en' ? 'Apply' : 'Appliquer'}
        </button>
      </div>
    </div>
  );
};