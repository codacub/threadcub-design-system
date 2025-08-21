import React, { useState } from 'react'
import { SideNav } from './SideNav'

// Define the type locally if not exported from SideNav
interface SideNavItem {
  id: string
  label: string
  icon: string
  active?: boolean
  badge?: number
  onClick?: () => void
}

export interface AppLayoutProps {
  /** Page content */
  children: React.ReactNode
  /** Navigation items */
  navItems: SideNavItem[]
  /** User information */
  user?: {
    name: string
    email: string
    avatar?: string
  }
  /** App name to display in sidebar */
  appName?: string
  /** Whether sidebar starts collapsed */
  defaultSidebarCollapsed?: boolean
  /** Callback when sidebar collapse state changes */
  onSidebarCollapseChange?: (collapsed: boolean) => void
  /** Callback when user section is clicked */
  onUserClick?: () => void
  /** Custom className */
  className?: string
}

export const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  navItems,
  user,
  appName = 'ThreadCub',
  defaultSidebarCollapsed = false,
  onSidebarCollapseChange,
  onUserClick,
  className = ''
}) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(defaultSidebarCollapsed)

  const handleSidebarToggle = (collapsed: boolean) => {
    setSidebarCollapsed(collapsed)
    onSidebarCollapseChange?.(collapsed)
  }

  return (
    <div 
      className={className}
      style={{
        display: 'flex',
        height: '100vh',
        backgroundColor: 'var(--color-gray-50)',
        fontFamily: 'var(--font-family-primary)',
        overflow: 'hidden'
      }}
    >
      {/* Sidebar - Fixed positioning */}
      <div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          height: '100vh',
          width: sidebarCollapsed ? 'var(--sidebar-width-collapsed)' : 'var(--sidebar-width-expanded)',
          zIndex: 10,
          transition: 'var(--transition-base)'
        }}
      >
        <SideNav
          items={navItems}
          user={user}
          appName={appName}
          defaultCollapsed={sidebarCollapsed}
          onCollapseChange={handleSidebarToggle}
          onUserClick={onUserClick}
        />
      </div>

      {/* Main Content Area */}
      <main 
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          backgroundColor: 'var(--color-white)',
          marginLeft: sidebarCollapsed ? 'var(--sidebar-width-collapsed)' : 'var(--sidebar-width-expanded)',
          transition: 'var(--transition-base)'
        }}
      >
        <div 
          style={{
            flex: 1,
            padding: 'var(--spacing-6)',
            overflow: 'auto'
          }}
        >
          {children}
        </div>
      </main>
    </div>
  )
}

export default AppLayout