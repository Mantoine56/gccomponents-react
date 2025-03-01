import type { Meta, StoryObj } from '@storybook/react';
import { GcdsLink, GcdsText } from '@cdssnc/gcds-components-react';
import React from 'react';

type Story = StoryObj<typeof GcdsLink>;

/**
 * The GcdsLink component provides a way to navigate between pages or to external resources.
 * 
 * Links are a fundamental navigation element in web interfaces. They allow users to move between
 * pages, access resources, or trigger actions. The GcdsLink component offers various configurations
 * to handle different use cases, including internal navigation, external links, and downloadable resources.
 * 
 * Use links when you want to:
 * - Navigate to another page within your application
 * - Link to an external website
 * - Provide a downloadable resource
 * - Create text-based navigation
 */
const meta: Meta<typeof GcdsLink> = {
  title: 'GCDS Components/Base/Action/Link',
  component: GcdsLink,
  parameters: {
    docs: {
      description: {
        component: 'The GcdsLink component provides a way to navigate between pages or to external resources. It supports various configurations including external links, block/inline display modes, and downloadable resources.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    // Content
    children: {
      control: 'text',
      description: 'The text content of the link',
      table: {
        type: { summary: 'ReactNode' },
      }
    },
    // Core link properties
    href: {
      control: 'text',
      description: 'The URL the link goes to (required)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      }
    },
    external: {
      control: 'boolean',
      description: 'Whether the link is external. When true, adds an external link icon and sets target="_blank" automatically',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      }
    },
    // Display options
    variant: {
      control: 'select',
      options: ['default', 'light'],
      description: 'Sets the main style of the link',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      }
    },
    size: {
      control: 'select',
      options: ['regular', 'small', 'inherit'],
      description: 'Sets the size of the link',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'regular' },
      }
    },
    display: {
      control: 'select',
      options: ['block', 'inline'],
      description: 'Sets the display behavior of the link',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'inline' },
      }
    },
    // Advanced link attributes
    download: {
      control: 'text',
      description: 'Specifies that the target will be downloaded when clicked. Value is the suggested filename',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      }
    },
    rel: {
      control: 'text',
      description: 'Specifies the relationship between the current document and the linked document',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      }
    },
    target: {
      control: 'text',
      description: 'Specifies where to open the linked document. Set automatically when external=true',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      }
    },
    type: {
      control: 'text',
      description: 'Specifies the media type of the linked document',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      }
    },
    // Other props
    lang: {
      control: 'select',
      options: ['en', 'fr'],
      description: 'Language of the component',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'en' },
      }
    }
  },
};

export default meta;

/**
 * Basic usage of the GcdsLink component
 */
export const Basic: Story = {
  args: {
    href: 'https://design-system.alpha.canada.ca',
    children: 'GC Design System',
  },
};

/**
 * Example of different link sizes
 */
export const Sizes: Story = {
  render: () => (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <GcdsLink href="https://design-system.alpha.canada.ca" size="regular">
          Regular size link (default)
        </GcdsLink>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <GcdsLink href="https://design-system.alpha.canada.ca" size="small">
          Small size link
        </GcdsLink>
      </div>
      <div>
        <GcdsText>
          <strong style={{ fontSize: '1.5rem' }}>
            Heading text with <GcdsLink href="https://design-system.alpha.canada.ca" size="inherit">inherited size link</GcdsLink>
          </strong>
        </GcdsText>
      </div>
    </div>
  )
};

/**
 * Example of an external link
 * 
 * External links automatically:
 * - Add an external link icon
 * - Open in a new tab/window
 * - Add appropriate accessibility attributes
 */
export const ExternalLink: Story = {
  args: {
    href: 'https://www.canada.ca',
    external: true,
    children: 'Visit Canada.ca',
  },
};

/**
 * Example of display variations
 */
export const DisplayVariations: Story = {
  render: () => (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <GcdsText>This is a paragraph with an <GcdsLink href="https://design-system.alpha.canada.ca" display="inline">inline link</GcdsLink> inside it.</GcdsText>
      </div>
      <div>
        <GcdsLink href="https://design-system.alpha.canada.ca" display="block">
          Block display link (takes full width)
        </GcdsLink>
      </div>
    </div>
  )
};

/**
 * Example of light variant on dark background
 */
export const LightVariant: Story = {
  render: () => (
    <div style={{ background: '#26374a', padding: '2rem', color: 'white' }}>
      <GcdsText color="white">
        This is text on a dark background with a 
        <GcdsLink 
          href="https://design-system.alpha.canada.ca" 
          variant="light" 
          style={{ margin: '0 0.5rem' }}>
          light variant link
        </GcdsLink>
        that is more visible.
      </GcdsText>
    </div>
  )
};

/**
 * Example of a download link
 */
export const DownloadLink: Story = {
  args: {
    href: 'https://design-system.alpha.canada.ca/assets/downloads/sample.pdf',
    download: 'sample.pdf',
    children: 'Download sample PDF',
  },
};

/**
 * Example with custom rel and target attributes
 */
export const CustomAttributes: Story = {
  args: {
    href: 'https://design-system.alpha.canada.ca',
    rel: 'noopener noreferrer',
    target: '_blank',
    children: 'Link with custom attributes',
  },
};

/**
 * Example of a French language link
 */
export const FrenchLink: Story = {
  args: {
    href: 'https://conception.alpha.canada.ca',
    lang: 'fr',
    children: 'Système de conception GC',
  },
};
