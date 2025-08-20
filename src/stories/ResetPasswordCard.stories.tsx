// src/stories/ResetPasswordCard.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import React from 'react'
import { ResetPasswordCard } from '../components/ResetPasswordCard'

// Import your tokens
import '../styles/tokens.css'

const meta = {
  title: 'Components/ResetPasswordCard',
  component: ResetPasswordCard,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f8fafc' },
        { name: 'white', value: '#ffffff' },
        { name: 'gray', value: '#f1f5f9' },
      ],
    },
    docs: {
      description: {
        component: 'A card component for password reset functionality with email input and validation.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    loading: {
      control: 'boolean',
      description: 'Shows loading state when true'
    },
    maxWidth: {
      control: 'text',
      description: 'Maximum width of the card'
    },
    minWidth: {
      control: 'text',
      description: 'Minimum width of the card'
    },
    padding: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Internal padding of the card'
    },
    shadow: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Drop shadow intensity'
    },
    message: {
      control: 'object',
      description: 'Message to display (success, error, info, warning)'
    }
  },
  args: {
    onSubmit: fn() as (email: string) => Promise<void>,
    onBackToSignIn: fn() as () => void,
    onDismissMessage: fn() as () => void
  }
} satisfies Meta<typeof ResetPasswordCard>

export default meta
type Story = StoryObj<typeof meta>

// Default handlers
const defaultHandlers = {
  onSubmit: async (email: string) => {
    console.log('Reset password for:', email)
    await new Promise(resolve => setTimeout(resolve, 1500))
    alert(`Password reset email sent to ${email}`)
  },
  onBackToSignIn: () => console.log('Back to sign in clicked'),
  onDismissMessage: () => console.log('Message dismissed'),
}

// Default state
export const Default: Story = {
  args: {
    ...defaultHandlers,
  }
}

// Loading state
export const Loading: Story = {
  args: {
    loading: true,
    ...defaultHandlers,
  }
}

// With success message
export const WithSuccessMessage: Story = {
  args: {
    message: {
      type: 'success',
      text: 'Password reset email sent! Check your inbox.',
      dismissible: true
    },
    ...defaultHandlers,
  }
}

// With error message
export const WithErrorMessage: Story = {
  args: {
    message: {
      type: 'error',
      text: 'Email address not found. Please try again.',
      dismissible: true
    },
    ...defaultHandlers,
  }
}

// With info message
export const WithInfoMessage: Story = {
  args: {
    message: {
      type: 'info',
      text: 'If this email exists in our system, you will receive reset instructions.',
      dismissible: true
    },
    ...defaultHandlers,
  }
}

// With warning message
export const WithWarningMessage: Story = {
  args: {
    message: {
      type: 'warning',
      text: 'Password reset requests are limited to 3 per hour.',
      dismissible: true
    },
    ...defaultHandlers,
  }
}

// Non-dismissible message
export const WithPersistentMessage: Story = {
  args: {
    message: {
      type: 'info',
      text: 'This message cannot be dismissed.',
      dismissible: false
    },
    ...defaultHandlers,
  }
}

// Small card variant
export const SmallCard: Story = {
  args: {
    maxWidth: '360px',
    minWidth: '320px',
    padding: 'sm',
    shadow: 'sm',
    ...defaultHandlers,
  }
}

// Large card variant  
export const LargeCard: Story = {
  args: {
    maxWidth: '520px',
    minWidth: '480px',
    padding: 'lg',
    shadow: 'lg',
    ...defaultHandlers,
  }
}

// Wide card variant
export const WideCard: Story = {
  args: {
    maxWidth: '600px',
    minWidth: '500px',
    padding: 'lg',
    shadow: 'md',
    ...defaultHandlers,
  }
}

// Interactive demo with state management
export const Interactive: Story = {
  render: (args) => {
    const [loading, setLoading] = React.useState(false)
    const [message, setMessage] = React.useState<{
      type: 'success' | 'error' | 'info' | 'warning'
      text: string
      dismissible?: boolean
    } | null>(null)

    const handleSubmit = async (email: string) => {
      setLoading(true)
      setMessage(null)

      try {
        console.log('Submitting reset for:', email)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        // Simulate different outcomes based on email
        if (email.includes('notfound')) {
          setMessage({
            type: 'error',
            text: 'Email address not found in our system.',
            dismissible: true
          })
        } else if (email.includes('blocked')) {
          setMessage({
            type: 'warning',
            text: 'Too many reset attempts. Please try again later.',
            dismissible: true
          })
        } else {
          setMessage({
            type: 'success',
            text: `Password reset email sent to ${email}!`,
            dismissible: true
          })
        }
      } catch (error) {
        setMessage({
          type: 'error',
          text: 'Something went wrong. Please try again.',
          dismissible: true
        })
      } finally {
        setLoading(false)
      }
    }

    const handleBackToSignIn = () => {
      console.log('Navigating back to sign in')
      setMessage(null)
    }

    const handleDismissMessage = () => {
      setMessage(null)
    }

    return (
      <ResetPasswordCard
        {...args}
        loading={loading}
        message={message}
        onSubmit={handleSubmit}
        onBackToSignIn={handleBackToSignIn}
        onDismissMessage={handleDismissMessage}
      />
    )
  },
  args: {
    maxWidth: '480px',
    minWidth: '400px',
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive version with working form submission and state management. Try different emails: "test@notfound.com" for error, "user@blocked.com" for warning, or any other email for success.'
      }
    }
  }
}