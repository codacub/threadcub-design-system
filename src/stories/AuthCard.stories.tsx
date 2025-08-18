// stories/AuthCard.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
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
}

export default meta
type Story = StoryObj<typeof meta>

// Default handlers for all stories
const defaultHandlers = {
  onSubmit: async (data: any) => {
    console.log('Form submitted:', data)
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    alert(`${data.mode === 'signin' ? 'Sign in' : 'Sign up'} successful!`)
  },
  onToggleMode: () => console.log('Toggle mode clicked'),
  onGoogleAuth: () => console.log('Google auth clicked'),
  onGithubAuth: () => console.log('GitHub auth clicked'),
  onForgotPassword: () => console.log('Forgot password clicked'),
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
    message: { type: 'error', text: 'Invalid email or password' },
    ...defaultHandlers,
  },
}

export const SignInWithSuccess: Story = {
  args: {
    mode: 'signin',
    loading: false,
    message: { type: 'success', text: 'Sign in successful! Redirecting...' },
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
      text: 'Check your email to confirm your account!' 
    },
    ...defaultHandlers,
  },
}

export const SignUpWithError: Story = {
  args: {
    mode: 'signup',
    loading: false,
    message: { type: 'error', text: 'An account with this email already exists' },
    ...defaultHandlers,
  },
}

// Card Styling Variations
export const SmallCard: Story = {
  args: {
    mode: 'signin',
    loading: false,
    message: null,
    maxWidth: '320px',
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
    maxWidth: '500px',
    padding: 'lg',
    shadow: 'lg',
    ...defaultHandlers,
  },
}

// Interactive Testing Story (shows both modes with working toggle)
export const Interactive: Story = {
  render: (args) => {
    const [mode, setMode] = React.useState<'signin' | 'signup'>('signin')
    const [loading, setLoading] = React.useState(false)
    const [message, setMessage] = React.useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null)

    const handleSubmit = async (data: any) => {
      setLoading(true)
      setMessage(null)
      
      try {
        console.log('Form submitted:', data)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        if (data.mode === 'signin') {
          setMessage({ type: 'success', text: 'Sign in successful! Redirecting...' })
        } else {
          setMessage({ 
            type: 'info', 
            text: 'Check your email to confirm your account!' 
          })
        }
      } catch (error) {
        setMessage({ type: 'error', text: 'Something went wrong. Please try again' })
      } finally {
        setLoading(false)
      }
    }

    const handleToggleMode = () => {
      setMode(mode === 'signin' ? 'signup' : 'signin')
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
      />
    )
  },
  args: {
    // Initial props (will be overridden by the render function)
  },
}