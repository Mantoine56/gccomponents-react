import type { Meta, StoryObj } from '@storybook/react';
import { GcdsNavGroup, GcdsNavLink } from '@cdssnc/gcds-components-react';
import React from 'react';

/**
 * The GcdsNavGroup component groups navigation links together in a collapsible section.
 * 
 * It's used to organize navigation links into logical sections, making it easier for users
 * to find related content. The component can be expanded and collapsed, which helps reduce
 * visual clutter while still providing access to all navigation options.
 * 
 * NavGroup is typically used within navigation components like GcdsSideNav, but can also
 * be used independently to create custom navigation structures.
 * 
 * Use NavGroup when:
 * - You need to group related navigation links together
 * - You want to create a hierarchical navigation structure
 * - You need to conserve space in your navigation menu
 * - You have multiple categories of navigation items
 */
const meta: Meta<typeof GcdsNavGroup> = {
  title: 'GCDS Components/Base/Navigation/NavGroup',
  component: GcdsNavGroup,
  parameters: {
    docs: {
      description: {
        component: 'The NavGroup component creates collapsible groups of navigation links, helping organize content into logical sections for improved navigation.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    // Core properties
    menuLabel: {
      control: 'text',
      description: 'Label for the navigation group that describes its contents. This serves as the group heading.',
      table: {
        type: { summary: 'string' },
      }
    },
    openTrigger: {
      control: 'text',
      description: 'Label for the button when the navigation group is collapsed. Typically describes the action to expand the group.',
      table: {
        type: { summary: 'string' },
      }
    },
    closeTrigger: {
      control: 'text',
      description: 'Label for the button when the navigation group is expanded. Typically describes the action to collapse the group.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      }
    },
    open: {
      control: 'boolean',
      description: 'Controls whether the navigation group is expanded (true) or collapsed (false).',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      }
    },
    lang: {
      control: 'select',
      options: ['en', 'fr'],
      description: 'Language of the component. Affects the text direction and potentially other properties.',
      table: {
        type: { summary: "'en' | 'fr'" },
        defaultValue: { summary: 'en' },
      }
    },
    children: {
      description: 'The navigation links to be included in the group. Typically GcdsNavLink components.',
      table: {
        type: { summary: 'ReactNode' },
      }
    },
  },
};

export default meta;
type Story = StoryObj<typeof GcdsNavGroup>;

/**
 * Basic usage of the GcdsNavGroup component
 * 
 * This example shows a simple navigation group with several links.
 * The group can be expanded and collapsed using the trigger button.
 */
export const Basic: Story = {
  render: (args) => (
    <div style={{ maxWidth: '300px' }}>
      <GcdsNavGroup {...args}>
        <GcdsNavLink href="#">Home</GcdsNavLink>
        <GcdsNavLink href="#">About</GcdsNavLink>
        <GcdsNavLink href="#">Services</GcdsNavLink>
        <GcdsNavLink href="#">Contact</GcdsNavLink>
      </GcdsNavGroup>
    </div>
  ),
  args: {
    menuLabel: "Main navigation",
    openTrigger: "Show menu"
  }
};

/**
 * Initially expanded navigation group
 * 
 * This example shows a navigation group that is expanded by default,
 * showing all of its navigation links when the page loads.
 */
export const InitiallyExpanded: Story = {
  render: (args) => (
    <div style={{ maxWidth: '300px' }}>
      <GcdsNavGroup {...args}>
        <GcdsNavLink href="#">Documentation</GcdsNavLink>
        <GcdsNavLink href="#">Tutorials</GcdsNavLink>
        <GcdsNavLink href="#">API Reference</GcdsNavLink>
        <GcdsNavLink href="#">Downloads</GcdsNavLink>
      </GcdsNavGroup>
    </div>
  ),
  args: {
    menuLabel: "Resources",
    openTrigger: "Show resources",
    open: true
  }
};

/**
 * With custom trigger labels
 * 
 * This example demonstrates how to customize both the open and close
 * trigger button labels for better clarity.
 */
export const WithCustomTriggers: Story = {
  render: (args) => (
    <div style={{ maxWidth: '300px' }}>
      <GcdsNavGroup {...args}>
        <GcdsNavLink href="#">Account</GcdsNavLink>
        <GcdsNavLink href="#">Preferences</GcdsNavLink>
        <GcdsNavLink href="#">Security</GcdsNavLink>
        <GcdsNavLink href="#">Notifications</GcdsNavLink>
      </GcdsNavGroup>
    </div>
  ),
  args: {
    menuLabel: "Settings",
    openTrigger: "Expand settings",
    closeTrigger: "Collapse settings"
  }
};

/**
 * With current page indicated
 * 
 * This example shows how to indicate the current page within a navigation group
 * by setting the 'current' property on the relevant GcdsNavLink.
 */
export const WithCurrentPage: Story = {
  render: (args) => (
    <div style={{ maxWidth: '300px' }}>
      <GcdsNavGroup {...args}>
        <GcdsNavLink href="#">Software</GcdsNavLink>
        <GcdsNavLink href="#" current>Hardware</GcdsNavLink>
        <GcdsNavLink href="#">Services</GcdsNavLink>
        <GcdsNavLink href="#">Support Plans</GcdsNavLink>
      </GcdsNavGroup>
    </div>
  ),
  args: {
    menuLabel: "Products",
    openTrigger: "View products",
    open: true
  }
};

/**
 * Multiple navigation groups
 * 
 * This example demonstrates how multiple navigation groups can be used together
 * to create a more complex navigation structure.
 */
export const MultipleGroups: Story = {
  render: () => (
    <div style={{ maxWidth: '300px' }}>
      <GcdsNavGroup 
        menuLabel="Products" 
        openTrigger="View products"
      >
        <GcdsNavLink href="#">Software</GcdsNavLink>
        <GcdsNavLink href="#">Hardware</GcdsNavLink>
        <GcdsNavLink href="#">Services</GcdsNavLink>
      </GcdsNavGroup>
      
      <GcdsNavGroup 
        menuLabel="Support" 
        openTrigger="View support options"
      >
        <GcdsNavLink href="#">Documentation</GcdsNavLink>
        <GcdsNavLink href="#">Knowledge Base</GcdsNavLink>
        <GcdsNavLink href="#">Contact Support</GcdsNavLink>
      </GcdsNavGroup>
      
      <GcdsNavGroup 
        menuLabel="Community" 
        openTrigger="View community resources"
      >
        <GcdsNavLink href="#">Forums</GcdsNavLink>
        <GcdsNavLink href="#">Developer Hub</GcdsNavLink>
        <GcdsNavLink href="#">Events</GcdsNavLink>
      </GcdsNavGroup>
    </div>
  ),
};

/**
 * Nested navigation with active items
 * 
 * This example demonstrates how to create a navigation structure with
 * current page indicators at different levels of nesting.
 */
export const NestedNavigation: Story = {
  render: (args) => (
    <div style={{ maxWidth: '300px' }}>
      <GcdsNavGroup {...args}>
        <GcdsNavLink href="#">Getting Started</GcdsNavLink>
        <GcdsNavLink href="#" current>Components</GcdsNavLink>
        <div style={{ paddingLeft: '1rem', borderLeft: '1px solid #ccc', margin: '0.5rem 0 0.5rem 0.5rem' }}>
          <GcdsNavLink href="#">Navigation</GcdsNavLink>
          <GcdsNavLink href="#">Forms</GcdsNavLink>
          <GcdsNavLink href="#">Layouts</GcdsNavLink>
        </div>
        <GcdsNavLink href="#">Tutorials</GcdsNavLink>
        <GcdsNavLink href="#">API Reference</GcdsNavLink>
      </GcdsNavGroup>
    </div>
  ),
  args: {
    menuLabel: "Documentation",
    openTrigger: "Show documentation",
    open: true
  }
};

/**
 * French language example
 * 
 * This example demonstrates the component with French language content.
 */
export const FrenchNavigation: Story = {
  render: (args) => (
    <div style={{ maxWidth: '300px' }}>
      <GcdsNavGroup {...args}>
        <GcdsNavLink href="#" lang="fr">Accueil</GcdsNavLink>
        <GcdsNavLink href="#" lang="fr">À propos</GcdsNavLink>
        <GcdsNavLink href="#" lang="fr" current>Services</GcdsNavLink>
        <GcdsNavLink href="#" lang="fr">Contactez-nous</GcdsNavLink>
      </GcdsNavGroup>
    </div>
  ),
  args: {
    menuLabel: "Menu principal",
    openTrigger: "Afficher le menu",
    closeTrigger: "Masquer le menu",
    lang: "fr"
  }
}; 