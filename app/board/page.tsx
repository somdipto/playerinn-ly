import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Rocket, MessageSquare, Users, Trophy, Calendar, Clock } from "lucide-react"

export default function BoardPage() {
  const topPlayers = [
    {
      id: 1,
      name: "CryptoKing",
      avatar: "/placeholder.svg?height=40&width=40",
      earnings: "$12,450",
      games: 156,
      winRate: "68%",
      rank: 1,
    },
    {
      id: 2,
      name: "BlockchainQueen",
      avatar: "/placeholder.svg?height=40&width=40",
      earnings: "$10,280",
      games: 142,
      winRate: "65%",
      rank: 2,
    },
    {
      id: 3,
      name: "NFTHunter",
      avatar: "/placeholder.svg?height=40&width=40",
      earnings: "$8,920",
      games: 128,
      winRate: "62%",
      rank: 3,
    },
    {
      id: 4,
      name: "TokenMaster",
      avatar: "/placeholder.svg?height=40&width=40",
      earnings: "$7,840",
      games: 115,
      winRate: "59%",
      rank: 4,
    },
    {
      id: 5,
      name: "CryptoNinja",
      avatar: "/placeholder.svg?height=40&width=40",
      earnings: "$6,750",
      games: 98,
      winRate: "57%",
      rank: 5,
    },
  ]

  const communityEvents = [
    {
      id: 1,
      title: "ODHack #13",
      status: "Coming soon",
      registered: 244,
      availableIssues: "0/0",
      projects: 8,
      endsIn: "18 days",
      startDate: "24 Apr, 2025",
      startTime: "6:30PM (GMT+5:30)",
      endDate: "4 May, 2025",
      endTime: "5:58PM (GMT+5:30)",
      location: "Worldwide",
    },
    {
      id: 2,
      title: "ODHack #12",
      status: "Closed",
      registered: 210,
      availableIssues: "0/0",
      projects: 6,
      endsIn: "0 days",
      startDate: "10 Mar, 2025",
      startTime: "6:30PM (GMT+5:30)",
      endDate: "20 Mar, 2025",
      endTime: "5:58PM (GMT+5:30)",
      location: "Worldwide",
    },
    {
      id: 3,
      title: "ODBuild",
      status: "Closed",
      registered: 180,
      availableIssues: "0/0",
      projects: 5,
      endsIn: "0 days",
      startDate: "15 Feb, 2025",
      startTime: "6:30PM (GMT+5:30)",
      endDate: "25 Feb, 2025",
      endTime: "5:58PM (GMT+5:30)",
      location: "Worldwide",
    },
  ]

  const chatMessages = [
    {
      id: 1,
      user: "CryptoKing",
      avatar: "/placeholder.svg?height=40&width=40",
      message: "Hey everyone! Who's joining the tournament this weekend?",
      time: "10:30 AM",
    },
    {
      id: 2,
      user: "BlockchainQueen",
      avatar: "/placeholder.svg?height=40&width=40",
      message: "I'll be there! Looking forward to defending my title.",
      time: "10:32 AM",
    },
    {
      id: 3,
      user: "NFTHunter",
      avatar: "/placeholder.svg?height=40&width=40",
      message: "Count me in! Has anyone tried the new CryptoRacer update?",
      time: "10:35 AM",
    },
    {
      id: 4,
      user: "TokenMaster",
      avatar: "/placeholder.svg?height=40&width=40",
      message: "Yeah, the new tracks are amazing! Much better rewards too.",
      time: "10:38 AM",
    },
    {
      id: 5,
      user: "CryptoNinja",
      avatar: "/placeholder.svg?height=40&width=40",
      message: "I'm still learning the new mechanics. Anyone want to practice later?",
      time: "10:40 AM",
    },
  ]

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
          <Rocket className="h-8 w-8 text-primary" />
          Community Board
        </h1>
        <p className="text-muted-foreground">Connect with other players, join events, and check the leaderboards</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M12 6V18M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Community Voice Stage
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Join the voice stage to meet the whole community at a single place
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Community" />
                    <AvatarFallback>CM</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Daily Community Meetup</div>
                    <div className="text-sm text-muted-foreground">24 members online</div>
                  </div>
                </div>
                <Button>Join Voice Chat</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6 overflow-hidden border-purple-500/20">
            <CardHeader className="pb-3 border-b border-border">
              <CardTitle className="text-xl flex items-center gap-2">
                <Avatar className="h-8 w-8 bg-purple-900">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="ODHack" />
                  <AvatarFallback>OH</AvatarFallback>
                </Avatar>
                ODHack #13
                <Badge className="ml-2 bg-purple-900">Coming soon</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid grid-cols-2 md:grid-cols-4 border-b border-border">
                <div className="p-4 border-r border-border">
                  <div className="text-sm text-muted-foreground">Registered</div>
                  <div className="flex items-center gap-1 font-medium">
                    <Users className="h-4 w-4 text-yellow-400" />
                    244
                  </div>
                </div>
                <div className="p-4 border-r border-border">
                  <div className="text-sm text-muted-foreground">Available issues</div>
                  <div className="flex items-center gap-1 font-medium">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                      <path d="M12 8V16M8 12H16" stroke="green" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    0/0
                  </div>
                </div>
                <div className="p-4 border-r border-border">
                  <div className="text-sm text-muted-foreground">Projects</div>
                  <div className="flex items-center gap-1 font-medium">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path d="M3 9H21" stroke="currentColor" strokeWidth="2" />
                      <path d="M9 21V9" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    8
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-sm text-muted-foreground">Ends in</div>
                  <div className="flex items-center gap-1 font-medium">
                    <Clock className="h-4 w-4" />
                    18 days
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-4 border-r border-border">
                  <div className="text-sm text-muted-foreground">Date</div>
                  <div className="font-medium flex items-center gap-2">
                    24 Apr, 2025
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19" stroke="purple" strokeWidth="2" strokeLinecap="round" />
                      <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path
                        d="M12 5L19 12L12 19"
                        stroke="purple"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    4 May, 2025
                  </div>
                  <div className="text-xs text-muted-foreground">6:30PM (GMT+5:30) - 5:58PM (GMT+5:30)</div>
                </div>
                <div className="p-4">
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="font-medium">Worldwide</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-xl flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Community Chat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-[400px] overflow-y-auto mb-4">
                {chatMessages.map((message) => (
                  <div key={message.id} className="flex gap-3">
                    <Avatar>
                      <AvatarImage src={message.avatar || "/placeholder.svg"} alt={message.user} />
                      <AvatarFallback>{message.user.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <div className="font-medium">{message.user}</div>
                        <div className="text-xs text-muted-foreground">{message.time}</div>
                      </div>
                      <p className="text-sm mt-1">{message.message}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Textarea placeholder="Type your message..." className="min-h-[60px]" />
                <Button className="shrink-0">Send</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="mb-6">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-400" />
                Top Players
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPlayers.map((player) => (
                  <div key={player.id} className="flex items-center gap-3">
                    <div className="w-6 text-center font-bold">{player.rank}</div>
                    <Avatar>
                      <AvatarImage src={player.avatar || "/placeholder.svg"} alt={player.name} />
                      <AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium">{player.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {player.games} games • {player.winRate} win rate
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-primary">{player.earnings}</div>
                      <div className="text-xs text-muted-foreground">earnings</div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View Full Leaderboard
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-xl flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {communityEvents.slice(0, 2).map((event) => (
                  <Card key={event.id} className="overflow-hidden">
                    <CardContent className="p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Avatar className="h-8 w-8 bg-black">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt={event.title} />
                          <AvatarFallback>{event.title.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="font-medium">{event.title}</div>
                        <Badge className="ml-auto bg-purple-900/80">{event.status}</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <div className="text-muted-foreground">Registered</div>
                          <div>{event.registered}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Projects</div>
                          <div>{event.projects}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Start Date</div>
                          <div>{event.startDate}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">End Date</div>
                          <div>{event.endDate}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Events
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
