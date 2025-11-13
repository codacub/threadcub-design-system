import type { Meta, StoryObj } from '@storybook/react'
import { SideNav } from '../components/SideNav'
import '../styles/tokens.css'

const meta: Meta<typeof SideNav> = {
  title: 'Layout/SideNav',
  component: SideNav,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 
          'Collapsible sidebar navigation with user menu. Click the user section at the bottom to see Settings and Sign Out menu.'
      }
    }
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', display: 'flex', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
        <Story />
        <div style={{ 
          flex: 1, 
          backgroundColor: '#f9fafb', 
          padding: '24px',
          overflow: 'auto'
        }}>
          <h1 style={{ 
            margin: '0 0 12px 0', 
            color: '#111827',
            fontSize: '30px',
            fontWeight: 700
          }}>
            Main Content Area
          </h1>
          <p style={{ 
            color: '#6b7280', 
            fontSize: '16px',
            margin: '0'
          }}>
            Click the user section at the bottom of the sidebar to open the menu with Settings and Sign Out.
          </p>
        </div>
      </div>
    ),
  ],
  argTypes: {
    defaultCollapsed: {
      control: 'boolean',
      description: 'Whether the sidebar starts collapsed'
    },
    appName: {
      control: 'text',
      description: 'App name to display in header'
    },
    onSignOut: {
      action: 'sign-out',
      description: 'Callback when user signs out'
    },
    onSettingsClick: {
      action: 'settings-clicked',
      description: 'Callback when user clicks Settings'
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof SideNav>

// Sample navigation items
const sampleNavItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
    active: true,
    onClick: () => console.log('Navigate to Dashboard')
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z"/><path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8"/><path d="M15 2v5h5"/></svg>`,
    onClick: () => console.log('Navigate to Projects')
  },
  {
    id: 'threads',
    label: 'Threads',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    badge: 24,
    onClick: () => console.log('Navigate to Threads')
  },
  {
    id: 'import',
    label: 'Import',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>`,
    onClick: () => console.log('Navigate to Import')
  }
]

const sampleUser = {
  name: 'Elliot Roberts',
  email: 'mrteststu44@gmail.com',
  plan: 'Pro plan'
}

// Default story
export const Default: Story = {
  args: {
    items: sampleNavItems,
    user: sampleUser,
    defaultCollapsed: false,
    onSignOut: () => console.log('Sign out clicked'),
    onSettingsClick: () => console.log('Settings clicked')
  }
}

// Collapsed sidebar
export const Collapsed: Story = {
  args: {
    items: sampleNavItems,
    user: sampleUser,
    defaultCollapsed: true,
    onSignOut: () => console.log('Sign out clicked'),
    onSettingsClick: () => console.log('Settings clicked')
  }
}

// Without user
export const NoUser: Story = {
  args: {
    items: sampleNavItems,
    defaultCollapsed: false
  }
}

// With avatar
export const WithAvatar: Story = {
  args: {
    items: sampleNavItems,
    user: {
      ...sampleUser,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    },
    defaultCollapsed: false,
    onSignOut: () => console.log('Sign out clicked'),
    onSettingsClick: () => console.log('Settings clicked')
  }
}

// Custom app name
export const CustomAppName: Story = {
  args: {
    items: sampleNavItems.slice(0, 3),
    user: sampleUser,
    appName: 'My App',
    defaultCollapsed: false,
    onSignOut: () => console.log('Sign out clicked'),
    onSettingsClick: () => console.log('Settings clicked')
  }
}