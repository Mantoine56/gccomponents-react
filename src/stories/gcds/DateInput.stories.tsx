import type { Meta, StoryObj } from '@storybook/react';
import { GcdsDateInput } from '@cdssnc/gcds-components-react';
import React from 'react';

/**
 * GcdsDateInput component from the GC Design System
 * 
 * The DateInput component provides a standardized way for users to input date
 * information in forms. It supports two formats: a full format (month, day, and year)
 * and a compact format (month and year only). The component handles validation and
 * accessibility concerns for date entry.
 * 
 * Use DateInput for:
 * - Collecting dates in a standardized format
 * - Birth dates, appointment dates, or event dates
 * - When date precision is required in form submissions
 * - Ensuring consistent date formatting across applications
 */
const meta: Meta<typeof GcdsDateInput> = {
  title: 'GCDS Components/Base/Form/DateInput',
  component: GcdsDateInput,
  parameters: {
    docs: {
      description: {
        component: 'The DateInput component provides a structured interface for users to enter date information with built-in validation and accessibility features.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Name attribute for the date input fields',
      table: {
        type: { summary: 'string' },
      },
    },
    legend: {
      control: 'text',
      description: 'Fieldset legend describing the date input group',
      table: {
        type: { summary: 'string' },
      },
    },
    format: {
      control: 'select',
      options: ['full', 'compact'],
      description: 'Whether to show the full format (month, day, year) or compact format (month, year)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'full' },
      },
    },
    value: {
      control: 'text',
      description: 'Default value for the date input (YYYY-MM-DD format)',
      table: {
        type: { summary: 'string' },
      },
    },
    required: {
      control: 'boolean',
      description: 'When true, marks the date input as required',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    hint: {
      control: 'text',
      description: 'Hint text displayed below the legend to provide additional guidance',
      table: {
        type: { summary: 'string' },
      },
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display when validation fails',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'When true, disables the date input',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    validateOn: {
      control: 'select',
      options: ['blur', 'submit', 'other'],
      description: 'Specifies when validation should occur',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'blur' },
      },
    },
    validator: {
      control: 'object',
      description: 'Array of validators to apply to the date input',
      table: {
        type: { summary: 'Array<string | ValidatorEntry | Validator<string>>' },
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
type Story = StoryObj<typeof GcdsDateInput>;

/**
 * Basic usage of the GcdsDateInput component with full format
 */
export const Basic: Story = {
  args: {
    name: 'date-input',
    legend: 'Select a date',
    format: 'full',
    lang: 'en',
  },
};

/**
 * DateInput in compact format (month and year only)
 */
export const CompactFormat: Story = {
  args: {
    name: 'month-year-input',
    legend: 'Select month and year',
    format: 'compact',
    hint: 'Month and year only',
    lang: 'en',
  },
};

/**
 * DateInput with a pre-selected date
 */
export const WithDefaultValue: Story = {
  args: {
    name: 'prefilled-date',
    legend: 'Event date',
    format: 'full',
    value: '2023-09-15',
    lang: 'en',
  },
};

/**
 * Required DateInput field
 */
export const Required: Story = {
  args: {
    name: 'required-date',
    legend: 'Birth date',
    format: 'full',
    required: true,
    hint: 'Your date of birth is required',
    lang: 'en',
  },
};

/**
 * DateInput with error message
 */
export const WithError: Story = {
  args: {
    name: 'error-date',
    legend: 'Application deadline',
    format: 'full',
    required: true,
    errorMessage: 'Please enter a valid date',
    lang: 'en',
  },
};

/**
 * Disabled DateInput
 */
export const Disabled: Story = {
  args: {
    name: 'disabled-date',
    legend: 'Approval date',
    format: 'full',
    value: '2023-10-01',
    disabled: true,
    hint: 'This date cannot be modified',
    lang: 'en',
  },
};

/**
 * DateInput with hint text
 */
export const WithHint: Story = {
  args: {
    name: 'hint-date',
    legend: 'Preferred appointment date',
    format: 'full',
    hint: 'Select a date at least two business days in the future',
    lang: 'en',
  },
};

/**
 * DateInput in French
 */
export const FrenchDateInput: Story = {
  args: {
    name: 'french-date',
    legend: 'Date de naissance',
    format: 'full',
    required: true,
    hint: 'Entrez votre date de naissance',
    lang: 'fr',
  },
};

/**
 * DateInput for a date range (start date)
 */
export const DateRangeStart: Story = {
  render: (args) => (
    <div>
      <GcdsDateInput 
        {...args}
        style={{ marginBottom: '24px' }}
      />
      <GcdsDateInput 
        name="end-date"
        legend="End date"
        format="full"
        hint="Must be after the start date"
      />
    </div>
  ),
  args: {
    name: 'start-date',
    legend: 'Start date',
    format: 'full',
    hint: 'When your event begins',
    required: true,
    lang: 'en',
  },
}; 