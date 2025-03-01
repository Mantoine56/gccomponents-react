import type { Meta, StoryObj } from '@storybook/react';
import { GcdsNotice, GcdsButton, GcdsLink } from '@cdssnc/gcds-components-react';
import React from 'react';

/**
 * The GcdsNotice component displays important messages or alerts to users.
 * 
 * Notices are used to communicate important information, feedback, or status updates
 * to users in a visually distinct way. They can be used to indicate success, provide
 * information, warn about potential issues, or alert users to errors.
 * 
 * Use notices when:
 * - Providing feedback after a user action (success, error)
 * - Highlighting important information that needs attention
 * - Warning users about potential issues or consequences
 * - Communicating system status or updates
 * 
 * Note: For proper rendering, ensure that:
 * - The 'type' property is always provided ('info', 'success', 'warning', or 'danger')
 * - The 'noticeTitle' property should be provided (can be empty string for no visible title)
 * - The 'noticeTitleTag' should be specified for accessibility (defaults to 'h2')
 * - When using nested components, ensure they have all required properties
 * - Use the render function approach for examples instead of the args pattern for reliable rendering
 *   (this component specifically appears to have issues with the args approach)
 */
const meta: Meta<typeof GcdsNotice> = {
  title: 'GCDS Components/Base/Notice',
  component: GcdsNotice,
  parameters: {
    docs: {
      description: {
        component: 'The Notice component displays important messages or alerts to users. It provides visual cues through color and icons to indicate the type of message being communicated.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    // Core properties
    type: {
      control: 'select',
      options: ['danger', 'info', 'success', 'warning'],
      description: 'Sets the type of notice, which determines its visual appearance and semantic meaning.',
      table: {
        type: { summary: "'danger' | 'info' | 'success' | 'warning'" },
        defaultValue: { summary: 'info' },
      }
    },
    noticeTitle: {
      control: 'text',
      description: 'Sets the notice title. The title should be concise and clearly indicate the purpose of the notice.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      }
    },
    noticeTitleTag: {
      control: 'select',
      options: ['h2', 'h3', 'h4', 'h5'],
      description: 'The HTML heading element for the title. This does not affect visual styling but ensures proper document structure and accessibility.',
      table: {
        type: { summary: "'h2' | 'h3' | 'h4' | 'h5'" },
        defaultValue: { summary: 'h2' },
      }
    },
    children: {
      control: 'text',
      description: 'The notice content. This can include text, links, or other elements that provide details about the notice.',
      table: {
        type: { summary: 'ReactNode' },
      }
    },
  },
};

export default meta;
type Story = StoryObj<typeof GcdsNotice>;

/**
 * Basic information notice
 * 
 * The info notice type is used to provide neutral information or context to users.
 * It uses a blue color scheme and an information icon.
 */
export const InfoNotice: Story = {
  render: () => (
    <GcdsNotice
      type="info"
      noticeTitle="Information"
      noticeTitleTag="h2"
    >
      This is an information notice that provides context or additional details about a feature or process.
    </GcdsNotice>
  ),
};

/**
 * Success notice example
 * 
 * The success notice type is used to confirm that an action has been completed successfully.
 * It uses a green color scheme and a checkmark icon.
 */
export const SuccessNotice: Story = {
  render: () => (
    <GcdsNotice
      type="success"
      noticeTitle="Success"
      noticeTitleTag="h2"
    >
      Your form has been successfully submitted. You will receive a confirmation email shortly.
    </GcdsNotice>
  ),
};

/**
 * Warning notice example
 * 
 * The warning notice type is used to alert users to potential issues or actions that require caution.
 * It uses a yellow/orange color scheme and a warning icon.
 */
export const WarningNotice: Story = {
  render: () => (
    <GcdsNotice
      type="warning"
      noticeTitle="Warning"
      noticeTitleTag="h2"
    >
      Your session will expire in 5 minutes. Save your work to avoid losing any changes.
    </GcdsNotice>
  ),
};

/**
 * Danger notice example
 * 
 * The danger notice type is used to communicate errors or critical issues that need immediate attention.
 * It uses a red color scheme and an error icon.
 */
export const DangerNotice: Story = {
  render: () => (
    <GcdsNotice
      type="danger"
      noticeTitle="Error"
      noticeTitleTag="h2"
    >
      There was an error processing your request. Please check your information and try again.
    </GcdsNotice>
  ),
};

/**
 * Notice with different heading level
 * 
 * This example demonstrates how to use a different heading level for the notice title.
 * The heading level should be chosen based on the document structure to maintain proper hierarchy.
 */
export const WithHeadingLevel: Story = {
  args: {
    type: 'info',
    noticeTitle: 'Information with H3',
    noticeTitleTag: 'h3',
    children: 'This notice has an h3 heading level, which is useful when the notice appears within a section that already has an h2 heading.',
  },
};

/**
 * Notice with rich content
 * 
 * Notices can contain more than just text. This example shows how to include
 * links, formatted text, and buttons within a notice.
 */
export const WithRichContent: Story = {
  render: () => (
    <GcdsNotice
      type="info"
      noticeTitle="Account verification required"
      noticeTitleTag="h2"
    >
      <p>Your account requires verification before you can access all features.</p>
      <p>Please check your email for a verification link or <GcdsLink href="#">request a new verification email</GcdsLink></p>
      <div style={{ marginTop: '1rem' }}>
        <GcdsButton type="button" buttonRole="primary">Verify now</GcdsButton>
      </div>
    </GcdsNotice>
  ),
};

/**
 * Notice without title
 * 
 * For simpler messages, a notice can be used without a title.
 * This is useful for brief, straightforward messages.
 */
export const WithoutTitle: Story = {
  render: () => (
    <GcdsNotice
      type="success"
      noticeTitle=""
      noticeTitleTag="h2"
    >
      Your changes have been saved.
    </GcdsNotice>
  ),
};

/**
 * Notice with long content
 * 
 * This example demonstrates how a notice handles longer content.
 * Notices can accommodate detailed explanations when necessary.
 */
export const WithLongContent: Story = {
  render: () => (
    <GcdsNotice
      type="warning"
      noticeTitle="Scheduled maintenance"
      noticeTitleTag="h2"
    >
      The system will be unavailable due to scheduled maintenance on Saturday, June 15, from 2:00 AM to 6:00 AM EDT. During this time, you will not be able to access your account or make any transactions. We recommend completing any urgent tasks before the maintenance period begins. We apologize for any inconvenience this may cause and appreciate your understanding as we work to improve our services.
    </GcdsNotice>
  ),
};

/**
 * French language example
 * 
 * This example demonstrates the component with French language content.
 */
export const FrenchNotice: Story = {
  render: () => (
    <GcdsNotice
      type="info"
      noticeTitle="Information importante"
      noticeTitleTag="h2"
      lang="fr"
    >
      Votre demande a été reçue et sera traitée dans les 5 jours ouvrables.
    </GcdsNotice>
  ),
}; 