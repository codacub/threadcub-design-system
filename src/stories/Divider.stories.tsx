// stories/Divider.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from '../components/Divider'
import '../styles/tokens.css'

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Divider component for visually separating content sections. Supports text labels, multiple color variants, and flexible spacing options using design tokens.'
      }
    }
  },
  argTypes: {
    text: { 
      control: 'text',
      description: 'Text to display in the center of the divider'
    },
    color: {
      control: { type: 'select' },
      options: ['gray', 'light', 'muted'],
      description: 'Color variant for line and text',
      table: { defaultValue: { summary: 'gray' } }
    },
    spacing: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Spacing above and below the divider',
      table: { defaultValue: { summary: 'md' } }
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Divider>

// Basic variants
export const Default: Story = {
  args: {
    text: 'OR'
  }
}

export const WithoutText: Story = {
  args: {
    text: ''
  },
  parameters: {
    docs: {
      description: {
        story: 'Simple horizontal line without text label.'
      }
    }
  }
}

export const CustomText: Story = {
  args: {
    text: 'AND'
  }
}

export const ContinueWith: Story = {
  args: {
    text: 'Continue with'
  }
}

// Color variants
export const LightColor: Story = {
  args: {
    text: 'OR',
    color: 'light'
  }
}

export const MutedColor: Story = {
  args: {
    text: 'OR',
    color: 'muted'
  }
}

// Spacing variants
export const SmallSpacing: Story = {
  args: {
    text: 'OR',
    spacing: 'sm'
  }
}

export const LargeSpacing: Story = {
  args: {
    text: 'OR',
    spacing: 'lg'
  }
}

// All color variants comparison
export const AllColors: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: 'var(--spacing-2)',
      maxWidth: '400px',
      fontFamily: 'var(--font-family-primary)'
    }}>
      <h3 style={{ 
        margin: '0 0 var(--spacing-4) 0', 
        fontSize: 'var(--font-size-lg)',
        fontWeight: 'var(--font-weight-semibold)',
        color: 'var(--color-gray-900)'
      }}>
        Color Variants
      </h3>
      
      <div>
        <p style={{ 
          fontSize: 'var(--font-size-sm)', 
          color: 'var(--color-gray-600)', 
          margin: '0 0 var(--spacing-2) 0'
        }}>
          Light
        </p>
        <Divider color="light" text="OR" spacing="sm" />
      </div>
      
      <div>
        <p style={{ 
          fontSize: 'var(--font-size-sm)', 
          color: 'var(--color-gray-600)', 
          margin: '0 0 var(--spacing-2) 0'
        }}>
          Gray (default)
        </p>
        <Divider color="gray" text="OR" spacing="sm" />
      </div>
      
      <div>
        <p style={{ 
          fontSize: 'var(--font-size-sm)', 
          color: 'var(--color-gray-600)', 
          margin: '0 0 var(--spacing-2) 0'
        }}>
          Muted
        </p>
        <Divider color="muted" text="OR" spacing="sm" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all available color variants with consistent text and spacing.'
      }
    }
  }
}

