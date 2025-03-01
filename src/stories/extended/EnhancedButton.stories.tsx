import type { Meta, StoryObj } from '@storybook/react';
import { EnhancedButton } from '../../components/lib/EnhancedButton';

/**
 * The EnhancedButton is an extension of the GCDS Button component with added features 
 * like loading states, pulse animations, and confirmation dialogs.
 */
const meta: Meta<typeof EnhancedButton> = {
  title: 'Extended Components/EnhancedButton',
  component: EnhancedButton,
  parameters: {
    docs: {
      description: {
        component: 'EnhancedButton component extends the GCDS Button with additional features like loading state, pulse animation, and confirmation dialogs.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    buttonRole: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
      description: 'The role/style of the button'
    },
    loading: {
      control: 'boolean',
      description: 'Shows a loading spinner and disables the button'
    },
    pulse: {
      control: 'boolean',
      description: 'Adds a pulsing animation to draw attention'
    },
    confirmationText: {
      control: 'text',
      description: 'Text for the confirmation dialog if enabled'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled'
    },
    lang: {
      control: 'select',
      options: ['en', 'fr'],
      description: 'Language of the component'
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'The HTML button type attribute'
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when the button is clicked'
    }
  }
};

export default meta;
type Story = StoryObj<typeof EnhancedButton>;

/**
 * Default state of the EnhancedButton component
 */
export const Default: Story = {
  args: {
    children: 'Click me',
    buttonRole: 'primary',
    lang: 'en',
  },
};

/**
 * Loading state with a spinner
 */
export const Loading: Story = {
  args: {
    children: 'Submit',
    buttonRole: 'primary',
    loading: true,
    lang: 'en',
  },
};

/**
 * Button with pulse animation to attract attention
 */
export const Pulsing: Story = {
  args: {
    children: 'Important action',
    buttonRole: 'primary',
    pulse: true,
    lang: 'en',
  },
};

/**
 * Button with confirmation dialog
 */
export const WithConfirmation: Story = {
  args: {
    children: 'Delete item',
    buttonRole: 'danger',
    confirmationText: 'Are you sure?',
    lang: 'en',
  },
};

/**
 * Secondary button style
 */
export const Secondary: Story = {
  args: {
    children: 'Cancel',
    buttonRole: 'secondary',
    lang: 'en',
  },
}; 