// src/components/Input.tsx
import React, { useState } from 'react'

// Input component interface
export interface InputProps {
  label?: string
  placeholder?: string
  type?: 'text' | 'email' | 'password'
  disabled?: boolean
  error?: boolean
  errorMessage?: string
  showTrailingIcon?: boolean
  showHintText?: boolean
  hintText?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: () => void
}

// Input Component
export const Input: React.FC<InputProps> = ({
  label = 'Label',
  placeholder = 'Placeholder text',
  type = 'text',
  disabled = false,
  error = false,
  errorMessage = 'This field is required',
  showTrailingIcon = false,
  showHintText = false,
  hintText = 'This is a hint text to help user.',
  value,
  onChange,
  onBlur
}) => {
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

  const inputId = `input-${Math.random().toString(36).substr(2, 9)}`

  // Get border color based on state
  const getBorderColor = () => {
    if (error) return 'var(--color-error)'
    if (isFocused) return 'var(--color-primary)'
    if (isHovered && !disabled) return 'var(--color-gray-400)'
    return 'var(--color-gray-300)'
  }

  // Container styles
  const containerStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-1)', // Reduced from var(--spacing-2) to var(--spacing-1)
    fontFamily: 'var(--font-family-primary)',
  }

  // Label styles
  const labelStyles: React.CSSProperties = {
    fontSize: 'var(--font-size-sm)',
    fontWeight: 'var(--font-weight-medium)',
    color: disabled ? 'var(--color-gray-400)' : 'var(--color-gray-700)',
  }

  // Input wrapper styles
  const wrapperStyles: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    height: '44px',
    border: `1px solid ${getBorderColor()}`,
    borderRadius: 'var(--border-radius-lg)',
    backgroundColor: disabled ? 'var(--color-gray-50)' : 'var(--color-white)',
    transition: 'var(--transition-base)',
    boxShadow: isFocused ? `0 0 0 3px var(--color-primary)20` : 'none',
    boxSizing: 'border-box',
  }

  // Input styles
  const inputStyles: React.CSSProperties = {
    flex: 1,
    height: '100%',
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    fontSize: 'var(--font-size-base)',
    fontFamily: 'var(--font-family-primary)',
    color: disabled ? 'var(--color-gray-400)' : 'var(--color-gray-900)',
    paddingLeft: 'var(--spacing-4)',
    paddingRight: showTrailingIcon ? 'var(--spacing-10)' : 'var(--spacing-4)',
    boxSizing: 'border-box',
  }

  // Icon styles
  const iconStyles: React.CSSProperties = {
    position: 'absolute',
    right: 'var(--spacing-4)',
    width: '20px',
    height: '20px',
    color: 'var(--color-gray-400)',
    cursor: type === 'password' ? 'pointer' : 'default',
  }

  // Hint text styles
  const hintStyles: React.CSSProperties = {
    fontSize: 'var(--font-size-sm)',
    color: error ? 'var(--color-error)' : 'var(--color-gray-500)',
    margin: '0',
    marginTop: 'var(--spacing-1)',
  }

  // Simple email icon
  const EmailIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )

  // Eye icon for password (show password)
  const EyeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  )

  // Eye off icon for password (hide password)
  const EyeOffIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/>
      <line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
  )

  return (
    <div style={containerStyles}>
      {label && (
        <label htmlFor={inputId} style={labelStyles}>
          {label}
        </label>
      )}
      
      <div 
        style={wrapperStyles}
        onMouseEnter={() => !disabled && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <input
          id={inputId}
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          value={inputValue}
          disabled={disabled}
          style={inputStyles}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false)
            if (onBlur) onBlur()
          }}
        />
        
        {showTrailingIcon && (
          <div 
            style={iconStyles} 
            onClick={type === 'password' ? () => setShowPassword(!showPassword) : undefined}
          >
            {type === 'email' && <EmailIcon />}
            {type === 'password' && (showPassword ? <EyeIcon /> : <EyeOffIcon />)}
          </div>
        )}
      </div>

      {showHintText && (
        <p style={hintStyles}>
          {error ? errorMessage : hintText}
        </p>
      )}
    </div>
  )
}