// src/components/StatsCard.tsx
import React from 'react'

export interface StatsCardProps {
  /** The main label/title for the stat */
  label: string
  /** The primary stat value to display */
  value: string | number
  /** Optional subtitle or additional context */
  subtitle?: string
  /** Color variant for the value */
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'info' | 'neutral'
  /** Optional icon element */
  icon?: React.ReactNode
  /** Custom className */
  className?: string
  /** Custom styles */
  style?: React.CSSProperties
}

export const StatsCard: React.FC<StatsCardProps> = ({
  label,
  value,
  subtitle,
  variant = 'primary',
  icon,
  className = '',
  style
}) => {
  // Color variants using design tokens
  const getValueColor = () => {
    switch (variant) {
      case 'primary':
        return 'var(--color-primary)'
      case 'success':
        return 'var(--color-success)'
      case 'warning':
        return 'var(--color-warning)'
      case 'error':
        return 'var(--color-error)'
      case 'info':
        return 'var(--color-info)'
      case 'neutral':
        return 'var(--color-gray-700)'
      default:
        return 'var(--color-primary)'
    }
  }

  const cardStyles: React.CSSProperties = {
    backgroundColor: 'var(--color-white)',
    borderRadius: 'var(--border-radius-lg)',
    border: `var(--border-width-thin) solid var(--color-gray-200)`,
    boxShadow: 'var(--shadow-card)',
    padding: 'var(--spacing-6)',
    fontFamily: 'var(--font-family-primary)',
    transition: 'var(--transition-base)',
    ...style
  }

  const labelStyles: React.CSSProperties = {
    fontSize: 'var(--font-size-sm)',
    fontWeight: 'var(--font-weight-medium)',
    color: 'var(--color-gray-600)',
    marginBottom: 'var(--spacing-2)',
    lineHeight: 'var(--line-height-normal)'
  }

  const valueStyles: React.CSSProperties = {
    fontSize: 'var(--font-size-3xl)',
    fontWeight: 'var(--font-weight-bold)',
    color: getValueColor(),
    lineHeight: 'var(--line-height-tight)',
    marginBottom: subtitle ? 'var(--spacing-1)' : '0'
  }

  const subtitleStyles: React.CSSProperties = {
    fontSize: 'var(--font-size-xs)',
    color: 'var(--color-gray-500)',
    lineHeight: 'var(--line-height-normal)',
    margin: 0
  }

  const iconContainerStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-2)',
    marginBottom: 'var(--spacing-2)'
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)'
    e.currentTarget.style.transform = 'translateY(-1px)'
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.boxShadow = 'var(--shadow-card)'
    e.currentTarget.style.transform = 'translateY(0)'
  }

  return (
    <div
      className={className}
      style={cardStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {icon && (
        <div style={iconContainerStyles}>
          <div style={{ color: getValueColor() }}>
            {icon}
          </div>
        </div>
      )}
      
      <div style={labelStyles}>
        {label}
      </div>
      
      <div style={valueStyles}>
        {value}
      </div>
      
      {subtitle && (
        <div style={subtitleStyles}>
          {subtitle}
        </div>
      )}
    </div>
  )
}

export default StatsCard