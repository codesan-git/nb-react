// Responsive design utilities and breakpoints
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const

// Mobile-first responsive classes
export const responsive = {
  // Container classes
  container: 'w-full px-4 mx-auto',
  containerSm: 'w-full px-4 mx-auto max-w-sm',
  containerMd: 'w-full px-4 mx-auto max-w-md',
  containerLg: 'w-full px-4 mx-auto max-w-lg',
  containerXl: 'w-full px-4 mx-auto max-w-xl',
  container2xl: 'w-full px-4 mx-auto max-w-2xl',

  // Grid classes
  grid: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  grid2: 'grid grid-cols-1 sm:grid-cols-2',
  grid3: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  grid4: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',

  // Flex classes
  flex: 'flex flex-col sm:flex-row',
  flexCol: 'flex flex-col',
  flexRow: 'flex flex-row',

  // Spacing classes
  space: 'space-y-4 sm:space-y-6 lg:space-y-8',
  gap: 'gap-4 sm:gap-6 lg:gap-8',

  // Text classes
  textXs: 'text-xs sm:text-sm',
  textSm: 'text-sm sm:text-base',
  textBase: 'text-base sm:text-lg',
  textLg: 'text-lg sm:text-xl',
  textXl: 'text-xl sm:text-2xl',
  text2xl: 'text-2xl sm:text-3xl',
  text3xl: 'text-3xl sm:text-4xl',

  // Padding classes
  padding: 'p-4 sm:p-6 lg:p-8',
  paddingSm: 'p-2 sm:p-4',
  paddingLg: 'p-6 sm:p-8 lg:p-12',

  // Margin classes
  margin: 'm-4 sm:m-6 lg:m-8',
  marginSm: 'm-2 sm:m-4',
  marginLg: 'm-6 sm:m-8 lg:m-12'
} as const

// Touch-friendly utilities
export const touch = {
  target: 'min-h-[44px] min-w-[44px]',
  button: 'min-h-[44px] min-w-[44px] flex items-center justify-center',
  link: 'min-h-[44px] min-w-[44px] flex items-center justify-center'
} as const

// Safe area utilities for mobile devices
export const safeArea = {
  top: 'pt-[env(safe-area-inset-top)]',
  bottom: 'pb-[env(safe-area-inset-bottom)]',
  left: 'pl-[env(safe-area-inset-left)]',
  right: 'pr-[env(safe-area-inset-right)]',
  all: 'pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)]'
} as const

// Mobile navigation utilities
export const mobileNav = {
  container: 'fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border',
  item: 'flex flex-col items-center space-y-1 touch-target',
  icon: 'text-lg',
  label: 'text-xs'
} as const

// Responsive visibility utilities
export const visibility = {
  mobileOnly: 'block sm:hidden',
  desktopOnly: 'hidden sm:block',
  tabletOnly: 'hidden sm:block lg:hidden',
  mobileTablet: 'block lg:hidden',
  tabletDesktop: 'hidden sm:block'
} as const

// Common responsive patterns
export const patterns = {
  hero: 'min-h-screen flex flex-col items-center justify-center text-center px-4',
  section: 'py-8 sm:py-12 lg:py-16',
  card: 'bg-card text-card-foreground rounded-lg border border-border p-4 sm:p-6',
  button: 'touch-target w-full sm:w-auto',
  input: 'w-full px-4 py-3 rounded-lg border border-input bg-background',
  form: 'space-y-4 sm:space-y-6'
} as const
