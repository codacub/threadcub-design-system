// stories/ResetPasswordCard.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { useState } from 'react'
import { ResetPasswordCard } from '../components/ResetPasswordCard'
import '../styles/tokens.css'

const meta: Meta<typeof ResetPasswordCard> = {
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
        component:
          'A comprehensive password reset card component with email validation, loading states, message handling, and full design token integration. Features proper accessibility and form handling.'
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
      description: 'Submit handler for the email'
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
type Story = StoryObj<typeof ResetPasswordCard>

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
      text: 'Password reset email sent successfully! Check your inbox for instructions.',
      dismissible: true
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Success state showing confirmation that the reset email was sent.'
      }
    }
  }
}

export const WithErrorMessage: Story = {
  args: {
    message: {
      type: 'error',
      text: 'Email address not found in our system. Please check your email and try again.',
      dismissible: true
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Error state when the email address is not found or invalid.'
      }
    }
  }
}

export const WithInfoMessage: Story = {
  args: {
    message: {
      type: 'info',
      text: 'If this email exists in our system, you will receive reset instructions within 5 minutes.',
      dismissible: true
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Info message providing additional context about the reset process.'
      }
    }
  }
}

export const WithWarningMessage: Story = {
  args: {
    message: {
      type: 'warning',
      text: 'You have reached the limit of 3 password reset requests per hour. Please try again later.',
      dismissible: true
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Warning message for rate limiting or other cautions.'
      }
    }
  }
}

export const WithPersistentMessage: Story = {
  args: {
    message: {
      type: 'info',
      text: 'For security reasons, we don\'t reveal whether an email exists in our system.',
      dismissible: false
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Non-dismissible message that stays visible for important information.'
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

// All sizes comparison
export const AllSizes: Story = {
  render: () => (
    <div style={{ 
      display: 'grid',
      gap: 'var(--spacing-8)',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      fontFamily: 'var(--font-family-primary)'
    }}>
      <div>
        <h3 style={{ 
          fontSize: 'var(--font-size-lg)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-gray-900)',
          margin: '0 0 var(--spacing-4) 0',
          textAlign: 'center'
        }}>
          Small
        </h3>
        <ResetPasswordCard
          maxWidth="320px"
          minWidth="280px"
          padding="sm"
          shadow="sm"
        />
      </div>
      
      <div>
        <h3 style={{ 
          fontSize: 'var(--font-size-lg)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-gray-900)',
          margin: '0 0 var(--spacing-4) 0',
          textAlign: 'center'
        }}>
          Medium
        </h3>
        <ResetPasswordCard
          maxWidth="400px"
          minWidth="360px"
          padding="md"
          shadow="md"
        />
      </div>
      
      <div>
        <h3 style={{ 
          fontSize: 'var(--font-size-lg)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-gray-900)',
          margin: '0 0 var(--spacing-4) 0',
          textAlign: 'center'
        }}>
          Large
        </h3>
        <ResetPasswordCard
          maxWidth="520px"
          minWidth="480px"
          padding="lg"
          shadow="lg"
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Comparison of all card sizes showing different padding and shadow options.'
      }
    }
  }
}

// All message types comparison
export const AllMessageTypes: Story = {
  render: () => (
    <div style={{ 
      display: 'grid',
      gap: 'var(--spacing-6)',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      fontFamily: 'var(--font-family-primary)'
    }}>
      <div>
        <h3 style={{ 
          fontSize: 'var(--font-size-base)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-gray-900)',
          margin: '0 0 var(--spacing-3) 0',
          textAlign: 'center'
        }}>
          Success Message
        </h3>
        <ResetPasswordCard
          maxWidth="380px"
          message={{
            type: 'success',
            text: 'Reset email sent successfully!',
            dismissible: true
          }}
        />
      </div>
      
      <div>
        <h3 style={{ 
          fontSize: 'var(--font-size-base)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-gray-900)',
          margin: '0 0 var(--spacing-3) 0',
          textAlign: 'center'
        }}>
          Error Message
        </h3>
        <ResetPasswordCard
          maxWidth="380px"
          message={{
            type: 'error',
            text: 'Email address not found.',
            dismissible: true
          }}
        />
      </div>
      
      <div>
        <h3 style={{ 
          fontSize: 'var(--font-size-base)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-gray-900)',
          margin: '0 0 var(--spacing-3) 0',
          textAlign: 'center'
        }}>
          Warning Message
        </h3>
        <ResetPasswordCard
          maxWidth="380px"
          message={{
            type: 'warning',
            text: 'Rate limit exceeded.',
            dismissible: true
          }}
        />
      </div>
      
      <div>
        <h3 style={{ 
          fontSize: 'var(--font-size-base)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-gray-900)',
          margin: '0 0 var(--spacing-3) 0',
          textAlign: 'center'
        }}>
          Info Message
        </h3>
        <ResetPasswordCard
          maxWidth="380px"
          message={{
            type: 'info',
            text: 'Check your email for instructions.',
            dismissible: true
          }}
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Comparison of all message types: success, error, warning, and info.'
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

    const handleSubmit = async (email: string) => {
      setLoading(true)
      setMessage(null)

      try {
        console.log('Submitting reset for:', email)
        // Simulate API call with different outcomes based on email
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        if (email.toLowerCase().includes('notfound')) {
          setMessage({
            type: 'error',
            text: 'Email address not found in our system. Please check your email and try again.',
            dismissible: true
          })
        } else if (email.toLowerCase().includes('blocked')) {
          setMessage({
            type: 'warning',
            text: 'You have exceeded the maximum number of reset attempts. Please try again in 1 hour.',
            dismissible: true
          })
        } else if (email.toLowerCase().includes('info')) {
          setMessage({
            type: 'info',
            text: 'If this email exists in our system, you will receive reset instructions within 5 minutes.',
            dismissible: false
          })
        } else {
          setMessage({
            type: 'success',
            text: `Password reset instructions have been sent to ${email}. Please check your inbox and spam folder.`,
            dismissible: true
          })
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
            Try different email addresses to see different responses:
          </p>
          <ul style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-gray-600)',
            margin: 0,
            paddingLeft: 'var(--spacing-4)',
            lineHeight: 'var(--line-height-normal)'
          }}>
            <li><code>user@notfound.com</code> - Error message</li>
            <li><code>user@blocked.com</code> - Warning message</li>
            <li><code>user@info.com</code> - Info message (persistent)</li>
            <li><code>user@example.com</code> - Success message</li>
          </ul>
        </div>

        <ResetPasswordCard
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
        story: 'Fully interactive demo with real form submission, loading states, and different message outcomes. Try the suggested email addresses to see various responses.'
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
        <ResetPasswordCard
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
        story: 'Reset password card in a realistic authentication flow context with proper spacing and background.'
      }
    }
  }
}