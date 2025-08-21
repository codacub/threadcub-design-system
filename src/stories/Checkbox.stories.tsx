// stories/Checkbox.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import React from 'react'
import { Checkbox } from '../components/Checkbox'
import '../styles/tokens.css'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Checkbox component with three sizes (sm, md, lg) and proper accessibility. Features custom styling, hover states, focus indicators, and disabled states using design tokens.'
      }
    }
  },
  argTypes: {
    label: { 
      control: 'text',
      description: 'The checkbox label text'
    },
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
      table: { defaultValue: { summary: 'false' } }
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
      table: { defaultValue: { summary: 'false' } }
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size variant',
      table: { defaultValue: { summary: 'md' } }
    },
    onChange: {
      action: 'changed',
      description: 'Callback when checkbox state changes'
    },
    onBlur: {
      action: 'blurred',
      description: 'Callback when checkbox loses focus'
    },
    name: {
      control: 'text',
      description: 'Name attribute for form submission'
    },
    id: {
      control: 'text',
      description: 'Unique identifier'
    }
  },
  args: {
    onChange: fn(),
    onBlur: fn(),
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Checkbox>

// Basic variants
export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
    checked: false,
    size: 'md'
  }
}

export const Checked: Story = {
  args: {
    label: 'Accept terms and conditions',
    checked: true,
    size: 'md'
  }
}

export const Disabled: Story = {
  args: {
    label: 'Accept terms and conditions',
    checked: false,
    disabled: true,
    size: 'md'
  }
}

export const DisabledChecked: Story = {
  args: {
    label: 'Accept terms and conditions',
    checked: true,
    disabled: true,
    size: 'md'
  }
}

// Size variants
export const Small: Story = {
  args: {
    label: 'Small checkbox (16px)',
    checked: false,
    size: 'sm'
  }
}

export const Medium: Story = {
  args: {
    label: 'Medium checkbox (20px)',
    checked: false,
    size: 'md'
  }
}

export const Large: Story = {
  args: {
    label: 'Large checkbox (24px)',
    checked: false,
    size: 'lg'
  }
}

// All sizes comparison
export const SizeComparison: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: 'var(--spacing-4)',
      fontFamily: 'var(--font-family-primary)'
    }}>
      <h3 style={{ 
        margin: 0, 
        fontSize: 'var(--font-size-lg)',
        fontWeight: 'var(--font-weight-semibold)',
        color: 'var(--color-gray-900)'
      }}>
        Size Comparison
      </h3>
      <Checkbox
        label="Small checkbox (16px)"
        checked={true}
        size="sm"
      />
      <Checkbox
        label="Medium checkbox (20px)"
        checked={true}
        size="md"
      />
      <Checkbox
        label="Large checkbox (24px)"
        checked={true}
        size="lg"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all available checkbox sizes with responsive icon scaling.'
      }
    }
  }
}

// All states comparison
export const StateComparison: Story = {
  render: () => (
    <div style={{ 
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 'var(--spacing-4)',
      fontFamily: 'var(--font-family-primary)'
    }}>
      <div>
        <h4 style={{ 
          margin: '0 0 var(--spacing-3) 0', 
          fontSize: 'var(--font-size-base)',
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--color-gray-700)'
        }}>
          Enabled States
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
          <Checkbox label="Unchecked state" checked={false} />
          <Checkbox label="Checked state" checked={true} />
        </div>
      </div>
      
      <div>
        <h4 style={{ 
          margin: '0 0 var(--spacing-3) 0', 
          fontSize: 'var(--font-size-base)',
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--color-gray-700)'
        }}>
          Disabled States
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
          <Checkbox label="Disabled unchecked" checked={false} disabled={true} />
          <Checkbox label="Disabled checked" checked={true} disabled={true} />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Overview of all checkbox states including enabled/disabled and checked/unchecked combinations.'
      }
    }
  }
}

// Real-world examples
export const FormExamples: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: 'var(--spacing-5)',
      fontFamily: 'var(--font-family-primary)'
    }}>
      <div>
        <h3 style={{ 
          margin: '0 0 var(--spacing-4) 0', 
          fontSize: 'var(--font-size-lg)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-gray-900)'
        }}>
          Common Form Use Cases
        </h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
          <Checkbox
            label="Remember me for 30 days"
            checked={false}
            size="md"
          />
          
          <Checkbox
            label="Subscribe to our newsletter for updates and tips"
            checked={true}
            size="md"
          />
          
          <Checkbox
            label="I agree to the Privacy Policy and Terms of Service"
            checked={false}
            size="sm"
          />
          
          <Checkbox
            label="Send me marketing emails and product updates"
            checked={false}
            size="md"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples showing common checkbox use cases in forms.'
      }
    }
  }
}

