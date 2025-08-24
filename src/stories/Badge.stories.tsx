import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '../components/Badge'
import { Info as InfoIcon, CheckCircle, XCircle, AlertTriangle, Zap } from 'lucide-react'
import '../styles/tokens.css'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Badge component for displaying labels, status indicators, and notification counts. Supports various visual variants, icons, and sizes following Lightning Design System patterns.'
      }
    }
  },
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'Badge text content'
    },
    count: {
      control: { type: 'number', min: 0, max: 999 },
      description: 'The number to display in the badge (legacy prop)'
    },
    variant: {
      control: { type: 'select' },
      options: ['base', 'inverse', 'light', 'info', 'success', 'warning', 'error'],
      description: 'Visual variant of the badge',
      table: { defaultValue: { summary: 'base' } }
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size variant for different use cases',
      table: { defaultValue: { summary: 'md' } }
    },
    icon: {
      control: false,
      description: 'Icon to display on the left side'
    },
    iconRight: {
      control: false,
      description: 'Icon to display on the right side'
    },
    collapsed: {
      control: { type: 'boolean' },
      description: 'Whether to show as a small dot (collapsed) or full badge',
      table: { defaultValue: { summary: 'false' } }
    },
    active: {
      control: { type: 'boolean' },
      description: 'Whether the parent item is active (affects base variant styling)',
      table: { defaultValue: { summary: 'false' } }
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Badge>

// Base examples (matching Lightning DS structure)
export const Base: Story = {
  args: {
    children: 'Badge Label'
  }
}

export const BaseWithLeftIcon: Story = {
  args: {
    children: 'Badge Label',
    icon: <InfoIcon size={12} />
  }
}

export const BaseWithRightIcon: Story = {
  args: {
    children: 'Badge Label',
    iconRight: <InfoIcon size={12} />
  }
}

// Inverse variant
export const Inverse: Story = {
  args: {
    children: 'Darker Badge',
    variant: 'inverse'
  }
}

// Light variant
export const Light: Story = {
  args: {
    children: 'Lightest Badge',
    variant: 'light',
    icon: <Zap size={12} />
  }
}

// Info variant
export const InfoBadge: Story = {
  args: {
    children: 'Info Badge',
    variant: 'info',
    icon: <InfoIcon size={12} />
  }
}

// Success variant
export const Success: Story = {
  args: {
    children: 'Success Badge',
    variant: 'success',
    icon: <CheckCircle size={12} />
  }
}

// Error variant
export const Error: Story = {
  args: {
    children: 'Error Badge',
    variant: 'error',
    icon: <XCircle size={12} />
  }
}

// Warning variant
export const Warning: Story = {
  args: {
    children: 'Warning Badge',
    variant: 'warning',
    icon: <AlertTriangle size={12} />
  }
}

// Size variants
export const SmallSize: Story = {
  args: {
    children: 'Small',
    size: 'sm',
    variant: 'info'
  }
}

export const LargeSize: Story = {
  args: {
    children: 'Large',
    size: 'lg',
    variant: 'success'
  }
}

// Legacy count support (backwards compatibility)
export const CountBadge: Story = {
  args: {
    count: 42,
    variant: 'error'
  }
}

export const HighCountBadge: Story = {
  args: {
    count: 150,
    variant: 'info'
  }
}

// Collapsed state (dot)
export const CollapsedDot: Story = {
  args: {
    count: 5,
    collapsed: true
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
      <div style={{
        width: '24px',
        height: '24px',
        backgroundColor: 'var(--color-gray-400)',
        borderRadius: 'var(--border-radius-base)'
      }} />
      <Badge {...args} />
    </div>
  )
}

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ 
      display: 'grid',
      gap: 'var(--spacing-4)',
      fontFamily: 'var(--font-family-primary)'
    }}>
      <div>
        <h4 style={{ 
          margin: '0 0 var(--spacing-2) 0',
          fontSize: 'var(--font-size-sm)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-gray-700)'
        }}>
          Text Badges
        </h4>
        <div style={{ display: 'flex', gap: 'var(--spacing-2)', flexWrap: 'wrap' }}>
          <Badge variant="base">Base</Badge>
          <Badge variant="inverse">Inverse</Badge>
          <Badge variant="light" icon={<Zap size={12} />}>Light</Badge>
          <Badge variant="info" icon={<InfoIcon size={12} />}>Info</Badge>
          <Badge variant="success" icon={<CheckCircle size={12} />}>Success</Badge>
          <Badge variant="warning" icon={<AlertTriangle size={12} />}>Warning</Badge>
          <Badge variant="error" icon={<XCircle size={12} />}>Error</Badge>
        </div>
      </div>
      
      <div>
        <h4 style={{ 
          margin: '0 0 var(--spacing-2) 0',
          fontSize: 'var(--font-size-sm)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-gray-700)'
        }}>
          Count Badges (Legacy)
        </h4>
        <div style={{ display: 'flex', gap: 'var(--spacing-2)', flexWrap: 'wrap', alignItems: 'center' }}>
          <Badge count={5} variant="base" />
          <Badge count={42} variant="info" />
          <Badge count={99} variant="success" />
          <Badge count={150} variant="error" />
        </div>
      </div>

      <div>
        <h4 style={{ 
          margin: '0 0 var(--spacing-2) 0',
          fontSize: 'var(--font-size-sm)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-gray-700)'
        }}>
          Sizes
        </h4>
        <div style={{ display: 'flex', gap: 'var(--spacing-2)', alignItems: 'center' }}>
          <Badge size="sm" variant="info">Small</Badge>
          <Badge size="md" variant="info">Medium</Badge>
          <Badge size="lg" variant="info">Large</Badge>
        </div>
      </div>
    </div>
  )
}

