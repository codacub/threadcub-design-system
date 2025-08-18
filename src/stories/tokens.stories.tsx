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

// Helper component for color swatch rows
const ColorSwatch = ({ 
  name, 
  cssVar, 
  description, 
  textColor = 'var(--color-gray-900)' 
}: {
  name: string
  value: string
  cssVar: string
  description?: string
  textColor?: string
}) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-4)',
    padding: 'var(--spacing-3)',
    borderRadius: 'var(--border-radius-base)',
    border: '1px solid var(--color-gray-200)',
    backgroundColor: 'var(--color-white)',
    transition: 'var(--transition-base)',
    cursor: 'pointer'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = 'var(--color-gray-50)'
    e.currentTarget.style.borderColor = 'var(--color-gray-300)'
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = 'var(--color-white)'
    e.currentTarget.style.borderColor = 'var(--color-gray-200)'
  }}
  onClick={() => navigator.clipboard?.writeText(cssVar)}>
    {/* Color Swatch */}
    <div style={{
      width: '48px',
      height: '48px',
      backgroundColor: `var(${cssVar})`,
      borderRadius: 'var(--border-radius-base)',
      border: '1px solid var(--color-gray-200)',
      flexShrink: 0,
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    }} />
    
    {/* Color Details */}
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{
        fontSize: 'var(--font-size-sm)',
        fontWeight: 'var(--font-weight-semibold)',
        color: textColor,
        marginBottom: '2px'
      }}>
        {name}
      </div>
      <div style={{
        fontSize: 'var(--font-size-xs)',
        color: 'var(--color-gray-600)',
        fontFamily: 'monospace',
        marginBottom: description ? '2px' : '0'
      }}>
        {cssVar}
      </div>
      {description && (
        <div style={{
          fontSize: 'var(--font-size-xs)',
          color: 'var(--color-gray-500)',
          fontStyle: 'italic'
        }}>
          {description}
        </div>
      )}
    </div>
    
    {/* Copy indicator */}
    <div style={{
      fontSize: 'var(--font-size-xs)',
      color: 'var(--color-gray-400)',
      opacity: 0.6
    }}>
      Click to copy
    </div>
  </div>
)

// Color section component
const ColorSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div style={{ marginBottom: 'var(--spacing-8)' }}>
    <h3 style={{
      marginBottom: 'var(--spacing-4)',
      fontSize: 'var(--font-size-lg)',
      fontWeight: 'var(--font-weight-semibold)',
      color: 'var(--color-gray-900)',
      borderBottom: '2px solid var(--color-gray-200)',
      paddingBottom: 'var(--spacing-2)'
    }}>
      {title}
    </h3>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
      {children}
    </div>
  </div>
)

