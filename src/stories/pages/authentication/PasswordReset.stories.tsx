import React, { useState, useRef, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  GcdsButton,
  GcdsContainer,
  GcdsErrorMessage,
  GcdsHeading,
  GcdsInput,
  GcdsLink,
  GcdsText,
  GcdsHeader,
  GcdsFooter
} from '@cdssnc/gcds-components-react';

// Verification code input component
const VerificationCodeInput = ({ 
  onChange, 
  value = '', 
  hasError 
}: { 
  onChange: (code: string) => void; 
  value: string; 
  hasError?: boolean 
}) => {
  const [digits, setDigits] = useState<string[]>(Array(6).fill(''));
  const inputRefs = useRef<Array<HTMLInputElement | null>>(Array(6).fill(null));
  
  // Initialize refs array
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6);
  }, []);
  
  // Sync digits state with value prop
  useEffect(() => {
    if (value) {
      const valueDigits = value.split('').slice(0, 6);
      const newDigits = [...digits];
      valueDigits.forEach((digit, index) => {
        newDigits[index] = digit;
      });
      setDigits(newDigits);
    }
  }, [value]);
  
  const handleDigitChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    
    // Only accept single digits
    if (val.length > 1) {
      // If pasting multiple digits, distribute them across fields
      if (val.length === 6 && /^\d{6}$/.test(val)) {
        const newDigits = val.split('');
        setDigits(newDigits);
        onChange(newDigits.join(''));
        // Focus the last input
        const lastInput = inputRefs.current[5];
        if (lastInput) {
          lastInput.focus();
        }
        return;
      }
      // Otherwise just take the last character
      const digit = val.slice(-1);
      const newDigits = [...digits];
      newDigits[index] = digit;
      setDigits(newDigits);
      onChange(newDigits.join(''));
      
      // Move focus to next input if available
      if (index < 5) {
        const nextInput = inputRefs.current[index + 1];
        if (nextInput) {
          nextInput.focus();
        }
      }
      return;
    }
    
    // Handle single digit input
    if (/^\d{0,1}$/.test(val)) {
      const newDigits = [...digits];
      newDigits[index] = val;
      setDigits(newDigits);
      onChange(newDigits.join(''));
      
      // Auto-focus next input if a digit was entered
      if (val && index < 5) {
        const nextInput = inputRefs.current[index + 1];
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };
  
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Move focus to previous input on backspace if current input is empty
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      const newDigits = [...digits];
      newDigits[index - 1] = '';
      setDigits(newDigits);
      onChange(newDigits.join(''));
      const prevInput = inputRefs.current[index - 1];
      if (prevInput) {
        prevInput.focus();
      }
    }
    
    // Arrow key navigation
    if (e.key === 'ArrowLeft' && index > 0) {
      const prevInput = inputRefs.current[index - 1];
      if (prevInput) {
        prevInput.focus();
      }
    }
    
    if (e.key === 'ArrowRight' && index < 5) {
      const nextInput = inputRefs.current[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }
  };
  
  return (
    <div>
      <label htmlFor="digit-1" className="block mb-2 font-medium">
        Verification Code
        <span className="text-red-600 ml-1" aria-hidden="true">*</span>
      </label>
      <div className="flex space-x-2">
        {Array(6).fill(null).map((_, index) => (
          <input
            key={index}
            ref={(el) => { 
              inputRefs.current[index] = el; 
            }}
            id={`digit-${index + 1}`}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            className={`w-12 h-12 text-center text-lg font-bold border ${
              hasError ? 'border-red-500' : 'border-gray-300'
            } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
            value={digits[index]}
            onChange={(e) => handleDigitChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            autoComplete={index === 0 ? 'one-time-code' : 'off'}
            aria-label={`Digit ${index + 1}`}
            required
          />
        ))}
      </div>
      <div className="mt-1 text-sm text-gray-500">
        Enter the 6-digit code sent to your device
      </div>
    </div>
  );
};

// Email submission form component
const EmailSubmissionForm = ({ 
  onSubmit, 
  isSubmitting, 
  error 
}: { 
  onSubmit: (email: string) => void; 
  isSubmitting: boolean; 
  error?: string;
}) => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
  };
  
  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-6">
        <GcdsText>
          Enter your email address below, and we'll send you instructions to reset your password.
        </GcdsText>
      </div>
      
      <div className="mb-4">
        <GcdsInput
          inputId="email"
          type="email"
          name="email"
          label="Email address"
          required
          hint="The email you used to register your account"
          value={email}
          onGcdsChange={(e) => {
            if (e.target && typeof e.target.value === 'string') {
              setEmail(e.target.value);
            }
          }}
          aria-describedby={error ? "email-error" : undefined}
        />
        {error && <GcdsErrorMessage messageId="email-error">{error}</GcdsErrorMessage>}
      </div>
      
      <div className="mb-6">
        <GcdsButton 
          type="submit" 
          disabled={isSubmitting} 
          style={{ marginRight: '2rem' }}
        >
          {isSubmitting ? 'Sending...' : 'Send reset instructions'}
        </GcdsButton>
      </div>
      
      <div style={{ marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid #eee' }}>
        <GcdsLink href="/login">Return to login</GcdsLink>
      </div>
    </form>
  );
};

// Verification code form component
const VerificationCodeForm = ({ 
  onSubmit, 
  onBack, 
  isSubmitting, 
  error, 
  email 
}: { 
  onSubmit: (code: string) => void; 
  onBack: () => void; 
  isSubmitting: boolean; 
  error?: string;
  email: string;
}) => {
  const [code, setCode] = useState('');
  const [resendCountdown, setResendCountdown] = useState(0);
  
  // Handle countdown
  useEffect(() => {
    if (resendCountdown > 0) {
      const timer = setTimeout(() => {
        setResendCountdown(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCountdown]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(code);
  };
  
  const handleResend = () => {
    // Start countdown
    setResendCountdown(60);
  };
  
  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-6">
        <GcdsText>
          We've sent a verification code to <strong>{email}</strong>. 
          Please enter the code below to continue.
        </GcdsText>
      </div>
      
      <div className="mb-4">
        <VerificationCodeInput
          onChange={setCode}
          value={code}
          hasError={!!error}
        />
        {error && <GcdsErrorMessage messageId="code-error">{error}</GcdsErrorMessage>}
      </div>
      
      <div className="mb-6">
        <GcdsButton 
          type="submit" 
          disabled={isSubmitting} 
          style={{ marginRight: '2rem' }}
        >
          {isSubmitting ? 'Verifying...' : 'Verify code'}
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
      
      <div style={{ marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid #eee' }}>
        <GcdsButton
          type="button"
          buttonRole="secondary"
          className="text-link bg-transparent border-0"
          onClick={onBack}
        >
          Back to email
        </GcdsButton>
      </div>
    </form>
  );
};

// New password form component
const NewPasswordForm = ({ 
  onSubmit, 
  onBack, 
  isSubmitting, 
  error 
}: { 
  onSubmit: (password: string, confirmPassword: string) => void; 
  onBack: () => void; 
  isSubmitting: boolean; 
  error?: string;
}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(password, confirmPassword);
  };
  
  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-6">
        <GcdsText>
          Create a new password for your account.
        </GcdsText>
      </div>
      
      <div className="mb-4">
        <GcdsInput
          inputId="password"
          type="password"
          name="password"
          label="New password"
          hint="At least 8 characters"
          required
          value={password}
          onGcdsChange={(e) => {
            if (e.target && typeof e.target.value === 'string') {
              setPassword(e.target.value);
            }
          }}
        />
      </div>
      
      <div className="mb-4">
        <GcdsInput
          inputId="confirmPassword"
          type="password"
          name="confirmPassword"
          label="Confirm new password"
          required
          value={confirmPassword}
          onGcdsChange={(e) => {
            if (e.target && typeof e.target.value === 'string') {
              setConfirmPassword(e.target.value);
            }
          }}
          aria-describedby={error ? "password-error" : undefined}
        />
        {error && <GcdsErrorMessage messageId="password-error">{error}</GcdsErrorMessage>}
      </div>
      
      <div className="mb-6">
        <GcdsButton 
          type="submit" 
          disabled={isSubmitting} 
          style={{ marginRight: '2rem' }}
        >
          {isSubmitting ? 'Setting password...' : 'Set new password'}
        </GcdsButton>
      </div>
      
      <div style={{ marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid #eee' }}>
        <GcdsButton
          type="button"
          buttonRole="secondary"
          className="text-link bg-transparent border-0"
          onClick={onBack}
        >
          Back to verification
        </GcdsButton>
      </div>
    </form>
  );
};

// Success confirmation component
const SuccessConfirmation = () => {
  return (
    <div className="mt-4 text-center">
      <div className="mb-6 text-green-600">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-16 w-16 mx-auto" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 13l4 4L19 7" 
          />
        </svg>
      </div>
      
      <GcdsHeading tag="h2">Password reset successful!</GcdsHeading>
      
      <div className="mb-6">
        <GcdsText>
          Your password has been successfully reset. You can now log in with your new password.
        </GcdsText>
      </div>
      
      <GcdsButton className="w-full" href="/login">
        Return to login
      </GcdsButton>
    </div>
  );
};

// Main Password Reset component that manages all steps
const PasswordResetPage = () => {
  // Track the current step
  const [step, setStep] = useState(1);
  
  // Form state
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | undefined>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Handle email submission
  const handleEmailSubmit = (email: string) => {
    setIsSubmitting(true);
    setError(undefined);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail(email);
      setStep(2);
    }, 1000);
  };
  
  // Handle verification code submission
  const handleCodeSubmit = (code: string) => {
    setIsSubmitting(true);
    setError(undefined);
    
    // Simulate API call
    setTimeout(() => {
      // For demo purposes, only succeed if code is 123456
      if (code === '123456') {
        setIsSubmitting(false);
        setStep(3);
      } else {
        setIsSubmitting(false);
        setError('Invalid verification code. Please try again.');
      }
    }, 1000);
  };
  
  // Handle new password submission
  const handlePasswordSubmit = (password: string, confirmPassword: string) => {
    setIsSubmitting(true);
    setError(undefined);
    
    // Validate passwords
    if (password.length < 8) {
      setIsSubmitting(false);
      setError('Password must be at least 8 characters long.');
      return;
    }
    
    if (password !== confirmPassword) {
      setIsSubmitting(false);
      setError('Passwords do not match.');
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(4);
    }, 1000);
  };
  
  // Handle going back to previous step
  const handleBack = () => {
    setStep(step - 1);
    setError(undefined);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <GcdsHeader 
        lang="en" 
        title="Service Name" 
        langHref="#"
        skipToHref="#main-content"
      />
      
      <main id="main-content" className="flex-grow">
        <GcdsContainer centered size="md" className="py-12">
          <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
            <GcdsHeading tag="h1">Reset your password</GcdsHeading>
            
            {/* Show different components based on the current step */}
            {step === 1 && (
              <EmailSubmissionForm
                onSubmit={handleEmailSubmit}
                isSubmitting={isSubmitting}
                error={error}
              />
            )}
            
            {step === 2 && (
              <VerificationCodeForm
                onSubmit={handleCodeSubmit}
                onBack={handleBack}
                isSubmitting={isSubmitting}
                error={error}
                email={email}
              />
            )}
            
            {step === 3 && (
              <NewPasswordForm
                onSubmit={handlePasswordSubmit}
                onBack={handleBack}
                isSubmitting={isSubmitting}
                error={error}
              />
            )}
            
            {step === 4 && <SuccessConfirmation />}
          </div>
        </GcdsContainer>
      </main>
      
      <GcdsFooter lang="en" />
    </div>
  );
};

// Storybook metadata
const meta = {
  title: 'Pages/Authentication/PasswordReset',
  component: PasswordResetPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A multi-step password reset flow that adheres to Government of Canada design standards. Features include email submission, verification code entry, new password creation, and success confirmation.'
      }
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PasswordResetPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary story for the full flow
export const Default: Story = {
  args: {},
};

// Individual steps stories - these are simplified to only show the step without header/footer
export const EmailSubmission: Story = {
  render: () => (
    <GcdsContainer centered size="md" className="py-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        <GcdsHeading tag="h1">Reset your password</GcdsHeading>
        <EmailSubmissionForm
          onSubmit={() => {}}
          isSubmitting={false}
        />
      </div>
    </GcdsContainer>
  ),
};

export const VerificationCode: Story = {
  render: () => (
    <GcdsContainer centered size="md" className="py-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        <GcdsHeading tag="h1">Reset your password</GcdsHeading>
        <VerificationCodeForm
          onSubmit={() => {}}
          onBack={() => {}}
          isSubmitting={false}
          email="example@email.com"
        />
      </div>
    </GcdsContainer>
  ),
};

export const NewPassword: Story = {
  render: () => (
    <GcdsContainer centered size="md" className="py-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        <GcdsHeading tag="h1">Reset your password</GcdsHeading>
        <NewPasswordForm
          onSubmit={() => {}}
          onBack={() => {}}
          isSubmitting={false}
        />
      </div>
    </GcdsContainer>
  ),
};

export const Success: Story = {
  render: () => (
    <GcdsContainer centered size="md" className="py-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        <GcdsHeading tag="h1">Reset your password</GcdsHeading>
        <SuccessConfirmation />
      </div>
    </GcdsContainer>
  ),
}; 