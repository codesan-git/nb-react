import { createFileRoute } from '@tanstack/react-router'
import logo from '../logo.svg'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full px-4 py-8 sm:py-12 lg:py-16 mx-auto max-w-4xl">
        <div className="text-center space-y-6 sm:space-y-8">
          {/* Logo */}
          <div className="flex justify-center">
            <div className={cn(
              "p-4 border-4 border-black dark:border-white",
              "bg-brutal-yellow dark:bg-brutal-blue",
              "shadow-[8px_8px_0_0_#000] dark:shadow-[8px_8px_0_0_#fff]",
              "rotate-[-2deg] hover:rotate-[2deg] transition-transform duration-300"
            )}>
              <img
                src={logo}
                className="h-20 w-20 sm:h-24 sm:w-24 lg:h-32 lg:w-32 pointer-events-none animate-[spin_20s_linear_infinite]"
                alt="BP React App Logo"
              />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className={cn(
              "text-3xl sm:text-4xl lg:text-5xl font-black",
              "text-black dark:text-white",
              "uppercase tracking-tight"
            )}>
              Welcome to BP React App
            </h1>
            <p className={cn(
              "text-base sm:text-lg lg:text-xl font-bold",
              "text-black dark:text-white",
              "max-w-2xl mx-auto"
            )}>
              Mobile-first responsive web application built with TanStack Router
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className={cn(
                "min-h-[56px] w-full sm:w-auto px-8",
                "text-lg font-black uppercase",
                "border-4 border-black dark:border-white",
                "bg-brutal-pink dark:bg-brutal-green",
                "text-black dark:text-black",
                "shadow-[6px_6px_0_0_#000] dark:shadow-[6px_6px_0_0_#fff]",
                "hover:shadow-[3px_3px_0_0_#000] dark:hover:shadow-[3px_3px_0_0_#fff]",
                "hover:translate-x-[3px] hover:translate-y-[3px]",
                "active:translate-x-[6px] active:translate-y-[6px]",
                "active:shadow-none",
                "transition-all duration-100"
              )}
              onClick={() => alert('Primary action clicked!')}
            >
              Get Started
            </button>
            <button
              className={cn(
                "min-h-[56px] w-full sm:w-auto px-8",
                "text-lg font-black uppercase",
                "border-4 border-black dark:border-white",
                "bg-white dark:bg-brutal-white",
                "text-black dark:text-white",
                "shadow-[6px_6px_0_0_#000] dark:shadow-[6px_6px_0_0_#fff]",
                "hover:bg-brutal-yellow dark:hover:bg-brutal-purple",
                "hover:shadow-[3px_3px_0_0_#000] dark:hover:shadow-[3px_3px_0_0_#fff]",
                "hover:translate-x-[3px] hover:translate-y-[3px]",
                "active:translate-x-[6px] active:translate-y-[6px]",
                "active:shadow-none",
                "transition-all duration-100"
              )}
              onClick={() => alert('Secondary action clicked!')}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full px-4 py-8 sm:py-12 lg:py-16 mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className={cn(
            "text-2xl sm:text-3xl lg:text-4xl font-black uppercase",
            "text-black dark:text-white",
            "mb-4"
          )}>
            Why Choose Our App?
          </h2>
          <p className={cn(
            "text-base sm:text-lg font-bold",
            "text-black dark:text-white",
            "max-w-2xl mx-auto"
          )}>
            Built with modern technologies and mobile-first approach
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Feature Card 1 */}
          <div className={cn(
            "bg-brutal-yellow dark:bg-brutal-pink",
            "border-4 border-black dark:border-white",
            "shadow-[6px_6px_0_0_#000] dark:shadow-[6px_6px_0_0_#fff]",
            "p-6 sm:p-8",
            "hover:shadow-[3px_3px_0_0_#000] dark:hover:shadow-[3px_3px_0_0_#fff]",
            "hover:translate-x-[3px] hover:translate-y-[3px]",
            "transition-all duration-200",
            "rotate-[-1deg] hover:rotate-[1deg]"
          )}>
            <div className="text-center space-y-4">
              <div className="text-5xl">⚡</div>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-black dark:text-white">
                Fast Performance
              </h3>
              <p className="text-sm sm:text-base font-bold text-black dark:text-white">
                Optimized for speed with modern React patterns
              </p>
            </div>
          </div>

          {/* Feature Card 2 */}
          <div className={cn(
            "bg-brutal-blue dark:bg-brutal-green",
            "border-4 border-black dark:border-white",
            "shadow-[6px_6px_0_0_#000] dark:shadow-[6px_6px_0_0_#fff]",
            "p-6 sm:p-8",
            "hover:shadow-[3px_3px_0_0_#000] dark:hover:shadow-[3px_3px_0_0_#fff]",
            "hover:translate-x-[3px] hover:translate-y-[3px]",
            "transition-all duration-200",
            "rotate-[1deg] hover:rotate-[-1deg]"
          )}>
            <div className="text-center space-y-4">
              <div className="text-5xl">📱</div>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-black dark:text-white">
                Mobile First
              </h3>
              <p className="text-sm sm:text-base font-bold text-black dark:text-white">
                Designed mobile-first for the best user experience
              </p>
            </div>
          </div>

          {/* Feature Card 3 */}
          <div className={cn(
            "bg-brutal-green dark:bg-brutal-orange",
            "border-4 border-black dark:border-white",
            "shadow-[6px_6px_0_0_#000] dark:shadow-[6px_6px_0_0_#fff]",
            "p-6 sm:p-8",
            "hover:shadow-[3px_3px_0_0_#000] dark:hover:shadow-[3px_3px_0_0_#fff]",
            "hover:translate-x-[3px] hover:translate-y-[3px]",
            "transition-all duration-200",
            "rotate-[-1deg] hover:rotate-[1deg]",
            "sm:col-span-2 lg:col-span-1"
          )}>
            <div className="text-center space-y-4">
              <div className="text-5xl">🎨</div>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-black dark:text-white">
                Beautiful UI
              </h3>
              <p className="text-sm sm:text-base font-bold text-black dark:text-white">
                Clean and modern interface with Neo Brutalism style
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}