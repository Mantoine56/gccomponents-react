import type { Meta, StoryObj } from '@storybook/react';
import { GcdsTextarea } from '@cdssnc/gcds-components-react';
import React from 'react';

/**
 * GcdsTextarea component from the GC Design System
 * 
 * The Textarea component provides a standardized multi-line text input field
 * for collecting larger amounts of text from users. It includes support for
 * character count limitations, validation, and accessible error handling.
 * 
 * Use Textarea for:
 * - Collecting comments, feedback, or suggestions
 * - Multi-line text input such as descriptions or messages
 * - Fields where users need to enter large amounts of text
 * - Forms requiring paragraph-style input
 */
const meta: Meta<typeof GcdsTextarea> = {
  title: 'GCDS Components/Base/Form/Textarea',
  component: GcdsTextarea,
  parameters: {
    docs: {
      description: {
        component: 'The Textarea component provides a multi-line text input field for collecting longer text content with built-in validation and accessibility features.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    textareaId: {
      control: 'text',
      description: 'Unique identifier for the textarea element',
      table: {
        type: { summary: 'string' },
      },
    },
    name: {
      control: 'text',
      description: 'Name attribute for the textarea element',
      table: {
        type: { summary: 'string' },
      },
    },
    label: {
      control: 'text',
      description: 'Text label for the textarea field',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      control: 'text',
      description: 'Default value for the textarea element',
      table: {
        type: { summary: 'string' },
      },
    },
    required: {
      control: 'boolean',
      description: 'When true, marks the textarea as required',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'When true, disables the textarea',
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
    rows: {
      control: 'number',
      description: 'Number of rows to display for the textarea',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '3' },
      },
    },
    cols: {
      control: 'number',
      description: 'Number of columns to display for the textarea',
      table: {
        type: { summary: 'number' },
      },
    },
    characterCount: {
      control: 'number',
      description: 'Maximum number of characters allowed, displays a character counter',
      table: {
        type: { summary: 'number' },
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
      description: 'Array of validators to apply to the textarea',
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
type Story = StoryObj<typeof GcdsTextarea>;

/**
 * Basic usage of the GcdsTextarea component
 */
export const Basic: Story = {
  args: {
    textareaId: 'basic-textarea',
    name: 'comments',
    label: 'Comments',
    rows: 3,
  },
};

/**
 * Textarea with required field validation
 */
export const Required: Story = {
  args: {
    textareaId: 'required-textarea',
    name: 'feedback',
    label: 'Please provide feedback',
    required: true,
    hint: 'Your feedback helps us improve our services',
  },
};

/**
 * Textarea with larger size
 */
export const LargeTextarea: Story = {
  args: {
    textareaId: 'large-textarea',
    name: 'description',
    label: 'Project description',
    rows: 8,
    cols: 60,
    hint: 'Describe your project in detail',
  },
};

/**
 * Textarea with character counter
 */
export const WithCharacterCounter: Story = {
  args: {
    textareaId: 'character-count-textarea',
    name: 'bio',
    label: 'Biography',
    hint: 'Tell us about yourself (maximum 200 characters)',
    characterCount: 200,
    rows: 4,
  },
};

/**
 * Textarea with initial value
 */
export const WithInitialValue: Story = {
  args: {
    textareaId: 'initial-value-textarea',
    name: 'existing-notes',
    label: 'Additional notes',
    value: 'These are pre-filled notes that can be edited by the user.',
    rows: 5,
  },
};

/**
 * Textarea with error message
 */
export const WithError: Story = {
  args: {
    textareaId: 'error-textarea',
    name: 'message',
    label: 'Message',
    required: true,
    errorMessage: 'Please enter a message with at least 20 characters',
  },
};

/**
 * Disabled textarea
 */
export const Disabled: Story = {
  args: {
    textareaId: 'disabled-textarea',
    name: 'readonly-comments',
    label: 'Previous comments',
    value: 'These comments cannot be edited. They were submitted in a previous session.',
    disabled: true,
    rows: 4,
  },
};

/**
 * Textarea for address input
 */
export const AddressTextarea: Story = {
  args: {
    textareaId: 'address-textarea',
    name: 'address',
    label: 'Mailing address',
    hint: 'Enter your full address including postal code',
    rows: 3,
  },
};

/**
 * Textarea in French
 */
export const FrenchTextarea: Story = {
  args: {
    textareaId: 'french-textarea',
    name: 'commentaires',
    label: 'Commentaires',
    hint: 'Partagez vos pensées',
    required: true,
    rows: 4,
    lang: 'fr',
  },
};

/**
 * Textarea with guided prompt
 */
export const GuidedPrompt: Story = {
  render: (args) => (
    <div>
      <GcdsTextarea {...args} />
      <div style={{ marginTop: '8px', fontSize: '14px' }}>
        <p>Tips for a good response:</p>
        <ul>
          <li>Be specific about what happened</li>
          <li>Include relevant dates and times</li>
          <li>Describe any communication you've had with us already</li>
          <li>Explain what resolution you're seeking</li>
        </ul>
      </div>
    </div>
  ),
  args: {
    textareaId: 'guided-textarea',
    name: 'complaint',
    label: 'Describe your issue',
    required: true,
    rows: 6,
  },
};
