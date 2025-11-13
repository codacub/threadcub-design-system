import React from 'react'

// Export UserInfo for backward compatibility with SideNav
export interface UserInfo {
  name: string
  email: string
  avatar?: string
  plan?: string
}

export interface UserSectionProps {
  userName: string
  userAvatar?: string
  isMenuOpen: boolean
  onClick: () => void
}

export const UserSection: React.FC<UserSectionProps> = ({
  userName,
  userAvatar,
  isMenuOpen,
  onClick
}) => {
  // Get initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <button
      onClick={onClick}
      style={{
        width: '100%',
        padding: '12px',
        margin: '0',
        marginTop: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        backgroundColor: 'transparent',
        border: 'none',
        borderRadius: '0',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
        fontFamily: 'inherit',
        outline: 'none',
        minHeight: '64px'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#f9fafb'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent'
      }}
    >
      {/* Avatar */}
      <div
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: userAvatar ? 'transparent' : '#dbeafe',
          color: '#1e40af',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '14px',
          fontWeight: 600,
          border: '1px solid #e5e7eb',
          overflow: 'hidden',
          flexShrink: 0
        }}
      >
        {userAvatar ? (
          <img src={userAvatar} alt={userName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          getInitials(userName)
        )}
      </div>

      {/* User Info */}
      <div style={{ flex: 1, textAlign: 'left', minWidth: 0 }}>
        <div style={{ fontSize: '14px', fontWeight: 600, color: '#111827' }}>
          {userName}
        </div>
        <div style={{ fontSize: '12px', color: '#6b7280' }}>
          Pro plan
        </div>
      </div>

      {/* Chevron */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        style={{
          color: '#9ca3af',
          transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.2s'
        }}
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
  )
}