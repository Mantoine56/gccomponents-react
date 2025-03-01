/**
 * TypeScript interfaces for the Table component
 * Extracted from the main component for better organization and maintainability
 */

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
 * Main props interface for the Table component
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
  
  /**
   * Whether to add a shadow to the table
   * @default false
   */
  hasShadow?: boolean;
  
  /**
   * Whether to display alternating column background colors
   * @default false
   */
  hasStripedColumns?: boolean;
  
  /**
   * Color theme for the table
   */
  color?: 'blue' | 'green' | 'red' | 'purple';
  
  /**
   * Whether to apply hover effect on rows
   * @default false
   */
  hasHoverEffect?: boolean;
  
  /**
   * Whether to style the table as a card
   * @default false
   */
  isCardStyle?: boolean;
  
  /**
   * Whether to stack table on mobile devices
   * @default false
   */
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