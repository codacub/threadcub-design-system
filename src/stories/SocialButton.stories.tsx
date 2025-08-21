// stories/SocialButton.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import React from 'react'
import { SocialButton } from '../components/SocialButton'
import '../styles/tokens.css'

const meta: Meta<typeof SocialButton> = {
  title: 'Components/SocialButton',
  component: SocialButton,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Social authentication button component supporting multiple providers (Google, GitHub, Apple, Microsoft). Features loading states, multiple sizes, and customizable actions with proper branding colors and accessibility.'
      }
    }
  },
  argTypes: {
    provider: {
      control: { type: 'select' },
      options: ['google', 'github', 'apple', 'microsoft'],
      description: 'Social provider',
      table: { defaultValue: { summary: 'google' } }
    },
    action: {
      control: { type: 'select' },
      options: ['signup', 'signin', 'continue'],
      description: 'Button action type',
      table: { defaultValue: { summary: 'signup' } }
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
      table: { defaultValue: { summary: 'md' } }
    },
    text: {
      control: 'text',
      description: 'Custom button text'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether button is disabled',
      table: { defaultValue: { summary: 'false' } }
    },
    loading: {
      control: 'boolean',
      description: 'Loading state',
      table: { defaultValue: { summary: 'false' } }
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler'
    }
  },
  args: {
    onClick: fn()
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof SocialButton>

// Basic provider variants
export const Google: Story = {
  args: {
    provider: 'google'
  }
}

export const GitHub: Story = {
  args: {
    provider: 'github'
  }
}

export const Apple: Story = {
  args: {
    provider: 'apple'
  }
}

export const Microsoft: Story = {
  args: {
    provider: 'microsoft'
  }
}

// Action variants
export const SignIn: Story = {
  args: {
    provider: 'google',
    action: 'signin'
  }
}

export const Continue: Story = {
  args: {
    provider: 'google',
    action: 'continue'
  }
}

// Size variants
export const Small: Story = {
  args: {
    provider: 'google',
    size: 'sm'
  }
}

export const Large: Story = {
  args: {
    provider: 'google',
    size: 'lg'
  }
}

// State variants
export const Disabled: Story = {
  args: {
    provider: 'google',
    disabled: true
  }
}

export const Loading: Story = {
  args: {
    provider: 'google',
    loading: true
  }
}

export const CustomText: Story = {
  args: {
    provider: 'google',
    text: 'Connect Google Account'
  }
}

// All providers comparison
export const AllProviders: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gap: 'var(--spacing-3)',
      maxWidth: '400px',
      fontFamily: 'var(--font-family-primary)'
    }}>
      <h3 style={{ 
        margin: '0 0 var(--spacing-3) 0', 
        fontSize: 'var(--font-size-lg)',
        fontWeight: 'var(--font-weight-semibold)',
        color: 'var(--color-gray-900)'
      }}>
        All Providers
      </h3>
      
      <SocialButton provider="google" />
      <SocialButton provider="github" />
      <SocialButton provider="apple" />
      <SocialButton provider="microsoft" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all available social providers with their authentic branding.'
      }
    }
  }
}

// All sizes comparison
export const AllSizes: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gap: 'var(--spacing-4)',
      maxWidth: '400px',
      fontFamily: 'var(--font-family-primary)'
    }}>
      <div>
        <h4 style={{ 
          margin: '0 0 var(--spacing-2) 0', 
          fontSize: 'var(--font-size-base)',
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--color-gray-700)'
        }}>
          Small (36px)
        </h4>
        <SocialButton provider="google" size="sm" />
      </div>
      
      <div>
        <h4 style={{ 
          margin: '0 0 var(--spacing-2) 0', 
          fontSize: 'var(--font-size-base)',
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--color-gray-700)'
        }}>
          Medium (44px)
        </h4>
        <SocialButton provider="google" size="md" />
      </div>
      
      <div>
        <h4 style={{ 
          margin: '0 0 var(--spacing-2) 0', 
          fontSize: 'var(--font-size-base)',
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--color-gray-700)'
        }}>
          Large (48px)
        </h4>
        <SocialButton provider="google" size="lg" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all button sizes with consistent provider branding.'
      }
    }
  }
}

// All actions comparison
export const AllActions: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gap: 'var(--spacing-3)',
      maxWidth: '400px',
      fontFamily: 'var(--font-family-primary)'
    }}>
      <h3 style={{ 
        margin: '0 0 var(--spacing-3) 0', 
        fontSize: 'var(--font-size-lg)',
        fontWeight: 'var(--font-weight-semibold)',
        color: 'var(--color-gray-900)'
      }}>
        Action Types
      </h3>
      
      <SocialButton provider="google" action="signup" />
      <SocialButton provider="google" action="signin" />
      <SocialButton provider="google" action="continue" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different action types showing how the button text changes automatically.'
      }
    }
  }
}