// Real-world usage examples
export const StatusIndicators: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gap: 'var(--spacing-3)',
      padding: 'var(--spacing-4)',
      backgroundColor: 'var(--color-white)',
      border: 'var(--border-width-thin) solid var(--color-border)',
      borderRadius: 'var(--border-radius-lg)',
      fontFamily: 'var(--font-family-primary)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
        <span style={{ fontSize: 'var(--font-size-sm)' }}>System Status:</span>
        <Badge variant="success" icon={<CheckCircle size={12} />}>Online</Badge>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
        <span style={{ fontSize: 'var(--font-size-sm)' }}>Build Status:</span>
        <Badge variant="warning" icon={<AlertTriangle size={12} />}>Pending</Badge>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
        <span style={{ fontSize: 'var(--font-size-sm)' }}>API Status:</span>
        <Badge variant="error" icon={<XCircle size={12} />}>Error</Badge>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
        <span style={{ fontSize: 'var(--font-size-sm)' }}>Environment:</span>
        <Badge variant="light">Development</Badge>
      </div>
    </div>
  )
}

// Platform/Topic tags (like ConversationCard usage)
export const PlatformTags: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gap: 'var(--spacing-4)',
      fontFamily: 'var(--font-family-primary)'
    }}>
      <div>
        <h4 style={{ 
          margin: '0 0 var(--spacing-2) 0',
          fontSize: 'var(--font-size-sm)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-gray-700)'
        }}>
          AI Platforms
        </h4>
        <div style={{ display: 'flex', gap: 'var(--spacing-2)', flexWrap: 'wrap' }}>
          <Badge variant="info">Claude</Badge>
          <Badge variant="success">ChatGPT</Badge>
          <Badge variant="warning">Copilot</Badge>
          <Badge variant="light">Gemini</Badge>
        </div>
      </div>
      
      <div>
        <h4 style={{ 
          margin: '0 0 var(--spacing-2) 0',
          fontSize: 'var(--font-size-sm)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-gray-700)'
        }}>
          Topic Tags
        </h4>
        <div style={{ display: 'flex', gap: 'var(--spacing-2)', flexWrap: 'wrap' }}>
          <Badge variant="base">Authentication</Badge>
          <Badge variant="base">Mobile App</Badge>
          <Badge variant="base">Database</Badge>
          <Badge variant="base">Performance</Badge>
        </div>
      </div>
    </div>
  )
}