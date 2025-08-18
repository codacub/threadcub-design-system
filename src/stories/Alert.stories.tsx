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
          'Alert component for displaying important messages with different severity levels.'
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
    children:
      'New features are available in this version. Check out the changelog for details.'
  }
}

export const SuccessWithClose: Story = {
  args: {
    type: 'success',
    size: 'md',
    children: 'Operation completed successfully!',
    onClose: () => console.log('Alert closed')
  }
}

export const LongContent: Story = {
  args: {
    type: 'error',
    size: 'md',
    children:
      'This is a longer error message that demonstrates how the alert component handles multiple lines of text. The component should maintain proper spacing and alignment even with longer content that might wrap to multiple lines.',
    onClose: () => console.log('Alert closed')
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
        Version 2.1.0 includes new features and bug fixes.
        <a
          href="#"
          style={{
            color: 'inherit',
            textDecoration: 'underline',
            marginLeft: '4px'
          }}
        >
          View changelog
        </a>
      </div>
    ),
    onClose: () => console.log('Alert closed')
  }
}

export const AuthCardSmall: Story = {
  render: () => (
    <div
      style={{
        width: 360,
        margin: '0 auto',
        padding: 'var(--spacing-5)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--border-radius-xl)',
        boxShadow: 'var(--shadow-card)',
        background: 'var(--color-white)'
      }}
    >
      <h3 style={{ marginTop: 0, marginBottom: 'var(--spacing-3)' }}>
        Sign in
      </h3>

      <Alert type="error" size="sm" onClose={() => console.log('closed')}>
        Invalid email or password. Please try again.
      </Alert>

      <div style={{ height: 'var(--spacing-4)' }} />

      {/* Simulated form inputs for context */}
      <div style={{ display: 'grid', gap: 'var(--spacing-3)' }}>
        <input
          placeholder="Email"
          style={{
            padding: '10px 12px',
            border: '1px solid var(--color-border-form)',
            borderRadius: 'var(--border-radius-base)'
          }}
        />
        <input
          placeholder="Password"
          type="password"
          style={{
            padding: '10px 12px',
            border: '1px solid var(--color-border-form)',
            borderRadius: 'var(--border-radius-base)'
          }}
        />
        <button
          style={{
            padding: '10px 12px',
            border: 0,
            borderRadius: 'var(--border-radius-base)',
            background: 'var(--color-primary)',
            color: 'white',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          Continue
        </button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates the compact `size="sm"` alert inside an auth card.'
      }
    }
  }
}
