// stories/Tag.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Tag } from '../components/Tag'
import '../styles/tokens.css'

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Tag component for displaying labels and categories. Supports different variants, sizes, and shapes for flexible usage.'
      }
    }
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Tag content'
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'error'],
      description: 'Visual variant',
      table: { defaultValue: { summary: 'primary' } }
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size variant',
      table: { defaultValue: { summary: 'md' } }
    },
    shape: {
      control: { type: 'select' },
      options: ['rounded', 'pill'],
      description: 'Shape variant',
      table: { defaultValue: { summary: 'rounded' } }
    },
    clickable: {
      control: 'boolean',
      description: 'Whether the tag is clickable',
      table: { defaultValue: { summary: 'false' } }
    }
  },
  args: {
    children: 'Tag',
    variant: 'primary',
    size: 'md',
    shape: 'rounded',
    clickable: false
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Tag>

// Basic examples
export const Default: Story = {
  args: {
    children: 'Default Tag'
  }
}

export const Primary: Story = {
  args: {
    children: 'Primary',
    variant: 'primary'
  }
}

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary'
  }
}

export const Success: Story = {
  args: {
    children: 'Success',
    variant: 'success'
  }
}

export const Warning: Story = {
  args: {
    children: 'Warning',
    variant: 'warning'
  }
}

export const Error: Story = {
  args: {
    children: 'Error',
    variant: 'error'
  }
}

// Size variants
export const Small: Story = {
  args: {
    children: 'Small Tag',
    size: 'sm'
  }
}

export const Large: Story = {
  args: {
    children: 'Large Tag',
    size: 'lg'
  }
}

// Shape variants
export const Rounded: Story = {
  args: {
    children: 'Rounded',
    shape: 'rounded'
  }
}

export const Pill: Story = {
  args: {
    children: 'Pill',
    shape: 'pill'
  }
}

// Interactive
export const Clickable: Story = {
  args: {
    children: 'Clickable Tag',
    clickable: true,
    onClick: () => alert('Tag clicked!')
  }
}