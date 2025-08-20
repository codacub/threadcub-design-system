// stories/AuthCard.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import React from 'react'
import { AuthCard } from '../components/AuthCard'

// Import your tokens
import '../styles/tokens.css'

// Storybook configuration
const meta: Meta<typeof AuthCard> = {
  title: 'Components/AuthCard',
  component: AuthCard,
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
  },
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: ['signin', 'signup'],
      description: 'Authentication mode'
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Loading state'
    },
    message: {
      control: { type: 'object' },
      description: 'Message to display'
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
      description: 'Card padding size'
    },
    shadow: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Card shadow size'
    },
  },
  args: {
    onSubmit: fn() as (data: { email: string; password: string; mode: 'signin' | 'signup' }) => Promise<void>,
    onToggleMode: fn(),
    onGoogleAuth: fn(),
    onGithubAuth: fn(),
    onForgotPassword: fn(),
    onDismissMessage: fn(),
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Default handlers for all stories
const defaultHandlers = {
  onSubmit: async () => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500))
  },
}

// Sign In Stories
export const SignIn: Story = {
  args: {
    mode: 'signin',
    loading: false,
    message: null,
    ...defaultHandlers,
  },
}

export const SignInLoading: Story = {
  args: {
    mode: 'signin',
    loading: true,
    message: null,
    ...defaultHandlers,
  },
}

export const SignInWithError: Story = {
  args: {
    mode: 'signin',
    loading: false,
    message: { 
      type: 'error', 
      text: 'Invalid email or password',
      dismissible: true 
    },
    ...defaultHandlers,
  },
}

export const SignInWithSuccess: Story = {
  args: {
    mode: 'signin',
    loading: false,
    message: { 
      type: 'success', 
      text: 'Sign in successful! Redirecting...',
      dismissible: false 
    },
    ...defaultHandlers,
  },
}

// Sign Up Stories
export const SignUp: Story = {
  args: {
    mode: 'signup',
    loading: false,
    message: null,
    ...defaultHandlers,
  },
}

export const SignUpLoading: Story = {
  args: {
    mode: 'signup',
    loading: true,
    message: null,
    ...defaultHandlers,
  },
}

export const SignUpWithInfo: Story = {
  args: {
    mode: 'signup',
    loading: false,
    message: { 
      type: 'info', 
      text: 'Check your email to confirm your account!',
      dismissible: true
    },
    ...defaultHandlers,
  },
}

export const SignUpWithError: Story = {
  args: {
    mode: 'signup',
    loading: false,
    message: { 
      type: 'error', 
      text: 'An account with this email already exists',
      dismissible: true 
    },
    ...defaultHandlers,
  },
}

export const SignUpWithWarning: Story = {
  args: {
    mode: 'signup',
    loading: false,
    message: { 
      type: 'warning', 
      text: 'Please use a strong password for security',
      dismissible: true 
    },
    ...defaultHandlers,
  },
}

// Card Styling Variations
export const SmallCard: Story = {
  args: {
    mode: 'signin',
    loading: false,
    message: null,
    maxWidth: '360px',
    minWidth: '320px',
    padding: 'sm',
    shadow: 'sm',
    ...defaultHandlers,
  },
}

export const LargeCard: Story = {
  args: {
    mode: 'signin',
    loading: false,
    message: null,
    maxWidth: '520px',
    minWidth: '480px',
    padding: 'lg',
    shadow: 'lg',
    ...defaultHandlers,
  },
}

export const WideCard: Story = {
  args: {
    mode: 'signin',
    loading: false,
    message: null,
    maxWidth: '600px',
    minWidth: '500px',
    padding: 'lg',
    shadow: 'md',
    ...defaultHandlers,
  },
}

// Interactive Testing Story (shows both modes with working toggle)
export const Interactive: Story = {
  render: (args) => {
    const [mode, setMode] = React.useState<'signin' | 'signup'>('signin')
    const [loading, setLoading] = React.useState(false)
    const [message, setMessage] = React.useState<{ type: 'success' | 'error' | 'info' | 'warning'; text: string; dismissible?: boolean } | null>(null)

    const handleSubmit = async (data: any) => {
      setLoading(true)
      setMessage(null)
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        if (data.mode === 'signin') {
          setMessage({ 
            type: 'success', 
            text: 'Sign in successful! Redirecting...',
            dismissible: false 
          })
        } else {
          setMessage({ 
            type: 'info', 
            text: 'Check your email to confirm your account!',
            dismissible: true
          })
        }
      } catch (error) {
        setMessage({ 
          type: 'error', 
          text: 'Something went wrong. Please try again',
          dismissible: true 
        })
      } finally {
        setLoading(false)
      }
    }

    const handleToggleMode = () => {
      setMode(mode === 'signin' ? 'signup' : 'signin')
      setMessage(null)
    }

    const handleDismissMessage = () => {
      setMessage(null)
    }

    return (
      <AuthCard
        {...args}
        mode={mode}
        loading={loading}
        message={message}
        onSubmit={handleSubmit}
        onToggleMode={handleToggleMode}
        onGoogleAuth={() => console.log('Google auth')}
        onGithubAuth={() => console.log('GitHub auth')}
        onForgotPassword={() => console.log('Forgot password')}
        onDismissMessage={handleDismissMessage}
      />
    )
  },
  args: {
    maxWidth: '480px',
    minWidth: '400px',
  },
}