import type { Meta, StoryObj } from '@storybook/react';
import { GcdsErrorSummary } from '@cdssnc/gcds-components-react';

/**
 * GcdsErrorSummary component from the GC Design System
 */
const meta: Meta<typeof GcdsErrorSummary> = {
  title: 'GCDS Components/Base/Feedback/ErrorSummary',
  component: GcdsErrorSummary,
  parameters: {
    docs: {
      description: {
        component: 'GcdsErrorSummary component from the GC Design System.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    heading: {
      control: 'text',
      description: 'Custom heading for the error summary'
    },
    errorLinks: {
      control: 'object',
      description: 'Array of error items with content and href properties'
    }
  }
};

export default meta;
type Story = StoryObj<typeof GcdsErrorSummary>;

/**
 * Basic usage of the GcdsErrorSummary component with error links
 */
export const WithLinks: Story = {
  args: {
    heading: 'Please fix the following errors:',
    errorLinks: [
      {
        content: 'Email address is required',
        href: '#email-field'
      },
      {
        content: 'Password must be at least 8 characters',
        href: '#password-field'
      }
    ]
  },
};

/**
 * Error summary without links
 */
export const WithoutLinks: Story = {
  args: {
    heading: 'Please fix the following errors:',
    errorLinks: [
      {
        content: 'Email address is required'
      },
      {
        content: 'Password must be at least 8 characters'
      }
    ]
  },
};
