"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Gamepad2, TrendingUp, Trophy, Users, Wallet } from "lucide-react"
import { Calendar } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { toast } from "@/hooks/use-toast"

export default function DiscoverPage() {
  const [registering, setRegistering] = useState(false)
  const [registered, setRegistered] = useState<number[]>([])

  const handleRegister = (tournamentId: number) => {
    setRegistering(true)
    // Simulate API call
    setTimeout(() => {
      setRegistering(false)
      setRegistered([...registered, tournamentId])
      toast({
        title: "Registration successful!",
        description: "You have been registered for the tournament.",
      })
    }, 1500)
  }

  const featuredGames = [
    {
      id: 1,
      title: "CryptoRacer",
      developer: "SpeedLabs",
      image: "/placeholder.svg?height=300&width=400",
      category: "Racing",
      stars: 33,
      forks: 68,
      players: 60,
      blockchain: "Ethereum",
    },
    {
      id: 2,
      title: "MetaVerse Heroes",
      developer: "VitaGames",
      image: "/placeholder.svg?height=300&width=400",
      category: "RPG",
      stars: 1,
      forks: 7,
      players: 7,
      blockchain: "Polygon",
    },
    {
      id: 3,
      title: "CryptoClash",
      developer: "StellarPlay",
      image: "/placeholder.svg?height=300&width=400",
      category: "Strategy",
      stars: 1,
      forks: 7,
      players: 7,
      blockchain: "Solana",
    },
  ]

  return (
    <div className="flex flex-col h-full">
      <div className="cosmic-gradient p-8 flex flex-col items-center justify-center text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">
          Discover and earn with
          <div className="text-primary">Web3 games</div>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Find the best play-to-earn games and earn crypto while playing with the community.
        </p>
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search games..." className="pl-10 bg-black/50 border-muted h-12" />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-muted bg-muted px-1.5 font-mono text-xs text-muted-foreground">
            ⌘K
          </kbd>
        </div>
      </div>

      <div className="flex-1 p-6">
        <Tabs defaultValue="trending" className="mb-8">
          <TabsList>
            <TabsTrigger value="trending" className="flex items-center gap-1">
              <TrendingUp className="h-4 w-4" />
              Trending
            </TabsTrigger>
            <TabsTrigger value="all" className="flex items-center gap-1">
              <Gamepad2 className="h-4 w-4" />
              All Games
            </TabsTrigger>
            <TabsTrigger value="tournaments" className="flex items-center gap-1">
              <Trophy className="h-4 w-4" />
              Tournaments
            </TabsTrigger>
          </TabsList>

          <TabsContent value="trending" className="mt-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Trending Web3 Games</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: 1,
                  title: "CryptoRacer",
                  developer: "SpeedLabs",
                  image: "/placeholder.svg?height=300&width=400",
                  category: "Racing",
                  earnings: "$5-20/day",
                  players: 1240,
                  blockchain: "Ethereum",
                  description: "Race against other players and earn tokens based on your position.",
                  trending: true,
                },
                {
                  id: 2,
                  title: "MetaVerse Heroes",
                  developer: "VitaGames",
                  image: "/placeholder.svg?height=300&width=400",
                  category: "RPG",
                  earnings: "$10-30/day",
                  players: 3500,
                  blockchain: "Polygon",
                  description: "Complete quests, defeat bosses, and earn rewards in this fantasy RPG.",
                  trending: true,
                },
                {
                  id: 3,
                  title: "CryptoClash",
                  developer: "StellarPlay",
                  image: "/placeholder.svg?height=300&width=400",
                  category: "Strategy",
                  earnings: "$8-25/day",
                  players: 2100,
                  blockchain: "Solana",
                  description: "Build your empire, battle other players, and earn tokens through conquest.",
                  trending: true,
                },
              ].map((game) => (
                <Link href={`/games/${game.id}`} key={game.id}>
                  <Card className="game-card overflow-hidden bg-card border-border h-full">
                    <div className="relative h-40">
                      <Image src={game.image || "/placeholder.svg"} alt={game.title} fill className="object-cover" />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-primary hover:bg-primary/80">Earn {game.earnings}</Badge>
                      </div>
                      {game.trending && (
                        <div className="absolute top-2 left-2">
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <TrendingUp className="h-3 w-3" /> Trending
                          </Badge>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt={game.developer} />
                          <AvatarFallback>{game.developer.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="font-semibold">{game.title}</div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{game.description}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {game.category}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {game.blockchain}
                        </Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{game.players.toLocaleString()} players</span>
                      </div>
                      <Button size="sm" variant="outline">
                        Play Now
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="all" className="mt-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Gamepad2 className="h-5 w-5" />
                <h2 className="text-xl font-semibold">All Web3 Games</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: 1,
                  title: "CryptoRacer",
                  developer: "SpeedLabs",
                  image: "/placeholder.svg?height=300&width=400",
                  category: "Racing",
                  earnings: "$5-20/day",
                  players: 1240,
                  blockchain: "Ethereum",
                  description: "Race against other players and earn tokens based on your position.",
                },
                {
                  id: 2,
                  title: "MetaVerse Heroes",
                  developer: "VitaGames",
                  image: "/placeholder.svg?height=300&width=400",
                  category: "RPG",
                  earnings: "$10-30/day",
                  players: 3500,
                  blockchain: "Polygon",
                  description: "Complete quests, defeat bosses, and earn rewards in this fantasy RPG.",
                },
                {
                  id: 3,
                  title: "CryptoClash",
                  developer: "StellarPlay",
                  image: "/placeholder.svg?height=300&width=400",
                  category: "Strategy",
                  earnings: "$8-25/day",
                  players: 2100,
                  blockchain: "Solana",
                  description: "Build your empire, battle other players, and earn tokens through conquest.",
                },
                {
                  id: 4,
                  title: "NFT Legends",
                  developer: "BlockchainGames",
                  image: "/placeholder.svg?height=300&width=400",
                  category: "Card Game",
                  earnings: "$3-15/day",
                  players: 5600,
                  blockchain: "Polygon",
                  description: "Collect, trade, and battle with NFT cards to earn rewards.",
                },
                {
                  id: 5,
                  title: "Crypto Farmers",
                  developer: "HarvestDAO",
                  image: "/placeholder.svg?height=300&width=400",
                  category: "Simulation",
                  earnings: "$5-18/day",
                  players: 1800,
                  blockchain: "Binance Smart Chain",
                  description: "Grow crops, raise animals, and earn tokens through farming activities.",
                },
                {
                  id: 6,
                  title: "Space Miners",
                  developer: "GalacticGames",
                  image: "/placeholder.svg?height=300&width=400",
                  category: "Simulation",
                  earnings: "$7-22/day",
                  players: 2400,
                  blockchain: "Solana",
                  description: "Mine resources in space, build your fleet, and earn crypto through exploration.",
                },
              ].map((game) => (
                <Link href={`/games/${game.id}`} key={game.id}>
                  <Card className="game-card overflow-hidden bg-card border-border h-full">
                    <div className="relative h-40">
                      <Image src={game.image || "/placeholder.svg"} alt={game.title} fill className="object-cover" />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-primary hover:bg-primary/80">Earn {game.earnings}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt={game.developer} />
                          <AvatarFallback>{game.developer.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="font-semibold">{game.title}</div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{game.description}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {game.category}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {game.blockchain}
                        </Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{game.players.toLocaleString()} players</span>
                      </div>
                      <Button size="sm" variant="outline">
                        Play Now
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tournaments" className="mt-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-400" />
                <h2 className="text-xl font-semibold">Upcoming Tournaments</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: 1,
                  title: "CryptoRacer Championship",
                  game: "CryptoRacer",
                  image: "/placeholder.svg?height=300&width=500",
                  startDate: "Apr 24, 2025",
                  endDate: "May 4, 2025",
                  prizePool: "5,000 RACE",
                  prizeUsd: "$4,250",
                  participants: 242,
                  status: "upcoming",
                  daysLeft: 8,
                  maxParticipants: 500,
                  entryFee: "Free",
                  skillLevel: "All levels",
                  description: "Race against the best players in the world and win big prizes!",
                },
                {
                  id: 2,
                  title: "MetaVerse Heroes Arena",
                  game: "MetaVerse Heroes",
                  image: "/placeholder.svg?height=300&width=500",
                  startDate: "Apr 28, 2025",
                  endDate: "May 5, 2025",
                  prizePool: "10,000 MVH",
                  prizeUsd: "$8,500",
                  participants: 186,
                  status: "upcoming",
                  daysLeft: 12,
                  maxParticipants: 300,
                  entryFee: "5 MVH",
                  skillLevel: "Intermediate",
                  description: "Battle in the arena and prove your worth as the ultimate hero!",
                },
                {
                  id: 3,
                  title: "CryptoClash War",
                  game: "CryptoClash",
                  image: "/placeholder.svg?height=300&width=500",
                  startDate: "Apr 20, 2025",
                  endDate: "Apr 27, 2025",
                  prizePool: "2,500 CCT",
                  prizeUsd: "$3,125",
                  participants: 310,
                  status: "active",
                  daysLeft: 0,
                  maxParticipants: 400,
                  entryFee: "Free",
                  skillLevel: "All levels",
                  description: "Join the war and conquer your enemies to claim the ultimate prize!",
                },
              ].map((tournament) => (
                <Card key={tournament.id} className="game-card overflow-hidden bg-card border-border h-full">
                  <div className="relative h-40">
                    <Image
                      src={tournament.image || "/placeholder.svg"}
                      alt={tournament.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge
                        className={
                          tournament.status === "active"
                            ? "bg-green-500"
                            : tournament.status === "upcoming"
                              ? "bg-primary"
                              : "bg-muted"
                        }
                      >
                        {tournament.status === "active"
                          ? "Live Now"
                          : tournament.status === "upcoming"
                            ? `In ${tournament.daysLeft} days`
                            : "Completed"}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Trophy className="h-5 w-5 text-yellow-400" />
                      <div className="font-semibold">{tournament.title}</div>
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">Game: {tournament.game}</div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Date
                        </div>
                        <div className="text-sm">
                          {tournament.startDate} - {tournament.endDate}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          Participants
                        </div>
                        <div className="text-sm">
                          {tournament.participants}/{tournament.maxParticipants}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between items-center">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                        <Wallet className="h-3 w-3" />
                        Prize Pool
                      </div>
                      <div className="font-medium">
                        {tournament.prizePool}
                        <span className="text-xs text-muted-foreground ml-1">(≈{tournament.prizeUsd})</span>
                      </div>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" disabled={registered.includes(tournament.id)}>
                          {registered.includes(tournament.id)
                            ? "Registered"
                            : tournament.status === "active"
                              ? "Join Now"
                              : tournament.status === "upcoming"
                                ? "Register"
                                : "View Results"}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Register for Tournament</DialogTitle>
                          <DialogDescription>
                            Join the {tournament.title} and compete for {tournament.prizePool}!
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid gap-2">
                            <Label htmlFor="username">Game Username</Label>
                            <Input id="username" placeholder="Enter your in-game username" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="team">Team Name (Optional)</Label>
                            <Input id="team" placeholder="Enter your team name if applicable" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="region">Region</Label>
                            <Select defaultValue="global">
                              <SelectTrigger id="region">
                                <SelectValue placeholder="Select your region" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="global">Global</SelectItem>
                                <SelectItem value="na">North America</SelectItem>
                                <SelectItem value="eu">Europe</SelectItem>
                                <SelectItem value="asia">Asia</SelectItem>
                                <SelectItem value="sa">South America</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <label
                              htmlFor="terms"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              I agree to the tournament rules and terms
                            </label>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit" onClick={() => handleRegister(tournament.id)} disabled={registering}>
                            {registering ? "Registering..." : "Register Now"}
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
