import type { Meta, StoryObj } from '@storybook/react';
import { GcdsSideNav, GcdsNavGroup, GcdsNavLink } from '@cdssnc/gcds-components-react';
import React from 'react';

/**
 * GcdsSideNav component from the GC Design System
 */
const meta: Meta<typeof GcdsSideNav> = {
  title: 'GCDS Components/Base/Navigation/SideNav',
  component: GcdsSideNav,
  parameters: {
    docs: {
      description: {
        component: 'GcdsSideNav component from the GC Design System provides side navigation for web applications.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the side navigation menu'
    },
    lang: {
      control: 'select',
      options: ['en', 'fr'],
      description: 'Language of the component'
    }
  }
};

export default meta;
type Story = StoryObj<typeof GcdsSideNav>;

/**
 * Basic usage of the GcdsSideNav component
 */
export const Basic: Story = {
  render: (args) => (
    <GcdsSideNav {...args}>
      <GcdsNavGroup menuLabel="Main navigation" openTrigger="Display menu">
        <GcdsNavLink href="#">Home</GcdsNavLink>
        <GcdsNavLink href="#" current>About</GcdsNavLink>
        <GcdsNavLink href="#">Services</GcdsNavLink>
        <GcdsNavLink href="#">Contact</GcdsNavLink>
      </GcdsNavGroup>
    </GcdsSideNav>
  ),
  args: {
    label: 'Main navigation',
    lang: 'en'
  }
};

/**
 * Side navigation with multiple groups
 */
export const WithGroups: Story = {
  render: (args) => (
    <GcdsSideNav {...args}>
      <GcdsNavGroup menuLabel="Main navigation" openTrigger="Display menu">
        <GcdsNavLink href="#">Home</GcdsNavLink>
        <GcdsNavLink href="#" current>About</GcdsNavLink>
        <GcdsNavLink href="#">Services</GcdsNavLink>
      </GcdsNavGroup>
      <GcdsNavGroup menuLabel="More information" openTrigger="Display more">
        <GcdsNavLink href="#">Resources</GcdsNavLink>
        <GcdsNavLink href="#">FAQ</GcdsNavLink>
        <GcdsNavLink href="#">Contact</GcdsNavLink>
      </GcdsNavGroup>
    </GcdsSideNav>
  ),
  args: {
    label: 'Site navigation',
    lang: 'en'
  }
};
