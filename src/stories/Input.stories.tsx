// stories/Input.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import React from 'react'
import { Input } from '../components/Input'
import '../styles/tokens.css'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Input component with multiple types (text, email, password), error states, hint text, and trailing icons. Features proper accessibility, focus states, and design token integration.'
      }
    }
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Input label text'
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
      table: { defaultValue: { summary: 'Enter text' } }
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password'],
      description: 'Input type',
      table: { defaultValue: { summary: 'text' } }
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether input is disabled',
      table: { defaultValue: { summary: 'false' } }
    },
    error: {
      control: { type: 'boolean' },
      description: 'Whether input has an error state',
      table: { defaultValue: { summary: 'false' } }
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether input is required',
      table: { defaultValue: { summary: 'false' } }
    },
    showTrailingIcon: {
      control: { type: 'boolean' },
      description: 'Whether to show trailing icon',
      table: { defaultValue: { summary: 'false' } }
    },
    showHintText: {
      control: { type: 'boolean' },
      description: 'Whether to show hint text',
      table: { defaultValue: { summary: 'false' } }
    },
    errorMessage: {
      control: { type: 'text' },
      description: 'Error message to display'
    },
    hintText: {
      control: { type: 'text' },
      description: 'Hint text to display'
    },
    value: {
      control: { type: 'text' },
      description: 'Input value (controlled)'
    },
    onChange: {
      action: 'changed',
      description: 'Change handler'
    },
    onBlur: {
      action: 'blurred',
      description: 'Blur handler'
    },
    onFocus: {
      action: 'focused',
      description: 'Focus handler'
    }
  },
  args: {
    onChange: fn(),
    onBlur: fn(),
    onFocus: fn(),
    // Set explicit boolean defaults to prevent string issues
    disabled: false,
    error: false,
    required: false,
    showTrailingIcon: false,
    showHintText: false
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Input>

// Basic variants
export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'text'
  }
}

export const Email: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
    showTrailingIcon: true,
    showHintText: true,
    hintText: 'We\'ll never share your email with anyone else.'
  }
}

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    showTrailingIcon: true,
    showHintText: true,
    hintText: 'Must be at least 8 characters'
  }
}

export const Required: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
    type: 'text',
    required: true,
    showHintText: true,
    hintText: 'This field is required'
  }
}

// State variants
export const Disabled: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    disabled: true,
    showTrailingIcon: true,
    value: 'user@example.com'
  }
}

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    error: true,
    errorMessage: 'Please enter a valid email address',
    showTrailingIcon: true,
    showHintText: true,
    value: 'invalid-email'
  }
}

export const PasswordWithError: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    error: true,
    errorMessage: 'Password must be at least 8 characters',
    showTrailingIcon: true,
    showHintText: true,
    value: 'short'
  }
}

// Content variants
export const WithValue: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    value: 'user@example.com',
    showTrailingIcon: true
  }
}

export const WithoutIcon: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter description',
    type: 'text',
    showTrailingIcon: false,
    showHintText: true,
    hintText: 'Optional field - you can leave this blank'
  }
}

export const LongHintText: Story = {
  args: {
    label: 'API Key',
    placeholder: 'Enter your API key',
    type: 'password',
    showTrailingIcon: true,
    showHintText: true,
    hintText: 'Your API key can be found in your account settings under the Developer section. Keep this secret and never share it publicly.'
  }
}

// All types comparison
export const AllTypes: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gap: 'var(--spacing-5)',
      maxWidth: '400px',
      fontFamily: 'var(--font-family-primary)'
    }}>
      <h3 style={{ 
        margin: '0 0 var(--spacing-2) 0', 
        fontSize: 'var(--font-size-lg)',
        fontWeight: 'var(--font-weight-semibold)',
        color: 'var(--color-gray-900)'
      }}>
        Input Types
      </h3>
      
      <Input
        label="Text Input"
        placeholder="Enter text"
        type="text"
        showHintText={true}
        hintText="Standard text input"
      />
      
      <Input
        label="Email Input"
        placeholder="Enter your email"
        type="email"
        showTrailingIcon={true}
        showHintText={true}
        hintText="Includes email validation"
      />
      
      <Input
        label="Password Input"
        placeholder="Enter your password"
        type="password"
        showTrailingIcon={true}
        showHintText={true}
        hintText="Click eye icon to toggle visibility"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all input types showing their unique features and icons.'
      }
    }
  }
}

