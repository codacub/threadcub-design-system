import React from 'react'

export interface UserMenuProps {
  userEmail: string
  userName: string
  userAvatar?: string
  isOpen: boolean
  onSettingsClick: () => void
  onSignOutClick: () => void
  onUserSectionClick: () => void
}

export const UserMenu: React.FC<UserMenuProps> = ({
  userEmail,
  userName,
  userAvatar,
  isOpen,
  onSettingsClick,
  onSignOutClick,
  onUserSectionClick
}) => {
  if (!isOpen) return null

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
    <div
      style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        backgroundColor: 'white',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        zIndex: 1000,
        animation: 'slideUp 0.15s ease-out',
        overflow: 'hidden'
      }}
    >
      {/* Email header */}
      <div style={{ padding: '12px' }}>
        <div
          style={{
            fontSize: '12px',
            color: '#6b7280',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}
        >
          {userEmail}
        </div>
      </div>

      {/* Settings button */}
      <button
        onClick={onSettingsClick}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '8px 12px',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 500,
          color: '#374151',
          fontFamily: 'inherit',
          outline: 'none',
          transition: 'background-color 0.15s',
          textAlign: 'left'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#f3f4f6'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent'
        }}
      >
        {/* Settings icon */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        <span>Settings</span>
      </button>

      {/* Sign out button */}
      <button
        onClick={onSignOutClick}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '8px 12px',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 500,
          color: '#374151',
          fontFamily: 'inherit',
          outline: 'none',
          transition: 'background-color 0.15s',
          textAlign: 'left'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#f3f4f6'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent'
        }}
      >
        {/* Sign out icon */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" x2="9" y1="12" y2="12" />
        </svg>
        <span>Sign out</span>
      </button>

      {/* User Section at bottom - inside the bordered container */}
      <button
        onClick={onUserSectionClick}
        style={{
          width: '100%',
          padding: '12px',
          margin: '0',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          backgroundColor: 'transparent',
          border: 'none',
          borderTop: '1px solid #e5e7eb',
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

        {/* Chevron pointing down */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{
            color: '#9ca3af'
          }}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {/* Animation */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}