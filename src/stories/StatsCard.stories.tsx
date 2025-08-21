// stories/StatsCard.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { StatsCard } from '../components/StatsCard'
import '../styles/tokens.css'

const meta: Meta<typeof StatsCard> = {
  title: 'Components/StatsCard',
  component: StatsCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A reusable statistics card component for displaying key metrics. Features multiple color variants, optional icons, hover effects, and full design token integration for consistent styling across your dashboard.'
      }
    }
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'The main label/title for the statistic'
    },
    value: {
      control: 'text',
      description: 'The primary stat value to display (string or number)'
    },
    subtitle: {
      control: 'text',
      description: 'Optional subtitle or additional context'
    },
    variant: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error', 'info', 'neutral'],
      description: 'Color variant for the value',
      table: { defaultValue: { summary: 'primary' } }
    },
    icon: {
      control: false,
      description: 'Optional icon element (React node)'
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof StatsCard>

// Basic variants
export const Primary: Story = {
  args: {
    label: 'Total Conversations',
    value: '127',
    variant: 'primary'
  }
}

export const Success: Story = {
  args: {
    label: 'Completed Tasks',
    value: '89',
    variant: 'success',
    subtitle: '+12% from last week'
  }
}

export const Warning: Story = {
  args: {
    label: 'Pending Reviews',
    value: '23',
    variant: 'warning',
    subtitle: 'Requires attention'
  }
}

export const Error: Story = {
  args: {
    label: 'Failed Imports',
    value: '5',
    variant: 'error',
    subtitle: 'Down from 12 yesterday'
  }
}

export const Info: Story = {
  args: {
    label: 'Active Sessions',
    value: '42',
    variant: 'info',
    subtitle: 'Currently online'
  }
}

export const Neutral: Story = {
  args: {
    label: 'Total Users',
    value: '1,847',
    variant: 'neutral'
  }
}

// With icons
export const WithIcon: Story = {
  args: {
    label: 'Messages Processed',
    value: '15,423',
    variant: 'primary',
    subtitle: 'Last 30 days',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    )
  }
}

export const WithTrendIcon: Story = {
  args: {
    label: 'Revenue Growth',
    value: '+24.5%',
    variant: 'success',
    subtitle: 'This quarter',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/>
        <path d="m19 9-5 5-4-4-3 3"/>
      </svg>
    )
  }
}

export const WithAlertIcon: Story = {
  args: {
    label: 'System Alerts',
    value: '7',
    variant: 'warning',
    subtitle: '3 critical, 4 minor',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>
        <path d="M12 9v4"/>
        <path d="M12 17h.01"/>
      </svg>
    )
  }
}

// Large numbers
export const LargeNumber: Story = {
  args: {
    label: 'Total Conversations',
    value: '2,847,392',
    variant: 'primary',
    subtitle: 'All time'
  }
}

export const Percentage: Story = {
  args: {
    label: 'Success Rate',
    value: '98.7%',
    variant: 'success',
    subtitle: 'Above target'
  }
}

// ThreadCub specific examples
export const ConversationsCard: Story = {
  args: {
    label: 'Conversations',
    value: '7',
    variant: 'primary',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    )
  }
}

export const MessagesCard: Story = {
  args: {
    label: 'Total Messages',
    value: '171',
    variant: 'success',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 9a2 2 0 0 1-2 2H6l-4-4V4c0-1.1.9-2 2-2h2l4 4h4a2 2 0 0 1 2 2v3"/>
        <path d="M18 16v-3a2 2 0 0 0-2-2h-4l-4-4H6a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2h2l4 4h4a2 2 0 0 0 2-2Z"/>
      </svg>
    )
  }
}

export const AnalysesCard: Story = {
  args: {
    label: 'AI Analyses',
    value: '0',
    variant: 'info',
    subtitle: 'Start analyzing conversations',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11H1v3h8v3l3-3.5L9 10v1z"/>
        <path d="M22 12h-7.5"/>
        <path d="M16 7h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"/>
        <circle cx="9" cy="12" r="1"/>
      </svg>
    )
  }
}

// Grid layout demonstration
export const DashboardGrid: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 'var(--spacing-4)',
      fontFamily: 'var(--font-family-primary)'
    }}>
      <StatsCard
        label="Conversations"
        value="7"
        variant="primary"
        icon={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        }
      />
      <StatsCard
        label="Total Messages"
        value="171"
        variant="success"
        icon={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 9a2 2 0 0 1-2 2H6l-4-4V4c0-1.1.9-2 2-2h2l4 4h4a2 2 0 0 1 2 2v3"/>
            <path d="M18 16v-3a2 2 0 0 0-2-2h-4l-4-4H6a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2h2l4 4h4a2 2 0 0 0 2-2Z"/>
          </svg>
        }
      />
      <StatsCard
        label="AI Analyses"
        value="0"
        variant="info"
        subtitle="Start analyzing conversations"
        icon={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 11H1v3h8v3l3-3.5L9 10v1z"/>
            <path d="M22 12h-7.5"/>
            <path d="M16 7h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"/>
            <circle cx="9" cy="12" r="1"/>
          </svg>
        }
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of how StatsCards look in a dashboard grid layout with consistent spacing and responsive design.'
      }
    }
  }
}

// All variants comparison
export const AllVariants: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: 'var(--spacing-4)',
      fontFamily: 'var(--font-family-primary)'
    }}>
      <div>
        <h3 style={{ 
          fontSize: 'var(--font-size-sm)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-gray-900)',
          margin: '0 0 var(--spacing-3) 0',
          textAlign: 'center'
        }}>
          Primary
        </h3>
        <StatsCard label="Conversations" value="127" variant="primary" />
      </div>
      
      <div>
        <h3 style={{ 
          fontSize: 'var(--font-size-sm)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-gray-900)',
          margin: '0 0 var(--spacing-3) 0',
          textAlign: 'center'
        }}>
          Success
        </h3>
        <StatsCard label="Completed" value="89" variant="success" />
      </div>
      
      <div>
        <h3 style={{ 
          fontSize: 'var(--font-size-sm)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-gray-900)',
          margin: '0 0 var(--spacing-3) 0',
          textAlign: 'center'
        }}>
          Warning
        </h3>
        <StatsCard label="Pending" value="23" variant="warning" />
      </div>
      
      <div>
        <h3 style={{ 
          fontSize: 'var(--font-size-sm)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-gray-900)',
          margin: '0 0 var(--spacing-3) 0',
          textAlign: 'center'
        }}>
          Error
        </h3>
        <StatsCard label="Failed" value="5" variant="error" />
      </div>
      
      <div>
        <h3 style={{ 
          fontSize: 'var(--font-size-sm)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-gray-900)',
          margin: '0 0 var(--spacing-3) 0',
          textAlign: 'center'
        }}>
          Info
        </h3>
        <StatsCard label="Active" value="42" variant="info" />
      </div>
      
      <div>
        <h3 style={{ 
          fontSize: 'var(--font-size-sm)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-gray-900)',
          margin: '0 0 var(--spacing-3) 0',
          textAlign: 'center'
        }}>
          Neutral
        </h3>
        <StatsCard label="Total" value="1,847" variant="neutral" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available color variants displayed together for easy comparison.'
      }
    }
  }
}