import React from 'react'

export interface BadgeProps {
  /** Badge count */
  count: number
  /** Whether this is in a collapsed sidebar (shows as dot) */
  collapsed?: boolean
  /** Whether the parent item is active (affects styling) */
  active?: boolean
  /** Size variant for different use cases */
  size?: 'sm' | 'md' | 'lg'
  /** Custom className */
  className?: string
  /** Custom style overrides */
  style?: React.CSSProperties
}

export const Badge: React.FC<BadgeProps> = ({
  count,
  collapsed = false,
  active = false,
  size = 'md',
  className = '',
  style
}) => {
  if (count <= 0) return null

  // Size scales using design tokens
  const S = {
    sm: {
      fontSize: 'var(--font-size-xs)',
      paddingX: 'var(--spacing-2)',
      paddingY: 'var(--spacing-1)',
      minWidth: '16px',
      height: '16px',
      dotSize: 'var(--spacing-2)'
    },
    md: {
      fontSize: 'var(--font-size-xs)',
      paddingX: 'var(--spacing-2)',
      paddingY: 'var(--spacing-1)',
      minWidth: '18px',
      height: '18px',
      dotSize: 'var(--spacing-2)'
    },
    lg: {
      fontSize: 'var(--font-size-sm)',
      paddingX: 'var(--spacing-3)',
      paddingY: 'var(--spacing-1)',
      minWidth: '20px',
      height: '20px',
      dotSize: 'var(--spacing-3)'
    }
  }[size]

  if (collapsed) {
    // Dot badge for collapsed state
    return (
      <div
        className={className}
        style={{
          position: 'absolute',
          top: 'var(--spacing-3)',
          right: 'var(--spacing-3)',
          width: S.dotSize,
          height: S.dotSize,
          backgroundColor: 'var(--color-error)',
          borderRadius: 'var(--border-radius-full)',
          border: `var(--border-width-medium) solid var(--color-white)`,
          flexShrink: 0,
          ...style
        }}
      />
    )
  }

  // Pill-shaped badge for expanded state
  return (
    <span 
      className={className}
      style={{
        backgroundColor: active ? 'var(--color-primary-text)' : 'var(--color-error)',
        color: 'var(--color-white)',
        fontSize: S.fontSize,
        fontWeight: 'var(--font-weight-medium)',
        fontFamily: 'var(--font-family-primary)',
        borderRadius: 'var(--border-radius-full)', // This creates the pill shape
        padding: `${S.paddingY} ${S.paddingX}`,
        minWidth: S.minWidth,
        height: S.height,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: '1',
        flexShrink: 0,
        whiteSpace: 'nowrap',
        ...style
      }}
    >
      {count > 99 ? '99+' : count}
    </span>
  )
}

export default Badge