import React from 'react'

export interface UserInfo {
  name: string
  email: string
  avatar?: string
}

export interface UserSectionProps {
  /** User information */
  user: UserInfo
  /** Whether sidebar is collapsed */
  collapsed?: boolean
  /** Click handler for user section */
  onClick?: () => void
}

export const UserSection: React.FC<UserSectionProps> = ({
  user,
  collapsed = false,
  onClick
}) => {
  if (collapsed) return null

  return (
    <div 
      style={{
        padding: 'var(--spacing-4)',
        borderTop: `1px solid var(--color-gray-200)`,
        marginTop: 'auto'
      }}
    >
      <button
        onClick={onClick}
        style={{
          width: '100%',
          border: 'none',
          background: 'transparent',
          cursor: onClick ? 'pointer' : 'default',
          padding: 'var(--spacing-2)',
          borderRadius: 'var(--border-radius-lg)',
          transition: 'var(--transition-base)'
        }}
        onMouseEnter={(e) => {
          if (onClick) {
            e.currentTarget.style.backgroundColor = 'var(--color-gray-50)'
          }
        }}
        onMouseLeave={(e) => {
          if (onClick) {
            e.currentTarget.style.backgroundColor = 'transparent'
          }
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
          {/* Avatar */}
          <div 
            style={{
              width: '32px',
              height: '32px',
              borderRadius: 'var(--border-radius-full)',
              backgroundColor: 'var(--color-gray-200)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              flexShrink: 0
            }}
          >
            {user.avatar ? (
              <img 
                src={user.avatar} 
                alt={user.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ color: 'var(--color-gray-500)' }}
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            )}
          </div>
          
          {/* User Info */}
          <div style={{ flex: 1, minWidth: 0, textAlign: 'left' }}>
            <div 
              style={{
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--color-gray-900)',
                fontFamily: 'var(--font-family-primary)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              {user.name}
            </div>
            <div 
              style={{
                fontSize: 'var(--font-size-xs)',
                color: 'var(--color-gray-500)',
                fontFamily: 'var(--font-family-primary)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              {user.email}
            </div>
          </div>
        </div>
      </button>
    </div>
  )
}

export default UserSection