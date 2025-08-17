// /stories/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../components/Button'

// Import your tokens
import '../styles/tokens.css'

// Storybook configuration
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Stories
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button primary',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button secondary',
  },
}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Button tertiary',
  },
}

// Size variations
export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Small button',
  },
}

export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Medium button',
  },
}

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Large button',
  },
}

// States
export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled button',
  },
}

// All variants showcase
export const AllVariants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
    {/* All States */}
    <div>
      <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-semibold)' }}>Button States</h3>
      <div style={{ display: 'grid', gap: 'var(--spacing-6)', gridTemplateColumns: 'repeat(4, 1fr)', textAlign: 'center' }}>
        <div>
          <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--font-size-base)', fontWeight: 'var(--font-weight-medium)' }}>Default</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
            <Button variant="primary">Button primary</Button>
            <Button variant="secondary">Button secondary</Button>
            <Button variant="tertiary">Button tertiary</Button>
          </div>
        </div>
        <div>
          <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--font-size-base)', fontWeight: 'var(--font-weight-medium)' }}>Hover</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Hover over buttons →</div>
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>to see hover states</div>
          </div>
        </div>
        <div>
          <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--font-size-base)', fontWeight: 'var(--font-weight-medium)' }}>Focus</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Tab to focus →</div>
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>or click to see focus</div>
          </div>
        </div>
        <div>
          <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--font-size-base)', fontWeight: 'var(--font-weight-medium)' }}>Disabled</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
            <Button variant="primary" disabled>Button primary</Button>
            <Button variant="secondary" disabled>Button secondary</Button>
            <Button variant="tertiary" disabled>Button tertiary</Button>
          </div>
        </div>
      </div>
    </div>

    {/* All Sizes */}
    <div>
      <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-semibold)' }}>Button Sizes</h3>
      <div style={{ display: 'grid', gap: 'var(--spacing-6)', gridTemplateColumns: 'repeat(3, 1fr)', textAlign: 'center' }}>
        <div>
          <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--font-size-base)', fontWeight: 'var(--font-weight-medium)' }}>Small (36px)</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
            <Button variant="primary" size="sm">Small button</Button>
            <Button variant="secondary" size="sm">Small button</Button>
            <Button variant="tertiary" size="sm">Small button</Button>
          </div>
        </div>
        <div>
          <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--font-size-base)', fontWeight: 'var(--font-weight-medium)' }}>Medium (40px)</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
            <Button variant="primary" size="md">Medium button</Button>
            <Button variant="secondary" size="md">Medium button</Button>
            <Button variant="tertiary" size="md">Medium button</Button>
          </div>
        </div>
        <div>
          <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--font-size-base)', fontWeight: 'var(--font-weight-medium)' }}>Large (44px)</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
            <Button variant="primary" size="lg">Large button</Button>
            <Button variant="secondary" size="lg">Large button</Button>
            <Button variant="tertiary" size="lg">Large button</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
)