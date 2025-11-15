import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { UserSection } from '../components/UserSection'
import { UserMenu } from '../components/UserMenu'

const meta: Meta<typeof UserMenu> = {
  title: 'Navigation/UserMenu',
  component: UserMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'User menu dropdown component that displays user information, settings, and sign out options.'
      }
    }
  },
  argTypes: {
    userEmail: {
      control: 'text',
      description: 'User email address'
    },
    userName: {
      control: 'text',
      description: 'User display name'
    },
    userAvatar: {
      control: 'text',
      description: 'URL to user avatar image'
    },
    isOpen: {
      control: 'boolean',
      description: 'Whether the menu is open'
    },
    onSettingsClick: {
      action: 'settings clicked',
      description: 'Callback when settings is clicked'
    },
    onSignOutClick: {
      action: 'sign out clicked',
      description: 'Callback when sign out is clicked'
    },
    onUserSectionClick: {
      action: 'user section clicked',
      description: 'Callback when user section is clicked'
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof UserMenu>

// Container wrapper for stories
const MenuContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      width: '280px',
      height: '300px',
      position: 'relative',
      backgroundColor: '#f9fafb',
      borderRadius: '8px',
      padding: '16px'
    }}
  >
    {children}
  </div>
)

// Basic open menu
export const Default: Story = {
  args: {
    userEmail: 'john.doe@example.com',
    userName: 'John Doe',
    isOpen: true,
    onSettingsClick: () => console.log('Settings clicked'),
    onSignOutClick: () => console.log('Sign out clicked'),
    onUserSectionClick: () => console.log('User section clicked')
  },
  render: (args) => (
    <MenuContainer>
      <UserMenu {...args} />
    </MenuContainer>
  )
}

// With avatar image
export const WithAvatar: Story = {
  args: {
    userEmail: 'jane.smith@company.com',
    userName: 'Jane Smith',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    isOpen: true,
    onSettingsClick: () => console.log('Settings clicked'),
    onSignOutClick: () => console.log('Sign out clicked'),
    onUserSectionClick: () => console.log('User section clicked')
  },
  render: (args) => (
    <MenuContainer>
      <UserMenu {...args} />
    </MenuContainer>
  )
}

// Without avatar (shows initials)
export const WithInitials: Story = {
  args: {
    userEmail: 'elliot.roberts@gmail.com',
    userName: 'Elliot Roberts',
    isOpen: true,
    onSettingsClick: () => console.log('Settings clicked'),
    onSignOutClick: () => console.log('Sign out clicked'),
    onUserSectionClick: () => console.log('User section clicked')
  },
  render: (args) => (
    <MenuContainer>
      <UserMenu {...args} />
    </MenuContainer>
  )
}

// Long email address
export const LongEmail: Story = {
  args: {
    userEmail: 'verylongemailaddress.that.might.overflow@longdomainname.company.com',
    userName: 'Alexander Thompson-Williams',
    isOpen: true,
    onSettingsClick: () => console.log('Settings clicked'),
    onSignOutClick: () => console.log('Sign out clicked'),
    onUserSectionClick: () => console.log('User section clicked')
  },
  render: (args) => (
    <MenuContainer>
      <UserMenu {...args} />
    </MenuContainer>
  )
}

// Single name (edge case)
export const SingleName: Story = {
  args: {
    userEmail: 'admin@threadcub.com',
    userName: 'Admin',
    isOpen: true,
    onSettingsClick: () => console.log('Settings clicked'),
    onSignOutClick: () => console.log('Sign out clicked'),
    onUserSectionClick: () => console.log('User section clicked')
  },
  render: (args) => (
    <MenuContainer>
      <UserMenu {...args} />
    </MenuContainer>
  )
}

// Closed state (should render nothing)
export const Closed: Story = {
  args: {
    userEmail: 'user@example.com',
    userName: 'Test User',
    isOpen: false,
    onSettingsClick: () => console.log('Settings clicked'),
    onSignOutClick: () => console.log('Sign out clicked'),
    onUserSectionClick: () => console.log('User section clicked')
  },
  render: (args) => (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <p style={{ marginBottom: '16px', color: '#6b7280' }}>
        Menu is closed (isOpen = false). Nothing should render below:
      </p>
      <MenuContainer>
        <UserMenu {...args} />
      </MenuContainer>
    </div>
  )
}