// All spacing variants comparison
export const AllSpacing: Story = {
  render: () => (
    <div style={{ 
      maxWidth: '400px',
      fontFamily: 'var(--font-family-primary)'
    }}>
      <h3 style={{ 
        margin: '0 0 var(--spacing-4) 0', 
        fontSize: 'var(--font-size-lg)',
        fontWeight: 'var(--font-weight-semibold)',
        color: 'var(--color-gray-900)'
      }}>
        Spacing Variants
      </h3>
      
      <div style={{ backgroundColor: 'var(--color-gray-50)', padding: 'var(--spacing-4)', borderRadius: 'var(--border-radius-lg)' }}>
        <p style={{ 
          fontSize: 'var(--font-size-sm)', 
          color: 'var(--color-gray-600)', 
          margin: 0
        }}>
          Content above small spacing
        </p>
        <Divider spacing="sm" />
        <p style={{ 
          fontSize: 'var(--font-size-sm)', 
          color: 'var(--color-gray-600)', 
          margin: 0
        }}>
          Content below small spacing
        </p>
      </div>
      
      <div style={{ backgroundColor: 'var(--color-gray-50)', padding: 'var(--spacing-4)', borderRadius: 'var(--border-radius-lg)', marginTop: 'var(--spacing-4)' }}>
        <p style={{ 
          fontSize: 'var(--font-size-sm)', 
          color: 'var(--color-gray-600)', 
          margin: 0
        }}>
          Content above medium spacing
        </p>
        <Divider spacing="md" />
        <p style={{ 
          fontSize: 'var(--font-size-sm)', 
          color: 'var(--color-gray-600)', 
          margin: 0
        }}>
          Content below medium spacing
        </p>
      </div>
      
      <div style={{ backgroundColor: 'var(--color-gray-50)', padding: 'var(--spacing-4)', borderRadius: 'var(--border-radius-lg)', marginTop: 'var(--spacing-4)' }}>
        <p style={{ 
          fontSize: 'var(--font-size-sm)', 
          color: 'var(--color-gray-600)', 
          margin: 0
        }}>
          Content above large spacing
        </p>
        <Divider spacing="lg" />
        <p style={{ 
          fontSize: 'var(--font-size-sm)', 
          color: 'var(--color-gray-600)', 
          margin: 0
        }}>
          Content below large spacing
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of spacing variants showing how they affect content separation.'
      }
    }
  }
}

