import type { Meta, StoryObj } from '@storybook/react';
import { GcdsSrOnly } from '@cdssnc/gcds-components-react';

/**
 * GcdsSrOnly component from the GC Design System
 */
const meta: Meta<typeof GcdsSrOnly> = {
  title: 'GCDS Components/Base/ScreenreaderOnly',
  component: GcdsSrOnly,
  parameters: {
    docs: {
      description: {
        component: 'The screenreader-only component is only accessible with screen readers.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'The content that will only be visible to screen readers',
    },
  },
};

export default meta;
type Story = StoryObj<typeof GcdsSrOnly>;

/**
 * Basic usage of the GcdsSrOnly component
 */
export const Basic: Story = {
  args: {
    children: 'This text is only visible to screen readers.',
  },
};

/**
 * Example with additional context for screen readers
 */
export const AdditionalContext: Story = {
  render: () => (
    <div>
      <p>There is visible text here.</p>
      <GcdsSrOnly>
        Additional context only provided to screen reader users: This section contains important information.
      </GcdsSrOnly>
      <p>More visible text that everyone can see.</p>
    </div>
  ),
}; 