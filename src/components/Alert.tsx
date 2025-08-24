// src/components/Alert.tsx
import React from 'react'
import { Heading } from './Heading' // Add this import

export interface AlertProps {
  type: 'success' | 'error' | 'info' | 'warning'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  title?: string 
  onClose?: () => void
  /** If false, the close button is hidden even if onClose is provided */
  dismissible?: boolean
  className?: string
  style?: React.CSSProperties
}

// First, update the AlertProps interface to include title:
export interface AlertProps {
  type: 'success' | 'error' | 'info' | 'warning'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  title?: string // Add this line
  onClose?: () => void
  dismissible?: boolean
  className?: string
  style?: React.CSSProperties
}

export const Alert: React.FC<AlertProps> = ({
  type,
  size = 'md',
  children,
  title, // Add this parameter
  onClose,
  dismissible = true,
  className,
  style
}) => {
  // ---- size scales (all from tokens.css) ----
  const S = {
    sm: {
      gap: 'var(--spacing-2)',
      px: 'var(--spacing-3)',
      py: 'var(--spacing-2)',
      fontSize: 'var(--font-size-xs)',
      lineHeight: 'var(--line-height-tight)',
      radius: 'var(--border-radius-base)',
      icon: 16,
      close: 14,
      closeButtonPadding: 'var(--spacing-1)'
    },
    md: {
      gap: 'var(--spacing-3)',
      px: 'var(--spacing-4)',
      py: 'var(--spacing-3)',
      fontSize: 'var(--font-size-sm)',
      lineHeight: 'var(--line-height-normal)',
      radius: 'var(--border-radius-lg)',
      icon: 20,
      close: 16,
      closeButtonPadding: 'var(--spacing-1)'
    },
    lg: {
      gap: 'var(--spacing-4)',
      px: 'var(--spacing-5)',
      py: 'var(--spacing-4)',
      fontSize: 'var(--font-size-base)',
      lineHeight: 'var(--line-height-normal)',
      radius: 'var(--border-radius-xl)',
      icon: 22,
      close: 18,
      closeButtonPadding: 'var(--spacing-2)'
    }
  }[size]

  // ---- Lucide-style icons ----
  const SuccessIcon = ({ s }: { s: number }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      style={{ display: 'block', flexShrink: 0 }} aria-hidden="true">
      <path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/>
    </svg>
  )
  const ErrorIcon = ({ s }: { s: number }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      style={{ display: 'block', flexShrink: 0 }} aria-hidden="true">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>
      <path d="M12 9v4"/><path d="M12 17h.01"/>
    </svg>
  )
  const InfoIcon = ({ s }: { s: number }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      style={{ display: 'block', flexShrink: 0 }} aria-hidden="true">
      <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
    </svg>
  )
  const WarningIcon = ({ s }: { s: number }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      style={{ display: 'block', flexShrink: 0 }} aria-hidden="true">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>
      <path d="M12 9v4"/><path d="M12 17h.01"/>
    </svg>
  )
  const CloseIcon = ({ s }: { s: number }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      style={{ display: 'block', flexShrink: 0 }} aria-hidden="true">
      <path d="M18 6 6 18"/><path d="M6 6l12 12"/>
    </svg>
  )

  const IconForType = () => {
    switch (type) {
      case 'success': return <SuccessIcon s={S.icon} />
      case 'error':   return <ErrorIcon s={S.icon} />
      case 'warning': return <WarningIcon s={S.icon} />
      default:        return <InfoIcon s={S.icon} />
    }
  }

  // ---- color variants (using exact tokens from tokens.css) ----
  const surfaceStyles: React.CSSProperties =
    type === 'success' ? { backgroundColor: 'var(--color-alert-success-bg)', color: 'var(--color-alert-success-text)' } :
    type === 'error'   ? { backgroundColor: 'var(--color-alert-error-bg)',   color: 'var(--color-alert-error-text)' } :
    type === 'warning' ? { backgroundColor: 'var(--color-alert-warning-bg)', color: 'var(--color-alert-warning-text)' } :
                         { backgroundColor: 'var(--color-alert-info-bg)',    color: 'var(--color-alert-info-text)' }

  // ---- layout ----
  const baseStyles: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr auto',
  alignItems: 'flex-start', // Always use flex-start
  gap: S.gap,
  paddingInline: S.px,
  paddingBlock: S.py,                 
  borderRadius: S.radius,
  fontFamily: 'var(--font-family-primary)',
  fontWeight: 'var(--font-weight-medium)',
  fontSize: S.fontSize,
  lineHeight: S.lineHeight,
  ...surfaceStyles,
  ...style
  }

  const contentStyles: React.CSSProperties = { 
  margin: 0,
  minWidth: 0,
  wordBreak: 'break-word',
  overflowWrap: 'break-word',
  paddingTop: title 
    ? '0'
    : size === 'sm' 
      ? '6px' // Slightly less than icon to fine-tune alignment
      : size === 'md' 
        ? '2px' 
        : '6px' // for lg
  }

  const closeButtonStyles: React.CSSProperties = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: S.closeButtonPadding,
    borderRadius: 'var(--border-radius-base)',
    color: 'currentColor',
    opacity: 0.75,
    transition: 'opacity var(--transition-base)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  }

  return (
    <div
      role="alert"
      aria-live={type === 'error' ? 'assertive' : 'polite'}
      style={baseStyles}
      className={className}
    >
      <span aria-hidden="true" style={{ 
  display: 'flex', 
  alignItems: 'flex-start',
  paddingTop: title 
    ? 'var(--spacing-1)' 
    : size === 'sm' 
      ? '6px' 
      : size === 'md' 
        ? '3px' 
        : '8px' // for lg and default
}}>
  <IconForType />
</span>
      
      <div style={contentStyles}>
  {title && (
    <Heading 
  level={4} 
  margin="none" 
  style={{ 
    marginBottom: 'var(--spacing-0)',
    fontSize: size === 'lg' ? 'var(--font-size-lg)' : size === 'md' ? 'var(--font-size-base)' : 'var(--font-size-sm)', 
    color: 'inherit'
  }}
>
  {title}
</Heading>
  )}
  <div style={{
    fontWeight: title ? 'var(--font-weight-normal)' : 'var(--font-weight-medium)'
  }}>
    {children}
  </div>
</div>

      {dismissible && onClose ? (
        <button
          type="button"
          onClick={onClose}
          style={closeButtonStyles}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.75')}
          aria-label="Close alert"
        >
          <CloseIcon s={S.close} />
        </button>
      ) : (
        // Reserve space so text doesn't shift between dismissible/non-dismissible
        <span aria-hidden="true" style={{ 
          width: S.close, 
          height: S.close,
          flexShrink: 0
        }} />
      )}
    </div>
  )
}