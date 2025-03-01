import type { Meta, StoryObj } from '@storybook/react';
import { GcdsTopNav, GcdsNavLink } from '@cdssnc/gcds-components-react';
import React from 'react';

/**
 * GcdsTopNav component from the GC Design System
 */
const meta: Meta<typeof GcdsTopNav> = {
  title: 'GCDS Components/Base/Navigation/TopNav',
  component: GcdsTopNav,
  parameters: {
    docs: {
      description: {
        component: 'GcdsTopNav component from the GC Design System provides top navigation for web applications.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    lang: {
      control: 'select',
      options: ['en', 'fr'],
      description: 'Language of the component'
    }
  }
};

export default meta;
type Story = StoryObj<typeof GcdsTopNav>;

/**
 * Basic usage of the GcdsTopNav component
 */
export const Basic: Story = {
  render: (args) => (
    <GcdsTopNav {...args}>
      <GcdsNavLink href="#">Home</GcdsNavLink>
      <GcdsNavLink href="#" current>About</GcdsNavLink>
      <GcdsNavLink href="#">Services</GcdsNavLink>
      <GcdsNavLink href="#">Contact</GcdsNavLink>
    </GcdsTopNav>
  ),
  args: {
    lang: 'en'
  }
};

/**
 * Top navigation with custom button styling
 */
export const WithCustomLinks: Story = {
  render: (args) => (
    <GcdsTopNav {...args}>
      <GcdsNavLink href="#">Products</GcdsNavLink>
      <GcdsNavLink href="#" current>Documentation</GcdsNavLink>
      <GcdsNavLink href="#">Resources</GcdsNavLink>
      <GcdsNavLink href="#">Support</GcdsNavLink>
      <GcdsNavLink href="#">Community</GcdsNavLink>
    </GcdsTopNav>
  ),
  args: {
    lang: 'en'
  }
};
