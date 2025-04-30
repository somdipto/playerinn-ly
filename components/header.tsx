"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ConnectWalletButton } from "@/components/connect-wallet-button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useWallet } from "@/components/wallet-provider"
import { useSidebar } from "@/components/sidebar-context"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function Header() {
  const pathname = usePathname()
  const { isConnected } = useWallet()
  const { toggleSidebar, isExpanded } = useSidebar()
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Function to get the current page title based on pathname
  const getPageTitle = () => {
    const path = pathname.split("/")[1]

    switch (path) {
      case "":
        return "Discover"
      case "play-to-earn":
        return "Play-to-Earn"
      case "community":
        return "Community"
      case "thrive":
        return "Thrive"
      case "profile":
        return "Profile"
      case "submit-game":
        return "Submit a game"
      default:
        return path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, " ")
    }
  }

  return (
    <header className="h-14 border-b border-white/5 flex items-center px-4 backdrop-blur-sm bg-black/5 sticky top-0 z-50">
      <Button variant="ghost" size="icon" className="mr-2" onClick={toggleSidebar} aria-label="Toggle sidebar">
        <Menu className="h-5 w-5" />
      </Button>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 text-sm">
          <Link href="/" className="text-white hover:text-white/80 font-medium">
            playerinn
          </Link>
          {pathname !== "/" && (
            <>
              <span className="text-muted-foreground">/</span>
              <span>{getPageTitle()}</span>
            </>
          )}
        </div>
      </div>

      <div className="ml-auto flex items-center gap-4">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="h-5 w-5" />
        </Button>

        <ConnectWalletButton />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/profile" className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Bell className="mr-2 h-4 w-4" />
              <span>Notifications</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Help & Support</span>
            </DropdownMenuItem>
            {isConnected && (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-500">
                  <span>Disconnect Wallet</span>
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
