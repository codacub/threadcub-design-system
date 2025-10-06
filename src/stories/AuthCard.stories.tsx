// stories/AuthCard.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { useState } from 'react'
import { AuthCard } from '../components/AuthCard'
import '../styles/tokens.css'

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
    docs: {
      description: {
        component:
          'A comprehensive authentication card component supporting both sign in and sign up modes. Features email/password validation, social authentication, remember me functionality, loading states, and full design token integration.'
      }
    }
  },
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: ['signin', 'signup'],
      description: 'Authentication mode',
      table: { defaultValue: { summary: 'signin' } }
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Loading state',
      table: { defaultValue: { summary: 'false' } }
    },
    message: {
      control: { type: 'object' },
      description: 'Message to display above the form'
    },
    showRememberMe: {
      control: { type: 'boolean' },
      description: 'Show remember me checkbox for sign in',
      table: { defaultValue: { summary: 'false' } }
    },
    rememberMe: {
      control: { type: 'boolean' },
      description: 'Remember me checkbox state',
      table: { defaultValue: { summary: 'false' } }
    },
    maxWidth: { 
      control: { type: 'text' },
      description: 'Maximum width of the card',
      table: { defaultValue: { summary: '480px' } }
    },
    minWidth: { 
      control: { type: 'text' },
      description: 'Minimum width of the card',
      table: { defaultValue: { summary: '400px' } }
    },
    padding: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Card padding size',
      table: { defaultValue: { summary: 'lg' } }
    },
    shadow: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Card shadow size',
      table: { defaultValue: { summary: 'md' } }
    },
    onSubmit: {
      action: 'submitted',
      description: 'Submit handler for form data'
    },
    onToggleMode: {
      action: 'mode-toggled',
      description: 'Handler for toggling between signin/signup modes'
    },
    onGoogleAuth: {
      action: 'google-auth',
      description: 'Google authentication handler'
    },
    onGithubAuth: {
      action: 'github-auth',
      description: 'GitHub authentication handler'
    },
    onForgotPassword: {
      action: 'forgot-password',
      description: 'Forgot password handler'
    },
    onDismissMessage: {
      action: 'message-dismissed',
      description: 'Callback when message is dismissed'
    },
    onRememberMeChange: {
      action: 'remember-me-changed',
      description: 'Callback when remember me state changes'
    }
  },
  args: {
    onSubmit: fn(),
    onToggleMode: fn(),
    onGoogleAuth: fn(),
    onGithubAuth: fn(),
    onForgotPassword: fn(),
    onDismissMessage: fn(),
    onRememberMeChange: fn(),
    loading: false,
    showRememberMe: false,
    rememberMe: false,
    padding: 'lg',
    shadow: 'md'
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof AuthCard>

// Sign In variants
export const SignIn: Story = {
  args: {
    mode: 'signin'
  }
}

export const SignInWithRememberMe: Story = {
  args: {
    mode: 'signin',
    showRememberMe: true
  }
}

export const SignInRememberMeChecked: Story = {
  args: {
    mode: 'signin',
    showRememberMe: true,
    rememberMe: true
  }
}

export const SignInLoading: Story = {
  args: {
    mode: 'signin',
    loading: true,
    showRememberMe: true
  }
}

// Sign Up variants
export const SignUp: Story = {
  args: {
    mode: 'signup'
  }
}

export const SignUpLoading: Story = {
  args: {
    mode: 'signup',
    loading: true
  }
}

// Message variants
export const SignInWithError: Story = {
  args: {
    mode: 'signin',
    message: { 
      type: 'error', 
      text: 'Invalid email or password. Please check your credentials and try again.',
      dismissible: true 
    },
    showRememberMe: true
  }
}

export const SignInWithSuccess: Story = {
  args: {
    mode: 'signin',
    message: { 
      type: 'success', 
      text: 'Sign in successful! Redirecting to your dashboard...',
      dismissible: false 
    },
    showRememberMe: true,
    rememberMe: true
  }
}

export const SignInNoToggle: Story = {
  args: {
    mode: 'signin',
    showToggle: false,
    showRememberMe: true
  }
}

export const SignUpWithInfo: Story = {
  args: {
    mode: 'signup',
    message: { 
      type: 'info', 
      text: 'Please check your email to confirm your account after signing up.',
      dismissible: true
    }
  }
}

export const SignUpWithError: Story = {
  args: {
    mode: 'signup',
    message: { 
      type: 'error', 
      text: 'An account with this email address already exists. Please sign in instead.',
      dismissible: true 
    }
  }
}

export const SignUpWithWarning: Story = {
  args: {
    mode: 'signup',
    message: { 
      type: 'warning', 
      text: 'Please use a strong password with at least 8 characters for better security.',
      dismissible: true 
    }
  }
}

// Size and style variants
export const SmallCard: Story = {
  args: {
    mode: 'signin',
    showRememberMe: true,
    maxWidth: '360px',
    minWidth: '320px',
    padding: 'sm',
    shadow: 'sm'
  }
}

export const LargeCard: Story = {
  args: {
    mode: 'signin',
    showRememberMe: true,
    maxWidth: '560px',
    minWidth: '480px',
    padding: 'lg',
    shadow: 'lg'
  }
}

export const WideCard: Story = {
  args: {
    mode: 'signin',
    showRememberMe: true,
    maxWidth: '600px',
    minWidth: '500px',
    padding: 'lg',
    shadow: 'md'
  }
}

export const MediumCard: Story = {
  args: {
    mode: 'signin',
    showRememberMe: true,
    maxWidth: '440px',
    minWidth: '380px',
    padding: 'md',
    shadow: 'md'
  }
}

// Interactive demo with full state management
export const Interactive: Story = {
  render: () => {
    const [currentMode, setCurrentMode] = useState<'signin' | 'signup'>('signin')
    const [isLoading, setIsLoading] = useState(false)
    const [currentMessage, setCurrentMessage] = useState<{ 
      type: 'success' | 'error' | 'info' | 'warning'
      text: string
      dismissible?: boolean 
    } | null>(null)
    const [isRememberMeChecked, setIsRememberMeChecked] = useState(false)

    const handleFormSubmit = async (data: any) => {
      setIsLoading(true)
      setCurrentMessage(null)
      
      try {
        console.log('Auth submission:', data)
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        if (data.email.toLowerCase().includes('invalid')) {
          setCurrentMessage({ 
            type: 'error', 
            text: 'Invalid email or password. Please check your credentials and try again.',
            dismissible: true 
          })
        } else if (data.email.toLowerCase().includes('exists') && data.mode === 'signup') {
          setCurrentMessage({ 
            type: 'error', 
            text: 'An account with this email already exists. Please sign in instead.',
            dismissible: true 
          })
        } else if (data.mode === 'signin') {
          setCurrentMessage({ 
            type: 'success', 
            text: `Welcome back! ${isRememberMeChecked ? 'You will be remembered for 30 days.' : ''} Redirecting to your dashboard...`,
            dismissible: false 
          })
        } else {
          setCurrentMessage({ 
            type: 'info', 
            text: 'Account created successfully! Please check your email to verify your account.',
            dismissible: true
          })
        }
      } catch (error) {
        setCurrentMessage({ 
          type: 'error', 
          text: 'Something went wrong. Please try again in a few moments.',
          dismissible: true 
        })
      } finally {
        setIsLoading(false)
      }
    }

    const handleModeToggle = () => {
      setCurrentMode(currentMode === 'signin' ? 'signup' : 'signin')
      setCurrentMessage(null)
      setIsRememberMeChecked(false)
    }

    const handleMessageDismiss = () => {
      setCurrentMessage(null)
    }

    const handleRememberMeToggle = (checked: boolean) => {
      setIsRememberMeChecked(checked)
    }

    const handleSocialAuthentication = (provider: string) => {
      console.log(`${provider} authentication initiated`)
      setCurrentMessage({
        type: 'info',
        text: `Redirecting to ${provider} for authentication...`,
        dismissible: false
      })
    }

    const handlePasswordReset = () => {
      console.log('Forgot password clicked')
      setCurrentMessage({
        type: 'info',
        text: 'Password reset functionality would be triggered here.',
        dismissible: true
      })
    }

    return (
      <div style={{
        maxWidth: '500px',
        margin: '0 auto',
        fontFamily: 'var(--font-family-primary)'
      }}>
        <div style={{
          marginBottom: 'var(--spacing-6)',
          padding: 'var(--spacing-4)',
          backgroundColor: 'var(--color-gray-50)',
          borderRadius: 'var(--border-radius-lg)',
          border: `var(--border-width-thin) solid var(--color-gray-200)`
        }}>
          <h3 style={{
            fontSize: 'var(--font-size-base)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--color-gray-900)',
            margin: '0 0 var(--spacing-2) 0'
          }}>
            Interactive Demo
          </h3>
          <p style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-gray-600)',
            margin: '0 0 var(--spacing-2) 0',
            lineHeight: 'var(--line-height-normal)'
          }}>
            Try different email addresses to see various responses:
          </p>
          <ul style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-gray-600)',
            margin: 0,
            paddingLeft: 'var(--spacing-4)',
            lineHeight: 'var(--line-height-normal)'
          }}>
            <li><code>invalid@example.com</code> - Triggers error message</li>
            <li><code>exists@example.com</code> - Account exists error (signup mode)</li>
            <li><code>user@example.com</code> - Success response</li>
          </ul>
        </div>

        <AuthCard
          mode={currentMode}
          loading={isLoading}
          message={currentMessage}
          showRememberMe={currentMode === 'signin'}
          rememberMe={isRememberMeChecked}
          onSubmit={handleFormSubmit}
          onToggleMode={handleModeToggle}
          onGoogleAuth={() => handleSocialAuthentication('Google')}
          onGithubAuth={() => handleSocialAuthentication('GitHub')}
          onForgotPassword={handlePasswordReset}
          onDismissMessage={handleMessageDismiss}
          onRememberMeChange={handleRememberMeToggle}
          maxWidth="480px"
          minWidth="400px"
        />
        
        <div style={{ 
          marginTop: 'var(--spacing-6)',
          padding: 'var(--spacing-4)',
          backgroundColor: 'var(--color-gray-50)',
          borderRadius: 'var(--border-radius-lg)',
          fontSize: 'var(--font-size-sm)',
          color: 'var(--color-gray-600)'
        }}>
          <strong>Current State:</strong>
          <ul style={{ margin: 'var(--spacing-2) 0 0 0', paddingLeft: 'var(--spacing-4)' }}>
            <li>Mode: {currentMode}</li>
            <li>Loading: {isLoading ? 'Yes' : 'No'}</li>
            <li>Remember Me: {currentMode === 'signin' ? (isRememberMeChecked ? 'Checked' : 'Unchecked') : 'N/A'}</li>
            <li>Message: {currentMessage ? `${currentMessage.type} - ${currentMessage.text.substring(0, 30)}...` : 'None'}</li>
          </ul>
        </div>
      </div>
    )
  },
  parameters: {
    layout: 'centered'
  }
}