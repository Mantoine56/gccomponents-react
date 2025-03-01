import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  GcdsButton,
  GcdsCheckbox,
  GcdsContainer,
  GcdsInput,
  GcdsLink,
  GcdsHeading,
  GcdsText,
  GcdsHeader,
  GcdsFooter
} from '@cdssnc/gcds-components-react';

// Component for the Signup Page that can be used in actual applications
const SignupPage = () => {
  // State for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate the form
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Email validation
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Password validation
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    // Confirm password validation
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    // Terms validation
    if (!acceptTerms) {
      newErrors.terms = 'You must accept the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (validateForm()) {
      // Simulate API call
      setTimeout(() => {
        alert('Signup successful! Verification email sent.');
        setIsSubmitting(false);
      }, 1500);
    } else {
      setIsSubmitting(false);
    }
  };

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
          <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
            <GcdsHeading tag="h1">Create an account</GcdsHeading>
            <GcdsText>Join the Government of Canada online services</GcdsText>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <GcdsInput
                  inputId="signup-email"
                  name="signup-email"
                  label="Email address"
                  type="email"
                  required
                  value={email}
                  onGcdsChange={(e) => setEmail(e.target.value || '')}
                  errorMessage={errors.email || ''}
                  hint="We'll send a verification link to this address"
                />
                
                <GcdsInput
                  inputId="signup-password"
                  name="signup-password"
                  label="Password"
                  type="password"
                  required
                  value={password}
                  onGcdsChange={(e) => setPassword(e.target.value || '')}
                  errorMessage={errors.password || ''}
                  hint="Must be at least 8 characters"
                />
                
                <GcdsInput
                  inputId="signup-confirm-password"
                  name="signup-confirm-password"
                  label="Confirm password"
                  type="password"
                  required
                  value={confirmPassword}
                  onGcdsChange={(e) => setConfirmPassword(e.target.value || '')}
                  errorMessage={errors.confirmPassword || ''}
                />
                
                <GcdsCheckbox
                  checkboxId="accept-terms"
                  name="accept-terms"
                  label="I accept the terms and conditions"
                  checked={acceptTerms}
                  onGcdsChange={() => setAcceptTerms(!acceptTerms)}
                  errorMessage={errors.terms || ''}
                />
                
                <div className="mt-6 mb-6">
                  <GcdsButton
                    type="submit"
                    disabled={isSubmitting}
                    style={{ marginRight: '2rem' }}
                  >
                    {isSubmitting ? 'Creating account...' : 'Create account'}
                  </GcdsButton>
                </div>
                
                <div style={{ marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid #eee' }}>
                  <GcdsText>Already have an account? <GcdsLink href="#login">Sign in</GcdsLink></GcdsText>
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
  title: 'Pages/Authentication/Signup',
  component: SignupPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A signup page that adheres to Government of Canada design standards, featuring email and password fields with validation and terms acceptance.'
      }
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SignupPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary story
export const Default: Story = {
  args: {},
};

// Story with validation errors
export const WithErrors: Story = {
  render: () => {
    const SignupWithErrors = () => {
      const [email, setEmail] = useState('invalid-email');
      const [password, setPassword] = useState('123');
      const [confirmPassword, setConfirmPassword] = useState('1234');
      const [acceptTerms, setAcceptTerms] = useState(false);
      const [errors, setErrors] = useState<Record<string, string>>({
        email: 'Email is invalid',
        password: 'Password must be at least 8 characters',
        confirmPassword: 'Passwords do not match',
        terms: 'You must accept the terms and conditions'
      });
      const [isSubmitting, setIsSubmitting] = useState(false);

      // Same validation and submission handlers as the main component
      const validateForm = () => {
        const newErrors: Record<string, string> = {};
        
        if (!email) {
          newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          newErrors.email = 'Email is invalid';
        }
        
        if (!password) {
          newErrors.password = 'Password is required';
        } else if (password.length < 8) {
          newErrors.password = 'Password must be at least 8 characters';
        }
        
        if (!confirmPassword) {
          newErrors.confirmPassword = 'Please confirm your password';
        } else if (confirmPassword !== password) {
          newErrors.confirmPassword = 'Passwords do not match';
        }
        
        if (!acceptTerms) {
          newErrors.terms = 'You must accept the terms and conditions';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        if (validateForm()) {
          setTimeout(() => {
            alert('Signup successful! Verification email sent.');
            setIsSubmitting(false);
          }, 1500);
        } else {
          setIsSubmitting(false);
        }
      };

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
              <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
                <GcdsHeading tag="h1">Create an account</GcdsHeading>
                <GcdsText>Join the Government of Canada online services</GcdsText>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <GcdsInput
                      inputId="signup-email-error"
                      name="signup-email-error"
                      label="Email address"
                      type="email"
                      required
                      value={email}
                      onGcdsChange={(e) => setEmail(e.target.value || '')}
                      errorMessage={errors.email || ''}
                      hint="We'll send a verification link to this address"
                    />
                    
                    <GcdsInput
                      inputId="signup-password-error"
                      name="signup-password-error"
                      label="Password"
                      type="password"
                      required
                      value={password}
                      onGcdsChange={(e) => setPassword(e.target.value || '')}
                      errorMessage={errors.password || ''}
                      hint="Must be at least 8 characters"
                    />
                    
                    <GcdsInput
                      inputId="signup-confirm-password-error"
                      name="signup-confirm-password-error"
                      label="Confirm password"
                      type="password"
                      required
                      value={confirmPassword}
                      onGcdsChange={(e) => setConfirmPassword(e.target.value || '')}
                      errorMessage={errors.confirmPassword || ''}
                    />
                    
                    <GcdsCheckbox
                      checkboxId="accept-terms-error"
                      name="accept-terms-error"
                      label="I accept the terms and conditions"
                      checked={acceptTerms}
                      onGcdsChange={() => setAcceptTerms(!acceptTerms)}
                      errorMessage={errors.terms || ''}
                    />
                    
                    <div className="mt-6 mb-6">
                      <GcdsButton
                        type="submit"
                        disabled={isSubmitting}
                        style={{ marginRight: '2rem' }}
                      >
                        {isSubmitting ? 'Creating account...' : 'Create account'}
                      </GcdsButton>
                    </div>
                    
                    <div style={{ marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid #eee' }}>
                      <GcdsText>Already have an account? <GcdsLink href="#login">Sign in</GcdsLink></GcdsText>
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
    
    return <SignupWithErrors />;
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