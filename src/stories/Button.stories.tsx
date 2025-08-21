// stories/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../components/Button'
import '../styles/tokens.css'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Button component with three variants (primary, secondary, tertiary) and three sizes (sm, md, lg). Includes proper hover, focus, disabled, and loading states using design tokens.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Visual style variant of the button',
      table: { defaultValue: { summary: 'primary' } }
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button',
      table: { defaultValue: { summary: 'md' } }
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: { defaultValue: { summary: 'false' } }
    },
    loading: {
      control: 'boolean',
      description: 'Loading state',
      table: { defaultValue: { summary: 'false' } }
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      description: 'HTML button type',
      table: { defaultValue: { summary: 'button' } }
    },
    children: {
      control: 'text',
      description: 'Button content'
    },
    onClick: {
      action: 'clicked',
      description: 'Click event handler'
    }
  }
}

export default meta
type Story = StoryObj<typeof Button>

// Basic variants
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary button'
  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary button'
  }
}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary button'
  }
}

// Size variants
export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Small button'
  }
}

export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Medium button'
  }
}

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Large button'
  }
}

// State variants
export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled button'
  }
}

export const Loading: Story = {
  args: {
    variant: 'primary',
    loading: true,
    children: 'Loading...'
  }
}

export const LoadingSecondary: Story = {
  args: {
    variant: 'secondary',
    loading: true,
    children: 'Loading...'
  }
}

export const LoadingTertiary: Story = {
  args: {
    variant: 'tertiary',
    loading: true,
    children: 'Loading...'
  }
}

export const WithIcon: Story = {
  args: {
    variant: 'primary',
    children: (
      <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12h14"/>
        </svg>
        Add Item
      </span>
    )
  }
}

// All variants comparison
export const AllVariants: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gap: 'var(--spacing-6)',
      fontFamily: 'var(--font-family-primary)'
    }}>
      
      {/* Button Variants */}
      <div>
        <h3 style={{ 
          marginBottom: 'var(--spacing-4)', 
          fontSize: 'var(--font-size-lg)', 
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-gray-900)',
          margin: 0
        }}>
          Button Variants
        </h3>
        <div style={{ 
          display: 'grid', 
          gap: 'var(--spacing-4)', 
          gridTemplateColumns: 'repeat(5, 1fr)', 
          textAlign: 'center',
          marginTop: 'var(--spacing-4)'
        }}>
          <div>
            <h4 style={{ 
              marginBottom: 'var(--spacing-3)', 
              fontSize: 'var(--font-size-base)', 
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--color-gray-700)',
              margin: 0
            }}>
              Default
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)', marginTop: 'var(--spacing-3)' }}>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="tertiary">Tertiary</Button>
            </div>
          </div>
          
          <div>
            <h4 style={{ 
              marginBottom: 'var(--spacing-3)', 
              fontSize: 'var(--font-size-base)', 
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--color-gray-700)',
              margin: 0
            }}>
              Loading
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)', marginTop: 'var(--spacing-3)' }}>
              <Button variant="primary" loading>Primary</Button>
              <Button variant="secondary" loading>Secondary</Button>
              <Button variant="tertiary" loading>Tertiary</Button>
            </div>
          </div>
          
          <div>
            <h4 style={{ 
              marginBottom: 'var(--spacing-3)', 
              fontSize: 'var(--font-size-base)', 
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--color-gray-700)',
              margin: 0
            }}>
              Hover
            </h4>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 'var(--spacing-3)', 
              marginTop: 'var(--spacing-3)',
              fontSize: 'var(--font-size-sm)', 
              color: 'var(--color-gray-500)',
              fontStyle: 'italic'
            }}>
              <div>Hover over buttons →</div>
              <div>to see hover states</div>
            </div>
          </div>
          
          <div>
            <h4 style={{ 
              marginBottom: 'var(--spacing-3)', 
              fontSize: 'var(--font-size-base)', 
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--color-gray-700)',
              margin: 0
            }}>
              Focus
            </h4>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 'var(--spacing-3)', 
              marginTop: 'var(--spacing-3)',
              fontSize: 'var(--font-size-sm)', 
              color: 'var(--color-gray-500)',
              fontStyle: 'italic'
            }}>
              <div>Tab to focus →</div>
              <div>or click to see focus</div>
            </div>
          </div>
          
          <div>
            <h4 style={{ 
              marginBottom: 'var(--spacing-3)', 
              fontSize: 'var(--font-size-base)', 
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--color-gray-700)',
              margin: 0
            }}>
              Disabled
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)', marginTop: 'var(--spacing-3)' }}>
              <Button variant="primary" disabled>Primary</Button>
              <Button variant="secondary" disabled>Secondary</Button>
              <Button variant="tertiary" disabled>Tertiary</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Button Sizes */}
      <div>
        <h3 style={{ 
          marginBottom: 'var(--spacing-4)', 
          fontSize: 'var(--font-size-lg)', 
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-gray-900)',
          margin: 0
        }}>
          Button Sizes
        </h3>
        <div style={{ 
          display: 'grid', 
          gap: 'var(--spacing-4)', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          textAlign: 'center',
          marginTop: 'var(--spacing-4)'
        }}>
          <div>
            <h4 style={{ 
              marginBottom: 'var(--spacing-3)', 
              fontSize: 'var(--font-size-base)', 
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--color-gray-700)',
              margin: 0
            }}>
              Small (36px)
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)', marginTop: 'var(--spacing-3)' }}>
              <Button variant="primary" size="sm">Small primary</Button>
              <Button variant="secondary" size="sm">Small secondary</Button>
              <Button variant="tertiary" size="sm">Small tertiary</Button>
            </div>
          </div>
          
          <div>
            <h4 style={{ 
              marginBottom: 'var(--spacing-3)', 
              fontSize: 'var(--font-size-base)', 
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--color-gray-700)',
              margin: 0
            }}>
              Medium (40px)
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)', marginTop: 'var(--spacing-3)' }}>
              <Button variant="primary" size="md">Medium primary</Button>
              <Button variant="secondary" size="md">Medium secondary</Button>
              <Button variant="tertiary" size="md">Medium tertiary</Button>
            </div>
          </div>
          
          <div>
            <h4 style={{ 
              marginBottom: 'var(--spacing-3)', 
              fontSize: 'var(--font-size-base)', 
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--color-gray-700)',
              margin: 0
            }}>
              Large (44px)
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)', marginTop: 'var(--spacing-3)' }}>
              <Button variant="primary" size="lg">Large primary</Button>
              <Button variant="secondary" size="lg">Large secondary</Button>
              <Button variant="tertiary" size="lg">Large tertiary</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive overview of all button variants, states, and sizes including loading states.'
      }
    }
  }
}

