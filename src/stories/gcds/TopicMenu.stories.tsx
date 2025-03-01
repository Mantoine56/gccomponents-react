import { Meta, StoryObj } from '@storybook/react';
import { GcdsTopicMenu } from '@cdssnc/gcds-components-react';

/**
 * The GcdsTopicMenu component provides a navigation menu for themes and topics
 * commonly used in Government of Canada websites. It offers a dropdown menu
 * with navigation options and is typically placed at the top of a page.
 * 
 * ## When to use
 * 
 * - When you need to provide a standard Government of Canada theme and topic
 *   navigation menu at the top of a page
 * - When you want to maintain consistent navigation across Government of Canada websites
 * 
 * ## Component Properties
 * 
 * - `home`: Boolean that sets the homepage styling when true
 * - `lang`: Language of the component, either 'en' (English) or 'fr' (French)
 * 
 * The component handles its own state for:
 * - `open`: Controls whether the menu is expanded or collapsed
 * - `navItems`: Navigation items in the menu
 * - `navSize`: Determines the responsive size of the navigation
 */

const meta: Meta<typeof GcdsTopicMenu> = {
  title: 'GCDS Components/Base/Navigation/TopicMenu',
  component: GcdsTopicMenu,
  parameters: {
    docs: {
      description: {
        component: 'The Government of Canada Theme and Topic Menu component provides a standardized navigation experience in Government of Canada websites.',
      },
    },
  },
  argTypes: {
    home: {
      description: 'Sets the homepage styling',
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
type Story = StoryObj<typeof GcdsTopicMenu>;

/**
 * Basic example of the Topic Menu with default settings.
 */
export const Basic: Story = {
  args: {
    home: false,
    lang: 'en',
  },
};

/**
 * Example of the Topic Menu with homepage styling.
 */
export const HomePage: Story = {
  args: {
    home: true,
    lang: 'en',
  },
};

/**
 * Example of the Topic Menu in French.
 */
export const French: Story = {
  args: {
    home: false,
    lang: 'fr',
  },
};

/**
 * Example of the Topic Menu on the homepage in French.
 */
export const FrenchHomePage: Story = {
  args: {
    home: true,
    lang: 'fr',
  },
};

/**
 * Example showing the Topic Menu in a responsive container.
 * 
 * The Topic Menu automatically adjusts its layout based on the screen size,
 * showing different layouts for mobile and desktop views.
 */
export const Responsive: Story = {
  render: (args) => (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      <GcdsTopicMenu {...args} />
    </div>
  ),
  args: {
    home: false,
    lang: 'en',
  },
};

/**
 * This example demonstrates how the Topic Menu integrates into a page header.
 */
export const InPageHeader: Story = {
  render: (args) => (
    <header style={{ 
      backgroundColor: '#f8f8f8', 
      padding: '20px 0 0 0',
      borderBottom: '1px solid #ddd'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* The site brand would typically go here */}
        <div style={{ 
          padding: '0 0 20px 15px',
          fontSize: '24px',
          fontWeight: 'bold'
        }}>
          Example Site
        </div>
        
        {/* The topic menu */}
        <GcdsTopicMenu {...args} />
      </div>
    </header>
  ),
  args: {
    home: false,
    lang: 'en',
  },
}; 