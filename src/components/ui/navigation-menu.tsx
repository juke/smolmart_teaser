import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"
import { Button } from "./button"

export interface NavigationMenuProps {
  className?: string
}

export function NavigationMenu({ className }: NavigationMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  const menuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  }

  const linkVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  }

  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-background/80", className)}>
      <div className="mx-auto px-4 sm:px-8 py-4">
        <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6">
          <Button
            variant="ghost"
            size="icon"
            className="sm:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={isOpen ? "open" : "closed"}
              variants={{
                open: {
                  rotate: 90,
                  pathLength: 1
                },
                closed: {
                  rotate: 0,
                  pathLength: 1
                }
              }}
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </motion.svg>
          </Button>

          <div className="hidden sm:flex items-center gap-6">
            {["Browse", "Commission", "Drops"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-muted hover:text-foreground transition-colors tracking-wide"
                whileHover="hover"
                variants={linkVariants}
              >
                {item}
              </motion.a>
            ))}
            <div className="h-4 w-px bg-muted/20" />
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button variant="secondary">
              Join Waitlist
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="sm:hidden"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
        >
          <div className="py-4 space-y-2 overflow-hidden">
            {["Browse", "Commission", "Drops"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-2 text-sm font-medium text-muted hover:text-foreground transition-colors tracking-wide"
                whileHover="hover"
                variants={linkVariants}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  )
} 