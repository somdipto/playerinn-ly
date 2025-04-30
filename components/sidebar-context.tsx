"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"

type SidebarContextType = {
  isExpanded: boolean
  toggleSidebar: () => void
  setIsExpanded: (value: boolean) => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(true)
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Automatically collapse sidebar on mobile screens
  useEffect(() => {
    if (isMobile) {
      setIsExpanded(false)
    } else {
      setIsExpanded(true)
    }
  }, [isMobile])

  const toggleSidebar = () => {
    setIsExpanded((prev) => !prev)
  }

  return (
    <SidebarContext.Provider value={{ isExpanded, toggleSidebar, setIsExpanded }}>{children}</SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}
