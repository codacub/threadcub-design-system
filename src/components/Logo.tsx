// src/components/Logo.tsx
import React from 'react'

export interface LogoProps {
  /** Logo size variant */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /** Visual variant for different backgrounds */
  variant?: 'default' | 'white' | 'dark'
  /** Whether logo is clickable */
  clickable?: boolean
  /** Click handler function */
  onClick?: () => void
  /** Alt text for accessibility */
  alt?: string
  /** Additional CSS classes */
  className?: string
  /** Custom styles */
  style?: React.CSSProperties
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  variant = 'default',
  clickable = false,
  onClick,
  alt = 'ThreadCub Logo',
  className,
  style
}) => {
  // Size variants using design tokens
  const sizeVariants = {
    xs: 'var(--icon-size-base)', // 24px
    sm: '32px',
    md: '48px', 
    lg: '64px',
    xl: 'var(--logo-size)' // 80px from tokens
  }

  // Base styles using design tokens
  const logoStyles: React.CSSProperties = {
    width: sizeVariants[size],
    height: sizeVariants[size],
    display: 'block',
    cursor: clickable ? 'pointer' : 'default',
    transition: 'var(--transition-base)',
    userSelect: 'none',
    // Filter variants for different backgrounds
    filter: variant === 'white' ? 'brightness(0) invert(1)' : 
            variant === 'dark' ? 'brightness(0)' : 'none',
    // Add slight hover effect for clickable logos
    ...(clickable && {
      ':hover': {
        transform: 'scale(1.05)'
      }
    }),
    ...style
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLImageElement>) => {
    if (clickable) {
      e.currentTarget.style.transform = 'scale(1.05)'
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLImageElement>) => {
    if (clickable) {
      e.currentTarget.style.transform = 'scale(1)'
    }
  }

  const handleClick = () => {
    if (clickable && onClick) {
      onClick()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLImageElement>) => {
    if (clickable && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      onClick?.()
    }
  }

  return (
    <img
      src="/threadcub.svg"
      alt={alt}
      style={logoStyles}
      className={className}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      tabIndex={clickable ? 0 : -1}
      role={clickable ? 'button' : 'img'}
      aria-label={clickable ? `${alt} - Click to navigate` : alt}
    />
  )
}