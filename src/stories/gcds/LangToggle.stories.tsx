import type { Meta, StoryObj } from '@storybook/react';
import { GcdsLangToggle } from '@cdssnc/gcds-components-react';
import React from 'react';

/**
 * GcdsLangToggle component from the GC Design System
 * 
 * The LangToggle component provides a standardized language toggle button 
 * that allows users to switch between English and French language versions 
 * of a page. This component is a critical part of meeting the bilingual 
 * requirements for Government of Canada websites.
 * 
 * Use LangToggle to:
 * - Provide a consistent language switching mechanism
 * - Meet official languages requirements
 * - Enhance accessibility by clearly indicating language options
 * - Simplify navigation between English and French content
 */
const meta: Meta<typeof GcdsLangToggle> = {
  title: 'GCDS Components/Base/Navigation/LangToggle',
  component: GcdsLangToggle,
  parameters: {
    docs: {
      description: {
        component: 'The LangToggle component provides a standardized language toggle button for switching between English and French versions of a page.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'text',
      description: 'URL of the opposite language page that users will navigate to when clicking the toggle',
      table: {
        type: { summary: 'string' },
      },
    },
    lang: {
      control: 'select',
      options: ['en', 'fr'],
      description: 'Sets the current language of the component, which determines the language displayed on the toggle button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'en' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof GcdsLangToggle>;

/**
 * Basic usage of the GcdsLangToggle component in English
 * 
 * This example shows the language toggle with English as the current language,
 * linking to a French version of the page.
 */
export const English: Story = {
  args: {
    href: '/fr/home',
    lang: 'en',
  },
};

/**
 * LangToggle in French
 * 
 * This example shows the language toggle with French as the current language,
 * linking to an English version of the page.
 */
export const French: Story = {
  args: {
    href: '/en/home',
    lang: 'fr',
  },
};

/**
 * LangToggle with full path URL
 * 
 * This example demonstrates using a full URL path including the domain,
 * which might be necessary when linking to a separate site or subdomain.
 */
export const FullPathURL: Story = {
  args: {
    href: 'https://example.canada.ca/fr/service',
    lang: 'en',
  },
};

/**
 * LangToggle in context of a header
 * 
 * This example demonstrates how the LangToggle component might be positioned
 * within a basic header layout.
 */
export const InHeaderContext: Story = {
  render: (args) => (
    <div style={{ 
      backgroundColor: '#26374a',
      color: 'white',
      padding: '16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ fontWeight: 'bold' }}>
        {args.lang === 'en' ? 'Government of Canada' : 'Gouvernement du Canada'}
      </div>
      <GcdsLangToggle {...args} />
    </div>
  ),
  args: {
    href: '/fr/home',
    lang: 'en',
  },
};

/**
 * LangToggle preserving query parameters
 * 
 * This example demonstrates how to maintain query parameters when switching languages,
 * which is essential for preserving user context during language switches.
 */
export const WithQueryParameters: Story = {
  args: {
    href: '/fr/search?q=services&page=2',
    lang: 'en',
  },
};

/**
 * LangToggle with hash fragment
 * 
 * This example demonstrates preserving a hash fragment in the URL,
 * which is useful for maintaining the user's position on the page.
 */
export const WithHashFragment: Story = {
  args: {
    href: '/fr/policies#section-3',
    lang: 'en',
  },
};
