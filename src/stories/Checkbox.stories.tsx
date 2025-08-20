// src/stories/Checkbox.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import React from 'react'
import { Checkbox } from '../components/Checkbox'

// Import your tokens
import '../styles/tokens.css'

// Storybook configuration
const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
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
    label: { 
      control: 'text',
      description: 'The checkbox label text'
    },
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size variant'
    },
    onChange: {
      action: 'changed',
      description: 'Callback when checkbox state changes'
    },
    onBlur: {
      action: 'blurred',
      description: 'Callback when checkbox loses focus'
    },
  },
  args: {
    onChange: fn(),
    onBlur: fn(),
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Basic Stories
export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
    checked: false,
    disabled: false,
    size: 'md',
  },
}

export const Checked: Story = {
  args: {
    label: 'Accept terms and conditions',
    checked: true,
    disabled: false,
    size: 'md',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Accept terms and conditions',
    checked: false,
    disabled: true,
    size: 'md',
  },
}

export const DisabledChecked: Story = {
  args: {
    label: 'Accept terms and conditions',
    checked: true,
    disabled: true,
    size: 'md',
  },
}

// Size Variants
export const Small: Story = {
  args: {
    label: 'Small checkbox',
    checked: false,
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    label: 'Medium checkbox',
    checked: false,
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    label: 'Large checkbox',
    checked: false,
    size: 'lg',
  },
}

// Real-world Examples
export const RememberMe: Story = {
  args: {
    label: 'Remember me for 30 days',
    checked: false,
    size: 'md',
  },
}

export const NewsletterSignup: Story = {
  args: {
    label: 'Subscribe to our newsletter for updates and tips',
    checked: true,
    size: 'md',
  },
}

export const PrivacyConsent: Story = {
  args: {
    label: 'I agree to the Privacy Policy and Terms of Service',
    checked: false,
    size: 'sm',
  },
}

export const MarketingEmails: Story = {
  args: {
    label: 'Send me marketing emails and product updates',
    checked: false,
    size: 'md',
  },
}

// Size Comparison
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
        color: 'var(--color-gray-900)'
      }}>
        Size Comparison:
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
}

// State Comparison
export const StateComparison: Story = {
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
        color: 'var(--color-gray-900)'
      }}>
        All States:
      </h3>
      <Checkbox
        label="Unchecked state"
        checked={false}
      />
      <Checkbox
        label="Checked state"
        checked={true}
      />
      <Checkbox
        label="Disabled unchecked"
        checked={false}
        disabled={true}
      />
      <Checkbox
        label="Disabled checked"
        checked={true}
        disabled={true}
      />
    </div>
  ),
}

// Multiple Checkboxes Example
export const MultipleOptions: Story = {
  render: () => {
    const [preferences, setPreferences] = React.useState({
      newsletter: false,
      updates: true,
      marketing: false,
      rememberMe: true
    })

    const handleChange = (key: keyof typeof preferences) => (checked: boolean) => {
      setPreferences(prev => ({ ...prev, [key]: checked }))
    }

    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 'var(--spacing-4)',
        fontFamily: 'var(--font-family-primary)'
      }}>
        <h3 style={{ 
          margin: 0, 
          fontSize: 'var(--font-size-lg)',
          color: 'var(--color-gray-900)'
        }}>
          Select your preferences:
        </h3>
        <Checkbox
          label="Remember me for 30 days"
          checked={preferences.rememberMe}
          onChange={handleChange('rememberMe')}
        />
        <Checkbox
          label="Subscribe to newsletter"
          checked={preferences.newsletter}
          onChange={handleChange('newsletter')}
        />
        <Checkbox
          label="Product updates"
          checked={preferences.updates}
          onChange={handleChange('updates')}
        />
        <Checkbox
          label="Marketing emails"
          checked={preferences.marketing}
          onChange={handleChange('marketing')}
        />
        
        {/* Show current selections */}
        <div style={{ 
          marginTop: 'var(--spacing-4)',
          padding: 'var(--spacing-4)',
          backgroundColor: 'var(--color-gray-50)',
          borderRadius: 'var(--border-radius-base)',
          fontSize: 'var(--font-size-sm)',
          color: 'var(--color-gray-600)'
        }}>
          <strong>Current selections:</strong>
          <ul style={{ margin: 'var(--spacing-2) 0 0 0', paddingLeft: 'var(--spacing-4)' }}>
            {Object.entries(preferences).map(([key, value]) => (
              <li key={key}>
                {key}: {value ? 'Yes' : 'No'}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  },
}

// Interactive Testing Story
export const Interactive: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(args.checked || false)

    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 'var(--spacing-4)',
        fontFamily: 'var(--font-family-primary)'
      }}>
        <Checkbox
          label={args.label || 'Interactive checkbox - click to test'}
          checked={checked}
          disabled={args.disabled}
          size={args.size}
          onChange={(newChecked) => {
            setChecked(newChecked)
            if (args.onChange) args.onChange(newChecked)
          }}
          onBlur={args.onBlur}
        />
        <div style={{ 
          padding: 'var(--spacing-3)',
          backgroundColor: 'var(--color-gray-50)',
          borderRadius: 'var(--border-radius-base)',
          fontSize: 'var(--font-size-sm)',
          color: 'var(--color-gray-600)'
        }}>
          <strong>Current state:</strong> {checked ? 'Checked ✓' : 'Unchecked ○'}
        </div>
      </div>
    )
  },
  args: {
    label: 'Interactive checkbox - click to test',
    checked: false,
    size: 'md',
  },
}