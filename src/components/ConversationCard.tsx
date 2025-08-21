// src/components/ConversationCard.tsx
import React from 'react'
import { Button } from './Button'

export interface ConversationData {
  id: string
  title: string
  platform: string
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

  const titleStyles: React.CSSProperties = {
    fontSize: 'var(--font-size-base)',
    fontWeight: 'var(--font-weight-medium)',
    color: 'var(--color-gray-900)',
    marginBottom: 'var(--spacing-2)',
    lineHeight: 'var(--line-height-normal)',
    margin: 0
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

  const platformBadgeStyles: React.CSSProperties = {
    backgroundColor: 'var(--color-gray-100)',
    color: 'var(--color-gray-700)',
    padding: 'var(--spacing-1) var(--spacing-2)',
    borderRadius: 'var(--border-radius-base)',
    fontSize: 'var(--font-size-xs)',
    fontWeight: 'var(--font-weight-medium)',
    textTransform: 'capitalize' as const
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

  const analysisTitleStyles: React.CSSProperties = {
    fontSize: 'var(--font-size-sm)',
    fontWeight: 'var(--font-weight-semibold)',
    color: 'var(--color-primary-dark)',
    marginBottom: 'var(--spacing-2)',
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-1)'
  }

  const analysisTextStyles: React.CSSProperties = {
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-gray-700)',
    lineHeight: 'var(--line-height-normal)',
    margin: 0
  }

  const topicTagStyles: React.CSSProperties = {
    display: 'inline-block',
    backgroundColor: 'var(--color-white)',
    color: 'var(--color-primary)',
    padding: 'var(--spacing-1) var(--spacing-2)',
    borderRadius: 'var(--border-radius-full)',
    border: `var(--border-width-thin) solid var(--color-primary-light)`,
    fontSize: 'var(--font-size-xs)',
    margin: 'var(--spacing-1) var(--spacing-1) 0 0'
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

  return (
    <div
      className={className}
      style={cardStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={headerStyles}>
        <div style={{ flex: 1 }}>
          <h3 style={titleStyles}>
            {conversation.title}
          </h3>
          
          <div style={metaStyles}>
            <span style={platformBadgeStyles}>
              {conversation.platform}
            </span>
            <span>{conversation.message_count} messages</span>
            <span>{formatDate(conversation.created_at)}</span>
          </div>

          {/* Analysis Section */}
          {showAnalysis && analysis && (
            <div style={analysisContainerStyles}>
              <div style={analysisGridStyles}>
                <div>
                  <div style={analysisSectionStyles}>
                    <h4 style={analysisTitleStyles}>
                      📊 Summary
                    </h4>
                    <p style={analysisTextStyles}>{analysis.summary}</p>
                  </div>

                  {analysis.keyTopics.length > 0 && (
                    <div style={analysisSectionStyles}>
                      <h4 style={analysisTitleStyles}>
                        🏷️ Key Topics
                      </h4>
                      <div>
                        {analysis.keyTopics.map((topic, i) => (
                          <span key={i} style={topicTagStyles}>
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  {analysis.nextSteps.length > 0 && (
                    <div style={analysisSectionStyles}>
                      <h4 style={analysisTitleStyles}>
                        🎯 Next Steps
                      </h4>
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
                    <h4 style={analysisTitleStyles}>
                      📈 Progress
                    </h4>
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
                  <h4 style={analysisTitleStyles}>
                    ❓ Open Questions
                  </h4>
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
            onClick={() => onAnalyze?.(conversation)}
            disabled={isAnalyzing}
            loading={isAnalyzing}
          >
            {isAnalyzing ? 'Analyzing...' : showAnalysis ? '🔽 Hide Analysis' : '🔍 Analyze'}
          </Button>

          {analysis && (
            <>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => onDeepDive?.(conversation)}
                disabled={isPending}
              >
                💬 Deep Dive
              </Button>

              <Button
                variant="secondary"
                size="sm"
                onClick={() => onActionPlan?.(conversation)}
                disabled={isPending}
              >
                📋 Action Plan
              </Button>
            </>
          )}

          <Button
            variant="primary"
            size="sm"
            onClick={() => onContinue?.(conversation)}
          >
            🔄 Continue
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ConversationCard