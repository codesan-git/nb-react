// import { Moon, Sun } from "lucide-react"
// import { useTheme } from "@/components/theme-provider"
// import { cn } from "@/lib/utils"

// export function ModeToggle() {
//   const { theme, setTheme } = useTheme()

//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light")
//   }

//   return (
//     <button
//       onClick={toggleTheme}
//       className={cn(
//         "inline-flex items-center justify-center",
//         "h-12 w-12",
//         "border-4 border-black dark:border-white",
//         "bg-white dark:bg-brutal-white",
//         "text-black dark:text-white",
//         "shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff]",
//         "hover:bg-brutal-blue hover:shadow-[2px_2px_0_0_#000] dark:hover:shadow-[2px_2px_0_0_#fff]",
//         "hover:translate-x-[2px] hover:translate-y-[2px]",
//         "active:translate-x-[4px] active:translate-y-[4px]",
//         "active:shadow-none",
//         "transition-all duration-100"
//       )}
//       aria-label="Toggle theme"
//     >
//       <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//       <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//       <span className="sr-only">Toggle theme</span>
//     </button>
//   )
// }