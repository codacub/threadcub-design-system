// src/components/ConversationCard.tsx
import React from 'react'
import { Button } from './Button'
import { Heading } from './Heading'
import { Badge } from './Badge'
import { Search, MessageCircle, ClipboardList, Play, EyeOff } from 'lucide-react'

export interface ConversationData {
  id: string
  title: string
  platform: string // This could be 'claude', 'chatgpt', 'copilot', etc.
  message_count: number
  created_at: string
  user_id: string | null
}

export interface AnalysisResult {
  summary: string
  keyTopics: string[]
  nextSteps: string[]
  openQuestions: string[]
  sentiment: 'positive' | 'neutral' | 'needs-attention'
  progress: number
}

export interface ConversationCardProps {
  /** Conversation data */
  conversation: ConversationData
  /** Analysis result if available */
  analysis?: AnalysisResult
  /** Whether analysis is currently loading */
  isAnalyzing?: boolean
  /** Whether analysis is currently visible */
  showAnalysis?: boolean
  /** Whether user is on waitlist (affects button availability) */
  isPending?: boolean
  /** Whether to show icons in buttons */
  showButtonIcons?: boolean
  /** Analyze button handler */
  onAnalyze?: (conversation: ConversationData) => void
  /** Deep dive button handler */
  onDeepDive?: (conversation: ConversationData) => void
  /** Action plan button handler */
  onActionPlan?: (conversation: ConversationData) => void
  /** Continue conversation button handler */
  onContinue?: (conversation: ConversationData) => void
  /** Custom className */
  className?: string
  /** Custom styles */
  style?: React.CSSProperties
}

