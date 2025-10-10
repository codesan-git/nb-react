// src/components/SkillsSection.tsx
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet'
import { skills } from '@/data/skills'
import { useEffect } from 'react'

interface SkillsSectionProps {
  selectedSkill: number | null
  setSelectedSkill: (index: number | null) => void
  isSheetOpen: boolean
  setIsSheetOpen: (open: boolean) => void
  onSkillClick: (index: number) => void
}

export function SkillsSection({
  selectedSkill,
  setSelectedSkill,
  isSheetOpen,
  setIsSheetOpen,
  onSkillClick
}: SkillsSectionProps) {
  const selectedSkillData = selectedSkill !== null ? skills[selectedSkill] : null

  const handleSkillClick = (index: number) => {
    // Desktop: hanya update state untuk panel kanan
    // Mobile: buka sheet
    if (window.innerWidth >= 1024) {
      setSelectedSkill(index)
    } else {
      onSkillClick(index)
    }
  }

  // Close sheet when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isSheetOpen) {
        setIsSheetOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isSheetOpen, setIsSheetOpen])

  return (
    <>
      <section id="skills" className="w-full px-4 py-12 sm:py-16 lg:py-20 mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={cn(
            "text-3xl sm:text-4xl lg:text-5xl font-black uppercase",
            "text-black dark:text-white",
            "mb-4"
          )}>
            Skills Saya
          </h2>
          <p className={cn(
            "text-base sm:text-lg font-bold",
            "text-black dark:text-white",
            "max-w-2xl mx-auto"
          )}>
            Click kartu untuk melihat detail! 👇
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Side - Wallet/Card Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className={cn(
              "border-4 border-black dark:border-white",
              "bg-gradient-to-b from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800",
              "shadow-[8px_8px_0_0_#000] dark:shadow-[8px_8px_0_0_#fff]",
              "min-h-[400px] lg:min-h-[500px]"
            )}>
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-black uppercase text-white text-center">
                  💼 Tech Stack
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleSkillClick(index)}
                      className={cn(
                        "cursor-pointer transition-all duration-300",
                        selectedSkill === index && "lg:opacity-50 lg:scale-95"
                      )}
                      initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                        rotate: index % 2 === 0 ? -2 : 2
                      }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4, type: "spring" }}
                      whileHover={{
                        scale: 1.05,
                        rotate: 0,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div
                        className={cn(
                          skill.color,
                          "border-4 border-black dark:border-white",
                          "shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff]",
                          "p-4 sm:p-6",
                          "hover:shadow-[2px_2px_0_0_#000] dark:hover:shadow-[2px_2px_0_0_#fff]",
                          "hover:translate-x-[2px] hover:translate-y-[2px]",
                          "transition-all duration-200",
                          "aspect-square flex flex-col items-center justify-center"
                        )}
                      >
                        <div className="text-center space-y-2">
                          <motion.div
                            className="text-4xl sm:text-5xl"
                            animate={{
                              rotate: [0, -10, 10, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 3,
                              ease: "easeInOut"
                            }}
                          >
                            {skill.icon}
                          </motion.div>
                          <h4 className="text-sm sm:text-base font-black uppercase text-black">
                            {skill.name}
                          </h4>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>

                <AnimatePresence>
                  {selectedSkill === null && (
                    <motion.div
                      className="mt-8 text-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <p className="text-sm font-bold text-gray-400 animate-pulse">
                        👆 Click kartu untuk detail
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Side - Detail Display (Desktop Only) */}
          <motion.div
            className={cn(
              "hidden lg:flex",
              "border-4 border-black dark:border-white",
              "bg-white dark:bg-gray-900",
              "shadow-[8px_8px_0_0_#000] dark:shadow-[8px_8px_0_0_#fff]",
              "p-6 sm:p-8",
              "min-h-[500px]",
              "items-center justify-center"
            )}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {selectedSkillData ? (
                <motion.div
                  key={selectedSkill}
                  className="w-full"
                  initial={{ opacity: 0, x: 50, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.9 }}
                  transition={{ duration: 0.4, type: "spring" }}
                >
                  <div className="space-y-6">
                    <motion.div
                      className={cn(
                        selectedSkillData.color,
                        "border-4 border-black dark:border-white",
                        "shadow-[8px_8px_0_0_#000] dark:shadow-[8px_8px_0_0_#fff]",
                        "p-8 sm:p-10",
                        "rotate-[-1deg]"
                      )}
                      whileHover={{ rotate: 1, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-center space-y-4">
                        <motion.div
                          className="text-7xl sm:text-8xl"
                          animate={{
                            rotate: [0, -15, 15, 0],
                            scale: [1, 1.1, 1.1, 1]
                          }}
                          transition={{
                            duration: 0.6,
                            times: [0, 0.3, 0.7, 1]
                          }}
                        >
                          {selectedSkillData.icon}
                        </motion.div>
                        <h3 className="text-2xl sm:text-3xl font-black uppercase text-black">
                          {selectedSkillData.name}
                        </h3>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Card className={cn(
                        "border-4 border-black dark:border-white",
                        "bg-brutal-yellow dark:bg-brutal-yellow",
                        "rotate-[1deg]"
                      )}>
                        <CardHeader>
                          <CardTitle className="text-sm font-black uppercase text-black">
                            📝 Deskripsi
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base sm:text-lg font-bold text-black leading-relaxed">
                            {selectedSkillData.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Card className={cn(
                        "border-4 border-black dark:border-white",
                        "bg-brutal-green dark:bg-brutal-green",
                        "rotate-[-1deg]"
                      )}>
                        <CardHeader>
                          <CardTitle className="text-sm font-black uppercase text-black">
                            📊 Level Kemampuan
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Badge className={cn(
                            "px-4 py-2",
                            "border-2 border-black",
                            "bg-white",
                            "text-lg font-black uppercase text-black"
                          )}>
                            {selectedSkillData.level}
                          </Badge>
                        </CardContent>
                      </Card>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        onClick={() => setSelectedSkill(null)}
                        className={cn(
                          "w-full min-h-[56px] px-8",
                          "text-lg font-black uppercase",
                          "border-4 border-black dark:border-white",
                          "bg-brutal-pink dark:bg-brutal-pink",
                          "text-black",
                          "shadow-[6px_6px_0_0_#000] dark:shadow-[6px_6px_0_0_#fff]",
                          "hover:shadow-[3px_3px_0_0_#000] dark:hover:shadow-[3px_3px_0_0_#fff]",
                          "hover:translate-x-[3px] hover:translate-y-[3px]",
                          "transition-all duration-100"
                        )}
                      >
                        ← Kembali ke Dompet
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  className="text-center space-y-4 opacity-50"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 0.5, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <motion.div
                    className="text-6xl"
                    animate={{ x: [-10, 10, -10] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    👈
                  </motion.div>
                  <p className="text-lg font-black uppercase text-black dark:text-white">
                    Pilih skill untuk melihat detail
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Mobile Sheet for Skill Details - ONLY MOBILE */}
      <div className="lg:hidden">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetContent
            side="bottom"
            className={cn(
              "bg-white dark:bg-gray-900",
              "border-4 border-black dark:border-white border-b-0",
              "shadow-[0_-8px_0_0_#000] dark:shadow-[0_-8px_0_0_#fff]",
              "max-h-[90vh] overflow-y-auto"
            )}
          >
            {selectedSkillData && (
              <>
                <SheetHeader className="sr-only">
                  <SheetTitle>{selectedSkillData.name}</SheetTitle>
                  <SheetDescription>{selectedSkillData.description}</SheetDescription>
                </SheetHeader>

                <motion.div
                  className="space-y-6 pt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div
                    className={cn(
                      selectedSkillData.color,
                      "border-4 border-black dark:border-white",
                      "shadow-[6px_6px_0_0_#000] dark:shadow-[6px_6px_0_0_#fff]",
                      "p-8",
                      "rotate-[-1deg]"
                    )}
                  >
                    <div className="text-center space-y-4">
                      <motion.div
                        className="text-7xl"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, type: "spring" }}
                      >
                        {selectedSkillData.icon}
                      </motion.div>
                      <h3 className="text-2xl font-black uppercase text-black">
                        {selectedSkillData.name}
                      </h3>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Card className={cn(
                      "border-4 border-black dark:border-white",
                      "bg-brutal-yellow dark:bg-brutal-yellow",
                      "rotate-[1deg]"
                    )}>
                      <CardHeader>
                        <CardTitle className="text-sm font-black uppercase text-black">
                          📝 Deskripsi
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base font-bold text-black leading-relaxed">
                          {selectedSkillData.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Card className={cn(
                      "border-4 border-black dark:border-white",
                      "bg-brutal-green dark:bg-brutal-green",
                      "rotate-[-1deg]"
                    )}>
                      <CardHeader>
                        <CardTitle className="text-sm font-black uppercase text-black">
                          📊 Level Kemampuan
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Badge className={cn(
                          "px-4 py-2",
                          "border-2 border-black",
                          "bg-white",
                          "text-lg font-black uppercase text-black"
                        )}>
                          {selectedSkillData.level}
                        </Badge>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={() => setIsSheetOpen(false)}
                      className={cn(
                        "w-full min-h-[56px] px-8",
                        "text-lg font-black uppercase",
                        "border-4 border-black dark:border-white",
                        "bg-brutal-pink dark:bg-brutal-pink",
                        "text-black",
                        "shadow-[6px_6px_0_0_#000] dark:shadow-[6px_6px_0_0_#fff]",
                        "active:translate-x-[3px] active:translate-y-[3px]",
                        "active:shadow-[3px_3px_0_0_#000]",
                        "transition-all duration-100"
                      )}
                    >
                      ✕ Tutup
                    </Button>
                  </motion.div>
                </motion.div>
              </>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}