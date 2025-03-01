import { Meta, StoryObj } from '@storybook/react';
import { TableColorTest } from '../../../components/lib/Table/TableColorTest';

const meta = {
  title: 'Components/Table/Styling/ColorFix',
  component: TableColorTest,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Testing the fixed table color themes that match the GC Design System colors.'
      }
    }
  }
} satisfies Meta<typeof TableColorTest>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * This story showcases the fixed color themes for the Table component.
 * It displays 5 tables with different color themes: default, blue, green, red, and purple.
 * The colors now match the official GC Design System color palette.
 */
export const ColorThemeTest: Story = {}; 