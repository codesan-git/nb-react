import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="w-full px-4 py-12 sm:py-16 lg:py-20 mx-auto max-w-4xl">
      <div className="space-y-8">
        {/* Profile Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: -50, rotate: -10 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <motion.div
            className={cn(
              "border-4 border-black dark:border-white",
              "bg-brutal-yellow dark:bg-brutal-blue",
              "shadow-[8px_8px_0_0_#000] dark:shadow-[8px_8px_0_0_#fff]",
              "overflow-hidden"
            )}
            whileHover={{
              rotate: 2,
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <img
              src="https://avatars.githubusercontent.com/u/92975422?v=4"
              alt="Profile"
              className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-cover"
            />
          </motion.div>
        </motion.div>

        <div className="text-center space-y-6">
          {/* Title */}
          <motion.h1
            className={cn(
              "text-4xl sm:text-5xl lg:text-6xl font-black",
              "text-black dark:text-white",
              "uppercase tracking-tight"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Halo, Saya Codesan
          </motion.h1>

          {/* Role Tags */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {[
              { text: "Full Stack Developer", color: "bg-brutal-pink", rotate: -2 },
              // { text: "UI/UX Enthusiast", color: "bg-brutal-yellow", rotate: 2 },
              // { text: "Problem Solver", color: "bg-brutal-blue", rotate: -1 }
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: badge.rotate }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.4, type: "spring" }}
                whileHover={{
                  rotate: 0,
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <Badge variant="outline" className={cn(
                  "px-4 py-2 sm:px-6 sm:py-3",
                  "text-base sm:text-lg lg:text-xl font-black uppercase",
                  "border-4 border-black dark:border-white",
                  badge.color,
                  "text-black",
                  "shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff]",
                )}>
                  {badge.text}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Card className={cn(
              "max-w-2xl mx-auto",
              "border-4 border-black dark:border-white",
              "bg-brutal-green dark:bg-brutal-green",
              "shadow-[6px_6px_0_0_#000] dark:shadow-[6px_6px_0_0_#fff]"
            )}>
              <CardContent className="p-6 sm:p-8">
                <p className={cn(
                  "text-base sm:text-lg font-bold",
                  "text-black",
                  "leading-relaxed"
                )}>
                  Saya passionate dalam membangun aplikasi web yang indah dan fungsional.
                  Dengan pengalaman di berbagai teknologi modern, saya siap mengubah ide
                  menjadi kenyataan digital.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className={cn(
                "min-h-[56px] w-full sm:w-auto px-8",
                "text-lg font-black uppercase",
                "border-4 border-black dark:border-white",
                "bg-brutal-pink dark:bg-brutal-green",
                "text-black dark:text-black",
                "shadow-[6px_6px_0_0_#000] dark:shadow-[6px_6px_0_0_#fff]",
                "hover:shadow-[3px_3px_0_0_#000] dark:hover:shadow-[3px_3px_0_0_#fff]",
                "hover:translate-x-[3px] hover:translate-y-[3px]",
                "transition-all duration-100"
              )}
              onClick={() => alert('Email: your.email@example.com')}
            >
              Hubungi Saya
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
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
                "transition-all duration-100"
              )}
              onClick={() => window.open('https://github.com/yourusername', '_blank')}
            >
              Lihat GitHub
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}