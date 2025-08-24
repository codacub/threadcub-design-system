// stories/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../components/Button'
import { Plus, Download, ArrowRight, Search, ChevronDown } from 'lucide-react'
import '../styles/tokens.css'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Button component with three variants (primary, secondary, tertiary) and three sizes (sm, md, lg). Includes proper hover, focus, disabled, and loading states using design tokens. Supports Lucide React icons with left/right positioning.'
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
    },
    icon: {
      control: false,
      description: 'Icon component (Lucide React icon) - Use stories to see examples'
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Position of the icon relative to text',
      table: { defaultValue: { summary: 'left' } }
    }
  },
  // Add default args for better control interaction
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    type: 'button',
    children: 'Button',
    iconPosition: 'left'
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

// Icon variants
export const WithIconLeft: Story = {
  args: {
    variant: 'primary',
    icon: <Plus />,
    children: 'Add Item'
  }
}

export const WithIconRight: Story = {
  args: {
    variant: 'primary',
    icon: <ArrowRight />,
    iconPosition: 'right',
    children: 'Continue'
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
              With Icons
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)', marginTop: 'var(--spacing-3)' }}>
              <Button variant="primary" icon={<Plus />}>Add</Button>
              <Button variant="secondary" icon={<Download />}>Download</Button>
              <Button variant="tertiary" icon={<Search />}>Search</Button>
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
              Icon Right
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)', marginTop: 'var(--spacing-3)' }}>
              <Button variant="primary" icon={<ArrowRight />} iconPosition="right">Next</Button>
              <Button variant="secondary" icon={<ChevronDown />} iconPosition="right">More</Button>
              <Button variant="tertiary" icon={<ArrowRight />} iconPosition="right">View</Button>
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

      {/* Button Sizes with Icons */}
      <div>
        <h3 style={{ 
          marginBottom: 'var(--spacing-4)', 
          fontSize: 'var(--font-size-lg)', 
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-gray-900)',
          margin: 0
        }}>
          Button Sizes with Icons
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
              <Button variant="primary" size="sm" icon={<Plus />}>Add</Button>
              <Button variant="secondary" size="sm" icon={<Download />}>Download</Button>
              <Button variant="tertiary" size="sm" icon={<ArrowRight />} iconPosition="right">Next</Button>
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
              <Button variant="primary" size="md" icon={<Plus />}>Add</Button>
              <Button variant="secondary" size="md" icon={<Download />}>Download</Button>
              <Button variant="tertiary" size="md" icon={<ArrowRight />} iconPosition="right">Next</Button>
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
              <Button variant="primary" size="lg" icon={<Plus />}>Add</Button>
              <Button variant="secondary" size="lg" icon={<Download />}>Download</Button>
              <Button variant="tertiary" size="lg" icon={<ArrowRight />} iconPosition="right">Next</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Icon Positioning Examples */}
      <div>
        <h3 style={{ 
          marginBottom: 'var(--spacing-4)', 
          fontSize: 'var(--font-size-lg)', 
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-gray-900)',
          margin: 0
        }}>
          Icon Positioning
        </h3>
        <div style={{ 
          display: 'flex', 
          gap: 'var(--spacing-4)', 
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 'var(--spacing-4)'
        }}>
          <Button variant="primary" icon={<Plus />} iconPosition="left">
            Add Item
          </Button>
          <Button variant="secondary" icon={<ArrowRight />} iconPosition="right">
            Continue
          </Button>
          <Button variant="tertiary" icon={<Download />} iconPosition="left">
            Download
          </Button>
          <Button variant="primary" icon={<ChevronDown />} iconPosition="right">
            Options
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive overview of all button variants, states, sizes, and icon positioning options.'
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
          <Button variant="primary" size="md" type="submit" icon={<ArrowRight />} iconPosition="right">
            Send Message
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example showing buttons with icons in a realistic form context with proper spacing and hierarchy.'
      }
    }
  }
}