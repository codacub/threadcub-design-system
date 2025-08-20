// /stories/Input.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
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
    label: { control: 'text' },
    placeholder: { control: 'text' },
    errorMessage: { control: 'text' },
    hintText: { control: 'text' },
    value: { control: 'text' },
  },
  args: {
    onChange: fn(),
    onBlur: fn(),
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

export const Text: Story = {
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
    type: 'text',
    showTrailingIcon: false,
    showHintText: false,
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
    errorMessage: 'Please enter a valid email address',
    showTrailingIcon: true,
    showHintText: true,
  },
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
  },
}

export const WithoutIcon: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter description',
    type: 'text',
    showTrailingIcon: false,
    showHintText: true,
    hintText: 'Optional field',
  },
}

export const WithValue: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    value: 'user@example.com',
    showTrailingIcon: true,
    showHintText: false,
  },
}

export const Interactive: Story = {
  args: {
    label: 'Email',
    placeholder: 'Type to see validation',
    type: 'email',
    showTrailingIcon: true,
    showHintText: true,
    hintText: 'Enter a valid email address',
  },
}