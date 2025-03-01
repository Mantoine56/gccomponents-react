import React, { memo, useCallback } from 'react';
import './TablePagination.css';
import { TableLogger } from './tableUtils';

/**
 * Props for the TablePagination component
 */
export interface TablePaginationProps {
  /**
   * Current page number (1-indexed)
   */
  currentPage: number;
  
  /**
   * Total number of pages
   */
  totalPages: number;
  
  /**
   * Language for accessibility and labels
   */
  lang?: 'en' | 'fr';
  
  /**
   * Callback for when a page is selected
   */
  onPageChange: (pageNumber: number) => void;
}

/**
 * A pagination button component for reuse and better memoization
 */
const PaginationButton = memo(({ 
  page, 
  currentPage, 
  label, 
  ariaLabel, 
  disabled = false,
  onClick,
  isNav = false
}: { 
  page: number;
  currentPage: number;
  label: React.ReactNode;
  ariaLabel: string;
  disabled?: boolean;
  onClick: (page: number) => void;
  isNav?: boolean;
}) => {
  const handleClick = useCallback(() => {
    if (!disabled) {
      onClick(page);
    }
  }, [disabled, onClick, page]);

  const isActive = page === currentPage;
  const navClass = isNav ? (page < currentPage ? 'gcds-pagination__button--prev' : 'gcds-pagination__button--next') : '';
  const activeClass = isActive ? 'gcds-pagination__button--current' : '';
  
  return (
    <li className="gcds-pagination__item">
      <button
        type="button"
        className={`gcds-pagination__button ${activeClass} ${navClass}`}
        onClick={handleClick}
        disabled={disabled}
        aria-label={ariaLabel}
        aria-current={isActive ? 'page' : undefined}
      >
        {label}
      </button>
    </li>
  );
});

PaginationButton.displayName = 'PaginationButton';

/**
 * TablePagination component for rendering pagination controls
 * This component handles navigation between pages
 */
export const TablePaginationComponent: React.FC<TablePaginationProps> = memo(({
  currentPage,
  totalPages,
  lang = 'en',
  onPageChange,
}) => {
  // Ensure current page is within valid range
  const validatedCurrentPage = Math.max(1, Math.min(currentPage, totalPages));
  
  // Labels for buttons based on language
  const previousLabel = lang === 'en' ? 'Previous' : 'Précédent';
  const nextLabel = lang === 'en' ? 'Next' : 'Suivant';
  const paginationLabel = lang === 'en' ? 'Pagination' : 'Pagination';
  
  // Calculate which page numbers to show
  const getVisiblePages = useCallback(() => {
    // Always show at most 5 page numbers
    const visibleCount = 5;
    
    if (totalPages <= visibleCount) {
      // If total pages is less than or equal to visible count, show all pages
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    
    // Otherwise, show pages centered around current page when possible
    let startPage = Math.max(1, validatedCurrentPage - Math.floor(visibleCount / 2));
    let endPage = startPage + visibleCount - 1;
    
    // Adjust start and end page if end page exceeds total pages
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - visibleCount + 1);
    }
    
    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  }, [totalPages, validatedCurrentPage]);
  
  // Handler for page change wrapped in useCallback
  const handlePageChange = useCallback((page: number) => {
    if (page < 1 || page > totalPages) {
      TableLogger.warn(`Invalid page number: ${page}. Valid range is 1-${totalPages}.`);
      return;
    }
    onPageChange(page);
  }, [onPageChange, totalPages]);

  try {
    return (
      <nav className="gcds-table__pagination" aria-label={paginationLabel}>
        <div className="gcds-pagination">
          <ul className="gcds-pagination__list">
            {/* Previous page button */}
            <PaginationButton
              page={validatedCurrentPage - 1}
              currentPage={validatedCurrentPage}
              label={previousLabel}
              ariaLabel={previousLabel}
              disabled={validatedCurrentPage === 1}
              onClick={handlePageChange}
              isNav={true}
            />
            
            {/* Page number buttons */}
            {getVisiblePages().map(page => (
              <PaginationButton
                key={`page-${page}`}
                page={page}
                currentPage={validatedCurrentPage}
                label={page}
                ariaLabel={`${lang === 'en' ? 'Page' : 'Page'} ${page}`}
                onClick={handlePageChange}
              />
            ))}
            
            {/* Next page button */}
            <PaginationButton
              page={validatedCurrentPage + 1}
              currentPage={validatedCurrentPage}
              label={nextLabel}
              ariaLabel={nextLabel}
              disabled={validatedCurrentPage === totalPages}
              onClick={handlePageChange}
              isNav={true}
            />
          </ul>
        </div>
      </nav>
    );
  } catch (error) {
    TableLogger.handleError(error, null, 'Error rendering pagination');
    return null;
  }
}, (prevProps, nextProps) => {
  // Only re-render if relevant props change
  return (
    prevProps.currentPage === nextProps.currentPage &&
    prevProps.totalPages === nextProps.totalPages &&
    prevProps.lang === nextProps.lang
  );
}); 