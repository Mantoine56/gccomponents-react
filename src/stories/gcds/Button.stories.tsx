import type { Meta, StoryObj } from '@storybook/react';
import { GcdsButton } from '@cdssnc/gcds-components-react';

/**
 * The Button component is a clickable element that triggers an action or event.
 * 
 * This component uses the official GC Design System Button component.
 */
const meta: Meta<typeof GcdsButton> = {
  title: 'GCDS Components/Base/Action/Button',
  component: GcdsButton,
  parameters: {
    docs: {
      description: {
        component: 'The Button component from the GC Design System is used to trigger an action or event when clicked.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: { 
      control: 'text',
      description: 'The content of the button'
    },
    buttonRole: { 
      control: 'select', 
      options: ['primary', 'secondary', 'danger', 'blue'],
      description: 'The visual role/style of the button'
    },
    type: { 
      control: 'select', 
      options: ['button', 'submit', 'reset'],
      description: 'The HTML button type attribute'
    },
    disabled: { 
      control: 'boolean',
      description: 'Whether the button is disabled'
    },
    size: {
      control: 'select',
      options: ['regular', 'small'],
      description: 'The size of the button'
    }
  },
};

export default meta;
type Story = StoryObj<typeof GcdsButton>;

/**
 * Default button with primary styling
 */
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    buttonRole: 'primary',
    type: 'button',
    disabled: false,
  },
};

/**
 * Secondary button with less visual prominence
 */
export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    buttonRole: 'secondary',
    type: 'button',
    disabled: false,
  },
};

/**
 * Danger button for destructive actions
 */
export const Danger: Story = {
  args: {
    children: 'Danger Button',
    buttonRole: 'danger',
    type: 'button',
    disabled: false,
  },
};

/**
 * Disabled button that cannot be interacted with
 */
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    buttonRole: 'primary',
    type: 'button',
    disabled: true,
  },
};

/**
 * Small button for compact UI areas
 */
export const Small: Story = {
  args: {
    children: 'Small Button',
    buttonRole: 'primary',
    size: 'small',
    type: 'button',
  },
};

/**
 * Regular-sized button (default)
 */
export const Regular: Story = {
  args: {
    children: 'Regular Button',
    buttonRole: 'primary',
    size: 'regular',
    type: 'button',
  },
}; 