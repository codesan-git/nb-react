import { createFileRoute } from '@tanstack/react-router'
import logo from '../logo.svg'
import { Button } from '@/components/ui/button'

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
            <img
              src={logo}
              className="h-20 w-20 sm:h-24 sm:w-24 lg:h-32 lg:w-32 pointer-events-none animate-[spin_20s_linear_infinite]"
              alt="BP React App Logo"
            />
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              Welcome to BP React App
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Mobile-first responsive web application built with TanStack Router
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="default"
              size="lg"
              className="min-h-[44px] w-full sm:w-auto"
              onClick={() => alert('Primary action clicked!')}
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="min-h-[44px] w-full sm:w-auto"
              onClick={() => alert('Secondary action clicked!')}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full px-4 py-8 sm:py-12 lg:py-16 mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Why Choose Our App?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Built with modern technologies and mobile-first approach
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-card text-card-foreground rounded-lg border border-border p-4 sm:p-6 hover:shadow-md transition-shadow">
            <div className="text-center space-y-3">
              <div className="text-3xl">⚡</div>
              <h3 className="text-lg font-semibold">Fast Performance</h3>
              <p className="text-sm text-muted-foreground">
                Optimized for speed with modern React patterns
              </p>
            </div>
          </div>

          <div className="bg-card text-card-foreground rounded-lg border border-border p-4 sm:p-6 hover:shadow-md transition-shadow">
            <div className="text-center space-y-3">
              <div className="text-3xl">📱</div>
              <h3 className="text-lg font-semibold">Mobile First</h3>
              <p className="text-sm text-muted-foreground">
                Designed mobile-first for the best user experience
              </p>
            </div>
          </div>

          <div className="bg-card text-card-foreground rounded-lg border border-border p-4 sm:p-6 hover:shadow-md transition-shadow">
            <div className="text-center space-y-3">
              <div className="text-3xl">🎨</div>
              <h3 className="text-lg font-semibold">Beautiful UI</h3>
              <p className="text-sm text-muted-foreground">
                Clean and modern interface with Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
