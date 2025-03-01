import type { Meta, StoryObj } from '@storybook/react';
import { GcdsPagination } from '@cdssnc/gcds-components-react';

/**
 * GcdsPagination component from the GC Design System
 * 
 * The Pagination component provides a standardized navigation interface for browsing
 * through multiple pages of content. It supports two display modes: a detailed list 
 * with page numbers, and a simple previous/next style navigation.
 * 
 * Use Pagination for:
 * - Long lists of content split across multiple pages
 * - Search results navigation
 * - Sequential content that requires navigation between pages
 * - Improving user experience when browsing large data sets
 */
const meta: Meta<typeof GcdsPagination> = {
  title: 'GCDS Components/Base/Navigation/Pagination',
  component: GcdsPagination,
  parameters: {
    docs: {
      description: {
        component: 'The Pagination component provides standardized navigation controls for browsing through multi-page content with either numbered pages or simple previous/next navigation.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    display: {
      control: 'select',
      options: ['list', 'simple'],
      description: 'Determines the pagination style to display (numbered list or simple prev/next)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'list' },
      },
    },
    label: {
      control: 'text',
      description: 'Accessible label for the navigation element',
      table: {
        type: { summary: 'string' },
      },
    },
    currentPage: {
      control: 'number',
      description: 'Current page number (for list display mode)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    totalPages: {
      control: 'number',
      description: 'Total number of pages available (for list display mode)',
      table: {
        type: { summary: 'number' },
      },
    },
    url: {
      control: 'object',
      description: 'URL object or string for creating page links (for list display mode)',
      table: {
        type: { summary: 'string | object' },
      },
    },
    previousHref: {
      control: 'text',
      description: 'URL for the previous page link (for simple display mode)',
      table: {
        type: { summary: 'string' },
      },
    },
    previousLabel: {
      control: 'text',
      description: 'Label for the previous page link (for simple display mode)',
      table: {
        type: { summary: 'string' },
      },
    },
    nextHref: {
      control: 'text',
      description: 'URL for the next page link (for simple display mode)',
      table: {
        type: { summary: 'string' },
      },
    },
    nextLabel: {
      control: 'text',
      description: 'Label for the next page link (for simple display mode)',
      table: {
        type: { summary: 'string' },
      },
    },
    lang: {
      control: 'select',
      options: ['en', 'fr'],
      description: 'Sets the language of the component',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'en' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof GcdsPagination>;

/**
 * Basic list pagination with numbered pages
 */
export const ListPagination: Story = {
  args: {
    display: 'list',
    label: 'Results pagination',
    currentPage: 3,
    totalPages: 10,
    url: '/search?page=',
    lang: 'en',
  },
};

/**
 * First page in a list pagination
 */
export const FirstPage: Story = {
  args: {
    display: 'list',
    label: 'Search results navigation',
    currentPage: 1,
    totalPages: 7,
    url: '/search?page=',
    lang: 'en',
  },
};

/**
 * Last page in a list pagination
 */
export const LastPage: Story = {
  args: {
    display: 'list',
    label: 'Product listing navigation',
    currentPage: 7,
    totalPages: 7,
    url: '/products?page=',
    lang: 'en',
  },
};

/**
 * Pagination with few pages
 */
export const FewPages: Story = {
  args: {
    display: 'list',
    label: 'Blog posts pagination',
    currentPage: 2,
    totalPages: 3,
    url: '/blog?page=',
    lang: 'en',
  },
};

/**
 * Pagination with many pages
 */
export const ManyPages: Story = {
  args: {
    display: 'list',
    label: 'Document library pagination',
    currentPage: 15,
    totalPages: 30,
    url: '/documents?page=',
    lang: 'en',
  },
};

/**
 * Simple pagination with previous/next navigation
 */
export const SimplePagination: Story = {
  args: {
    display: 'simple',
    label: 'Article navigation',
    previousHref: '/article/1',
    previousLabel: 'Introduction to GCDS',
    nextHref: '/article/3',
    nextLabel: 'Getting Started with Components',
    lang: 'en',
  },
};

/**
 * First page in simple pagination (no previous)
 */
export const FirstPageSimple: Story = {
  args: {
    display: 'simple',
    label: 'Tutorial navigation',
    previousHref: '',
    previousLabel: '',
    nextHref: '/tutorial/2',
    nextLabel: 'Step 2: Configuration',
    lang: 'en',
  },
};

/**
 * Last page in simple pagination (no next)
 */
export const LastPageSimple: Story = {
  args: {
    display: 'simple',
    label: 'Tutorial navigation',
    previousHref: '/tutorial/4',
    previousLabel: 'Step 4: Testing',
    nextHref: '',
    nextLabel: '',
    lang: 'en',
  },
};

/**
 * Pagination with URL object for query parameters
 */
export const WithQueryParameters: Story = {
  args: {
    display: 'list',
    label: 'Filtered results pagination',
    currentPage: 2,
    totalPages: 8,
    url: {
      path: '/search',
      query: {
        category: 'reports',
        year: '2023',
        page: ''
      }
    },
    lang: 'en',
  },
};

/**
 * French language pagination
 */
export const FrenchPagination: Story = {
  args: {
    display: 'list',
    label: 'Navigation des pages de résultats',
    currentPage: 4,
    totalPages: 12,
    url: '/recherche?page=',
    lang: 'fr',
  },
};
