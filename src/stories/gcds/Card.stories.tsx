import type { Meta, StoryObj } from '@storybook/react';
import { GcdsCard } from '@cdssnc/gcds-components-react';

/**
 * GcdsCard component from the GC Design System
 */
const meta: Meta<typeof GcdsCard> = {
  title: 'GCDS Components/Base/Layout/Card',
  component: GcdsCard,
  parameters: {
    docs: {
      description: {
        component: 'GcdsCard component from the GC Design System.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    cardTitle: {
      control: 'text',
      description: 'The title of the card (required)'
    },
    href: {
      control: 'text',
      description: 'The link URL for the card (required)'
    },
    description: {
      control: 'text',
      description: 'Optional description for the card'
    }
  }
};

export default meta;
type Story = StoryObj<typeof GcdsCard>;

/**
 * Basic usage of the GcdsCard component
 */
export const Basic: Story = {
  args: {
    cardTitle: 'Example Card',
    href: 'https://example.com',
    description: 'This is an example card description.'
  },
};

/**
 * Card with minimal required properties
 */
export const Minimal: Story = {
  args: {
    cardTitle: 'Minimal Card',
    href: '#'
  },
};
