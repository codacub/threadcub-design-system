// stories/Logo.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Logo } from '../components/Logo'
import '../styles/tokens.css'

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'ThreadCub logo component with multiple sizes, variants for different backgrounds, and optional click interactions. Features proper accessibility and design token integration.'
      }
    }
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Logo size variant',
      table: { defaultValue: { summary: 'md' } }
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'white', 'dark'],
      description: 'Visual variant for different backgrounds',
      table: { defaultValue: { summary: 'default' } }
    },
    clickable: {
      control: { type: 'boolean' },
      description: 'Whether logo is clickable',
      table: { defaultValue: { summary: 'false' } }
    },
    alt: {
      control: { type: 'text' },
      description: 'Alt text for accessibility',
      table: { defaultValue: { summary: 'ThreadCub Logo' } }
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler function'
    }
  },
  args: {
    onClick: fn()
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Logo>

// Basic variants
export const Default: Story = {
  args: {
    size: 'md',
    variant: 'default'
  }
}

export const Small: Story = {
  args: {
    size: 'sm',
    variant: 'default'
  }
}

export const Large: Story = {
  args: {
    size: 'lg',
    variant: 'default'
  }
}

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    variant: 'default'
  }
}

// Interactive variant
export const Clickable: Story = {
  args: {
    size: 'md',
    variant: 'default',
    clickable: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Clickable logo with hover effects and proper accessibility. Try clicking or using keyboard navigation.'
      }
    }
  }
}

// Color variants
export const DarkVariant: Story = {
  args: {
    size: 'md',
    variant: 'dark'
  },
  parameters: {
    docs: {
      description: {
        story: 'Dark variant of the logo using CSS filters.'
      }
    }
  }
}

export const WhiteVariant: Story = {
  args: {
    size: 'md',
    variant: 'white'
  },
  decorators: [
    (Story) => (
      <div style={{
        backgroundColor: 'var(--color-gray-900)',
        padding: 'var(--spacing-8)',
        borderRadius: 'var(--border-radius-lg)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--spacing-4)'
      }}>
        <Story />
        <p style={{ 
          color: 'var(--color-white)', 
          fontSize: 'var(--font-size-sm)',
          fontFamily: 'var(--font-family-primary)',
          margin: 0
        }}>
          White variant for dark backgrounds
        </p>
      </div>
    )
  ],
  parameters: {
    docs: {
      description: {
        story: 'White variant using CSS filters, ideal for dark backgrounds.'
      }
    }
  }
}

// Size comparison
export const AllSizes: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      gap: 'var(--spacing-6)',
      alignItems: 'center',
      flexWrap: 'wrap',
      fontFamily: 'var(--font-family-primary)'
    }}>
      <div style={{ textAlign: 'center' }}>
        <Logo size="xs" />
        <p style={{ 
          fontSize: 'var(--font-size-xs)', 
          color: 'var(--color-gray-600)', 
          margin: 'var(--spacing-1) 0 0 0' 
        }}>
          XS (24px)
        </p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Logo size="sm" />
        <p style={{ 
          fontSize: 'var(--font-size-xs)', 
          color: 'var(--color-gray-600)', 
          margin: 'var(--spacing-1) 0 0 0' 
        }}>
          SM (32px)
        </p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Logo size="md" />
        <p style={{ 
          fontSize: 'var(--font-size-xs)', 
          color: 'var(--color-gray-600)', 
          margin: 'var(--spacing-1) 0 0 0' 
        }}>
          MD (48px)
        </p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Logo size="lg" />
        <p style={{ 
          fontSize: 'var(--font-size-xs)', 
          color: 'var(--color-gray-600)', 
          margin: 'var(--spacing-1) 0 0 0' 
        }}>
          LG (64px)
        </p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Logo size="xl" />
        <p style={{ 
          fontSize: 'var(--font-size-xs)', 
          color: 'var(--color-gray-600)', 
          margin: 'var(--spacing-1) 0 0 0' 
        }}>
          XL (80px)
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all available logo sizes from XS (24px) to XL (80px).'
      }
    }
  }
}

// Variant comparison
export const AllVariants: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      gap: 'var(--spacing-8)',
      alignItems: 'center',
      fontFamily: 'var(--font-family-primary)'
    }}>
      <div style={{ textAlign: 'center' }}>
        <Logo size="md" variant="default" />
        <p style={{ 
          fontSize: 'var(--font-size-sm)', 
          color: 'var(--color-gray-600)', 
          margin: 'var(--spacing-2) 0 0 0',
          fontWeight: 'var(--font-weight-medium)'
        }}>
          Default
        </p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Logo size="md" variant="dark" />
        <p style={{ 
          fontSize: 'var(--font-size-sm)', 
          color: 'var(--color-gray-600)', 
          margin: 'var(--spacing-2) 0 0 0',
          fontWeight: 'var(--font-weight-medium)'
        }}>
          Dark
        </p>
      </div>
      <div style={{ 
        textAlign: 'center',
        backgroundColor: 'var(--color-gray-900)', 
        padding: 'var(--spacing-4)', 
        borderRadius: 'var(--border-radius-lg)'
      }}>
        <Logo size="md" variant="white" />
        <p style={{ 
          fontSize: 'var(--font-size-sm)', 
          color: 'var(--color-white)', 
          margin: 'var(--spacing-2) 0 0 0',
          fontWeight: 'var(--font-weight-medium)'
        }}>
          White
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all logo variants: default, dark, and white for different background contexts.'
      }
    }
  }
}

