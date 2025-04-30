import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"
import { WalletProvider } from "@/components/wallet-provider"
import { Toaster } from "@/components/ui/toaster"
// Add the import for the SidebarProvider
import { SidebarProvider } from "@/components/sidebar-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "playerinn - Web3 Gaming Platform",
  description: "A platform for game developers to list and sell their web3 games",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Update the return statement to wrap the content with SidebarProvider
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <WalletProvider>
            <SidebarProvider>
              <div className="flex h-screen bg-black text-white">
                <Sidebar />
                <div className="flex-1 flex flex-col overflow-hidden">
                  <Header />
                  <main className="flex-1 overflow-auto">{children}</main>
                </div>
              </div>
              <Toaster />
            </SidebarProvider>
          </WalletProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
