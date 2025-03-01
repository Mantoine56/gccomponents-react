import type { Meta, StoryObj } from '@storybook/react';
import { GcdsFooter } from '@cdssnc/gcds-components-react';
import React from 'react';

/**
 * GcdsFooter component from the GC Design System
 * 
 * The Footer component provides a consistent footer section for Government of Canada websites.
 * It includes navigation links, government branding, and contextual information.
 * 
 * Use the Footer to:
 * - Provide standardized navigation across government websites
 * - Display important links and legal information
 * - Ensure brand compliance with Government of Canada standards
 * - Provide a consistent user experience across different websites and services
 */
const meta: Meta<typeof GcdsFooter> = {
  title: 'GCDS Components/Base/Navigation/Footer',
  component: GcdsFooter,
  parameters: {
    docs: {
      description: {
        component: 'The Footer component provides a standardized footer for Government of Canada websites, available in full or compact display modes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    display: {
      control: 'select',
      options: ['compact', 'full'],
      description: 'Display mode of the footer, either full or compact',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'full' },
      },
    },
    wordmarkVariant: {
      control: 'select',
      options: ['colour', 'white'],
      description: 'The variant of the Government of Canada wordmark to display',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'colour' },
      },
    },
    contextualHeading: {
      control: 'text',
      description: 'Heading for the contextual section and navigation landmark',
      table: {
        type: { summary: 'string' },
      },
    },
    contextualLinks: {
      control: 'object',
      description: 'Object of links for the contextual band in format { link-label: link-href }',
      table: {
        type: { summary: 'object | string' },
      },
    },
    subLinks: {
      control: 'object',
      description: 'Object of links for the sub-footer in format { link-label: link-href }',
      table: {
        type: { summary: 'object | string' },
      },
    },
    lang: {
      control: 'select',
      options: ['en', 'fr'],
      description: 'Sets the language of the component',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'en' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof GcdsFooter>;

/**
 * Full mode footer with contextual links and sub-footer links
 */
export const Full: Story = {
  args: {
    display: 'full',
    wordmarkVariant: 'colour',
    contextualHeading: 'Government of Canada',
    contextualLinks: {
      'Contact us': 'https://www.canada.ca/en/contact.html',
      'Departments and agencies': 'https://www.canada.ca/en/government/dept.html',
      'About government': 'https://www.canada.ca/en/government/system.html',
    },
    subLinks: {
      'Privacy': 'https://www.canada.ca/en/transparency/privacy.html',
      'Terms and conditions': 'https://www.canada.ca/en/transparency/terms.html',
      'Accessibility': 'https://www.canada.ca/en/transparency/accessibility.html',
    },
    lang: 'en',
  },
};

/**
 * Compact mode footer with minimal links
 */
export const Compact: Story = {
  args: {
    display: 'compact',
    wordmarkVariant: 'colour',
    subLinks: {
      'Privacy': 'https://www.canada.ca/en/transparency/privacy.html',
      'Terms and conditions': 'https://www.canada.ca/en/transparency/terms.html',
    },
    lang: 'en',
  },
};

/**
 * Footer with white wordmark variant (useful for dark backgrounds)
 */
export const WhiteWordmark: Story = {
  render: (args) => (
    <div style={{ backgroundColor: '#26374a', padding: '1px' }}>
      <GcdsFooter {...args} />
    </div>
  ),
  args: {
    display: 'full',
    wordmarkVariant: 'white',
    contextualHeading: 'Government of Canada',
    contextualLinks: {
      'Contact us': 'https://www.canada.ca/en/contact.html',
      'Departments and agencies': 'https://www.canada.ca/en/government/dept.html',
    },
    subLinks: {
      'Privacy': 'https://www.canada.ca/en/transparency/privacy.html',
      'Terms and conditions': 'https://www.canada.ca/en/transparency/terms.html',
    },
    lang: 'en',
  },
};

/**
 * Footer with extensive contextual links
 */
export const ExtensiveLinks: Story = {
  args: {
    display: 'full',
    wordmarkVariant: 'colour',
    contextualHeading: 'Government of Canada',
    contextualLinks: {
      'Contact us': 'https://www.canada.ca/en/contact.html',
      'Departments and agencies': 'https://www.canada.ca/en/government/dept.html',
      'About government': 'https://www.canada.ca/en/government/system.html',
      'News': 'https://www.canada.ca/en/news.html',
      'Treaties, laws and regulations': 'https://www.canada.ca/en/government/system/laws.html',
      'Government-wide reporting': 'https://www.canada.ca/en/transparency/reporting.html',
      'Open government': 'https://open.canada.ca/en',
    },
    subLinks: {
      'Social media': 'https://www.canada.ca/en/social.html',
      'Mobile applications': 'https://www.canada.ca/en/mobile.html',
      'Privacy': 'https://www.canada.ca/en/transparency/privacy.html',
      'Terms and conditions': 'https://www.canada.ca/en/transparency/terms.html',
      'Accessibility': 'https://www.canada.ca/en/transparency/accessibility.html',
      'Copyright': 'https://www.canada.ca/en/transparency/copyright.html',
    },
    lang: 'en',
  },
};

/**
 * Footer in French language
 */
export const FrenchLanguage: Story = {
  args: {
    display: 'full',
    wordmarkVariant: 'colour',
    contextualHeading: 'Gouvernement du Canada',
    contextualLinks: {
      'Contactez-nous': 'https://www.canada.ca/fr/contact.html',
      'Ministères et organismes': 'https://www.canada.ca/fr/gouvernement/min.html',
      'À propos du gouvernement': 'https://www.canada.ca/fr/gouvernement/systeme.html',
    },
    subLinks: {
      'Confidentialité': 'https://www.canada.ca/fr/transparence/confidentialite.html',
      'Avis': 'https://www.canada.ca/fr/transparence/avis.html',
      'Accessibilité': 'https://www.canada.ca/fr/transparence/accessibilite.html',
    },
    lang: 'fr',
  },
};
