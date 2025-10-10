// src/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { MobileNavigation } from '@/components/MobileNavigation'
import { HeroSection } from '@/components/home/HeroSection'
import { SkillsSection } from '@/components/home/SkillsSection'
import { ProjectsSection } from '@/components/home/ProjectSection'
import { Footer } from '@/components/home/Footer'
import { IslamicBackground } from '@/components/IslamicBackground'
import type { NavItem } from '@/types'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null)
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const handleSkillClick = (index: number) => {
    setSelectedSkill(index)
    setIsSheetOpen(true)
  }

  const navItems: NavItem[] = [
    { icon: "🏠", label: "Home", href: "#", active: true },
    { icon: "💼", label: "Skills", href: "#skills" },
    { icon: "🚀", label: "Projects", href: "#projects" },
    { icon: "📧", label: "Contact", onClick: () => alert('Email: your.email@example.com') }
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-hidden pb-20">
      <IslamicBackground />

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />

        <SkillsSection
          selectedSkill={selectedSkill}
          setSelectedSkill={setSelectedSkill}
          isSheetOpen={isSheetOpen}
          setIsSheetOpen={setIsSheetOpen}
          onSkillClick={handleSkillClick}
        />

        <ProjectsSection />

        <Footer />
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation items={navItems} />
    </div>
  )
}