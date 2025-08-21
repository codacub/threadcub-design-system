// stories/Alert.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from '../components/Alert'
import '../styles/tokens.css'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Alert component for displaying important messages with different severity levels. Supports multiple sizes and optional dismissal functionality.'
      }
    }
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['success', 'error', 'info', 'warning'],
      description: 'The type/severity of the alert'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Visual size of the alert',
      table: { defaultValue: { summary: 'md' } }
    },
    dismissible: {
      control: { type: 'boolean' },
      description: 'Whether the alert can be dismissed',
      table: { defaultValue: { summary: 'true' } }
    },
    onClose: {
      action: 'closed',
      description: 'Optional callback when alert is dismissed'
    },
    children: {
      control: { type: 'text' },
      description: 'The content to display in the alert'
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS class names'
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Alert>

// Basic type variants
export const Success: Story = {
  args: {
    type: 'success',
    size: 'md',
    children: 'Your account has been created successfully!'
  }
}

export const Error: Story = {
  args: {
    type: 'error',
    size: 'md',
    children: 'There was an error processing your request. Please try again.'
  }
}

export const Warning: Story = {
  args: {
    type: 'warning',
    size: 'md',
    children: 'Your session will expire in 5 minutes. Please save your work.'
  }
}

export const Info: Story = {
  args: {
    type: 'info',
    size: 'md',
    children: 'New features are available in this version. Check out the changelog for details.'
  }
}

// Size variants
export const SmallSize: Story = {
  args: {
    type: 'info',
    size: 'sm',
    children: 'This is a small alert for compact spaces.',
    onClose: () => console.log('Small alert closed')
  }
}

export const LargeSize: Story = {
  args: {
    type: 'success',
    size: 'lg',
    children: 'This is a large alert with more prominence and spacing.',
    onClose: () => console.log('Large alert closed')
  }
}

// Functional variants
export const Dismissible: Story = {
  args: {
    type: 'warning',
    size: 'md',
    children: 'This alert can be dismissed by clicking the X button.',
    onClose: () => console.log('Alert dismissed')
  }
}

export const NonDismissible: Story = {
  args: {
    type: 'error',
    size: 'md',
    children: 'This alert cannot be dismissed and requires user attention.',
    dismissible: false
  }
}

// Content variants
export const LongContent: Story = {
  args: {
    type: 'error',
    size: 'md',
    children: 'This is a longer error message that demonstrates how the alert component handles multiple lines of text. The component should maintain proper spacing and alignment even with longer content that might wrap to multiple lines. The grid layout ensures the icon and close button stay properly positioned.',
    onClose: () => console.log('Long alert closed')
  }
}

export const RichContent: Story = {
  args: {
    type: 'info',
    size: 'md',
    children: (
      <div>
        <strong>Update Available!</strong>
        <br />
        Version 2.1.0 includes new features and bug fixes.{' '}
        <a
          href="#"
          style={{
            color: 'inherit',
            textDecoration: 'underline'
          }}
          onClick={(e) => e.preventDefault()}
        >
          View changelog
        </a>
      </div>
    ),
    onClose: () => console.log('Rich content alert closed')
  }
}

// All sizes comparison
export const AllSizes: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gap: 'var(--spacing-4)',
      maxWidth: '600px'
    }}>
      <Alert 
        type="info" 
        size="sm" 
        onClose={() => console.log('Small closed')}
      >
        Small alert - Compact for tight spaces
      </Alert>
      <Alert 
        type="info" 
        size="md" 
        onClose={() => console.log('Medium closed')}
      >
        Medium alert - Default size for most use cases
      </Alert>
      <Alert 
        type="info" 
        size="lg" 
        onClose={() => console.log('Large closed')}
      >
        Large alert - Prominent for important messages
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all available alert sizes with consistent content.'
      }
    }
  }
}

// All types comparison
export const AllTypes: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gap: 'var(--spacing-3)',
      maxWidth: '600px'
    }}>
      <Alert type="success" onClose={() => console.log('Success closed')}>
        Success: Operation completed successfully!
      </Alert>
      <Alert type="error" onClose={() => console.log('Error closed')}>
        Error: Something went wrong. Please try again.
      </Alert>
      <Alert type="warning" onClose={() => console.log('Warning closed')}>
        Warning: Please review your settings before continuing.
      </Alert>
      <Alert type="info" onClose={() => console.log('Info closed')}>
        Info: Here's some helpful information for you.
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all available alert types with their distinct colors and icons.'
      }
    }
  }
}

// Real-world usage example
export const InAuthForm: Story = {
  render: () => (
    <div
      style={{
        width: '360px',
        margin: '0 auto',
        padding: 'var(--spacing-5)',
        border: 'var(--border-width-thin) solid var(--color-border)',
        borderRadius: 'var(--border-radius-xl)',
        boxShadow: 'var(--shadow-card)',
        backgroundColor: 'var(--color-white)',
        fontFamily: 'var(--font-family-primary)'
      }}
    >
      <h3 style={{ 
        marginTop: 0, 
        marginBottom: 'var(--spacing-4)',
        fontSize: 'var(--font-size-2xl)',
        fontWeight: 'var(--font-weight-semibold)',
        color: 'var(--color-gray-900)',
        fontFamily: 'var(--font-family-primary)'
      }}>
        Sign in
      </h3>

      <Alert 
        type="error" 
        size="sm" 
        onClose={() => console.log('Auth error dismissed')}
        style={{ marginBottom: 'var(--spacing-4)' }}
      >
        Invalid email or password. Please try again.
      </Alert>

      {/* Simulated form inputs using tokens */}
      <div style={{ display: 'grid', gap: 'var(--spacing-3)' }}>
        <input
          placeholder="Email"
          style={{
            padding: 'var(--spacing-3)',
            border: 'var(--border-width-thin) solid var(--color-border-form)',
            borderRadius: 'var(--border-radius-base)',
            fontSize: 'var(--font-size-base)',
            fontFamily: 'var(--font-family-primary)',
            transition: 'border-color var(--transition-base)',
            outline: 'none'
          }}
          onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
          onBlur={(e) => e.target.style.borderColor = 'var(--color-border-form)'}
        />
        <input
          placeholder="Password"
          type="password"
          style={{
            padding: 'var(--spacing-3)',
            border: 'var(--border-width-thin) solid var(--color-border-form)',
            borderRadius: 'var(--border-radius-base)',
            fontSize: 'var(--font-size-base)',
            fontFamily: 'var(--font-family-primary)',
            transition: 'border-color var(--transition-base)',
            outline: 'none'
          }}
          onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
          onBlur={(e) => e.target.style.borderColor = 'var(--color-border-form)'}
        />
        <button
          style={{
            padding: 'var(--spacing-3)',
            border: 'none',
            borderRadius: 'var(--border-radius-base)',
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-white)',
            fontSize: 'var(--font-size-base)',
            fontWeight: 'var(--font-weight-semibold)',
            fontFamily: 'var(--font-family-primary)',
            cursor: 'pointer',
            transition: 'background-color var(--transition-base)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
        >
          Continue
        </button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates how the small alert fits naturally within an authentication form context using design tokens.'
      }
    }
  }
}