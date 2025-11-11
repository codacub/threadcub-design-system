import type { Meta, StoryObj } from '@storybook/react'
import { AppLayout } from '../components/AppLayout'
import { Button } from '../components/Button' // ✅ FIXED import path
import { Heading } from '../components/Heading' // ✅ ADD Heading component

const meta: Meta<typeof AppLayout> = {
  title: 'Layout/AppLayout',
  component: AppLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete application layout with sidebar navigation and main content area. Content now extends full width with no internal padding.'
      }
    }
  },
  argTypes: {
    defaultSidebarCollapsed: {
      control: 'boolean',
      description: 'Whether the sidebar starts collapsed'
    },
    onSignOut: {
      action: 'sign-out',
      description: 'Callback when user signs out from the user menu'
    },
    onSettingsClick: {
      action: 'settings-clicked',
      description: 'Callback when user clicks Settings in the menu'
    }
  }
}

export default meta
type Story = StoryObj<typeof AppLayout>

// Sample navigation items matching your app structure (NO Settings - it's in user menu now)
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
  }
]

const sampleUser = {
  name: 'Elliott Roberts',
  email: 'mrteststuff44@gmail.com'
}

// Dashboard Content Component - Updated with proper padding
const DashboardContent = () => (
  <div style={{ padding: 'var(--spacing-8) var(--spacing-6)' }}>
    <div 
      style={{ marginBottom: 'var(--spacing-6)' }}
    >
      <Heading level={1} margin="sm" color="primary">
        ThreadCub Dashboard
      </Heading>
      <p 
        style={{
          fontSize: 'var(--font-size-base)',
          color: 'var(--color-text-secondary)'
        }}
      >
        Welcome back, Elliott! Here's what's happening with your conversations.
      </p>
    </div>

   {/* Stats Cards - keep existing code */}
    <div 
      style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: 'var(--spacing-6)',
        marginBottom: 'var(--spacing-8)'
      }}
    >
      <div 
        style={{
          backgroundColor: 'var(--color-white)',
          borderRadius: 'var(--border-radius-lg)',
          border: `1px solid var(--color-gray-200)`,
          padding: 'var(--spacing-6)',
          boxShadow: 'var(--shadow-card)'
        }}
      >
        <h3 
          style={{
            fontSize: 'var(--font-size-sm)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--spacing-2)'
          }}
        >
          Conversations
        </h3>
        <p 
          style={{
            fontSize: 'var(--font-size-2xl)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-primary)',
            margin: '0'
          }}
        >
          1
        </p>
      </div>

      <div 
        style={{
          backgroundColor: 'var(--color-white)',
          borderRadius: 'var(--border-radius-lg)',
          border: `1px solid var(--color-gray-200)`,
          padding: 'var(--spacing-6)',
          boxShadow: 'var(--shadow-card)'
        }}
      >
        <h3 
          style={{
            fontSize: 'var(--font-size-sm)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--spacing-2)'
          }}
        >
          Total Messages
        </h3>
        <p 
          style={{
            fontSize: 'var(--font-size-2xl)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-success)',
            margin: '0'
          }}
        >
          12
        </p>
      </div>

      <div 
        style={{
          backgroundColor: 'var(--color-white)',
          borderRadius: 'var(--border-radius-lg)',
          border: `1px solid var(--color-gray-200)`,
          padding: 'var(--spacing-6)',
          boxShadow: 'var(--shadow-card)'
        }}
      >
        <h3 
          style={{
            fontSize: 'var(--font-size-sm)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--spacing-2)'
          }}
        >
          AI Analyses
        </h3>
        <p 
          style={{
            fontSize: 'var(--font-size-2xl)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-info)',
            margin: '0'
          }}
        >
          0
        </p>
      </div>
    </div>

    {/* Recent Conversations */}
    <div 
      style={{
        backgroundColor: 'var(--color-white)',
        borderRadius: 'var(--border-radius-lg)',
        border: `1px solid var(--color-gray-200)`,
        boxShadow: 'var(--shadow-card)'
      }}
    >
      <div 
        style={{
          padding: 'var(--spacing-6)',
          borderBottom: `1px solid var(--color-gray-200)`
        }}
      >
        <Heading level={2} margin="none" color="primary">
          Your Conversations
        </Heading>
        <p 
          style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-text-secondary)',
            margin: 'var(--spacing-1) 0 0 0'
          }}
        >
          Click analyze to get AI-powered insights and next steps
        </p>
      </div>
      
      <div 
        style={{ padding: 'var(--spacing-6)' }}
      >
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 'var(--spacing-4)',
            borderRadius: 'var(--border-radius-lg)',
            border: `1px solid var(--color-gray-200)`,
            backgroundColor: 'var(--color-gray-50)'
          }}
        >
          <div>
            <h3 
              style={{
                fontSize: 'var(--font-size-base)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--color-text-primary)',
                margin: '0 0 var(--spacing-2) 0'
              }}
            >
              Google Gemini for Coding
            </h3>
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-4)',
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
            style={{ 
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-2)' 
            }}
          >
            <Button variant="secondary" size="sm">Analyze</Button>
            <Button variant="primary" size="sm">Continue</Button>
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
    onSignOut: () => console.log('Sign out'),
    onSettingsClick: () => console.log('Navigate to Settings'),
    children: <DashboardContent />
  }
}

