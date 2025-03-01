import type { Meta, StoryObj } from '@storybook/react';
import { GcdsDateModified } from '@cdssnc/gcds-components-react';

/**
 * GcdsDateModified component from the GC Design System
 */
const meta: Meta<typeof GcdsDateModified> = {
  title: 'GCDS Components/Base/Typography/DateModified',
  component: GcdsDateModified,
  parameters: {
    docs: {
      description: {
        component: 'A timestamp of the last page update.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['date', 'version'],
      description: 'Set date modified type. Default is date.',
    },
    children: {
      control: 'text',
      description: 'The date or version content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof GcdsDateModified>;

/**
 * Basic usage with date type
 */
export const DateType: Story = {
  args: {
    type: 'date',
    children: 'February 28, 2024',
  },
};

/**
 * Example with version type
 */
export const VersionType: Story = {
  args: {
    type: 'version',
    children: '2.5.0',
  },
}; 