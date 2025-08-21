// src/components/Input.tsx
import React, { useState } from 'react'

export interface InputProps {
  /** Input label text */
  label?: string
  /** Placeholder text */
  placeholder?: string
  /** Input type */
  type?: 'text' | 'email' | 'password'
  /** Whether input is disabled */
  disabled?: boolean
  /** Whether input has an error state */
  error?: boolean
  /** Error message to display */
  errorMessage?: string
  /** Whether to show trailing icon */
  showTrailingIcon?: boolean
  /** Whether to show hint text */
  showHintText?: boolean
  /** Hint text to display */
  hintText?: string
  /** Input value (controlled) */
  value?: string
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  /** Blur handler */
  onBlur?: () => void
  /** Focus handler */
  onFocus?: () => void
  /** Input name attribute */
  name?: string
  /** Input ID */
  id?: string
  /** Whether input is required */
  required?: boolean
  /** Additional CSS classes */
  className?: string
  /** Custom styles */
  style?: React.CSSProperties
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder = 'Enter text',
  type = 'text',
  disabled = false,
  error = false,
  errorMessage = 'This field is required',
  showTrailingIcon = false,
  showHintText = false,
  hintText = 'This is a hint text to help user.',
  value,
  onChange,
  onBlur,
  onFocus,
  name,
  id,
  required = false,
  className,
  style
}) => {
  // Convert props to booleans to handle Storybook string issues
  const isDisabled = Boolean(disabled)
  const hasError = Boolean(error)
  const isRequired = Boolean(required)
  const shouldShowTrailingIcon = Boolean(showTrailingIcon)
  const shouldShowHintText = Boolean(showHintText)

  const [internalValue, setInternalValue] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Use controlled value if provided, otherwise use internal state
  const inputValue = value !== undefined ? value : internalValue
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e)
    } else {
      setInternalValue(e.target.value)
    }
  }

  const handleFocus = () => {
    setIsFocused(true)
    onFocus?.()
  }

  const handleBlur = () => {
    setIsFocused(false)
    onBlur?.()
  }

  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`
  const hintId = `${inputId}-hint`
  const errorId = `${inputId}-error`

  // Get border color based on state using design tokens
  const getBorderColor = () => {
    if (hasError) return 'var(--color-error)'
    if (isFocused) return 'var(--color-primary)'
    if (isHovered && !isDisabled) return 'var(--color-gray-400)'
    return 'var(--color-border-form)'
  }

  // Container styles using design tokens
  const containerStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-1)',
    fontFamily: 'var(--font-family-primary)',
    ...style
  }

  // Label styles using design tokens
  const labelStyles: React.CSSProperties = {
    fontSize: 'var(--font-size-sm)',
    fontWeight: 'var(--font-weight-medium)',
    color: isDisabled ? 'var(--color-gray-400)' : 'var(--color-gray-700)',
    lineHeight: 'var(--line-height-normal)'
  }

  // Input wrapper styles using design tokens
  const wrapperStyles: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    height: '44px',
    border: `var(--border-width-thin) solid ${getBorderColor()}`,
    borderRadius: 'var(--border-radius-lg)',
    backgroundColor: isDisabled ? 'var(--color-gray-50)' : 'var(--color-white)',
    transition: 'var(--transition-base)',
    boxShadow: isFocused && !hasError ? `0 0 0 3px rgba(124, 58, 237, 0.1)` : 'none',
    boxSizing: 'border-box'
  }

  // Input styles using design tokens
  const inputStyles: React.CSSProperties = {
    flex: 1,
    height: '100%',
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    fontSize: 'var(--font-size-base)',
    fontFamily: 'var(--font-family-primary)',
    color: isDisabled ? 'var(--color-gray-400)' : 'var(--color-gray-900)',
    paddingLeft: 'var(--spacing-4)',
    paddingRight: shouldShowTrailingIcon ? 'var(--spacing-10)' : 'var(--spacing-4)',
    boxSizing: 'border-box',
    lineHeight: 'var(--line-height-normal)'
  }

  // Icon styles using design tokens
  const iconStyles: React.CSSProperties = {
    position: 'absolute',
    right: 'var(--spacing-4)',
    width: 'var(--spacing-5)', // 20px
    height: 'var(--spacing-5)', // 20px
    color: 'var(--color-gray-400)',
    cursor: type === 'password' ? 'pointer' : 'default',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'color var(--transition-base)'
  }

  // Hint/error text styles using design tokens
  const hintStyles: React.CSSProperties = {
    fontSize: 'var(--font-size-sm)',
    color: hasError ? 'var(--color-error)' : 'var(--color-gray-500)',
    margin: '0',
    marginTop: 'var(--spacing-1)',
    lineHeight: 'var(--line-height-normal)'
  }

  // Icon components using design tokens
  const EmailIcon = () => (
    <svg 
      width="100%" 
      height="100%" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )

  const EyeIcon = () => (
    <svg 
      width="100%" 
      height="100%" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  )

  const EyeOffIcon = () => (
    <svg 
      width="100%" 
      height="100%" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/>
      <line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
  )

  return (
    <div style={containerStyles} className={className}>
      {label && (
        <label htmlFor={inputId} style={labelStyles}>
          {label}
          {isRequired && (
            <span style={{ color: 'var(--color-error)', marginLeft: 'var(--spacing-1)' }}>
              *
            </span>
          )}
        </label>
      )}
      
      <div 
        style={wrapperStyles}
        onMouseEnter={() => !isDisabled && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <input
          id={inputId}
          name={name}
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          value={inputValue}
          disabled={isDisabled}
          required={isRequired}
          style={inputStyles}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          aria-invalid={hasError}
          aria-describedby={
            shouldShowHintText 
              ? hasError 
                ? errorId 
                : hintId
              : undefined
          }
        />
        
        {shouldShowTrailingIcon && (
          <button
            type="button"
            style={{
              ...iconStyles,
              background: 'none',
              border: 'none',
              padding: 0
            }}
            onClick={type === 'password' ? () => setShowPassword(!showPassword) : undefined}
            aria-label={
              type === 'password' 
                ? showPassword 
                  ? 'Hide password' 
                  : 'Show password'
                : undefined
            }
            tabIndex={type === 'password' ? 0 : -1}
            onMouseEnter={(e) => {
              if (type === 'password') {
                e.currentTarget.style.color = 'var(--color-gray-600)'
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--color-gray-400)'
            }}
          >
            {type === 'email' && <EmailIcon />}
            {type === 'password' && (showPassword ? <EyeOffIcon /> : <EyeIcon />)}
          </button>
        )}
      </div>

      {shouldShowHintText && (
        <p 
          id={hasError ? errorId : hintId}
          style={hintStyles}
          role={hasError ? 'alert' : undefined}
        >
          {hasError ? errorMessage : hintText}
        </p>
      )}
    </div>
  )
}