import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"

export default function MyGamesPage() {
  const myGames = [
    {
      id: 1,
      title: "CryptoRacer",
      image: "/placeholder.svg?height=300&width=400",
      category: "Racing",
      status: "Live",
      players: 1240,
      earnings: "$1,250.50",
      blockchain: "Ethereum",
    },
    {
      id: 2,
      title: "NFT Legends",
      image: "/placeholder.svg?height=300&width=400",
      category: "Card Game",
      status: "Under Review",
      players: 0,
      earnings: "$0.00",
      blockchain: "Polygon",
    },
  ]

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">My Games</h1>
          <p className="text-muted-foreground">Manage your published games and track their performance</p>
        </div>

        <Link href="/submit-game">
          <Button>Submit New Game</Button>
        </Link>
      </div>

      <Tabs defaultValue="games" className="mb-8">
        <TabsList>
          <TabsTrigger value="games">Games</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="rewards">Rewards</TabsTrigger>
        </TabsList>

        <div className="flex items-center justify-between my-6">
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 5h16v14H4V5z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 9h6M9 13h6M9 17h6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Input placeholder="Search games..." className="w-64" />
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              Filter
            </Button>
          </div>
        </div>

        <TabsContent value="games">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myGames.map((game) => (
              <Card key={game.id} className="game-card overflow-hidden bg-card border-border h-full">
                <div className="relative h-40">
                  <Image src={game.image || "/placeholder.svg"} alt={game.title} fill className="object-cover" />
                  <div className="absolute top-2 right-2">
                    <Badge className={game.status === "Live" ? "bg-green-500" : "bg-yellow-500"}>{game.status}</Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-semibold">{game.title}</div>
                    <Badge variant="secondary" className="text-xs">
                      {game.category}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Players</p>
                      <p className="font-medium">{game.players.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Earnings</p>
                      <p className="font-medium">{game.earnings}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Blockchain</p>
                      <p className="font-medium">{game.blockchain}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Status</p>
                      <p className="font-medium">{game.status}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <Button size="sm" variant="outline">
                    Edit
                  </Button>
                  <Button size="sm">View Analytics</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="projects">
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 5v14M5 12h14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">No Projects Yet</h3>
            <p className="text-muted-foreground mb-4">Start a new project to develop your next web3 game</p>
            <Button>Create New Project</Button>
          </div>
        </TabsContent>

        <TabsContent value="rewards">
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 15c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">No Rewards Yet</h3>
            <p className="text-muted-foreground mb-4">
              Your earnings will appear here once your games start generating revenue
            </p>
            <Button variant="outline">View Payout Settings</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
