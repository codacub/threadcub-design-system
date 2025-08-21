// stories/ConversationCard.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { ConversationCard } from '../components/ConversationCard'
import '../styles/tokens.css'

// Define types locally to avoid import issues
interface ConversationData {
  id: string
  title: string
  platform: string
  message_count: number
  created_at: string
  user_id: string | null
}

interface AnalysisResult {
  summary: string
  keyTopics: string[]
  nextSteps: string[]
  openQuestions: string[]
  sentiment: 'positive' | 'neutral' | 'needs-attention'
  progress: number
}

const meta: Meta<typeof ConversationCard> = {
  title: 'Components/ConversationCard',
  component: ConversationCard,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Individual conversation display component for ThreadCub dashboard. Features expandable AI analysis, action buttons, platform badges, and full design token integration. Supports waitlist restrictions and various interaction states.'
      }
    }
  },
  decorators: [
    (Story) => (
      <div style={{ 
        backgroundColor: 'var(--color-gray-50)', 
        minHeight: '100vh',
        padding: 'var(--spacing-6)',
        fontFamily: 'var(--font-family-primary)'
      }}>
        <div style={{
          backgroundColor: 'var(--color-white)',
          borderRadius: 'var(--border-radius-lg)',
          boxShadow: 'var(--shadow-card)',
          overflow: 'hidden'
        }}>
          <Story />
        </div>
      </div>
    ),
  ],
  argTypes: {
    conversation: {
      control: false,
      description: 'Conversation data object'
    },
    analysis: {
      control: false,
      description: 'Analysis result if available'
    },
    isAnalyzing: {
      control: 'boolean',
      description: 'Whether analysis is currently loading'
    },
    showAnalysis: {
      control: 'boolean',
      description: 'Whether analysis is currently visible'
    },
    isPending: {
      control: 'boolean',
      description: 'Whether user is on waitlist (affects button availability)'
    },
    onAnalyze: {
      action: 'analyze',
      description: 'Analyze button handler'
    },
    onDeepDive: {
      action: 'deep-dive', 
      description: 'Deep dive button handler'
    },
    onActionPlan: {
      action: 'action-plan',
      description: 'Action plan button handler'
    },
    onContinue: {
      action: 'continue',
      description: 'Continue conversation button handler'
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof ConversationCard>

// Sample data
const sampleConversation: ConversationData = {
  id: '1',
  title: 'Thu 21 Aug 17:00 - Storybook cont - Claude',
  platform: 'claude.ai',
  message_count: 37,
  created_at: '2025-08-21T17:00:00.000Z',
  user_id: 'user123'
}

const sampleAnalysis: AnalysisResult = {
  summary: 'Discussion about improving ThreadCub design system components, ensuring proper use of design tokens, and fixing TypeScript errors in Storybook stories.',
  keyTopics: ['Design System', 'Storybook', 'TypeScript', 'Design Tokens', 'Component Architecture'],
  nextSteps: [
    'Complete the DashboardPage component using StatsCard and ConversationCard',
    'Create Storybook stories for new components',
    'Test the AppLayout integration with the new page components',
    'Update the design system documentation'
  ],
  openQuestions: [
    'Should we create additional reusable components for the dashboard?',
    'How should we handle the existing conversation/thread API integration?'
  ],
  sentiment: 'positive',
  progress: 75
}

// Basic states
export const Default: Story = {
  args: {
    conversation: sampleConversation,
    onAnalyze: fn(),
    onDeepDive: fn(),
    onActionPlan: fn(),
    onContinue: fn()
  }
}

export const Analyzing: Story = {
  args: {
    conversation: sampleConversation,
    isAnalyzing: true,
    onAnalyze: fn(),
    onDeepDive: fn(),
    onActionPlan: fn(),
    onContinue: fn()
  }
}

export const WithAnalysis: Story = {
  args: {
    conversation: sampleConversation,
    analysis: sampleAnalysis,
    showAnalysis: true,
    onAnalyze: fn(),
    onDeepDive: fn(),
    onActionPlan: fn(),
    onContinue: fn()
  }
}

export const WaitlistUser: Story = {
  args: {
    conversation: sampleConversation,
    analysis: sampleAnalysis,
    showAnalysis: true,
    isPending: true,
    onAnalyze: fn(),
    onDeepDive: fn(),
    onActionPlan: fn(),
    onContinue: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows how the card appears for waitlist users with restricted access to Deep Dive and Action Plan features.'
      }
    }
  }
}

// Different platforms
export const ChatGPTConversation: Story = {
  args: {
    conversation: {
      ...sampleConversation,
      title: 'Building a React Dashboard Component',
      platform: 'chatgpt',
      message_count: 24
    },
    analysis: {
      ...sampleAnalysis,
      summary: 'Collaborative development of a React dashboard component with proper state management and responsive design patterns.',
      keyTopics: ['React', 'Dashboard', 'State Management', 'Responsive Design'],
      progress: 60
    },
    showAnalysis: true,
    onAnalyze: fn(),
    onDeepDive: fn(),
    onActionPlan: fn(),
    onContinue: fn()
  }
}

export const GeminiConversation: Story = {
  args: {
    conversation: {
      ...sampleConversation,
      title: 'API Integration and Error Handling Strategies',
      platform: 'gemini',
      message_count: 15,
      created_at: '2025-08-20T14:30:00.000Z'
    },
    analysis: {
      summary: 'Deep dive into API integration patterns, error handling strategies, and best practices for resilient application architecture.',
      keyTopics: ['API Integration', 'Error Handling', 'Architecture', 'Best Practices'],
      nextSteps: [
        'Implement retry logic with exponential backoff',
        'Add comprehensive error logging',
        'Create user-friendly error messages'
      ],
      openQuestions: [
        'Should we implement circuit breaker pattern?',
        'What\'s the optimal timeout configuration?'
      ],
      sentiment: 'neutral',
      progress: 45
    },
    showAnalysis: true,
    onAnalyze: fn(),
    onDeepDive: fn(),
    onActionPlan: fn(),
    onContinue: fn()
  }
}

