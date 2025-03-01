import type { Meta, StoryObj } from '@storybook/react';
import { GcdsFileUploader } from '@cdssnc/gcds-components-react';
import React from 'react';

/**
 * GcdsFileUploader component from the GC Design System
 * 
 * The FileUploader component provides a standardized interface for users to upload
 * files from their device. It includes support for file type validation, multiple file
 * selection, and accessible error handling.
 * 
 * Use FileUploader for:
 * - Allowing users to upload documents, images, or other file types
 * - Collecting required files in applications or forms
 * - Accepting file attachments with size and type restrictions
 * - Providing feedback on file upload success or errors
 */
const meta: Meta<typeof GcdsFileUploader> = {
  title: 'GCDS Components/Base/Form/FileUploader',
  component: GcdsFileUploader,
  parameters: {
    docs: {
      description: {
        component: 'The FileUploader component enables users to select and upload files from their device with built-in validation and accessibility features.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    uploaderId: {
      control: 'text',
      description: 'Unique identifier for the file uploader element',
      table: {
        type: { summary: 'string' },
      },
    },
    name: {
      control: 'text',
      description: 'Name attribute for the file input element',
      table: {
        type: { summary: 'string' },
      },
    },
    label: {
      control: 'text',
      description: 'Text label for the file uploader',
      table: {
        type: { summary: 'string' },
      },
    },
    required: {
      control: 'boolean',
      description: 'When true, marks the file uploader as required',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'When true, disables the file uploader',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    accept: {
      control: 'text',
      description: 'Defines the file types that the uploader accepts (e.g., ".pdf,.jpg,.png")',
      table: {
        type: { summary: 'string' },
      },
    },
    multiple: {
      control: 'boolean',
      description: 'When true, allows selecting multiple files',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display when validation fails',
      table: {
        type: { summary: 'string' },
      },
    },
    hint: {
      control: 'text',
      description: 'Hint text displayed below the label to provide additional guidance',
      table: {
        type: { summary: 'string' },
      },
    },
    lang: {
      control: 'select',
      options: ['en', 'fr'],
      description: 'Sets the language of the component',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'en' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof GcdsFileUploader>;

/**
 * Basic usage of the FileUploader component
 */
export const Basic: Story = {
  args: {
    uploaderId: 'basic-uploader',
    name: 'file-upload',
    label: 'Upload a file',
  },
};

/**
 * FileUploader with required validation
 */
export const Required: Story = {
  args: {
    uploaderId: 'required-uploader',
    name: 'required-upload',
    label: 'Upload a document (required)',
    required: true,
    hint: 'This field is mandatory',
  },
};

/**
 * FileUploader with file type restrictions
 */
export const FileTypeRestrictions: Story = {
  args: {
    uploaderId: 'image-uploader',
    name: 'image-upload',
    label: 'Upload an image',
    accept: '.jpg,.jpeg,.png,.gif',
    hint: 'Accepted formats: JPG, PNG, GIF',
  },
};

/**
 * FileUploader supporting multiple file selection
 */
export const MultipleFiles: Story = {
  args: {
    uploaderId: 'multi-uploader',
    name: 'multi-upload',
    label: 'Upload supporting documents',
    multiple: true,
    hint: 'You can select multiple files at once',
  },
};

/**
 * FileUploader in a disabled state
 */
export const Disabled: Story = {
  args: {
    uploaderId: 'disabled-uploader',
    name: 'disabled-upload',
    label: 'Upload files',
    disabled: true,
    hint: 'This uploader is currently disabled',
  },
};

/**
 * FileUploader with an error message
 */
export const WithError: Story = {
  args: {
    uploaderId: 'error-uploader',
    name: 'error-upload',
    label: 'Upload your photo',
    errorMessage: 'Please upload a valid image file',
    hint: 'Maximum file size: 2MB',
  },
};

/**
 * FileUploader with detailed instructions
 */
export const WithDetailedInstructions: Story = {
  render: (args) => (
    <div>
      <GcdsFileUploader 
        {...args}
      />
      <div style={{ marginTop: '8px', fontSize: '14px' }}>
        <p>Requirements:</p>
        <ul>
          <li>File must be in PDF, JPG, or PNG format</li>
          <li>Maximum file size: 5MB</li>
          <li>Documents must not be password protected</li>
          <li>All text must be clearly legible</li>
        </ul>
      </div>
    </div>
  ),
  args: {
    uploaderId: 'detailed-uploader',
    name: 'documentation-upload',
    label: 'Upload your identification documents',
    accept: '.pdf,.jpg,.png',
    hint: 'Please provide clear, legible copies of your documents',
  }
};

/**
 * FileUploader in French
 */
export const FrenchLanguage: Story = {
  args: {
    uploaderId: 'french-uploader',
    name: 'telechargement-fichier',
    label: 'Télécharger un fichier',
    hint: 'Formats acceptés: PDF, JPG, PNG',
    lang: 'fr',
  },
};
