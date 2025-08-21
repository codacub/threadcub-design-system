// src/index.ts
export { AuthCard } from './components/AuthCard'
export type { AuthCardProps } from './components/AuthCard'

// Export other components as you build them
export { Button } from './components/Button'
export { Input } from './components/Input'
export { Logo } from './components/Logo'
export { Divider } from './components/Divider'
export { SocialButton } from './components/SocialButton'
export { Heading } from './components/Heading'
export { ResetPasswordCard } from './components/ResetPasswordCard'
export { Checkbox } from './components/Checkbox'
export { Alert } from './components/Alert'

// Dashboard Components - New additions
export { StatsCard } from './components/StatsCard'
export { ConversationCard } from './components/ConversationCard'

// Layout Components - Main Components
export { SideNav } from './components/SideNav'
export { AppLayout } from './components/AppLayout'

// Layout Components - Modular SideNav Components  
export { Badge } from './components/Badge'
export { SideNavHeader } from './components/SideNavHeader'
export { SideNavItem as SideNavItemComponent } from './components/SideNavItem'  // <- Alias the export
export { UserSection } from './components/UserSection'

// Export all types
export type { ButtonProps } from './components/Button'
export type { InputProps } from './components/Input'
export type { LogoProps } from './components/Logo'
export type { DividerProps } from './components/Divider'
export type { SocialButtonProps } from './components/SocialButton'
export type { HeadingProps } from './components/Heading'
export type { ResetPasswordCardProps } from './components/ResetPasswordCard'
export type { CheckboxProps } from './components/Checkbox'
export type { AlertProps } from './components/Alert'

// Dashboard Component Types - New additions
export type { StatsCardProps } from './components/StatsCard'
export type { ConversationCardProps, ConversationData, AnalysisResult } from './components/ConversationCard'

// Layout Component Types - Main Components
// Fixed: Export the correct interface names from SideNav.tsx
export type { SideNavItemData as SideNavItem, SideNavProps } from './components/SideNav'
export type { AppLayoutProps } from './components/AppLayout'

// Layout Component Types - Modular Components
export type { BadgeProps } from './components/Badge'
export type { SideNavHeaderProps } from './components/SideNavHeader'
// Removed this line since SideNavItemComponentProps doesn't exist yet
// export type { SideNavItemComponentProps } from './components/SideNavItem'
export type { UserSectionProps, UserInfo } from './components/UserSection'