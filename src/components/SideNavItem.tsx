import React from 'react'
import { Badge } from './Badge'

export interface SideNavItemProps {
  /** Display label */
  label: string
  /** Lucide icon SVG string */
  icon: string
  /** Whether this item is active */
  active?: boolean
  /** Badge count */
  badge?: number
  /** Whether sidebar is collapsed */
  collapsed?: boolean
  /** Click handler */
  onClick?: () => void
  /** Custom className */
  className?: string
  /** Custom styles */
  style?: React.CSSProperties
}

export const SideNavItem: React.FC<SideNavItemProps> = ({
  label,
  icon,
  active = false,
  badge,
  collapsed = false,
  onClick,
  className,
  style
}) => {
  // Add styles for injected SVGs using design tokens
  React.useEffect(() => {
    const existingStyle = document.getElementById('sidenav-svg-styles')
    if (!existingStyle) {
      const style = document.createElement('style')
      style.id = 'sidenav-svg-styles'
      style.textContent = `
        .sidenav-icon-container svg {
          width: var(--icon-size-base, 16px);
          height: var(--icon-size-base, 16px);
          display: block;
          stroke-width: 2;
          stroke: currentColor;
          flex-shrink: 0;
        }
      `
      document.head.appendChild(style)
    }
  }, [])

  return (
    <button
      onClick={onClick}
      className={className}
      style={{
        width: '100%',
        height: collapsed ? 'var(--min-touch-target)' : 'var(--sidebar-nav-item-height)',
        border: 'none',
        background: active ? 'var(--color-primary-bg)' : 'transparent',
        borderRadius: 'var(--border-radius-lg)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: collapsed ? '0' : 'var(--spacing-3)',
        padding: collapsed ? '0' : `0 var(--spacing-3)`,
        transition: 'var(--transition-base)',
        color: active ? 'var(--color-primary-text)' : 'var(--color-gray-600)',
        fontSize: 'var(--font-size-sm)',
        fontWeight: active ? 'var(--font-weight-medium)' : 'var(--font-weight-normal)',
        fontFamily: 'var(--font-family-primary)',
        justifyContent: collapsed ? 'center' : 'flex-start',
        position: 'relative',
        outline: 'none',
        ...style
      }}
      onMouseEnter={(e) => {
        if (!active) {
          e.currentTarget.style.backgroundColor = 'var(--color-gray-50)'
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.currentTarget.style.backgroundColor = 'transparent'
        }
      }}
      onFocus={(e) => {
        e.currentTarget.style.boxShadow = `0 0 0 2px var(--color-primary-light)`
      }}
      onBlur={(e) => {
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Icon */}
      <div 
        className="sidenav-icon-container"
        dangerouslySetInnerHTML={{ __html: icon }}
        style={{
          width: 'var(--icon-size-base)',
          height: 'var(--icon-size-base)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}
      />
      
      {/* Label - Only show when expanded */}
      {!collapsed && (
        <span style={{ 
          flex: 1, 
          textAlign: 'left',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>
          {label}
        </span>
      )}
      
      {/* Badge */}
      {badge && badge > 0 && (
        <Badge 
          count={badge} 
          collapsed={collapsed} 
          active={active} 
          size="sm"
        />
      )}
    </button>
  )
}

export default SideNavItem