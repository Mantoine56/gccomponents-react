import type { Meta, StoryObj } from '@storybook/react';
import { GcdsRadioGroup, GcdsFieldset } from '@cdssnc/gcds-components-react';
import React from 'react';

/**
 * GcdsRadioGroup component from the GC Design System
 * 
 * The RadioGroup component provides a standardized way to create a group of
 * radio buttons that allow users to select exactly one option from a set.
 * It supports various configurations including hints, disabled states, and
 * pre-selected options.
 * 
 * Use RadioGroup for:
 * - Allowing users to select a single option from a list
 * - Presenting mutually exclusive choices
 * - When options need to be visible at all times
 * - When the number of options is relatively small
 */
const meta: Meta<typeof GcdsRadioGroup> = {
  title: 'GCDS Components/Base/Form/RadioGroup',
  component: GcdsRadioGroup,
  parameters: {
    docs: {
      description: {
        component: 'The RadioGroup component provides a standardized group of radio buttons for selecting one option from a set with accessibility and styling consistent with the GC Design System.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'object',
      description: 'Array of option objects or a string with comma-separated values',
      table: {
        type: { summary: 'string | Array<RadioObject>' },
      },
    },
    name: {
      control: 'text',
      description: 'Name attribute for the radio button group',
      table: {
        type: { summary: 'string' },
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
type Story = StoryObj<typeof GcdsRadioGroup>;

/**
 * Basic usage of the GcdsRadioGroup component
 */
export const Basic: Story = {
  args: {
    name: 'radio-group-basic',
    options: [
      { id: 'radio1', value: 'option1', label: 'Option 1' },
      { id: 'radio2', value: 'option2', label: 'Option 2' },
      { id: 'radio3', value: 'option3', label: 'Option 3' }
    ],
  },
};

/**
 * RadioGroup with a pre-selected option
 */
export const WithSelectedOption: Story = {
  args: {
    name: 'radio-group-selected',
    options: [
      { id: 'radio1', value: 'option1', label: 'Option 1' },
      { id: 'radio2', value: 'option2', label: 'Option 2', checked: true },
      { id: 'radio3', value: 'option3', label: 'Option 3' }
    ],
  },
};

/**
 * RadioGroup with hint text for options
 */
export const WithHints: Story = {
  args: {
    name: 'radio-group-hints',
    options: [
      { id: 'email', value: 'email', label: 'Email', hint: 'Receive notifications by email' },
      { id: 'phone', value: 'phone', label: 'Phone', hint: 'Receive notifications by SMS' },
      { id: 'mail', value: 'mail', label: 'Mail', hint: 'Receive notifications by postal mail' }
    ],
  },
};

/**
 * RadioGroup with a disabled option
 */
export const WithDisabledOption: Story = {
  args: {
    name: 'radio-group-disabled',
    options: [
      { id: 'standard', value: 'standard', label: 'Standard delivery (3-5 business days)' },
      { id: 'express', value: 'express', label: 'Express delivery (1-2 business days)' },
      { id: 'same-day', value: 'same-day', label: 'Same day delivery', disabled: true, hint: 'Currently unavailable in your area' }
    ],
  },
};

/**
 * RadioGroup within a fieldset with error
 */
export const WithError: Story = {
  render: (args) => (
    <GcdsFieldset
      fieldsetId="error-fieldset"
      legend="Do you agree to the terms?"
      required={true}
      errorMessage="Please select an option"
    >
      <GcdsRadioGroup {...args} />
    </GcdsFieldset>
  ),
  args: {
    name: 'radio-group-error',
    options: [
      { id: 'yes', value: 'yes', label: 'Yes' },
      { id: 'no', value: 'no', label: 'No' }
    ],
  },
};

/**
 * RadioGroup with options as a string
 */
export const WithStringOptions: Story = {
  args: {
    name: 'radio-group-string',
    options: 'Small, Medium, Large, X-Large',
  },
};

/**
 * RadioGroup in French
 */
export const FrenchRadioGroup: Story = {
  args: {
    name: 'radio-group-french',
    options: [
      { id: 'oui', value: 'oui', label: 'Oui' },
      { id: 'non', value: 'non', label: 'Non' },
      { id: 'peut-etre', value: 'peut-etre', label: 'Peut-être' }
    ],
    lang: 'fr',
  },
};

/**
 * RadioGroup within a fieldset
 */
export const WithinFieldset: Story = {
  render: (args) => (
    <GcdsFieldset
      fieldsetId="contact-preferences-fieldset"
      legend="Contact preferences"
      hint="Select your preferred method of contact"
      required={true}
    >
      <GcdsRadioGroup {...args} />
    </GcdsFieldset>
  ),
  args: {
    name: 'contact-preference',
    options: [
      { id: 'email', value: 'email', label: 'Email' },
      { id: 'phone', value: 'phone', label: 'Phone' },
      { id: 'mail', value: 'mail', label: 'Mail' }
    ],
  },
};

/**
 * RadioGroup for Yes/No question
 */
export const YesNoQuestion: Story = {
  render: (args) => (
    <GcdsFieldset
      fieldsetId="newsletter-fieldset"
      legend="Would you like to receive our newsletter?"
      required={true}
    >
      <GcdsRadioGroup {...args} />
    </GcdsFieldset>
  ),
  args: {
    name: 'newsletter-signup',
    options: [
      { id: 'yes', value: 'yes', label: 'Yes' },
      { id: 'no', value: 'no', label: 'No' }
    ],
  },
}; 