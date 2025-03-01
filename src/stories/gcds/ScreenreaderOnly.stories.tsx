import type { Meta, StoryObj } from '@storybook/react';
import { GcdsSrOnly } from '@cdssnc/gcds-components-react';
import React from 'react';

/**
 * GcdsSrOnly component from the GC Design System
 * 
 * The Screen Reader Only component makes content visible only to screen readers and other 
 * assistive technologies, while hiding it visually from sighted users. This is useful for 
 * providing additional context or information to users of assistive technologies without 
 * affecting the visual layout.
 * 
 * Use this component when:
 * - You need to provide additional context for screen reader users
 * - You want to include skip links for keyboard navigation
 * - You need to provide text alternatives for visual content
 * - You want to improve accessibility without changing the visual design
 */
const meta: Meta<typeof GcdsSrOnly> = {
  title: 'GCDS Components/Base/Typography/ScreenreaderOnly',
  component: GcdsSrOnly,
  parameters: {
    docs: {
      description: {
        component: 'The screenreader-only component makes content visible only to screen readers and other assistive technologies, while hiding it visually from sighted users.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'The content that will only be visible to screen readers',
    },
    tag: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
      description: 'Sets the appropriate HTML tag for the content',
      defaultValue: 'p',
    },
  },
};

export default meta;
type Story = StoryObj<typeof GcdsSrOnly>;

/**
 * Basic usage of the GcdsSrOnly component
 */
export const Basic: Story = {
  args: {
    children: 'This text is only visible to screen readers.',
  },
};

/**
 * Example with a different HTML tag
 */
export const WithHeadingTag: Story = {
  args: {
    children: 'This is a heading only visible to screen readers.',
    tag: 'h2',
  },
};

/**
 * Example with additional context for screen readers
 */
export const AdditionalContext: Story = {
  render: () => (
    <div>
      <p>There is visible text here.</p>
      <GcdsSrOnly>
        Additional context only provided to screen reader users: This section contains important information.
      </GcdsSrOnly>
      <p>More visible text that everyone can see.</p>
    </div>
  ),
};

/**
 * Example of a skip link for keyboard navigation
 */
export const SkipLink: Story = {
  render: () => (
    <div>
      <a href="#main-content" style={{ 
        position: 'absolute', 
        top: '-40px', 
        left: 0, 
        padding: '8px', 
        backgroundColor: '#fff', 
        zIndex: 100
      }}
      className="skip-link"
      >
        Skip to main content
      </a>
      <style>
        {`
          .skip-link:focus {
            top: 0;
          }
        `}
      </style>
      <GcdsSrOnly>
        Press Tab to reveal the skip navigation link
      </GcdsSrOnly>
      <header style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
        <h1>Page Header</h1>
      </header>
      <main id="main-content" style={{ padding: '20px' }}>
        <h2>Main Content</h2>
        <p>This is the main content of the page.</p>
      </main>
    </div>
  ),
};

/**
 * Example of providing text alternatives for visual content
 */
export const TextAlternative: Story = {
  render: () => (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '20px', height: '20px', backgroundColor: 'green', borderRadius: '50%', marginRight: '10px' }}></div>
        <span>Available</span>
        <GcdsSrOnly>Status indicator: green circle</GcdsSrOnly>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
        <div style={{ width: '20px', height: '20px', backgroundColor: 'red', borderRadius: '50%', marginRight: '10px' }}></div>
        <span>Unavailable</span>
        <GcdsSrOnly>Status indicator: red circle</GcdsSrOnly>
      </div>
    </div>
  ),
};

/**
 * Example of using GcdsSrOnly in a form context
 */
export const FormContext: Story = {
  render: () => (
    <form style={{ maxWidth: '400px', padding: '20px', border: '1px solid #ccc' }}>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name</label>
        <input 
          id="name" 
          type="text" 
          style={{ width: '100%', padding: '8px', border: '1px solid #ccc' }} 
          aria-describedby="name-format"
        />
        <GcdsSrOnly id="name-format">
          Please enter your full name as it appears on your government ID
        </GcdsSrOnly>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
          Email
          <span style={{ color: 'red' }}>*</span>
          <GcdsSrOnly>Required</GcdsSrOnly>
        </label>
        <input 
          id="email" 
          type="email" 
          required 
          style={{ width: '100%', padding: '8px', border: '1px solid #ccc' }} 
        />
      </div>
      <button type="submit" style={{ padding: '8px 16px', backgroundColor: '#26374a', color: 'white', border: 'none' }}>
        Submit
      </button>
    </form>
  ),
}; 