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
          'Collapsible sidebar navigation component inspired by Calendly. Features user info, badge notifications, Lucide icons, and smooth collapse/expand transitions. Built with modular sub-components and full design token integration.'
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
            This is where your page content would go. The sidebar can be toggled by clicking the logo area.
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
              <li>Calendly-inspired design with light purple active states</li>
              <li>Clickable header area for easy collapse/expand</li>
              <li>Badge notifications with dot indicators when collapsed</li>
              <li>User section with avatar support</li>
              <li>Responsive touch targets (48px minimum when collapsed)</li>
              <li>Full keyboard navigation and focus indicators</li>
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
      description: 'Callback when user section is clicked'
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof SideNav>

// Sample navigation items with Lucide icons
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
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
    onClick: () => console.log('Navigate to Settings')
  }
]

const sampleUser = {
  name: 'Elliott Roberts',
  email: 'mrteststuff44@gmail.com'
}

// Default expanded state
export const Default: Story = {
  args: {
    items: sampleNavItems,
    user: sampleUser,
    defaultCollapsed: false
  }
}

// Collapsed state
export const Collapsed: Story = {
  args: {
    items: sampleNavItems,
    user: sampleUser,
    defaultCollapsed: true
  }
}

// Without user info
export const NoUser: Story = {
  args: {
    items: sampleNavItems,
    defaultCollapsed: false
  }
}

// High notification counts
export const HighBadgeCounts: Story = {
  args: {
    items: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
        active: true,
        badge: 3,
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
    user: sampleUser,
    defaultCollapsed: false
  }
}

// User with avatar
export const WithAvatar: Story = {
  args: {
    items: sampleNavItems,
    user: {
      ...sampleUser,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    defaultCollapsed: false
  }
}

// Minimal navigation
export const Minimal: Story = {
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
        id: 'settings',
        label: 'Settings',
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
        onClick: () => console.log('Navigate to Settings')
      }
    ],
    defaultCollapsed: false
  }
}

// Long navigation list (scrollable)
export const LongNavList: Story = {
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
        badge: 12,
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
        id: 'analytics',
        label: 'Analytics',
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 12l3-3 3 3 5-5"/></svg>`,
        onClick: () => console.log('Navigate to Analytics')
      },
      {
        id: 'reports',
        label: 'Reports',
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><polyline points="10,9 9,9 8,9"/></svg>`,
        onClick: () => console.log('Navigate to Reports')
      },
      {
        id: 'team',
        label: 'Team Management',
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
        badge: 3,
        onClick: () => console.log('Navigate to Team')
      },
      {
        id: 'billing',
        label: 'Billing',
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>`,
        onClick: () => console.log('Navigate to Billing')
      },
      {
        id: 'integrations',
        label: 'Integrations',
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7V3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4"/><path d="M7 15H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h4"/><circle cx="17" cy="17" r="3"/><path d="M19 19 21.5 21.5"/></svg>`,
        onClick: () => console.log('Navigate to Integrations')
      },
      {
        id: 'api',
        label: 'API Access',
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4-4V4c0-1.1.9-2 2-2h2l4 4h4a2 2 0 0 1 2 2v3"/><path d="M18 16v-3a2 2 0 0 0-2-2h-4l-4-4H6a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2h2l4 4h4a2 2 0 0 0 2-2Z"/></svg>`,
        onClick: () => console.log('Navigate to API')
      },
      {
        id: 'support',
        label: 'Support',
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>`,
        badge: 2,
        onClick: () => console.log('Navigate to Support')
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
        onClick: () => console.log('Navigate to Settings')
      }
    ],
    user: sampleUser,
    defaultCollapsed: false
  }
}

// Custom app name
export const CustomAppName: Story = {
  args: {
    items: sampleNavItems.slice(0, 3), // Shorter list for focus on header
    user: sampleUser,
    appName: 'My Custom App',
    defaultCollapsed: false
  }
}