// All states comparison
export const AllStates: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gap: 'var(--spacing-4)',
      maxWidth: '400px',
      fontFamily: 'var(--font-family-primary)'
    }}>
      <h3 style={{ 
        margin: '0 0 var(--spacing-2) 0', 
        fontSize: 'var(--font-size-lg)',
        fontWeight: 'var(--font-weight-semibold)',
        color: 'var(--color-gray-900)'
      }}>
        Input States
      </h3>
      
      <Input
        label="Default State"
        placeholder="Enter text"
        type="text"
        showHintText={true}
        hintText="Normal input state"
      />
      
      <Input
        label="With Value"
        placeholder="Enter text"
        type="text"
        value="Sample text"
        showHintText={true}
        hintText="Input with existing value"
      />
      
      <Input
        label="Disabled State"
        placeholder="Enter text"
        type="text"
        disabled={true}
        value="Cannot edit this"
        showHintText={true}
        hintText="This input is disabled"
      />
      
      <Input
        label="Error State"
        placeholder="Enter text"
        type="text"
        error={true}
        value="Invalid input"
        errorMessage="This field contains an error"
        showHintText={true}
      />
      
      <Input
        label="Required Field"
        placeholder="Enter text"
        type="text"
        required={true}
        showHintText={true}
        hintText="This field is required"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Overview of all input states including default, disabled, error, and required.'
      }
    }
  }
}

// Form context example
export const InFormContext: Story = {
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
        margin: '0 0 var(--spacing-5) 0',
        fontSize: 'var(--font-size-xl)',
        fontWeight: 'var(--font-weight-semibold)',
        color: 'var(--color-gray-900)',
        textAlign: 'center'
      }}>
        Create Account
      </h3>
      
      <div style={{ display: 'grid', gap: 'var(--spacing-4)' }}>
        <Input
          label="Full Name"
          placeholder="Enter your full name"
          type="text"
          required={true}
          showHintText={true}
          hintText="First and last name"
        />
        
        <Input
          label="Email Address"
          placeholder="Enter your email"
          type="email"
          required={true}
          showTrailingIcon={true}
          showHintText={true}
          hintText="We'll use this to contact you"
        />
        
        <Input
          label="Password"
          placeholder="Create a password"
          type="password"
          required={true}
          showTrailingIcon={true}
          showHintText={true}
          hintText="Must be at least 8 characters with numbers and letters"
        />
        
        <Input
          label="Confirm Password"
          placeholder="Confirm your password"
          type="password"
          required={true}
          showTrailingIcon={true}
          error={true}
          errorMessage="Passwords do not match"
          showHintText={true}
        />
        
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
        story: 'Example showing inputs in a realistic form context with various states and validation.'
      }
    }
  }
}

// Interactive validation example
export const InteractiveValidation: Story = {
  render: () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    
    const emailError = email && !email.includes('@')
    const passwordError = password && password.length < 8
    
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
          color: 'var(--color-gray-900)'
        }}>
          Live Validation Demo
        </h3>
        
        <div style={{ display: 'grid', gap: 'var(--spacing-4)' }}>
          <Input
            label="Email"
            placeholder="Type to see validation"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            showTrailingIcon={true}
            error={!!emailError}
            errorMessage="Please enter a valid email address"
            showHintText={true}
            hintText="Enter a valid email address"
          />
          
          <Input
            label="Password"
            placeholder="Type to see validation"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            showTrailingIcon={true}
            error={!!passwordError}
            errorMessage="Password must be at least 8 characters"
            showHintText={true}
            hintText="Minimum 8 characters required"
          />
          
          <div style={{
            padding: 'var(--spacing-3)',
            backgroundColor: 'var(--color-gray-50)',
            borderRadius: 'var(--border-radius-base)',
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-gray-600)'
          }}>
            <strong>Form State:</strong>
            <br />
            Email: {email || 'Empty'} {emailError && '❌'}
            <br />
            Password: {password ? '•'.repeat(password.length) : 'Empty'} {passwordError && '❌'}
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example demonstrating real-time validation and state management.'
      }
    }
  }
}