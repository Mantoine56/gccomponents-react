import type { Meta, StoryObj } from '@storybook/react';
import { GcdsGrid, GcdsGridCol, GcdsContainer, GcdsText } from '@cdssnc/gcds-components-react';
import React from 'react';

type Story = StoryObj<typeof GcdsGrid>;

/**
 * The GcdsGrid component from the GC Design System provides a responsive grid layout system for organizing content.
 * 
 * It uses CSS Grid for modern, flexible layouts that adapt to different screen sizes. The grid system consists
 * of two main components:
 * 
 * - GcdsGrid: The container that establishes the grid context
 * - GcdsGridCol: The individual columns within the grid
 * 
 * The grid system is mobile-first and responsive, with different column configurations for mobile, tablet, and desktop
 * screen sizes. On mobile, columns stack vertically by default.
 */
const meta: Meta<typeof GcdsGrid> = {
  title: 'GCDS Components/Base/Layout/Grid',
  component: GcdsGrid,
  parameters: {
    docs: {
      description: {
        component: 'The GcdsGrid component provides a responsive grid layout system for organizing content. It works with GcdsGridCol to create flexible, accessible layouts that adapt to different screen sizes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    // GcdsGrid Properties
    alignContent: {
      control: 'select',
      options: ['center', 'end', 'space-around', 'space-between', 'space-evenly', 'start', 'stretch'],
      description: 'Aligns the grid along the block (column) axis if total grid size is less than container',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      }
    },
    alignItems: {
      control: 'select',
      options: ['baseline', 'center', 'end', 'start', 'stretch'],
      description: 'Aligns grid items along the block (column) axis',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      }
    },
    centered: {
      control: 'boolean',
      description: 'Centers the grid container horizontally',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      }
    },
    columns: {
      control: 'text',
      description: 'Defines the default number of grid columns for all viewports',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      }
    },
    columnsTablet: {
      control: 'text',
      description: 'Sets the number of grid columns for tablet screens (768px - 1023px)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      }
    },
    columnsDesktop: {
      control: 'text',
      description: 'Sets the number of grid columns for desktop screens (1024px and above)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      }
    },
    container: {
      control: 'select',
      options: ['full', 'xl', 'lg', 'md', 'sm', 'xs'],
      description: 'Defines the grid container size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      }
    },
    display: {
      control: 'radio',
      options: ['grid', 'inline-grid'],
      description: 'Defines element as grid or inline-grid container',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'grid' },
      }
    },
    equalRowHeight: {
      control: 'boolean',
      description: 'Sets all grid items to have an equal height, based on the tallest item',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      }
    },
    gap: {
      control: 'select',
      options: ['150', '175', '200', '225', '250', '300', '350', '400', '450', '500', '550', '600', '650', '700', '750', '800'],
      description: 'Defines spacing between grid items for all viewports',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '300' },
      }
    },
    gapTablet: {
      control: 'select',
      options: ['150', '175', '200', '225', '250', '300', '350', '400', '450', '500', '550', '600', '650', '700', '750', '800'],
      description: 'Sets spacing between grid items for tablet screens',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      }
    },
    gapDesktop: {
      control: 'select',
      options: ['150', '175', '200', '225', '250', '300', '350', '400', '450', '500', '550', '600', '650', '700', '750', '800'],
      description: 'Sets spacing between grid items for desktop screens',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      }
    },
    justifyContent: {
      control: 'select',
      options: ['center', 'end', 'space-around', 'space-between', 'space-evenly', 'start', 'stretch'],
      description: 'Aligns the grid along the inline (row) axis if total grid size is less than container',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      }
    },
    justifyItems: {
      control: 'select',
      options: ['center', 'end', 'start', 'stretch'],
      description: 'Aligns grid items along the inline (row) axis',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      }
    },
    placeContent: {
      control: 'select',
      options: ['center', 'end', 'space-around', 'space-between', 'space-evenly', 'start', 'stretch'],
      description: 'Sets both the align-content and justify-content properties',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      }
    },
    placeItems: {
      control: 'select',
      options: ['center', 'end', 'start', 'stretch'],
      description: 'Sets both the align-items and justify-items properties',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      }
    },
    tag: {
      control: 'select',
      options: ['article', 'aside', 'div', 'dl', 'main', 'nav', 'ol', 'section', 'ul'],
      description: 'HTML tag to use for the grid element',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'div' },
      }
    },
    lang: {
      control: 'select',
      options: ['en', 'fr'],
      description: 'Language of the component',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'en' },
      }
    }
  }
};

