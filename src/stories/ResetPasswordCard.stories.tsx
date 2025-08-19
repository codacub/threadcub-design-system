// src/stories/ResetPasswordCard.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { ResetPasswordCard } from '../components/ResetPasswordCard'

const meta = {
  title: 'Components/ResetPasswordCard',
  component: ResetPasswordCard,
  parameters: {
    layout: 'centered',
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

// Default state
export const Default: Story = {
  args: {}
}

// Loading state
export const Loading: Story = {
  args: {
    loading: true
  }
}

// With success message
export const WithSuccessMessage: Story = {
  args: {
    message: {
      type: 'success',
      text: 'Password reset email sent! Check your inbox.',
      dismissible: true
    }
  }
}

// With error message
export const WithErrorMessage: Story = {
  args: {
    message: {
      type: 'error',
      text: 'Email address not found. Please check and try again.',
      dismissible: true
    }
  }
}

// With info message
export const WithInfoMessage: Story = {
  args: {
    message: {
      type: 'info',
      text: 'If this email exists in our system, you will receive reset instructions.',
      dismissible: false
    }
  }
}

// Small card variant
export const SmallCard: Story = {
  args: {
    maxWidth: '320px',
    padding: 'sm',
    shadow: 'sm'
  }
}

// Large card variant  
export const LargeCard: Story = {
  args: {
    maxWidth: '600px',
    padding: 'lg',
    shadow: 'lg'
  }
}

// Interactive demo
export const Interactive: Story = {
  args: {
    onSubmit: (async (email: string) => {
      console.log('Reset password for:', email)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
    }) as (email: string) => Promise<void>,
    onBackToSignIn: (() => {
      console.log('Back to sign in clicked')
    }) as () => void
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive version with working form submission and navigation. Check the console for events.'
      }
    }
  }
}