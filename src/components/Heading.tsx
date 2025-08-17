// src/components/Heading.tsx
import React from 'react'

// Heading component interface
export interface HeadingProps {
  children: React.ReactNode
  level?: 1 | 2 | 3 | 4
  align?: 'left' | 'center' | 'right'
  color?: 'primary' | 'secondary' | 'muted'
  margin?: 'none' | 'sm' | 'md' | 'lg'
}

// Heading Component
export const Heading: React.FC<HeadingProps> = ({
  children,
  level = 2,
  align = 'left',
  color = 'primary',
  margin = 'md'
}) => {
  const colorVariants = {
    primary: 'var(--color-gray-900)',
    secondary: 'var(--color-gray-700)',
    muted: 'var(--color-gray-600)'
  }

  const marginVariants = {
    none: '0',
    sm: '0 0 var(--spacing-2) 0',
    md: '0 0 var(--spacing-4) 0',
    lg: '0 0 var(--spacing-6) 0'
  }

  const levelStyles = {
    1: {
      fontSize: 'var(--font-size-4xl)',
      fontWeight: 'var(--font-weight-bold)',
      lineHeight: 'var(--line-height-tight)'
    },
    2: {
      fontSize: 'var(--font-size-2xl)',
      fontWeight: 'var(--font-weight-bold)',
      lineHeight: 'var(--line-height-tight)'
    },
    3: {
      fontSize: 'var(--font-size-lg)',
      fontWeight: 'var(--font-weight-semibold)',
      lineHeight: 'var(--line-height-normal)'
    },
    4: {
      fontSize: 'var(--font-size-base)',
      fontWeight: 'var(--font-weight-semibold)',
      lineHeight: 'var(--line-height-normal)'
    }
  }

  const baseStyles: React.CSSProperties = {
    fontFamily: 'var(--font-family-title)',
    color: colorVariants[color],
    textAlign: align,
    margin: marginVariants[margin],
    ...levelStyles[level]
  }

  // Use proper conditional rendering
  if (level === 1) {
    return <h1 style={baseStyles}>{children}</h1>
  } else if (level === 2) {
    return <h2 style={baseStyles}>{children}</h2>
  } else if (level === 3) {
    return <h3 style={baseStyles}>{children}</h3>
  } else {
    return <h4 style={baseStyles}>{children}</h4>
  }
}