// Real-world context examples
export const InAuthForm: Story = {
  render: () => (
    <div style={{ 
      textAlign: 'center',
      padding: 'var(--spacing-6)',
      backgroundColor: 'var(--color-white)',
      borderRadius: 'var(--border-radius-xl)',
      boxShadow: 'var(--shadow-card)',
      maxWidth: '400px',
      margin: '0 auto',
      fontFamily: 'var(--font-family-primary)'
    }}>
      <Logo size="lg" />
      <h2 style={{ 
        fontSize: 'var(--font-size-2xl)', 
        fontWeight: 'var(--font-weight-semibold)',
        color: 'var(--color-gray-900)',
        margin: 'var(--spacing-4) 0 var(--spacing-2) 0'
      }}>
        Welcome to ThreadCub
      </h2>
      <p style={{ 
        fontSize: 'var(--font-size-base)', 
        color: 'var(--color-gray-600)',
        margin: '0 0 var(--spacing-6) 0',
        lineHeight: 'var(--line-height-normal)'
      }}>
        Sign in to your account or create a new one
      </p>
      <div style={{ display: 'grid', gap: 'var(--spacing-3)' }}>
        <button style={{
          padding: 'var(--spacing-3)',
          border: 'none',
          borderRadius: 'var(--border-radius-lg)',
          backgroundColor: 'var(--color-primary)',
          color: 'var(--color-white)',
          fontSize: 'var(--font-size-base)',
          fontWeight: 'var(--font-weight-medium)',
          cursor: 'pointer',
          transition: 'var(--transition-base)'
        }}>
          Sign In
        </button>
        <button style={{
          padding: 'var(--spacing-3)',
          border: `var(--border-width-thin) solid var(--color-gray-300)`,
          borderRadius: 'var(--border-radius-lg)',
          backgroundColor: 'var(--color-white)',
          color: 'var(--color-gray-700)',
          fontSize: 'var(--font-size-base)',
          fontWeight: 'var(--font-weight-medium)',
          cursor: 'pointer',
          transition: 'var(--transition-base)'
        }}>
          Create Account
        </button>
      </div>
    </div>
  ),
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'Logo usage in an authentication form context with proper sizing and spacing.'
      }
    }
  }
}

export const InNavigation: Story = {
  render: () => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'var(--spacing-4) var(--spacing-6)',
      backgroundColor: 'var(--color-white)',
      borderBottom: `var(--border-width-thin) solid var(--color-gray-200)`,
      boxShadow: 'var(--shadow-card)',
      fontFamily: 'var(--font-family-primary)'
    }}>
      <Logo size="sm" clickable onClick={() => console.log('Navigate to home')} />
      <div style={{ 
        display: 'flex', 
        gap: 'var(--spacing-6)', 
        alignItems: 'center' 
      }}>
        <nav style={{ display: 'flex', gap: 'var(--spacing-4)' }}>
          <a href="#" style={{ 
            color: 'var(--color-gray-700)', 
            fontSize: 'var(--font-size-base)',
            textDecoration: 'none',
            fontWeight: 'var(--font-weight-medium)'
          }}>
            Dashboard
          </a>
          <a href="#" style={{ 
            color: 'var(--color-gray-700)', 
            fontSize: 'var(--font-size-base)',
            textDecoration: 'none',
            fontWeight: 'var(--font-weight-medium)'
          }}>
            Threads
          </a>
          <a href="#" style={{ 
            color: 'var(--color-gray-700)', 
            fontSize: 'var(--font-size-base)',
            textDecoration: 'none',
            fontWeight: 'var(--font-weight-medium)'
          }}>
            Analytics
          </a>
        </nav>
        <button style={{
          backgroundColor: 'var(--color-primary)',
          color: 'var(--color-white)',
          border: 'none',
          borderRadius: 'var(--border-radius-lg)',
          padding: 'var(--spacing-2) var(--spacing-4)',
          fontSize: 'var(--font-size-sm)',
          fontWeight: 'var(--font-weight-medium)',
          cursor: 'pointer',
          transition: 'var(--transition-base)'
        }}>
          Settings
        </button>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Logo usage in a navigation bar with clickable functionality and proper alignment.'
      }
    }
  }
}

export const InDarkInterface: Story = {
  render: () => (
    <div style={{
      backgroundColor: 'var(--color-gray-900)',
      padding: 'var(--spacing-6)',
      borderRadius: 'var(--border-radius-xl)',
      fontFamily: 'var(--font-family-primary)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 'var(--spacing-6)'
      }}>
        <Logo size="sm" variant="white" clickable />
        <div style={{ 
          display: 'flex', 
          gap: 'var(--spacing-4)', 
          alignItems: 'center' 
        }}>
          <span style={{ 
            color: 'var(--color-gray-300)', 
            fontSize: 'var(--font-size-sm)'
          }}>
            Dark Mode
          </span>
          <button style={{
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-white)',
            border: 'none',
            borderRadius: 'var(--border-radius-base)',
            padding: 'var(--spacing-1) var(--spacing-3)',
            fontSize: 'var(--font-size-xs)',
            cursor: 'pointer'
          }}>
            Pro
          </button>
        </div>
      </div>
      <div style={{
        backgroundColor: 'var(--color-gray-800)',
        padding: 'var(--spacing-4)',
        borderRadius: 'var(--border-radius-lg)',
        border: `var(--border-width-thin) solid var(--color-gray-700)`
      }}>
        <h3 style={{ 
          color: 'var(--color-white)', 
          fontSize: 'var(--font-size-lg)',
          fontWeight: 'var(--font-weight-semibold)',
          margin: '0 0 var(--spacing-2) 0'
        }}>
          Dashboard Overview
        </h3>
        <p style={{ 
          color: 'var(--color-gray-400)', 
          fontSize: 'var(--font-size-sm)',
          margin: 0,
          lineHeight: 'var(--line-height-normal)'
        }}>
          Your thread analytics and performance metrics
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Logo usage in a dark interface showing the white variant with proper contrast.'
      }
    }
  }
}