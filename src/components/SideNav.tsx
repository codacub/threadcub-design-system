import React, { useState, useEffect, useRef } from 'react'
import { SideNavHeader } from './SideNavHeader'
import { SideNavItem } from './SideNavItem'
import { UserSection } from './UserSection'
import { UserMenu } from './UserMenu'
import type { UserMenuItem } from './UserMenu'
import type { UserInfo } from './UserSection'

// Re-export types for convenience when using this component
export type { UserMenuItem } from './UserMenu'
export type { UserInfo } from './UserSection'

export interface SideNavItemData {
  /** Unique identifier for the nav item */
  id: string
  /** Display label */
  label: string
  /** Lucide icon SVG string */
  icon: string
  /** Current page indicator */
  active?: boolean
  /** Optional badge count */
  badge?: number
  /** Click handler */
  onClick?: () => void
}

export interface SideNavProps {
  /** Navigation items */
  items: SideNavItemData[]
  /** User menu items */
  userMenuItems?: UserMenuItem[]
  /** User information */
  user?: UserInfo
  /** App name to display in header */
  appName?: string
  /** Whether sidebar starts collapsed */
  defaultCollapsed?: boolean
  /** Callback when collapse state changes */
  onCollapseChange?: (collapsed: boolean) => void
  /** Custom className */
  className?: string
  /** Custom styles */
  style?: React.CSSProperties
}

export const SideNav: React.FC<SideNavProps> = ({
  items = [],
  userMenuItems = [],
  user,
  appName = 'ThreadCub',
  defaultCollapsed = false,
  onCollapseChange,
  className = '',
  style
}) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const sideNavRef = useRef<HTMLDivElement>(null)

  const handleToggleCollapse = () => {
    const newCollapsed = !isCollapsed
    setIsCollapsed(newCollapsed)
    onCollapseChange?.(newCollapsed)
    // Close user menu when collapsing
    if (newCollapsed) {
      setIsUserMenuOpen(false)
    }
  }

  const handleUserClick = () => {
    // Don't open menu when collapsed
    if (!isCollapsed) {
      setIsUserMenuOpen(!isUserMenuOpen)
    }
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sideNavRef.current && !sideNavRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false)
      }
    }

    if (isUserMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [isUserMenuOpen])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsUserMenuOpen(false)
      }
    }

    if (isUserMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => {
        document.removeEventListener('keydown', handleEscape)
      }
    }
  }, [isUserMenuOpen])

  return (
    <div 
      ref={sideNavRef}
      className={className}
      style={{
        width: isCollapsed ? '64px' : '280px',
        height: '100vh',
        backgroundColor: 'var(--color-white)',
        borderRight: `var(--border-width-thin) solid var(--color-gray-200)`,
        display: 'flex',
        flexDirection: 'column',
        transition: 'width var(--transition-base)',
        position: 'relative',
        flexShrink: 0,
        ...style
      }}
    >
      {/* Header */}
      <SideNavHeader 
        isCollapsed={isCollapsed}
        onToggle={handleToggleCollapse}
        appName={appName}
      />

      {/* Navigation Items */}
      <nav 
        style={{
          flex: 1,
          padding: 'var(--spacing-2)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-2)',
          overflowY: 'auto',
          overflowX: 'hidden'
        }}
      >
        {items.map((item) => (
          <SideNavItem
            key={item.id}
            label={item.label}
            icon={item.icon}
            active={item.active}
            badge={item.badge}
            collapsed={isCollapsed}
            onClick={item.onClick}
          />
        ))}
      </nav>

      {/* User Menu - Only show when not collapsed and has menu items */}
      {user && userMenuItems.length > 0 && (
        <UserMenu
          items={userMenuItems}
          isOpen={isUserMenuOpen}
          userEmail={user.email}
        />
      )}

      {/* User Section */}
      {user && (
        <UserSection 
          user={user}
          collapsed={isCollapsed}
          onClick={handleUserClick}
          menuOpen={isUserMenuOpen}
        />
      )}
    </div>
  )
}

export default SideNav