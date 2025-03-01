import type { Meta, StoryObj } from '@storybook/react';
import { GcdsHeader } from '@cdssnc/gcds-components-react';

/**
 * The Header component is the official Government of Canada branded header landmark.
 * 
 * This component uses the GCDS Header component to provide a consistent branding experience.
 */
const meta: Meta<typeof GcdsHeader> = {
  title: 'GCDS Components/Base/Header',
  component: GcdsHeader,
  parameters: {
    docs: {
      description: {
        component: 'The Header component from the GC Design System is required for all Government of Canada pages to provide a consistent branding experience.',
      },
    },
    layout: 'fullscreen', // Display the header at full width
  },
  tags: ['autodocs'],
  argTypes: {
    lang: { 
      control: 'select',
      options: ['en', 'fr'],
      description: 'The language of the header (English or French)'
    },
    title: {
      control: 'text',
      description: 'The title displayed in the header'
    }
  },
};

export default meta;
type Story = StoryObj<typeof GcdsHeader>;

/**
 * Basic header with minimal properties
 */
export const Basic: Story = {
  args: {
    lang: 'en',
    title: 'Service Canada',
  },
};

/**
 * French language header
 */
export const French: Story = {
  args: {
    lang: 'fr',
    title: 'Service Canada',
  },
};

/**
 * Header with a custom title
 */
export const CustomTitle: Story = {
  args: {
    lang: 'en',
    title: 'My Application',
  },
}; 