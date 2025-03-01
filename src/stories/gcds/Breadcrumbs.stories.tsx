import type { Meta, StoryObj } from '@storybook/react';
import { GcdsBreadcrumbs, GcdsBreadcrumbsItem } from '@cdssnc/gcds-components-react';
import React from 'react';

/**
 * GcdsBreadcrumbs component from the GC Design System
 * 
 * Breadcrumbs provide users with navigational context and a way to quickly move 
 * up through the site hierarchy. They show the user's current location within 
 * the website's structure and allow for easy navigation to parent pages.
 * 
 * Use breadcrumbs to:
 * - Show the user their current location in the site hierarchy
 * - Provide quick navigation to parent sections
 * - Improve site navigation for complex or deep site structures
 */
const meta: Meta<typeof GcdsBreadcrumbs> = {
  title: 'GCDS Components/Base/Navigation/Breadcrumbs',
  component: GcdsBreadcrumbs,
  parameters: {
    docs: {
      description: {
        component: 'The Breadcrumbs component displays a navigation trail showing the user\'s location in the site hierarchy and provides links to parent pages.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    hideCanadaLink: {
      control: 'boolean',
      description: 'When true, hides the default Canada.ca link',
      defaultValue: false
    },
    lang: {
      control: 'select',
      options: ['en', 'fr'],
      description: 'Sets the language of the component',
      defaultValue: 'en'
    },
    children: {
      description: 'The breadcrumb items to display in the navigation trail'
    }
  },
};

export default meta;
type Story = StoryObj<typeof GcdsBreadcrumbs>;

/**
 * Basic usage of the GcdsBreadcrumbs component with a simple navigation path
 */
export const Basic: Story = {
  render: (args) => (
    <GcdsBreadcrumbs {...args}>
      <GcdsBreadcrumbsItem href="/services">Services</GcdsBreadcrumbsItem>
      <GcdsBreadcrumbsItem href="/services/benefits">Benefits</GcdsBreadcrumbsItem>
      <GcdsBreadcrumbsItem href="/services/benefits/current-page">Current page</GcdsBreadcrumbsItem>
    </GcdsBreadcrumbs>
  ),
  args: {
    lang: 'en'
  }
};

/**
 * Breadcrumbs with a longer navigation path showing a deeper site structure
 */
export const LongPath: Story = {
  render: (args) => (
    <GcdsBreadcrumbs {...args}>
      <GcdsBreadcrumbsItem href="/services">Services</GcdsBreadcrumbsItem>
      <GcdsBreadcrumbsItem href="/services/taxes">Taxes</GcdsBreadcrumbsItem>
      <GcdsBreadcrumbsItem href="/services/taxes/income">Income tax</GcdsBreadcrumbsItem>
      <GcdsBreadcrumbsItem href="/services/taxes/income/personal">Personal income tax</GcdsBreadcrumbsItem>
      <GcdsBreadcrumbsItem href="/services/taxes/income/personal/filing-options">Filing options</GcdsBreadcrumbsItem>
    </GcdsBreadcrumbs>
  ),
  args: {
    lang: 'en'
  }
};

/**
 * Breadcrumbs without the default Canada.ca link
 */
export const WithoutCanadaLink: Story = {
  render: (args) => (
    <GcdsBreadcrumbs {...args}>
      <GcdsBreadcrumbsItem href="/services">Services</GcdsBreadcrumbsItem>
      <GcdsBreadcrumbsItem href="/services/benefits">Benefits</GcdsBreadcrumbsItem>
      <GcdsBreadcrumbsItem href="/services/benefits/current-page">Current page</GcdsBreadcrumbsItem>
    </GcdsBreadcrumbs>
  ),
  args: {
    hideCanadaLink: true,
    lang: 'en'
  }
};

/**
 * Breadcrumbs in French language
 */
export const FrenchLanguage: Story = {
  render: (args) => (
    <GcdsBreadcrumbs {...args}>
      <GcdsBreadcrumbsItem href="/services">Services</GcdsBreadcrumbsItem>
      <GcdsBreadcrumbsItem href="/services/prestations">Prestations</GcdsBreadcrumbsItem>
      <GcdsBreadcrumbsItem href="/services/prestations/page-actuelle">Page actuelle</GcdsBreadcrumbsItem>
    </GcdsBreadcrumbs>
  ),
  args: {
    lang: 'fr'
  }
};

/**
 * Breadcrumbs with custom styling
 */
export const CustomStyling: Story = {
  render: (args) => (
    <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
      <GcdsBreadcrumbs {...args}>
        <GcdsBreadcrumbsItem href="/services">Services</GcdsBreadcrumbsItem>
        <GcdsBreadcrumbsItem href="/services/benefits">Benefits</GcdsBreadcrumbsItem>
        <GcdsBreadcrumbsItem href="/services/benefits/current-page">Current page</GcdsBreadcrumbsItem>
      </GcdsBreadcrumbs>
    </div>
  ),
  args: {
    lang: 'en'
  }
};
