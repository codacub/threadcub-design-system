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
          'Enhanced ConversationCard component with full app features: displays conversation data with analysis results, project management, view details, and supports both card and list view modes. Uses design system components with Lucide icons.'
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
    showProjectButton: {
      control: 'boolean',
      description: 'Whether to show "Add to Project" button',
      table: { defaultValue: { summary: 'false' } }
    },
    showViewDetails: {
      control: 'boolean',
      description: 'Whether to show "View Details" button',
      table: { defaultValue: { summary: 'false' } }
    },
    viewMode: {
      control: 'radio',
      options: ['card', 'list'],
      description: 'Display mode: card or list view',
      table: { defaultValue: { summary: 'card' } }
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
    },
    onAddToProject: {
      action: 'add-to-project',
      description: 'Callback when add to project button is clicked'
    },
    onViewDetails: {
      action: 'view-details',
      description: 'Callback when view details button is clicked'
    }
  },
  args: {
    onAnalyze: fn(),
    onDeepDive: fn(),
    onActionPlan: fn(),
    onContinue: fn(),
    onAddToProject: fn(),
    onViewDetails: fn()
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
  user_id: 'user-123',
  summary: 'Discussed Q2 product priorities and resource allocation for authentication improvements.',
  project_id: null
}

const conversationInProject: ConversationData = {
  ...sampleConversation,
  id: '2',
  title: 'Marketing Campaign Review',
  project_id: 'project-123'
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

// ============================================================================
// BASIC VARIANTS
// ============================================================================

export const Default: Story = {
  args: {
    conversation: sampleConversation,
    viewMode: 'card'
  }
}

export const ListView: Story = {
  args: {
    conversation: sampleConversation,
    viewMode: 'list'
  },
  parameters: {
    docs: {
      description: {
        story: 'List view optimized for dashboard tables with horizontal button layout.'
      }
    }
  }
}

export const WithAllFeatures: Story = {
  args: {
    conversation: sampleConversation,
    analysis: sampleAnalysis,
    showAnalysis: true,
    showButtonIcons: true,
    showProjectButton: true,
    showViewDetails: true,
    viewMode: 'card'
  },
  parameters: {
    docs: {
      description: {
        story: 'Card with all features enabled: analysis, icons, project button, and view details.'
      }
    }
  }
}

// ============================================================================
// PROJECT MANAGEMENT
// ============================================================================

export const WithProjectButton: Story = {
  args: {
    conversation: sampleConversation,
    showProjectButton: true,
    showButtonIcons: true,
    viewMode: 'card'
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows "Add to Project" button when conversation is not in a project.'
      }
    }
  }
}

export const AlreadyInProject: Story = {
  args: {
    conversation: conversationInProject,
    showProjectButton: true,
    showButtonIcons: true,
    viewMode: 'card'
  },
  parameters: {
    docs: {
      description: {
        story: 'When conversation is in a project, shows green "In Project" badge and hides the add button.'
      }
    }
  }
}

// ============================================================================
// VIEW DETAILS
// ============================================================================

export const WithViewDetails: Story = {
  args: {
    conversation: sampleConversation,
    showViewDetails: true,
    showButtonIcons: true,
    viewMode: 'card'
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows "View Details" button for navigation to conversation detail page.'
      }
    }
  }
}

// ============================================================================
// ANALYSIS STATES
// ============================================================================

export const WithAnalysis: Story = {
  args: {
    conversation: sampleConversation,
    analysis: sampleAnalysis,
    showAnalysis: true,
    showButtonIcons: true,
    viewMode: 'card'
  }
}

export const Analyzing: Story = {
  args: {
    conversation: sampleConversation,
    isAnalyzing: true,
    viewMode: 'card'
  }
}

export const AnalysisHidden: Story = {
  args: {
    conversation: sampleConversation,
    analysis: sampleAnalysis,
    showAnalysis: false,
    viewMode: 'card'
  },
  parameters: {
    docs: {
      description: {
        story: 'Analysis data exists but is hidden. Shows preview text instead.'
      }
    }
  }
}

// ============================================================================
// WAITLIST MODE
// ============================================================================

export const UserOnWaitlist: Story = {
  args: {
    conversation: sampleConversation,
    analysis: sampleAnalysis,
    showAnalysis: true,
    isPending: true,
    showButtonIcons: true,
    viewMode: 'card'
  },
  parameters: {
    docs: {
      description: {
        story: 'When user is on waitlist, Deep Dive and Action Plan buttons are disabled.'
      }
    }
  }
}

// ============================================================================
// VIEW MODES COMPARISON
// ============================================================================