export default meta;

// Helper function to create a styled column for examples
interface StyledColumnProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

const StyledColumn = ({ children, backgroundColor = '#e0e0e0' }: StyledColumnProps) => (
  <div style={{ 
    padding: '15px', 
    backgroundColor: backgroundColor,
    border: '1px solid #ccc', 
    borderRadius: '4px',
    height: '100%',
    textAlign: 'center'
  }}>
    {children}
  </div>
);

/**
 * Basic usage of the GcdsGrid component with three equal columns
 */
export const Basic: Story = {
  render: (args) => (
    <GcdsGrid {...args}>
      <GcdsGridCol>
        <StyledColumn>Column 1</StyledColumn>
      </GcdsGridCol>
      <GcdsGridCol>
        <StyledColumn>Column 2</StyledColumn>
      </GcdsGridCol>
      <GcdsGridCol>
        <StyledColumn>Column 3</StyledColumn>
      </GcdsGridCol>
    </GcdsGrid>
  ),
  args: {
    tag: 'div',
    lang: 'en'
  }
};

/**
 * Grid inside a container for centered layout
 */
export const InsideContainer: Story = {
  render: (args) => (
    <GcdsContainer size="lg" centered>
      <GcdsText marginBottom="400">This grid is inside a large container</GcdsText>
      <GcdsGrid {...args}>
        <GcdsGridCol>
          <StyledColumn>Column 1</StyledColumn>
        </GcdsGridCol>
        <GcdsGridCol>
          <StyledColumn>Column 2</StyledColumn>
        </GcdsGridCol>
        <GcdsGridCol>
          <StyledColumn>Column 3</StyledColumn>
        </GcdsGridCol>
      </GcdsGrid>
    </GcdsContainer>
  ),
  args: {
    tag: 'div',
    lang: 'en'
  }
};

/**
 * Grid with different column sizes using tablet and desktop props
 */
export const ResponsiveColumns: Story = {
  render: (args) => (
    <GcdsGrid {...args}>
      <GcdsGridCol tablet={3} desktop={6}>
        <StyledColumn>
          <strong>Half Width on Desktop</strong>
          <p>tablet=3 (half on tablet)</p>
          <p>desktop=6 (half on desktop)</p>
        </StyledColumn>
      </GcdsGridCol>
      <GcdsGridCol tablet={3} desktop={6}>
        <StyledColumn>
          <strong>Half Width on Desktop</strong>
          <p>tablet=3 (half on tablet)</p>
          <p>desktop=6 (half on desktop)</p>
        </StyledColumn>
      </GcdsGridCol>
      <GcdsGridCol tablet={2} desktop={4}>
        <StyledColumn backgroundColor="#f0f0f0">
          <strong>One Third on Desktop</strong>
          <p>tablet=2 (one third on tablet)</p>
          <p>desktop=4 (one third on desktop)</p>
        </StyledColumn>
      </GcdsGridCol>
      <GcdsGridCol tablet={2} desktop={4}>
        <StyledColumn backgroundColor="#f0f0f0">
          <strong>One Third on Desktop</strong>
          <p>tablet=2 (one third on tablet)</p>
          <p>desktop=4 (one third on desktop)</p>
        </StyledColumn>
      </GcdsGridCol>
      <GcdsGridCol tablet={2} desktop={4}>
        <StyledColumn backgroundColor="#f0f0f0">
          <strong>One Third on Desktop</strong>
          <p>tablet=2 (one third on tablet)</p>
          <p>desktop=4 (one third on desktop)</p>
        </StyledColumn>
      </GcdsGridCol>
    </GcdsGrid>
  ),
  args: {
    tag: 'div',
    lang: 'en',
    gap: '300'
  }
};

