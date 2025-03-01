import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { 
  GcdsInput, 
  GcdsSelect, 
  GcdsTextarea, 
  GcdsButton, 
  GcdsContainer,
  GcdsFieldset,
  GcdsGrid,
  GcdsGridCol
} from '@cdssnc/gcds-components-react';

/**
 * FormLayout Component
 * 
 * This is a custom layout pattern (not an official GCDS component) that demonstrates 
 * how to organize form elements in a consistent way using existing GCDS components.
 * 
 * The FormLayout pattern uses GcdsContainer, GcdsGrid, and GcdsGridCol components
 * to create responsive form layouts that work well on different screen sizes.
 */
const meta: Meta = {
  title: 'GCDS Patterns/FormLayout',
  parameters: {
    docs: {
      description: {
        component: 'A pattern for organizing form elements in a consistent way using existing GCDS components.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

/**
 * Basic form layout with a single column
 */
export const BasicFormLayout: Story = {
  render: () => (
    <GcdsContainer size="md">
      <form style={{ maxWidth: '100%' }}>
        <GcdsGrid tag="div">
          <GcdsGridCol>
            {/* Form title */}
            <h1 style={{ marginBottom: '2rem' }}>Contact Form</h1>
            
            {/* Form fields */}
            <div style={{ marginBottom: '1.5rem' }}>
              <GcdsInput
                inputId="full-name"
                label="Full name"
                name="full-name"
                type="text"
                required
              />
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <GcdsInput
                inputId="email"
                label="Email address"
                name="email"
                type="email"
                required
              />
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <GcdsSelect
                selectId="inquiry-type"
                label="Type of inquiry"
                name="inquiry-type"
                required
              >
                <option value="">Select an option</option>
                <option value="general">General inquiry</option>
                <option value="technical">Technical support</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </GcdsSelect>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <GcdsTextarea
                textareaId="message"
                label="Message"
                name="message"
                required
              />
            </div>
            
            {/* Form actions */}
            <div style={{ marginTop: '2rem' }}>
              <GcdsButton type="submit">Submit</GcdsButton>
              <GcdsButton type="reset" style={{ marginLeft: '1rem' }}>Reset</GcdsButton>
            </div>
          </GcdsGridCol>
        </GcdsGrid>
      </form>
    </GcdsContainer>
  ),
};

/**
 * Two-column form layout for larger screens
 */
export const TwoColumnFormLayout: Story = {
  render: () => (
    <GcdsContainer size="lg">
      <form style={{ maxWidth: '100%' }}>
        <GcdsGrid tag="div">
          <GcdsGridCol>
            {/* Form title */}
            <h1 style={{ marginBottom: '2rem' }}>Registration Form</h1>
          </GcdsGridCol>
        </GcdsGrid>
        
        <GcdsGrid tag="div">
          {/* Personal Information Section */}
          <GcdsGridCol>
            <GcdsFieldset fieldsetId="personal-info" legend="Personal Information" required>
              <div style={{ marginBottom: '1.5rem' }}>
                <GcdsInput
                  inputId="first-name"
                  label="First name"
                  name="first-name"
                  type="text"
                  required
                />
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <GcdsInput
                  inputId="last-name"
                  label="Last name"
                  name="last-name"
                  type="text"
                  required
                />
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <GcdsInput
                  inputId="date-of-birth"
                  label="Date of birth"
                  name="date-of-birth"
                  type="text"
                  required
                />
              </div>
            </GcdsFieldset>
          </GcdsGridCol>
          
          {/* Contact Information Section */}
          <GcdsGridCol>
            <GcdsFieldset fieldsetId="contact-info" legend="Contact Information" required>
              <div style={{ marginBottom: '1.5rem' }}>
                <GcdsInput
                  inputId="email-address"
                  label="Email address"
                  name="email-address"
                  type="email"
                  required
                />
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <GcdsInput
                  inputId="phone-number"
                  label="Phone number"
                  name="phone-number"
                  type="text"
                  required
                />
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <GcdsSelect
                  selectId="preferred-contact"
                  label="Preferred contact method"
                  name="preferred-contact"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                </GcdsSelect>
              </div>
            </GcdsFieldset>
          </GcdsGridCol>
        </GcdsGrid>
        
        <GcdsGrid tag="div">
          {/* Additional Information Section */}
          <GcdsGridCol>
            <GcdsFieldset fieldsetId="additional-info" legend="Additional Information">
              <div style={{ marginBottom: '1.5rem' }}>
                <GcdsTextarea
                  textareaId="comments"
                  label="Comments or special requests"
                  name="comments"
                />
              </div>
            </GcdsFieldset>
          </GcdsGridCol>
        </GcdsGrid>
        
        {/* Form actions */}
        <GcdsGrid tag="div">
          <GcdsGridCol>
            <div style={{ marginTop: '2rem' }}>
              <GcdsButton type="submit">Register</GcdsButton>
              <GcdsButton type="reset" style={{ marginLeft: '1rem' }}>Reset</GcdsButton>
            </div>
          </GcdsGridCol>
        </GcdsGrid>
      </form>
    </GcdsContainer>
  ),
};

/**
 * Responsive form layout with different sections
 */
export const ResponsiveFormLayout: Story = {
  render: () => (
    <GcdsContainer size="lg">
      <form style={{ maxWidth: '100%' }}>
        <GcdsGrid tag="div">
          <GcdsGridCol>
            {/* Form title */}
            <h1 style={{ marginBottom: '1rem' }}>Application Form</h1>
            <p style={{ marginBottom: '2rem' }}>Please fill out all required fields to submit your application.</p>
          </GcdsGridCol>
        </GcdsGrid>
        
        {/* Personal Information Section */}
        <GcdsFieldset fieldsetId="app-personal-info" legend="Personal Information" required style={{ marginBottom: '2rem' }}>
          <GcdsGrid tag="div">
            <GcdsGridCol>
              <div style={{ marginBottom: '1.5rem' }}>
                <GcdsInput
                  inputId="app-first-name"
                  label="First name"
                  name="app-first-name"
                  type="text"
                  required
                />
              </div>
            </GcdsGridCol>
            
            <GcdsGridCol>
              <div style={{ marginBottom: '1.5rem' }}>
                <GcdsInput
                  inputId="app-middle-name"
                  label="Middle name (optional)"
                  name="app-middle-name"
                  type="text"
                />
              </div>
            </GcdsGridCol>
            
            <GcdsGridCol>
              <div style={{ marginBottom: '1.5rem' }}>
                <GcdsInput
                  inputId="app-last-name"
                  label="Last name"
                  name="app-last-name"
                  type="text"
                  required
                />
              </div>
            </GcdsGridCol>
          </GcdsGrid>
          
          <GcdsGrid tag="div">
            <GcdsGridCol>
              <div style={{ marginBottom: '1.5rem' }}>
                <GcdsInput
                  inputId="app-dob"
                  label="Date of birth"
                  name="app-dob"
                  type="text"
                  required
                />
              </div>
            </GcdsGridCol>
            
            <GcdsGridCol>
              <div style={{ marginBottom: '1.5rem' }}>
                <GcdsSelect
                  selectId="app-citizenship"
                  label="Citizenship status"
                  name="app-citizenship"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="citizen">Canadian Citizen</option>
                  <option value="permanent-resident">Permanent Resident</option>
                  <option value="other">Other</option>
                </GcdsSelect>
              </div>
            </GcdsGridCol>
          </GcdsGrid>
        </GcdsFieldset>
        
        {/* Contact Information Section */}
        <GcdsFieldset fieldsetId="app-contact-info" legend="Contact Information" required style={{ marginBottom: '2rem' }}>
          <GcdsGrid tag="div">
            <GcdsGridCol>
              <div style={{ marginBottom: '1.5rem' }}>
                <GcdsInput
                  inputId="app-email"
                  label="Email address"
                  name="app-email"
                  type="email"
                  required
                />
              </div>
            </GcdsGridCol>
            
            <GcdsGridCol>
              <div style={{ marginBottom: '1.5rem' }}>
                <GcdsInput
                  inputId="app-phone"
                  label="Phone number"
                  name="app-phone"
                  type="text"
                  required
                />
              </div>
            </GcdsGridCol>
          </GcdsGrid>
          
          <GcdsGrid tag="div">
            <GcdsGridCol>
              <div style={{ marginBottom: '1.5rem' }}>
                <GcdsInput
                  inputId="app-address"
                  label="Street address"
                  name="app-address"
                  type="text"
                  required
                />
              </div>
            </GcdsGridCol>
          </GcdsGrid>
          
          <GcdsGrid tag="div">
            <GcdsGridCol>
              <div style={{ marginBottom: '1.5rem' }}>
                <GcdsInput
                  inputId="app-city"
                  label="City"
                  name="app-city"
                  type="text"
                  required
                />
              </div>
            </GcdsGridCol>
            
            <GcdsGridCol>
              <div style={{ marginBottom: '1.5rem' }}>
                <GcdsSelect
                  selectId="app-province"
                  label="Province/Territory"
                  name="app-province"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="ab">Alberta</option>
                  <option value="bc">British Columbia</option>
                  <option value="mb">Manitoba</option>
                  <option value="nb">New Brunswick</option>
                  <option value="nl">Newfoundland and Labrador</option>
                  <option value="ns">Nova Scotia</option>
                  <option value="nt">Northwest Territories</option>
                  <option value="nu">Nunavut</option>
                  <option value="on">Ontario</option>
                  <option value="pe">Prince Edward Island</option>
                  <option value="qc">Quebec</option>
                  <option value="sk">Saskatchewan</option>
                  <option value="yt">Yukon</option>
                </GcdsSelect>
              </div>
            </GcdsGridCol>
            
            <GcdsGridCol>
              <div style={{ marginBottom: '1.5rem' }}>
                <GcdsInput
                  inputId="app-postal"
                  label="Postal code"
                  name="app-postal"
                  type="text"
                  required
                />
              </div>
            </GcdsGridCol>
          </GcdsGrid>
        </GcdsFieldset>
        
        {/* Additional Information Section */}
        <GcdsFieldset fieldsetId="app-additional-info" legend="Additional Information" style={{ marginBottom: '2rem' }}>
          <GcdsGrid tag="div">
            <GcdsGridCol>
              <div style={{ marginBottom: '1.5rem' }}>
                <GcdsTextarea
                  textareaId="app-comments"
                  label="Additional comments"
                  name="app-comments"
                  rows={5}
                />
              </div>
            </GcdsGridCol>
          </GcdsGrid>
        </GcdsFieldset>
        
        {/* Form actions */}
        <GcdsGrid tag="div">
          <GcdsGridCol>
            <div style={{ marginTop: '2rem' }}>
              <GcdsButton type="submit">Submit Application</GcdsButton>
              <GcdsButton type="reset" style={{ marginLeft: '1rem' }}>Reset Form</GcdsButton>
            </div>
          </GcdsGridCol>
        </GcdsGrid>
      </form>
    </GcdsContainer>
  ),
}; 