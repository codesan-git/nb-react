import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import type { NavItem } from '@/types'

interface MobileNavigationProps {
  items: NavItem[]
  className?: string
}

export function MobileNavigation({ items, className }: MobileNavigationProps) {
  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 100 }}
      className={cn(
        'fixed bottom-0 left-0 right-0 z-40',
        'lg:hidden', // Hide on desktop
        'border-t-4 border-black dark:border-white',
        'bg-white dark:bg-brutal-white',
        'shadow-[0_-8px_0_0_#000] dark:shadow-[0_-8px_0_0_#fff]',
        className
      )}
    >
      <div className="container-mobile py-2">
        <div className="flex justify-around items-stretch gap-2 px-2">
          {items.map((item, index) => {
            const isActive = item.active
            const content = (
              <div className="flex flex-col items-center justify-center gap-1 py-2">
                <motion.span
                  className="text-xl"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item.icon}
                </motion.span>
                <span className="text-xs font-bold uppercase">{item.label}</span>
              </div>
            )
            const buttonClasses = cn(
              "flex-1 min-h-[64px]",
              "border-4 border-black dark:border-white",
              "font-bold text-black dark:text-white",
              "transition-all duration-100",
              isActive
                ? "bg-brutal-pink dark:bg-brutal-blue shadow-none translate-x-[2px] translate-y-[2px]"
                : cn(
                  "bg-white dark:bg-brutal-white",
                  "shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff]",
                  "active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
                )
            )

            if (item.href) {
              return (
                <motion.a
                  key={index}
                  href={item.href}
                  className={buttonClasses}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {content}
                </motion.a>
              )
            }

            return (
              <motion.button
                key={index}
                onClick={item.onClick}
                className={buttonClasses}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {content}
              </motion.button>
            )
          })}
        </div>
      </div>
    </motion.nav>
  )
}