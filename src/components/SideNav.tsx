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
  /** User menu items (optional - if not provided, default menu with Settings and Sign Out is used) */
  userMenuItems?: UserMenuItem[]
  /** User information */
  user?: UserInfo
  /** App name to display in header */
  appName?: string
  /** Whether sidebar starts collapsed */
  defaultCollapsed?: boolean
  /** Callback when collapse state changes */
  onCollapseChange?: (collapsed: boolean) => void
  /** Callback when user clicks on user section (legacy - for backwards compatibility) */
  onUserClick?: () => void
  /** Callback when user signs out from the user menu */
  onSignOut?: () => void
  /** Callback when user clicks settings in the menu */
  onSettingsClick?: () => void
  /** Custom className */
  className?: string
  /** Custom styles */
  style?: React.CSSProperties
}

export const SideNav: React.FC<SideNavProps> = ({
  items = [],
  userMenuItems,
  user,
  appName = 'ThreadCub',
  defaultCollapsed = false,
  onCollapseChange,
  onUserClick,
  onSignOut,
  onSettingsClick,
  className = '',
  style
}) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const sideNavRef = useRef<HTMLDivElement>(null)

  // Build default menu items if not provided
  const defaultMenuItems: UserMenuItem[] = [
    {
      id: 'settings',
      label: 'Settings',
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
      onClick: onSettingsClick
    },
    {
      id: 'sign-out',
      label: 'Sign Out',
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>`,
      onClick: onSignOut,
      destructive: true
    }
  ]

  // Use provided menu items or default
  const menuItems = userMenuItems || defaultMenuItems

  const handleToggleCollapse = () => {
    const newCollapsed = !isCollapsed
    setIsCollapsed(newCollapsed)
    onCollapseChange?.(newCollapsed)
    // Close user menu when collapsing
    if (newCollapsed) {
      setIsUserMenuOpen(false)
    }
  }

  const handleUserSectionClick = () => {
    // Don't open menu when collapsed
    if (!isCollapsed) {
      setIsUserMenuOpen(!isUserMenuOpen)
      // Call legacy callback if provided
      onUserClick?.()
    }
  }

  const handleMenuItemClick = (itemOnClick?: () => void) => {
    // Execute the item's onClick
    itemOnClick?.()
    // Close the menu
    setIsUserMenuOpen(false)
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
      {user && menuItems.length > 0 && (
        <UserMenu
          items={menuItems.map(item => ({
            ...item,
            onClick: () => handleMenuItemClick(item.onClick)
          }))}
          isOpen={isUserMenuOpen}
          userEmail={user.email}
        />
      )}

      {/* User Section */}
      {user && (
        <UserSection 
          user={user}
          collapsed={isCollapsed}
          onClick={handleUserSectionClick}
          menuOpen={isUserMenuOpen}
        />
      )}
    </div>
  )
}

export default SideNav