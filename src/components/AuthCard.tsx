// src/components/AuthCard.tsx
import React, { useState } from 'react'
import { Logo } from './Logo'
import { Heading } from './Heading'
import { Input } from './Input'
import { Button } from './Button'
import { Divider } from './Divider'
import { SocialButton } from './SocialButton'
import { Alert } from './Alert'
import { Checkbox } from './Checkbox'

// AuthCard component interface
export interface AuthCardProps {
  mode?: 'signin' | 'signup'
  onToggleMode?: () => void
  onSubmit?: (data: { email: string; password: string; mode: 'signin' | 'signup' }) => Promise<void>
  onGoogleAuth?: () => void
  onGithubAuth?: () => void
  onForgotPassword?: () => void
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
  /** Show remember me checkbox for sign in */
  showRememberMe?: boolean
  /** Remember me checkbox state */
  rememberMe?: boolean
  /** Callback when remember me state changes */
  onRememberMeChange?: (checked: boolean) => void

  maxWidth?: string
  minWidth?: string
  padding?: 'sm' | 'md' | 'lg'
  shadow?: 'sm' | 'md' | 'lg'
}

// AuthCard Component
export const AuthCard: React.FC<AuthCardProps> = ({
  mode = 'signin',
  onToggleMode,
  onSubmit,
  onGoogleAuth,
  onGithubAuth,
  onForgotPassword,
  loading = false,
  message = null,
  onDismissMessage,
  showRememberMe = false,
  rememberMe = false,
  onRememberMeChange,
  maxWidth = '480px',
  minWidth = '480px',
  padding = 'lg',
  shadow = 'md'
}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [touched, setTouched] = useState({
    email: false,
    password: false
  })

  // Validation functions
  const validateEmail = (email: string) => {
    if (!email) return { isValid: false, message: 'Email is required' }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return { isValid: false, message: 'Please enter a valid email address' }
    }
    return { isValid: true, message: '' }
  }

  const validatePassword = (password: string) => {
    if (!password) return { isValid: false, message: 'Password is required' }
    if (mode === 'signup' && password.length < 8) {
      return { isValid: false, message: 'Password must be at least 8 characters' }
    }
    if (mode === 'signin' && password.length < 1) {
      return { isValid: false, message: 'Password is required' }
    }
    return { isValid: true, message: '' }
  }

  // Get current validation states
  const emailValidation = validateEmail(formData.email)
  const passwordValidation = validatePassword(formData.password)

  // Show errors only if field has been touched and is invalid
  const showEmailError = touched.email && !emailValidation.isValid
  const showPasswordError = touched.password && !passwordValidation.isValid

  // Check if form is valid for button state
  const isFormValid = emailValidation.isValid && passwordValidation.isValid

  // Padding variants using design tokens
  const paddingVariants = {
    sm: 'var(--spacing-6)',
    md: 'var(--spacing-8)',
    lg: 'var(--spacing-10)'
  }

  // Shadow variants using design tokens
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
    minWidth: minWidth,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-6)',
    boxSizing: 'border-box'
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Mark all fields as touched on submit
    setTouched({ email: true, password: true })

    // Validate before submitting
    if (!isFormValid) {
      return
    }

    if (onSubmit) {
      await onSubmit({
        email: formData.email,
        password: formData.password,
        mode
      })
    }
  }

  // Handle toggle mode
  const handleToggleMode = () => {
    // Reset form when switching modes
    setFormData({ email: '', password: '' })
    setTouched({ email: false, password: false })
    if (onToggleMode) {
      onToggleMode()
    }
  }

  // Content based on mode
  const getContent = () => {
    if (mode === 'signup') {
      return {
        title: 'Get started',
        subtitle: 'Create a new account',
        buttonText: loading ? 'Creating account...' : 'Get started',
        toggleText: 'Already have an account? Sign in',
        socialGoogleText: 'Sign up with Google',
        socialGithubText: 'Sign up with GitHub'
      }
    } else {
      return {
        title: 'Welcome back',
        subtitle: 'Sign in',
        buttonText: loading ? 'Signing in...' : 'Sign In',
        toggleText: "Don't have an account? Sign up",
        socialGoogleText: 'Sign in with Google',
        socialGithubText: 'Sign in with GitHub'
      }
    }
  }

  const content = getContent()

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
          {content.title}
        </Heading>
        <p style={{
          fontSize: 'var(--font-size-base)',
          fontFamily: 'var(--font-family-primary)',
          color: 'var(--color-gray-600)',
          margin: '0 0 var(--spacing-8) 0'
        }}>
          {content.subtitle}
        </p>
      </div>

      {/* Global card message (Alert) */}
      {message && (
        <Alert
          type={message.type}
          size="md"
          dismissible={message.dismissible !== false && !!onDismissMessage}
          onClose={message.dismissible !== false ? onDismissMessage : undefined}
        >
          {message.text}
        </Alert>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
        <Input
          label="Email*"
          type="email"
          placeholder="Enter your email"
          showTrailingIcon={true}
          error={showEmailError}
          errorMessage={emailValidation.message}
          showHintText={showEmailError}
          hintText={emailValidation.message}
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          onBlur={() => setTouched(prev => ({ ...prev, email: true }))}
        />

        <div>
          <Input
            label="Password*"
            type="password"
            placeholder="Enter your password"
            showTrailingIcon={true}
            error={showPasswordError}
            errorMessage={passwordValidation.message}
            showHintText={showPasswordError || (mode === 'signup' && !showPasswordError)}
            hintText={showPasswordError ? passwordValidation.message : (mode === 'signup' ? 'Must be at least 8 characters.' : '')}
            value={formData.password}
            onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
            onBlur={() => setTouched(prev => ({ ...prev, password: true }))}
          />

          {/* Checkbox and Forgot Password on same line for sign in */}
          {mode === 'signin' && showRememberMe && (
            <div style={{ 
              marginTop: 'var(--spacing-2)', 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center' 
            }}>
              {/* Left side - Save account checkbox */}
              <Checkbox
                label="Save account"
                checked={rememberMe}
                onChange={onRememberMeChange}
                size="md"
              />
              
              {/* Right side - Forgot password link */}
              {onForgotPassword && (
                <button
                  type="button"
                  onClick={onForgotPassword}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: 'var(--font-size-base)',
                    color: 'var(--color-primary)',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-family-primary)',
                    fontWeight: 'var(--font-weight-normal)',
                    textDecoration: 'none',
                    transition: 'text-decoration var(--transition-base)'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                  onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                >
                  Forgot password?
                </button>
              )}
            </div>
          )}

          {/* Forgot password only (for when showRememberMe is false) */}
          {mode === 'signin' && !showRememberMe && onForgotPassword && (
            <div style={{ marginTop: 'var(--spacing-2)', textAlign: 'right' }}>
              <button
                type="button"
                onClick={onForgotPassword}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: 'var(--font-size-base)',
                  color: 'var(--color-primary)',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-family-primary)',
                  fontWeight: 'var(--font-weight-normal)',
                  textDecoration: 'none',
                  transition: 'text-decoration var(--transition-base)'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
              >
                Forgot password?
              </button>
            </div>
          )}
        </div>

        {/* Submit button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={!isFormValid || loading}
          style={{ width: '100%' }}
        >
          {content.buttonText}
        </Button>
      </form>

      {/* Social authentication */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
        <Divider text="OR" />

        <SocialButton
          provider="google"
          text={content.socialGoogleText}
          disabled={loading}
          onClick={onGoogleAuth}
        />

        <SocialButton
          provider="github"
          text={content.socialGithubText}
          disabled={loading}
          onClick={onGithubAuth}
        />
      </div>

      {/* Toggle mode and terms */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
        {/* Toggle mode with split text styling */}
        <div style={{
          fontSize: 'var(--font-size-sm)',
          fontFamily: 'var(--font-family-primary)',
          color: 'var(--color-gray-600)',
          textAlign: 'center'
        }}>
          {mode === 'signin' ? (
            <>
              Don't have an account?{' '}
              <button
                type="button"
                onClick={handleToggleMode}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--color-primary)',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-family-primary)',
                  fontWeight: 'var(--font-weight-medium)',
                  textDecoration: 'none',
                  padding: 0,
                  transition: 'text-decoration var(--transition-base)'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                type="button"
                onClick={handleToggleMode}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--color-primary)',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-family-primary)',
                  fontWeight: 'var(--font-weight-medium)',
                  textDecoration: 'none',
                  padding: 0,
                  transition: 'text-decoration var(--transition-base)'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
              >
                Sign in
              </button>
            </>
          )}
        </div>

        {/* Terms and Privacy disclaimer */}
        <div style={{
          fontSize: 'var(--font-size-sm)',
          color: 'var(--color-gray-500)',
          textAlign: 'center',
          fontFamily: 'var(--font-family-primary)',
          lineHeight: 'var(--line-height-normal)'
        }}>
          By continuing, you agree to ThreadCub's{' '}
          <br />
          <a
            href="/terms"
            style={{
              color: 'var(--color-gray-900)',
              textDecoration: 'none',
              fontWeight: 'var(--font-weight-medium)',
              transition: 'text-decoration var(--transition-base)'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
          >
            Terms of Service
          </a>
          {' '}and{' '}
          <a
            href="/privacy"
            style={{
              color: 'var(--color-gray-900)',
              textDecoration: 'none',
              fontWeight: 'var(--font-weight-medium)',
              transition: 'text-decoration var(--transition-base)'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  )
}