import type { Meta, StoryObj } from '@storybook/react';
import { GcdsErrorMessage, GcdsInput, GcdsFieldset, GcdsSelect } from '@cdssnc/gcds-components-react';
import React from 'react';

type Story = StoryObj<typeof GcdsErrorMessage>;

/**
 * The GcdsErrorMessage component displays validation errors associated with form controls.
 * 
 * Error messages inform users when they've entered invalid data or when required information
 * is missing. These messages help users understand what went wrong and how to fix it.
 * 
 * Use error messages to:
 * - Display validation errors associated with form fields
 * - Provide clear guidance on how to correct input errors
 * - Improve form accessibility by associating error messages with their respective form controls
 */
const meta: Meta<typeof GcdsErrorMessage> = {
  title: 'GCDS Components/Base/Form/ErrorMessage',
  component: GcdsErrorMessage,
  parameters: {
    docs: {
      description: {
        component: 'The ErrorMessage component displays validation errors for form fields. It provides clear feedback to users when they enter invalid data or when required information is missing.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    // Core properties
    messageId: {
      control: 'text',
      description: 'Unique identifier for the error message. This ID should match the aria-errormessage attribute of the associated form control.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      }
    },
    children: {
      control: 'text',
      description: 'The error message content that explains what went wrong and how to fix it',
      table: {
        type: { summary: 'ReactNode' },
      }
    },
  },
};

export default meta;

/**
 * Basic usage of the GcdsErrorMessage component
 * 
 * This example shows a standalone error message, but in practice, it should be
 * associated with a form control using proper ARIA attributes.
 */
export const Basic: Story = {
  args: {
    messageId: 'error-1',
    children: 'This field is required.',
  },
};

/**
 * Example with a longer error message
 * 
 * Error messages should be clear, concise, and specific about what the problem is
 * and how to fix it.
 */
export const LongMessage: Story = {
  args: {
    messageId: 'error-2',
    children: 'Please enter a valid email address in the format name@example.com.',
  },
};

/**
 * Error message associated with an input field
 * 
 * This example demonstrates how to associate an error message with an input field
 * using the proper ARIA attributes.
 */
export const WithInput: Story = {
  render: () => (
    <div>
      <GcdsInput
        inputId="email-input"
        id="email-input"
        name="email"
        label="Email address"
        errorMessage="Please enter a valid email address."
        type="email"
        value="invalid-email"
      />
      
      <div style={{ marginTop: '2rem' }}>
        <p><strong>How it works:</strong></p>
        <p>When the <code>errorMessage</code> prop is provided to a form component:</p>
        <ul>
          <li>The component enters an error state with red border</li>
          <li>The GcdsErrorMessage component is automatically rendered</li>
          <li>Proper ARIA attributes are added for accessibility</li>
        </ul>
      </div>
    </div>
  ),
};

/**
 * Error message with form requirements
 * 
 * This example shows how to provide guidance on form field requirements
 * and display an error when those requirements aren't met.
 */
export const WithRequirements: Story = {
  render: () => (
    <div>
      <GcdsInput
        inputId="password-input"
        id="password-input"
        name="password"
        label="Create password"
        type="password"
        value="abc"
        hint="Password must be at least 8 characters and include at least one number and one special character."
        errorMessage="Your password does not meet the minimum requirements."
      />
    </div>
  ),
};

/**
 * Multiple error messages in a form
 * 
 * This example shows how error messages work in a form with multiple fields.
 * Each error message is associated with its respective form control.
 */
export const MultipleErrors: Story = {
  render: () => (
    <div>
      <GcdsFieldset fieldsetId="contact-fieldset" legend="Contact information">
        <div style={{ marginBottom: '1.5rem' }}>
          <GcdsInput
            inputId="name-input"
            id="name-input"
            name="name"
            label="Full name"
            required
            errorMessage="Full name is required."
          />
        </div>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <GcdsInput
            inputId="email-input-2"
            id="email-input-2"
            name="email"
            label="Email address"
            type="email"
            value="invalid-email"
            errorMessage="Please enter a valid email address."
          />
        </div>
        
        <div>
          <GcdsSelect
            selectId="province-select"
            id="province-select"
            name="province"
            label="Province"
            required
            errorMessage="Please select a province."
          >
            <option value="">Select a province</option>
            <option value="AB">Alberta</option>
            <option value="BC">British Columbia</option>
            <option value="MB">Manitoba</option>
            <option value="NB">New Brunswick</option>
            <option value="NL">Newfoundland and Labrador</option>
            <option value="NS">Nova Scotia</option>
            <option value="ON">Ontario</option>
            <option value="PE">Prince Edward Island</option>
            <option value="QC">Quebec</option>
            <option value="SK">Saskatchewan</option>
            <option value="NT">Northwest Territories</option>
            <option value="NU">Nunavut</option>
            <option value="YT">Yukon</option>
          </GcdsSelect>
        </div>
      </GcdsFieldset>
      
      <div style={{ backgroundColor: '#f5f5f5', padding: '1rem', borderRadius: '5px' }}>
        <p><strong>Accessibility Note:</strong></p>
        <p>Error messages should be:</p>
        <ul>
          <li>Programmatically associated with their form fields</li>
          <li>Clear and specific about what went wrong</li>
          <li>Provide guidance on how to fix the issue</li>
          <li>Announced to screen readers when errors occur</li>
        </ul>
      </div>
    </div>
  ),
}; 