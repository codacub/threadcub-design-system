import type { Meta } from '@storybook/react'

// Import your tokens with correct path
import '../styles/tokens.css'

const meta: Meta = {
  title: 'Design System/Tokens',
  parameters: {
    layout: 'padded',
  },
}

export default meta

// Color palette story - matching your actual tokens.css structure
export const Colors = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
    
    {/* Primary Colors */}
    <div>
      <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-semibold)' }}>Primary Colors</h3>
      <div style={{ display: 'grid', gap: 'var(--spacing-4)', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        <div style={{ background: 'var(--color-primary)', color: 'white', padding: 'var(--spacing-4)', borderRadius: 'var(--border-radius-lg)' }}>
          Primary (#7C3AED)
        </div>
        <div style={{ background: 'var(--color-primary-hover)', color: 'white', padding: 'var(--spacing-4)', borderRadius: 'var(--border-radius-lg)' }}>
          Primary Hover (#6D28D9)
        </div>
      </div>
    </div>

    {/* Semantic Colors */}
    <div>
      <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-semibold)' }}>Semantic Colors</h3>
      <div style={{ display: 'grid', gap: 'var(--spacing-4)', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
        <div style={{ background: 'var(--color-success)', color: 'white', padding: 'var(--spacing-4)', borderRadius: 'var(--border-radius-lg)' }}>
          Success
        </div>
        <div style={{ background: 'var(--color-error)', color: 'white', padding: 'var(--spacing-4)', borderRadius: 'var(--border-radius-lg)' }}>
          Error
        </div>
        <div style={{ background: 'var(--color-warning)', color: 'white', padding: 'var(--spacing-4)', borderRadius: 'var(--border-radius-lg)' }}>
          Warning
        </div>
        <div style={{ background: 'var(--color-info)', color: 'white', padding: 'var(--spacing-4)', borderRadius: 'var(--border-radius-lg)' }}>
          Info
        </div>
        <div style={{ background: 'var(--color-accent)', color: 'white', padding: 'var(--spacing-4)', borderRadius: 'var(--border-radius-lg)' }}>
          Accent
        </div>
        <div style={{ background: 'var(--color-accent-blue)', color: 'white', padding: 'var(--spacing-4)', borderRadius: 'var(--border-radius-lg)' }}>
          Accent Blue
        </div>
      </div>
    </div>

    {/* Gray Scale */}
    <div>
      <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-semibold)' }}>Gray Scale</h3>
      <div style={{ display: 'grid', gap: 'var(--spacing-2)', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))' }}>
        <div style={{ background: 'var(--color-white)', color: 'black', padding: 'var(--spacing-3)', borderRadius: 'var(--border-radius-base)', border: '1px solid var(--color-gray-200)', textAlign: 'center' }}>
          White
        </div>
        {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(shade => (
          <div 
            key={shade}
            style={{ 
              background: `var(--color-gray-${shade})`, 
              color: shade >= 500 ? 'white' : 'black',
              padding: 'var(--spacing-3)', 
              borderRadius: 'var(--border-radius-base)',
              textAlign: 'center',
              fontSize: 'var(--font-size-xs)'
            }}
          >
            Gray {shade}
          </div>
        ))}
      </div>
    </div>

    {/* Text Colors */}
    <div>
      <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-semibold)' }}>Text Colors</h3>
      <div style={{ display: 'grid', gap: 'var(--spacing-4)', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
        <div style={{ background: 'var(--color-gray-50)', color: 'var(--color-text-primary)', padding: 'var(--spacing-4)', borderRadius: 'var(--border-radius-lg)', border: '1px solid var(--color-border)' }}>
          Text Primary
        </div>
        <div style={{ background: 'var(--color-gray-50)', color: 'var(--color-text-secondary)', padding: 'var(--spacing-4)', borderRadius: 'var(--border-radius-lg)', border: '1px solid var(--color-border)' }}>
          Text Secondary
        </div>
        <div style={{ background: 'var(--color-gray-50)', color: 'var(--color-text-muted)', padding: 'var(--spacing-4)', borderRadius: 'var(--border-radius-lg)', border: '1px solid var(--color-border)' }}>
          Text Muted
        </div>
        <div style={{ background: 'var(--color-gray-50)', color: 'var(--color-title)', padding: 'var(--spacing-4)', borderRadius: 'var(--border-radius-lg)', border: '1px solid var(--color-border)' }}>
          Title Color
        </div>
      </div>
    </div>

    {/* Priority Tag Colors */}
    <div>
      <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-semibold)' }}>Priority Tag Colors</h3>
      <div style={{ display: 'grid', gap: 'var(--spacing-4)', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
        <div style={{ background: 'var(--color-priority-high-bg)', color: 'var(--color-priority-high-text)', padding: 'var(--spacing-4)', borderRadius: 'var(--border-radius-lg)', border: '1px solid var(--color-border)' }}>
          High Priority
        </div>
        <div style={{ background: 'var(--color-priority-medium-bg)', color: 'var(--color-priority-medium-text)', padding: 'var(--spacing-4)', borderRadius: 'var(--border-radius-lg)', border: '1px solid var(--color-border)' }}>
          Medium Priority
        </div>
        <div style={{ background: 'var(--color-priority-low-bg)', color: 'var(--color-priority-low-text)', padding: 'var(--spacing-4)', borderRadius: 'var(--border-radius-lg)', border: '1px solid var(--color-border)' }}>
          Low Priority
        </div>
      </div>
    </div>

    {/* Border Colors */}
    <div>
      <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-semibold)' }}>Border Colors</h3>
      <div style={{ display: 'grid', gap: 'var(--spacing-4)', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
        <div style={{ background: 'var(--color-white)', padding: 'var(--spacing-4)', borderRadius: 'var(--border-radius-lg)', border: '2px solid var(--color-border)' }}>
          Border Default
        </div>
        <div style={{ background: 'var(--color-white)', padding: 'var(--spacing-4)', borderRadius: 'var(--border-radius-lg)', border: '2px solid var(--color-border-light)' }}>
          Border Light
        </div>
        <div style={{ background: 'var(--color-white)', padding: 'var(--spacing-4)', borderRadius: 'var(--border-radius-lg)', border: '2px solid var(--color-border-form)' }}>
          Border Form
        </div>
      </div>
    </div>

    {/* Floating Button Colors (Chrome Extension) */}
    <div>
      <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-semibold)' }}>Floating Button Colors</h3>
      <div style={{ display: 'grid', gap: 'var(--spacing-4)', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
        <div style={{ background: 'var(--color-floating-btn-bg)', color: 'var(--color-floating-btn-text)', padding: 'var(--spacing-4)', borderRadius: 'var(--border-radius-lg)', border: '1px solid var(--color-floating-btn-border)' }}>
          Floating Button
        </div>
        <div style={{ background: 'var(--color-action-btn-bg)', color: 'var(--color-action-btn-text)', padding: 'var(--spacing-4)', borderRadius: 'var(--border-radius-lg)', border: '1px solid var(--color-action-btn-border)' }}>
          Action Button
        </div>
        <div style={{ background: 'var(--color-tooltip-bg)', color: 'var(--color-tooltip-text)', padding: 'var(--spacing-4)', borderRadius: 'var(--border-radius-lg)' }}>
          Tooltip
        </div>
      </div>
    </div>

  </div>
)

// Spacing story - showing your complete spacing scale
export const Spacing = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
    <div>
      <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-semibold)' }}>Base Spacing Scale</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12].map(size => (
          <div key={size} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)' }}>
            <div style={{ 
              background: 'var(--color-primary)', 
              height: 'var(--spacing-6)',
              width: `var(--spacing-${size})`,
              borderRadius: 'var(--border-radius-base)',
              minWidth: size === 0 ? '2px' : 'auto'
            }}></div>
            <span style={{ fontSize: 'var(--font-size-sm)', fontFamily: 'monospace', minWidth: '100px' }}>
              --spacing-{size}: {size === 0 ? '0px' : `${size * 4}px`}
            </span>
          </div>
        ))}
      </div>
    </div>
    
    <div>
      <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-semibold)' }}>Special Spacing</h3>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)' }}>
        <div style={{ 
          background: 'var(--color-accent)', 
          height: 'var(--spacing-6)',
          width: 'var(--spacing-gap-xs)',
          borderRadius: 'var(--border-radius-base)'
        }}></div>
        <span style={{ fontSize: 'var(--font-size-sm)', fontFamily: 'monospace' }}>
          --spacing-gap-xs: 6px (Action buttons gap)
        </span>
      </div>
    </div>
  </div>
)

