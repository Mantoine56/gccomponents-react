import type { Meta, StoryObj } from '@storybook/react';
import { GcdsPhaseBanner } from '@cdssnc/gcds-components-react';

/**
 * GcdsPhaseBanner component from the GC Design System
 * 
 * The Phase Banner component is used to inform users about the status of a service or feature.
 */
const meta: Meta<typeof GcdsPhaseBanner> = {
  title: 'GCDS Components/Base/PhaseBanner',
  component: GcdsPhaseBanner,
  parameters: {
    docs: {
      description: {
        component: 'The Phase Banner indicates the status or phase of a service or feature.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    bannerRole: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Defines the banner role (primary or secondary)',
    },
    container: {
      control: 'select',
      options: ['full', 'xl', 'lg', 'md', 'sm', 'xs'],
      description: 'Defines the container width of the phase banner content',
    },
    isFixed: {
      control: 'boolean',
      description: 'Defines if the banner\'s position is fixed',
    },
    children: {
      control: 'text',
      description: 'The content of the phase banner',
    },
  },
};

export default meta;
type Story = StoryObj<typeof GcdsPhaseBanner>;

/**
 * Basic usage of the GcdsPhaseBanner component
 */
export const Basic: Story = {
  args: {
    children: 'This service is currently in beta. Some features may not work correctly.',
  },
};

/**
 * Primary role banner
 */
export const PrimaryBanner: Story = {
  args: {
    bannerRole: 'primary',
    children: 'This is an important system-wide notice that requires attention.',
  },
};

/**
 * Secondary role banner
 */
export const SecondaryBanner: Story = {
  args: {
    bannerRole: 'secondary',
    children: 'This feature is in alpha testing. Feedback is welcome.',
  },
};

/**
 * Fixed position banner
 */
export const FixedBanner: Story = {
  args: {
    isFixed: true,
    children: 'This banner will stay visible as users scroll the page.',
  },
};

/**
 * Container size example
 */
export const ContainerSized: Story = {
  args: {
    container: 'md',
    children: 'This banner has a medium-sized container width.',
  },
}; 