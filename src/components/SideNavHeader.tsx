import React from 'react'
import { Logo } from './Logo'

export interface SideNavHeaderProps {
  /** Whether sidebar is collapsed */
  isCollapsed: boolean
  /** Click handler for toggle */
  onToggle: () => void
  /** App name to display */
  appName?: string
}

export const SideNavHeader: React.FC<SideNavHeaderProps> = ({
  isCollapsed,
  onToggle,
  appName = 'ThreadCub'
}) => {
  return (
    <button
      onClick={onToggle}
      style={{
        width: '100%',
        padding: isCollapsed ? 'var(--spacing-4)' : 'var(--spacing-4) var(--spacing-6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: '72px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        borderRadius: 'var(--border-radius-lg)',
        transition: 'var(--transition-base)',
        margin: 'var(--spacing-1)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-gray-50)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent'
      }}
    >
      {/* Logo and App Name */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
        <Logo size="sm" />
        {!isCollapsed && (
          <span 
            style={{
              fontSize: 'var(--font-size-lg)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--color-gray-900)',
              fontFamily: 'var(--font-family-primary)',
              userSelect: 'none'
            }}
          >
            {appName}
          </span>
        )}
      </div>
      
      {/* Chevron - More visible and larger */}
      <div
        style={{
          width: 'var(--spacing-8, 32px)',
          height: 'var(--spacing-8, 32px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 'var(--border-radius-base)',
          backgroundColor: 'var(--color-gray-100)',
          transition: 'var(--transition-base)',
          flexShrink: 0
        }}
      >
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={{
            color: 'var(--color-gray-600)',
            transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'var(--transition-base)'
          }}
        >
          <path d="m15 18-6-6 6-6"/>
        </svg>
      </div>
    </button>
  )
}

export default SideNavHeader