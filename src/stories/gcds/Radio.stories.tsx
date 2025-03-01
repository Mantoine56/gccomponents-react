import type { Meta, StoryObj } from '@storybook/react';
import { GcdsRadioGroup } from '@cdssnc/gcds-components-react';

/**
 * GcdsRadioGroup component from the GC Design System
 */
const meta: Meta<typeof GcdsRadioGroup> = {
  title: 'GCDS Components/Base/Form/Radio',
  component: GcdsRadioGroup,
  parameters: {
    docs: {
      description: {
        component: 'GcdsRadioGroup component from the GC Design System provides a group of radio buttons for selecting one option.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof GcdsRadioGroup>;

/**
 * Basic usage of the GcdsRadioGroup component
 */
export const Basic: Story = {
  render: () => (
    <GcdsRadioGroup 
      name="radio-group-basic"
      options={[
        { id: 'radio1', value: 'option1', label: 'Option 1' },
        { id: 'radio2', value: 'option2', label: 'Option 2' },
        { id: 'radio3', value: 'option3', label: 'Option 3' }
      ]}
    />
  ),
};

/**
 * Required radio group
 */
export const Required: Story = {
  render: () => (
    <GcdsRadioGroup 
      name="radio-group-required"
      required={true}
      options={[
        { id: 'required1', value: 'option1', label: 'Option 1' },
        { id: 'required2', value: 'option2', label: 'Option 2' }
      ]}
    />
  ),
};
