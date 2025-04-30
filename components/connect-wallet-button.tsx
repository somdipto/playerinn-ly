"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Wallet, Copy, CheckCircle, Loader2 } from "lucide-react"
import { toast } from "@/hooks/use-toast"

// Simulated blockchain provider interface
interface WalletProvider {
  name: string
  icon: React.ReactNode
  connectWallet: () => Promise<{ address: string; balance: number }>
}

export function ConnectWalletButton() {
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")
  const [walletBalance, setWalletBalance] = useState(0)
  const [isConnecting, setIsConnecting] = useState(false)
  const [copied, setCopied] = useState(false)
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null)

  // Load wallet state from localStorage on component mount
  useEffect(() => {
    const savedWallet = localStorage.getItem("playerinn_wallet")
    if (savedWallet) {
      try {
        const walletData = JSON.parse(savedWallet)
        setIsConnected(true)
        setWalletAddress(walletData.address)
        setWalletBalance(walletData.balance)
      } catch (error) {
        console.error("Failed to parse wallet data:", error)
        localStorage.removeItem("playerinn_wallet")
      }
    }
  }, [])

  const walletProviders: WalletProvider[] = [
    {
      name: "MetaMask",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.17 2L13.16 8.42L14.61 4.94L21.17 2Z" fill="#E2761B" />
          <path d="M2.83 2L10.76 8.5L9.39 4.94L2.83 2Z" fill="#E4761B" />
          <path d="M18.27 15.33L16.15 18.35L20.5 19.5L21.75 15.4L18.27 15.33Z" fill="#E4761B" />
          <path d="M2.26 15.4L3.5 19.5L7.85 18.35L5.73 15.33L2.26 15.4Z" fill="#E4761B" />
          <path d="M7.61 10.18L6.38 11.97L10.69 12.17L10.54 7.5L7.61 10.18Z" fill="#E4761B" />
          <path d="M16.39 10.18L13.42 7.42L13.31 12.17L17.62 11.97L16.39 10.18Z" fill="#E4761B" />
          <path d="M7.85 18.35L10.38 17.1L8.19 15.44L7.85 18.35Z" fill="#E4761B" />
          <path d="M13.62 17.1L16.15 18.35L15.81 15.44L13.62 17.1Z" fill="#E4761B" />
        </svg>
      ),
      connectWallet: async () => {
        // Simulate MetaMask connection
        await new Promise((resolve) => setTimeout(resolve, 1500))
        const address = "0x" + Math.random().toString(16).slice(2, 12) + Math.random().toString(16).slice(2, 12)
        const balance = Number.parseFloat((Math.random() * 5).toFixed(4))
        return { address, balance }
      },
    },
    {
      name: "WalletConnect",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.36 9.32C9.28 6.4 13.88 6.4 16.8 9.32L17.2 9.72C17.36 9.88 17.36 10.12 17.2 10.28L16.04 11.44C15.96 11.52 15.84 11.52 15.76 11.44L15.2 10.88C13.16 8.84 10 8.84 7.96 10.88L7.36 11.48C7.28 11.56 7.16 11.56 7.08 11.48L5.92 10.32C5.76 10.16 5.76 9.92 5.92 9.76L6.36 9.32ZM19.08 11.6L20.08 12.6C20.24 12.76 20.24 13 20.08 13.16L15.28 17.96C15.12 18.12 14.88 18.12 14.72 17.96L11.36 14.6C11.32 14.56 11.28 14.56 11.24 14.6L7.88 17.96C7.72 18.12 7.48 18.12 7.32 17.96L2.52 13.16C2.36 13 2.36 12.76 2.52 12.6L3.52 11.6C3.68 11.44 3.92 11.44 4.08 11.6L7.44 14.96C7.48 15 7.52 15 7.56 14.96L10.92 11.6C11.08 11.44 11.32 11.44 11.48 11.6L14.84 14.96C14.88 15 14.92 15 14.96 14.96L18.32 11.6C18.48 11.44 18.72 11.44 18.88 11.6H19.08Z"
            fill="white"
          />
        </svg>
      ),
      connectWallet: async () => {
        // Simulate WalletConnect connection
        await new Promise((resolve) => setTimeout(resolve, 1800))
        const address = "0x" + Math.random().toString(16).slice(2, 12) + Math.random().toString(16).slice(2, 12)
        const balance = Number.parseFloat((Math.random() * 10).toFixed(4))
        return { address, balance }
      },
    },
    {
      name: "Coinbase Wallet",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 18.5C8.42 18.5 5.5 15.58 5.5 12C5.5 8.42 8.42 5.5 12 5.5C15.58 5.5 18.5 8.42 18.5 12C18.5 15.58 15.58 18.5 12 18.5Z"
            fill="white"
          />
          <path
            d="M12 8.5C10.07 8.5 8.5 10.07 8.5 12C8.5 13.93 10.07 15.5 12 15.5C13.93 15.5 15.5 13.93 15.5 12C15.5 10.07 13.93 8.5 12 8.5Z"
            fill="white"
          />
        </svg>
      ),
      connectWallet: async () => {
        // Simulate Coinbase Wallet connection
        await new Promise((resolve) => setTimeout(resolve, 1200))
        const address = "0x" + Math.random().toString(16).slice(2, 12) + Math.random().toString(16).slice(2, 12)
        const balance = Number.parseFloat((Math.random() * 8).toFixed(4))
        return { address, balance }
      },
    },
  ]

  const connectWallet = async (providerName: string) => {
    try {
      setIsConnecting(true)
      setSelectedProvider(providerName)

      const provider = walletProviders.find((p) => p.name === providerName)
      if (!provider) throw new Error("Provider not found")

      // Simulate wallet connection
      const { address, balance } = await provider.connectWallet()

      // Save wallet data
      setWalletAddress(address)
      setWalletBalance(balance)
      setIsConnected(true)

      // Store in localStorage for persistence
      localStorage.setItem("playerinn_wallet", JSON.stringify({ address, balance, provider: providerName }))

      toast({
        title: "Wallet Connected",
        description: `Successfully connected to ${providerName}`,
      })
    } catch (error) {
      console.error("Wallet connection error:", error)
      toast({
        title: "Connection Failed",
        description: "Failed to connect wallet. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsConnecting(false)
      setSelectedProvider(null)
    }
  }

  const disconnectWallet = () => {
    setWalletAddress("")
    setWalletBalance(0)
    setIsConnected(false)
    localStorage.removeItem("playerinn_wallet")
    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been disconnected.",
    })
  }

  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Wallet className="h-4 w-4" />
          {isConnected ? walletAddress.slice(0, 6) + "..." + walletAddress.slice(-4) : "Connect Wallet"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{isConnected ? "Wallet Connected" : "Connect Wallet"}</DialogTitle>
          <DialogDescription>
            {isConnected
              ? "Your wallet is connected to playerinn."
              : "Connect your wallet to access all features of the platform."}
          </DialogDescription>
        </DialogHeader>

        {isConnected ? (
          <div className="space-y-4 py-4">
            <div className="flex flex-col space-y-2 bg-secondary/30 p-4 rounded-lg">
              <p className="text-sm font-medium">Connected Address</p>
              <div className="flex items-center gap-2">
                <code className="text-sm bg-secondary/50 p-1 rounded break-all">{walletAddress}</code>
                <Button variant="ghost" size="icon" onClick={copyAddress} className="h-8 w-8">
                  {copied ? <CheckCircle className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div className="flex flex-col space-y-2 bg-secondary/30 p-4 rounded-lg">
              <p className="text-sm font-medium">Wallet Balance</p>
              <div className="flex items-center gap-2">
                <p className="text-xl font-bold">{walletBalance} ETH</p>
              </div>
              <p className="text-xs text-muted-foreground">≈ ${(walletBalance * 3500).toFixed(2)} USD</p>
            </div>

            <div className="flex flex-col space-y-2">
              <Button variant="outline" className="w-full" onClick={() => (window.location.href = "/profile")}>
                View Profile
              </Button>
              <Button variant="destructive" onClick={disconnectWallet}>
                Disconnect Wallet
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid gap-4 py-4">
            {walletProviders.map((provider) => (
              <Button
                key={provider.name}
                onClick={() => connectWallet(provider.name)}
                className="gap-2 justify-start h-12"
                disabled={isConnecting}
              >
                {isConnecting && selectedProvider === provider.name ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  provider.icon
                )}
                <span className="flex-1 text-left">
                  {provider.name}
                  {isConnecting && selectedProvider === provider.name && " (Connecting...)"}
                </span>
              </Button>
            ))}

            <div className="text-center text-sm text-muted-foreground mt-2">
              <p>New to Ethereum?</p>
              <a
                href="https://ethereum.org/en/wallets/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Learn more about wallets
              </a>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

// Create a hook to access wallet state throughout the app
export function useWallet() {
  const [walletState, setWalletState] = useState({
    isConnected: false,
    address: "",
    balance: 0,
  })

  useEffect(() => {
    const savedWallet = localStorage.getItem("playerinn_wallet")
    if (savedWallet) {
      try {
        const walletData = JSON.parse(savedWallet)
        setWalletState({
          isConnected: true,
          address: walletData.address,
          balance: walletData.balance,
        })
      } catch (error) {
        console.error("Failed to parse wallet data:", error)
      }
    }
  }, [])

  return walletState
}