// Different conversation lengths
export const ShortConversation: Story = {
  args: {
    conversation: {
      ...sampleConversation,
      title: 'Quick CSS Flexbox Question',
      message_count: 4,
      created_at: '2025-08-21T09:15:00.000Z'
    },
    analysis: {
      summary: 'Brief discussion about CSS Flexbox alignment properties and common layout patterns.',
      keyTopics: ['CSS', 'Flexbox', 'Layout'],
      nextSteps: ['Apply flexbox solution to the current project'],
      openQuestions: [],
      sentiment: 'positive',
      progress: 90
    },
    showAnalysis: true,
    onAnalyze: fn(),
    onDeepDive: fn(),
    onActionPlan: fn(),
    onContinue: fn()
  }
}

export const LongConversation: Story = {
  args: {
    conversation: {
      ...sampleConversation,
      title: 'Complete E-commerce Platform Architecture Design',
      message_count: 156,
      created_at: '2025-08-18T10:00:00.000Z'
    },
    analysis: {
      summary: 'Comprehensive architectural planning for a scalable e-commerce platform including microservices design, database architecture, payment integration, and deployment strategies.',
      keyTopics: ['E-commerce', 'Microservices', 'Database Design', 'Payment Systems', 'DevOps', 'Scalability'],
      nextSteps: [
        'Create detailed microservices boundary map',
        'Design database schemas for user, product, and order services',
        'Evaluate payment gateway options and integration complexity',
        'Set up CI/CD pipeline infrastructure',
        'Implement monitoring and logging strategy'
      ],
      openQuestions: [
        'Should we use event sourcing for order management?',
        'What\'s the best approach for handling inventory consistency?',
        'How do we handle cross-service transactions?'
      ],
      sentiment: 'positive',
      progress: 25
    },
    showAnalysis: true,
    onAnalyze: fn(),
    onDeepDive: fn(),
    onActionPlan: fn(),
    onContinue: fn()
  }
}

// Different sentiment types
export const NeedsAttention: Story = {
  args: {
    conversation: {
      ...sampleConversation,
      title: 'Debugging Production Performance Issues',
      platform: 'claude.ai',
      message_count: 28
    },
    analysis: {
      summary: 'Investigation of critical performance bottlenecks in production environment affecting user experience and system stability.',
      keyTopics: ['Performance', 'Debugging', 'Production Issues', 'Optimization'],
      nextSteps: [
        'Implement immediate hotfix for memory leak',
        'Add performance monitoring dashboards',
        'Optimize database queries causing timeouts'
      ],
      openQuestions: [
        'Root cause of the memory leak still unclear',
        'Impact on user retention needs assessment'
      ],
      sentiment: 'needs-attention',
      progress: 30
    },
    showAnalysis: true,
    onAnalyze: fn(),
    onDeepDive: fn(),
    onActionPlan: fn(),
    onContinue: fn()
  }
}

// Multiple conversations in a list
export const ConversationList: Story = {
  render: () => (
    <div>
      <ConversationCard
        conversation={{
          id: '1',
          title: 'Thu 21 Aug 17:00 - Storybook cont - Claude',
          platform: 'claude.ai',
          message_count: 37,
          created_at: '2025-08-21T17:00:00.000Z',
          user_id: 'user123'
        }}
        analysis={sampleAnalysis}
        showAnalysis={true}
        onAnalyze={fn()}
        onDeepDive={fn()}
        onActionPlan={fn()}
        onContinue={fn()}
      />
      
      <ConversationCard
        conversation={{
          id: '2',
          title: 'Building React Components with TypeScript',
          platform: 'chatgpt',
          message_count: 24,
          created_at: '2025-08-20T14:30:00.000Z',
          user_id: 'user123'
        }}
        isAnalyzing={true}
        onAnalyze={fn()}
        onDeepDive={fn()}
        onActionPlan={fn()}
        onContinue={fn()}
      />
      
      <ConversationCard
        conversation={{
          id: '3',
          title: 'API Design Best Practices',
          platform: 'gemini',
          message_count: 15,
          created_at: '2025-08-19T11:20:00.000Z',
          user_id: 'user123'
        }}
        onAnalyze={fn()}
        onDeepDive={fn()}
        onActionPlan={fn()}
        onContinue={fn()}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of multiple conversation cards in a list layout, showing different states: analyzed, analyzing, and default.'
      }
    }
  }
}

// Empty state (for when no conversations exist)
export const EmptyState: Story = {
  render: () => (
    <div style={{
      padding: 'var(--spacing-8)',
      textAlign: 'center',
      color: 'var(--color-gray-500)'
    }}>
      <div style={{ fontSize: '4rem', marginBottom: 'var(--spacing-4)' }}>🤖</div>
      <p style={{ 
        fontSize: 'var(--font-size-lg)', 
        marginBottom: 'var(--spacing-2)',
        fontWeight: 'var(--font-weight-medium)'
      }}>
        No conversations yet!
      </p>
      <p style={{ fontSize: 'var(--font-size-sm)' }}>
        Use your Chrome extension to save conversations from Claude, ChatGPT, or Gemini.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Empty state shown when there are no conversations to display.'
      }
    }
  }
}