export const CardVsList: Story = {
  render: () => (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-6)',
      fontFamily: 'var(--font-family-primary)'
    }}>
      <div>
        <h3 style={{ 
          margin: '0 0 var(--spacing-3) 0',
          fontSize: 'var(--font-size-lg)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-gray-900)'
        }}>
          Card View
        </h3>
        <ConversationCard
          conversation={sampleConversation}
          analysis={sampleAnalysis}
          showAnalysis={true}
          showProjectButton={true}
          showViewDetails={true}
          showButtonIcons={true}
          viewMode="card"
        />
      </div>

      <div>
        <h3 style={{ 
          margin: '0 0 var(--spacing-3) 0',
          fontSize: 'var(--font-size-lg)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-gray-900)'
        }}>
          List View
        </h3>
        <div style={{
          border: 'var(--border-width-thin) solid var(--color-gray-200)',
          borderRadius: 'var(--border-radius-lg)',
          overflow: 'hidden'
        }}>
          <ConversationCard
            conversation={sampleConversation}
            showProjectButton={true}
            showViewDetails={true}
            showButtonIcons={true}
            viewMode="list"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Side-by-side comparison of card and list view modes.'
      }
    }
  }
}

// ============================================================================
// AI SERVICES
// ============================================================================

export const ClaudeConversation: Story = {
  args: {
    conversation: {
      id: '1',
      title: 'AI Strategy Discussion',
      platform: 'claude',
      message_count: 28,
      created_at: '2024-01-15T10:30:00Z',
      user_id: 'user-123'
    },
    viewMode: 'card'
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
    },
    viewMode: 'card'
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
    },
    viewMode: 'card'
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
    },
    viewMode: 'card'
  }
}

// ============================================================================
// LAYOUT EXAMPLES
// ============================================================================

export const DashboardListLayout: Story = {
  render: () => (
    <div style={{
      border: 'var(--border-width-thin) solid var(--color-gray-200)',
      borderRadius: 'var(--border-radius-lg)',
      overflow: 'hidden',
      maxWidth: '1000px'
    }}>
      <ConversationCard
        conversation={sampleConversation}
        analysis={sampleAnalysis}
        showAnalysis={true}
        showProjectButton={true}
        showViewDetails={true}
        viewMode="list"
      />
      <ConversationCard
        conversation={{
          id: '2',
          title: 'Marketing Campaign Review',
          platform: 'chatgpt',
          message_count: 28,
          created_at: '2024-01-18T09:15:00Z',
          user_id: 'user-789',
          project_id: 'proj-1'
        }}
        showProjectButton={true}
        showViewDetails={true}
        viewMode="list"
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
        showProjectButton={true}
        showViewDetails={true}
        viewMode="list"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dashboard-style list layout showing multiple conversations with different states.'
      }
    }
  }
}

export const ThreadsCardGrid: Story = {
  render: () => (
    <div style={{ 
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
      gap: 'var(--spacing-4)',
      maxWidth: '1200px'
    }}>
      <ConversationCard
        conversation={sampleConversation}
        showProjectButton={true}
        showViewDetails={true}
        showButtonIcons={true}
        viewMode="card"
      />
      <ConversationCard
        conversation={{
          id: '2',
          title: 'Marketing Campaign Strategy',
          platform: 'chatgpt',
          message_count: 28,
          created_at: '2024-01-18T09:15:00Z',
          user_id: 'user-789',
          summary: 'Planned Q1 marketing initiatives focusing on social media and content marketing.'
        }}
        showProjectButton={true}
        showViewDetails={true}
        showButtonIcons={true}
        viewMode="card"
      />
      <ConversationCard
        conversation={{
          id: '3',
          title: 'Customer Feedback Review',
          platform: 'gemini',
          message_count: 73,
          created_at: '2024-01-22T16:20:00Z',
          user_id: 'user-456',
          summary: 'Analyzed customer feedback from Q4 to identify improvement opportunities.',
          project_id: 'proj-1'
        }}
        showProjectButton={true}
        showViewDetails={true}
        showButtonIcons={true}
        viewMode="card"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Threads page-style card grid layout for displaying multiple conversations.'
      }
    }
  }
}

// ============================================================================
// EDGE CASES
// ============================================================================

export const LongTitle: Story = {
  args: {
    conversation: {
      id: '1',
      title: 'This is a very long conversation title that might wrap to multiple lines and we need to make sure it still looks good in both card and list views',
      platform: 'claude',
      message_count: 42,
      created_at: '2024-01-15T10:30:00Z',
      user_id: 'user-123'
    },
    showProjectButton: true,
    showViewDetails: true,
    viewMode: 'card'
  }
}

export const NoUserAssigned: Story = {
  args: {
    conversation: {
      id: '1',
      title: 'Unclaimed Conversation',
      platform: 'claude',
      message_count: 15,
      created_at: '2024-01-15T10:30:00Z',
      user_id: null
    },
    viewMode: 'card'
  },
  parameters: {
    docs: {
      description: {
        story: 'Conversation that hasn\'t been claimed by a user yet (user_id is null).'
      }
    }
  }
}

export const MinimalButtons: Story = {
  args: {
    conversation: sampleConversation,
    onContinue: fn(),
    viewMode: 'card'
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal configuration with only the Continue button visible.'
      }
    }
  }
}