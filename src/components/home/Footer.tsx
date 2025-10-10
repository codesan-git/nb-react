import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="w-full px-4 py-8 mx-auto max-w-6xl">
      <motion.div
        className={cn(
          "border-t-4 border-black dark:border-white",
          "pt-8 text-center"
        )}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.p
          className="text-base sm:text-lg font-black uppercase text-black dark:text-white"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          © 2025 [Nama Anda] • Made with{' '}
          <motion.span
            className="inline-block"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut"
            }}
          >
            ❤️
          </motion.span>
        </motion.p>
      </motion.div>
    </footer>
  )
}