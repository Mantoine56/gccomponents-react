import type { Meta, StoryObj } from '@storybook/react';
import { GcdsVerifyBanner } from '@cdssnc/gcds-components-react';

/**
 * The GcdsVerifyBanner component displays a banner that verifies the authenticity
 * of a Government of Canada website. It provides users with information about how
 * to verify they are on an official Government of Canada website.
 * 
 * ## When to use
 * 
 * - On Government of Canada websites to help users verify they are on an official site
 * - When you need to provide security information to users
 * - As part of a comprehensive approach to website security and user trust
 * 
 * ## Component Properties
 * 
 * - `container`: Defines the container width of the verify banner content
 * - `isFixed`: Defines if the banner's position is fixed
 * - `lang`: Language of the component (automatically inherited from the page)
 */
const meta: Meta<typeof GcdsVerifyBanner> = {
  title: 'GCDS Components/Base/Feedback/VerifyBanner',
  component: GcdsVerifyBanner,
  parameters: {
    docs: {
      description: {
        component: 'The Verify Banner helps users confirm they are on an official Government of Canada website.',
      },
    },
  },
  argTypes: {
    container: {
      description: 'Defines the container width of the verify banner content',
      control: 'select',
      options: ['full', 'xl', 'lg', 'md', 'sm', 'xs'],
    },
    isFixed: {
      description: 'Defines if the banner\'s position is fixed',
      control: 'boolean',
    },
    lang: {
      description: 'Language of the component',
      control: 'radio',
      options: ['en', 'fr'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof GcdsVerifyBanner>;

/**
 * Default example of the Verify Banner with standard settings.
 */
export const Default: Story = {
  args: {
    container: 'xl',
    isFixed: false,
    lang: 'en',
  },
};

/**
 * Example of the Verify Banner in French.
 */
export const French: Story = {
  args: {
    container: 'xl',
    isFixed: false,
    lang: 'fr',
  },
};

/**
 * Example of the Verify Banner with a fixed position.
 * When fixed, the banner will remain visible at the top of the viewport as users scroll.
 */
export const FixedPosition: Story = {
  args: {
    container: 'xl',
    isFixed: true,
    lang: 'en',
  },
};

/**
 * Example of the Verify Banner with a full-width container.
 */
export const FullWidth: Story = {
  args: {
    container: 'full',
    isFixed: false,
    lang: 'en',
  },
};

/**
 * Example of the Verify Banner with a large container.
 */
export const LargeContainer: Story = {
  args: {
    container: 'lg',
    isFixed: false,
    lang: 'en',
  },
};

/**
 * Example of the Verify Banner with a medium container.
 */
export const MediumContainer: Story = {
  args: {
    container: 'md',
    isFixed: false,
    lang: 'en',
  },
};

/**
 * Example of the Verify Banner with a small container.
 */
export const SmallContainer: Story = {
  args: {
    container: 'sm',
    isFixed: false,
    lang: 'en',
  },
};

/**
 * Example of the Verify Banner with an extra small container.
 */
export const ExtraSmallContainer: Story = {
  args: {
    container: 'xs',
    isFixed: false,
    lang: 'en',
  },
};

/**
 * Example showing the Verify Banner in a page context.
 * This demonstrates how the banner appears within a typical page layout.
 */
export const InPageContext: Story = {
  render: (args) => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '300px',
      border: '1px solid #ddd',
      position: 'relative'
    }}>
      <header style={{ 
        backgroundColor: '#26374A', 
        color: 'white', 
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <div>Government of Canada</div>
        <div>Language Toggle</div>
      </header>
      
      <GcdsVerifyBanner {...args} />
      
      <main style={{ 
        padding: '20px',
        flex: '1'
      }}>
        <h1 style={{ margin: '0 0 20px 0' }}>Page Content</h1>
        <p>This is where the main content of the page would appear.</p>
      </main>
      
      <footer style={{ 
        backgroundColor: '#26374A', 
        color: 'white', 
        padding: '20px'
      }}>
        Footer content
      </footer>
    </div>
  ),
  args: {
    container: 'xl',
    isFixed: false,
    lang: 'en',
  },
}; 