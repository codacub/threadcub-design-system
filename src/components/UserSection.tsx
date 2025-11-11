import React from 'react'

export interface UserInfo {
  /** User's display name */
  name: string
  /** User's email address */
  email: string
  /** Optional avatar image URL */
  avatar?: string
  /** Optional plan/tier label */
  plan?: string
}

export interface UserSectionProps {
  /** User information to display */
  user: UserInfo
  /** Whether sidebar is collapsed */
  collapsed?: boolean
  /** Click handler */
  onClick?: () => void
  /** Whether the menu is currently open */
  menuOpen?: boolean
}

export const UserSection: React.FC<UserSectionProps> = ({
  user,
  collapsed = false,
  onClick,
  menuOpen = false
}) => {
  // Generate initials from name
  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <button
      onClick={onClick}
      style={{
        width: '100%',
        padding: 'var(--spacing-3)',
        margin: 'var(--spacing-2)',
        marginTop: 'auto', // Push to bottom
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-3)',
        backgroundColor: menuOpen ? 'var(--color-gray-100)' : 'transparent',
        border: `var(--border-width-thin) solid ${menuOpen ? 'var(--color-gray-300)' : 'var(--color-gray-200)'}`,
        borderRadius: 'var(--border-radius-lg)',
        cursor: 'pointer',
        transition: 'all var(--transition-base)',
        fontFamily: 'inherit',
        textAlign: 'left',
        outline: 'none',
        minHeight: '64px', // Ensure consistent height
        flexShrink: 0
      }}
      onMouseEnter={(e) => {
        if (!menuOpen) {
          e.currentTarget.style.backgroundColor = 'var(--color-gray-50)'
          e.currentTarget.style.borderColor = 'var(--color-gray-300)'
        }
      }}
      onMouseLeave={(e) => {
        if (!menuOpen) {
          e.currentTarget.style.backgroundColor = 'transparent'
          e.currentTarget.style.borderColor = 'var(--color-gray-200)'
        }
      }}
      onFocus={(e) => {
        e.currentTarget.style.outline = `2px solid var(--color-primary-500)`
        e.currentTarget.style.outlineOffset = '2px'
      }}
      onBlur={(e) => {
        e.currentTarget.style.outline = 'none'
      }}
      aria-label="User menu"
      aria-expanded={menuOpen}
    >
      {/* Avatar or Initials */}
      <div
        style={{
          width: '40px',
          height: '40px',
          borderRadius: 'var(--border-radius-full)',
          backgroundColor: user.avatar ? 'transparent' : 'var(--color-primary-100)',
          color: 'var(--color-primary-700)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 'var(--font-size-base)',
          fontWeight: 'var(--font-weight-semibold)',
          flexShrink: 0,
          overflow: 'hidden',
          border: `1px solid var(--color-gray-200)`
        }}
      >
        {user.avatar ? (
          <img
            src={user.avatar}
            alt={user.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        ) : (
          getInitials(user.name)
        )}
      </div>

      {/* User Info - Hidden when collapsed */}
      {!collapsed && (
        <div
          style={{
            flex: 1,
            minWidth: 0, // Allow text truncation
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-1)'
          }}
        >
          <div
            style={{
              fontSize: 'var(--font-size-sm)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--color-gray-900)',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}
          >
            {user.name}
          </div>
          <div
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-gray-600)',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}
          >
            {user.plan || user.email}
          </div>
        </div>
      )}

      {/* Chevron - Hidden when collapsed */}
      {!collapsed && (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            flexShrink: 0,
            color: 'var(--color-gray-400)',
            transform: menuOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform var(--transition-base)'
          }}
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      )}
    </button>
  )
}

export default UserSection