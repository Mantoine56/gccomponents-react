import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { 
  GcdsContainer, 
  GcdsGrid, 
  GcdsGridCol,
  GcdsHeading,
  GcdsText,
  GcdsLink,
  GcdsButton
} from '@cdssnc/gcds-components-react';

/**
 * LayoutSection Component
 * 
 * This is a custom layout pattern (not an official GCDS component) that demonstrates 
 * how to organize page sections in a consistent way using existing GCDS components.
 * 
 * The LayoutSection pattern uses GcdsContainer, GcdsGrid, and GcdsGridCol components
 * to create responsive page sections that work well on different screen sizes.
 */
const meta: Meta = {
  title: 'GCDS Patterns/LayoutSection',
  parameters: {
    docs: {
      description: {
        component: 'A pattern for organizing page sections in a consistent way using existing GCDS components.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

/**
 * Basic section layout with a heading and text
 */
export const BasicSection: Story = {
  render: () => (
    <section style={{ padding: '3rem 0', borderBottom: '1px solid #e1e4e7' }}>
      <GcdsContainer>
        <GcdsHeading tag="h2">Section Title</GcdsHeading>
        <GcdsText>
          This is a basic section with a heading and text content. Sections help organize content 
          on a page and provide a consistent visual structure. Each section typically includes a 
          heading and related content.
        </GcdsText>
      </GcdsContainer>
    </section>
  ),
};

/**
 * Two-column section layout
 */
export const TwoColumnSection: Story = {
  render: () => (
    <section style={{ padding: '3rem 0', borderBottom: '1px solid #e1e4e7' }}>
      <GcdsContainer>
        <GcdsHeading tag="h2">Two-Column Section</GcdsHeading>
        <GcdsGrid tag="div">
          <GcdsGridCol>
            <GcdsText>
              This is the first column of a two-column section. This layout is useful for 
              presenting related content side by side. For example, you might use this layout 
              to show an image alongside descriptive text, or to present two related but 
              distinct pieces of information.
            </GcdsText>
          </GcdsGridCol>
          <GcdsGridCol>
            <GcdsText>
              This is the second column of a two-column section. On smaller screens, these 
              columns will stack vertically to ensure readability. The GcdsGrid and GcdsGridCol 
              components handle the responsive behavior automatically.
            </GcdsText>
          </GcdsGridCol>
        </GcdsGrid>
      </GcdsContainer>
    </section>
  ),
};

/**
 * Hero section layout
 */
export const HeroSection: Story = {
  render: () => (
    <section style={{ 
      padding: '4rem 0', 
      backgroundColor: '#26374a', 
      color: 'white',
      marginBottom: '2rem'
    }}>
      <GcdsContainer>
        <GcdsHeading tag="h1" style={{ color: 'white' }}>Hero Section Title</GcdsHeading>
        <GcdsText style={{ color: 'white', fontSize: '1.25rem', maxWidth: '800px', marginBottom: '2rem' }}>
          A hero section is typically used at the top of a page to introduce the main topic or purpose. 
          It often includes a prominent heading, supporting text, and a call-to-action button.
        </GcdsText>
        <GcdsButton>Get Started</GcdsButton>
      </GcdsContainer>
    </section>
  ),
};

/**
 * Feature section with cards
 */
export const FeatureSection: Story = {
  render: () => (
    <section style={{ padding: '3rem 0', borderBottom: '1px solid #e1e4e7' }}>
      <GcdsContainer>
        <GcdsHeading tag="h2" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Features
        </GcdsHeading>
        <GcdsGrid tag="div">
          <GcdsGridCol>
            <div style={{ 
              padding: '1.5rem', 
              border: '1px solid #e1e4e7', 
              borderRadius: '4px',
              height: '100%'
            }}>
              <GcdsHeading tag="h3">Feature 1</GcdsHeading>
              <GcdsText>
                Description of the first feature. This card layout is useful for presenting 
                multiple related items in a visually consistent way.
              </GcdsText>
            </div>
          </GcdsGridCol>
          <GcdsGridCol>
            <div style={{ 
              padding: '1.5rem', 
              border: '1px solid #e1e4e7', 
              borderRadius: '4px',
              height: '100%'
            }}>
              <GcdsHeading tag="h3">Feature 2</GcdsHeading>
              <GcdsText>
                Description of the second feature. Each card can contain various elements 
                such as headings, text, images, and buttons.
              </GcdsText>
            </div>
          </GcdsGridCol>
          <GcdsGridCol>
            <div style={{ 
              padding: '1.5rem', 
              border: '1px solid #e1e4e7', 
              borderRadius: '4px',
              height: '100%'
            }}>
              <GcdsHeading tag="h3">Feature 3</GcdsHeading>
              <GcdsText>
                Description of the third feature. Cards can be used to organize content 
                into discrete, scannable units.
              </GcdsText>
            </div>
          </GcdsGridCol>
        </GcdsGrid>
      </GcdsContainer>
    </section>
  ),
};

/**
 * Call-to-action section
 */
export const CallToActionSection: Story = {
  render: () => (
    <section style={{ 
      padding: '3rem 0', 
      backgroundColor: '#f5f5f5',
      textAlign: 'center',
      marginTop: '2rem'
    }}>
      <GcdsContainer>
        <GcdsHeading tag="h2">Ready to Get Started?</GcdsHeading>
        <GcdsText style={{ maxWidth: '700px', margin: '0 auto 2rem' }}>
          A call-to-action section encourages users to take a specific action. It typically 
          includes a compelling heading, supporting text, and a prominent button or link.
        </GcdsText>
        <GcdsButton>Sign Up Now</GcdsButton>
        <GcdsLink href="#" style={{ display: 'block', marginTop: '1rem' }}>
          Learn more about our services
        </GcdsLink>
      </GcdsContainer>
    </section>
  ),
};

/**
 * Full page layout with multiple sections
 */
export const FullPageLayout: Story = {
  render: () => (
    <div>
      {/* Hero Section */}
      <section style={{ 
        padding: '4rem 0', 
        backgroundColor: '#26374a', 
        color: 'white',
        marginBottom: '2rem'
      }}>
        <GcdsContainer>
          <GcdsHeading tag="h1" style={{ color: 'white' }}>Welcome to Our Service</GcdsHeading>
          <GcdsText style={{ color: 'white', fontSize: '1.25rem', maxWidth: '800px', marginBottom: '2rem' }}>
            This is an example of a full page layout with multiple sections. Each section serves a 
            specific purpose and together they create a cohesive user experience.
          </GcdsText>
          <GcdsButton>Get Started</GcdsButton>
        </GcdsContainer>
      </section>

      {/* Introduction Section */}
      <section style={{ padding: '3rem 0', borderBottom: '1px solid #e1e4e7' }}>
        <GcdsContainer>
          <GcdsHeading tag="h2">About Our Service</GcdsHeading>
          <GcdsText>
            This section provides an introduction to the service or content. It helps users 
            understand what the page is about and what they can expect to find.
          </GcdsText>
        </GcdsContainer>
      </section>

      {/* Features Section */}
      <section style={{ padding: '3rem 0', borderBottom: '1px solid #e1e4e7' }}>
        <GcdsContainer>
          <GcdsHeading tag="h2" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Key Features
          </GcdsHeading>
          <GcdsGrid tag="div">
            <GcdsGridCol>
              <div style={{ 
                padding: '1.5rem', 
                border: '1px solid #e1e4e7', 
                borderRadius: '4px',
                height: '100%'
              }}>
                <GcdsHeading tag="h3">Feature 1</GcdsHeading>
                <GcdsText>
                  Description of the first feature. This card layout is useful for presenting 
                  multiple related items in a visually consistent way.
                </GcdsText>
              </div>
            </GcdsGridCol>
            <GcdsGridCol>
              <div style={{ 
                padding: '1.5rem', 
                border: '1px solid #e1e4e7', 
                borderRadius: '4px',
                height: '100%'
              }}>
                <GcdsHeading tag="h3">Feature 2</GcdsHeading>
                <GcdsText>
                  Description of the second feature. Each card can contain various elements 
                  such as headings, text, images, and buttons.
                </GcdsText>
              </div>
            </GcdsGridCol>
            <GcdsGridCol>
              <div style={{ 
                padding: '1.5rem', 
                border: '1px solid #e1e4e7', 
                borderRadius: '4px',
                height: '100%'
              }}>
                <GcdsHeading tag="h3">Feature 3</GcdsHeading>
                <GcdsText>
                  Description of the third feature. Cards can be used to organize content 
                  into discrete, scannable units.
                </GcdsText>
              </div>
            </GcdsGridCol>
          </GcdsGrid>
        </GcdsContainer>
      </section>

      {/* Two-column Section */}
      <section style={{ padding: '3rem 0', borderBottom: '1px solid #e1e4e7' }}>
        <GcdsContainer>
          <GcdsHeading tag="h2">How It Works</GcdsHeading>
          <GcdsGrid tag="div">
            <GcdsGridCol>
              <GcdsText>
                This section explains how the service works or provides additional information. 
                The two-column layout allows for presenting related content side by side.
              </GcdsText>
            </GcdsGridCol>
            <GcdsGridCol>
              <GcdsText>
                On smaller screens, these columns will stack vertically to ensure readability. 
                The GcdsGrid and GcdsGridCol components handle the responsive behavior automatically.
              </GcdsText>
            </GcdsGridCol>
          </GcdsGrid>
        </GcdsContainer>
      </section>

      {/* Call-to-action Section */}
      <section style={{ 
        padding: '3rem 0', 
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
        marginTop: '2rem'
      }}>
        <GcdsContainer>
          <GcdsHeading tag="h2">Ready to Get Started?</GcdsHeading>
          <GcdsText style={{ maxWidth: '700px', margin: '0 auto 2rem' }}>
            This call-to-action section encourages users to take the next step. It's placed at 
            the end of the page after users have learned about the service.
          </GcdsText>
          <GcdsButton>Sign Up Now</GcdsButton>
          <GcdsLink href="#" style={{ display: 'block', marginTop: '1rem' }}>
            Learn more about our services
          </GcdsLink>
        </GcdsContainer>
      </section>
    </div>
  ),
}; 