/**
 * Grid with custom gap spacing between items
 */
export const CustomGap: Story = {
  render: (args) => (
    <GcdsGrid {...args}>
      <GcdsGridCol>
        <StyledColumn>Column 1</StyledColumn>
      </GcdsGridCol>
      <GcdsGridCol>
        <StyledColumn>Column 2</StyledColumn>
      </GcdsGridCol>
      <GcdsGridCol>
        <StyledColumn>Column 3</StyledColumn>
      </GcdsGridCol>
      <GcdsGridCol>
        <StyledColumn>Column 4</StyledColumn>
      </GcdsGridCol>
    </GcdsGrid>
  ),
  args: {
    gap: '600',
    tag: 'div',
    lang: 'en'
  }
};

/**
 * Grid with equal row heights
 */
export const EqualRowHeight: Story = {
  render: (args) => (
    <GcdsGrid {...args}>
      <GcdsGridCol>
        <StyledColumn>
          Short content
        </StyledColumn>
      </GcdsGridCol>
      <GcdsGridCol>
        <StyledColumn>
          Medium length content that takes
          up a bit more space than the first column
        </StyledColumn>
      </GcdsGridCol>
      <GcdsGridCol>
        <StyledColumn>
          This column has much more content than the others.
          With equal row height enabled, all columns will be
          as tall as this one. This ensures a consistent layout
          even when content lengths vary significantly between columns.
        </StyledColumn>
      </GcdsGridCol>
    </GcdsGrid>
  ),
  args: {
    equalRowHeight: true,
    tag: 'div', 
    lang: 'en'
  }
};

/**
 * Complex layout with nested grids
 */
export const NestedGrids: Story = {
  render: (args) => (
    <GcdsGrid {...args}>
      <GcdsGridCol desktop={12}>
        <StyledColumn backgroundColor="#d0d0d0">
          <strong>Header - Full Width</strong>
        </StyledColumn>
      </GcdsGridCol>
      
      <GcdsGridCol desktop={8}>
        <StyledColumn backgroundColor="#e8e8e8">
          <strong>Main Content Area</strong>
          <p>desktop=8 (two-thirds width)</p>
          <GcdsGrid gap="200">
            <GcdsGridCol desktop={6}>
              <StyledColumn backgroundColor="#f4f4f4">Nested Column 1</StyledColumn>
            </GcdsGridCol>
            <GcdsGridCol desktop={6}>
              <StyledColumn backgroundColor="#f4f4f4">Nested Column 2</StyledColumn>
            </GcdsGridCol>
          </GcdsGrid>
        </StyledColumn>
      </GcdsGridCol>
      
      <GcdsGridCol desktop={4}>
        <StyledColumn backgroundColor="#e0e0e0">
          <strong>Sidebar</strong>
          <p>desktop=4 (one-third width)</p>
        </StyledColumn>
      </GcdsGridCol>
      
      <GcdsGridCol desktop={12}>
        <StyledColumn backgroundColor="#d0d0d0">
          <strong>Footer - Full Width</strong>
        </StyledColumn>
      </GcdsGridCol>
    </GcdsGrid>
  ),
  args: {
    tag: 'div',
    lang: 'en',
    gap: '300'
  }
};

/**
 * Grid with French language
 */
export const FrenchGrid: Story = {
  render: (args) => (
    <GcdsGrid {...args}>
      <GcdsGridCol>
        <StyledColumn>Colonne 1</StyledColumn>
      </GcdsGridCol>
      <GcdsGridCol>
        <StyledColumn>Colonne 2</StyledColumn>
      </GcdsGridCol>
      <GcdsGridCol>
        <StyledColumn>Colonne 3</StyledColumn>
      </GcdsGridCol>
    </GcdsGrid>
  ),
  args: {
    tag: 'div',
    lang: 'fr'
  }
}; 