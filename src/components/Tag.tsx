// src/components/Tag.tsx
import React from 'react'

export interface TagProps {
  /** Tag content */
  children: React.ReactNode
  /** Visual variant */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  /** Size variant */
  size?: 'sm' | 'md' | 'lg'
  /** Shape variant - rounded rectangle or pill */
  shape?: 'rounded' | 'pill'
  /** Custom className */
  className?: string
  /** Custom style overrides */
  style?: React.CSSProperties
  /** Click handler for interactive tags */
  onClick?: () => void
  /** Whether the tag is clickable */
  clickable?: boolean
}

export const Tag: React.FC<TagProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  shape = 'rounded',
  className = '',
  style,
  onClick,
  clickable = false
}) => {
  // Size scales using design tokens
  const S = {
    sm: {
      fontSize: 'var(--font-size-xs)',
      paddingX: 'var(--spacing-2)',
      paddingY: 'var(--spacing-1)',
      height: '20px'
    },
    md: {
      fontSize: 'var(--font-size-xs)',
      paddingX: 'var(--spacing-2)',
      paddingY: 'var(--spacing-1)',
      height: '24px'
    },
    lg: {
      fontSize: 'var(--font-size-sm)',
      paddingX: 'var(--spacing-3)',
      paddingY: 'var(--spacing-1)',
      height: '28px'
    }
  }[size]

  // Variant styles using design tokens
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: 'var(--color-primary-bg)',
          color: 'var(--color-primary-text)',
          border: `var(--border-width-thin) solid var(--color-primary-light)`
        }
      case 'secondary':
        return {
          backgroundColor: 'var(--color-gray-100)',
          color: 'var(--color-gray-700)',
          border: `var(--border-width-thin) solid var(--color-gray-300)`
        }
      case 'success':
        return {
          backgroundColor: 'var(--color-success-bg)',
          color: 'var(--color-success-text)',
          border: `var(--border-width-thin) solid var(--color-success-light)`
        }
      case 'warning':
        return {
          backgroundColor: 'var(--color-warning-bg)',
          color: 'var(--color-warning-text)',
          border: `var(--border-width-thin) solid var(--color-warning-light)`
        }
      case 'error':
        return {
          backgroundColor: 'var(--color-error-bg)',
          color: 'var(--color-error-text)',
          border: `var(--border-width-thin) solid var(--color-error-light)`
        }
      default:
        return {}
    }
  }

  const baseStyles: React.CSSProperties = {
    fontFamily: 'var(--font-family-primary)',
    fontWeight: 'var(--font-weight-medium)',
    fontSize: S.fontSize,
    padding: `${S.paddingY} ${S.paddingX}`,
    height: S.height,
    borderRadius: shape === 'pill' ? 'var(--border-radius-full)' : 'var(--border-radius-base)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: '1',
    whiteSpace: 'nowrap',
    cursor: clickable || onClick ? 'pointer' : 'default',
    transition: 'var(--transition-base)',
    ...getVariantStyles(),
    ...style
  }

  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (clickable || onClick) {
      const target = e.currentTarget
      target.style.opacity = '0.8'
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (clickable || onClick) {
      const target = e.currentTarget
      target.style.opacity = '1'
    }
  }

  return (
    <span
      className={className}
      style={baseStyles}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </span>
  )
}

export default Tag