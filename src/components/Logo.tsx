// src/components/Logo.tsx
import React from 'react'

// Logo component interface
export interface LogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'white' | 'dark'
  clickable?: boolean
  onClick?: () => void
  alt?: string
}

// Logo Component
export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  variant = 'default',
  clickable = false,
  onClick,
  alt = 'ThreadCub Logo'
}) => {
  // Size variants
  const sizeVariants = {
    xs: '24px',
    sm: '32px', 
    md: '48px',
    lg: '64px',
    xl: '80px'
  }

  // Base styles
  const logoStyles: React.CSSProperties = {
    width: sizeVariants[size],
    height: sizeVariants[size],
    display: 'block',
    cursor: clickable ? 'pointer' : 'default',
    transition: 'var(--transition-base)',
    filter: variant === 'white' ? 'brightness(0) invert(1)' : 
            variant === 'dark' ? 'brightness(0)' : 'none',
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

  return (
    <img
      src="/threadcub.svg"
      alt={alt}
      style={logoStyles}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  )
}