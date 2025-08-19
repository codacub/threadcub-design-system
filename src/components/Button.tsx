// src/components/Button.tsx
import React from 'react'

// Button component interface
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void  // ← FIXED THIS LINE
  type?: 'button' | 'submit' | 'reset'
  style?: React.CSSProperties
  className?: string
}

// Button component
export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  children, 
  onClick,
  type = 'button',
  style,
  className
}) => {
  // Base styles
  const baseStyles: React.CSSProperties = {
    fontFamily: 'var(--font-family-primary)',
    fontSize: 'var(--font-size-base)',
    fontWeight: 'var(--font-weight-medium)',
    borderRadius: 'var(--border-radius-lg)',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'var(--transition-base)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    outline: 'none',
    boxSizing: 'border-box'
  }

  // Size styles
  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: {
      height: '36px',
      paddingLeft: 'var(--spacing-4)',
      paddingRight: 'var(--spacing-4)',
      fontSize: 'var(--font-size-sm)'
    },
    md: {
      height: '40px', 
      paddingLeft: 'var(--spacing-5)',
      paddingRight: 'var(--spacing-5)',
      fontSize: 'var(--font-size-base)'
    },
    lg: {
      height: '44px',
      paddingLeft: 'var(--spacing-6)',
      paddingRight: 'var(--spacing-6)',
      fontSize: 'var(--font-size-lg)'
    }
  }

  // Variant styles
  const getVariantStyles = (): React.CSSProperties => {
    if (disabled) {
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
            border: '1px solid var(--color-gray-300)'
          }
        case 'tertiary':
          return {
            backgroundColor: 'transparent',
            color: 'var(--color-gray-400)',
            border: 'none'
          }
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
          border: '1px solid var(--color-gray-300)'
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

  const combinedStyles = {
    ...baseStyles,
    ...sizeStyles[size],
    ...getVariantStyles(),
    ...style // Add custom style prop
  }

  // REMOVE THIS DEBUG LOG - it's spamming your console
  // console.log('Button Debug:', {
  //   disabled,
  //   variant,
  //   combinedStyles: {
  //     backgroundColor: combinedStyles.backgroundColor,
  //     color: combinedStyles.color,
  //     border: combinedStyles.border
  //   }
  // })

  const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
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

  const handleMouseOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      const target = e.currentTarget
      // Reset to original styles based on current state
      const originalStyles = {
        ...baseStyles,
        ...sizeStyles[size],
        ...getVariantStyles()
      }
      
      target.style.backgroundColor = originalStyles.backgroundColor || ''
      target.style.borderColor = originalStyles.borderColor || ''
      target.style.color = originalStyles.color || ''
    }
  }

  const handleFocus = (e: React.FocusEvent<HTMLButtonElement>) => {
    if (!disabled) {
      const target = e.currentTarget
      if (variant === 'primary') {
        target.style.boxShadow = '0 0 0 3px rgba(124, 58, 237, 0.3)'
      } else if (variant === 'secondary') {
        target.style.borderColor = 'var(--color-primary)'
        target.style.boxShadow = '0 0 0 3px rgba(124, 58, 237, 0.1)'
      } else if (variant === 'tertiary') {
        target.style.backgroundColor = 'var(--color-gray-100)'
        target.style.boxShadow = '0 0 0 3px rgba(124, 58, 237, 0.1)'
      }
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLButtonElement>) => {
    if (!disabled) {
      const target = e.currentTarget
      target.style.boxShadow = 'none'
      if (variant === 'secondary') {
        target.style.borderColor = 'var(--color-gray-300)'
      } else if (variant === 'tertiary') {
        target.style.backgroundColor = 'transparent'
      }
    }
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={combinedStyles}
      className={className}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {children}
    </button>
  )
}