// /stories/SocialButton.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { SocialButton } from '../components/SocialButton'

// Import your tokens
import '../styles/tokens.css'

// Storybook configuration
const meta: Meta<typeof SocialButton> = {
  title: 'Components/SocialButton',
  component: SocialButton,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    provider: {
      control: { type: 'select' },
      options: ['google', 'github'],
    },
    disabled: { control: 'boolean' },
    text: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Stories
export const Google: Story = {
  args: {
    provider: 'google',
  },
}

export const GitHub: Story = {
  args: {
    provider: 'github',
  },
}

export const CustomText: Story = {
  args: {
    provider: 'google',
    text: 'Continue with Google',
  },
}

export const Disabled: Story = {
  args: {
    provider: 'google',
    disabled: true,
  },
}

// All variants showcase
export const AllVariants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)', maxWidth: '400px' }}>
    <div>
      <h3 style={{ 
        marginBottom: 'var(--spacing-4)', 
        fontSize: 'var(--font-size-lg)',
        fontFamily: 'var(--font-family-primary)'
      }}>
        Default States
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
        <SocialButton provider="google" />
        <SocialButton provider="github" />
      </div>
    </div>
    
    <div>
      <h3 style={{ 
        marginBottom: 'var(--spacing-4)', 
        fontSize: 'var(--font-size-lg)',
        fontFamily: 'var(--font-family-primary)'
      }}>
        Custom Text
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
        <SocialButton provider="google" text="Continue with Google" />
        <SocialButton provider="github" text="Continue with GitHub" />
      </div>
    </div>
    
    <div>
      <h3 style={{ 
        marginBottom: 'var(--spacing-4)', 
        fontSize: 'var(--font-size-lg)',
        fontFamily: 'var(--font-family-primary)'
      }}>
        Disabled States
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
        <SocialButton provider="google" disabled />
        <SocialButton provider="github" disabled />
      </div>
    </div>
  </div>
)