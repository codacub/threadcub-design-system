import type { Meta, StoryObj } from '@storybook/react'
import { SideNav } from '../components/SideNav'
import type { UserMenuItem } from '../components/UserMenu'
import '../styles/tokens.css'

const meta: Meta<typeof SideNav> = {
  title: 'Layout/SideNav',
  component: SideNav,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 
          'Collapsible sidebar navigation component inspired by Calendly and Claude. Features user menu with settings and sign out, badge notifications, Lucide icons, and smooth collapse/expand transitions. Built with modular sub-components and full design token integration.'
      }
    }
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', display: 'flex', fontFamily: 'var(--font-family-primary)' }}>
        <Story />
        <div style={{ 
          flex: 1, 
          backgroundColor: 'var(--color-gray-50)', 
          padding: 'var(--spacing-6)',
          overflow: 'auto'
        }}>
          <h1 style={{ 
            margin: '0 0 var(--spacing-3) 0', 
            color: 'var(--color-gray-900)',
            fontSize: 'var(--font-size-3xl)',
            fontWeight: 'var(--font-weight-bold)',
            fontFamily: 'var(--font-family-title)'
          }}>
            Main Content Area
          </h1>
          <p style={{ 
            color: 'var(--color-gray-600)', 
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-normal)',
            margin: '0 0 var(--spacing-4) 0'
          }}>
            This is where your page content would go. The sidebar can be toggled by clicking the logo area. Click the user section at the bottom to see the menu.
          </p>
          
          <div style={{
            padding: 'var(--spacing-4)',
            backgroundColor: 'var(--color-white)',
            borderRadius: 'var(--border-radius-lg)',
            border: `var(--border-width-thin) solid var(--color-border)`,
            boxShadow: 'var(--shadow-card)'
          }}>
            <h2 style={{
              margin: '0 0 var(--spacing-3) 0',
              fontSize: 'var(--font-size-lg)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--color-gray-900)'
            }}>
              SideNav Features
            </h2>
            <ul style={{
              margin: 0,
              paddingLeft: 'var(--spacing-5)',
              color: 'var(--color-gray-700)',
              lineHeight: 'var(--line-height-normal)'
            }}>
              <li>User menu with Settings and Sign Out (inspired by Claude)</li>
              <li>Calendly-inspired design with light purple active states</li>
              <li>Clickable header area for easy collapse/expand</li>
              <li>Badge notifications with dot indicators when collapsed</li>
              <li>User section with avatar support</li>
              <li>Responsive touch targets (48px minimum when collapsed)</li>
              <li>Full keyboard navigation and focus indicators</li>
              <li>Click outside to close menu</li>
              <li>Press Escape to close menu</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  ],
  argTypes: {
    defaultCollapsed: {
      control: 'boolean',
      description: 'Whether the sidebar starts collapsed',
      table: { defaultValue: { summary: 'false' } }
    },
    appName: {
      control: 'text',
      description: 'App name to display in header',
      table: { defaultValue: { summary: 'ThreadCub' } }
    },
    onCollapseChange: {
      action: 'collapse-changed',
      description: 'Callback when collapse state changes'
    },
    onUserClick: {
      action: 'user-clicked',
      description: 'Callback when user section is clicked (legacy)'
    },
    onSignOut: {
      action: 'sign-out',
      description: 'Callback when user signs out from menu'
    },
    onSettingsClick: {
      action: 'settings-clicked',
      description: 'Callback when user clicks Settings in menu'
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof SideNav>

// Sample navigation items - NO Settings in main nav anymore
const sampleNavItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
    active: true,
    onClick: () => console.log('Navigate to Dashboard')
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z"/><path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8"/><path d="M15 2v5h5"/></svg>`,
    onClick: () => console.log('Navigate to Projects')
  },
  {
    id: 'threads',
    label: 'Threads',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    badge: 24,
    onClick: () => console.log('Navigate to Threads')
  },
  {
    id: 'import',
    label: 'Import',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>`,
    onClick: () => console.log('Navigate to Import')
  }
]

