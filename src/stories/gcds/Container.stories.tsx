import type { Meta, StoryObj } from '@storybook/react';
import { GcdsContainer } from '@cdssnc/gcds-components-react';
import React from 'react';

/**
 * GcdsContainer component from the GC Design System
 */
const meta: Meta<typeof GcdsContainer> = {
  title: 'GCDS Components/Base/Layout/Container',
  component: GcdsContainer,
  parameters: {
    docs: {
      description: {
        component: 'GcdsContainer component from the GC Design System provides a responsive container for page content.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    centered: {
      control: 'boolean',
      description: 'Center the container horizontally',
      defaultValue: true
    },
    size: {
      control: 'select',
      options: ['full', 'xl', 'lg', 'md', 'sm', 'xs'],
      description: 'Container width size',
      defaultValue: 'full'
    },
    lang: {
      control: 'select',
      options: ['en', 'fr'],
      description: 'Language of the component',
      defaultValue: 'en'
    }
  }
};

export default meta;
type Story = StoryObj<typeof GcdsContainer>;

/**
 * Basic usage of the GcdsContainer component
 */
export const Basic: Story = {
  render: (args) => (
    <GcdsContainer {...args}>
      <div style={{ 
        padding: '20px', 
        backgroundColor: '#e0e0e0', 
        textAlign: 'center',
        border: '1px solid #ccc'
      }}>
        Container content goes here
      </div>
    </GcdsContainer>
  ),
  args: {
    centered: true,
    size: 'lg',
    lang: 'en'
  }
};

/**
 * Full width container
 */
export const FullWidth: Story = {
  render: (args) => (
    <GcdsContainer {...args}>
      <div style={{ 
        padding: '20px', 
        backgroundColor: '#e0e0e0', 
        textAlign: 'center',
        border: '1px solid #ccc'
      }}>
        Full width container
      </div>
    </GcdsContainer>
  ),
  args: {
    centered: true,
    size: 'full',
    lang: 'en'
  }
};

/**
 * Different container sizes
 */
export const Sizes: Story = {
  render: () => (
    <div>
      <GcdsContainer size="xs" style={{ marginBottom: '10px' }}>
        <div style={{ 
          padding: '20px', 
          backgroundColor: '#e0e0e0', 
          textAlign: 'center',
          border: '1px solid #ccc'
        }}>
          Extra Small Container
        </div>
      </GcdsContainer>
      
      <GcdsContainer size="sm" style={{ marginBottom: '10px' }}>
        <div style={{ 
          padding: '20px', 
          backgroundColor: '#e0e0e0', 
          textAlign: 'center',
          border: '1px solid #ccc'
        }}>
          Small Container
        </div>
      </GcdsContainer>
      
      <GcdsContainer size="md" style={{ marginBottom: '10px' }}>
        <div style={{ 
          padding: '20px', 
          backgroundColor: '#e0e0e0', 
          textAlign: 'center',
          border: '1px solid #ccc'
        }}>
          Medium Container
        </div>
      </GcdsContainer>
      
      <GcdsContainer size="lg" style={{ marginBottom: '10px' }}>
        <div style={{ 
          padding: '20px', 
          backgroundColor: '#e0e0e0', 
          textAlign: 'center',
          border: '1px solid #ccc'
        }}>
          Large Container
        </div>
      </GcdsContainer>
      
      <GcdsContainer size="xl">
        <div style={{ 
          padding: '20px', 
          backgroundColor: '#e0e0e0', 
          textAlign: 'center',
          border: '1px solid #ccc'
        }}>
          Extra Large Container
        </div>
      </GcdsContainer>
    </div>
  )
};
