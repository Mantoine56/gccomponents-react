/**
 * TablePagination Component Tests
 * 
 * This file contains tests for the TablePagination component,
 * focusing on pagination functionality and interaction.
 */

import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { userEvent, expect } from '@storybook/test';
import { composeStories } from '@storybook/react';
import { describe, it } from 'vitest';
import * as stories from '../../../../stories/gcds/table/TablePagination.stories';

// Compose the stories to enable testing
const { BasicPagination } = composeStories(stories);

describe('TablePagination Component', () => {
  it('renders pagination controls', () => {
    const { container } = render(<BasicPagination />);
    
    // Check that pagination controls are rendered
    const paginationControls = container.querySelector('.gcds-table__pagination');
    expect(paginationControls).toBeTruthy();
    
    // Check that page numbers are displayed
    const pageButtons = container.querySelectorAll('.gcds-pagination__button');
    expect(pageButtons.length).toBeGreaterThan(0);
    
    // Check that the first page is active
    const firstPageButton = container.querySelector('.gcds-pagination__button--current');
    expect(firstPageButton).toBeTruthy();
    expect(firstPageButton?.textContent?.trim()).toBe('1');
  });
  
  // This test would run with the play function in Storybook
  it('navigates between pages when pagination buttons are clicked', async () => {
    const { container } = render(<BasicPagination />);
    
    // Find the "Next page" button
    const nextButton = screen.getByRole('button', { name: /next/i });
    expect(nextButton).toBeInTheDocument();
    
    // Click the next button
    await act(async () => {
      await userEvent.click(nextButton);
    });
    
    // Check that we're now on page 2 by looking for the button with current class
    const currentPageButton = container.querySelector('.gcds-pagination__button--current');
    expect(currentPageButton).toBeTruthy();
    expect(currentPageButton?.textContent?.trim()).toBe('2');
    
    // Find the "Previous page" button
    const prevButton = screen.getByRole('button', { name: /previous/i });
    expect(prevButton).toBeInTheDocument();
    
    // Click the previous button
    await act(async () => {
      await userEvent.click(prevButton);
    });
    
    // Check that we're back on page 1
    const updatedCurrentButton = container.querySelector('.gcds-pagination__button--current');
    expect(updatedCurrentButton).toBeTruthy();
    expect(updatedCurrentButton?.textContent?.trim()).toBe('1');
  });
  
  it('displays the correct number of items per page', () => {
    const { container } = render(<BasicPagination />);
    
    // Get all rows in the table (excluding header row)
    const tableRows = container.querySelectorAll('.gcds-table__body .gcds-table__row');
    
    // Check that there are 5 rows (default items per page in the story)
    expect(tableRows.length).toBe(5);
  });
  
  it('disables navigation buttons appropriately', async () => {
    render(<BasicPagination />);
    
    // Get navigation buttons
    const prevButton = screen.getByRole('button', { name: /previous/i });
    const nextButton = screen.getByRole('button', { name: /next/i });
    
    // Previous button should be disabled on first page
    expect(prevButton).toHaveAttribute('disabled');
    expect(nextButton).not.toHaveAttribute('disabled');
    
    // Click next to go to page 2
    await act(async () => {
      await userEvent.click(nextButton);
    });
    
    // Now previous should be enabled
    expect(prevButton).not.toHaveAttribute('disabled');
    
    // Go to the last page (assuming 5 pages in BasicPagination)
    await act(async () => {
      for (let i = 0; i < 3; i++) {
        await userEvent.click(nextButton);
      }
    });
    
    // On the last page, next should be disabled
    expect(nextButton).toHaveAttribute('disabled');
  });
}); 