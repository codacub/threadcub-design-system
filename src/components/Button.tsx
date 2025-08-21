// src/components/Button.tsx
import React from 'react'

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit' | 'reset'
  style?: React.CSSProperties
  className?: string
  /** Loading state */
  loading?: boolean
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  children, 
  onClick,
  type = 'button',
  style,
  className,
  loading = false
}) => {
  // Size scales using design tokens
  const sizeStyles = {
    sm: {
      height: '36px',
      paddingInline: 'var(--spacing-4)',
      fontSize: 'var(--font-size-sm)',
      spinnerSize: '14px'
    },
    md: {
      height: '40px', 
      paddingInline: 'var(--spacing-5)',
      fontSize: 'var(--font-size-base)',
      spinnerSize: '16px'
    },
    lg: {
      height: '44px',
      paddingInline: 'var(--spacing-6)',
      fontSize: 'var(--font-size-lg)',
      spinnerSize: '18px'
    }
  }[size]

  const isDisabled = disabled || loading

  // Variant styles using design tokens
  const getVariantStyles = (): React.CSSProperties => {
    if (isDisabled) {
      switch (variant) {
        case 'primary':
          return {
            backgroundColor: 'var(--color-gray-300)',
            color: 'var(--color-gray-500)',
            border: 'none'
          }
        case 'secondary':
          return {
            backgroundColor: 'transparent',
            color: 'var(--color-gray-400)',
            border: 'var(--border-width-thin) solid var(--color-gray-300)'
          }
        case 'tertiary':
          return {
            backgroundColor: 'transparent',
            color: 'var(--color-gray-400)',
            border: 'none'
          }
        default:
          return {}
      }
    }

    switch (variant) {
      case 'primary':
        return {
          backgroundColor: 'var(--color-primary)',
          color: 'var(--color-white)',
          border: 'none'
        }
      case 'secondary':
        return {
          backgroundColor: 'var(--color-white)',
          color: 'var(--color-gray-700)',
          border: 'var(--border-width-thin) solid var(--color-gray-300)'
        }
      case 'tertiary':
        return {
          backgroundColor: 'transparent',
          color: 'var(--color-gray-700)',
          border: 'none'
        }
      default:
        return {}
    }
  }

  // Base styles using design tokens
  const baseStyles: React.CSSProperties = {
    fontFamily: 'var(--font-family-primary)',
    fontWeight: 'var(--font-weight-medium)',
    borderRadius: 'var(--border-radius-lg)',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    transition: 'var(--transition-base)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    outline: 'none',
    boxSizing: 'border-box',
    lineHeight: 'var(--line-height-normal)',
    whiteSpace: 'nowrap',
    gap: 'var(--spacing-2)',
    ...sizeStyles,
    ...getVariantStyles(),
    ...style
  }

  // Loading spinner using design tokens
  const LoadingSpinner = () => {
    const spinnerColor = variant === 'primary' ? 'var(--color-white)' : 'var(--color-primary)'
    const spinnerBorderColor = variant === 'primary' ? 'rgba(255, 255, 255, 0.3)' : 'var(--color-gray-200)'
    
    return (
      <div
        style={{
          width: sizeStyles.spinnerSize,
          height: sizeStyles.spinnerSize,
          border: `2px solid ${spinnerBorderColor}`,
          borderTop: `2px solid ${spinnerColor}`,
          borderRadius: 'var(--border-radius-full)',
          animation: 'spin 1s linear infinite',
          flexShrink: 0
        }}
      />
    )
  }

  // Add keyframe animation for spinner
  React.useEffect(() => {
    const existingStyle = document.getElementById('button-spinner-styles')
    if (!existingStyle) {
      const style = document.createElement('style')
      style.id = 'button-spinner-styles'
      style.textContent = `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `
      document.head.appendChild(style)
    }
  }, [])

  // Hover handlers
  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isDisabled) {
      const target = e.currentTarget
      if (variant === 'primary') {
        target.style.backgroundColor = 'var(--color-primary-hover)'
      } else if (variant === 'secondary') {
        target.style.backgroundColor = 'var(--color-gray-50)'
        target.style.borderColor = 'var(--color-gray-400)'
      } else if (variant === 'tertiary') {
        target.style.backgroundColor = 'var(--color-gray-100)'
        target.style.color = 'var(--color-gray-900)'
      }
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isDisabled) {
      const target = e.currentTarget
      const originalStyles = getVariantStyles()
      
      target.style.backgroundColor = originalStyles.backgroundColor || ''
      target.style.borderColor = originalStyles.borderColor || (variant === 'secondary' ? 'var(--color-gray-300)' : '')
      target.style.color = originalStyles.color || ''
    }
  }

  // Focus handlers
  const handleFocus = (e: React.FocusEvent<HTMLButtonElement>) => {
    if (!isDisabled) {
      const target = e.currentTarget
      // Using primary-light token for focus ring
      target.style.boxShadow = `0 0 0 3px rgba(168, 85, 247, 0.3)` // Based on --color-primary-light
      
      if (variant === 'secondary') {
        target.style.borderColor = 'var(--color-primary)'
      } else if (variant === 'tertiary') {
        target.style.backgroundColor = 'var(--color-gray-100)'
      }
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLButtonElement>) => {
    if (!isDisabled) {
      const target = e.currentTarget
      target.style.boxShadow = 'none'
      
      if (variant === 'secondary') {
        target.style.borderColor = 'var(--color-gray-300)'
      } else if (variant === 'tertiary') {
        target.style.backgroundColor = 'transparent'
      }
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isDisabled && onClick) {
      onClick(e)
    }
  }

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={handleClick}
      style={baseStyles}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      aria-label={loading ? `Loading ${children}` : undefined}
    >
      {loading && <LoadingSpinner />}
      <span style={{
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }}>
        {children}
      </span>
    </button>
  )
}