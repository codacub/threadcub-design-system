// /stories/Logo.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

// Import your tokens
import '../styles/tokens.css'

// Use logo from public folder
const logoSrc = '/threadcub.svg'

// Logo component interface
interface LogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'white' | 'dark'
  clickable?: boolean
  onClick?: () => void
  alt?: string
}

// Logo Component
const Logo: React.FC<LogoProps> = ({
  size = 'md',
  variant = 'default',
  clickable = false,
  onClick,
  alt = 'ThreadCub Logo'
}) => {
  // Size variants
  const sizeVariants = {
    xs: '24px',
    sm: '32px', 
    md: '48px',
    lg: '64px',
    xl: '80px'
  }

  // Base styles
  const logoStyles: React.CSSProperties = {
    width: sizeVariants[size],
    height: sizeVariants[size],
    display: 'block',
    cursor: clickable ? 'pointer' : 'default',
    transition: 'var(--transition-base)',
    filter: variant === 'white' ? 'brightness(0) invert(1)' : 
            variant === 'dark' ? 'brightness(0)' : 'none',
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLImageElement>) => {
    if (clickable) {
      e.currentTarget.style.transform = 'scale(1.05)'
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLImageElement>) => {
    if (clickable) {
      e.currentTarget.style.transform = 'scale(1)'
    }
  }

  return (
    <img
      src={logoSrc}
      alt={alt}
      style={logoStyles}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  )
}

// Demo components for context
const AuthHeader = () => (
  <div style={{ 
    textAlign: 'center',
    padding: 'var(--spacing-6)',
    backgroundColor: 'var(--color-white)',
    borderRadius: 'var(--border-radius-xl)',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '0 auto'
  }}>
    <Logo size="lg" />
    <h2 style={{ 
      fontSize: 'var(--font-size-2xl)', 
      fontWeight: 'var(--font-weight-bold)',
      color: 'var(--color-gray-900)',
      margin: 'var(--spacing-4) 0 var(--spacing-2) 0',
      fontFamily: 'var(--font-family-primary)'
    }}>
      Get started
    </h2>
    <p style={{ 
      fontSize: 'var(--font-size-base)', 
      color: 'var(--color-gray-600)',
      margin: '0',
      fontFamily: 'var(--font-family-primary)'
    }}>
      Create a new account
    </p>
  </div>
)

const NavigationBar = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 'var(--spacing-4) var(--spacing-6)',
    backgroundColor: 'var(--color-white)',
    borderBottom: '1px solid var(--color-gray-200)',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
  }}>
    <Logo size="sm" clickable onClick={() => console.log('Logo clicked')} />
    <div style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'center' }}>
      <span style={{ 
        color: 'var(--color-gray-700)', 
        fontSize: 'var(--font-size-base)',
        fontFamily: 'var(--font-family-primary)'
      }}>
        Dashboard
      </span>
      <button style={{
        backgroundColor: 'var(--color-primary)',
        color: 'var(--color-white)',
        border: 'none',
        borderRadius: 'var(--border-radius-lg)',
        padding: 'var(--spacing-2) var(--spacing-4)',
        fontSize: 'var(--font-size-sm)',
        fontWeight: 'var(--font-weight-medium)',
        cursor: 'pointer'
      }}>
        Settings
      </button>
    </div>
  </div>
)

const DarkBackground = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    backgroundColor: 'var(--color-gray-900)',
    padding: 'var(--spacing-8)',
    borderRadius: 'var(--border-radius-lg)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--spacing-4)'
  }}>
    {children}
  </div>
)

// Storybook configuration
const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'white', 'dark'],
    },
    clickable: { control: 'boolean' },
    alt: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Stories
export const Default: Story = {
  args: {
    size: 'md',
    variant: 'default',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    variant: 'default',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    variant: 'default',
  },
}

export const Clickable: Story = {
  args: {
    size: 'md',
    variant: 'default',
    clickable: true,
    onClick: () => alert('Logo clicked!'),
  },
}

export const WhiteVariant: Story = {
  args: {
    size: 'md',
    variant: 'white',
  },
  decorators: [
    (Story) => (
      <DarkBackground>
        <Story />
        <p style={{ color: 'var(--color-white)', fontSize: 'var(--font-size-sm)' }}>
          White variant for dark backgrounds
        </p>
      </DarkBackground>
    ),
  ],
}

export const DarkVariant: Story = {
  args: {
    size: 'md',
    variant: 'dark',
  },
}

export const AuthFormContext: Story = {
  render: () => <AuthHeader />,
  parameters: {
    layout: 'centered',
  },
}

export const NavigationContext: Story = {
  render: () => <NavigationBar />,
  parameters: {
    layout: 'fullscreen',
  },
}

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: 'var(--spacing-8)',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <div>
        <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--font-size-lg)' }}>Sizes</h3>
        <div style={{ display: 'flex', gap: 'var(--spacing-6)', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <Logo size="xs" />
            <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-600)', marginTop: 'var(--spacing-1)' }}>XS (24px)</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Logo size="sm" />
            <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-600)', marginTop: 'var(--spacing-1)' }}>SM (32px)</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Logo size="md" />
            <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-600)', marginTop: 'var(--spacing-1)' }}>MD (48px)</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Logo size="lg" />
            <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-600)', marginTop: 'var(--spacing-1)' }}>LG (64px)</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Logo size="xl" />
            <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-600)', marginTop: 'var(--spacing-1)' }}>XL (80px)</p>
          </div>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--font-size-lg)' }}>Variants</h3>
        <div style={{ display: 'flex', gap: 'var(--spacing-6)', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <Logo size="md" variant="default" />
            <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-600)', marginTop: 'var(--spacing-1)' }}>Default</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Logo size="md" variant="dark" />
            <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-600)', marginTop: 'var(--spacing-1)' }}>Dark</p>
          </div>
          <div style={{ textAlign: 'center', backgroundColor: 'var(--color-gray-900)', padding: 'var(--spacing-4)', borderRadius: 'var(--border-radius-lg)' }}>
            <Logo size="md" variant="white" />
            <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-white)', marginTop: 'var(--spacing-1)' }}>White</p>
          </div>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--font-size-lg)' }}>Context Examples</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
          <AuthHeader />
          <NavigationBar />
        </div>
      </div>
    </div>
  )
}