// All states comparison
export const AllStates: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gap: 'var(--spacing-3)',
      maxWidth: '400px',
      fontFamily: 'var(--font-family-primary)'
    }}>
      <h3 style={{ 
        margin: '0 0 var(--spacing-3) 0', 
        fontSize: 'var(--font-size-lg)',
        fontWeight: 'var(--font-weight-semibold)',
        color: 'var(--color-gray-900)'
      }}>
        Button States
      </h3>
      
      <div>
        <h4 style={{ 
          margin: '0 0 var(--spacing-2) 0', 
          fontSize: 'var(--font-size-sm)',
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--color-gray-600)'
        }}>
          Default
        </h4>
        <SocialButton provider="google" />
      </div>
      
      <div>
        <h4 style={{ 
          margin: '0 0 var(--spacing-2) 0', 
          fontSize: 'var(--font-size-sm)',
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--color-gray-600)'
        }}>
          Loading
        </h4>
        <SocialButton provider="google" loading={true} />
      </div>
      
      <div>
        <h4 style={{ 
          margin: '0 0 var(--spacing-2) 0', 
          fontSize: 'var(--font-size-sm)',
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--color-gray-600)'
        }}>
          Disabled
        </h4>
        <SocialButton provider="google" disabled={true} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All button states including default, loading, and disabled.'
      }
    }
  }
}

// Real-world auth form example
export const InAuthForm: Story = {
  render: () => (
    <div style={{
      width: '400px',
      margin: '0 auto',
      padding: 'var(--spacing-6)',
      backgroundColor: 'var(--color-white)',
      borderRadius: 'var(--border-radius-xl)',
      border: `var(--border-width-thin) solid var(--color-border)`,
      boxShadow: 'var(--shadow-card)',
      fontFamily: 'var(--font-family-primary)'
    }}>
      <h3 style={{ 
        margin: '0 0 var(--spacing-2) 0',
        fontSize: 'var(--font-size-xl)',
        fontWeight: 'var(--font-weight-semibold)',
        color: 'var(--color-gray-900)',
        textAlign: 'center'
      }}>
        Create Account
      </h3>
      
      <p style={{
        margin: '0 0 var(--spacing-5) 0',
        fontSize: 'var(--font-size-base)',
        color: 'var(--color-gray-600)',
        textAlign: 'center',
        lineHeight: 'var(--line-height-normal)'
      }}>
        Sign up with your preferred method
      </p>
      
      <div style={{ display: 'grid', gap: 'var(--spacing-3)' }}>
        <SocialButton provider="google" action="signup" />
        <SocialButton provider="github" action="signup" />
        <SocialButton provider="apple" action="signup" />
      </div>
      
      <div style={{
        margin: 'var(--spacing-5) 0',
        position: 'relative',
        textAlign: 'center'
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          height: 'var(--border-width-thin)',
          backgroundColor: 'var(--color-gray-200)'
        }} />
        <span style={{
          backgroundColor: 'var(--color-white)',
          padding: '0 var(--spacing-4)',
          fontSize: 'var(--font-size-sm)',
          color: 'var(--color-gray-500)',
          position: 'relative'
        }}>
          OR
        </span>
      </div>
      
      <button
        style={{
          width: '100%',
          height: '44px',
          backgroundColor: 'var(--color-primary)',
          color: 'var(--color-white)',
          border: 'none',
          borderRadius: 'var(--border-radius-lg)',
          fontSize: 'var(--font-size-base)',
          fontWeight: 'var(--font-weight-semibold)',
          fontFamily: 'var(--font-family-primary)',
          cursor: 'pointer',
          transition: 'background-color var(--transition-base)'
        }}
      >
        Continue with Email
      </button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world example showing social buttons in an authentication form context.'
      }
    }
  }
}

// Interactive loading demo
export const InteractiveDemo: Story = {
  render: () => {
    const [loadingState, setLoadingState] = React.useState<string | null>(null)
    
    const handleClick = (provider: string) => {
      setLoadingState(provider)
      setTimeout(() => setLoadingState(null), 2000)
    }
    
    return (
      <div style={{
        width: '400px',
        margin: '0 auto',
        padding: 'var(--spacing-5)',
        backgroundColor: 'var(--color-white)',
        borderRadius: 'var(--border-radius-lg)',
        border: `var(--border-width-thin) solid var(--color-border)`,
        fontFamily: 'var(--font-family-primary)'
      }}>
        <h3 style={{ 
          margin: '0 0 var(--spacing-4) 0',
          fontSize: 'var(--font-size-lg)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-gray-900)',
          textAlign: 'center'
        }}>
          Interactive Loading Demo
        </h3>
        
        <p style={{
          margin: '0 0 var(--spacing-4) 0',
          fontSize: 'var(--font-size-sm)',
          color: 'var(--color-gray-600)',
          textAlign: 'center',
          lineHeight: 'var(--line-height-normal)'
        }}>
          Click any button to see the loading state (2 seconds)
        </p>
        
        <div style={{ display: 'grid', gap: 'var(--spacing-3)' }}>
          <SocialButton 
            provider="google" 
            loading={loadingState === 'google'}
            onClick={() => handleClick('google')}
          />
          <SocialButton 
            provider="github" 
            loading={loadingState === 'github'}
            onClick={() => handleClick('github')}
          />
          <SocialButton 
            provider="apple" 
            loading={loadingState === 'apple'}
            onClick={() => handleClick('apple')}
          />
          <SocialButton 
            provider="microsoft" 
            loading={loadingState === 'microsoft'}
            onClick={() => handleClick('microsoft')}
          />
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demonstration of loading states with real button clicks.'
      }
    }
  }
}