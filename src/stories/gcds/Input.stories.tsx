import type { Meta, StoryObj } from '@storybook/react';
import { GcdsInput } from '@cdssnc/gcds-components-react';
import React from 'react';

/**
 * GcdsInput component from the GC Design System
 * 
 * The Input component provides a standardized text input field for collecting
 * different types of user data. It supports various input types including text,
 * email, number, password, search, and URL.
 * 
 * Use Input for:
 * - Collecting single-line text data from users
 * - Email addresses, passwords, and numeric information
 * - Search functionality
 * - URL inputs
 * - Any form field requiring short text input
 */
const meta: Meta<typeof GcdsInput> = {
  title: 'GCDS Components/Base/Form/Input',
  component: GcdsInput,
  parameters: {
    docs: {
      description: {
        component: 'The Input component provides a standardized text input field for collecting different types of user data with built-in validation and accessibility features.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    inputId: {
      control: 'text',
      description: 'Unique identifier for the input element',
      table: {
        type: { summary: 'string' },
      },
    },
    name: {
      control: 'text',
      description: 'Name attribute for the input element',
      table: {
        type: { summary: 'string' },
      },
    },
    label: {
      control: 'text',
      description: 'Text label for the input field',
      table: {
        type: { summary: 'string' },
      },
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'number', 'password', 'search', 'url'],
      description: 'Type of input field',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    value: {
      control: 'text',
      description: 'Default value for the input element',
      table: {
        type: { summary: 'string' },
      },
    },
    required: {
      control: 'boolean',
      description: 'When true, marks the input as required',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'When true, disables the input',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    hideLabel: {
      control: 'boolean',
      description: 'When true, visually hides the label but keeps it accessible for screen readers',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    hint: {
      control: 'text',
      description: 'Hint text displayed below the label to provide additional guidance',
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
    size: {
      control: 'number',
      description: 'Specifies the visual width of the input in characters',
      table: {
        type: { summary: 'number' },
      },
    },
    autocomplete: {
      control: 'text',
      description: 'Specifies which autocomplete value to use',
      table: {
        type: { summary: 'string' },
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
      description: 'Array of validators to apply to the input',
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
type Story = StoryObj<typeof GcdsInput>;

/**
 * Basic usage of the GcdsInput component with text input
 */
export const Basic: Story = {
  args: {
    inputId: 'basic-input',
    name: 'basic',
    label: 'Full name',
    type: 'text',
  },
};

/**
 * Input field marked as required
 */
export const Required: Story = {
  args: {
    inputId: 'required-input',
    name: 'required',
    label: 'Email address',
    type: 'email',
    required: true,
    hint: 'We will only use your email to respond to your inquiry',
  },
};

/**
 * Input with hidden label (for search fields or other contextually clear inputs)
 */
export const HiddenLabel: Story = {
  args: {
    inputId: 'hidden-label-input',
    name: 'search',
    label: 'Search terms',
    type: 'search',
    hideLabel: true,
    value: '',
  },
};

/**
 * Input with helper hint text
 */
export const WithHint: Story = {
  args: {
    inputId: 'hint-input',
    name: 'postal-code',
    label: 'Postal code',
    type: 'text',
    hint: 'Format: A1A 1A1',
  },
};

/**
 * Input with error state and message
 */
export const WithError: Story = {
  args: {
    inputId: 'error-input',
    name: 'password',
    label: 'Password',
    type: 'password',
    required: true,
    errorMessage: 'Password must be at least 8 characters long',
  },
};

/**
 * Disabled input
 */
export const Disabled: Story = {
  args: {
    inputId: 'disabled-input',
    name: 'disabled',
    label: 'Username',
    type: 'text',
    disabled: true,
    value: 'current_user',
    hint: 'Username cannot be changed',
  },
};

/**
 * Numeric input with size attribute
 */
export const NumberInput: Story = {
  args: {
    inputId: 'number-input',
    name: 'quantity',
    label: 'Quantity',
    type: 'number',
    size: 5,
    hint: 'Enter a number between 1-100',
  },
};

/**
 * Input with autocomplete
 */
export const WithAutocomplete: Story = {
  args: {
    inputId: 'autocomplete-input',
    name: 'address',
    label: 'Street address',
    type: 'text',
    autocomplete: 'street-address',
  },
};

/**
 * Email input with validation
 */
export const EmailInput: Story = {
  args: {
    inputId: 'email-input',
    name: 'email',
    label: 'Email address',
    type: 'email',
    required: true,
    hint: 'Enter a valid email address',
    validateOn: 'blur',
  },
};

/**
 * Input in French language
 */
export const FrenchLanguage: Story = {
  args: {
    inputId: 'french-input',
    name: 'nom',
    label: 'Nom complet',
    type: 'text',
    required: true,
    hint: 'Entrez votre nom complet',
    lang: 'fr',
  },
};

/**
 * Password input with specific requirements
 */
export const PasswordInput: Story = {
  render: (args) => (
    <div>
      <GcdsInput {...args} />
      <div style={{ marginTop: '8px', fontSize: '14px' }}>
        <p>Password requirements:</p>
        <ul>
          <li>At least 8 characters</li>
          <li>At least one uppercase letter</li>
          <li>At least one lowercase letter</li>
          <li>At least one number</li>
          <li>At least one special character</li>
        </ul>
      </div>
    </div>
  ),
  args: {
    inputId: 'secure-password',
    name: 'secure-password',
    label: 'Create password',
    type: 'password',
    required: true,
  },
};
