import type { Meta, StoryObj } from '@storybook/react'
import { AppLayout } from '../components/AppLayout'

const meta: Meta<typeof AppLayout> = {
  title: 'Layout/AppLayout',
  component: AppLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete application layout with sidebar navigation and main content area'
      }
    }
  },
  argTypes: {
    defaultSidebarCollapsed: {
      control: 'boolean',
      description: 'Whether the sidebar starts collapsed'
    }
  }
}

export default meta
type Story = StoryObj<typeof AppLayout>

// Sample navigation items matching your app structure
const navItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
    active: true,
    onClick: () => console.log('Navigate to Dashboard')
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z"/><path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8"/><path d="M15 2v5h5"/></svg>`,
    onClick: () => console.log('Navigate to Projects')
  },
  {
    id: 'threads',
    label: 'Threads',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    badge: 24,
    onClick: () => console.log('Navigate to Threads')
  },
  {
    id: 'import',
    label: 'Import',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>`,
    onClick: () => console.log('Navigate to Import')
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
    onClick: () => console.log('Navigate to Settings')
  }
]

const sampleUser = {
  name: 'Elliott Roberts',
  email: 'mrteststuff44@gmail.com'
}

// Dashboard Content Component
const DashboardContent = () => (
  <div>
    <div 
      className="mb-6"
      style={{ marginBottom: 'var(--spacing-lg)' }}
    >
      <h1 
        style={{
          fontSize: 'var(--font-size-2xl)',
          fontWeight: 'var(--font-weight-bold)',
          color: 'var(--color-text-primary)',
          marginBottom: 'var(--spacing-xs)'
        }}
      >
        ThreadCub Dashboard
      </h1>
      <p 
        style={{
          fontSize: 'var(--font-size-md)',
          color: 'var(--color-text-secondary)'
        }}
      >
        Welcome back, Elliott! Here's what's happening with your conversations.
      </p>
    </div>

    {/* Stats Cards */}
    <div 
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
      style={{ 
        gap: 'var(--spacing-lg)',
        marginBottom: 'var(--spacing-xl)'
      }}
    >
      <div 
        className="bg-white rounded-lg border p-6"
        style={{
          backgroundColor: 'var(--color-background)',
          borderRadius: 'var(--border-radius-lg)',
          border: `1px solid var(--color-gray-200)`,
          padding: 'var(--spacing-lg)'
        }}
      >
        <h3 
          style={{
            fontSize: 'var(--font-size-sm)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--spacing-xs)'
          }}
        >
          Conversations
        </h3>
        <p 
          style={{
            fontSize: 'var(--font-size-2xl)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-primary)'
          }}
        >
          1
        </p>
      </div>

      <div 
        className="bg-white rounded-lg border p-6"
        style={{
          backgroundColor: 'var(--color-background)',
          borderRadius: 'var(--border-radius-lg)',
          border: `1px solid var(--color-gray-200)`,
          padding: 'var(--spacing-lg)'
        }}
      >
        <h3 
          style={{
            fontSize: 'var(--font-size-sm)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--spacing-xs)'
          }}
        >
          Total Messages
        </h3>
        <p 
          style={{
            fontSize: 'var(--font-size-2xl)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-success)'
          }}
        >
          12
        </p>
      </div>

      <div 
        className="bg-white rounded-lg border p-6"
        style={{
          backgroundColor: 'var(--color-background)',
          borderRadius: 'var(--border-radius-lg)',
          border: `1px solid var(--color-gray-200)`,
          padding: 'var(--spacing-lg)'
        }}
      >
        <h3 
          style={{
            fontSize: 'var(--font-size-sm)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--spacing-xs)'
          }}
        >
          AI Analyses
        </h3>
        <p 
          style={{
            fontSize: 'var(--font-size-2xl)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-secondary)'
          }}
        >
          0
        </p>
      </div>
    </div>

    {/* Recent Conversations */}
    <div 
      className="bg-white rounded-lg border"
      style={{
        backgroundColor: 'var(--color-background)',
        borderRadius: 'var(--border-radius-lg)',
        border: `1px solid var(--color-gray-200)`
      }}
    >
      <div 
        className="p-6 border-b"
        style={{
          padding: 'var(--spacing-lg)',
          borderBottom: `1px solid var(--color-gray-200)`
        }}
      >
        <h2 
          style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--color-text-primary)'
          }}
        >
          Your Conversations
        </h2>
        <p 
          style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-text-secondary)',
            marginTop: 'var(--spacing-xs)'
          }}
        >
          Click analyze to get AI-powered insights and next steps
        </p>
      </div>
      
      <div 
        className="p-6"
        style={{ padding: 'var(--spacing-lg)' }}
      >
        <div 
          className="flex items-center justify-between p-4 rounded-lg border"
          style={{
            padding: 'var(--spacing-md)',
            borderRadius: 'var(--border-radius-md)',
            border: `1px solid var(--color-gray-200)`
          }}
        >
          <div>
            <h3 
              style={{
                fontSize: 'var(--font-size-md)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--color-text-primary)',
                marginBottom: 'var(--spacing-xs)'
              }}
            >
              Google Gemini for Coding
            </h3>
            <div 
              className="flex items-center gap-4 text-sm"
              style={{
                gap: 'var(--spacing-md)',
                fontSize: 'var(--font-size-sm)',
                color: 'var(--color-text-secondary)'
              }}
            >
              <span>Chatgpt</span>
              <span>12 messages</span>
              <span>11/08/2025</span>
            </div>
          </div>
          
          <div 
            className="flex items-center gap-2"
            style={{ gap: 'var(--spacing-sm)' }}
          >
            <button 
              className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium"
              style={{
                padding: 'var(--spacing-sm) var(--spacing-md)',
                backgroundColor: 'var(--color-secondary-50)',
                color: 'var(--color-secondary)',
                borderRadius: 'var(--border-radius-md)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              🔍 Analyze
            </button>
            <button 
              className="px-4 py-2 bg-green-100 text-green-700 rounded-lg text-sm font-medium"
              style={{
                padding: 'var(--spacing-sm) var(--spacing-md)',
                backgroundColor: 'var(--color-success-50)',
                color: 'var(--color-success)',
                borderRadius: 'var(--border-radius-md)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              📱 Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

// Default dashboard layout
export const Dashboard: Story = {
  args: {
    navItems,
    user: sampleUser,
    defaultSidebarCollapsed: false,
    children: <DashboardContent />
  }
}

// Collapsed sidebar
export const CollapsedSidebar: Story = {
  args: {
    navItems,
    user: sampleUser,
    defaultSidebarCollapsed: true,
    children: <DashboardContent />
  }
}

// Projects page layout
export const ProjectsPage: Story = {
  args: {
    navItems: navItems.map(item => ({
      ...item,
      active: item.id === 'projects'
    })),
    user: sampleUser,
    defaultSidebarCollapsed: false,
    children: (
      <div>
        <div 
          className="flex items-center justify-between mb-6"
          style={{ marginBottom: 'var(--spacing-lg)' }}
        >
          <div>
            <h1 
              style={{
                fontSize: 'var(--font-size-2xl)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--color-text-primary)',
                marginBottom: 'var(--spacing-xs)'
              }}
            >
              Your Projects
            </h1>
            <p 
              style={{
                fontSize: 'var(--font-size-md)',
                color: 'var(--color-text-secondary)'
              }}
            >
              0 projects • 24 total conversations
            </p>
          </div>
          <button 
            className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium"
            style={{
              padding: 'var(--spacing-sm) var(--spacing-md)',
              backgroundColor: 'var(--color-primary)',
              color: 'white',
              borderRadius: 'var(--border-radius-md)',
              fontWeight: 'var(--font-weight-medium)',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            + New Project
          </button>
        </div>
        
        <div 
          className="bg-white rounded-lg border p-8 text-center"
          style={{
            backgroundColor: 'var(--color-background)',
            borderRadius: 'var(--border-radius-lg)',
            border: `1px solid var(--color-gray-200)`,
            padding: 'var(--spacing-xl)',
            textAlign: 'center'
          }}
        >
          <p 
            style={{
              fontSize: 'var(--font-size-lg)',
              color: 'var(--color-text-secondary)'
            }}
          >
            No projects yet. Create your first project to organize your conversations.
          </p>
        </div>
      </div>
    )
  }
}

// Threads page layout
export const ThreadsPage: Story = {
  args: {
    navItems: navItems.map(item => ({
      ...item,
      active: item.id === 'threads'
    })),
    user: sampleUser,
    defaultSidebarCollapsed: false,
    children: (
      <div>
        <div 
          className="mb-6"
          style={{ marginBottom: 'var(--spacing-lg)' }}
        >
          <h1 
            style={{
              fontSize: 'var(--font-size-2xl)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--spacing-xs)'
            }}
          >
            Threads
          </h1>
          <p 
            style={{
              fontSize: 'var(--font-size-md)',
              color: 'var(--color-text-secondary)'
            }}
          >
            View and manage your conversation threads
          </p>
        </div>

        <div className="space-y-4">
          {[
            'Retrieving Conversation Context - Claude',
            'ThreadCub API Conversation Retrieval - Claude', 
            'Tue 19 Aug 19:30 - Storybook is working (ish) - Claude'
          ].map((title, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg border p-6"
              style={{
                backgroundColor: 'var(--color-background)',
                borderRadius: 'var(--border-radius-lg)',
                border: `1px solid var(--color-gray-200)`,
                padding: 'var(--spacing-lg)'
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 
                    style={{
                      fontSize: 'var(--font-size-md)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--color-text-primary)',
                      marginBottom: 'var(--spacing-xs)'
                    }}
                  >
                    {title}
                  </h3>
                  <div 
                    className="flex items-center gap-4 text-sm"
                    style={{
                      gap: 'var(--spacing-md)',
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--color-text-secondary)'
                    }}
                  >
                    <span>Source: claude.ai</span>
                    <span>Aug 20, 2025, 04:56 PM</span>
                  </div>
                </div>
                <button 
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium"
                  style={{
                    padding: 'var(--spacing-sm) var(--spacing-md)',
                    backgroundColor: 'var(--color-primary-50)',
                    color: 'var(--color-primary)',
                    borderRadius: 'var(--border-radius-md)',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

// Without user info
export const NoUser: Story = {
  args: {
    navItems,
    defaultSidebarCollapsed: false,
    children: <DashboardContent />
  }
}