// User menu items - Settings and Sign Out are HERE now
const sampleUserMenuItems: UserMenuItem[] = [
  {
    id: 'settings',
    label: 'Settings',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
    onClick: () => console.log('Navigate to Settings')
  },
  {
    id: 'language',
    label: 'Language',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
    showChevron: true,
    onClick: () => console.log('Open language menu')
  },
  {
    id: 'help',
    label: 'Get help',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>`,
    onClick: () => console.log('Get help'),
    divider: true // Add divider after this item
  },
  {
    id: 'upgrade',
    label: 'Upgrade plan',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 12l-4-4-4 4M12 16V8"/></svg>`,
    onClick: () => console.log('Upgrade plan')
  },
  {
    id: 'download',
    label: 'Download Claude for Mac',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>`,
    onClick: () => console.log('Download app')
  },
  {
    id: 'learn-more',
    label: 'Learn more',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`,
    showChevron: true,
    onClick: () => console.log('Learn more'),
    divider: true
  },
  {
    id: 'sign-out',
    label: 'Log out',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>`,
    onClick: () => console.log('Sign out'),
    destructive: true // Red styling for destructive action
  }
]

const sampleUser = {
  name: 'Elliott Roberts',
  email: 'elliot.roberts@gmail.com',
  plan: 'Pro plan'
}

// Default with user menu
export const Default: Story = {
  args: {
    items: sampleNavItems,
    userMenuItems: sampleUserMenuItems,
    user: sampleUser,
    defaultCollapsed: false
  }
}

// Collapsed state - menu doesn't open when collapsed
export const Collapsed: Story = {
  args: {
    items: sampleNavItems,
    userMenuItems: sampleUserMenuItems,
    user: sampleUser,
    defaultCollapsed: true
  }
}

// Without user menu items (backwards compatible)
export const NoUserMenu: Story = {
  args: {
    items: sampleNavItems,
    user: sampleUser,
    defaultCollapsed: false
  }
}

// Without user section at all
export const NoUser: Story = {
  args: {
    items: sampleNavItems,
    defaultCollapsed: false
  }
}

// Multiple badges
export const WithBadges: Story = {
  args: {
    items: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
        active: true,
        onClick: () => console.log('Navigate to Dashboard')
      },
      {
        id: 'projects',
        label: 'Projects',
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z"/><path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8"/><path d="M15 2v5h5"/></svg>`,
        badge: 42,
        onClick: () => console.log('Navigate to Projects')
      },
      {
        id: 'threads',
        label: 'Threads',
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
        badge: 156,
        onClick: () => console.log('Navigate to Threads')
      },
      {
        id: 'notifications',
        label: 'Notifications',
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
        badge: 8,
        onClick: () => console.log('Navigate to Notifications')
      }
    ],
    userMenuItems: sampleUserMenuItems,
    user: sampleUser,
    defaultCollapsed: false
  }
}

// Different active states
export const ThreadsActive: Story = {
  args: {
    items: sampleNavItems.map(item => ({
      ...item,
      active: item.id === 'threads'
    })),
    userMenuItems: sampleUserMenuItems,
    user: sampleUser,
    defaultCollapsed: false
  }
}

// User with avatar
export const WithAvatar: Story = {
  args: {
    items: sampleNavItems,
    userMenuItems: sampleUserMenuItems,
    user: {
      ...sampleUser,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    defaultCollapsed: false
  }
}

// Minimal user menu (just settings and sign out)
export const MinimalUserMenu: Story = {
  args: {
    items: sampleNavItems,
    userMenuItems: [
      {
        id: 'settings',
        label: 'Settings',
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
        onClick: () => console.log('Navigate to Settings'),
        divider: true
      },
      {
        id: 'sign-out',
        label: 'Log out',
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>`,
        onClick: () => console.log('Sign out'),
        destructive: true
      }
    ],
    user: sampleUser,
    defaultCollapsed: false
  }
}

// Custom app name
export const CustomAppName: Story = {
  args: {
    items: sampleNavItems.slice(0, 3),
    userMenuItems: sampleUserMenuItems,
    user: sampleUser,
    appName: 'My Custom App',
    defaultCollapsed: false
  }
}

// Realistic ThreadCub setup
export const ThreadCubRealistic: Story = {
  args: {
    items: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
        active: false,
        onClick: () => console.log('Navigate to Dashboard')
      },
      {
        id: 'threads',
        label: 'Threads',
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
        active: true,
        badge: 47,
        onClick: () => console.log('Navigate to Threads')
      },
      {
        id: 'projects',
        label: 'Projects',
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z"/><path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8"/><path d="M15 2v5h5"/></svg>`,
        badge: 3,
        onClick: () => console.log('Navigate to Projects')
      },
      {
        id: 'import',
        label: 'Import',
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>`,
        onClick: () => console.log('Navigate to Import')
      }
    ],
    userMenuItems: [
      {
        id: 'settings',
        label: 'Settings',
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
        onClick: () => console.log('Navigate to Settings'),
        divider: true
      },
      {
        id: 'sign-out',
        label: 'Log out',
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>`,
        onClick: () => console.log('Sign out'),
        destructive: true
      }
    ],
    user: sampleUser,
    defaultCollapsed: false
  }
}

// Default menu (no userMenuItems provided - uses built-in Settings + Sign Out)
export const DefaultMenu: Story = {
  args: {
    items: sampleNavItems,
    // No userMenuItems prop - will use default Settings + Sign Out
    user: sampleUser,
    defaultCollapsed: false,
    onSignOut: () => console.log('Sign out'),
    onSettingsClick: () => console.log('Navigate to Settings')
  },
  parameters: {
    docs: {
      description: {
        story: 'When userMenuItems is not provided, SideNav automatically creates a default menu with Settings and Sign Out options. Just provide the onSignOut and onSettingsClick callbacks.'
      }
    }
  }
}