// Typography story - comprehensive font system
export const Typography = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
    
    {/* Font Families */}
    <div>
      <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-semibold)' }}>Font Families</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
        <div style={{ fontFamily: 'var(--font-family-title)', fontSize: 'var(--font-size-2xl)' }}>
          Averia Sans Libre - Title Font (ThreadCub)
        </div>
        <div style={{ fontFamily: 'var(--font-family-primary)', fontSize: 'var(--font-size-lg)' }}>
          Karla - Primary Font (Body text and UI)
        </div>
        <div style={{ fontFamily: 'var(--font-family-system)', fontSize: 'var(--font-size-base)' }}>
          System Font - Fallback (Cross-platform system fonts)
        </div>
      </div>
    </div>

    {/* Font Sizes */}
    <div>
      <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-semibold)' }}>Font Sizes</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
        <div style={{ fontSize: 'var(--font-size-xs)', fontFamily: 'var(--font-family-primary)' }}>
          Extra Small (12px) - Labels, captions
        </div>
        <div style={{ fontSize: 'var(--font-size-sm)', fontFamily: 'var(--font-family-primary)' }}>
          Small (14px) - Secondary text
        </div>
        <div style={{ fontSize: 'var(--font-size-base)', fontFamily: 'var(--font-family-primary)' }}>
          Base (16px) - Body text, buttons
        </div>
        <div style={{ fontSize: 'var(--font-size-lg)', fontFamily: 'var(--font-family-primary)' }}>
          Large (18px) - Subheadings
        </div>
        <div style={{ fontSize: 'var(--font-size-2xl)', fontFamily: 'var(--font-family-primary)' }}>
          2XL (24px) - Section headings
        </div>
      </div>
    </div>

    {/* Font Weights */}
    <div>
      <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-semibold)' }}>Font Weights</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
        <div style={{ fontWeight: 'var(--font-weight-normal)', fontSize: 'var(--font-size-base)' }}>
          Normal (400) - Regular body text
        </div>
        <div style={{ fontWeight: 'var(--font-weight-medium)', fontSize: 'var(--font-size-base)' }}>
          Medium (500) - Emphasized text
        </div>
        <div style={{ fontWeight: 'var(--font-weight-semibold)', fontSize: 'var(--font-size-base)' }}>
          Semibold (600) - Subheadings
        </div>
        <div style={{ fontWeight: 'var(--font-weight-bold)', fontSize: 'var(--font-size-base)' }}>
          Bold (700) - Headings
        </div>
        <div style={{ fontWeight: 'var(--font-weight-extrabold)', fontSize: 'var(--font-size-base)' }}>
          Extra Bold (800) - Strong emphasis
        </div>
      </div>
    </div>

    {/* Line Heights */}
    <div>
      <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-semibold)' }}>Line Heights</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
        <div style={{ lineHeight: 'var(--line-height-tight)', fontSize: 'var(--font-size-base)', background: 'var(--color-gray-50)', padding: 'var(--spacing-3)', borderRadius: 'var(--border-radius-base)' }}>
          Tight (1.25) - For headings and short text where space is limited. This line height creates a more compact appearance.
        </div>
        <div style={{ lineHeight: 'var(--line-height-normal)', fontSize: 'var(--font-size-base)', background: 'var(--color-gray-50)', padding: 'var(--spacing-3)', borderRadius: 'var(--border-radius-base)' }}>
          Normal (1.5) - For body text and general content. This provides good readability and comfortable spacing between lines.
        </div>
      </div>
    </div>

    {/* Special Typography (Chrome Extension) */}
    <div>
      <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-semibold)' }}>Chrome Extension Typography</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
        <div style={{ fontSize: 'var(--font-size-floating-btn-bear-face)' }}>
          🐻 Bear Face (32px) - Floating button
        </div>
        <div style={{ 
          fontSize: 'var(--font-size-tooltip)', 
          fontWeight: 'var(--font-weight-tooltip)',
          letterSpacing: 'var(--font-spacing-tooltip)',
          background: 'var(--color-tooltip-bg)',
          color: 'var(--color-tooltip-text)',
          padding: 'var(--spacing-2)',
          borderRadius: 'var(--border-radius-base)',
          display: 'inline-block'
        }}>
          Tooltip Text (13px, 600 weight)
        </div>
        <div style={{ 
          fontSize: 'var(--font-size-toast)', 
          fontWeight: 'var(--font-weight-toast)',
          background: 'var(--color-toast-success-bg)',
          color: 'var(--color-toast-success-text)',
          padding: 'var(--spacing-3)',
          borderRadius: 'var(--border-radius-base)',
          display: 'inline-block'
        }}>
          Toast Message (14px, 800 weight)
        </div>
      </div>
    </div>

  </div>
)