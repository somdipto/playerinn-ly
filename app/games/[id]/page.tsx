import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Star, Users, Share2, Heart, MessageSquare, Wallet, Trophy, BarChart3 } from "lucide-react"

export default function GamePage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch this data based on the ID
  const game = {
    id: params.id,
    title: "CryptoRacer",
    developer: "SpeedLabs",
    image: "/placeholder.svg?height=500&width=1000",
    category: "Racing",
    blockchain: "Ethereum",
    description:
      "CryptoRacer is a high-octane racing game built on the Ethereum blockchain. Race against other players in futuristic vehicles across stunning tracks and earn cryptocurrency based on your performance. Customize your car with NFT parts, join racing leagues, and climb the global leaderboards.",
    earnings: "$5-20/day",
    players: 1240,
    rating: 4.8,
    reviews: 156,
    tokenSymbol: "RACE",
    tokenPrice: "$0.85",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    features: [
      "Race-to-earn mechanics",
      "NFT vehicle customization",
      "Weekly tournaments with prize pools",
      "Cross-chain compatibility",
      "In-game marketplace",
    ],
    tokenomics:
      "RACE token is the native currency of CryptoRacer. Players earn RACE by winning races, completing challenges, and participating in tournaments. The token can be staked for passive income, used to purchase in-game items, or traded on exchanges.",
    team: [
      {
        name: "Alex Johnson",
        role: "Lead Developer",
        avatar: "/placeholder.svg?height=64&width=64",
      },
      {
        name: "Sarah Chen",
        role: "Game Designer",
        avatar: "/placeholder.svg?height=64&width=64",
      },
      {
        name: "Michael Rodriguez",
        role: "Blockchain Engineer",
        avatar: "/placeholder.svg?height=64&width=64",
      },
    ],
  }

  return (
    <div className="flex flex-col min-h-full">
      <div className="relative h-64 md:h-80 w-full">
        <Image src={game.image || "/placeholder.svg"} alt={game.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute top-4 left-4">
          <Link href="/">
            <Button variant="outline" size="sm" className="gap-1">
              <ChevronLeft className="h-4 w-4" />
              Back
            </Button>
          </Link>
        </div>
        <div className="absolute bottom-4 left-6 right-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{game.title}</h1>
          <div className="flex items-center gap-4 flex-wrap">
            <Badge className="bg-primary hover:bg-primary/80">Earn {game.earnings}</Badge>
            <Badge variant="secondary">{game.category}</Badge>
            <Badge variant="secondary">{game.blockchain}</Badge>
            <div className="flex items-center gap-1 text-sm">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>{game.rating}</span>
              <span className="text-muted-foreground">({game.reviews} reviews)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 p-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <Tabs defaultValue="overview" className="mb-8">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="tokenomics">Tokenomics</TabsTrigger>
                <TabsTrigger value="team">Team</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <div className="grid gap-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">About</h2>
                    <p className="text-muted-foreground">{game.description}</p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-4">Screenshots</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {game.screenshots.map((screenshot, index) => (
                        <div key={index} className="relative h-40 rounded-md overflow-hidden">
                          <Image
                            src={screenshot || "/placeholder.svg"}
                            alt={`${game.title} screenshot ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-4">Features</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {game.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20 6L9 17l-5-5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="tokenomics" className="mt-6">
                <div className="grid gap-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">Token Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardContent className="p-6">
                          <div className="text-sm text-muted-foreground mb-1">Token Symbol</div>
                          <div className="text-xl font-semibold">{game.tokenSymbol}</div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-6">
                          <div className="text-sm text-muted-foreground mb-1">Current Price</div>
                          <div className="text-xl font-semibold">{game.tokenPrice}</div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-6">
                          <div className="text-sm text-muted-foreground mb-1">Blockchain</div>
                          <div className="text-xl font-semibold">{game.blockchain}</div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-2">Tokenomics</h2>
                    <p className="text-muted-foreground mb-4">{game.tokenomics}</p>

                    <div className="relative h-64 bg-muted rounded-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <BarChart3 className="h-16 w-16 text-muted-foreground" />
                      </div>
                      <div className="absolute bottom-4 left-0 right-0 text-center text-muted-foreground">
                        Token distribution chart
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="team" className="mt-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Development Team</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {game.team.map((member, index) => (
                      <Card key={index}>
                        <CardContent className="p-6 flex flex-col items-center text-center">
                          <Avatar className="h-20 w-20 mb-4">
                            <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                            <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="font-semibold mb-1">{member.name}</div>
                          <div className="text-sm text-muted-foreground">{member.role}</div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Player Reviews</h2>
                  <Button size="sm">Write a Review</Button>
                </div>

                <div className="grid gap-6">
                  {[1, 2, 3].map((review) => (
                    <Card key={review}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                            <AvatarFallback>U</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div className="font-semibold">Anonymous Player</div>
                              <div className="flex items-center">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                            </div>
                            <p className="text-muted-foreground mb-2">
                              This game is amazing! I've been earning consistently every day and the gameplay is
                              actually fun. The developers are constantly adding new features and the community is
                              great.
                            </p>
                            <div className="text-xs text-muted-foreground">Posted 3 days ago</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="w-full md:w-80 space-y-6">
            <Card>
              <CardContent className="p-6 space-y-6">
                <Button className="w-full gap-2">
                  <Wallet className="h-4 w-4" />
                  Play Now
                </Button>

                <div className="flex items-center justify-between">
                  <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Players</div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{game.players.toLocaleString()}</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Earnings</div>
                      <div className="flex items-center gap-1">
                        <Wallet className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{game.earnings}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Upcoming Tournament</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Trophy className="h-5 w-5 text-yellow-400" />
                    <div>
                      <div className="font-medium">Weekend Championship</div>
                      <div className="text-sm text-muted-foreground">Prize pool: 5,000 RACE</div>
                    </div>
                  </div>
                  <div className="text-sm">
                    <div className="flex justify-between mb-1">
                      <span>Starts in:</span>
                      <span>2 days 14 hours</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Register Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Developer</h3>
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt={game.developer} />
                    <AvatarFallback>{game.developer.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{game.developer}</div>
                    <div className="text-sm text-muted-foreground">Verified Publisher</div>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  View All Games
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
