import React, { useState } from 'react'
import { SideNavHeader } from './SideNavHeader'
import { SideNavItem } from './SideNavItem'
import { UserSection } from './UserSection'
import { UserMenu } from './UserMenu'
import type { UserInfo } from './UserSection'

// Re-export types
export type { UserInfo } from './UserSection'

export interface SideNavItemData {
  id: string
  label: string
  icon: string
  active?: boolean
  badge?: number
  onClick?: () => void
}

export interface SideNavProps {
  items: SideNavItemData[]
  user?: UserInfo
  appName?: string
  defaultCollapsed?: boolean
  onCollapseChange?: (collapsed: boolean) => void
  onUserClick?: () => void
  onSignOut?: () => void
  onSettingsClick?: () => void
  className?: string
  style?: React.CSSProperties
}

export const SideNav: React.FC<SideNavProps> = ({
  items = [],
  user,
  appName = 'ThreadCub',
  defaultCollapsed = false,
  onCollapseChange,
  onUserClick,
  onSignOut = () => console.log('Sign out'),
  onSettingsClick = () => console.log('Settings'),
  className = '',
  style
}) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleCollapse = () => {
    const newCollapsed = !isCollapsed
    setIsCollapsed(newCollapsed)
    onCollapseChange?.(newCollapsed)
    if (newCollapsed) {
      setIsMenuOpen(false)
    }
  }

  const handleUserSectionClick = () => {
    if (!isCollapsed) {
      setIsMenuOpen(!isMenuOpen)
      onUserClick?.()
    }
  }

  const handleSettingsClick = () => {
    setIsMenuOpen(false)
    onSettingsClick()
  }

  const handleSignOutClick = () => {
    setIsMenuOpen(false)
    onSignOut()
  }

  const handleMenuUserSectionClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <div
      className={className}
      style={{
        width: isCollapsed ? '64px' : '280px',
        height: '100vh',
        backgroundColor: 'white',
        borderRight: '1px solid #e5e7eb',
        display: 'flex',
        flexDirection: 'column',
        transition: 'width 0.2s',
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
          padding: '8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
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

      {/* User Menu - appears at bottom with border when open */}
      {user && !isCollapsed && (
        <UserMenu
          userEmail={user.email}
          userName={user.name}
          userAvatar={user.avatar}
          isOpen={isMenuOpen}
          onSettingsClick={handleSettingsClick}
          onSignOutClick={handleSignOutClick}
          onUserSectionClick={handleMenuUserSectionClick}
        />
      )}

      {/* User Section - at bottom, only shows when menu is closed */}
      {user && !isCollapsed && !isMenuOpen && (
        <UserSection
          userName={user.name}
          userAvatar={user.avatar}
          isMenuOpen={isMenuOpen}
          onClick={handleUserSectionClick}
        />
      )}
    </div>
  )
}

export default SideNav