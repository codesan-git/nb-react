import { Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Home, Menu, X } from 'lucide-react'
// import { ModeToggle } from './mode-toggle'
import { cn } from '@/lib/utils'
import { useMediaQuery } from '@/hooks/use-media-query'

export default function Header() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [isOpen, setIsOpen] = useState(false)

  // Close drawer when resizing to mobile
  useEffect(() => {
    if (isMobile) {
      setIsOpen(false)
    }
  }, [isMobile])

  const navItems = [
    { to: '/', label: 'Home', icon: <Home className="h-5 w-5" /> },
    { to: '/mobile', label: 'Mobile', icon: <span className="text-lg">📱</span> },
    { to: '/settings', label: 'Settings', icon: <span className="text-lg">⚙️</span> }
  ]

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full",
          "border-b-4 border-black dark:border-white bg-white dark:bg-brutal-white shadow-[8px_8px_0_0_#000] dark:shadow-[8px_8px_0_0_#fff]"
        )}
      >
        <div className="container flex items-center justify-between px-4 py-3 w-full max-w-full">
          <div className="flex items-center gap-4">
            {!isMobile && (
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  "inline-flex items-center justify-center",
                  "font-bold text-black dark:text-white",
                  "border-4 border-black dark:border-white",
                  "bg-brutal-yellow hover:bg-brutal-pink",
                  "shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff]",
                  "hover:shadow-[2px_2px_0_0_#000] dark:hover:shadow-[2px_2px_0_0_#fff]",
                  "hover:translate-x-[2px] hover:translate-y-[2px]",
                  "active:translate-x-[4px] active:translate-y-[4px]",
                  "active:shadow-none",
                  "transition-all duration-100",
                  "h-12 w-12"
                )}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            )}
            <h1 className="text-2xl sm:text-3xl font-black">
              <Link to="/" className="flex items-center">
                <span className="text-black dark:text-white">
                  CODESAN
                </span>
              </Link>
            </h1>
          </div>

          {/* <div className="flex items-center justify-end">
            <ModeToggle />
          </div> */}
        </div>
      </header>

      {/* Spacer to prevent content from being hidden behind fixed header */}
      <div className="h-[72px]" />

      {/* Desktop Sidebar Drawer */}
      {!isMobile && (
        <div
          className={cn(
            "fixed inset-0 z-50 bg-black/50 dark:bg-white/20 transition-opacity duration-300",
            isOpen ? "opacity-100" : "pointer-events-none opacity-0"
          )}
          onClick={() => setIsOpen(false)}
        >
          <div
            className={cn(
              "fixed left-0 top-0 bottom-0 w-80",
              "bg-white dark:bg-brutal-white",
              "border-r-4 border-black dark:border-white",
              "shadow-[8px_0_0_0_#000] dark:shadow-[8px_0_0_0_#fff]",
              "transition-transform duration-300 ease-out",
              "p-6",
              isOpen ? "translate-x-0" : "-translate-x-full"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-full overflow-y-auto">
              <nav className="space-y-4">
                <h2 className="text-3xl font-black mb-8 pb-4 border-b-4 border-black dark:border-white text-black dark:text-white">
                  MENU
                </h2>
                <ul className="space-y-3">
                  {navItems.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className={cn(
                          "flex items-center gap-4 p-4",
                          "font-bold text-lg text-black dark:text-white",
                          "border-4 border-black dark:border-white",
                          "bg-white dark:bg-brutal-white",
                          "shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff]",
                          "hover:bg-brutal-yellow hover:shadow-[2px_2px_0_0_#000] dark:hover:shadow-[2px_2px_0_0_#fff]",
                          "hover:translate-x-[2px] hover:translate-y-[2px]",
                          "transition-all duration-100"
                        )}
                        activeProps={{
                          className: cn(
                            "bg-brutal-pink dark:bg-brutal-blue",
                            "shadow-none translate-x-[4px] translate-y-[4px]"
                          )
                        }}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="flex items-center justify-center w-8">
                          {item.icon}
                        </span>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}