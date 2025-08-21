// stories/Heading.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Heading } from '../components/Heading'
import '../styles/tokens.css'

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Heading component for displaying semantic headings (h1-h4) with consistent typography. Uses the title font family and supports multiple color variants, alignment options, and spacing controls using design tokens.'
      }
    }
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The heading content'
    },
    level: {
      control: { type: 'select' },
      options: [1, 2, 3, 4],
      description: 'Semantic heading level (h1-h4)',
      table: { defaultValue: { summary: '2' } }
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
      description: 'Text alignment',
      table: { defaultValue: { summary: 'left' } }
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'muted'],
      description: 'Color variant',
      table: { defaultValue: { summary: 'primary' } }
    },
    margin: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Bottom margin',
      table: { defaultValue: { summary: 'md' } }
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Heading>

// Basic variants
export const Default: Story = {
  args: {
    children: 'Default Heading',
    level: 2
  }
}

export const Level1: Story = {
  args: {
    children: 'Main Page Title',
    level: 1
  }
}

export const Level2: Story = {
  args: {
    children: 'Section Heading',
    level: 2
  }
}

export const Level3: Story = {
  args: {
    children: 'Subsection Heading',
    level: 3
  }
}

export const Level4: Story = {
  args: {
    children: 'Small Heading',
    level: 4
  }
}

// Color variants
export const PrimaryColor: Story = {
  args: {
    children: 'Primary Color Heading',
    color: 'primary'
  }
}

export const SecondaryColor: Story = {
  args: {
    children: 'Secondary Color Heading',
    color: 'secondary'
  }
}

export const MutedColor: Story = {
  args: {
    children: 'Muted Color Heading',
    color: 'muted'
  }
}

// Alignment variants
export const LeftAligned: Story = {
  args: {
    children: 'Left Aligned Heading',
    align: 'left'
  }
}

export const CenterAligned: Story = {
  args: {
    children: 'Center Aligned Heading',
    align: 'center'
  }
}

export const RightAligned: Story = {
  args: {
    children: 'Right Aligned Heading',
    align: 'right'
  }
}

// All levels comparison
export const AllLevels: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: 'var(--spacing-2)',
      fontFamily: 'var(--font-family-primary)'
    }}>
      <h3 style={{ 
        margin: '0 0 var(--spacing-4) 0', 
        fontSize: 'var(--font-size-lg)',
        fontWeight: 'var(--font-weight-semibold)',
        color: 'var(--color-gray-900)',
        fontFamily: 'var(--font-family-primary)'
      }}>
        Heading Levels
      </h3>
      
      <Heading level={1} margin="sm">Level 1 Heading (32px)</Heading>
      <Heading level={2} margin="sm">Level 2 Heading (24px)</Heading>
      <Heading level={3} margin="sm">Level 3 Heading (18px)</Heading>
      <Heading level={4} margin="sm">Level 4 Heading (16px)</Heading>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all heading levels showing the typography hierarchy.'
      }
    }
  }
}

// All colors comparison
export const AllColors: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: 'var(--spacing-3)',
      fontFamily: 'var(--font-family-primary)'
    }}>
      <h3 style={{ 
        margin: '0 0 var(--spacing-4) 0', 
        fontSize: 'var(--font-size-lg)',
        fontWeight: 'var(--font-weight-semibold)',
        color: 'var(--color-gray-900)',
        fontFamily: 'var(--font-family-primary)'
      }}>
        Color Variants
      </h3>
      
      <Heading color="primary" margin="sm">Primary Color (Gray 900)</Heading>
      <Heading color="secondary" margin="sm">Secondary Color (Gray 700)</Heading>
      <Heading color="muted" margin="sm">Muted Color (Gray 600)</Heading>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of color variants showing different emphasis levels.'
      }
    }
  }
}

// All alignments comparison
export const AllAlignments: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: 'var(--spacing-3)',
      fontFamily: 'var(--font-family-primary)',
      border: `var(--border-width-thin) solid var(--color-border)`,
      borderRadius: 'var(--border-radius-lg)',
      padding: 'var(--spacing-4)'
    }}>
      <h3 style={{ 
        margin: '0 0 var(--spacing-4) 0', 
        fontSize: 'var(--font-size-lg)',
        fontWeight: 'var(--font-weight-semibold)',
        color: 'var(--color-gray-900)',
        fontFamily: 'var(--font-family-primary)',
        textAlign: 'center'
      }}>
        Text Alignment
      </h3>
      
      <Heading align="left" margin="sm">Left Aligned Heading</Heading>
      <Heading align="center" margin="sm">Center Aligned Heading</Heading>
      <Heading align="right" margin="sm">Right Aligned Heading</Heading>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of text alignment options with visible container boundaries.'
      }
    }
  }
}

