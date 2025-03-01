import type { Meta, StoryObj } from '@storybook/react';
import { GcdsHint, GcdsInput, GcdsFieldset, GcdsTextarea } from '@cdssnc/gcds-components-react';
import React from 'react';

/**
 * The GcdsHint component provides supplementary guidance for form fields.
 * 
 * Hint text helps users understand what information they need to provide in a form field
 * or how to make appropriate selections. It appears below the field label and above
 * the input, providing context before users interact with the field.
 * 
 * Use hint text when:
 * - Users might need clarification about what information is required
 * - You need to specify format requirements (e.g., date formats, password rules)
 * - Extra context would help users complete the form correctly the first time
 * - You want to reduce errors and form submission failures
 */
const meta: Meta<typeof GcdsHint> = {
  title: 'GCDS Components/Base/Form/Hint',
  component: GcdsHint,
  parameters: {
    docs: {
      description: {
        component: 'The Hint component provides supplementary guidance for form fields. It helps users understand what information they need to enter and how to complete forms correctly.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    // Core properties
    hintId: {
      control: 'text',
      description: 'Unique identifier for the hint element. This ID is used to associate the hint with a form field using aria-describedby.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      }
    },
    children: {
      control: 'text',
      description: 'The hint text content that provides guidance to the user.',
      table: {
        type: { summary: 'ReactNode' },
      }
    },
  },
};

export default meta;
type Story = StoryObj<typeof GcdsHint>;

/**
 * Basic usage of the GcdsHint component
 * 
 * The standalone hint component can be used independently, but is typically
 * included as part of form components through their hint props.
 */
export const Basic: Story = {
  args: {
    hintId: 'input-hint',
    children: 'This is a hint text that provides additional information about a form field.',
  },
};

/**
 * Short hint example
 * 
 * Short hints are concise and direct, providing just enough information
 * to guide the user.
 */
export const ShortHint: Story = {
  args: {
    hintId: 'short-hint',
    children: 'Enter your email address.',
  },
};

/**
 * Detailed hint example
 * 
 * Detailed hints provide comprehensive guidance for complex requirements
 * such as password rules or specific formatting expectations.
 */
export const DetailedHint: Story = {
  args: {
    hintId: 'detailed-hint',
    children: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
  },
}; 

/**
 * Hint with an input field
 * 
 * This example demonstrates how hints work within the context of a form.
 * The hint is associated with the input field using aria-describedby.
 */
export const WithInput: Story = {
  render: () => (
    <div style={{ maxWidth: '500px' }}>
      <GcdsInput
        inputId="email-input"
        id="email-input"
        label="Email address"
        name="email"
        type="email"
        hint="We'll only use your email to send you application updates."
      />
      
      <div style={{ marginTop: '2rem' }}>
        <p><strong>How it works:</strong></p>
        <p>When using hint text with form components:</p>
        <ul>
          <li>The hint is automatically rendered between the label and the input</li>
          <li>The hint is associated with the input using aria-describedby</li>
          <li>Screen readers will announce the hint when the input receives focus</li>
        </ul>
      </div>
    </div>
  ),
};

/**
 * Hint with a textarea
 * 
 * This example shows how hints can provide guidance for longer-form inputs.
 */
export const WithTextarea: Story = {
  render: () => (
    <GcdsTextarea
      textareaId="feedback"
      id="feedback"
      label="Tell us about your experience"
      name="feedback"
      hint="Be specific about what worked well and what could be improved. Your feedback helps us enhance our services."
      rows={5}
    />
  ),
};

/**
 * Hint with a fieldset
 * 
 * This example demonstrates how hints can provide context for grouped form elements.
 */
export const WithFieldset: Story = {
  render: () => (
    <GcdsFieldset
      fieldsetId="notifications"
      legend="Notification preferences"
      hint="You can receive notifications through multiple channels. Select all that apply."
    >
      <div style={{ marginTop: '1rem' }}>
        <GcdsInput 
          inputId="email-checkbox"
          id="email-checkbox"
          label="Email"
          name="notifications"
          value="email"
        />
      </div>
      <div style={{ marginTop: '0.5rem' }}>
        <GcdsInput 
          inputId="sms-checkbox"
          id="sms-checkbox"
          label="SMS"
          name="notifications"
          value="sms"
        />
      </div>
      <div style={{ marginTop: '0.5rem' }}>
        <GcdsInput 
          inputId="mail-checkbox"
          id="mail-checkbox"
          label="Mail"
          name="notifications"
          value="mail"
        />
      </div>
    </GcdsFieldset>
  ),
};

/**
 * Accessibility considerations
 * 
 * This example demonstrates the proper semantic structure and accessibility features
 * of hint text in forms.
 */
export const AccessibilityFocused: Story = {
  render: () => (
    <div style={{ maxWidth: '500px' }}>
      <h3>Accessible Form with Hint Text</h3>
      
      <GcdsInput
        inputId="passport-number"
        id="passport-number"
        label="Passport number"
        name="passport"
        hint="Your passport number can be found at the top right corner of your passport biographic page."
        required
      />
      
      <div style={{ marginTop: '2rem', backgroundColor: '#f5f5f5', padding: '1rem', borderRadius: '5px' }}>
        <p><strong>Accessibility Features:</strong></p>
        <ul>
          <li>Hint text is programmatically associated with the form field</li>
          <li>Proper color contrast ensures hint text is readable</li>
          <li>Hint appears before the input in the DOM, matching visual presentation</li>
          <li>Hints supplement but don't replace clear labeling</li>
        </ul>
      </div>
    </div>
  ),
};

/**
 * French language example
 * 
 * This example demonstrates the component with French language content.
 */
export const FrenchHint: Story = {
  render: () => (
    <GcdsInput
      inputId="phone-input"
      id="phone-input"
      label="Numéro de téléphone"
      name="telephone"
      type="text"
      hint="Votre numéro de téléphone sera utilisé uniquement en cas d'urgence."
      lang="fr"
    />
  ),
}; 