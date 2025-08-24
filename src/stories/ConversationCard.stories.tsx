import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { ConversationCard } from '../components/ConversationCard'
import type { ConversationData, AnalysisResult } from '../components/ConversationCard'
import '../styles/tokens.css'

const meta: Meta<typeof ConversationCard> = {
  title: 'Components/ConversationCard',
  component: ConversationCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'ConversationCard component displays conversation data with analysis results. Features action buttons with optional Lucide icons, expandable analysis section, and AI service tags using design system components.'
      }
    }
  },
  argTypes: {
    conversation: {
      control: 'object',
      description: 'Conversation data object'
    },
    analysis: {
      control: 'object',
      description: 'Optional analysis result data'
    },
    isAnalyzing: {
      control: 'boolean',
      description: 'Whether analysis is in progress',
      table: { defaultValue: { summary: 'false' } }
    },
    showAnalysis: {
      control: 'boolean',
      description: 'Whether to show analysis section',
      table: { defaultValue: { summary: 'false' } }
    },
    isPending: {
      control: 'boolean',
      description: 'Whether user is on waitlist (disables some buttons)',
      table: { defaultValue: { summary: 'false' } }
    },
    showButtonIcons: {
      control: 'boolean',
      description: 'Whether to show Lucide icons in action buttons',
      table: { defaultValue: { summary: 'false' } }
    },
    onAnalyze: {
      action: 'analyze',
      description: 'Callback when analyze button is clicked'
    },
    onDeepDive: {
      action: 'deep-dive',
      description: 'Callback when deep dive button is clicked'
    },
    onActionPlan: {
      action: 'action-plan',
      description: 'Callback when action plan button is clicked'
    },
    onContinue: {
      action: 'continue',
      description: 'Callback when continue button is clicked'
    }
  },
  args: {
    onAnalyze: fn(),
    onDeepDive: fn(),
    onActionPlan: fn(),
    onContinue: fn()
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof ConversationCard>

// Sample data
const sampleConversation: ConversationData = {
  id: '1',
  title: 'Product Roadmap Discussion',
  platform: 'claude',
  message_count: 42,
  created_at: '2024-01-15T10:30:00Z',
  user_id: 'user-123'
}

const sampleAnalysis: AnalysisResult = {
  summary: 'Team discussed Q2 product roadmap priorities, focusing on user authentication improvements and mobile app features. Key decisions made around timeline and resource allocation.',
  keyTopics: ['Authentication', 'Mobile App', 'Timeline', 'Resources', 'Q2 Planning'],
  nextSteps: [
    'Schedule technical review meeting with engineering team',
    'Create detailed specifications for authentication system',
    'Conduct user research for mobile app features',
    'Finalize budget allocation for Q2 initiatives'
  ],
  openQuestions: [
    'What is the expected timeline for the authentication overhaul?',
    'Should we prioritize iOS or Android development first?',
    'Do we need additional team members for the mobile project?'
  ],
  sentiment: 'positive',
  progress: 75
}

// Basic variants
export const Default: Story = {
  args: {
    conversation: sampleConversation
  }
}

export const WithButtonIcons: Story = {
  args: {
    conversation: sampleConversation,
    analysis: sampleAnalysis,
    showAnalysis: true,
    showButtonIcons: true
  }
}

export const WithoutButtonIcons: Story = {
  args: {
    conversation: sampleConversation,
    analysis: sampleAnalysis,
    showAnalysis: true,
    showButtonIcons: false
  }
}

export const Analyzing: Story = {
  args: {
    conversation: sampleConversation,
    isAnalyzing: true
  }
}

export const AnalysisHidden: Story = {
  args: {
    conversation: sampleConversation,
    analysis: sampleAnalysis,
    showAnalysis: false
  }
}

export const UserOnWaitlist: Story = {
  args: {
    conversation: sampleConversation,
    analysis: sampleAnalysis,
    showAnalysis: true,
    isPending: true
  },
  parameters: {
    docs: {
      description: {
        story: 'When user is on waitlist, Deep Dive and Action Plan buttons are disabled.'
      }
    }
  }
}

// Different AI services
export const ClaudeConversation: Story = {
  args: {
    conversation: {
      id: '1',
      title: 'AI Strategy Discussion',
      platform: 'claude',
      message_count: 28,
      created_at: '2024-01-15T10:30:00Z',
      user_id: 'user-123'
    }
  }
}

export const ChatGPTConversation: Story = {
  args: {
    conversation: {
      id: '2',
      title: 'Content Creation Session',
      platform: 'chatgpt',
      message_count: 56,
      created_at: '2024-01-16T14:20:00Z',
      user_id: 'user-456'
    }
  }
}

export const CopilotConversation: Story = {
  args: {
    conversation: {
      id: '3',
      title: 'Code Review and Optimization',
      platform: 'copilot',
      message_count: 89,
      created_at: '2024-01-17T09:15:00Z',
      user_id: 'user-789'
    }
  }
}

export const GeminiConversation: Story = {
  args: {
    conversation: {
      id: '4',
      title: 'Research and Analysis',
      platform: 'gemini',
      message_count: 34,
      created_at: '2024-01-18T16:45:00Z',
      user_id: 'user-101'
    }
  }
}

// Multiple cards layout
export const MultipleCards: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: 0,
      maxWidth: '800px',
      border: 'var(--border-width-thin) solid var(--color-gray-200)',
      borderRadius: 'var(--border-radius-lg)',
      overflow: 'hidden'
    }}>
      <ConversationCard
        conversation={sampleConversation}
        analysis={sampleAnalysis}
        showAnalysis={true}
      />
      <ConversationCard
        conversation={{
          id: '2',
          title: 'Marketing Campaign Review',
          platform: 'chatgpt',
          message_count: 28,
          created_at: '2024-01-18T09:15:00Z',
          user_id: 'user-789'
        }}
      />
      <ConversationCard
        conversation={{
          id: '3',
          title: 'Customer Feedback Analysis',
          platform: 'gemini',
          message_count: 73,
          created_at: '2024-01-22T16:20:00Z',
          user_id: 'user-456'
        }}
        isAnalyzing={true}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple conversation cards showing different AI services and states in a list layout.'
      }
    }
  }
}

