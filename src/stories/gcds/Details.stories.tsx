import type { Meta, StoryObj } from '@storybook/react';
import { GcdsDetails } from '@cdssnc/gcds-components-react';
import React from 'react';

/**
 * GcdsDetails component from the GC Design System
 * 
 * The Details component creates an interactive disclosure widget that can show or hide
 * additional content. It's similar to an accordion but designed for progressive disclosure
 * of secondary information within a page.
 * 
 * Use Details for:
 * - Progressive disclosure of non-essential information
 * - Reducing visual clutter by hiding secondary content
 * - Organizing related information that users might need
 * - Allowing users to access additional details only when needed
 */
const meta: Meta<typeof GcdsDetails> = {
  title: 'GCDS Components/Base/Feedback/Details',
  component: GcdsDetails,
  parameters: {
    docs: {
      description: {
        component: 'The Details component provides an expandable/collapsible section that helps organize content and reduce visual clutter.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    detailsTitle: {
      control: 'text',
      description: 'The summary text that appears in the always-visible part of the component',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    open: {
      control: 'boolean',
      description: 'When true, the details panel is expanded by default',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: 'text',
      description: 'The content that is shown/hidden when the details is toggled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof GcdsDetails>;

/**
 * Basic usage of the GcdsDetails component showing a collapsed state by default
 */
export const Basic: Story = {
  args: {
    detailsTitle: 'What information do I need to apply?',
    children: 'You will need your social insurance number, proof of address, and photo identification to complete your application.',
  },
};

/**
 * Details component that is open by default
 */
export const OpenByDefault: Story = {
  args: {
    detailsTitle: 'Important notice about your application',
    children: 'Applications received after the deadline will require additional processing time. Please ensure all your documents are submitted before the specified date.',
    open: true,
  },
};

/**
 * Details with rich content including lists
 */
export const WithRichContent: Story = {
  render: (args) => (
    <GcdsDetails {...args}>
      <p>Please have the following documents ready:</p>
      <ul>
        <li>Government-issued photo ID (passport, driver's license)</li>
        <li>Proof of address (utility bill, bank statement)</li>
        <li>Social Insurance Number (SIN)</li>
        <li>Birth certificate or citizenship card</li>
      </ul>
      <p>All documents must be valid and not expired.</p>
    </GcdsDetails>
  ),
  args: {
    detailsTitle: 'Required documents for your application'
  }
};

/**
 * Multiple Details components grouped together
 */
export const GroupedDetails: Story = {
  render: () => (
    <div>
      <GcdsDetails 
        detailsTitle="Eligibility requirements" 
        style={{ marginBottom: '10px' }}
      >
        <p>To be eligible for this program, you must:</p>
        <ul>
          <li>Be a Canadian citizen or permanent resident</li>
          <li>Be 18 years of age or older</li>
          <li>Have a valid Social Insurance Number</li>
        </ul>
      </GcdsDetails>
      
      <GcdsDetails 
        detailsTitle="Application process" 
        style={{ marginBottom: '10px' }}
      >
        <p>The application process consists of three steps:</p>
        <ol>
          <li>Complete the online form</li>
          <li>Submit required documentation</li>
          <li>Wait for application review (typically 5-7 business days)</li>
        </ol>
      </GcdsDetails>
      
      <GcdsDetails 
        detailsTitle="Contact information"
      >
        <p>If you need assistance with your application, please contact:</p>
        <p>Email: support@canada.ca</p>
        <p>Phone: 1-800-XXX-XXXX (Monday to Friday, 8am - 5pm EST)</p>
      </GcdsDetails>
    </div>
  ),
};

/**
 * Details with longer title and content
 */
export const LongContent: Story = {
  args: {
    detailsTitle: 'Detailed information about the application process including eligibility requirements and necessary documentation',
    children: `The application process requires several steps to ensure all information is properly collected and verified. 
    First, you'll need to create an account on our secure portal. Once registered, you can begin your application by providing 
    personal information, employment history, and contact details. After the initial submission, you'll be prompted to upload 
    supporting documents that verify your identity and eligibility. These may include government-issued ID, proof of address, 
    and other relevant certificates. Applications are typically processed within 10 business days, during which time our team 
    reviews all submitted information. You may be contacted if additional information is required. Once approved, you'll receive 
    a confirmation email with further instructions.`,
  },
};
