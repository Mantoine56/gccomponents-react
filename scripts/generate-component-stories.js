/**
 * Script to automatically generate story files for GCDS components
 * 
 * Run this script with: node scripts/generate-component-stories.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of all GCDS components to generate stories for
const components = [
  // Basic Components
  { name: 'GcdsButton', category: 'Base/Action' },
  { name: 'GcdsLink', category: 'Base/Action' },
  
  // Layout Components
  { name: 'GcdsContainer', category: 'Base/Layout' },
  { name: 'GcdsGrid', category: 'Base/Layout' },
  { name: 'GcdsCard', category: 'Base/Layout' },
  
  // Form Components
  { name: 'GcdsInput', category: 'Base/Form' },
  { name: 'GcdsTextarea', category: 'Base/Form' },
  { name: 'GcdsCheckbox', category: 'Base/Form' },
  { name: 'GcdsRadio', category: 'Base/Form' },
  { name: 'GcdsSelect', category: 'Base/Form' },
  { name: 'GcdsDateInput', category: 'Base/Form' },
  { name: 'GcdsFieldset', category: 'Base/Form' },
  { name: 'GcdsFileUploader', category: 'Base/Form' },
  
  // Navigation Components
  { name: 'GcdsHeader', category: 'Base/Navigation' },
  { name: 'GcdsFooter', category: 'Base/Navigation' },
  { name: 'GcdsBreadcrumbs', category: 'Base/Navigation' },
  { name: 'GcdsPagination', category: 'Base/Navigation' },
  { name: 'GcdsTopNav', category: 'Base/Navigation' },
  { name: 'GcdsSideNav', category: 'Base/Navigation' },
  
  // Feedback Components
  { name: 'GcdsAlert', category: 'Base/Feedback' },
  { name: 'GcdsErrorSummary', category: 'Base/Feedback' },
  { name: 'GcdsDetails', category: 'Base/Feedback' },
  
  // Typography Components
  { name: 'GcdsHeading', category: 'Base/Typography' },
  { name: 'GcdsText', category: 'Base/Typography' },
  { name: 'GcdsLangToggle', category: 'Base/Typography' },
];

// Template for a basic story file
const generateStoryTemplate = (component, category) => `import type { Meta, StoryObj } from '@storybook/react';
import { ${component} } from '@cdssnc/gcds-components-react';

/**
 * ${component} component from the GC Design System
 */
const meta: Meta<typeof ${component}> = {
  title: 'GCDS Components/${category}/${component.replace('Gcds', '')}',
  component: ${component},
  parameters: {
    docs: {
      description: {
        component: '${component} component from the GC Design System.',
      },
    },
  },
  tags: ['autodocs'],
  // Add argTypes here to document and control the component props
};

export default meta;
type Story = StoryObj<typeof ${component}>;

/**
 * Basic usage of the ${component} component
 */
export const Basic: Story = {
  args: {
    // Add appropriate args based on the component
  },
};
`;

// Create directory if it doesn't exist
const storiesDir = path.join(__dirname, '../src/stories/gcds');
if (!fs.existsSync(storiesDir)) {
  fs.mkdirSync(storiesDir, { recursive: true });
}

// Generate story files for each component
components.forEach(({ name, category }) => {
  const componentName = name.replace('Gcds', '');
  const fileName = `${componentName}.stories.tsx`;
  const filePath = path.join(storiesDir, fileName);
  
  // Skip if file already exists
  if (fs.existsSync(filePath)) {
    console.log(`File already exists: ${fileName}`);
    return;
  }
  
  // Write the story file
  fs.writeFileSync(filePath, generateStoryTemplate(name, category));
  console.log(`Created: ${fileName}`);
});

console.log('Story generation complete!'); 