// Real-world examples
export const InPageLayout: Story = {
  render: () => (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: 'var(--spacing-6)',
      backgroundColor: 'var(--color-white)',
      borderRadius: 'var(--border-radius-xl)',
      border: `var(--border-width-thin) solid var(--color-border)`,
      fontFamily: 'var(--font-family-primary)'
    }}>
      <Heading level={1} align="center" margin="lg">
        Welcome to ThreadCub
      </Heading>
      
      <p style={{
        fontSize: 'var(--font-size-lg)',
        color: 'var(--color-gray-600)',
        textAlign: 'center',
        margin: '0 0 var(--spacing-8) 0',
        lineHeight: 'var(--line-height-normal)'
      }}>
        Manage your conversations with ease and efficiency
      </p>
      
      <Heading level={2} margin="lg">
        Getting Started
      </Heading>
      
      <p style={{
        fontSize: 'var(--font-size-base)',
        color: 'var(--color-gray-700)',
        margin: '0 0 var(--spacing-6) 0',
        lineHeight: 'var(--line-height-normal)'
      }}>
        Follow these simple steps to set up your account and start managing your threads effectively.
      </p>
      
      <Heading level={3} margin="md">
        Step 1: Create Your Profile
      </Heading>
      
      <p style={{
        fontSize: 'var(--font-size-base)',
        color: 'var(--color-gray-700)',
        margin: '0 0 var(--spacing-4) 0',
        lineHeight: 'var(--line-height-normal)'
      }}>
        Add your personal information and preferences to customize your experience.
      </p>
      
      <Heading level={4} margin="md">
        Profile Settings
      </Heading>
      
      <p style={{
        fontSize: 'var(--font-size-base)',
        color: 'var(--color-gray-700)',
        margin: '0',
        lineHeight: 'var(--line-height-normal)'
      }}>
        Configure your notification preferences and display options.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example showing headings in a realistic page layout with proper hierarchy and spacing.'
      }
    }
  }
}

// Card layout example
export const InCardLayout: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 'var(--spacing-4)',
      fontFamily: 'var(--font-family-primary)'
    }}>
      <div style={{
        padding: 'var(--spacing-5)',
        backgroundColor: 'var(--color-white)',
        borderRadius: 'var(--border-radius-xl)',
        border: `var(--border-width-thin) solid var(--color-border)`,
        boxShadow: 'var(--shadow-card)'
      }}>
        <Heading level={3} margin="md">
          Features
        </Heading>
        <p style={{
          fontSize: 'var(--font-size-base)',
          color: 'var(--color-gray-600)',
          margin: '0',
          lineHeight: 'var(--line-height-normal)'
        }}>
          Discover all the powerful features available in ThreadCub.
        </p>
      </div>
      
      <div style={{
        padding: 'var(--spacing-5)',
        backgroundColor: 'var(--color-white)',
        borderRadius: 'var(--border-radius-xl)',
        border: `var(--border-width-thin) solid var(--color-border)`,
        boxShadow: 'var(--shadow-card)'
      }}>
        <Heading level={3} margin="md" color="secondary">
          Documentation
        </Heading>
        <p style={{
          fontSize: 'var(--font-size-base)',
          color: 'var(--color-gray-600)',
          margin: '0',
          lineHeight: 'var(--line-height-normal)'
        }}>
          Comprehensive guides to help you get the most out of the platform.
        </p>
      </div>
      
      <div style={{
        padding: 'var(--spacing-5)',
        backgroundColor: 'var(--color-white)',
        borderRadius: 'var(--border-radius-xl)',
        border: `var(--border-width-thin) solid var(--color-border)`,
        boxShadow: 'var(--shadow-card)'
      }}>
        <Heading level={3} margin="md" color="muted">
          Support
        </Heading>
        <p style={{
          fontSize: 'var(--font-size-base)',
          color: 'var(--color-gray-600)',
          margin: '0',
          lineHeight: 'var(--line-height-normal)'
        }}>
          Get help when you need it with our responsive support team.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example showing headings in a card-based layout with different color variants.'
      }
    }
  }
}