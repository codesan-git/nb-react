import { motion } from 'framer-motion'

export function IslamicBackground() {
  return (
    <>
      {/* Simple Islamic Pattern Background */}
      <div className="fixed inset-0 pointer-events-none opacity-3">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="islamic-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="25" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-400" />
              <path d="M40,20 L45,32 L57,32 L47,40 L52,52 L40,44 L28,52 L33,40 L23,32 L35,32 Z"
                fill="currentColor" className="text-amber-400 opacity-50" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
        </svg>
      </div>

      {/* Minimal Corner Decorations */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Top right - Crescent and star */}
        <motion.div
          className="absolute top-25 right-10 opacity-15"
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 0.15, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="relative">
            <motion.div
              className="text-5xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              🌙
            </motion.div>
            <motion.div
              className="absolute top-1 right-2 text-xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              ⭐
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom left - Crescent and star */}
        <motion.div
          className="absolute bottom-25 left-10 opacity-15"
          initial={{ opacity: 0, scale: 0, rotate: 180 }}
          animate={{ opacity: 0.15, scale: 1, rotate: 180 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="relative">
            <motion.div
              className="text-4xl"
              animate={{ rotate: [180, 190, 170, 180] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              🌙
            </motion.div>
            <motion.div
              className="absolute top-0 right-1 text-base"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              ⭐
            </motion.div>
          </div>
        </motion.div>

        {/* Subtle scattered stars */}
        <motion.div
          className="absolute top-1/3 left-1/4 text-xl opacity-10"
          animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          ⭐
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 right-1/4 text-xl opacity-10"
          animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          ⭐
        </motion.div>
      </div>
    </>
  )
}