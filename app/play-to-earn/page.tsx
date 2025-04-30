import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PlayToEarnPage() {
  const games = [
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
  ]

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Play-to-Earn Games</h1>
        <p className="text-muted-foreground">
          Discover games that allow you to earn cryptocurrency while playing. Connect your wallet to start earning.
        </p>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All Games</TabsTrigger>
          <TabsTrigger value="racing">Racing</TabsTrigger>
          <TabsTrigger value="rpg">RPG</TabsTrigger>
          <TabsTrigger value="strategy">Strategy</TabsTrigger>
          <TabsTrigger value="simulation">Simulation</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
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
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                          stroke="currentColor"
                          fill="currentColor"
                        />
                        <path
                          d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                          stroke="currentColor"
                          fill="currentColor"
                        />
                      </svg>
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

        <TabsContent value="racing" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games
              .filter((game) => game.category === "Racing")
              .map((game) => (
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
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                            stroke="currentColor"
                            fill="currentColor"
                          />
                          <path
                            d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                            stroke="currentColor"
                            fill="currentColor"
                          />
                        </svg>
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

        {/* Other tab contents would follow the same pattern */}
      </Tabs>
    </div>
  )
}
