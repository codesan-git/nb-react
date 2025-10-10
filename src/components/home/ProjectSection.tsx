import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { projects } from '@/data/projects'

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full px-4 py-12 sm:py-16 lg:py-20 mx-auto max-w-6xl">
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
          Project Saya
        </h2>
        <p className={cn(
          "text-base sm:text-lg font-bold",
          "text-black dark:text-white",
          "max-w-2xl mx-auto"
        )}>
          Beberapa project yang telah saya kerjakan
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, rotate: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? -1 : 1
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{
              rotate: index % 2 === 0 ? 1 : -1,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Card
              className={cn(
                project.color,
                "border-4 border-black dark:border-white",
                "shadow-[6px_6px_0_0_#000] dark:shadow-[6px_6px_0_0_#fff]",
                "hover:shadow-[3px_3px_0_0_#000] dark:hover:shadow-[3px_3px_0_0_#fff]",
                "hover:translate-x-[3px] hover:translate-y-[3px]",
                "transition-all duration-200",
                "cursor-pointer"
              )}
              onClick={() => alert(`Lihat detail ${project.title}`)}
            >
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-4">
                  <motion.div
                    className="text-5xl"
                    animate={{
                      rotate: [0, -10, 10, 0],
                      scale: [1, 1.1, 1.1, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut"
                    }}
                  >
                    {project.icon}
                  </motion.div>
                  <CardTitle className="text-xl sm:text-2xl font-black uppercase text-black dark:text-white">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base font-bold text-black dark:text-white">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.1 + techIndex * 0.05,
                          type: "spring"
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge
                          variant="outline"
                          className={cn(
                            "px-3 py-1",
                            "border-2 border-black dark:border-white",
                            "bg-white dark:bg-black",
                            "text-xs sm:text-sm font-black uppercase",
                            "text-black dark:text-white"
                          )}
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}