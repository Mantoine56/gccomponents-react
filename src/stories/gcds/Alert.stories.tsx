import type { Meta, StoryObj } from '@storybook/react';
import { GcdsAlert } from '@cdssnc/gcds-components-react';

/**
 * GcdsAlert component from the GC Design System
 * 
 * The Alert component provides important messages to users that require their attention.
 * Alerts can notify users about system status, provide feedback on user actions,
 * or display important informational messages.
 * 
 * Use alerts to:
 * - Notify users about system events (success, warning, error, info)
 * - Provide important feedback that requires attention
 * - Display time-sensitive information
 */
const meta: Meta<typeof GcdsAlert> = {
  title: 'GCDS Components/Base/Feedback/Alert',
  component: GcdsAlert,
  parameters: {
    docs: {
      description: {
        component: 'The Alert component displays important messages to users that require attention. It uses visual styling and icons to convey different levels of importance.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    alertRole: {
      control: 'select',
      options: ['danger', 'info', 'success', 'warning'],
      description: 'Defines the alert type and its visual styling',
      defaultValue: 'info'
    },
    container: {
      control: 'select',
      options: ['full', 'xl', 'lg', 'md', 'sm', 'xs'],
      description: 'Sets the maximum width of the alert content',
      defaultValue: 'full'
    },
    heading: {
      control: 'text',
      description: 'The heading text for the alert'
    },
    hideCloseBtn: {
      control: 'boolean',
      description: 'When true, hides the close button',
      defaultValue: false
    },
    hideRoleIcon: {
      control: 'boolean',
      description: 'When true, hides the role icon on the left',
      defaultValue: false
    },
    isFixed: {
      control: 'boolean',
      description: 'When true, the alert position is fixed at the top of the viewport',
      defaultValue: false
    },
    lang: {
      control: 'select',
      options: ['en', 'fr'],
      description: 'Sets the language of the component',
      defaultValue: 'en'
    },
    children: {
      control: 'text',
      description: 'The main content of the alert'
    }
  },
};

export default meta;
type Story = StoryObj<typeof GcdsAlert>;

/**
 * Basic usage of the GcdsAlert component with default settings (info role)
 */
export const Basic: Story = {
  args: {
    heading: 'Information',
    children: 'This is an informational alert that provides useful context.',
    alertRole: 'info'
  },
};

/**
 * Success alert used to provide positive feedback when an action completes successfully
 */
export const Success: Story = {
  args: {
    heading: 'Success',
    children: 'Your changes have been saved successfully.',
    alertRole: 'success'
  },
};

/**
 * Warning alert used to highlight potential issues that require attention
 */
export const Warning: Story = {
  args: {
    heading: 'Warning',
    children: 'Your session will expire in 5 minutes. Please save your work.',
    alertRole: 'warning'
  },
};

/**
 * Danger alert used for critical errors or issues that require immediate attention
 */
export const Danger: Story = {
  args: {
    heading: 'Error',
    children: 'There was a problem processing your request. Please try again.',
    alertRole: 'danger'
  },
};

/**
 * Fixed position alert that stays at the top of the viewport
 */
export const FixedPosition: Story = {
  args: {
    heading: 'Fixed Alert',
    children: 'This alert is fixed to the top of the viewport.',
    alertRole: 'info',
    isFixed: true
  },
};

/**
 * Alert with controlled width using the container property
 */
export const WithContainer: Story = {
  args: {
    heading: 'Width Controlled Alert',
    children: 'This alert has a maximum width set by the container property.',
    alertRole: 'info',
    container: 'md'
  },
};

/**
 * Alert without the close button
 */
export const NoCloseButton: Story = {
  args: {
    heading: 'Alert Without Close Button',
    children: 'This alert cannot be dismissed by the user.',
    alertRole: 'warning',
    hideCloseBtn: true
  },
};

/**
 * Alert without the role icon
 */
export const NoRoleIcon: Story = {
  args: {
    heading: 'Alert Without Role Icon',
    children: 'This alert does not display the role icon on the left.',
    alertRole: 'info',
    hideRoleIcon: true
  },
};

/**
 * Alert in French
 */
export const FrenchLanguage: Story = {
  args: {
    heading: 'Alerte d\'information',
    children: 'Ceci est une alerte en français.',
    alertRole: 'info',
    lang: 'fr'
  },
};
