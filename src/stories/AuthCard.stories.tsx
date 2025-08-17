// /stories/AuthCard.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { AuthCard } from '../components/AuthCard'
import { Logo } from '../components/Logo'
import { Heading } from '../components/Heading'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { Divider } from '../components/Divider'
import { SocialButton } from '../components/SocialButton'

// Import your tokens
import '../styles/tokens.css'

// Demo content components for stories with proper state management
const DemoContent = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [touched, setTouched] = useState({
    email: false,
    password: false
  })

  // Real-time validation that only shows errors after user interaction
  const validateEmail = (email: string) => {
    if (!email) return { isValid: false, message: 'Email is required' }
    
    // More comprehensive email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return { isValid: false, message: 'Please enter a valid email address' }
    }
    
    return { isValid: true, message: '' }
  }

  const validatePassword = (password: string) => {
    if (!password) return { isValid: false, message: 'Password is required' }
    if (password.length < 8) return { isValid: false, message: 'Password must be at least 8 characters' }
    return { isValid: true, message: '' }
  }

  // Get current validation states
  const emailValidation = validateEmail(formData.email)
  const passwordValidation = validatePassword(formData.password)

  // Show errors only if field has been touched and is invalid
  const showEmailError = touched.email && !emailValidation.isValid
  const showPasswordError = touched.password && !passwordValidation.isValid

  // Check if form is valid for button state
  const isFormValid = emailValidation.isValid && passwordValidation.isValid

  const handleSubmit = async () => {
    // Mark all fields as touched when submitting
    setTouched({ email: true, password: true })
    
    if (!isFormValid) {
      console.log('Form has validation errors')
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Form submitted:', formData)
      alert('Account created successfully!')
      
      // Reset form after successful submission
      setFormData({ email: '', password: '' })
      setTouched({ email: false, password: false })
    } catch (error) {
      console.error('Submission failed:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, email: e.target.value }))
  }

  const handleEmailBlur = () => {
    setTouched(prev => ({ ...prev, email: true }))
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, password: e.target.value }))
  }

  const handlePasswordBlur = () => {
    setTouched(prev => ({ ...prev, password: true }))
  }

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <div style={{ 
          margin: '0 auto var(--spacing-4)',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Logo size="xl" />
        </div>
        <Heading level={1} align="center" margin="sm">
          Get started
        </Heading>
        <p style={{ 
          fontSize: 'var(--font-size-base)', 
          fontFamily: 'var(--font-family-primary)',
          color: 'var(--color-gray-600)',
          margin: '0 0 var(--spacing-8) 0'
        }}>
          Create a new account
        </p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
        {/* Email Input with proper error handling */}
        <Input 
          label="Email*"
          placeholder="Enter your email"
          type="email"
          showTrailingIcon={true}
          showHintText={false}
          error={showEmailError}
          errorMessage={emailValidation.message}
          value={formData.email}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
        />
        
        {/* Password Input with proper error handling */}
        <Input 
          label="Password*"
          placeholder="Enter your password"
          type="password"
          showTrailingIcon={true}
          showHintText={true}
          error={showPasswordError}
          errorMessage={passwordValidation.message}
          hintText={showPasswordError ? passwordValidation.message : "Must be at least 8 characters."}
          value={formData.password}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
        />
        
        {/* Button with proper states */}
        <Button 
          variant="primary" 
          size="lg" 
          type="submit"
          disabled={!isFormValid || isSubmitting}
          onClick={handleSubmit}
          style={{ width: '100%', marginTop: 'var(--spacing-4)' }}
        >
          {isSubmitting ? 'Creating account...' : 'Get started'}
        </Button>

        {/* Divider */}
        <Divider text="OR" />

        {/* Social buttons with proper disabled state */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
          <SocialButton 
            provider="google" 
            text="Sign up with Google"
            disabled={isSubmitting}
            onClick={() => console.log('Google signup')}
          />
          <SocialButton 
            provider="github" 
            text="Sign up with GitHub"
            disabled={isSubmitting}
            onClick={() => console.log('GitHub signup')}
          />
        </div>

        {/* Legal text with proper link */}
        <p style={{
          fontSize: 'var(--font-size-xs)',
          fontFamily: 'var(--font-family-primary)',
          color: 'var(--color-gray-500)',
          textAlign: 'center',
          margin: 'var(--spacing-4) 0 0 0',
          lineHeight: 'var(--line-height-normal)'
        }}>
          By continuing, you agree to ThreadCub's{' '}
          <a 
            href="#" 
            style={{ 
              color: 'var(--color-primary)', 
              textDecoration: 'underline',
              cursor: 'pointer'
            }}
            onClick={(e) => {
              e.preventDefault()
              console.log('Terms clicked')
            }}
          >
            Terms of Service
          </a>
          {' '}and{' '}
          <a 
            href="#" 
            style={{ 
              color: 'var(--color-primary)', 
              textDecoration: 'underline',
              cursor: 'pointer'
            }}
            onClick={(e) => {
              e.preventDefault()
              console.log('Privacy clicked')
            }}
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </>
  )
}

// Simple content without state management
const MinimalContent = () => (
  <>
    <h3 style={{ 
      fontSize: 'var(--font-size-lg)', 
      fontWeight: 'var(--font-weight-semibold)',
      fontFamily: 'var(--font-family-primary)',
      color: 'var(--color-gray-900)',
      margin: '0 0 var(--spacing-4) 0',
      textAlign: 'center'
    }}>
      Card Title
    </h3>
    <p style={{ 
      fontSize: 'var(--font-size-base)', 
      fontFamily: 'var(--font-family-primary)',
      color: 'var(--color-gray-600)',
      margin: '0',
      textAlign: 'center'
    }}>
      This is some content inside the card. The card provides a clean container with proper spacing and shadows.
    </p>
  </>
)

// Storybook configuration
const meta: Meta<typeof AuthCard> = {
  title: 'Components/AuthCard',
  component: AuthCard,
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
    maxWidth: { control: 'text' },
    padding: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    shadow: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Stories
export const Default: Story = {
  args: {
    children: <MinimalContent />,
  },
}

export const AuthForm: Story = {
  args: {
    children: <DemoContent />,
    maxWidth: '400px',
    padding: 'lg',
    shadow: 'md',
  },
}

export const SmallPadding: Story = {
  args: {
    children: <MinimalContent />,
    padding: 'sm',
  },
}

export const LargeShadow: Story = {
  args: {
    children: <MinimalContent />,
    shadow: 'lg',
  },
}

export const WideCard: Story = {
  args: {
    children: <MinimalContent />,
    maxWidth: '600px',
  },
}