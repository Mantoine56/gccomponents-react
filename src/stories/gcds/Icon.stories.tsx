import type { Meta, StoryObj } from '@storybook/react';
import { GcdsIcon } from '@cdssnc/gcds-components-react';

/**
 * GcdsIcon component from the GC Design System
 * 
 * This component uses Font Awesome icons and requires the Font Awesome CSS to be included in your project.
 * Make sure to include the Font Awesome CSS in your index.html:
 * <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" crossorigin="anonymous">
 */
const meta: Meta<typeof GcdsIcon> = {
  title: 'GCDS Components/Base/Icon',
  component: GcdsIcon,
  parameters: {
    docs: {
      description: {
        component: 'GcdsIcon component from the GC Design System. This component uses Font Awesome icons.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Name of the Font Awesome icon (required)',
    },
    iconStyle: {
      control: 'select',
      options: ['regular', 'solid'],
      description: 'Style of the icon (regular is outlined, solid is filled)',
    },
    size: {
      control: 'select',
      options: ['inherit', 'text-small', 'text', 'h6', 'h5', 'h4', 'h3', 'h2', 'h1'],
      description: 'Size of the icon',
    },
    fixedWidth: {
      control: 'boolean',
      description: 'Whether the icon should render as a fixed-width square',
    },
    label: {
      control: 'text',
      description: 'Accessible description for the icon',
    },
    marginLeft: {
      control: 'select',
      options: ['0', '50', '100', '150', '200', '250', '300', '400', '450', '500', '550', '600', '700', '800', '900', '1000'],
      description: 'Margin to the left of the icon',
    },
    marginRight: {
      control: 'select',
      options: ['0', '50', '100', '150', '200', '250', '300', '400', '450', '500', '550', '600', '700', '800', '900', '1000'],
      description: 'Margin to the right of the icon',
    },
  },
};

export default meta;
type Story = StoryObj<typeof GcdsIcon>;

/**
 * Basic usage with a common icon
 */
export const Basic: Story = {
  args: {
    name: 'check',
    label: 'Check icon'
  },
};

/**
 * Example with solid style
 */
export const SolidStyle: Story = {
  args: {
    name: 'user',
    iconStyle: 'solid',
    label: 'User icon'
  },
};

/**
 * Example with regular style (outlined)
 */
export const RegularStyle: Story = {
  args: {
    name: 'circle',
    iconStyle: 'regular',
    label: 'Circle icon'
  },
};

/**
 * Example with fixed width
 */
export const FixedWidth: Story = {
  args: {
    name: 'home',
    fixedWidth: true,
    label: 'Home icon'
  },
};

/**
 * Example with larger size
 */
export const LargeSize: Story = {
  args: {
    name: 'star',
    size: 'h1',
    label: 'Star icon'
  },
};

/**
 * Example with margins
 */
export const WithMargins: Story = {
  args: {
    name: 'arrow-right',
    marginLeft: '300',
    marginRight: '300',
    label: 'Arrow right icon'
  },
};

/**
 * Examples of common UI icons
 */
export const CommonIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <div style={{ textAlign: 'center', width: '100px' }}>
        <GcdsIcon name="check" size="h3" />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>check</p>
      </div>
      <div style={{ textAlign: 'center', width: '100px' }}>
        <GcdsIcon name="times" size="h3" />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>times</p>
      </div>
      <div style={{ textAlign: 'center', width: '100px' }}>
        <GcdsIcon name="user" size="h3" />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>user</p>
      </div>
      <div style={{ textAlign: 'center', width: '100px' }}>
        <GcdsIcon name="home" size="h3" />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>home</p>
      </div>
      <div style={{ textAlign: 'center', width: '100px' }}>
        <GcdsIcon name="envelope" size="h3" />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>envelope</p>
      </div>
      <div style={{ textAlign: 'center', width: '100px' }}>
        <GcdsIcon name="search" size="h3" />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>search</p>
      </div>
      <div style={{ textAlign: 'center', width: '100px' }}>
        <GcdsIcon name="download" size="h3" />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>download</p>
      </div>
      <div style={{ textAlign: 'center', width: '100px' }}>
        <GcdsIcon name="upload" size="h3" />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>upload</p>
      </div>
    </div>
  ),
}; 