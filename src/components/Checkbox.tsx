// src/components/Checkbox.tsx
import React from 'react'

export interface CheckboxProps {
  /** The checkbox label text */
  label: string
  /** Whether the checkbox is checked */
  checked?: boolean
  /** Callback when checkbox state changes */
  onChange?: (checked: boolean) => void
  /** Callback when checkbox loses focus */
  onBlur?: () => void
  /** Whether the checkbox is disabled */
  disabled?: boolean
  /** Size variant */
  size?: 'sm' | 'md' | 'lg'
  /** Additional CSS classes */
  className?: string
  /** Custom styles */
  style?: React.CSSProperties
  /** Unique identifier */
  id?: string
  /** Name attribute for form submission */
  name?: string
  /** Test ID for testing */
  'data-testid'?: string
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  onChange,
  onBlur,
  disabled = false,
  size = 'md',
  className,
  style,
  id,
  name,
  'data-testid': testId,
}) => {
  // Size variants using design tokens
  const sizeVariants = {
    sm: {
      checkbox: 'var(--spacing-4)', // 16px
      fontSize: 'var(--font-size-sm)',
      gap: 'var(--spacing-2)',
      iconSize: 10
    },
    md: {
      checkbox: 'var(--spacing-5)', // 20px  
      fontSize: 'var(--font-size-base)',
      gap: 'var(--spacing-3)',
      iconSize: 12
    },
    lg: {
      checkbox: 'var(--spacing-6)', // 24px
      fontSize: 'var(--font-size-lg)',
      gap: 'var(--spacing-3)',
      iconSize: 14
    }
  }

  const sizeConfig = sizeVariants[size]

  // Generate unique ID if not provided
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`

  // Handle change event
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange && !disabled) {
      onChange(e.target.checked)
    }
  }

  // Container styles using design tokens
  const containerStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: sizeConfig.gap,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? '0.6' : '1',
    fontFamily: 'var(--font-family-primary)',
    ...style
  }

  // Hidden input styles (for accessibility)
  const hiddenInputStyles: React.CSSProperties = {
    position: 'absolute',
    opacity: 0,
    width: 0,
    height: 0,
    margin: 0,
    padding: 0,
    border: 'none'
  }

  // Custom checkbox styles using design tokens
  const checkboxStyles: React.CSSProperties = {
    width: sizeConfig.checkbox,
    height: sizeConfig.checkbox,
    borderRadius: 'var(--border-radius-base)',
    border: `var(--border-width-checkbox) solid ${checked ? 'var(--color-primary)' : 'var(--color-gray-400)'}`,
    backgroundColor: checked ? 'var(--color-primary)' : 'var(--color-white)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: `all var(--transition-base)`,
    cursor: disabled ? 'not-allowed' : 'pointer',
    flexShrink: 0,
    position: 'relative',
    boxSizing: 'border-box'
  }

  // Focus styles using design tokens
  const focusStyles: React.CSSProperties = {
    outline: `var(--border-width-medium) solid var(--color-primary-light)`,
    outlineOffset: 'var(--spacing-1)'
  }

  // Hover styles using design tokens
  const hoverStyles: React.CSSProperties = {
    borderColor: checked ? 'var(--color-primary-hover)' : 'var(--color-gray-500)',
    backgroundColor: checked ? 'var(--color-primary-hover)' : 'var(--color-gray-50)'
  }

  // Label styles using design tokens
  const labelStyles: React.CSSProperties = {
    fontSize: sizeConfig.fontSize,
    color: disabled ? 'var(--color-gray-400)' : 'var(--color-gray-700)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    lineHeight: 'var(--line-height-normal)',
    userSelect: 'none',
    fontWeight: 'var(--font-weight-normal)'
  }

  // Checkmark SVG with responsive sizing
  const CheckmarkIcon = () => (
    <svg
      width={sizeConfig.iconSize}
      height={sizeConfig.iconSize}
      viewBox="0 0 12 12"
      fill="none"
      style={{
        opacity: checked ? 1 : 0,
        transition: `opacity var(--transition-base)`,
        flexShrink: 0
      }}
    >
      <path
        d="M2 6L4.5 8.5L10 3"
        stroke="var(--color-white)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  const [isFocused, setIsFocused] = React.useState(false)
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <div 
      className={className}
      style={containerStyles}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hidden native checkbox for accessibility */}
      <input
        type="checkbox"
        id={checkboxId}
        name={name}
        checked={checked}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false)
          if (onBlur) onBlur()
        }}
        disabled={disabled}
        style={hiddenInputStyles}
        data-testid={testId}
        aria-describedby={`${checkboxId}-label`}
      />
      
      {/* Custom checkbox visual */}
      <div
        style={{
          ...checkboxStyles,
          ...(isFocused && !disabled ? focusStyles : {}),
          ...(isHovered && !disabled ? hoverStyles : {})
        }}
        onClick={() => !disabled && onChange && onChange(!checked)}
        role="presentation"
      >
        <CheckmarkIcon />
      </div>
      
      {/* Label */}
      <label
        htmlFor={checkboxId}
        id={`${checkboxId}-label`}
        style={labelStyles}
        onClick={() => !disabled && onChange && onChange(!checked)}
      >
        {label}
      </label>
    </div>
  )
}