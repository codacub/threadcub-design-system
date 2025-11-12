import React from 'react'

export interface UserMenuItem {
  /** Unique identifier */
  id: string
  /** Display label */
  label: string
  /** Lucide icon SVG string */
  icon: string
  /** Click handler */
  onClick?: () => void
  /** Show chevron right indicator */
  showChevron?: boolean
  /** Divider after this item */
  divider?: boolean
  /** Destructive action styling (for sign out) */
  destructive?: boolean
}

export interface UserMenuProps {
  /** Menu items */
  items: UserMenuItem[]
  /** Whether menu is currently open */
  isOpen: boolean
  /** User email for header */
  userEmail?: string
  /** Custom className */
  className?: string
}

export const UserMenu: React.FC<UserMenuProps> = ({
  items,
  isOpen,
  userEmail,
  className = ''
}) => {
  if (!isOpen) return null

  return (
    <div
      className={className}
      style={{
        position: 'absolute',
        bottom: '80px', // Just above the user section
        left: '0',
        right: '0',
        backgroundColor: 'transparent',
        padding: '0 var(--spacing-2)',
        paddingBottom: 'var(--spacing-2)',
        zIndex: 1000,
        maxHeight: 'calc(100vh - 160px)',
        overflowY: 'auto',
        // Subtle animation
        animation: 'slideUpFade 0.15s ease-out'
      }}
    >
      {/* Email header */}
      {userEmail && (
        <div
          style={{
            padding: 'var(--spacing-2) var(--spacing-3)',
            marginBottom: 'var(--spacing-1)',
            borderBottom: `var(--border-width-thin) solid var(--color-gray-200)`
          }}
        >
          <div
            style={{
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-gray-500)',
              fontWeight: 'var(--font-weight-normal)',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}
          >
            {userEmail}
          </div>
        </div>
      )}

      {/* Menu items */}
      {items.map((item, index) => (
        <React.Fragment key={item.id}>
          <button
            onClick={item.onClick}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-3)',
              padding: 'var(--spacing-2) var(--spacing-3)',
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: 'var(--border-radius-md)',
              cursor: 'pointer',
              fontSize: 'var(--font-size-sm)',
              fontWeight: 'var(--font-weight-medium)',
              color: item.destructive ? 'var(--color-red-600)' : 'var(--color-gray-700)',
              textAlign: 'left',
              transition: 'background-color var(--transition-base)',
              fontFamily: 'inherit',
              outline: 'none',
              marginBottom: 'var(--spacing-1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = item.destructive 
                ? 'var(--color-red-50)' 
                : 'var(--color-gray-100)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
            onFocus={(e) => {
              e.currentTarget.style.outline = `2px solid var(--color-primary-500)`
              e.currentTarget.style.outlineOffset = '-2px'
            }}
            onBlur={(e) => {
              e.currentTarget.style.outline = 'none'
            }}
          >
            {/* Icon */}
            <span
              style={{
                width: '20px',
                height: '20px',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'inherit'
              }}
              dangerouslySetInnerHTML={{ __html: item.icon }}
            />

            {/* Label */}
            <span style={{ flex: 1 }}>
              {item.label}
            </span>

            {/* Chevron */}
            {item.showChevron && (
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
                  flexShrink: 0,
                  color: 'var(--color-gray-400)'
                }}
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            )}
          </button>

          {/* Divider */}
          {item.divider && index < items.length - 1 && (
            <div
              style={{
                height: '1px',
                backgroundColor: 'var(--color-gray-200)',
                margin: 'var(--spacing-1) 0'
              }}
            />
          )}
        </React.Fragment>
      ))}

      {/* CSS animation */}
      <style>{`
        @keyframes slideUpFade {
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

export default UserMenu