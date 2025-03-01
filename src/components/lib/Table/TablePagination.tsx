import React from 'react';
import './TablePagination.css';

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
 * TablePagination component for rendering pagination controls
 * This component handles page navigation and pagination UI
 */
export const TablePaginationComponent: React.FC<TablePaginationProps> = ({
  currentPage,
  totalPages,
  lang = 'en',
  onPageChange,
}) => {
  // Don't render pagination if there's only one page
  if (totalPages <= 1) return null;
  
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
    let startPage = Math.max(2, currentPage - 1);
    let endPage = Math.min(totalPages - 1, currentPage + 1);
    
    // Adjust if we're near the beginning
    if (currentPage <= 3) {
      endPage = Math.min(totalPages - 1, maxPageButtons - 1);
    }
    
    // Adjust if we're near the end
    if (currentPage >= totalPages - 2) {
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
              onClick={() => onPageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
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
                  className={`gcds-pagination__button ${currentPage === pageNum ? 'gcds-pagination__button--current' : ''}`}
                  onClick={() => onPageChange(pageNum)}
                  aria-label={lang === 'en' ? `Go to page ${pageNum}` : `Aller à la page ${pageNum}`}
                  aria-current={currentPage === pageNum ? 'page' : undefined}
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
              onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
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