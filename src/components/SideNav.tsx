import React, { useState } from 'react'
import { SideNavHeader } from './SideNavHeader'
import { SideNavItem } from './SideNavItem'
import { UserSection } from './UserSection'
import type { UserInfo } from './UserSection'

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
  /** User information */
  user?: UserInfo
  /** App name to display in header */
  appName?: string
  /** Whether sidebar starts collapsed */
  defaultCollapsed?: boolean
  /** Callback when collapse state changes */
  onCollapseChange?: (collapsed: boolean) => void
  /** Callback when user section is clicked */
  onUserClick?: () => void
  /** Custom className */
  className?: string
  /** Custom styles */
  style?: React.CSSProperties
}

export const SideNav: React.FC<SideNavProps> = ({
  items = [],
  user,
  appName = 'ThreadCub',
  defaultCollapsed = false,
  onCollapseChange,
  onUserClick,
  className = '',
  style
}) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)

  const handleToggleCollapse = () => {
    const newCollapsed = !isCollapsed
    setIsCollapsed(newCollapsed)
    onCollapseChange?.(newCollapsed)
  }

  return (
 <div 
   className={className}
   style={{
     width: isCollapsed ? '64px' : '280px', // Fixed: 64px not var(--spacing-15)
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
          padding: 'var(--spacing-2)', // 8px padding around nav area
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-2)', // Fixed: 8px gap between items (not spacing-3)
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

      {/* User Section */}
      {user && (
        <UserSection 
          user={user}
          collapsed={isCollapsed}
          onClick={onUserClick}
        />
      )}
    </div>
  )
}

export default SideNav