// src/components/UpdatePasswordCard.tsx
import React, { useState } from 'react'
import { Logo } from './Logo'
import { Heading } from './Heading'
import { Input } from './Input'
import { Button } from './Button'
import { Alert } from './Alert'
import { Divider } from './Divider'

export interface UpdatePasswordCardProps {
  /** Submit handler for the new password */
  onSubmit?: (password: string) => Promise<void>
  /** Handler for back to sign in button */
  onBackToSignIn?: () => void
  /** Loading state */
  loading?: boolean
  /** Message to display */
  message?: {
    type: 'success' | 'error' | 'info' | 'warning'
    text: string
    dismissible?: boolean
  } | null
  /** Handler for dismissing message */
  onDismissMessage?: () => void
  /** Maximum width of the card */
  maxWidth?: string
  /** Minimum width of the card */
  minWidth?: string
  /** Internal padding variant */
  padding?: 'sm' | 'md' | 'lg'
  /** Shadow intensity */
  shadow?: 'sm' | 'md' | 'lg'
  /** Additional CSS classes */
  className?: string
  /** Custom styles */
  style?: React.CSSProperties
}

export const UpdatePasswordCard: React.FC<UpdatePasswordCardProps> = ({
  onSubmit,
  onBackToSignIn,
  loading = false,
  message = null,
  onDismissMessage,
  maxWidth = '480px',
  minWidth = '400px',
  padding = 'lg',
  shadow = 'md',
  className,
  style
}) => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [touched, setTouched] = useState({
    password: false,
    confirmPassword: false
  })

  // Password validation
  const validatePassword = (pwd: string) => {
    if (!pwd.trim()) return { isValid: false, message: 'Password is required' }
    if (pwd.length < 6) {
      return { isValid: false, message: 'Password must be at least 6 characters' }
    }
    return { isValid: true, message: '' }
  }

  // Confirm password validation
  const validateConfirmPassword = (confirmPwd: string) => {
    if (!confirmPwd.trim()) return { isValid: false, message: 'Please confirm your password' }
    if (confirmPwd !== password) {
      return { isValid: false, message: 'Passwords do not match' }
    }
    return { isValid: true, message: '' }
  }

  const passwordValidation = validatePassword(password)
  const confirmPasswordValidation = validateConfirmPassword(confirmPassword)
  
  const showPasswordError = touched.password && !passwordValidation.isValid
  const showConfirmPasswordError = touched.confirmPassword && !confirmPasswordValidation.isValid
  
  const isFormValid = passwordValidation.isValid && confirmPasswordValidation.isValid

  // Padding variants using design tokens
  const paddingVariants = {
    sm: 'var(--spacing-6)',
    md: 'var(--spacing-8)',
    lg: 'var(--spacing-10)'
  }

  // Shadow variants using design tokens
  const shadowVariants = {
    sm: 'var(--shadow-card)',
    md: 'var(--shadow-card-hover)',
    lg: '0 8px 32px rgba(0, 0, 0, 0.12)'
  }

  // Card styles using design tokens
  const cardStyles: React.CSSProperties = {
    backgroundColor: 'var(--color-white)',
    borderRadius: 'var(--border-radius-xl)',
    border: `var(--border-width-thin) solid var(--color-border)`,
    boxShadow: shadowVariants[shadow],
    padding: paddingVariants[padding],
    width: '100%',
    maxWidth: maxWidth,
    minWidth: minWidth,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-6)',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-family-primary)',
    ...style
  }

  // Header styles using design tokens
  const headerStyles: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: 'var(--spacing-2)'
  }

  // Logo container styles using design tokens
  const logoContainerStyles: React.CSSProperties = {
    margin: '0 auto var(--spacing-4)',
    display: 'flex',
    justifyContent: 'center'
  }

  // Description styles using design tokens
  const descriptionStyles: React.CSSProperties = {
    fontSize: 'var(--font-size-base)',
    fontFamily: 'var(--font-family-primary)',
    color: 'var(--color-gray-600)',
    lineHeight: 'var(--line-height-normal)',
    margin: '0 0 var(--spacing-2) 0'
  }

  // Form styles using design tokens
  const formStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-5)'
  }

  // Back to sign in section styles using design tokens
  const backSectionStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-4)',
    marginTop: 'var(--spacing-2)'
  }

  // Back button styles using design tokens
  const backButtonStyles: React.CSSProperties = {
    background: 'none',
    border: 'none',
    fontSize: 'var(--font-size-base)',
    color: 'var(--color-primary)',
    cursor: 'pointer',
    fontFamily: 'var(--font-family-primary)',
    fontWeight: 'var(--font-weight-medium)',
    textDecoration: 'none',
    padding: 'var(--spacing-2) 0',
    borderRadius: 'var(--border-radius-base)',
    transition: 'var(--transition-base)',
    outline: 'none'
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({ password: true, confirmPassword: true })

    if (!isFormValid || loading) {
      return
    }

    if (onSubmit) {
      try {
        await onSubmit(password.trim())
      } catch (error) {
        console.error('Update password submission error:', error)
      }
    }
  }

  // Handle password input change
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  // Handle confirm password input change
  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value)
  }

  // Handle back to sign in
  const handleBackToSignIn = () => {
    if (onBackToSignIn) {
      onBackToSignIn()
    }
  }

  // Handle back button hover
  const handleBackButtonMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.textDecoration = 'underline'
    e.currentTarget.style.color = 'var(--color-primary-hover)'
  }

  const handleBackButtonMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.textDecoration = 'none'
    e.currentTarget.style.color = 'var(--color-primary)'
  }

  const handleBackButtonFocus = (e: React.FocusEvent<HTMLButtonElement>) => {
    e.currentTarget.style.outline = `2px solid var(--color-primary-light)`
    e.currentTarget.style.outlineOffset = '2px'
  }

  const handleBackButtonBlur = (e: React.FocusEvent<HTMLButtonElement>) => {
    e.currentTarget.style.outline = 'none'
  }

  return (
    <div style={cardStyles} className={className}>
      {/* Header */}
      <div style={headerStyles}>
        <div style={logoContainerStyles}>
          <Logo size="lg" />
        </div>
        <Heading level={1} align="center" color="primary">
          Set New Password
        </Heading>
        <p style={descriptionStyles}>
          Enter your new password below
        </p>
      </div>

      {/* Alert message */}
      {message && (
        <Alert
          type={message.type}
          size="md"
          dismissible={message.dismissible === true && !!onDismissMessage}
          onClose={message.dismissible === true ? onDismissMessage : undefined}
        >
          {message.text}
        </Alert>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} style={formStyles}>
        <Input
          label="New Password"
          type="password"
          placeholder="Enter new password"
          showTrailingIcon={true}
          error={showPasswordError}
          errorMessage={passwordValidation.message}
          showHintText={!showPasswordError}
          hintText="Password must be at least 6 characters"
          value={password}
          onChange={handlePasswordChange}
          onBlur={() => setTouched(prev => ({ ...prev, password: true }))}
          required={true}
          disabled={loading}
          name="password"
          id="new-password"
          autoComplete="new-password"
        />

        <Input
          label="Confirm New Password"
          type="password"
          placeholder="Confirm new password"
          showTrailingIcon={true}
          error={showConfirmPasswordError}
          errorMessage={confirmPasswordValidation.message}
          showHintText={false}
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          onBlur={() => setTouched(prev => ({ ...prev, confirmPassword: true }))}
          required={true}
          disabled={loading}
          name="confirmPassword"
          id="confirm-password"
          autoComplete="new-password"
        />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={!isFormValid || loading}
          style={{ width: '100%' }}
        >
          {loading ? 'Updating password...' : 'Update Password'}
        </Button>
      </form>

      {/* Back to sign in */}
      <div style={backSectionStyles}>
        <Divider text="OR" color="muted" spacing="sm" />
        
        <div style={{ textAlign: 'center' }}>
          <button
            type="button"
            onClick={handleBackToSignIn}
            style={backButtonStyles}
            onMouseEnter={handleBackButtonMouseEnter}
            onMouseLeave={handleBackButtonMouseLeave}
            onFocus={handleBackButtonFocus}
            onBlur={handleBackButtonBlur}
            disabled={loading}
            aria-label="Go back to sign in page"
          >
            ← Back to Sign In
          </button>
        </div>
      </div>
    </div>
  )
}