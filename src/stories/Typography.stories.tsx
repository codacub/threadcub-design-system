// /stories/Typography.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

// Import your tokens
import '../styles/tokens.css'

// Import the actual Heading component from the design system
import { Heading } from '../components/Heading'

// Subtitle component interface
interface SubtitleProps {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  align?: 'left' | 'center' | 'right'
  color?: 'primary' | 'secondary' | 'muted'
  margin?: 'none' | 'sm' | 'md' | 'lg'
}

// Subtitle Component
const Subtitle: React.FC<SubtitleProps> = ({
  children,
  size = 'md',
  align = 'left',
  color = 'secondary',
  margin = 'md'
}) => {
  const colorVariants = {
    primary: 'var(--color-gray-900)',
    secondary: 'var(--color-gray-600)',
    muted: 'var(--color-gray-500)'
  }

  const sizeVariants = {
    sm: 'var(--font-size-sm)',
    md: 'var(--font-size-base)',
    lg: 'var(--font-size-lg)'
  }

  const marginVariants = {
    none: '0',
    sm: '0 0 var(--spacing-2) 0',
    md: '0 0 var(--spacing-4) 0',
    lg: '0 0 var(--spacing-6) 0'
  }

  const subtitleStyles: React.CSSProperties = {
    fontFamily: 'var(--font-family-primary)',
    fontSize: sizeVariants[size],
    fontWeight: 'var(--font-weight-normal)',
    lineHeight: 'var(--line-height-normal)',
    color: colorVariants[color],
    textAlign: align,
    margin: marginVariants[margin]
  }

  return <p style={subtitleStyles}>{children}</p>
}

// LinkText component interface
interface LinkTextProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  size?: 'sm' | 'md' | 'lg'
  align?: 'left' | 'center' | 'right'
  underline?: boolean
  margin?: 'none' | 'sm' | 'md' | 'lg'
}

// LinkText Component
const LinkText: React.FC<LinkTextProps> = ({
  children,
  href,
  onClick,
  size = 'md',
  align = 'left',
  underline = true,
  margin = 'sm'
}) => {
  const sizeVariants = {
    sm: 'var(--font-size-sm)',
    md: 'var(--font-size-base)',
    lg: 'var(--font-size-lg)'
  }

  const marginVariants = {
    none: '0',
    sm: 'var(--spacing-2) 0',
    md: 'var(--spacing-4) 0',
    lg: 'var(--spacing-6) 0'
  }

  const linkStyles: React.CSSProperties = {
    fontFamily: 'var(--font-family-primary)',
    fontSize: sizeVariants[size],
    fontWeight: 'var(--font-weight-medium)',
    color: 'var(--color-primary)',
    textAlign: align,
    textDecoration: underline ? 'underline' : 'none',
    cursor: 'pointer',
    margin: marginVariants[margin],
    transition: 'var(--transition-base)',
    display: 'block'
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement | HTMLSpanElement>) => {
    e.currentTarget.style.color = 'var(--color-primary-hover)'
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement | HTMLSpanElement>) => {
    e.currentTarget.style.color = 'var(--color-primary)'
  }

  if (href) {
    return (
      <a 
        href={href} 
        style={linkStyles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
    )
  }

  return (
    <span 
      style={linkStyles}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </span>
  )
}

// LegalText component interface
interface LegalTextProps {
  children: React.ReactNode
  align?: 'left' | 'center' | 'right'
  margin?: 'none' | 'sm' | 'md' | 'lg'
}

// LegalText Component
const LegalText: React.FC<LegalTextProps> = ({
  children,
  align = 'center',
  margin = 'lg'
}) => {
  const marginVariants = {
    none: '0',
    sm: 'var(--spacing-2) 0',
    md: 'var(--spacing-4) 0',
    lg: 'var(--spacing-6) 0'
  }

  const legalStyles: React.CSSProperties = {
    fontFamily: 'var(--font-family-primary)',
    fontSize: 'var(--font-size-xs)',
    fontWeight: 'var(--font-weight-normal)',
    lineHeight: 'var(--line-height-normal)',
    color: 'var(--color-gray-500)',
    textAlign: align,
    margin: marginVariants[margin]
  }

  return <p style={legalStyles}>{children}</p>
}

// Demo showcase component
const TypographyShowcase = () => (
  <div style={{ maxWidth: '400px', margin: '0 auto', padding: 'var(--spacing-6)' }}>
    <Heading level={2} align="center">Get started</Heading>
    <Subtitle align="center" margin="lg">Create a new account</Subtitle>
    
    <div style={{ height: '200px', backgroundColor: 'var(--color-gray-100)', borderRadius: 'var(--border-radius-lg)', marginBottom: 'var(--spacing-6)' }} />
    
    <LinkText align="center" margin="md">
      Already have an account? Log in here
    </LinkText>
    
    <LegalText align="center">
      By continuing, you agree to ThreadCub's Terms of Service and Privacy Policy, and to receive periodic emails with updates
    </LegalText>
  </div>
)

// Storybook configuration
const meta: Meta = {
  title: 'Components/Typography',
  parameters: {
    layout: 'padded',
  },
}

export default meta

// Individual component stories
export const Headings: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
      <Heading level={1}>Heading Level 1</Heading>
      <Heading level={2}>Heading Level 2</Heading>
      <Heading level={3}>Heading Level 3</Heading>
      <Heading level={4}>Heading Level 4</Heading>
    </div>
  )
}

