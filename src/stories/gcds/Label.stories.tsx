import type { Meta, StoryObj } from '@storybook/react';
import { GcdsLabel } from '@cdssnc/gcds-components-react';

/**
 * GcdsLabel component from the GC Design System
 * 
 * The Label component provides clear and accessible labels for form fields.
 */
const meta: Meta<typeof GcdsLabel> = {
  title: 'GCDS Components/Base/Label',
  component: GcdsLabel,
  parameters: {
    docs: {
      description: {
        component: 'The Label component provides text labels for form inputs, ensuring accessibility and usability.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label text content',
    },
    labelFor: {
      control: 'text',
      description: 'Defines the label\'s "for" attribute to associate with an input field',
    },
    hideLabel: {
      control: 'boolean',
      description: 'Specifies if the label is visually hidden or not',
    },
    required: {
      control: 'boolean',
      description: 'Specifies if the associated form field is required or not',
    },
  },
};

export default meta;
type Story = StoryObj<typeof GcdsLabel>;

/**
 * Basic usage of the GcdsLabel component
 */
export const Basic: Story = {
  args: {
    label: 'Email address',
    labelFor: 'email-input',
  },
};

/**
 * Required field label
 */
export const RequiredLabel: Story = {
  args: {
    label: 'First name',
    labelFor: 'firstname-input',
    required: true,
  },
};

/**
 * Visually hidden label
 */
export const HiddenLabel: Story = {
  args: {
    label: 'Search',
    labelFor: 'search-input',
    hideLabel: true,
  },
}; 