// Collapsed sidebar
export const CollapsedSidebar: Story = {
  args: {
    navItems,
    user: sampleUser,
    defaultSidebarCollapsed: true,
    onSignOut: () => console.log('Sign out'),
    onSettingsClick: () => console.log('Navigate to Settings'),
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
    onSignOut: () => console.log('Sign out'),
    onSettingsClick: () => console.log('Navigate to Settings'),
    children: (
      <div style={{ padding: 'var(--spacing-8) var(--spacing-6)' }}>
        <div 
          style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 'var(--spacing-6)' 
          }}
        >
          <div>
            <Heading level={1} margin="sm" color="primary">
              Your Projects
            </Heading>
            <p 
              style={{
                fontSize: 'var(--font-size-base)',
                color: 'var(--color-text-secondary)',
                margin: '0'
              }}
            >
              0 projects • 24 total conversations
            </p>
          </div>
          <Button variant="primary" size="md">
            + New Project
          </Button>
        </div>
        
        <div 
          style={{
            backgroundColor: 'var(--color-white)',
            borderRadius: 'var(--border-radius-lg)',
            border: `1px solid var(--color-gray-200)`,
            padding: 'var(--spacing-8)',
            textAlign: 'center',
            boxShadow: 'var(--shadow-card)'
          }}
        >
          <p 
            style={{
              fontSize: 'var(--font-size-lg)',
              color: 'var(--color-text-secondary)',
              margin: '0'
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
    onSignOut: () => console.log('Sign out'),
    onSettingsClick: () => console.log('Navigate to Settings'),
    children: (
      <div style={{ padding: 'var(--spacing-8) var(--spacing-6)' }}>
        <div 
          style={{ marginBottom: 'var(--spacing-6)' }}
        >
          <Heading level={1} margin="sm" color="primary">
            Threads
          </Heading>
          <p 
            style={{
              fontSize: 'var(--font-size-base)',
              color: 'var(--color-text-secondary)',
              margin: '0'
            }}
          >
            View and manage your conversation threads
          </p>
        </div>

        <div style={{ display: 'grid', gap: 'var(--spacing-4)' }}>
          {[
            'Retrieving Conversation Context - Claude',
            'ThreadCub API Conversation Retrieval - Claude', 
            'Tue 19 Aug 19:30 - Storybook is working (ish) - Claude'
          ].map((title, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: 'var(--color-white)',
                borderRadius: 'var(--border-radius-lg)',
                border: `1px solid var(--color-gray-200)`,
                padding: 'var(--spacing-6)',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between' 
              }}>
                <div>
                  <h3 
                    style={{
                      fontSize: 'var(--font-size-base)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--color-text-primary)',
                      margin: '0 0 var(--spacing-2) 0'
                    }}
                  >
                    {title}
                  </h3>
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--spacing-4)',
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--color-text-secondary)'
                    }}
                  >
                    <span>Source: claude.ai</span>
                    <span>Aug 20, 2025, 04:56 PM</span>
                  </div>
                </div>
                <Button variant="primary" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

// Full width demonstration
export const FullWidthDemo: Story = {
  args: {
    navItems,
    user: sampleUser,
    defaultSidebarCollapsed: false,
    onSignOut: () => console.log('Sign out'),
    onSettingsClick: () => console.log('Navigate to Settings'),
    children: (
      <div>
        {/* Full width banner */}
        <div 
          style={{
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-white)',
            padding: 'var(--spacing-4) var(--spacing-6)',
            marginBottom: 'var(--spacing-6)'
          }}
        >
          <h2 style={{ margin: '0', fontSize: 'var(--font-size-lg)' }}>
            Full Width Banner - Extends to edges
          </h2>
          <p style={{ margin: '0', fontSize: 'var(--font-size-sm)', opacity: 0.9 }}>
            This demonstrates how content can now extend to the full width of the available space
          </p>
        </div>
        
        {/* Content with padding */}
        <div style={{ padding: '0 var(--spacing-6) var(--spacing-8)' }}>
          <h1 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--spacing-4)' }}>
            Full Width Layout Demo
          </h1>
          <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)' }}>
            The layout now supports full-width content while individual components can add their own padding as needed.
          </p>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the full-width layout capability where content can extend to screen edges or add its own padding as needed.'
      }
    }
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