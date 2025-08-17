// src/components/Divider.tsx
import React from 'react'

// Divider component interface
export interface DividerProps {
  text?: string
  color?: 'gray' | 'light' | 'muted'
  spacing?: 'sm' | 'md' | 'lg'
}

// Divider Component
export const Divider: React.FC<DividerProps> = ({
  text = 'OR',
  color = 'gray',
  spacing = 'md'
}) => {
  // Color variants
  const colorVariants = {
    gray: {
      line: 'var(--color-gray-300)',
      text: 'var(--color-gray-500)'
    },
    light: {
      line: 'var(--color-gray-200)',
      text: 'var(--color-gray-400)'
    },
    muted: {
      line: 'var(--color-gray-400)',
      text: 'var(--color-gray-600)'
    }
  }

  // Spacing variants
  const spacingVariants = {
    sm: 'var(--spacing-4)',
    md: 'var(--spacing-6)',
    lg: 'var(--spacing-8)'
  }

  const containerStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    margin: `${spacingVariants[spacing]} 0`,
  }

  const lineStyles: React.CSSProperties = {
    flex: 1,
    height: '1px',
    backgroundColor: colorVariants[color].line,
  }

  const textStyles: React.CSSProperties = {
    fontSize: 'var(--font-size-sm)',
    fontWeight: 'var(--font-weight-medium)',
    color: colorVariants[color].text,
    padding: `0 var(--spacing-4)`,
    backgroundColor: 'var(--color-white)',
    fontFamily: 'var(--font-family-primary)',
  }

  return (
    <div style={containerStyles}>
      <div style={lineStyles} />
      <span style={textStyles}>{text}</span>
      <div style={lineStyles} />
    </div>
  )
}