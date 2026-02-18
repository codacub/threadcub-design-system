// src/components/ResetPasswordCard.tsx
import React, { useState } from 'react'
import { Logo } from './Logo'
import { Heading } from './Heading'
import { Input } from './Input'
import { Button } from './Button'
import { Alert } from './Alert'
import { Divider } from './Divider'

export interface ResetPasswordCardProps {
  /** Submit handler for the email */
  onSubmit?: (email: string) => Promise<void>
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

// Moved outside component to fix TypeScript index signature errors
const paddingVariants: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'var(--spacing-6)', // 24px
  md: 'var(--spacing-8)', // 32px
  lg: 'var(--spacing-10)' // 40px
}

const shadowVariants: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'var(--shadow-card)', // Light shadow
  md: 'var(--shadow-card-hover)', // Medium shadow
  lg: '0 8px 32px rgba(0, 0, 0, 0.12)' // Heavy shadow
}

// Moved outside component so it can be called fresh inside handleSubmit
const validateEmail = (email: string) => {
  if (!email.trim()) return { isValid: false, message: 'Email is required' }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email.trim())) {
    return { isValid: false, message: 'Please enter a valid email address' }
  }
  return { isValid: true, message: '' }
}

export const ResetPasswordCard: React.FC<ResetPasswordCardProps> = ({
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
  const [email, setEmail] = useState('')
  const [touched, setTouched] = useState(false)

  const emailValidation = validateEmail(email)
  const showEmailError = touched && !emailValidation.isValid
  const isFormValid = emailValidation.isValid && email.trim().length > 0

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

  const headerStyles: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: 'var(--spacing-2)'
  }

  const logoContainerStyles: React.CSSProperties = {
    margin: '0 auto var(--spacing-4)',
    display: 'flex',
    justifyContent: 'center'
  }

  const descriptionStyles: React.CSSProperties = {
    fontSize: 'var(--font-size-base)',
    fontFamily: 'var(--font-family-primary)',
    color: 'var(--color-gray-600)',
    lineHeight: 'var(--line-height-normal)',
    margin: '0 0 var(--spacing-2) 0'
  }

  const formStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-5)'
  }

  const backSectionStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-4)',
    marginTop: 'var(--spacing-2)'
  }

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

  // Handle form submission — validates fresh to avoid stale closure bug
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setTouched(true)

    const validation = validateEmail(email)
    if (!validation.isValid || loading) {
      return
    }

    if (onSubmit) {
      try {
        await onSubmit(email.trim())
      } catch (error) {
        console.error('Reset password submission error:', error)
      }
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if (touched && emailValidation.isValid) {
      setTouched(false)
    }
  }

  const handleBackToSignIn = () => {
    if (onBackToSignIn) {
      onBackToSignIn()
    }
  }

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
          Reset Password
        </Heading>
        <p style={descriptionStyles}>
          Enter your email address and we'll send you instructions to reset your password.
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
          label="Email address"
          type="email"
          placeholder="Enter your email address"
          showTrailingIcon={true}
          error={showEmailError}
          errorMessage={emailValidation.message}
          showHintText={!showEmailError}
          hintText="We'll send reset instructions to this email"
          value={email}
          onChange={handleEmailChange}
          onBlur={() => setTouched(true)}
          required={true}
          disabled={loading}
          name="email"
          id="reset-email"
        />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={!isFormValid || loading}
          style={{ width: '100%' }}
        >
          {loading ? 'Sending instructions...' : 'Send reset instructions'}
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