export const HeadingColors: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
      <Heading color="primary">Primary Color Heading</Heading>
      <Heading color="secondary">Secondary Color Heading</Heading>
      <Heading color="muted">Muted Color Heading</Heading>
    </div>
  )
}

export const Subtitles: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
      <Subtitle size="sm">Small subtitle text</Subtitle>
      <Subtitle size="md">Medium subtitle text</Subtitle>
      <Subtitle size="lg">Large subtitle text</Subtitle>
    </div>
  )
}

export const Links: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
      <LinkText>Default link text</LinkText>
      <LinkText underline={false}>Link without underline</LinkText>
      <LinkText size="sm">Small link text</LinkText>
      <LinkText size="lg">Large link text</LinkText>
    </div>
  )
}

export const Legal: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
      <LegalText>
        By continuing, you agree to our Terms of Service and Privacy Policy.
      </LegalText>
      <LegalText align="left">
        Left-aligned legal text with more content to show how it wraps across multiple lines.
      </LegalText>
    </div>
  )
}

export const AuthFormExample: StoryObj = {
  render: () => <TypographyShowcase />,
  parameters: {
    layout: 'centered',
  },
}

// All variants showcase
export const AllVariants: StoryObj = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: 'var(--spacing-8)',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <div>
        <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--font-size-lg)' }}>Headings</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
          <Heading level={1} margin="none">Heading Level 1</Heading>
          <Heading level={2} margin="none">Heading Level 2</Heading>
          <Heading level={3} margin="none">Heading Level 3</Heading>
          <Heading level={4} margin="none">Heading Level 4</Heading>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--font-size-lg)' }}>Subtitles</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
          <Subtitle size="lg" margin="none">Large subtitle</Subtitle>
          <Subtitle size="md" margin="none">Medium subtitle</Subtitle>
          <Subtitle size="sm" margin="none">Small subtitle</Subtitle>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--font-size-lg)' }}>Links</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
          <LinkText margin="none">Standard link text</LinkText>
          <LinkText underline={false} margin="none">Link without underline</LinkText>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--font-size-lg)' }}>Legal Text</h3>
        <LegalText margin="none">
          By continuing, you agree to ThreadCub's Terms of Service and Privacy Policy, and to receive periodic emails with updates.
        </LegalText>
      </div>
      
      <div>
        <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--font-size-lg)' }}>Auth Form Context</h3>
        <TypographyShowcase />
      </div>
    </div>
  )
}