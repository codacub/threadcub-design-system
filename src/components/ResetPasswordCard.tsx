// src/components/ResetPasswordCard.tsx
import React, { useState } from 'react'
import { Logo } from './Logo'
import { Heading } from './Heading'
import { Input } from './Input'
import { Button } from './Button'
import { Alert } from './Alert'

// ResetPasswordCard component interface
export interface ResetPasswordCardProps {
  onSubmit?: (email: string) => Promise<void>
  onBackToSignIn?: () => void
  loading?: boolean
  /**
   * Message to display above the form.
   * `dismissible` controls whether a close button appears (requires onDismissMessage to work).
   */
  message?: {
    type: 'success' | 'error' | 'info' | 'warning'
    text: string
    dismissible?: boolean
  } | null
  /** Callback when message is dismissed (only used if message.dismissible is true). */
  onDismissMessage?: () => void

  maxWidth?: string
  padding?: 'sm' | 'md' | 'lg'
  shadow?: 'sm' | 'md' | 'lg'
}

// ResetPasswordCard Component
export const ResetPasswordCard: React.FC<ResetPasswordCardProps> = ({
  onSubmit,
  onBackToSignIn,
  loading = false,
  message = null,
  onDismissMessage,
  maxWidth = '480px',
  padding = 'lg',
  shadow = 'md'
}) => {
  const [email, setEmail] = useState('')
  const [touched, setTouched] = useState(false)

  // Email validation
  const validateEmail = (email: string) => {
    if (!email) return { isValid: false, message: 'Email is required' }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return { isValid: false, message: 'Please enter a valid email address' }
    }
    return { isValid: true, message: '' }
  }

  const emailValidation = validateEmail(email)
  const showEmailError = touched && !emailValidation.isValid
  const isFormValid = emailValidation.isValid

  // Padding variants
  const paddingVariants = {
    sm: 'var(--spacing-6)',
    md: 'var(--spacing-8)',
    lg: 'var(--spacing-10)'
  }

  // Shadow variants
  const shadowVariants = {
    sm: 'var(--shadow-card)',
    md: '0 4px 16px rgba(0, 0, 0, 0.1)',
    lg: '0 8px 32px rgba(0, 0, 0, 0.12)'
  }

  const cardStyles: React.CSSProperties = {
    backgroundColor: 'var(--color-white)',
    borderRadius: 'var(--border-radius-xl)',
    boxShadow: shadowVariants[shadow],
    padding: paddingVariants[padding],
    width: '100%',
    maxWidth: maxWidth,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-6)',
    boxSizing: 'border-box'
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Mark field as touched on submit
    setTouched(true)

    // Validate before submitting
    if (!isFormValid) {
      return
    }

    if (onSubmit) {
      await onSubmit(email)
    }
  }

  // Render
  return (
    <div style={cardStyles}>
      {/* Header */}
      <div style={{ textAlign: 'center' }}>
        <div style={{
          margin: '0 auto var(--spacing-4)',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Logo size="xl" />
        </div>
        <Heading level={1} align="center" margin="sm">
          Reset Password
        </Heading>
        <p style={{
          fontSize: 'var(--font-size-base)',
          fontFamily: 'var(--font-family-primary)',
          color: 'var(--color-gray-600)',
          margin: '0 0 var(--spacing-8) 0',
          lineHeight: 'var(--line-height-normal)'
        }}>
          Enter your email to receive password reset instructions
        </p>
      </div>



      {/* Form */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
        <Input
          label="Email address"
          type="email"
          placeholder="your@email.com"
          showTrailingIcon={true}
          error={showEmailError}
          errorMessage={emailValidation.message}
          showHintText={showEmailError}
          hintText={emailValidation.message}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched(true)}
        />

        {/* Submit button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={!isFormValid || loading}
          style={{ width: '100%' }}
        >
          {loading ? 'Sending...' : 'Send Reset Email'}
        </Button>
      </form>

      {/* Back to sign in */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
        <div style={{
          textAlign: 'center',
          fontSize: 'var(--font-size-sm)',
          color: 'var(--color-gray-500)',
          fontFamily: 'var(--font-family-primary)'
        }}>
          or
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <button
            type="button"
            onClick={onBackToSignIn}
            style={{
              background: 'none',
              border: 'none',
              fontSize: 'var(--font-size-base)',
              color: 'var(--color-primary)',
              cursor: 'pointer',
              fontFamily: 'var(--font-family-primary)',
              fontWeight: 'var(--font-weight-medium)',
              textDecoration: 'none',
              padding: 0,
              transition: 'text-decoration 0.2s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
          >
            ← Back to Sign In
          </button>
        </div>
      </div>
    </div>
  )
}