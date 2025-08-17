// src/components/AuthCard.tsx
import React from 'react'

// AuthCard component interface
export interface AuthCardProps {
  children: React.ReactNode
  maxWidth?: string
  padding?: 'sm' | 'md' | 'lg'
  shadow?: 'sm' | 'md' | 'lg'
}

// AuthCard Component
export const AuthCard: React.FC<AuthCardProps> = ({
  children,
  maxWidth = '400px',
  padding = 'lg',
  shadow = 'md'
}) => {
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
    boxSizing: 'border-box',
  }

  return (
    <div style={cardStyles}>
      {children}
    </div>
  )
}