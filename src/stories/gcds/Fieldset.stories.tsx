import type { Meta, StoryObj } from '@storybook/react';
import { GcdsFieldset, GcdsCheckbox, GcdsRadioGroup, GcdsInput } from '@cdssnc/gcds-components-react';
import React from 'react';

/**
 * GcdsFieldset component from the GC Design System
 * 
 * The Fieldset component provides a container for grouping related form controls
 * with a legend. It's used to create logical sections in a form, improving 
 * accessibility and organization. Fieldsets are particularly important for grouping
 * related checkboxes, radio buttons, or other form inputs that share a common purpose.
 * 
 * Use Fieldset for:
 * - Grouping related form controls (checkboxes, radio buttons, inputs)
 * - Creating logical sections in complex forms
 * - Improving form accessibility by associating controls with descriptive legends
 * - Providing context for form elements that operate as a unit
 */
const meta: Meta<typeof GcdsFieldset> = {
  title: 'GCDS Components/Base/Form/Fieldset',
  component: GcdsFieldset,
  parameters: {
    docs: {
      description: {
        component: 'The Fieldset component creates a container for grouping related form controls with proper semantic structure and accessibility features consistent with the GC Design System.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    fieldsetId: {
      control: 'text',
      description: 'Unique identifier for the fieldset element',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
      required: true
    },
    legend: {
      control: 'text',
      description: 'Descriptive text that appears as the title of the fieldset',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
      required: true
    },
    required: {
      control: 'boolean',
      description: 'When true, marks the fieldset group as required',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      }
    },
    hint: {
      control: 'text',
      description: 'Additional information displayed below the legend to guide users',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      }
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display when validation fails for any element in the fieldset',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      }
    },
    lang: {
      control: 'select',
      options: ['en', 'fr'],
      description: 'Sets the language of the component',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'en' },
      }
    },
    children: {
      description: 'The form controls to be grouped in the fieldset',
      table: {
        type: { summary: 'ReactNode' },
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof GcdsFieldset>;

/**
 * Basic usage of the GcdsFieldset component with checkboxes
 * 
 * This example shows how to group multiple checkboxes within a fieldset,
 * providing a clear label through the legend.
 */
export const WithCheckboxes: Story = {
  render: (args) => (
    <GcdsFieldset 
      fieldsetId={args.fieldsetId}
      legend={args.legend}
      required={args.required}
      hint={args.hint}
      errorMessage={args.errorMessage}
      lang={args.lang}
    >
      <GcdsCheckbox
        checkboxId="checkbox-1"
        name="checkbox-group"
        label="Option 1"
      />
      <GcdsCheckbox
        checkboxId="checkbox-2"
        name="checkbox-group"
        label="Option 2"
      />
      <GcdsCheckbox
        checkboxId="checkbox-3"
        name="checkbox-group"
        label="Option 3"
      />
    </GcdsFieldset>
  ),
  args: {
    fieldsetId: "basic-fieldset",
    legend: "Select all that apply",
    lang: 'en'
  }
};

/**
 * Fieldset with radio group
 * 
 * Fieldsets are commonly used to group radio buttons, providing
 * context about the choice being presented.
 */
export const WithRadioGroup: Story = {
  render: (args) => (
    <GcdsFieldset 
      fieldsetId={args.fieldsetId}
      legend={args.legend}
      required={args.required}
      hint={args.hint}
      errorMessage={args.errorMessage}
      lang={args.lang}
    >
      <GcdsRadioGroup
        name="radio-group"
        options={[
          { id: 'yes', value: 'yes', label: 'Yes' },
          { id: 'no', value: 'no', label: 'No' },
          { id: 'maybe', value: 'maybe', label: 'Maybe' }
        ]}
      />
    </GcdsFieldset>
  ),
  args: {
    fieldsetId: "radio-fieldset",
    legend: "Would you like to receive our newsletter?",
    required: true,
    lang: 'en'
  }
};

/**
 * Required fieldset with hint text
 * 
 * Adding hint text provides additional context to help users understand
 * what information is being requested.
 */
export const WithHint: Story = {
  render: (args) => (
    <GcdsFieldset 
      fieldsetId={args.fieldsetId}
      legend={args.legend}
      required={args.required}
      hint={args.hint}
      errorMessage={args.errorMessage}
      lang={args.lang}
    >
      <GcdsCheckbox
        checkboxId="consent-1"
        name="consent-group"
        label="I agree to receive marketing communications"
      />
      <GcdsCheckbox
        checkboxId="consent-2"
        name="consent-group"
        label="I agree to participate in surveys"
      />
    </GcdsFieldset>
  ),
  args: {
    fieldsetId: "hint-fieldset",
    legend: "Communication preferences",
    required: true,
    hint: "Your selections can be changed at any time through your account settings",
    lang: 'en'
  }
};

/**
 * Fieldset with error message
 * 
 * When validation fails, an error message can be displayed to guide the user.
 */
export const WithError: Story = {
  render: (args) => (
    <GcdsFieldset 
      fieldsetId={args.fieldsetId}
      legend={args.legend}
      required={args.required}
      hint={args.hint}
      errorMessage={args.errorMessage}
      lang={args.lang}
    >
      <GcdsCheckbox
        checkboxId="terms-1"
        name="terms-group"
        label="I have read and agree to the terms and conditions"
      />
      <GcdsCheckbox
        checkboxId="terms-2"
        name="terms-group"
        label="I have read and agree to the privacy policy"
      />
    </GcdsFieldset>
  ),
  args: {
    fieldsetId: "error-fieldset",
    legend: "Terms and conditions",
    required: true,
    errorMessage: "You must agree to all terms to continue",
    lang: 'en'
  }
};

/**
 * Fieldset with multiple input types
 * 
 * Fieldsets can group different types of form elements that are logically related.
 */
export const WithMultipleInputs: Story = {
  render: (args) => (
    <GcdsFieldset 
      fieldsetId={args.fieldsetId}
      legend={args.legend}
      required={args.required}
      hint={args.hint}
      errorMessage={args.errorMessage}
      lang={args.lang}
    >
      <div style={{ marginBottom: '16px' }}>
        <GcdsInput
          inputId="address1"
          name="address1"
          label="Street address"
          required={true}
        />
      </div>
      <div style={{ marginBottom: '16px' }}>
        <GcdsInput
          inputId="address2"
          name="address2"
          label="Apartment, suite, etc. (optional)"
        />
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <GcdsInput
          inputId="city"
          name="city"
          label="City"
          required={true}
        />
        <GcdsInput
          inputId="postal"
          name="postal"
          label="Postal code"
          required={true}
        />
      </div>
    </GcdsFieldset>
  ),
  args: {
    fieldsetId: "address-fieldset",
    legend: "Mailing address",
    required: true,
    hint: "Please enter your complete mailing address",
    lang: 'en'
  }
};

/**
 * French fieldset
 * 
 * The fieldset component supports French language with appropriate translations.
 */
export const FrenchFieldset: Story = {
  render: (args) => (
    <GcdsFieldset 
      fieldsetId={args.fieldsetId}
      legend={args.legend}
      required={args.required}
      hint={args.hint}
      errorMessage={args.errorMessage}
      lang={args.lang}
    >
      <GcdsRadioGroup
        name="radio-group-fr"
        options={[
          { id: 'oui', value: 'oui', label: 'Oui' },
          { id: 'non', value: 'non', label: 'Non' }
        ]}
        lang="fr"
      />
    </GcdsFieldset>
  ),
  args: {
    fieldsetId: "french-fieldset",
    legend: "Voulez-vous recevoir notre bulletin d'information?",
    required: true,
    hint: "Vous pouvez modifier votre choix à tout moment",
    lang: 'fr'
  }
}; 