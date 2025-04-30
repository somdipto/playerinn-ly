import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Calendar, Users, Wallet } from "lucide-react"

export default function TournamentsPage() {
  const tournaments = [
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
    },
    {
      id: 4,
      title: "NFT Legends Masters",
      game: "NFT Legends",
      image: "/placeholder.svg?height=300&width=500",
      startDate: "Apr 15, 2025",
      endDate: "Apr 22, 2025",
      prizePool: "15,000 NFTL",
      prizeUsd: "$12,750",
      participants: 428,
      status: "completed",
      daysLeft: 0,
    },
  ]

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Tournaments</h1>
        <p className="text-muted-foreground">Compete in tournaments to win crypto prizes and climb the leaderboards</p>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All Tournaments</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="my">My Tournaments</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tournaments.map((tournament) => (
              <Link href={`/tournaments/${tournament.id}`} key={tournament.id}>
                <Card className="game-card overflow-hidden bg-card border-border h-full">
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
                        <div className="text-sm">{tournament.participants}</div>
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
                    <Button size="sm">
                      {tournament.status === "active"
                        ? "Join Now"
                        : tournament.status === "upcoming"
                          ? "Register"
                          : "View Results"}
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
