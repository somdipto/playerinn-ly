"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { toast } from "@/hooks/use-toast"

interface WalletContextType {
  isConnected: boolean
  address: string
  balance: number
  connectWallet: (provider: string) => Promise<void>
  disconnectWallet: () => void
}

const WalletContext = createContext<WalletContextType | undefined>(undefined)

export function WalletProvider({ children }: { children: ReactNode }) {
  const [isConnected, setIsConnected] = useState(false)
  const [address, setAddress] = useState("")
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    // Load wallet state from localStorage on component mount
    const savedWallet = localStorage.getItem("playerinn_wallet")
    if (savedWallet) {
      try {
        const walletData = JSON.parse(savedWallet)
        setIsConnected(true)
        setAddress(walletData.address)
        setBalance(walletData.balance)
      } catch (error) {
        console.error("Failed to parse wallet data:", error)
        localStorage.removeItem("playerinn_wallet")
      }
    }
  }, [])

  const connectWallet = async (provider: string) => {
    try {
      // Simulate wallet connection
      await new Promise((resolve) => setTimeout(resolve, 1500))

      const mockAddress = "0x" + Math.random().toString(16).slice(2, 12) + Math.random().toString(16).slice(2, 12)
      const mockBalance = Number.parseFloat((Math.random() * 5).toFixed(4))

      // Update state
      setAddress(mockAddress)
      setBalance(mockBalance)
      setIsConnected(true)

      // Store in localStorage for persistence
      localStorage.setItem("playerinn_wallet", JSON.stringify({ address: mockAddress, balance: mockBalance, provider }))

      toast({
        title: "Wallet Connected",
        description: `Successfully connected to ${provider}`,
      })

      return { address: mockAddress, balance: mockBalance }
    } catch (error) {
      console.error("Wallet connection error:", error)
      toast({
        title: "Connection Failed",
        description: "Failed to connect wallet. Please try again.",
        variant: "destructive",
      })
      throw error
    }
  }

  const disconnectWallet = () => {
    setAddress("")
    setBalance(0)
    setIsConnected(false)
    localStorage.removeItem("playerinn_wallet")
    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been disconnected.",
    })
  }

  return (
    <WalletContext.Provider
      value={{
        isConnected,
        address,
        balance,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}

export function useWallet() {
  const context = useContext(WalletContext)
  if (context === undefined) {
    throw new Error("useWallet must be used within a WalletProvider")
  }
  return context
}
