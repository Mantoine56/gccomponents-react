import type { Meta, StoryObj } from '@storybook/react';
import { GcdsSelect } from '@cdssnc/gcds-components-react';
import React from 'react';

/**
 * GcdsSelect component from the GC Design System
 * 
 * The Select component provides a standardized dropdown menu that allows users to
 * choose one option from a list. It includes support for required fields, disabled
 * states, error messages, and hint text to guide users.
 * 
 * Use Select for:
 * - Providing a list of options when space is limited
 * - When users need to select a single item from a predefined list
 * - When showing all options at once would take too much screen space
 * - When the list of options is relatively static and well-understood
 */
const meta: Meta<typeof GcdsSelect> = {
  title: 'GCDS Components/Base/Form/Select',
  component: GcdsSelect,
  parameters: {
    docs: {
      description: {
        component: 'The Select component provides a standardized dropdown menu for selecting options with accessibility and styling consistent with the GC Design System.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    selectId: {
      control: 'text',
      description: 'Unique identifier for the select element',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
      required: true
    },
    name: {
      control: 'text',
      description: 'Name attribute for the select element used in form submissions',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
      required: true
    },
    label: {
      control: 'text',
      description: 'Visible label text for the select element',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
      required: true
    },
    required: {
      control: 'boolean',
      description: 'When true, marks the select as a required field',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      }
    },
    disabled: {
      control: 'boolean',
      description: 'When true, disables the select element',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      }
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display when validation fails',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      }
    },
    hint: {
      control: 'text',
      description: 'Hint text to provide additional context about the selection',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      }
    },
    defaultValue: {
      control: 'text',
      description: 'Default value to be selected initially',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      }
    },
    validateOn: {
      control: 'select',
      options: ['blur', 'submit', 'other'],
      description: 'Specifies when validation should occur',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'blur' },
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
    }
  }
};

export default meta;
type Story = StoryObj<typeof GcdsSelect>;

/**
 * Basic usage of the GcdsSelect component
 * 
 * The basic implementation includes a label and a set of options.
 * Note: GcdsSelect expects option elements to be provided as children.
 */
export const Basic: Story = {
  render: (args) => (
    <GcdsSelect 
      selectId={args.selectId}
      name={args.name}
      label={args.label}
      required={args.required}
      disabled={args.disabled}
      errorMessage={args.errorMessage}
      hint={args.hint}
      defaultValue={args.defaultValue}
      lang={args.lang}
    >
      <option value="" disabled selected>Please select an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </GcdsSelect>
  ),
  args: {
    selectId: 'basic-select',
    name: 'basic-select',
    label: 'Select an option',
    lang: 'en'
  },
};

/**
 * Required select field
 * 
 * When a field is marked as required, the component will display
 * a required indicator and enforce validation.
 */
export const Required: Story = {
  render: (args) => (
    <GcdsSelect 
      selectId={args.selectId}
      name={args.name}
      label={args.label}
      required={args.required}
      disabled={args.disabled}
      errorMessage={args.errorMessage}
      hint={args.hint}
      defaultValue={args.defaultValue}
      lang={args.lang}
    >
      <option value="" disabled selected>Please select an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </GcdsSelect>
  ),
  args: {
    selectId: 'required-select',
    name: 'required-select',
    label: 'This selection is required',
    required: true,
    lang: 'en'
  },
};

/**
 * Disabled select field
 * 
 * A disabled select cannot be interacted with and appears visually muted.
 * Use this when an option is temporarily unavailable or depends on another selection.
 */
export const Disabled: Story = {
  render: (args) => (
    <GcdsSelect 
      selectId={args.selectId}
      name={args.name}
      label={args.label}
      required={args.required}
      disabled={args.disabled}
      errorMessage={args.errorMessage}
      hint={args.hint}
      defaultValue={args.defaultValue}
      lang={args.lang}
    >
      <option value="" disabled selected>Please select an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </GcdsSelect>
  ),
  args: {
    selectId: 'disabled-select',
    name: 'disabled-select',
    label: 'This select is disabled',
    disabled: true,
    lang: 'en'
  },
};