// Interactive demo with toggle
const InteractiveDemo = () => {
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

      {/* UserMenu - shows when open */}
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

export const Interactive: Story = {
  render: () => <InteractiveDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo showing the UserMenu in context with a sidebar. Click on the user section to toggle the menu.'
      }
    }
  }
}

// Interactive with avatar
const InteractiveWithAvatarDemo = () => {
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
      <div style={{ padding: '16px', borderBottom: '1px solid #e5e7eb' }}>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>ThreadCub</h3>
      </div>

      <div style={{ flex: 1, padding: '8px' }}>
        <div style={{ padding: '12px', fontSize: '14px', marginBottom: '8px' }}>Dashboard</div>
        <div style={{ padding: '12px', fontSize: '14px', marginBottom: '8px' }}>Projects</div>
      </div>

      <UserMenu
        userEmail="jane.smith@company.com"
        userName="Jane Smith"
        userAvatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
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

      {!isMenuOpen && (
        <UserSection
          userName="Jane Smith"
          userAvatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
          isMenuOpen={isMenuOpen}
          onClick={() => setIsMenuOpen(true)}
        />
      )}
    </div>
  )
}

export const InteractiveWithAvatar: Story = {
  render: () => <InteractiveWithAvatarDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo with user avatar image instead of initials.'
      }
    }
  }
}

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '24px',
        padding: '24px'
      }}
    >
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>
          With Initials
        </h4>
        <MenuContainer>
          <UserMenu
            userEmail="john.doe@example.com"
            userName="John Doe"
            isOpen={true}
            onSettingsClick={() => {}}
            onSignOutClick={() => {}}
            onUserSectionClick={() => {}}
          />
        </MenuContainer>
      </div>

      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>
          With Avatar
        </h4>
        <MenuContainer>
          <UserMenu
            userEmail="jane.smith@company.com"
            userName="Jane Smith"
            userAvatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
            isOpen={true}
            onSettingsClick={() => {}}
            onSignOutClick={() => {}}
            onUserSectionClick={() => {}}
          />
        </MenuContainer>
      </div>

      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>
          Long Email
        </h4>
        <MenuContainer>
          <UserMenu
            userEmail="verylongemailaddress@longdomainname.company.com"
            userName="Alexander Thompson"
            isOpen={true}
            onSettingsClick={() => {}}
            onSignOutClick={() => {}}
            onUserSectionClick={() => {}}
          />
        </MenuContainer>
      </div>

      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>
          Single Name
        </h4>
        <MenuContainer>
          <UserMenu
            userEmail="admin@threadcub.com"
            userName="Admin"
            isOpen={true}
            onSettingsClick={() => {}}
            onSignOutClick={() => {}}
            onUserSectionClick={() => {}}
          />
        </MenuContainer>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of all UserMenu variants including different user data scenarios.'
      }
    }
  }
}

// Different user types/roles (visual representation)
export const DifferentUserTypes: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px',
        padding: '24px'
      }}
    >
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 600, color: '#059669' }}>
          Pro User
        </h4>
        <MenuContainer>
          <UserMenu
            userEmail="pro.user@example.com"
            userName="Pro User"
            isOpen={true}
            onSettingsClick={() => {}}
            onSignOutClick={() => {}}
            onUserSectionClick={() => {}}
          />
        </MenuContainer>
      </div>

      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 600, color: '#7c3aed' }}>
          Team Member
        </h4>
        <MenuContainer>
          <UserMenu
            userEmail="team.member@company.com"
            userName="Team Member"
            userAvatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
            isOpen={true}
            onSettingsClick={() => {}}
            onSignOutClick={() => {}}
            onUserSectionClick={() => {}}
          />
        </MenuContainer>
      </div>

      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 600, color: '#dc2626' }}>
          Admin User
        </h4>
        <MenuContainer>
          <UserMenu
            userEmail="admin@threadcub.com"
            userName="System Admin"
            isOpen={true}
            onSettingsClick={() => {}}
            onSignOutClick={() => {}}
            onUserSectionClick={() => {}}
          />
        </MenuContainer>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Visual representation of different user types. Note: The current component shows "Pro plan" for all users. This could be extended to support different plan types.'
      }
    }
  }
}
