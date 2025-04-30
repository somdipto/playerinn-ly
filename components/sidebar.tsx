"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Compass, MessageSquare, PlusSquare, Rocket, ShoppingBag, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useSidebar } from "@/components/sidebar-context"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"

export default function Sidebar() {
  const pathname = usePathname()
  const { isExpanded, toggleSidebar } = useSidebar()
  const isMobile = useMediaQuery("(max-width: 768px)")

  const navigation = [
    { name: "Discover", href: "/", icon: Compass },
    { name: "Board", href: "/board", icon: Rocket },
    { name: "Community", href: "/community", icon: MessageSquare },
  ]

  const redeemNav = [{ name: "Thrive", href: "/thrive", icon: ShoppingBag }]

  const maintainerNav = [{ name: "Submit a game", href: "/submit-game", icon: PlusSquare }]

  // If on mobile and sidebar is expanded, add an overlay
  if (isMobile && isExpanded) {
    return (
      <>
        {/* Overlay */}
        <div className="fixed inset-0 bg-black/80 z-40 md:hidden" onClick={toggleSidebar} aria-hidden="true" />

        {/* Sidebar */}
        <div className="fixed inset-y-0 left-0 z-50 w-60 h-full bg-black border-r border-border flex flex-col transition-all duration-300 md:hidden">
          <div className="p-4 flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 flex items-center justify-start">
                <Image src="/images/inn-logo.png" alt="playerinn" width={40} height={40} className="object-contain" />
              </div>
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleSidebar} className="md:hidden">
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex-1 overflow-auto py-4">
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-xs font-semibold text-muted-foreground">Explore</h2>
              <div className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary transition-colors",
                      pathname === item.href ? "bg-secondary text-white" : "text-muted-foreground",
                    )}
                    onClick={isMobile ? toggleSidebar : undefined}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                    {item.isNew && <span className="ml-auto rounded-full bg-primary px-2 py-0.5 text-xs">New</span>}
                  </Link>
                ))}
              </div>
            </div>

            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-xs font-semibold text-muted-foreground">Redeem</h2>
              <div className="space-y-1">
                {redeemNav.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary transition-colors",
                      pathname === item.href ? "bg-secondary text-white" : "text-muted-foreground",
                    )}
                    onClick={isMobile ? toggleSidebar : undefined}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-xs font-semibold text-muted-foreground">Publisher</h2>
              <div className="space-y-1">
                {maintainerNav.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary transition-colors",
                      pathname === item.href ? "bg-secondary text-white" : "text-muted-foreground",
                    )}
                    onClick={isMobile ? toggleSidebar : undefined}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  // Regular sidebar (desktop or collapsed mobile)
  return (
    <div
      className={cn(
        "h-full bg-black border-r border-border flex flex-col transition-all duration-300",
        isExpanded ? "w-60" : "w-20",
        isMobile && !isExpanded && "hidden",
      )}
    >
      <div className="p-4 flex items-center">
        <Link href="/" className="flex items-center">
          <div className="w-10 h-10 flex items-center justify-start">
            <Image src="/images/inn-logo.png" alt="playerinn" width={40} height={40} className="object-contain" />
          </div>
        </Link>
      </div>

      <div className="flex-1 overflow-auto py-4">
        <div className="px-3 py-2">
          {isExpanded && <h2 className="mb-2 px-4 text-xs font-semibold text-muted-foreground">Explore</h2>}
          <div className="space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary transition-colors",
                  pathname === item.href ? "bg-secondary text-white" : "text-muted-foreground",
                  !isExpanded && "justify-center px-2",
                )}
              >
                <item.icon className="h-5 w-5" />
                {isExpanded && (
                  <>
                    {item.name}
                    {item.isNew && <span className="ml-auto rounded-full bg-primary px-2 py-0.5 text-xs">New</span>}
                  </>
                )}
              </Link>
            ))}
          </div>
        </div>

        <div className="px-3 py-2">
          {isExpanded && <h2 className="mb-2 px-4 text-xs font-semibold text-muted-foreground">Redeem</h2>}
          <div className="space-y-1">
            {redeemNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary transition-colors",
                  pathname === item.href ? "bg-secondary text-white" : "text-muted-foreground",
                  !isExpanded && "justify-center px-2",
                )}
              >
                <item.icon className="h-5 w-5" />
                {isExpanded && item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="px-3 py-2">
          {isExpanded && <h2 className="mb-2 px-4 text-xs font-semibold text-muted-foreground">Publisher</h2>}
          <div className="space-y-1">
            {maintainerNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary transition-colors",
                  pathname === item.href ? "bg-secondary text-white" : "text-muted-foreground",
                  !isExpanded && "justify-center px-2",
                )}
              >
                <item.icon className="h-5 w-5" />
                {isExpanded && item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
