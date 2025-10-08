import { Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Home, Menu, X } from 'lucide-react'
import { ModeToggle } from './mode-toggle'
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
          "border-b-4 border-black bg-white shadow-[8px_8px_0_0_#000] p-2"
        )}
      >
        <div className="container flex items-center justify-between px-4 w-full">
          <div className="flex items-center gap-4">
            {!isMobile && (
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-none text-sm font-bold ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-black bg-white hover:bg-yellow-100 active:translate-x-1 active:translate-y-1 active:shadow-none shadow-[4px_4px_0_0_#000] h-10 w-10"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            )}
            <h1 className="text-2xl font-black">
              <Link to="/" className="flex items-center space-x-2">
                <span className="text-black">
                  MYAPP
                </span>
              </Link>
            </h1>
          </div>

          {/* Mobile Navigation */}
          {isMobile && (
            <nav className="flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-sm font-bold text-black hover:bg-yellow-100 px-3 py-1 border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                  activeProps={{ className: "bg-yellow-200 shadow-none translate-x-1 translate-y-1" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}

          <div className="flex items-center justify-end space-x-2">
            <ModeToggle />
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from being hidden behind fixed header */}
      <div className="h-20" />

      {/* Desktop Sidebar Drawer */}
      {!isMobile && (
        <div
          className={cn(
            "fixed inset-0 z-40 bg-black/30 transition-opacity",
            isOpen ? "opacity-100" : "pointer-events-none opacity-0"
          )}
          onClick={() => setIsOpen(false)}
        >
          <div
            className={cn(
              "fixed left-0 top-0 bottom-0 w-80 bg-white border-r-4 border-black shadow-[8px_0_0_0_#000] transition-transform duration-300 ease-out p-4",
              isOpen ? "translate-x-0" : "-translate-x-full"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-full overflow-y-auto">
              <nav className="space-y-2">
                <h2 className="text-2xl font-black mb-6 p-2 border-b-4 border-black">MENU</h2>
                <ul className="space-y-3">
                  {navItems.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="flex items-center gap-3 p-3 font-bold text-black border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all bg-white"
                        activeProps={{ className: "bg-yellow-200 shadow-none translate-x-1 translate-y-1" }}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="flex items-center justify-center w-6">
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