// Interactive example with state management
export const InteractiveExample: Story = {
  render: () => {
    const [preferences, setPreferences] = React.useState({
      newsletter: false,
      updates: true,
      marketing: false,
      rememberMe: true,
      terms: false
    })

    const handleChange = (key: keyof typeof preferences) => (checked: boolean) => {
      setPreferences(prev => ({ ...prev, [key]: checked }))
    }

    const checkedCount = Object.values(preferences).filter(Boolean).length

    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 'var(--spacing-4)',
        fontFamily: 'var(--font-family-primary)',
        maxWidth: '500px'
      }}>
        <div>
          <h3 style={{ 
            margin: '0 0 var(--spacing-2) 0', 
            fontSize: 'var(--font-size-lg)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--color-gray-900)'
          }}>
            Account Preferences
          </h3>
          <p style={{
            margin: '0 0 var(--spacing-4) 0',
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-gray-600)',
            lineHeight: 'var(--line-height-normal)'
          }}>
            Select your preferences below. You can change these at any time.
          </p>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
          <Checkbox
            label="Remember me for 30 days"
            checked={preferences.rememberMe}
            onChange={handleChange('rememberMe')}
            size="md"
          />
          
          <Checkbox
            label="Subscribe to newsletter"
            checked={preferences.newsletter}
            onChange={handleChange('newsletter')}
            size="md"
          />
          
          <Checkbox
            label="Product updates and announcements"
            checked={preferences.updates}
            onChange={handleChange('updates')}
            size="md"
          />
          
          <Checkbox
            label="Marketing emails and promotions"
            checked={preferences.marketing}
            onChange={handleChange('marketing')}
            size="md"
          />
          
          <Checkbox
            label="I agree to the Terms of Service"
            checked={preferences.terms}
            onChange={handleChange('terms')}
            size="sm"
          />
        </div>
        
        {/* Status display */}
        <div style={{ 
          marginTop: 'var(--spacing-4)',
          padding: 'var(--spacing-4)',
          backgroundColor: 'var(--color-gray-50)',
          borderRadius: 'var(--border-radius-lg)',
          border: `var(--border-width-thin) solid var(--color-border)`
        }}>
          <div style={{
            fontSize: 'var(--font-size-sm)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--color-gray-700)',
            marginBottom: 'var(--spacing-2)'
          }}>
            Summary: {checkedCount} of {Object.keys(preferences).length} options selected
          </div>
          
          <div style={{ 
            fontSize: 'var(--font-size-xs)',
            color: 'var(--color-gray-600)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--spacing-1)'
          }}>
            {Object.entries(preferences).map(([key, value]) => (
              <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
                <span style={{ 
                  color: value ? 'var(--color-success)' : 'var(--color-gray-400)',
                  fontWeight: 'var(--font-weight-medium)'
                }}>
                  {value ? '✓' : '○'}
                </span>
                <span style={{ textTransform: 'capitalize' }}>
                  {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example demonstrating checkbox state management in a realistic form context.'
      }
    }
  }
}

// Form context example
export const InSignupForm: Story = {
  render: () => (
    <div style={{
      width: '400px',
      margin: '0 auto',
      padding: 'var(--spacing-5)',
      border: `var(--border-width-thin) solid var(--color-border)`,
      borderRadius: 'var(--border-radius-xl)',
      backgroundColor: 'var(--color-white)',
      boxShadow: 'var(--shadow-card)',
      fontFamily: 'var(--font-family-primary)'
    }}>
      <h3 style={{ 
        margin: '0 0 var(--spacing-4) 0',
        fontSize: 'var(--font-size-xl)',
        fontWeight: 'var(--font-weight-semibold)',
        color: 'var(--color-gray-900)'
      }}>
        Create Account
      </h3>
      
      <div style={{ display: 'grid', gap: 'var(--spacing-4)' }}>
        <input
          placeholder="Full name"
          style={{
            padding: 'var(--spacing-3)',
            border: `var(--border-width-thin) solid var(--color-border-form)`,
            borderRadius: 'var(--border-radius-base)',
            fontSize: 'var(--font-size-base)',
            fontFamily: 'var(--font-family-primary)'
          }}
        />
        
        <input
          placeholder="Email address"
          type="email"
          style={{
            padding: 'var(--spacing-3)',
            border: `var(--border-width-thin) solid var(--color-border-form)`,
            borderRadius: 'var(--border-radius-base)',
            fontSize: 'var(--font-size-base)',
            fontFamily: 'var(--font-family-primary)'
          }}
        />
        
        <input
          placeholder="Password"
          type="password"
          style={{
            padding: 'var(--spacing-3)',
            border: `var(--border-width-thin) solid var(--color-border-form)`,
            borderRadius: 'var(--border-radius-base)',
            fontSize: 'var(--font-size-base)',
            fontFamily: 'var(--font-family-primary)'
          }}
        />
        
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 'var(--spacing-3)',
          marginTop: 'var(--spacing-2)'
        }}>
          <Checkbox
            label="I agree to the Terms of Service and Privacy Policy"
            checked={false}
            size="sm"
          />
          
          <Checkbox
            label="Send me product updates and newsletters"
            checked={true}
            size="sm"
          />
        </div>
        
        <button
          style={{
            marginTop: 'var(--spacing-2)',
            padding: 'var(--spacing-3)',
            border: 'none',
            borderRadius: 'var(--border-radius-base)',
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-white)',
            fontSize: 'var(--font-size-base)',
            fontWeight: 'var(--font-weight-semibold)',
            fontFamily: 'var(--font-family-primary)',
            cursor: 'pointer',
            transition: 'background-color var(--transition-base)'
          }}
        >
          Create Account
        </button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example showing checkboxes in a realistic signup form context.'
      }
    }
  }
}