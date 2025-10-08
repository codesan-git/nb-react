import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { MobileNavigation } from '@/components/MobileNavigation'
import Header from '../components/Header'
import { useMediaQuery } from '@/hooks/use-media-query'

const navItems = [
  { icon: '🏠', label: 'Home', href: '/' },
  { icon: '📱', label: 'Mobile', href: '/mobile' },
  { icon: '⚙️', label: 'Settings', href: '/settings' }
]

export const Route = createRootRoute({
  component: () => {
    const isMobile = useMediaQuery('(max-width: 768px)')

    return (
      <>
        <Header />
        <main className={isMobile ? 'pb-16 pt-16' : 'pt-16'}>
          <Outlet />
        </main>
        {isMobile && <MobileNavigation items={navItems} className="fixed bottom-0 left-0 right-0 border-t bg-background" />}
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
      </>
    )
  },
})
