import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  GcdsButton,
  GcdsContainer,
  GcdsHeading,
  GcdsInput,
  GcdsLink,
  GcdsText,
  GcdsHeader,
  GcdsFooter,
  GcdsFieldset,
  GcdsGrid,
  GcdsGridCol
} from '@cdssnc/gcds-components-react';

/**
 * Two-Factor Authentication Page
 * 
 * Allows users to verify their identity using a verification code
 * sent to their registered device.
 */
const TwoFactorAuthPage = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState<string | undefined>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(0);
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(undefined);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // For demo purposes, only succeed if code is 123456
      if (verificationCode === '123456') {
        window.location.href = '/dashboard';
      } else {
        setError('Invalid verification code. Please try again.');
      }
    }, 1000);
  };
  
  // Handle resend code
  const handleResend = () => {
    setResendCountdown(60);
    
    // Simulate sending a new code
    setTimeout(() => {
      // Code sent successfully
    }, 1000);
  };
  
  // Handle countdown timer
  useEffect(() => {
    if (resendCountdown > 0) {
      const timer = setTimeout(() => {
        setResendCountdown(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCountdown]);
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header component */}
      <GcdsHeader 
        lang="en" 
        title="Service Name" 
        langHref="#"
        skipToHref="#main-content"
      />
      
      {/* Main content */}
      <main id="main-content" className="flex-grow flex items-center justify-center py-12">
        <GcdsContainer centered size="md">
          <div className="bg-white p-8 rounded-md shadow-md">
            {/* Page title */}
            <GcdsHeading tag="h1" className="mb-4">Two-Factor Authentication</GcdsHeading>
            
            {/* Instruction text */}
            <GcdsText className="mb-5">
              For security purposes, we need to verify your identity. 
              Please enter the 6-digit verification code sent to your device.
            </GcdsText>
            
            <form onSubmit={handleSubmit}>
              {/* Verification code input */}
              <GcdsFieldset
                fieldsetId="verification-code"
                legend="Verification Code"
                required
                className="mb-5"
                errorMessage={error}
                hint="Enter the 6-digit code sent to your device"
              >
                <GcdsGrid>
                  <GcdsGridCol>
                    <GcdsInput
                      inputId="verification-code-input"
                      label="Verification Code"
                      name="verification-code"
                      type="text"
                      size={20}
                      style={{ width: '100%' }}
                      value={verificationCode}
                      onChange={(e: React.FormEvent<HTMLGcdsInputElement>) => {
                        const target = e.target as HTMLInputElement;
                        setVerificationCode(target.value);
                      }}
                      required
                      errorMessage={error}
                      hideLabel
                    />
                  </GcdsGridCol>
                </GcdsGrid>
              </GcdsFieldset>
              
              {/* Action buttons */}
              <div>
                {/* Primary action button */}
                <div className="mb-6">
                  <GcdsButton 
                    type="submit" 
                    disabled={isSubmitting || verificationCode.length !== 6} 
                    buttonRole="primary"
                    style={{ marginRight: '2rem' }}
                  >
                    {isSubmitting ? 'Verifying...' : 'Verify Identity'}
                  </GcdsButton>
                  
                  <GcdsButton
                    type="button"
                    disabled={resendCountdown > 0}
                    buttonRole="secondary"
                    onClick={handleResend}
                  >
                    {resendCountdown > 0 
                      ? `Resend code (${resendCountdown}s)` 
                      : 'Resend code'}
                  </GcdsButton>
                </div>
                
                {/* Back to login link with more spacing */}
                <div style={{ marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid #eee' }}>
                  <GcdsLink href="/login" className="inline-block">
                    Back to login
                  </GcdsLink>
                </div>
              </div>
            </form>
          </div>
        </GcdsContainer>
      </main>
      
      {/* Footer component - fixed to bottom */}
      <GcdsFooter lang="en" style={{ marginTop: 'auto' }} />
    </div>
  );
};

// Storybook metadata
const meta = {
  title: 'Pages/Authentication/TwoFactorAuth',
  component: TwoFactorAuthPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A two-factor authentication page that allows users to verify their identity using a verification code. This component includes a specialized input for verification codes, error handling, and the ability to resend the code.'
      }
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TwoFactorAuthPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// With error state
export const WithError: Story = {
  render: () => {
    const TwoFactorWithError = () => {
      const [verificationCode, setVerificationCode] = useState('123');
      
      return (
        <div className="min-h-screen flex flex-col">
          <GcdsHeader 
            lang="en" 
            title="Service Name" 
            langHref="#"
            skipToHref="#main-content"
          />
          
          <main id="main-content" className="flex-grow flex items-center justify-center py-12">
            <GcdsContainer centered size="md">
              <div className="bg-white p-8 rounded-md shadow-md">
                <GcdsHeading tag="h1" className="mb-4">Two-Factor Authentication</GcdsHeading>
                
                <GcdsText className="mb-5">
                  We've sent a verification code to your email. Please enter the 6-digit code to continue.
                </GcdsText>
                
                <form onSubmit={(e) => e.preventDefault()}>
                  <GcdsFieldset
                    fieldsetId="verification-code-error"
                    legend="Verification Code"
                    required
                    className="mb-5"
                    errorMessage="Invalid verification code. Please try again."
                    hint="Enter the 6-digit code sent to your device"
                  >
                    <GcdsGrid>
                      <GcdsGridCol>
                        <GcdsInput
                          inputId="verification-code-input-error"
                          label="Verification Code"
                          name="verification-code"
                          type="text"
                          size={20}
                          style={{ width: '100%' }}
                          value={verificationCode}
                          onChange={(e: React.FormEvent<HTMLGcdsInputElement>) => {
                            const target = e.target as HTMLInputElement;
                            setVerificationCode(target.value);
                          }}
                          required
                          errorMessage="Invalid verification code. Please try again."
                          hideLabel
                        />
                      </GcdsGridCol>
                    </GcdsGrid>
                  </GcdsFieldset>
                  
                  {/* Action buttons */}
                  <div>
                    {/* Primary action button */}
                    <div className="mb-6">
                      <GcdsButton 
                        type="submit" 
                        buttonRole="primary"
                        style={{ marginRight: '2rem' }}
                      >
                        Verify Code
                      </GcdsButton>
                      
                      <GcdsButton
                        type="button"
                        buttonRole="secondary"
                        onClick={() => {}}
                      >
                        Resend code
                      </GcdsButton>
                    </div>
                    
                    {/* Back to login link with more spacing */}
                    <div style={{ marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid #eee' }}>
                      <GcdsLink href="/login" className="inline-block">
                        Back to login
                      </GcdsLink>
                    </div>
                  </div>
                </form>
              </div>
            </GcdsContainer>
          </main>
          
          {/* Footer component - fixed to bottom */}
          <GcdsFooter lang="en" style={{ marginTop: 'auto' }} />
        </div>
      );
    };
    
    return <TwoFactorWithError />;
  }
};

// Mobile view
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}; 