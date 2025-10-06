// stories/UpdatePasswordCard.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { useState } from 'react'
import { UpdatePasswordCard } from '../components/UpdatePasswordCard.tsx'
import '../styles/tokens.css'

const meta: Meta<typeof UpdatePasswordCard> = {
  title: 'Components/UpdatePasswordCard',
  component: UpdatePasswordCard,
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
          'A password update card component with dual password fields, validation, loading states, and message handling. Part of the password reset flow after user receives reset email.'
      }
    }
  },
  argTypes: {
    loading: {
      control: { type: 'boolean' },
      description: 'Shows loading state when true',
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
      description: 'Internal padding of the card',
      table: { defaultValue: { summary: 'lg' } }
    },
    shadow: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Drop shadow intensity',
      table: { defaultValue: { summary: 'md' } }
    },
    message: {
      control: { type: 'object' },
      description: 'Message to display (success, error, info, warning)'
    },
    onSubmit: {
      action: 'submitted',
      description: 'Submit handler for the new password'
    },
    onBackToSignIn: {
      action: 'back-to-signin',
      description: 'Handler for back to sign in button'
    },
    onDismissMessage: {
      action: 'message-dismissed',
      description: 'Handler for dismissing message'
    }
  },
  args: {
    onSubmit: fn(),
    onBackToSignIn: fn(),
    onDismissMessage: fn(),
    loading: false,
    padding: 'lg',
    shadow: 'md'
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof UpdatePasswordCard>

// Basic variants
export const Default: Story = {
  args: {}
}

export const Loading: Story = {
  args: {
    loading: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading state with disabled form elements and loading text on the submit button.'
      }
    }
  }
}

// Message variants
export const WithSuccessMessage: Story = {
  args: {
    message: {
      type: 'success',
      text: 'Password updated successfully! Redirecting to dashboard...',
      dismissible: false
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Success state showing confirmation that the password was updated.'
      }
    }
  }
}

export const WithErrorMessage: Story = {
  args: {
    message: {
      type: 'error',
      text: 'Failed to update password. Please try again.',
      dismissible: true
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Error state when password update fails.'
      }
    }
  }
}

export const WithWarningMessage: Story = {
  args: {
    message: {
      type: 'warning',
      text: 'Your password is about to expire. Please choose a strong password.',
      dismissible: true
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Warning message for password requirements or security concerns.'
      }
    }
  }
}

export const WithInfoMessage: Story = {
  args: {
    message: {
      type: 'info',
      text: 'Choose a password you haven\'t used before for better security.',
      dismissible: true
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Info message providing helpful context about password requirements.'
      }
    }
  }
}

// Size and style variants
export const CompactCard: Story = {
  args: {
    maxWidth: '360px',
    minWidth: '320px',
    padding: 'sm',
    shadow: 'sm'
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact version with smaller dimensions and padding, suitable for mobile or tight spaces.'
      }
    }
  }
}

export const LargeCard: Story = {
  args: {
    maxWidth: '560px',
    minWidth: '480px',
    padding: 'lg',
    shadow: 'lg'
  },
  parameters: {
    docs: {
      description: {
        story: 'Large version with generous spacing and prominent shadow for desktop applications.'
      }
    }
  }
}

export const MediumCard: Story = {
  args: {
    maxWidth: '440px',
    minWidth: '380px',
    padding: 'md',
    shadow: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Medium-sized card with balanced proportions for most use cases.'
      }
    }
  }
}

// Interactive demo with full state management
export const InteractiveDemo: Story = {
  render: () => {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState<{
      type: 'success' | 'error' | 'info' | 'warning'
      text: string
      dismissible?: boolean
    } | null>(null)

    const handleSubmit = async (password: string) => {
      setLoading(true)
      setMessage(null)

      try {
        console.log('Updating password...')
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        // Simulate different outcomes based on password
        if (password === 'weak') {
          setMessage({
            type: 'warning',
            text: 'This password is too common. Please choose a stronger password.',
            dismissible: true
          })
        } else if (password === 'error') {
          setMessage({
            type: 'error',
            text: 'Failed to update password. Please try again.',
            dismissible: true
          })
        } else {
          setMessage({
            type: 'success',
            text: 'Password updated successfully! Redirecting to dashboard...',
            dismissible: false
          })
          
          // Simulate redirect after 2 seconds
          setTimeout(() => {
            console.log('Redirecting to dashboard...')
          }, 2000)
        }
      } catch (error) {
        setMessage({
          type: 'error',
          text: 'Something went wrong. Please try again in a few moments.',
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
            Try different passwords to see different responses:
          </p>
          <ul style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-gray-600)',
            margin: 0,
            paddingLeft: 'var(--spacing-4)',
            lineHeight: 'var(--line-height-normal)'
          }}>
            <li><code>weak</code> - Warning message about weak password</li>
            <li><code>error</code> - Error message</li>
            <li>Any other password (6+ chars) - Success message</li>
          </ul>
        </div>

        <UpdatePasswordCard
          loading={loading}
          message={message}
          onSubmit={handleSubmit}
          onBackToSignIn={handleBackToSignIn}
          onDismissMessage={handleDismissMessage}
          maxWidth="480px"
          minWidth="400px"
        />
      </div>
    )
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'Fully interactive demo with real form submission, password validation, loading states, and different message outcomes.'
      }
    }
  }
}

// Real-world auth flow context
export const InAuthFlow: Story = {
  render: () => (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'var(--color-gray-50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--spacing-4)',
      fontFamily: 'var(--font-family-primary)'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '500px'
      }}>
        <UpdatePasswordCard
          maxWidth="480px"
          minWidth="400px"
          padding="lg"
          shadow="lg"
        />
        
        <div style={{
          textAlign: 'center',
          marginTop: 'var(--spacing-6)',
          fontSize: 'var(--font-size-sm)',
          color: 'var(--color-gray-500)'
        }}>
          <p style={{ margin: 0 }}>
            Need help? <a href="#" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Contact support</a>
          </p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Update password card in a realistic authentication flow context with proper spacing and background.'
      }
    }
  }
}

// Password reset flow sequence
export const PasswordResetFlow: Story = {
  render: () => {
    const [step, setStep] = useState<'update' | 'success'>('update')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (password: string) => {
  console.log('Password submitted:', password) // Use the variable
      setLoading(true)
      await new Promise(resolve => setTimeout(resolve, 1500))
      setLoading(false)
      setStep('success')
    }

    if (step === 'success') {
      return (
        <div style={{
          maxWidth: '480px',
          margin: '0 auto',
          fontFamily: 'var(--font-family-primary)'
        }}>
          <UpdatePasswordCard
            message={{
              type: 'success',
              text: 'Password updated successfully! Redirecting to dashboard...',
              dismissible: false
            }}
            loading={false}
          />
        </div>
      )
    }

    return (
      <div style={{
        maxWidth: '480px',
        margin: '0 auto',
        fontFamily: 'var(--font-family-primary)'
      }}>
        <UpdatePasswordCard
          loading={loading}
          onSubmit={handleSubmit}
          onBackToSignIn={() => console.log('Back to sign in')}
        />
      </div>
    )
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'Complete password reset flow showing the transition from form to success state.'
      }
    }
  }
}