import { Outlet, createRootRoute, useRouterState } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { MobileNavigation } from '@/components/MobileNavigation'
import Header from '../components/Header'
import { useMediaQuery } from '@/hooks/use-media-query'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const router = useRouterState()

  const navItems = [
    {
      icon: '🏠',
      label: 'Home',
      href: '/',
      active: router.location.pathname === '/'
    },
    {
      icon: '📱',
      label: 'Mobile',
      href: '/mobile',
      active: router.location.pathname === '/mobile'
    },
    {
      icon: '⚙️',
      label: 'Settings',
      href: '/settings',
      active: router.location.pathname === '/settings'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className={isMobile ? 'pb-32' : ''}>
        <Outlet />
      </main>

      {isMobile && (
        <MobileNavigation items={navItems} />
      )}

      <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </div>
  )
}