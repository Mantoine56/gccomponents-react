import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  GcdsButton,
  GcdsCheckbox,
  GcdsContainer,
  GcdsErrorMessage,
  GcdsInput,
  GcdsLink,
  GcdsHeading,
  GcdsText,
  GcdsHeader,
  GcdsFooter
} from '@cdssnc/gcds-components-react';

// Component for the Login Page that can be used in actual applications
const LoginPage = () => {
  // State for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simple validation
    if (!email || !password) {
      setHasError(true);
      setIsSubmitting(false);
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      // For demo purposes, show error for specific test credentials
      if (email === 'test@example.com' && password === 'wrongpassword') {
        setHasError(true);
      } else {
        // Reset form on success
        setHasError(false);
        alert('Login successful!');
      }
      setIsSubmitting(false);
    }, 1000);
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
            <GcdsHeading tag="h1">Sign in</GcdsHeading>
            <GcdsText>Access your Government of Canada account</GcdsText>
            
            {hasError && (
              <GcdsErrorMessage messageId="login-error">
                Invalid credentials. Please check your email and password and try again.
              </GcdsErrorMessage>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <GcdsInput
                  inputId="email"
                  name="email"
                  label="Email address"
                  type="email"
                  required
                  value={email}
                  onGcdsChange={(e) => setEmail(e.target.value || '')}
                  errorMessage={hasError ? "Invalid credentials" : ""}
                  aria-describedby={hasError ? "login-error" : undefined}
                />
                
                <GcdsInput
                  inputId="password"
                  name="password"
                  label="Password"
                  type="password"
                  required
                  value={password}
                  onGcdsChange={(e) => setPassword(e.target.value || '')}
                  errorMessage={hasError ? "Invalid credentials" : ""}
                  aria-describedby={hasError ? "login-error" : undefined}
                />
                
                <GcdsCheckbox
                  checkboxId="remember-me"
                  name="remember-me"
                  label="Remember me"
                  checked={rememberMe}
                  onGcdsChange={() => setRememberMe(!rememberMe)}
                />
                
                <div className="mt-6 mb-6">
                  <GcdsButton
                    type="submit"
                    disabled={isSubmitting}
                    style={{ marginRight: '2rem' }}
                  >
                    {isSubmitting ? 'Signing in...' : 'Sign in'}
                  </GcdsButton>
                </div>
                
                <div style={{ marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid #eee' }}>
                  <div className="mb-3">
                    <GcdsLink href="#forgot-password">Forgot password?</GcdsLink>
                  </div>
                  <div>
                    <GcdsText>Don't have an account? <GcdsLink href="#register">Create one</GcdsLink></GcdsText>
                  </div>
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
  title: 'Pages/Authentication/Login',
  component: LoginPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A login page that adheres to Government of Canada design standards, featuring email and password fields with validation, error handling, and "Remember me" functionality.'
      }
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary story
export const Default: Story = {
  args: {},
};

// Story with pre-filled error state
export const WithError: Story = {
  render: () => {
    const LoginWithError = () => {
      const [email, setEmail] = useState('test@example.com');
      const [password, setPassword] = useState('wrongpassword');
      const [rememberMe, setRememberMe] = useState(false);
      const [hasError, setHasError] = useState(true);
      const [isSubmitting, setIsSubmitting] = useState(false);
      
      // Same handler as the main component
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
          if (email === 'test@example.com' && password === 'wrongpassword') {
            setHasError(true);
          } else {
            setHasError(false);
            alert('Login successful!');
          }
          setIsSubmitting(false);
        }, 1000);
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
                <GcdsHeading tag="h1">Sign in</GcdsHeading>
                <GcdsText>Access your Government of Canada account</GcdsText>
                
                {hasError && (
                  <GcdsErrorMessage messageId="login-error">
                    Invalid credentials. Please check your email and password and try again.
                  </GcdsErrorMessage>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <GcdsInput
                      inputId="email-error"
                      name="email-error"
                      label="Email address"
                      type="email"
                      required
                      value={email}
                      onGcdsChange={(e) => setEmail(e.target.value || '')}
                      errorMessage={hasError ? "Invalid credentials" : ""}
                      aria-describedby={hasError ? "login-error" : undefined}
                    />
                    
                    <GcdsInput
                      inputId="password-error"
                      name="password-error"
                      label="Password"
                      type="password"
                      required
                      value={password}
                      onGcdsChange={(e) => setPassword(e.target.value || '')}
                      errorMessage={hasError ? "Invalid credentials" : ""}
                      aria-describedby={hasError ? "login-error" : undefined}
                    />
                    
                    <GcdsCheckbox
                      checkboxId="remember-me-error"
                      name="remember-me-error"
                      label="Remember me"
                      checked={rememberMe}
                      onGcdsChange={() => setRememberMe(!rememberMe)}
                    />
                    
                    <div className="mt-6 mb-6">
                      <GcdsButton
                        type="submit"
                        disabled={isSubmitting}
                        style={{ marginRight: '2rem' }}
                      >
                        {isSubmitting ? 'Signing in...' : 'Sign in'}
                      </GcdsButton>
                    </div>
                    
                    <div style={{ marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid #eee' }}>
                      <div className="mb-3">
                        <GcdsLink href="#forgot-password">Forgot password?</GcdsLink>
                      </div>
                      <div>
                        <GcdsText>Don't have an account? <GcdsLink href="#register">Create one</GcdsLink></GcdsText>
                      </div>
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
    
    return <LoginWithError />;
  },
};

// Story showing mobile view
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}; 