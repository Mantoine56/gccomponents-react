import type { Meta, StoryObj } from '@storybook/react';
import { GcdsSignature } from '@cdssnc/gcds-components-react';
import React from 'react';

/**
 * The GcdsSignature component displays the Government of Canada signature or wordmark.
 * 
 * This component provides standard, accessible implementations of the Government of Canada's
 * official signature (the flag symbol with "Government of Canada" text) and wordmark
 * (the "Canada" wordmark). These are official symbols that help identify Government of Canada
 * web properties and maintain consistent branding.
 * 
 * Use the Signature component when:
 * - Building a Government of Canada website or application
 * - Implementing a header or footer that requires official Government of Canada branding
 * - Creating content that needs to display official Government of Canada symbols
 */
const meta: Meta<typeof GcdsSignature> = {
  title: 'GCDS Components/Base/Branding/Signature',
  component: GcdsSignature,
  parameters: {
    docs: {
      description: {
        component: 'The Signature component displays the official Government of Canada signature or wordmark in accordance with Federal Identity Program requirements.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    // Core properties
    type: {
      control: 'select',
      options: ['signature', 'wordmark'],
      description: 'The type of graphic to render. "signature" is the flag symbol with "Government of Canada" text, while "wordmark" is the "Canada" wordmark.',
      table: {
        type: { summary: "'signature' | 'wordmark'" },
        defaultValue: { summary: 'signature' },
      }
    },
    variant: {
      control: 'select',
      options: ['colour', 'white'],
      description: 'The colour variant to render. "colour" displays the standard coloured version, while "white" is for use on dark backgrounds.',
      table: {
        type: { summary: "'colour' | 'white'" },
        defaultValue: { summary: 'colour' },
      }
    },
    hasLink: {
      control: 'boolean',
      description: 'Whether the signature should include a link to canada.ca. Only applies to the signature type, not the wordmark.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      }
    },
    lang: {
      control: 'select',
      options: ['en', 'fr'],
      description: 'Language of the component. Affects the text in the signature and potentially the link destination.',
      table: {
        type: { summary: "'en' | 'fr'" },
        defaultValue: { summary: 'en' },
      }
    },
  },
};

export default meta;
type Story = StoryObj<typeof GcdsSignature>;

/**
 * Basic signature
 * 
 * This example displays the standard Government of Canada signature with the flag symbol
 * and "Government of Canada" text in the default colour variant.
 */
export const BasicSignature: Story = {
  args: {
    type: 'signature',
    variant: 'colour',
    hasLink: false,
    lang: 'en'
  },
};

/**
 * Signature with link
 * 
 * This example shows the Government of Canada signature with a link to canada.ca.
 * When clicked, it will navigate to the official Government of Canada website.
 */
export const SignatureWithLink: Story = {
  args: {
    type: 'signature',
    variant: 'colour',
    hasLink: true,
    lang: 'en'
  },
};

/**
 * White signature on dark background
 * 
 * This example demonstrates the white variant of the signature, which is designed
 * for use on dark backgrounds to ensure visibility and contrast.
 */
export const WhiteSignature: Story = {
  render: (args) => (
    <div style={{ background: '#333', padding: '1rem' }}>
      <GcdsSignature
        type="signature"
        variant="white"
        hasLink={false}
        lang={args.lang}
      />
    </div>
  ),
};

/**
 * Basic wordmark
 * 
 * This example displays the standard "Canada" wordmark in the default colour variant.
 * The wordmark is a simpler alternative to the full signature.
 */
export const BasicWordmark: Story = {
  args: {
    type: 'wordmark',
    variant: 'colour',
    lang: 'en'
  },
};

/**
 * White wordmark on dark background
 * 
 * This example demonstrates the white variant of the wordmark, which is designed
 * for use on dark backgrounds to ensure visibility and contrast.
 */
export const WhiteWordmark: Story = {
  render: (args) => (
    <div style={{ background: '#333', padding: '1rem' }}>
      <GcdsSignature
        type="wordmark"
        variant="white"
        lang={args.lang}
      />
    </div>
  ),
};

/**
 * French signature
 * 
 * This example demonstrates the signature with French language text
 * ("Gouvernement du Canada" instead of "Government of Canada").
 */
export const FrenchSignature: Story = {
  args: {
    type: 'signature',
    variant: 'colour',
    hasLink: false,
    lang: 'fr'
  },
};

/**
 * French wordmark
 * 
 * This example demonstrates the wordmark with French language context.
 * Note that the wordmark itself is the same ("Canada"), but any associated
 * accessibility text would be in French.
 */
export const FrenchWordmark: Story = {
  args: {
    type: 'wordmark',
    variant: 'colour',
    lang: 'fr'
  },
};

/**
 * Signature in header context
 * 
 * This example demonstrates how the signature component is typically used within a header.
 */
export const SignatureInHeader: Story = {
  render: (args) => (
    <header style={{ 
      display: 'flex', 
      alignItems: 'center', 
      padding: '1rem', 
      borderBottom: '1px solid #ccc'
    }}>
      <div style={{ marginRight: '2rem' }}>
        <GcdsSignature
          type="signature"
          variant="colour"
          hasLink={true}
          lang={args.lang}
        />
      </div>
      <nav style={{ marginLeft: 'auto' }}>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin: 0, padding: 0 }}>
          <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Home</a></li>
          <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>About</a></li>
          <li><a href="#" style={{ textDecoration: 'none', color: '#333' }}>Contact</a></li>
        </ul>
      </nav>
    </header>
  ),
};

/**
 * Wordmark in footer context
 * 
 * This example demonstrates how the wordmark component is typically used within a footer.
 */
export const WordmarkInFooter: Story = {
  render: (args) => (
    <footer style={{ 
      padding: '1rem', 
      borderTop: '1px solid #ccc',
      marginTop: '2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        <small>&copy; {new Date().getFullYear()} Government of Canada</small>
      </div>
      <div>
        <GcdsSignature
          type="wordmark"
          variant="colour"
          lang={args.lang}
        />
      </div>
    </footer>
  ),
}; 