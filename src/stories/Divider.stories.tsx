// /stories/Divider.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from '../components/Divider'

// Import your tokens
import '../styles/tokens.css'

// Demo content for showcasing
const DemoForm = () => (
  <div style={{ 
    maxWidth: '400px', 
    margin: '0 auto',
    padding: 'var(--spacing-6)',
    backgroundColor: 'var(--color-white)',
    borderRadius: 'var(--border-radius-xl)',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
  }}>
    {/* Email input */}
    <div style={{ marginBottom: 'var(--spacing-4)' }}>
      <label style={{ 
        fontSize: 'var(--font-size-sm)', 
        fontWeight: 'var(--font-weight-medium)',
        color: 'var(--color-gray-700)',
        display: 'block',
        marginBottom: 'var(--spacing-2)'
      }}>
        Email*
      </label>
      <input 
        placeholder="Enter your email"
        style={{
          width: '100%',
          height: '44px',
          padding: '0 var(--spacing-4)',
          border: '1px solid var(--color-gray-300)',
          borderRadius: 'var(--border-radius-lg)',
          fontSize: 'var(--font-size-base)',
          fontFamily: 'var(--font-family-primary)',
          boxSizing: 'border-box',
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
      fontWeight: 'var(--font-weight-medium)',
      cursor: 'pointer',
      marginBottom: 'var(--spacing-4)',
      boxSizing: 'border-box',
    }}>
      Get started
    </button>
    
    {/* Divider */}
    <Divider />
    
    {/* Social buttons */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
      <button style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '44px',
        backgroundColor: 'var(--color-white)',
        border: '1px solid var(--color-gray-300)',
        borderRadius: 'var(--border-radius-lg)',
        fontSize: 'var(--font-size-base)',
        fontWeight: 'var(--font-weight-medium)',
        cursor: 'pointer',
        gap: 'var(--spacing-3)',
        color: 'var(--color-gray-700)',
        boxSizing: 'border-box',
      }}>
        <div style={{ width: '20px', height: '20px', backgroundColor: 'var(--color-primary)', borderRadius: '50%' }} />
        Sign up with Google
      </button>
      
      <button style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '44px',
        backgroundColor: 'var(--color-white)',
        border: '1px solid var(--color-gray-300)',
        borderRadius: 'var(--border-radius-lg)',
        fontSize: 'var(--font-size-base)',
        fontWeight: 'var(--font-weight-medium)',
        cursor: 'pointer',
        gap: 'var(--spacing-3)',
        color: 'var(--color-gray-700)',
        boxSizing: 'border-box',
      }}>
        <div style={{ width: '20px', height: '20px', backgroundColor: 'var(--color-gray-800)', borderRadius: '50%' }} />
        Sign up with GitHub
      </button>
    </div>
  </div>
)

// Storybook configuration
const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f8fafc' },
        { name: 'white', value: '#ffffff' },
      ],
    },
  },
  argTypes: {
    text: { control: 'text' },
    color: {
      control: { type: 'select' },
      options: ['gray', 'light', 'muted'],
    },
    spacing: {
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
    text: 'OR',
  },
}

export const CustomText: Story = {
  args: {
    text: 'AND',
  },
}

export const LightColor: Story = {
  args: {
    text: 'OR',
    color: 'light',
  },
}

export const MutedColor: Story = {
  args: {
    text: 'OR',
    color: 'muted',
  },
}

export const SmallSpacing: Story = {
  args: {
    text: 'OR',
    spacing: 'sm',
  },
}

export const LargeSpacing: Story = {
  args: {
    text: 'OR',
    spacing: 'lg',
  },
}

export const InContext: Story = {
  render: () => <DemoForm />,
  parameters: {
    layout: 'centered',
  },
}

// All variants showcase
export const AllVariants = () => (
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    gap: 'var(--spacing-8)',
    maxWidth: '400px',
    margin: '0 auto'
  }}>
    <div>
      <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--font-size-lg)' }}>Default</h3>
      <Divider />
    </div>
    
    <div>
      <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--font-size-lg)' }}>Custom Text</h3>
      <Divider text="AND" />
      <Divider text="Continue with" />
    </div>
    
    <div>
      <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--font-size-lg)' }}>Color Variants</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
        <div>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-2)' }}>Light</p>
          <Divider color="light" />
        </div>
        <div>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-2)' }}>Gray (default)</p>
          <Divider color="gray" />
        </div>
        <div>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-2)' }}>Muted</p>
          <Divider color="muted" />
        </div>
      </div>
    </div>
    
    <div>
      <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--font-size-lg)' }}>Spacing Variants</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
        <div>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-600)' }}>Small spacing</p>
          <Divider spacing="sm" />
        </div>
        <div>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-600)' }}>Medium spacing (default)</p>
          <Divider spacing="md" />
        </div>
        <div>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-600)' }}>Large spacing</p>
          <Divider spacing="lg" />
        </div>
      </div>
    </div>
  </div>
)