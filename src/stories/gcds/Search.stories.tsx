import type { Meta, StoryObj } from '@storybook/react';
import { GcdsSearch } from '@cdssnc/gcds-components-react';

/**
 * GcdsSearch component from the GC Design System
 */
const meta: Meta<typeof GcdsSearch> = {
  title: 'GCDS Components/Base/Search',
  component: GcdsSearch,
  parameters: {
    docs: {
      description: {
        component: 'A tool for entering search terms.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the search input',
    },
    action: {
      control: 'text',
      description: 'Sets the action for the search form',
    },
    method: {
      control: 'select',
      options: ['get', 'post'],
      description: 'Set the form method of the search form',
    },
    name: {
      control: 'text',
      description: 'Set the name of the search input',
    },
    searchId: {
      control: 'text',
      description: 'Set the id of the search input',
    },
    value: {
      control: 'text',
      description: 'Set the value of the search input',
    },
    suggested: {
      control: 'object',
      description: 'Set a list of predefined search terms',
    },
  },
};

export default meta;
type Story = StoryObj<typeof GcdsSearch>;

/**
 * Basic usage of the GcdsSearch component
 */
export const Basic: Story = {
  args: {
    placeholder: 'Search',
  },
};

/**
 * Example with custom action
 */
export const WithCustomAction: Story = {
  args: {
    placeholder: 'Search',
    action: '/search-results',
    method: 'get',
  },
};

/**
 * Example with custom name and ID
 */
export const WithCustomNameAndId: Story = {
  args: {
    placeholder: 'Search',
    name: 'custom-search',
    searchId: 'site-search',
  },
};

/**
 * Example with initial value
 */
export const WithInitialValue: Story = {
  args: {
    placeholder: 'Search',
    value: 'Initial search term',
  },
};

/**
 * Example with suggested search terms
 */
export const WithSuggestedTerms: Story = {
  args: {
    placeholder: 'Search',
    suggested: ['Government', 'Services', 'Benefits', 'Taxes'],
  },
}; 