// src/components/ConversationCard.tsx
import React from 'react'
import { Button } from './Button'
import { Heading } from './Heading'
import { Badge } from './Badge'
import { Search, MessageCircle, ClipboardList, Play, EyeOff, FolderPlus, Eye } from 'lucide-react'

export interface ConversationData {
  id: string
  title: string
  platform: string
  message_count: number
  created_at: string
  user_id: string | null
  source?: string
  summary?: string
  content?: any
  project_id?: string | null
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
  /** Whether to show the "Add to Project" button */
  showProjectButton?: boolean
  /** Whether to show the "View Details" button */
  showViewDetails?: boolean
  /** Display mode: 'card' for card view, 'list' for list view */
  viewMode?: 'card' | 'list'
  /** Analyze button handler */
  onAnalyze?: (conversation: ConversationData) => void
  /** Deep dive button handler */
  onDeepDive?: (conversation: ConversationData) => void
  /** Action plan button handler */
  onActionPlan?: (conversation: ConversationData) => void
  /** Continue conversation button handler */
  onContinue?: (conversation: ConversationData) => void
  /** Add to project button handler */
  onAddToProject?: (conversation: ConversationData) => void
  /** View details button handler */
  onViewDetails?: (conversationId: string) => void
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
  showProjectButton = false,
  showViewDetails = false,
  viewMode = 'card',
  onAnalyze,
  onDeepDive,
  onActionPlan,
  onContinue,
  onAddToProject,
  onViewDetails,
  className = '',
  style
}) => {
  // List view styles
  const listCardStyles: React.CSSProperties = {
    backgroundColor: 'var(--color-white)',
    padding: 'var(--spacing-6)',
    fontFamily: 'var(--font-family-primary)',
    transition: 'var(--transition-base)',
    cursor: 'default',
    ...style
  }

  // Card view styles
  const cardCardStyles: React.CSSProperties = {
    backgroundColor: 'var(--color-white)',
    borderRadius: 'var(--border-radius-lg)',
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    padding: 'var(--spacing-6)',
    fontFamily: 'var(--font-family-primary)',
    transition: 'var(--transition-base)',
    cursor: 'default',
    ...style
  }

  const cardStyles = viewMode === 'list' ? listCardStyles : cardCardStyles

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
    flexDirection: viewMode === 'list' ? ('row' as const) : ('column' as const),
    gap: 'var(--spacing-2)',
    minWidth: viewMode === 'list' ? 'auto' : '120px',
    flexWrap: 'wrap' as const
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

  const previewTextStyles: React.CSSProperties = {
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-gray-600)',
    marginTop: 'var(--spacing-2)',
    lineHeight: 'var(--line-height-normal)',
    display: '-webkit-box',
    WebkitLineClamp: viewMode === 'list' ? 2 : 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (viewMode === 'list') {
      e.currentTarget.style.backgroundColor = 'var(--color-gray-50)'
    } else {
      e.currentTarget.style.boxShadow = '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (viewMode === 'list') {
      e.currentTarget.style.backgroundColor = 'var(--color-white)'
    } else {
      e.currentTarget.style.boxShadow = '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const getPreviewText = (): string => {
    if (conversation.summary) return conversation.summary
    
    try {
      if (conversation.content && typeof conversation.content === 'object') {
        const firstMessage = conversation.content.messages?.[0]?.content
        if (firstMessage) {
          return firstMessage.substring(0, 150) + (firstMessage.length > 150 ? '...' : '')
        }
      }
    } catch (e) {
      console.error('Error extracting preview:', e)
    }
    
    return 'Click to view conversation details'
  }

  // Get platform/AI service variant for consistent color coding
  const getPlatformVariant = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'claude':
      case 'anthropic':
        return 'info'
      case 'chatgpt':
      case 'openai':
        return 'success'
      case 'copilot':
      case 'github':
        return 'base'
      case 'gemini':
      case 'google':
        return 'warning'
      default:
        return 'base'
    }
  }

  // Determine which icon and text to use for the analyze button
  const getAnalyzeButtonProps = () => {
    if (isAnalyzing) {
      return {
        children: 'Analyzing...',
        icon: undefined
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
              fontSize: 'var(--font-size-lg)',
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: 'var(--spacing-2)',
              color: 'inherit'
            }}
          >
            {conversation.title || 'Untitled Conversation'}
          </Heading>
          
          <div style={metaStyles}>
            <Badge 
              variant={getPlatformVariant(conversation.platform || conversation.source || '')}
              size="md"
            >
              {conversation.platform || conversation.source || 'Unknown'}
            </Badge>
            <span>{conversation.message_count} messages</span>
            <span>{formatDate(conversation.created_at)}</span>
            {conversation.project_id && (
              <Badge variant="success" size="sm">
                In Project
              </Badge>
            )}
          </div>

          {/* Preview text - only show when not displaying analysis */}
          {!showAnalysis && (
            <p style={previewTextStyles}>
              {getPreviewText()}
            </p>
          )}

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
                        {analysis.keyTopics.map((topic, index) => (
                          <Badge key={index} variant="base" size="sm">
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
          {/* Add to Project button - only show if not already in a project */}
          {showProjectButton && !conversation.project_id && onAddToProject && (
            <Button
              variant="secondary"
              size="sm"
              icon={showButtonIcons ? <FolderPlus /> : undefined}
              onClick={() => onAddToProject(conversation)}
              title="Add to project"
            >
              {viewMode === 'list' ? '' : 'Project'}
            </Button>
          )}

          {/* Analyze button */}
          {onAnalyze && (
            <Button
              variant="secondary"
              size="sm"
              icon={analyzeButtonProps.icon}
              onClick={() => onAnalyze(conversation)}
              disabled={isAnalyzing || isPending}
              loading={isAnalyzing}
            >
              {analyzeButtonProps.children}
            </Button>
          )}

          {/* Deep Dive and Action Plan - only show when analysis exists */}
          {analysis && (
            <>
              {onDeepDive && (
                <Button
                  variant="secondary"
                  size="sm"
                  icon={showButtonIcons ? <MessageCircle /> : undefined}
                  onClick={() => onDeepDive(conversation)}
                  disabled={isPending}
                >
                  Deep Dive
                </Button>
              )}

              {onActionPlan && (
                <Button
                  variant="secondary"
                  size="sm"
                  icon={showButtonIcons ? <ClipboardList /> : undefined}
                  onClick={() => onActionPlan(conversation)}
                  disabled={isPending}
                >
                  Action Plan
                </Button>
              )}
            </>
          )}

          {/* Continue button */}
          {onContinue && (
            <Button
              variant="primary"
              size="sm"
              icon={showButtonIcons ? <Play /> : undefined}
              onClick={() => onContinue(conversation)}
            >
              Continue
            </Button>
          )}

          {/* View Details button */}
          {showViewDetails && onViewDetails && (
            <Button
              variant="secondary"
              size="sm"
              icon={showButtonIcons ? <Eye /> : undefined}
              onClick={() => onViewDetails(conversation.id)}
            >
              {viewMode === 'list' ? 'View Details' : 'Details'}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ConversationCard