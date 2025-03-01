import type { Meta, StoryObj } from '@storybook/react';
import { GcdsHeading } from '@cdssnc/gcds-components-react';

/**
 * GcdsHeading component from the GC Design System
 */
const meta: Meta<typeof GcdsHeading> = {
  title: 'GCDS Components/Base/Typography/Heading',
  component: GcdsHeading,
  parameters: {
    docs: {
      description: {
        component: 'GcdsHeading component from the GC Design System.',
      },
    },
  },
  tags: ['autodocs'],
  // Define argTypes for the component props
  argTypes: {
    tag: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Sets the appropriate HTML tag for the selected level (required)',
    },
    characterLimit: {
      control: 'boolean',
      description: 'Sets the line length to a maximum amount of characters per line',
    },
    marginBottom: {
      control: 'select',
      options: ['0', '50', '100', '150', '200', '250', '300', '400', '450', '500', '550', '600', '700', '800', '900', '1000'],
      description: 'Adds margin below the heading (default: 300)',
    },
    marginTop: {
      control: 'select',
      options: ['0', '50', '100', '150', '200', '250', '300', '400', '450', '500', '550', '600', '700', '800', '900', '1000'],
      description: 'Adds margin above the heading (default: 0 for h1, 600 for h2-h6)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof GcdsHeading>;

/**
 * Basic usage of the GcdsHeading component with h1 tag
 */
export const H1: Story = {
  args: {
    tag: 'h1',
    children: 'This is an H1 Heading',
  },
};

/**
 * Example with h2 tag
 */
export const H2: Story = {
  args: {
    tag: 'h2',
    children: 'This is an H2 Heading',
  },
};

/**
 * Example with h3 tag
 */
export const H3: Story = {
  args: {
    tag: 'h3',
    children: 'This is an H3 Heading',
  },
};

/**
 * Example with h4 tag
 */
export const H4: Story = {
  args: {
    tag: 'h4',
    children: 'This is an H4 Heading',
  },
};

/**
 * Example with h5 tag
 */
export const H5: Story = {
  args: {
    tag: 'h5',
    children: 'This is an H5 Heading',
  },
};

/**
 * Example with h6 tag
 */
export const H6: Story = {
  args: {
    tag: 'h6',
    children: 'This is an H6 Heading',
  },
};

/**
 * Example with character limit enabled
 */
export const WithCharacterLimit: Story = {
  args: {
    tag: 'h2',
    characterLimit: true,
    children: 'This is a heading with character limit enabled which ensures a comfortable, accessible reading length for longer headings.',
  },
};

/**
 * Example with custom margins
 */
export const WithCustomMargins: Story = {
  args: {
    tag: 'h2',
    marginTop: '400',
    marginBottom: '400',
    children: 'This heading has custom top and bottom margins of 400',
  },
};