// Real-world examples
export const InAuthForm: Story = {
  render: () => (
    <div style={{ 
      maxWidth: '400px', 
      margin: '0 auto',
      padding: 'var(--spacing-6)',
      backgroundColor: 'var(--color-white)',
      borderRadius: 'var(--border-radius-xl)',
      boxShadow: 'var(--shadow-card)',
      border: `var(--border-width-thin) solid var(--color-border)`,
      fontFamily: 'var(--font-family-primary)'
    }}>
      <h3 style={{ 
        margin: '0 0 var(--spacing-5) 0',
        fontSize: 'var(--font-size-xl)',
        fontWeight: 'var(--font-weight-semibold)',
        color: 'var(--color-gray-900)',
        textAlign: 'center'
      }}>
        Sign up
      </h3>
      
      {/* Email input */}
      <div style={{ marginBottom: 'var(--spacing-4)' }}>
        <label style={{ 
          fontSize: 'var(--font-size-sm)', 
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--color-gray-700)',
          display: 'block',
          marginBottom: 'var(--spacing-2)'
        }}>
          Email
        </label>
        <input 
          placeholder="Enter your email"
          style={{
            width: '100%',
            height: '44px',
            padding: `0 var(--spacing-3)`,
            border: `var(--border-width-thin) solid var(--color-border-form)`,
            borderRadius: 'var(--border-radius-lg)',
            fontSize: 'var(--font-size-base)',
            fontFamily: 'var(--font-family-primary)',
            boxSizing: 'border-box',
            transition: 'border-color var(--transition-base)'
          }}
        />
      </div>
      
      {/* Primary button */}
      <button style={{
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
        transition: 'background-color var(--transition-base)',
        boxSizing: 'border-box'
      }}>
        Create Account
      </button>
      
      {/* Divider */}
      <Divider text="OR" />
      
      {/* Social buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
        <button style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '44px',
          backgroundColor: 'var(--color-white)',
          border: `var(--border-width-thin) solid var(--color-gray-300)`,
          borderRadius: 'var(--border-radius-lg)',
          fontSize: 'var(--font-size-base)',
          fontWeight: 'var(--font-weight-medium)',
          fontFamily: 'var(--font-family-primary)',
          cursor: 'pointer',
          gap: 'var(--spacing-3)',
          color: 'var(--color-gray-700)',
          boxSizing: 'border-box',
          transition: 'background-color var(--transition-base)'
        }}>
          <div style={{ 
            width: '20px', 
            height: '20px', 
            backgroundColor: '#4285F4', 
            borderRadius: 'var(--border-radius-base)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '12px',
            fontWeight: 'bold'
          }}>
            G
          </div>
          Continue with Google
        </button>
        
        <button style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '44px',
          backgroundColor: 'var(--color-white)',
          border: `var(--border-width-thin) solid var(--color-gray-300)`,
          borderRadius: 'var(--border-radius-lg)',
          fontSize: 'var(--font-size-base)',
          fontWeight: 'var(--font-weight-medium)',
          fontFamily: 'var(--font-family-primary)',
          cursor: 'pointer',
          gap: 'var(--spacing-3)',
          color: 'var(--color-gray-700)',
          boxSizing: 'border-box',
          transition: 'background-color var(--transition-base)'
        }}>
          <div style={{ 
            width: '20px', 
            height: '20px', 
            backgroundColor: '#24292e', 
            borderRadius: 'var(--border-radius-base)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '12px',
            fontWeight: 'bold'
          }}>
            GH
          </div>
          Continue with GitHub
        </button>
      </div>
    </div>
  ),
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'Real-world example showing the divider in an authentication form context.'
      }
    }
  }
}

// Content sections example
export const ContentSections: Story = {
  render: () => (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: 'var(--spacing-6)',
      backgroundColor: 'var(--color-white)',
      borderRadius: 'var(--border-radius-xl)',
      border: `var(--border-width-thin) solid var(--color-border)`,
      fontFamily: 'var(--font-family-primary)'
    }}>
      <h2 style={{
        margin: '0 0 var(--spacing-4) 0',
        fontSize: 'var(--font-size-2xl)',
        fontWeight: 'var(--font-weight-semibold)',
        color: 'var(--color-gray-900)'
      }}>
        Product Features
      </h2>
      
      <div style={{
        padding: 'var(--spacing-4)',
        backgroundColor: 'var(--color-gray-50)',
        borderRadius: 'var(--border-radius-lg)',
        marginBottom: 'var(--spacing-2)'
      }}>
        <h3 style={{
          margin: '0 0 var(--spacing-2) 0',
          fontSize: 'var(--font-size-lg)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-gray-900)'
        }}>
          Core Features
        </h3>
        <p style={{
          margin: 0,
          fontSize: 'var(--font-size-base)',
          color: 'var(--color-gray-600)',
          lineHeight: 'var(--line-height-normal)'
        }}>
          Essential functionality that powers your workflow with reliability and performance.
        </p>
      </div>
      
      <Divider text="" spacing="md" />
      
      <div style={{
        padding: 'var(--spacing-4)',
        backgroundColor: 'var(--color-gray-50)',
        borderRadius: 'var(--border-radius-lg)',
        marginBottom: 'var(--spacing-2)'
      }}>
        <h3 style={{
          margin: '0 0 var(--spacing-2) 0',
          fontSize: 'var(--font-size-lg)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-gray-900)'
        }}>
          Advanced Tools
        </h3>
        <p style={{
          margin: 0,
          fontSize: 'var(--font-size-base)',
          color: 'var(--color-gray-600)',
          lineHeight: 'var(--line-height-normal)'
        }}>
          Professional-grade features for teams and enterprises requiring advanced capabilities.
        </p>
      </div>
      
      <Divider text="PREMIUM" spacing="md" color="muted" />
      
      <div style={{
        padding: 'var(--spacing-4)',
        backgroundColor: 'var(--color-primary-bg)',
        borderRadius: 'var(--border-radius-lg)',
        border: `var(--border-width-thin) solid var(--color-primary)`
      }}>
        <h3 style={{
          margin: '0 0 var(--spacing-2) 0',
          fontSize: 'var(--font-size-lg)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-primary)'
        }}>
          Premium Features
        </h3>
        <p style={{
          margin: 0,
          fontSize: 'var(--font-size-base)',
          color: 'var(--color-gray-700)',
          lineHeight: 'var(--line-height-normal)'
        }}>
          Exclusive features and priority support for our premium subscribers.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example showing dividers used to separate different content sections with varying styles.'
      }
    }
  }
}