/**
 * Select with error message
 * 
 * When validation fails, an error message can be displayed to guide the user.
 */
export const WithError: Story = {
  render: (args) => (
    <GcdsSelect 
      selectId={args.selectId}
      name={args.name}
      label={args.label}
      required={args.required}
      disabled={args.disabled}
      errorMessage={args.errorMessage}
      hint={args.hint}
      defaultValue={args.defaultValue}
      lang={args.lang}
    >
      <option value="" disabled selected>Please select an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </GcdsSelect>
  ),
  args: {
    selectId: 'error-select',
    name: 'error-select',
    label: 'Select with error',
    required: true,
    errorMessage: 'Please select a valid option',
    lang: 'en'
  },
};

/**
 * Select with hint text
 * 
 * Hint text provides additional context to help users make appropriate selections.
 */
export const WithHint: Story = {
  render: (args) => (
    <GcdsSelect 
      selectId={args.selectId}
      name={args.name}
      label={args.label}
      required={args.required}
      disabled={args.disabled}
      errorMessage={args.errorMessage}
      hint={args.hint}
      defaultValue={args.defaultValue}
      lang={args.lang}
    >
      <option value="" disabled selected>Please select an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </GcdsSelect>
  ),
  args: {
    selectId: 'hint-select',
    name: 'hint-select',
    label: 'Select with hint',
    hint: 'This provides additional context for your selection',
    lang: 'en'
  },
};

/**
 * Select with default value
 * 
 * A pre-selected option can be specified using the defaultValue prop.
 */
export const WithDefaultValue: Story = {
  render: (args) => (
    <GcdsSelect 
      selectId={args.selectId}
      name={args.name}
      label={args.label}
      required={args.required}
      disabled={args.disabled}
      errorMessage={args.errorMessage}
      hint={args.hint}
      defaultValue={args.defaultValue}
      lang={args.lang}
    >
      <option value="" disabled>Please select an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </GcdsSelect>
  ),
  args: {
    selectId: 'default-value-select',
    name: 'default-value-select',
    label: 'Select with default value',
    defaultValue: 'option2',
    lang: 'en'
  },
};

/**
 * Select with optgroups
 * 
 * Options can be grouped into categories using optgroup elements.
 */
export const WithOptgroups: Story = {
  render: (args) => (
    <GcdsSelect 
      selectId={args.selectId}
      name={args.name}
      label={args.label}
      required={args.required}
      disabled={args.disabled}
      errorMessage={args.errorMessage}
      hint={args.hint}
      defaultValue={args.defaultValue}
      lang={args.lang}
    >
      <option value="" disabled selected>Please select a country</option>
      <optgroup label="North America">
        <option value="ca">Canada</option>
        <option value="us">United States</option>
        <option value="mx">Mexico</option>
      </optgroup>
      <optgroup label="Europe">
        <option value="fr">France</option>
        <option value="de">Germany</option>
        <option value="uk">United Kingdom</option>
      </optgroup>
    </GcdsSelect>
  ),
  args: {
    selectId: 'optgroups-select',
    name: 'optgroups-select',
    label: 'Select a country',
    hint: 'Countries are grouped by continent',
    lang: 'en'
  },
};

/**
 * French select
 * 
 * The select component supports French language with appropriate labels and messages.
 */
export const FrenchSelect: Story = {
  render: (args) => (
    <GcdsSelect 
      selectId={args.selectId}
      name={args.name}
      label={args.label}
      required={args.required}
      disabled={args.disabled}
      errorMessage={args.errorMessage}
      hint={args.hint}
      defaultValue={args.defaultValue}
      lang={args.lang}
    >
      <option value="" disabled selected>Veuillez sélectionner une option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </GcdsSelect>
  ),
  args: {
    selectId: 'french-select',
    name: 'french-select',
    label: 'Sélectionnez une option',
    required: true,
    hint: 'Information supplémentaire pour vous aider à faire votre choix',
    lang: 'fr'
  },
};
