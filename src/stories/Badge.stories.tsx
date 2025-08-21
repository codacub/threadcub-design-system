// stories/Badge.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '../components/Badge'
import '../styles/tokens.css'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Badge component for displaying notification counts. Supports pill shape for expanded view and dot indicator for collapsed view. Perfect for navigation items, notifications, and status indicators.'
      }
    }
  },
  argTypes: {
    count: {
      control: { type: 'number', min: 0, max: 999 },
      description: 'The number to display in the badge'
    },
    collapsed: {
      control: { type: 'boolean' },
      description: 'Whether to show as a small dot (collapsed) or full badge',
      table: { defaultValue: { summary: 'false' } }
    },
    active: {
      control: { type: 'boolean' },
      description: 'Whether the parent item is active (affects badge color)',
      table: { defaultValue: { summary: 'false' } }
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size variant for different use cases',
      table: { defaultValue: { summary: 'md' } }
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS class names'
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Badge>

// Basic examples
export const Default: Story = {
  args: {
    count: 5,
    size: 'md'
  }
}

export const HighCount: Story = {
  args: {
    count: 42,
    size: 'md'
  }
}

export const MaxCount: Story = {
  args: {
    count: 150,
    size: 'md'
  }
}

export const SingleDigit: Story = {
  args: {
    count: 3,
    size: 'md'
  }
}

// Size variants
export const SmallSize: Story = {
  args: {
    count: 8,
    size: 'sm'
  }
}

export const LargeSize: Story = {
  args: {
    count: 12,
    size: 'lg'
  }
}

// Active state
export const ActiveState: Story = {
  args: {
    count: 7,
    size: 'md',
    active: true
  }
}

// Collapsed state (dot)
export const CollapsedDot: Story = {
  args: {
    count: 5,
    collapsed: true,
    size: 'md'
  },
  render: (args) => (
    <div style={{ 
      position: 'relative',
      width: '64px',
      height: '48px',
      backgroundColor: 'var(--color-gray-100)',
      borderRadius: 'var(--border-radius-lg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Simulated icon */}
      <div style={{
        width: '24px',
        height: '24px',
        backgroundColor: 'var(--color-gray-400)',
        borderRadius: 'var(--border-radius-base)'
      }} />
      <Badge {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Collapsed badges show as small dots, typically used in sidebar navigation.'
      }
    }
  }
}

// All sizes comparison
export const AllSizes: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      gap: 'var(--spacing-4)',
      alignItems: 'center'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-2)' }}>
        <Badge count={5} size="sm" />
        <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-600)' }}>Small</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-2)' }}>
        <Badge count={5} size="md" />
        <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-600)' }}>Medium</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-2)' }}>
        <Badge count={5} size="lg" />
        <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-600)' }}>Large</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all available badge sizes.'
      }
    }
  }
}

// Active vs inactive comparison
export const ActiveComparison: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      gap: 'var(--spacing-4)',
      alignItems: 'center'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-2)' }}>
        <Badge count={8} active={false} />
        <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-600)' }}>Inactive</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-2)' }}>
        <Badge count={8} active={true} />
        <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-600)' }}>Active</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Active badges use primary color, inactive badges use error color.'
      }
    }
  }
}

// Navigation context example
export const InNavigation: Story = {
  render: () => (
    <div style={{
      width: '280px',
      backgroundColor: 'var(--color-white)',
      border: 'var(--border-width-thin) solid var(--color-border)',
      borderRadius: 'var(--border-radius-xl)',
      padding: 'var(--spacing-4)',
      fontFamily: 'var(--font-family-primary)'
    }}>
      <h4 style={{ 
        margin: '0 0 var(--spacing-4) 0',
        fontSize: 'var(--font-size-lg)',
        fontWeight: 'var(--font-weight-semibold)',
        color: 'var(--color-gray-900)'
      }}>
        Navigation Example
      </h4>
      
      <div style={{ display: 'grid', gap: 'var(--spacing-2)' }}>
        {/* Active nav item */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 'var(--spacing-3)',
          backgroundColor: 'var(--color-primary-bg)',
          color: 'var(--color-primary-text)',
          borderRadius: 'var(--border-radius-lg)',
          fontSize: 'var(--font-size-sm)',
          fontWeight: 'var(--font-weight-medium)'
        }}>
          <span>Messages</span>
          <Badge count={24} active={true} size="sm" />
        </div>
        
        {/* Inactive nav items */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 'var(--spacing-3)',
          color: 'var(--color-gray-600)',
          borderRadius: 'var(--border-radius-lg)',
          fontSize: 'var(--font-size-sm)',
          fontWeight: 'var(--font-weight-medium)'
        }}>
          <span>Notifications</span>
          <Badge count={7} active={false} size="sm" />
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 'var(--spacing-3)',
          color: 'var(--color-gray-600)',
          borderRadius: 'var(--border-radius-lg)',
          fontSize: 'var(--font-size-sm)',
          fontWeight: 'var(--font-weight-medium)'
        }}>
          <span>Tasks</span>
          <Badge count={156} active={false} size="sm" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world example showing badges in a navigation context with active and inactive states.'
      }
    }
  }
}

// Collapsed navigation example
export const CollapsedNavigation: Story = {
  render: () => (
    <div style={{
      width: '64px',
      backgroundColor: 'var(--color-white)',
      border: 'var(--border-width-thin) solid var(--color-border)',
      borderRadius: 'var(--border-radius-xl)',
      padding: 'var(--spacing-2)',
      fontFamily: 'var(--font-family-primary)'
    }}>
      <div style={{ display: 'grid', gap: 'var(--spacing-2)' }}>
        {/* Simulated nav items with dot badges */}
        <div style={{
          position: 'relative',
          height: 'var(--min-touch-target)',
          backgroundColor: 'var(--color-primary-bg)',
          borderRadius: 'var(--border-radius-lg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Icon placeholder */}
          <div style={{
            width: '20px',
            height: '20px',
            backgroundColor: 'var(--color-primary-text)',
            borderRadius: 'var(--border-radius-base)'
          }} />
          <Badge count={24} collapsed={true} />
        </div>
        
        <div style={{
          position: 'relative',
          height: 'var(--min-touch-target)',
          borderRadius: 'var(--border-radius-lg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '20px',
            height: '20px',
            backgroundColor: 'var(--color-gray-400)',
            borderRadius: 'var(--border-radius-base)'
          }} />
          <Badge count={7} collapsed={true} />
        </div>
        
        <div style={{
          position: 'relative',
          height: 'var(--min-touch-target)',
          borderRadius: 'var(--border-radius-lg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '20px',
            height: '20px',
            backgroundColor: 'var(--color-gray-400)',
            borderRadius: 'var(--border-radius-base)'
          }} />
          <Badge count={156} collapsed={true} />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of badges in a collapsed navigation sidebar, showing as notification dots.'
      }
    }
  }
}