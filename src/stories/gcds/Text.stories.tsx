import type { Meta, StoryObj } from '@storybook/react';
import { GcdsText } from '@cdssnc/gcds-components-react';
import React from 'react';

type Story = StoryObj<typeof GcdsText>;

/**
 * The GcdsText component is used to display and format text content in your application.
 * 
 * Text components are fundamental building blocks for content presentation. The GcdsText
 * component provides consistent typography styles and spacing options while ensuring 
 * proper accessibility and responsive behavior.
 * 
 * Use the GcdsText component for:
 * - Paragraphs of content
 * - Formatted text blocks
 * - Content with specific spacing requirements
 * - Text with specific display behaviors
 */
const meta: Meta<typeof GcdsText> = {
  title: 'GCDS Components/Base/Typography/Text',
  component: GcdsText,
  parameters: {
    docs: {
      description: {
        component: 'The GcdsText component provides consistent text formatting with options for size, spacing, and display behavior. Use it for paragraphs and other text content to maintain typography consistency across your application.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    // Content
    children: {
      control: 'text',
      description: 'The text content to display',
      table: {
        type: { summary: 'ReactNode' },
      }
    },
    // Text appearance
    size: {
      control: 'select',
      options: ['body', 'small'],
      description: 'Sets the size of the text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'body' },
      }
    },
    textRole: {
      control: 'select',
      options: ['light', 'primary', 'secondary'],
      description: 'Sets the main style/color of the text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      }
    },
    characterLimit: {
      control: 'boolean',
      description: 'Sets the line length to a maximum amount of characters per line for optimal readability',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      }
    },
    // Display and layout
    display: {
      control: 'select',
      options: ['block', 'flex', 'inline', 'inline-block', 'inline-flex', 'none'],
      description: 'Specifies the display behavior of the text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'block' },
      }
    },
    marginBottom: {
      control: 'select',
      options: ['0', '50', '100', '150', '200', '250', '300', '400', '450', '500', '550', '600', '700', '800', '900', '1000'],
      description: 'Adds margin below the text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      }
    },
    marginTop: {
      control: 'select',
      options: ['0', '50', '100', '150', '200', '250', '300', '400', '450', '500', '550', '600', '700', '800', '900', '1000'],
      description: 'Adds margin above the text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      }
    },
  },
};

export default meta;

/**
 * Basic usage of the GcdsText component
 */
export const Basic: Story = {
  args: {
    children: 'This is a basic text component from the GC Design System.',
  },
};

/**
 * Examples of text sizes
 */
export const TextSizes: Story = {
  render: () => (
    <div>
      <GcdsText size="body" marginBottom="300">
        This is body text (default size). This is the standard text size used for most content.
      </GcdsText>
      <GcdsText size="small">
        This is small text. It can be used for less important information, captions, or footnotes.
      </GcdsText>
    </div>
  ),
};

/**
 * Examples of text roles (styles/colors)
 */
export const TextRoles: Story = {
  render: () => (
    <div>
      <GcdsText textRole="primary" marginBottom="150">
        This is primary text (default). It is used for the main content.
      </GcdsText>
      <GcdsText textRole="secondary" marginBottom="150">
        This is secondary text. It can be used for supporting content or less emphasized information.
      </GcdsText>
      <div style={{ background: '#26374a', padding: '1rem' }}>
        <GcdsText textRole="light">
          This is light text. It is designed for use on dark backgrounds.
        </GcdsText>
      </div>
    </div>
  ),
};

/**
 * Example with character limit enabled
 * 
 * The character limit ensures an optimal line length for readability by setting
 * a maximum number of characters per line.
 */
export const WithCharacterLimit: Story = {
  render: () => (
    <div>
      <GcdsText marginBottom="400">
        This paragraph does not have a character limit. It may extend to be very long on wide screens, which can make it harder to read. Research in typography suggests that the optimal line length for content is between 50-75 characters, as it helps readers' eyes flow naturally from the end of one line to the beginning of the next.
      </GcdsText>
      
      <GcdsText characterLimit={true}>
        This paragraph has a character limit enabled. It maintains an optimal line length regardless of screen size. This improves readability by ensuring the text doesn't stretch too wide on larger screens. Notice how it automatically limits the width of the text.
      </GcdsText>
    </div>
  ),
};

/**
 * Examples of different display modes
 */
export const DisplayVariations: Story = {
  render: () => (
    <div>
      <h3>Block Display (Default)</h3>
      <GcdsText display="block" marginBottom="300">
        This text has block display. It takes up the full width available and creates a new line.
      </GcdsText>
      
      <h3>Inline Display</h3>
      <div>
        <span>Text before the component: </span>
        <GcdsText display="inline">This text is displayed inline</GcdsText>
        <span> and text after the component.</span>
      </div>
      
      <h3 style={{ marginTop: '1.5rem' }}>Inline-Block Display</h3>
      <div>
        <span>Text before: </span>
        <GcdsText display="inline-block" style={{ width: '150px', background: '#f5f5f5', padding: '5px' }}>
          Inline-block
        </GcdsText>
        <span> This allows width/height properties while remaining inline.</span>
      </div>
      
      <h3 style={{ marginTop: '1.5rem' }}>Flex Display</h3>
      <GcdsText display="flex" style={{ gap: '10px' }}>
        <span style={{ background: '#e0e0e0', padding: '5px' }}>Item 1</span>
        <span style={{ background: '#e0e0e0', padding: '5px' }}>Item 2</span>
        <span style={{ background: '#e0e0e0', padding: '5px' }}>Item 3</span>
      </GcdsText>
    </div>
  ),
};

/**
 * Example with custom margins for spacing
 */
export const Margins: Story = {
  render: () => (
    <div style={{ background: '#f5f5f5', padding: '10px' }}>
      <div style={{ background: '#ffffff', marginBottom: '10px' }}>
        <GcdsText marginTop="300" marginBottom="300">
          This text has 300 units of margin above and below. The light gray area shows the container, and the white area is the text component with its margins.
        </GcdsText>
      </div>
      
      <div style={{ background: '#ffffff', marginBottom: '10px' }}>
        <GcdsText marginTop="0" marginBottom="500">
          This text has no top margin but has 500 units of bottom margin. Notice the different spacing.
        </GcdsText>
      </div>
      
      <div style={{ background: '#ffffff' }}>
        <GcdsText marginTop="200" marginBottom="0">
          This text has 200 units of top margin but no bottom margin.
        </GcdsText>
      </div>
    </div>
  ),
};

/**
 * Example with multiple paragraphs showing text composition patterns
 */
export const TextComposition: Story = {
  render: () => (
    <div>
      <GcdsText size="body" marginBottom="300">
        <strong>Introduction:</strong> This example demonstrates how to compose multiple text components to create 
        structured content. GcdsText can contain HTML elements like <strong>strong</strong>, <em>emphasis</em>, 
        and <a href="#">links</a>.
      </GcdsText>
      
      <GcdsText marginBottom="300">
        <strong>Body paragraph:</strong> This is the main content area where most information would be presented. 
        The content here would typically include the key points or information you want to convey.
      </GcdsText>
      
      <GcdsText size="small" textRole="secondary">
        <strong>Footer note:</strong> This is a small, secondary text that could be used for footnotes, 
        citations, or supplementary information that is less important than the main content.
      </GcdsText>
    </div>
  ),
};
