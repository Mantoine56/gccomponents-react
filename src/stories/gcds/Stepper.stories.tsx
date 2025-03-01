import type { Meta, StoryObj } from '@storybook/react';
import { GcdsStepper } from '@cdssnc/gcds-components-react';

/**
 * GcdsStepper component from the GC Design System
 * 
 * The Stepper component displays progress through a sequence of steps or stages in a process.
 */
const meta: Meta<typeof GcdsStepper> = {
  title: 'GCDS Components/Base/Navigation/Stepper',
  component: GcdsStepper,
  parameters: {
    docs: {
      description: {
        component: 'The Stepper component helps users track their progress through a multi-step process.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    currentStep: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Defines the current step',
    },
    totalSteps: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Defines the total number of steps',
    },
    tag: {
      control: 'select',
      options: ['h1', 'h2', 'h3'],
      description: 'Defines the heading tag to render',
    },
    children: {
      control: 'text',
      description: 'The content or title of the current step',
    },
  },
};

export default meta;
type Story = StoryObj<typeof GcdsStepper>;

/**
 * Basic usage of the GcdsStepper component
 */
export const Basic: Story = {
  args: {
    currentStep: 1,
    totalSteps: 4,
    tag: 'h2',
    children: 'Personal Information',
  },
};

/**
 * Middle step example
 */
export const MiddleStep: Story = {
  args: {
    currentStep: 2,
    totalSteps: 4,
    tag: 'h2',
    children: 'Contact Details',
  },
};

/**
 * Final step example
 */
export const FinalStep: Story = {
  args: {
    currentStep: 4,
    totalSteps: 4,
    tag: 'h2',
    children: 'Review and Submit',
  },
};

/**
 * Using H1 heading
 */
export const H1Heading: Story = {
  args: {
    currentStep: 1,
    totalSteps: 3,
    tag: 'h1',
    children: 'Create Account',
  },
};

/**
 * Using H3 heading
 */
export const H3Heading: Story = {
  args: {
    currentStep: 1,
    totalSteps: 3,
    tag: 'h3',
    children: 'Create Account',
  },
}; 