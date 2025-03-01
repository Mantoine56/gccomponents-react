import type { Preview } from '@storybook/react'

// Import GCDS styles 
import '@cdssnc/gcds-components/dist/gcds/gcds.css'

// Font Awesome will be included via preview-head.html

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    options: {
      // Sort stories alphabetically by component name
      storySort: {
        order: ['Introduction', 'GCDS Components', ['Base', '*'], 'Extended Components', '*'],
      },
    },
    docs: {
      // Use expanded mode as default view in the docs
      canvas: { sourceState: 'shown' },
    },
    // Set the viewports for responsive testing
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1280px',
            height: '800px',
          },
        },
      },
    },
  },
};

export default preview;