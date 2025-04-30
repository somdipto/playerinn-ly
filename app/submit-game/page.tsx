"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ConnectWalletButton } from "@/components/connect-wallet-button"

export default function SubmitGamePage() {
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    blockchain: "",
    tokenomics: "",
    gameUrl: "",
    thumbnailUrl: "",
    screenshotUrls: ["", "", ""],
    revenueModel: "",
    minimumPayout: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleScreenshotChange = (index: number, value: string) => {
    const newScreenshots = [...formData.screenshotUrls]
    newScreenshots[index] = value
    setFormData((prev) => ({ ...prev, screenshotUrls: newScreenshots }))
  }

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3))
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Submit logic would go here
    alert("Game submitted successfully!")
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Submit Your Game</h1>
        <p className="text-muted-foreground">
          List your play-to-earn game on our platform and reach thousands of crypto gamers.
        </p>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 1 ? "bg-primary" : "bg-secondary"}`}
            >
              1
            </div>
            <div className={`h-1 w-16 ${currentStep >= 2 ? "bg-primary" : "bg-secondary"}`}></div>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 2 ? "bg-primary" : "bg-secondary"}`}
            >
              2
            </div>
            <div className={`h-1 w-16 ${currentStep >= 3 ? "bg-primary" : "bg-secondary"}`}></div>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 3 ? "bg-primary" : "bg-secondary"}`}
            >
              3
            </div>
          </div>

          <div>
            <ConnectWalletButton />
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            {currentStep === 1 && "Game Details"}
            {currentStep === 2 && "Media & Assets"}
            {currentStep === 3 && "Monetization"}
          </CardTitle>
          <CardDescription>
            {currentStep === 1 && "Provide basic information about your game"}
            {currentStep === 2 && "Upload screenshots and media for your game"}
            {currentStep === 3 && "Set up your earning model and tokenomics"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            {currentStep === 1 && (
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="title">Game Title</Label>
                  <Input
                    id="title"
                    placeholder="Enter your game title"
                    value={formData.title}
                    onChange={(e) => handleChange("title", e.target.value)}
                    required
                  />
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your game in detail"
                    className="min-h-32"
                    value={formData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="category">Category</Label>
                    <Select onValueChange={(value) => handleChange("category", value)} value={formData.category}>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="racing">Racing</SelectItem>
                        <SelectItem value="rpg">RPG</SelectItem>
                        <SelectItem value="strategy">Strategy</SelectItem>
                        <SelectItem value="simulation">Simulation</SelectItem>
                        <SelectItem value="card">Card Game</SelectItem>
                        <SelectItem value="action">Action</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="blockchain">Blockchain</Label>
                    <Select onValueChange={(value) => handleChange("blockchain", value)} value={formData.blockchain}>
                      <SelectTrigger id="blockchain">
                        <SelectValue placeholder="Select blockchain" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ethereum">Ethereum</SelectItem>
                        <SelectItem value="polygon">Polygon</SelectItem>
                        <SelectItem value="solana">Solana</SelectItem>
                        <SelectItem value="bsc">Binance Smart Chain</SelectItem>
                        <SelectItem value="avalanche">Avalanche</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="gameUrl">Game URL</Label>
                  <Input
                    id="gameUrl"
                    placeholder="https://yourgame.com"
                    value={formData.gameUrl}
                    onChange={(e) => handleChange("gameUrl", e.target.value)}
                    required
                  />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="thumbnailUrl">Thumbnail Image URL</Label>
                  <Input
                    id="thumbnailUrl"
                    placeholder="https://example.com/thumbnail.jpg"
                    value={formData.thumbnailUrl}
                    onChange={(e) => handleChange("thumbnailUrl", e.target.value)}
                    required
                  />
                  <p className="text-sm text-muted-foreground">This will be the main image displayed for your game</p>
                </div>

                <div className="grid gap-3">
                  <Label>Screenshots (up to 3)</Label>
                  <div className="grid gap-3">
                    {formData.screenshotUrls.map((url, index) => (
                      <Input
                        key={index}
                        placeholder={`Screenshot ${index + 1} URL`}
                        value={url}
                        onChange={(e) => handleScreenshotChange(index, e.target.value)}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="tokenomics">Tokenomics</Label>
                  <Textarea
                    id="tokenomics"
                    placeholder="Describe your game's token economy"
                    className="min-h-32"
                    value={formData.tokenomics}
                    onChange={(e) => handleChange("tokenomics", e.target.value)}
                    required
                  />
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="revenueModel">Revenue Model</Label>
                  <Select onValueChange={(value) => handleChange("revenueModel", value)} value={formData.revenueModel}>
                    <SelectTrigger id="revenueModel">
                      <SelectValue placeholder="Select revenue model" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="play-to-earn">Play-to-Earn</SelectItem>
                      <SelectItem value="nft-sales">NFT Sales</SelectItem>
                      <SelectItem value="subscription">Subscription</SelectItem>
                      <SelectItem value="in-game-purchases">In-Game Purchases</SelectItem>
                      <SelectItem value="hybrid">Hybrid Model</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="minimumPayout">Minimum Payout (USD)</Label>
                  <Input
                    id="minimumPayout"
                    placeholder="e.g. 5.00"
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.minimumPayout}
                    onChange={(e) => handleChange("minimumPayout", e.target.value)}
                    required
                  />
                  <p className="text-sm text-muted-foreground">The minimum amount players can earn per day</p>
                </div>

                <div className="grid gap-3">
                  <Label>Smart Contract Address</Label>
                  <Input placeholder="0x..." required />
                  <p className="text-sm text-muted-foreground">The address of your game's main smart contract</p>
                </div>

                <div className="grid gap-3">
                  <Label>Token Contract Address</Label>
                  <Input placeholder="0x..." required />
                  <p className="text-sm text-muted-foreground">The address of your game's token contract</p>
                </div>
              </div>
            )}
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={prevStep} disabled={currentStep === 1}>
            Previous
          </Button>

          {currentStep < 3 ? (
            <Button onClick={nextStep}>Next</Button>
          ) : (
            <Button type="submit" onClick={handleSubmit}>
              Submit Game
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