export const ConversationCard: React.FC<ConversationCardProps> = ({
  conversation,
  analysis,
  isAnalyzing = false,
  showAnalysis = false,
  isPending = false,
  showButtonIcons = false,
  onAnalyze,
  onDeepDive,
  onActionPlan,
  onContinue,
  className = '',
  style
}) => {
  const cardStyles: React.CSSProperties = {
    backgroundColor: 'var(--color-white)',
    borderBottom: `var(--border-width-thin) solid var(--color-gray-200)`,
    padding: 'var(--spacing-6)',
    fontFamily: 'var(--font-family-primary)',
    transition: 'var(--transition-base)',
    cursor: 'default',
    ...style
  }

  const headerStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 'var(--spacing-4)'
  }

  const metaStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-4)',
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-gray-500)',
    marginBottom: 'var(--spacing-3)',
    flexWrap: 'wrap' as const
  }

  const actionButtonsStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 'var(--spacing-2)',
    minWidth: '120px'
  }

  const analysisContainerStyles: React.CSSProperties = {
    marginTop: 'var(--spacing-4)',
    padding: 'var(--spacing-4)',
    background: 'linear-gradient(to right, var(--color-primary-bg), #EFF6FF)',
    borderRadius: 'var(--border-radius-lg)',
    border: `var(--border-width-thin) solid var(--color-primary-light)`
  }

  const analysisGridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 'var(--spacing-4)'
  }

  const analysisSectionStyles: React.CSSProperties = {
    marginBottom: 'var(--spacing-3)'
  }

  const analysisTextStyles: React.CSSProperties = {
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-gray-700)',
    lineHeight: 'var(--line-height-normal)',
    margin: 0
  }

  const progressBarStyles: React.CSSProperties = {
    width: '100%',
    height: '8px',
    backgroundColor: 'var(--color-gray-200)',
    borderRadius: 'var(--border-radius-full)',
    overflow: 'hidden',
    marginBottom: 'var(--spacing-2)'
  }

  const progressFillStyles: React.CSSProperties = {
    height: '100%',
    background: 'linear-gradient(to right, var(--color-primary), var(--color-primary-light))',
    borderRadius: 'var(--border-radius-full)',
    transition: 'width var(--transition-base)',
    width: `${analysis?.progress || 0}%`
  }

  const openQuestionsStyles: React.CSSProperties = {
    marginTop: 'var(--spacing-4)',
    paddingTop: 'var(--spacing-4)',
    borderTop: `var(--border-width-thin) solid var(--color-primary-light)`
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.backgroundColor = 'var(--color-gray-50)'
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.backgroundColor = 'var(--color-white)'
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString()
  }

  // Get platform/AI service variant for consistent color coding
  const getPlatformVariant = (platform: string) => {
      switch (platform.toLowerCase()) {
      case 'claude':
      case 'anthropic':
        return 'info'    // Badge variant
      case 'chatgpt':
      case 'openai':
        return 'success' // Badge variant
      case 'copilot':
      case 'github':
        return 'base'    // Badge variant
      case 'gemini':
      case 'google':
        return 'warning' // Badge variant
      default:
        return 'base'
    }
  }

  // Determine which icon and text to use for the analyze button
  const getAnalyzeButtonProps = () => {
    if (isAnalyzing) {
      return {
        children: 'Analyzing...',
        icon: undefined // Loading spinner will show instead
      }
    }
    
    if (showAnalysis) {
      return {
        children: 'Hide Analysis',
        icon: showButtonIcons ? <EyeOff /> : undefined
      }
    }
    
    return {
      children: 'Analyze',
      icon: showButtonIcons ? <Search /> : undefined
    }
  }

  const analyzeButtonProps = getAnalyzeButtonProps()

  return (
    <div
      className={className}
      style={cardStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={headerStyles}>
        <div style={{ flex: 1 }}>
          <Heading 
            level={3} 
            margin="none"
            style={{ 
              fontSize: 'var(--font-size-base)',
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: 'var(--spacing-2)',
              color: 'inherit'
            }}
          >
            {conversation.title}
          </Heading>
          
          <div style={metaStyles}>
            <Badge 
              variant={getPlatformVariant(conversation.platform)}
              size="md"
            >
              {conversation.platform}
            </Badge>
            <span>{conversation.message_count} messages</span>
            <span>{formatDate(conversation.created_at)}</span>
          </div>

          {/* Analysis Section */}
          {showAnalysis && analysis && (
            <div style={analysisContainerStyles}>
              <div style={analysisGridStyles}>
                <div>
                  <div style={analysisSectionStyles}>
                    <Heading 
                      level={4} 
                      margin="none"
                      style={{
                        fontSize: 'var(--font-size-sm)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--color-primary-dark)',
                        marginBottom: 'var(--spacing-2)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-1)'
                      }}
                    >
                      📊 Summary
                    </Heading>
                    <p style={analysisTextStyles}>{analysis.summary}</p>
                  </div>

                  {analysis.keyTopics.length > 0 && (
                    <div style={analysisSectionStyles}>
                      <Heading 
                        level={4} 
                        margin="none"
                        style={{
                          fontSize: 'var(--font-size-sm)',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: 'var(--color-primary-dark)',
                          marginBottom: 'var(--spacing-2)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--spacing-1)'
                        }}
                      >
                        Key Topics
                      </Heading>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-1)' }}>
                        {analysis.keyTopics.map((topic) => (
                          <Badge variant="base" size="sm">
                          {topic}
                        </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  {analysis.nextSteps.length > 0 && (
                    <div style={analysisSectionStyles}>
                      <Heading 
                        level={4} 
                        margin="none"
                        style={{
                          fontSize: 'var(--font-size-sm)',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: 'var(--color-primary-dark)',
                          marginBottom: 'var(--spacing-2)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--spacing-1)'
                        }}
                      >
                        Next Steps
                      </Heading>
                      <ul style={{ 
                        margin: 0, 
                        paddingLeft: 'var(--spacing-4)',
                        ...analysisTextStyles 
                      }}>
                        {analysis.nextSteps.slice(0, 3).map((step, i) => (
                          <li key={i} style={{ marginBottom: 'var(--spacing-1)' }}>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div style={analysisSectionStyles}>
                    <Heading 
                      level={4} 
                      margin="none"
                      style={{
                        fontSize: 'var(--font-size-sm)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--color-primary-dark)',
                        marginBottom: 'var(--spacing-2)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-1)'
                      }}
                    >
                      Progress
                    </Heading>
                    <div style={progressBarStyles}>
                      <div style={progressFillStyles} />
                    </div>
                    <span style={{
                      fontSize: 'var(--font-size-xs)',
                      color: 'var(--color-gray-600)'
                    }}>
                      {analysis.progress}% complete
                    </span>
                  </div>
                </div>
              </div>

              {analysis.openQuestions.length > 0 && (
                <div style={openQuestionsStyles}>
                  <Heading 
                    level={4} 
                    margin="none"
                    style={{
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--color-primary-dark)',
                      marginBottom: 'var(--spacing-2)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--spacing-1)'
                    }}
                  >
                    Open Questions
                  </Heading>
                  <ul style={{ 
                    margin: 0, 
                    paddingLeft: 'var(--spacing-4)',
                    ...analysisTextStyles 
                  }}>
                    {analysis.openQuestions.map((question, i) => (
                      <li key={i} style={{ marginBottom: 'var(--spacing-1)' }}>
                        {question}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div style={actionButtonsStyles}>
          <Button
            variant="secondary"
            size="sm"
            icon={analyzeButtonProps.icon}
            onClick={() => onAnalyze?.(conversation)}
            disabled={isAnalyzing}
            loading={isAnalyzing}
          >
            {analyzeButtonProps.children}
          </Button>

          {analysis && (
            <>
              <Button
                variant="secondary"
                size="sm"
                icon={showButtonIcons ? <MessageCircle /> : undefined}
                onClick={() => onDeepDive?.(conversation)}
                disabled={isPending}
              >
                Deep Dive
              </Button>

              <Button
                variant="secondary"
                size="sm"
                icon={showButtonIcons ? <ClipboardList /> : undefined}
                onClick={() => onActionPlan?.(conversation)}
                disabled={isPending}
              >
                Action Plan
              </Button>
            </>
          )}

          <Button
            variant="primary"
            size="sm"
            icon={showButtonIcons ? <Play /> : undefined}
            onClick={() => onContinue?.(conversation)}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ConversationCard