// Form context example
export const InFormContext: Story = {
  render: () => (
    <div style={{
      width: '400px',
      padding: 'var(--spacing-5)',
      border: 'var(--border-width-thin) solid var(--color-border)',
      borderRadius: 'var(--border-radius-xl)',
      backgroundColor: 'var(--color-white)',
      fontFamily: 'var(--font-family-primary)'
    }}>
      <h3 style={{ 
        margin: '0 0 var(--spacing-4) 0',
        fontSize: 'var(--font-size-xl)',
        fontWeight: 'var(--font-weight-semibold)',
        color: 'var(--color-gray-900)'
      }}>
        Contact Form
      </h3>
      
      <div style={{ display: 'grid', gap: 'var(--spacing-4)' }}>
        <input
          placeholder="Your name"
          style={{
            padding: 'var(--spacing-3)',
            border: 'var(--border-width-thin) solid var(--color-border-form)',
            borderRadius: 'var(--border-radius-base)',
            fontSize: 'var(--font-size-base)',
            fontFamily: 'var(--font-family-primary)'
          }}
        />
        
        <textarea
          placeholder="Your message"
          rows={4}
          style={{
            padding: 'var(--spacing-3)',
            border: 'var(--border-width-thin) solid var(--color-border-form)',
            borderRadius: 'var(--border-radius-base)',
            fontSize: 'var(--font-size-base)',
            fontFamily: 'var(--font-family-primary)',
            resize: 'vertical'
          }}
        />
        
        <div style={{ 
          display: 'flex', 
          gap: 'var(--spacing-3)', 
          justifyContent: 'flex-end',
          marginTop: 'var(--spacing-2)'
        }}>
          <Button variant="tertiary" size="md">
            Cancel
          </Button>
          <Button variant="primary" size="md" type="submit">
            Send Message
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example showing buttons in a realistic form context with proper spacing and hierarchy.'
      }
    }
  }
}