// Color palette story - Salesforce Lightning inspired layout
export const Colors = () => (
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    gap: 'var(--spacing-6)',
    maxWidth: '800px',
    margin: '0 auto',
    padding: 'var(--spacing-4)'
  }}>
    
    {/* Header */}
    <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-6)' }}>
      <h2 style={{
        fontSize: 'var(--font-size-3xl)',
        fontWeight: 'var(--font-weight-bold)',
        color: 'var(--color-gray-900)',
        marginBottom: 'var(--spacing-2)'
      }}>
        Color Palette
      </h2>
      <p style={{
        fontSize: 'var(--font-size-base)',
        color: 'var(--color-gray-600)',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        Click any color to copy its CSS variable to your clipboard. These colors form the foundation of the ThreadCub design system.
      </p>
    </div>

    {/* Primary Colors */}
    <ColorSection title="Primary Colors">
      <ColorSwatch 
        name="Primary" 
        value="#7C3AED" 
        cssVar="--color-primary"
        description="Main brand color for buttons, links, and key UI elements"
      />
      <ColorSwatch 
        name="Primary Hover" 
        value="#6D28D9" 
        cssVar="--color-primary-hover"
        description="Hover state for primary interactive elements"
      />
    </ColorSection>

    {/* Gray Scale */}
    <ColorSection title="Gray Scale">
      <ColorSwatch 
        name="White" 
        value="#FFFFFF" 
        cssVar="--color-white"
        description="Pure white for backgrounds and contrast"
      />
      <ColorSwatch 
        name="Gray 50" 
        value="#F9FAFB" 
        cssVar="--color-gray-50"
        description="Lightest gray for subtle backgrounds"
      />
      <ColorSwatch 
        name="Gray 100" 
        value="#F3F4F6" 
        cssVar="--color-gray-100"
        description="Very light gray for card backgrounds"
      />
      <ColorSwatch 
        name="Gray 200" 
        value="#E5E7EB" 
        cssVar="--color-gray-200"
        description="Light gray for borders and dividers"
      />
      <ColorSwatch 
        name="Gray 300" 
        value="#D1D5DB" 
        cssVar="--color-gray-300"
        description="Medium-light gray for inactive states"
      />
      <ColorSwatch 
        name="Gray 400" 
        value="#9CA3AF" 
        cssVar="--color-gray-400"
        description="Medium gray for placeholder text"
      />
      <ColorSwatch 
        name="Gray 500" 
        value="#6B7280" 
        cssVar="--color-gray-500"
        description="Medium-dark gray for secondary text"
      />
      <ColorSwatch 
        name="Gray 600" 
        value="#4B5563" 
        cssVar="--color-gray-600"
        description="Dark gray for labels and captions"
      />
      <ColorSwatch 
        name="Gray 700" 
        value="#374151" 
        cssVar="--color-gray-700"
        description="Darker gray for headings"
      />
      <ColorSwatch 
        name="Gray 800" 
        value="#1F2937" 
        cssVar="--color-gray-800"
        description="Very dark gray for primary text"
      />
      <ColorSwatch 
        name="Gray 900" 
        value="#111827" 
        cssVar="--color-gray-900"
        description="Darkest gray for high contrast text"
      />
    </ColorSection>

    {/* Semantic Colors */}
    <ColorSection title="Semantic Colors">
      <ColorSwatch 
        name="Success" 
        value="#10B981" 
        cssVar="--color-success"
        description="Success states, confirmations, and positive actions"
      />
      <ColorSwatch 
        name="Error" 
        value="#EF4444" 
        cssVar="--color-error"
        description="Error states, warnings, and destructive actions"
      />
      <ColorSwatch 
        name="Error Light" 
        value="#FEF2F2" 
        cssVar="--color-error-light"
        description="Light error background for hover states"
      />
      <ColorSwatch 
        name="Warning" 
        value="#F59E0B" 
        cssVar="--color-warning"
        description="Warning states and cautionary messages"
      />
      <ColorSwatch 
        name="Info" 
        value="#3B82F6" 
        cssVar="--color-info"
        description="Informational messages and neutral notifications"
      />
      <ColorSwatch 
        name="Accent" 
        value="#00A3E4" 
        cssVar="--color-accent"
        description="Secondary accent color for highlights"
      />
      <ColorSwatch 
        name="Accent Blue" 
        value="#4A90E2" 
        cssVar="--color-accent-blue"
        description="Blue accent for links and interactive elements"
      />
    </ColorSection>

    {/* Alert Colors */}
    <ColorSection title="Alert Component Colors">
      <ColorSwatch 
        name="Alert Success Background" 
        value="#DCFCE7" 
        cssVar="--color-alert-success-bg"
        description="Background color for success alerts"
      />
      <ColorSwatch 
        name="Alert Success Text" 
        value="#166534" 
        cssVar="--color-alert-success-text"
        description="Text color for success alerts"
      />
      <ColorSwatch 
        name="Alert Success Border" 
        value="#BBF7D0" 
        cssVar="--color-alert-success-border"
        description="Border color for success alerts"
      />
      <ColorSwatch 
        name="Alert Error Background" 
        value="#FEF2F2" 
        cssVar="--color-alert-error-bg"
        description="Background color for error alerts"
      />
      <ColorSwatch 
        name="Alert Error Text" 
        value="#DC2626" 
        cssVar="--color-alert-error-text"
        description="Text color for error alerts"
      />
      <ColorSwatch 
        name="Alert Error Border" 
        value="#FECACA" 
        cssVar="--color-alert-error-border"
        description="Border color for error alerts"
      />
      <ColorSwatch 
        name="Alert Warning Background" 
        value="#FFFBEB" 
        cssVar="--color-alert-warning-bg"
        description="Background color for warning alerts"
      />
      <ColorSwatch 
        name="Alert Warning Text" 
        value="#D97706" 
        cssVar="--color-alert-warning-text"
        description="Text color for warning alerts"
      />
      <ColorSwatch 
        name="Alert Warning Border" 
        value="#FED7AA" 
        cssVar="--color-alert-warning-border"
        description="Border color for warning alerts"
      />
      <ColorSwatch 
        name="Alert Info Background" 
        value="#EFF6FF" 
        cssVar="--color-alert-info-bg"
        description="Background color for info alerts"
      />
      <ColorSwatch 
        name="Alert Info Text" 
        value="#2563EB" 
        cssVar="--color-alert-info-text"
        description="Text color for info alerts"
      />
      <ColorSwatch 
        name="Alert Info Border" 
        value="#DBEAFE" 
        cssVar="--color-alert-info-border"
        description="Border color for info alerts"
      />
    </ColorSection>

    {/* Text Colors */}
    <ColorSection title="Text Colors">
      <ColorSwatch 
        name="Text Primary" 
        value="#333333" 
        cssVar="--color-text-primary"
        description="Primary text color for headings and body text"
      />
      <ColorSwatch 
        name="Text Secondary" 
        value="#666666" 
        cssVar="--color-text-secondary"
        description="Secondary text color for supporting content"
      />
      <ColorSwatch 
        name="Text Muted" 
        value="#999999" 
        cssVar="--color-text-muted"
        description="Muted text color for less important content"
      />
      <ColorSwatch 
        name="Title Color" 
        value="#8B4513" 
        cssVar="--color-title"
        description="Special color for brand titles and headings"
      />
      <ColorSwatch 
        name="Highlight" 
        value="#555555" 
        cssVar="--color-highlight"
        description="Text color for highlighted content"
      />
      <ColorSwatch 
        name="Toggle Inactive" 
        value="#CCCCCC" 
        cssVar="--color-toggle-inactive"
        description="Color for inactive toggle states"
      />
    </ColorSection>

    {/* Border Colors */}
    <ColorSection title="Border Colors">
      <ColorSwatch 
        name="Border Default" 
        value="#EAEAEA" 
        cssVar="--color-border"
        description="Default border color for cards and containers"
      />
      <ColorSwatch 
        name="Border Light" 
        value="#F0F0F0" 
        cssVar="--color-border-light"
        description="Light border color for subtle dividers"
      />
      <ColorSwatch 
        name="Border Form" 
        value="#E9ECEF" 
        cssVar="--color-border-form"
        description="Border color for form inputs and fields"
      />
      <ColorSwatch 
        name="Border Overlay" 
        value="#4F46E5" 
        cssVar="--color-border-overlay"
        description="Colored border for overlays and focus states"
      />
    </ColorSection>

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
        <div style={{ fontSize: 'var(--font-size-3xl)', fontFamily: 'var(--font-family-primary)' }}>
          3XL (32px) - Large headings
        </div>
        <div style={{ fontSize: 'var(--font-size-4xl)', fontFamily: 'var(--font-family-primary)' }}>
          4XL (40px) - Hero headings
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