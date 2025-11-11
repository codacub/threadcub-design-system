import type { Meta, StoryObj } from '@storybook/react'
import { UserMenu } from '../components/UserMenu'
import type { UserMenuItem } from '../components/UserMenu'
import '../styles/tokens.css'

const meta: Meta<typeof UserMenu> = {
  title: 'Navigation/UserMenu',
  component: UserMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 
          'Dropdown menu that appears when clicking the user section in the sidebar. Inspired by Claude\'s user menu design with support for icons, chevrons, dividers, and destructive actions.'
      }
    }
  },
  decorators: [
    (Story) => (
      <div style={{ 
        width: '280px', 
        height: '500px',
        backgroundColor: 'var(--color-gray-50)',
        padding: 'var(--spacing-4)',
        fontFamily: 'var(--font-family-primary)',
        position: 'relative'
      }}>
        <div style={{
          padding: 'var(--spacing-4)',
          backgroundColor: 'var(--color-white)',
          borderRadius: 'var(--border-radius-lg)',
          border: `var(--border-width-thin) solid var(--color-gray-200)`
        }}>
          <p style={{ 
            margin: 0,
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-gray-600)'
          }}>
            This menu typically appears above the user section in the sidebar when clicked.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Whether the menu is currently open',
      table: { defaultValue: { summary: 'false' } }
    },
    userEmail: {
      control: 'text',
      description: 'User email to display in menu header'
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof UserMenu>

// Full Claude-inspired menu
const fullMenuItems: UserMenuItem[] = [
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
    divider: true
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
    destructive: true
  }
]

// Open state with full menu
export const Open: Story = {
  args: {
    items: fullMenuItems,
    isOpen: true,
    userEmail: 'elliot.roberts@gmail.com'
  }
}

// Closed state (won't render anything)
export const Closed: Story = {
  args: {
    items: fullMenuItems,
    isOpen: false,
    userEmail: 'elliot.roberts@gmail.com'
  }
}

// Minimal menu (just settings and sign out)
export const Minimal: Story = {
  args: {
    items: [
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
    isOpen: true,
    userEmail: 'user@example.com'
  }
}

// Without email header
export const NoEmail: Story = {
  args: {
    items: fullMenuItems,
    isOpen: true
  }
}

// With keyboard shortcuts shown
export const WithKeyboardShortcuts: Story = {
  args: {
    items: [
      {
        id: 'settings',
        label: 'Settings',
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
        onClick: () => console.log('Navigate to Settings')
      },
      {
        id: 'profile',
        label: 'Profile',
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
        onClick: () => console.log('View profile'),
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
    isOpen: true,
    userEmail: 'user@example.com'
  }
}

// Long menu (scrollable)
export const LongMenu: Story = {
  args: {
    items: [
      ...fullMenuItems,
      {
        id: 'profile',
        label: 'Profile',
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
        onClick: () => console.log('View profile')
      },
      {
        id: 'billing',
        label: 'Billing',
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>`,
        onClick: () => console.log('View billing')
      },
      {
        id: 'notifications',
        label: 'Notifications',
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
        onClick: () => console.log('View notifications')
      },
      {
        id: 'privacy',
        label: 'Privacy & Security',
        icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>`,
        onClick: () => console.log('View privacy settings')
      }
    ],
    isOpen: true,
    userEmail: 'user@example.com'
  }
}