import type { Meta, StoryObj } from '@storybook/react';
import { GcdsCheckbox } from '@cdssnc/gcds-components-react';

/**
 * GcdsCheckbox component from the GC Design System
 */
const meta: Meta<typeof GcdsCheckbox> = {
  title: 'GCDS Components/Base/Form/Checkbox',
  component: GcdsCheckbox,
  parameters: {
    docs: {
      description: {
        component: 'GcdsCheckbox component from the GC Design System provides a standardized checkbox input.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checkboxId: {
      control: 'text',
      description: 'ID for the checkbox',
      required: true
    },
    name: {
      control: 'text',
      description: 'Name attribute for the checkbox',
      required: true
    },
    label: {
      control: 'text',
      description: 'Label for the checkbox',
      required: true
    },
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
      defaultValue: false
    },
    required: {
      control: 'boolean',
      description: 'Whether the checkbox is required',
      defaultValue: false
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
      defaultValue: false
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display'
    },
    hint: {
      control: 'text',
      description: 'Hint text to provide additional context'
    },
    lang: {
      control: 'select',
      options: ['en', 'fr'],
      description: 'Language of the component',
      defaultValue: 'en'
    }
  }
};

export default meta;
type Story = StoryObj<typeof GcdsCheckbox>;

/**
 * Basic usage of the GcdsCheckbox component
 */
export const Basic: Story = {
  args: {
    checkboxId: 'basic-checkbox',
    name: 'basic-checkbox',
    label: 'Check this box',
    lang: 'en'
  },
};

/**
 * Checkbox in checked state
 */
export const Checked: Story = {
  args: {
    checkboxId: 'checked-checkbox',
    name: 'checked-checkbox',
    label: 'This checkbox is checked',
    checked: true,
    lang: 'en'
  },
};

/**
 * Required checkbox
 */
export const Required: Story = {
  args: {
    checkboxId: 'required-checkbox',
    name: 'required-checkbox',
    label: 'This checkbox is required',
    required: true,
    lang: 'en'
  },
};

/**
 * Disabled checkbox
 */
export const Disabled: Story = {
  args: {
    checkboxId: 'disabled-checkbox',
    name: 'disabled-checkbox',
    label: 'This checkbox is disabled',
    disabled: true,
    lang: 'en'
  },
};

/**
 * Checkbox with error message
 */
export const WithError: Story = {
  args: {
    checkboxId: 'error-checkbox',
    name: 'error-checkbox',
    label: 'Checkbox with error',
    errorMessage: 'Please check this box to continue',
    lang: 'en'
  },
};

/**
 * Checkbox with hint text
 */
export const WithHint: Story = {
  args: {
    checkboxId: 'hint-checkbox',
    name: 'hint-checkbox',
    label: 'Checkbox with hint',
    hint: 'Additional information about this checkbox',
    lang: 'en'
  },
};
