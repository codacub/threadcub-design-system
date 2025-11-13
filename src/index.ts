// src/index.ts

// ===== BASIC COMPONENTS =====
export { Button } from './components/Button'
export type { ButtonProps } from './components/Button'

export { Input } from './components/Input'
export type { InputProps } from './components/Input'

export { Logo } from './components/Logo'
export type { LogoProps } from './components/Logo'

export { Divider } from './components/Divider'
export type { DividerProps } from './components/Divider'

export { SocialButton } from './components/SocialButton'
export type { SocialButtonProps } from './components/SocialButton'

export { Heading } from './components/Heading'
export type { HeadingProps } from './components/Heading'

export { Checkbox } from './components/Checkbox'
export type { CheckboxProps } from './components/Checkbox'

export { Alert } from './components/Alert'
export type { AlertProps } from './components/Alert'

export { Badge } from './components/Badge'
export type { BadgeProps } from './components/Badge'

// ===== CARD COMPONENTS =====
export { AuthCard } from './components/AuthCard'
export type { AuthCardProps } from './components/AuthCard'

export { ResetPasswordCard } from './components/ResetPasswordCard'
export type { ResetPasswordCardProps } from './components/ResetPasswordCard'

export { UpdatePasswordCard } from './components/UpdatePasswordCard'
export type { UpdatePasswordCardProps } from './components/UpdatePasswordCard'

export { StatsCard } from './components/StatsCard'
export type { StatsCardProps } from './components/StatsCard'

// ===== COMPLEX COMPONENTS =====
export { ConversationCard } from './components/ConversationCard'
export type { 
  ConversationCardProps, 
  ConversationData, 
  AnalysisResult 
} from './components/ConversationCard'

// ===== LAYOUT COMPONENTS =====
export { AppLayout } from './components/AppLayout'
export type { AppLayoutProps } from './components/AppLayout'

export { SideNav } from './components/SideNav'
export type { 
  SideNavItemData as SideNavItem, 
  SideNavProps 
} from './components/SideNav'

// ===== SIDENAV SUB-COMPONENTS =====
export { SideNavHeader } from './components/SideNavHeader'
export type { SideNavHeaderProps } from './components/SideNavHeader'

export { SideNavItem as SideNavItemComponent } from './components/SideNavItem'

export { UserSection } from './components/UserSection'
export type { UserSectionProps, UserInfo } from './components/UserSection'

export { UserMenu } from './components/UserMenu'
export type { UserMenuProps } from './components/UserMenu'