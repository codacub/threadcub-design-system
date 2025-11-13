import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { UserSection } from '../components/UserSection'
import { UserMenu } from '../components/UserMenu'

const meta: Meta = {
  title: 'Navigation/UserMenuDemo',
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj

// Demo component that combines UserSection and UserMenu
const UserMenuDemo = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div
      style={{
        width: '280px',
        height: '600px',
        backgroundColor: 'white',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}
    >
      {/* Sidebar header */}
      <div style={{ padding: '16px', borderBottom: '1px solid #e5e7eb' }}>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>
          ThreadCub
        </h3>
      </div>

      {/* Nav items placeholder */}
      <div style={{ flex: 1, padding: '8px' }}>
        <div
          style={{
            padding: '12px',
            backgroundColor: '#ede9fe',
            borderRadius: '6px',
            fontSize: '14px',
            marginBottom: '8px'
          }}
        >
          Dashboard
        </div>
        <div style={{ padding: '12px', fontSize: '14px', marginBottom: '8px' }}>
          Projects
        </div>
        <div style={{ padding: '12px', fontSize: '14px', marginBottom: '8px' }}>
          Threads
        </div>
        <div style={{ padding: '12px', fontSize: '14px' }}>Import</div>
      </div>

      {/* UserMenu - now includes UserSection inside when open */}
      <UserMenu
        userEmail="mrteststu44@gmail.com"
        userName="Elliot Roberts"
        isOpen={isMenuOpen}
        onSettingsClick={() => {
          console.log('Settings clicked')
          setIsMenuOpen(false)
        }}
        onSignOutClick={() => {
          console.log('Sign out clicked')
          setIsMenuOpen(false)
        }}
        onUserSectionClick={() => setIsMenuOpen(false)}
      />

      {/* UserSection - only shows when menu is closed */}
      {!isMenuOpen && (
        <UserSection
          userName="Elliot Roberts"
          isMenuOpen={isMenuOpen}
          onClick={() => setIsMenuOpen(true)}
        />
      )}
    </div>
  )
}

export const Default: Story = {
  render: () => <UserMenuDemo />
}