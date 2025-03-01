import React, { useState } from 'react';
import { GcdsButton } from '@cdssnc/gcds-components-react';
import './EnhancedButton.css';

/**
 * Props for the EnhancedButton component
 * Extends the native GcdsButton props while adding additional functionality
 */
export interface EnhancedButtonProps {
  /**
   * Text content of the button
   */
  children: React.ReactNode;
  
  /**
   * Button color role from GCDS
   */
  buttonRole?: 'primary' | 'secondary' | 'danger';
  
  /**
   * Optional click handler
   */
  onClick?: (event: React.MouseEvent<HTMLGcdsButtonElement>) => void | Promise<void>;
  
  /**
   * When true, shows a loading spinner and disables the button
   */
  loading?: boolean;
  
  /**
   * Whether the button should have a pulsing animation to attract attention
   */
  pulse?: boolean;
  
  /**
   * Text for the confirmation dialog if enabled
   */
  confirmationText?: string;
  
  /**
   * Additional CSS classes to apply to the button container
   */
  className?: string;
  
  /**
   * Language of the component
   */
  lang?: 'en' | 'fr';
  
  /**
   * Button type attribute
   */
  type?: 'button' | 'submit' | 'reset';
  
  /**
   * Disabled state
   */
  disabled?: boolean;
}

/**
 * EnhancedButton component
 * 
 * Extends the GCDS Button with additional features:
 * - Loading state with spinner
 * - Pulsing animation
 * - Click confirmation dialog
 * 
 * @example
 * ```tsx
 * <EnhancedButton 
 *   buttonRole="primary" 
 *   loading={isSubmitting}
 *   onClick={handleSubmit}
 * >
 *   Submit Form
 * </EnhancedButton>
 * ```
 */
export const EnhancedButton: React.FC<EnhancedButtonProps> = ({
  children,
  buttonRole = 'primary',
  onClick,
  loading = false,
  pulse = false,
  confirmationText,
  className = '',
  lang = 'en',
  type = 'button',
  disabled = false,
  ...rest
}) => {
  // State to track confirmation dialog display
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  // Function to handle click events
  const handleClick = async (e: React.MouseEvent<HTMLGcdsButtonElement>) => {
    // If button is loading or disabled, don't do anything
    if (loading || disabled) {
      return;
    }
    
    // If confirmation is required, show confirmation dialog
    if (confirmationText && !showConfirmation) {
      e.preventDefault();
      setShowConfirmation(true);
      return;
    }
    
    // Reset confirmation state if it was showing
    if (showConfirmation) {
      setShowConfirmation(false);
    }
    
    // Call the provided onClick handler if exists
    if (onClick) {
      await onClick(e);
    }
  };
  
  // Determine CSS classes for the button container
  const containerClasses = [
    'enhanced-button',
    pulse ? 'enhanced-button--pulse' : '',
    loading ? 'enhanced-button--loading' : '',
    className
  ].filter(Boolean).join(' ');
  
  return (
    <div className={containerClasses}>
      <GcdsButton
        buttonRole={buttonRole}
        onClick={handleClick}
        lang={lang}
        type={type}
        disabled={disabled || loading || showConfirmation}
        {...rest}
      >
        {/* If button is in loading state, show spinner and text */}
        {loading ? (
          <span className="enhanced-button__loading-content">
            <span className="enhanced-button__spinner" aria-hidden="true"></span>
            <span className="enhanced-button__text">
              {lang === 'en' ? 'Loading...' : 'Chargement...'}
            </span>
          </span>
        ) : showConfirmation ? (
          // If showing confirmation, display the confirmation text
          <span className="enhanced-button__text">
            {confirmationText || (lang === 'en' ? 'Confirm?' : 'Confirmer?')}
          </span>
        ) : (
          // Otherwise, just show the children
          children
        )}
      </GcdsButton>
    </div>
  );
};

export default EnhancedButton; 