export const AIServiceShowcase: Story = {
  render: () => (
    <div style={{ 
      display: 'grid',
      gap: 'var(--spacing-4)',
      fontFamily: 'var(--font-family-primary)'
    }}>
      <h3 style={{ 
        margin: '0 0 var(--spacing-4) 0',
        fontSize: 'var(--font-size-lg)',
        fontWeight: 'var(--font-weight-semibold)',
        color: 'var(--color-gray-900)'
      }}>
        Different AI Services
      </h3>
      
      <div style={{
        border: 'var(--border-width-thin) solid var(--color-gray-200)',
        borderRadius: 'var(--border-radius-lg)',
        overflow: 'hidden'
      }}>
        <ConversationCard
          conversation={{
            id: '1',
            title: 'Claude Strategy Discussion',
            platform: 'claude',
            message_count: 42,
            created_at: '2024-01-15T10:30:00Z',
            user_id: 'user-123'
          }}
          analysis={sampleAnalysis}
          showAnalysis={true}
        />
        <ConversationCard
          conversation={{
            id: '2',
            title: 'ChatGPT Content Creation',
            platform: 'chatgpt',
            message_count: 56,
            created_at: '2024-01-16T14:20:00Z',
            user_id: 'user-456'
          }}
        />
        <ConversationCard
          conversation={{
            id: '3',
            title: 'GitHub Copilot Code Review',
            platform: 'copilot',
            message_count: 89,
            created_at: '2024-01-17T09:15:00Z',
            user_id: 'user-789'
          }}
        />
        <ConversationCard
          conversation={{
            id: '4',
            title: 'Gemini Research Analysis',
            platform: 'gemini',
            message_count: 34,
            created_at: '2024-01-18T16:45:00Z',
            user_id: 'user-101'
          }}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase showing different AI services with color-coded tags: Claude (primary/purple), ChatGPT (success/green), Copilot (secondary/gray), Gemini (warning/yellow).'
      }
    }
  }
}