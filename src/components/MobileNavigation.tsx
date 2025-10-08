import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavItem {
  icon: string
  label: string
  href?: string
  onClick?: () => void
  active?: boolean
}

interface MobileNavigationProps {
  items: NavItem[]
  className?: string
}

export function MobileNavigation({ items, className }: MobileNavigationProps) {
  return (
    <nav className={cn('nav-mobile', className)}>
      <div className="container-mobile py-4">
        <div className="flex justify-around">
          {items.map((item, index) => (
            <Button
              key={index}
              variant={item.active ? 'default' : 'ghost'}
              size="sm"
              className="flex flex-col items-center space-y-1 touch-target"
              onClick={item.onClick}
              asChild={!!item.href}
            >
              {item.href ? (
                <a href={item.href} className="flex flex-col items-center space-y-1">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-xs">{item.label}</span>
                </a>
              ) : (
                <>
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-xs">{item.label}</span>
                </>
              )}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  )
}
