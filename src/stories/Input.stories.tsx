// /stories/Input.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '../components/Input'

// Import your tokens
import '../styles/tokens.css'

// Storybook configuration
const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password'],
    },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    showTrailingIcon: { control: 'boolean' },
    showHintText: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Stories
export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    showTrailingIcon: true,
    showHintText: true,
  },
}

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    showTrailingIcon: true,
    showHintText: true,
    hintText: 'Must be at least 8 characters',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    disabled: true,
    showTrailingIcon: true,
    showHintText: true,
  },
}

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    error: true,
    showTrailingIcon: true,
    showHintText: true,
  },
}