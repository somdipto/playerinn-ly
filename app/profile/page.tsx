"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import { useWallet } from "@/components/connect-wallet-button"
import { toast } from "@/hooks/use-toast"
import {
  Settings,
  Trophy,
  GamepadIcon,
  BarChart3,
  Clock,
  Wallet,
  Edit,
  Save,
  Camera,
  Globe,
  Mail,
  Twitter,
  Github,
  Loader2,
  CheckCircle,
  Copy,
  Gamepad2,
  Sparkles,
  Calendar,
  Users,
  Zap,
  TrendingUp,
} from "lucide-react"

// Simulated user data
const mockUserData = {
  id: "user123",
  username: "CryptoGamer",
  displayName: "Crypto Gamer",
  bio: "Professional web3 gamer and NFT collector. I love playing CryptoRacer and MetaVerse Heroes!",
  avatar: "/placeholder.svg?height=200&width=200",
  banner: "/placeholder.svg?height=400&width=1200",
  email: "cryptogamer@example.com",
  twitter: "@cryptogamer",
  github: "cryptogamer",
  website: "https://cryptogamer.io",
  joinedDate: "April 2023",
  level: 42,
  xp: 8750,
  xpToNextLevel: 10000,
  totalEarnings: 1250.75,
  gamesPlayed: 156,
  tournamentsWon: 7,
  achievements: [
    {
      id: 1,
      name: "Early Adopter",
      description: "Joined playerinn in the first month",
      icon: <Sparkles className="h-5 w-5 text-yellow-400" />,
      date: "Apr 15, 2023",
      rarity: "Rare",
    },
    {
      id: 2,
      name: "Tournament Champion",
      description: "Won a major tournament",
      icon: <Trophy className="h-5 w-5 text-yellow-400" />,
      date: "Jun 22, 2023",
      rarity: "Epic",
    },
    {
      id: 3,
      name: "Crypto Millionaire",
      description: "Earned over 1,000 tokens",
      icon: <Wallet className="h-5 w-5 text-yellow-400" />,
      date: "Aug 10, 2023",
      rarity: "Legendary",
    },
    {
      id: 4,
      name: "Social Butterfly",
      description: "Connected with 50+ players",
      icon: <Users className="h-5 w-5 text-yellow-400" />,
      date: "Sep 5, 2023",
      rarity: "Uncommon",
    },
    {
      id: 5,
      name: "Game Master",
      description: "Played 100+ games",
      icon: <Gamepad2 className="h-5 w-5 text-yellow-400" />,
      date: "Oct 18, 2023",
      rarity: "Rare",
    },
  ],
  recentGames: [
    {
      id: 1,
      name: "CryptoRacer",
      image: "/placeholder.svg?height=100&width=100",
      lastPlayed: "2 hours ago",
      hoursPlayed: 78,
      earnings: 450.25,
      rank: "#12",
    },
    {
      id: 2,
      name: "MetaVerse Heroes",
      image: "/placeholder.svg?height=100&width=100",
      lastPlayed: "Yesterday",
      hoursPlayed: 124,
      earnings: 680.5,
      rank: "#5",
    },
    {
      id: 3,
      name: "NFT Legends",
      image: "/placeholder.svg?height=100&width=100",
      lastPlayed: "3 days ago",
      hoursPlayed: 45,
      earnings: 120.0,
      rank: "#87",
    },
  ],
  tournaments: [
    {
      id: 1,
      name: "CryptoRacer Championship",
      date: "Jun 22, 2023",
      position: "1st",
      prize: "500 RACE",
      participants: 128,
    },
    {
      id: 2,
      name: "MetaVerse Heroes Arena",
      date: "Aug 15, 2023",
      position: "3rd",
      prize: "200 MVH",
      participants: 64,
    },
    {
      id: 3,
      name: "NFT Legends Masters",
      date: "Oct 5, 2023",
      position: "5th",
      prize: "100 NFTL",
      participants: 32,
    },
    {
      id: 4,
      name: "Web3 Gaming League",
      date: "Nov 12, 2023",
      position: "2nd",
      prize: "300 WGL",
      participants: 256,
    },
  ],
  nfts: [
    {
      id: 1,
      name: "Golden Racer",
      image: "/placeholder.svg?height=150&width=150",
      game: "CryptoRacer",
      rarity: "Legendary",
      acquired: "Jul 10, 2023",
    },
    {
      id: 2,
      name: "Hero Sword",
      image: "/placeholder.svg?height=150&width=150",
      game: "MetaVerse Heroes",
      rarity: "Epic",
      acquired: "Aug 22, 2023",
    },
    {
      id: 3,
      name: "Mystic Card",
      image: "/placeholder.svg?height=150&width=150",
      game: "NFT Legends",
      rarity: "Rare",
      acquired: "Sep 15, 2023",
    },
  ],
  friends: [
    {
      id: 1,
      username: "CryptoKing",
      avatar: "/placeholder.svg?height=50&width=50",
      status: "online",
    },
    {
      id: 2,
      username: "BlockchainQueen",
      avatar: "/placeholder.svg?height=50&width=50",
      status: "online",
    },
    {
      id: 3,
      username: "NFTHunter",
      avatar: "/placeholder.svg?height=50&width=50",
      status: "offline",
    },
    {
      id: 4,
      username: "TokenMaster",
      avatar: "/placeholder.svg?height=50&width=50",
      status: "idle",
    },
  ],
}

export default function ProfilePage() {
  const [userData, setUserData] = useState(mockUserData)
  const [isEditing, setIsEditing] = useState(false)
  const [editedData, setEditedData] = useState(mockUserData)
  const [isSaving, setIsSaving] = useState(false)
  const [copied, setCopied] = useState(false)
  const wallet = useWallet()

  // Load user data from localStorage on component mount
  useEffect(() => {
    const savedUserData = localStorage.getItem("playerinn_user_data")
    if (savedUserData) {
      try {
        const parsedData = JSON.parse(savedUserData)
        setUserData(parsedData)
        setEditedData(parsedData)
      } catch (error) {
        console.error("Failed to parse user data:", error)
      }
    }
  }, [])

  const handleEditToggle = () => {
    if (isEditing) {
      // Cancel editing
      setEditedData(userData)
    }
    setIsEditing(!isEditing)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEditedData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSaveProfile = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Update user data
    setUserData(editedData)

    // Save to localStorage
    localStorage.setItem("playerinn_user_data", JSON.stringify(editedData))

    setIsSaving(false)
    setIsEditing(false)

    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    })
  }

  const copyWalletAddress = () => {
    if (wallet.address) {
      navigator.clipboard.writeText(wallet.address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="p-6">
      {/* Banner and Profile Info */}
      <div className="relative mb-20">
        <div className="h-48 w-full rounded-xl overflow-hidden relative">
          <Image src={userData.banner || "/placeholder.svg"} alt="Profile Banner" fill className="object-cover" />
          {isEditing && (
            <Button variant="secondary" size="sm" className="absolute bottom-2 right-2 gap-1">
              <Camera className="h-4 w-4" />
              Change Banner
            </Button>
          )}
        </div>

        <div className="absolute -bottom-16 left-6 flex items-end">
          <div className="relative">
            <Avatar className="h-32 w-32 border-4 border-background">
              <AvatarImage src={userData.avatar || "/placeholder.svg"} alt={userData.displayName} />
              <AvatarFallback>{userData.displayName.charAt(0)}</AvatarFallback>
            </Avatar>
            {isEditing && (
              <Button variant="secondary" size="sm" className="absolute bottom-0 right-0 rounded-full h-8 w-8 p-0">
                <Camera className="h-4 w-4" />
              </Button>
            )}
          </div>
          <div className="mb-4 ml-4">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">{userData.displayName}</h1>
              <Badge variant="secondary" className="gap-1">
                <Zap className="h-3 w-3" />
                Level {userData.level}
              </Badge>
            </div>
            <p className="text-muted-foreground">@{userData.username}</p>
          </div>
        </div>

        <div className="absolute -bottom-16 right-6 flex items-center gap-2">
          {isEditing ? (
            <>
              <Button variant="outline" onClick={handleEditToggle}>
                Cancel
              </Button>
              <Button onClick={handleSaveProfile} disabled={isSaving}>
                {isSaving ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save Profile
                  </>
                )}
              </Button>
            </>
          ) : (
            <Button onClick={handleEditToggle}>
              <Edit className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* About */}
          <Card>
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <Textarea name="bio" value={editedData.bio} onChange={handleInputChange} className="min-h-[100px]" />
              ) : (
                <p className="text-muted-foreground">{userData.bio}</p>
              )}

              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Joined {userData.joinedDate}</span>
                </div>

                {wallet.isConnected && (
                  <div className="flex items-center gap-2">
                    <Wallet className="h-4 w-4 text-muted-foreground" />
                    <div className="flex items-center gap-1">
                      <span className="text-sm truncate max-w-[180px]">
                        {wallet.address.slice(0, 6) + "..." + wallet.address.slice(-4)}
                      </span>
                      <Button variant="ghost" size="icon" onClick={copyWalletAddress} className="h-6 w-6">
                        {copied ? <CheckCircle className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
                      </Button>
                    </div>
                  </div>
                )}

                {isEditing ? (
                  <>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <Input
                        name="email"
                        value={editedData.email}
                        onChange={handleInputChange}
                        className="h-8"
                        placeholder="Email"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <Twitter className="h-4 w-4 text-muted-foreground" />
                      <Input
                        name="twitter"
                        value={editedData.twitter}
                        onChange={handleInputChange}
                        className="h-8"
                        placeholder="Twitter handle"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <Github className="h-4 w-4 text-muted-foreground" />
                      <Input
                        name="github"
                        value={editedData.github}
                        onChange={handleInputChange}
                        className="h-8"
                        placeholder="GitHub username"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <Input
                        name="website"
                        value={editedData.website}
                        onChange={handleInputChange}
                        className="h-8"
                        placeholder="Website URL"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {userData.email && (
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{userData.email}</span>
                      </div>
                    )}
                    {userData.twitter && (
                      <div className="flex items-center gap-2">
                        <Twitter className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{userData.twitter}</span>
                      </div>
                    )}
                    {userData.github && (
                      <div className="flex items-center gap-2">
                        <Github className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{userData.github}</span>
                      </div>
                    )}
                    {userData.website && (
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{userData.website}</span>
                      </div>
                    )}
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Level & XP */}
          <Card>
            <CardHeader>
              <CardTitle>Level & XP</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Badge className="bg-primary text-white">Level {userData.level}</Badge>
                  <span className="text-sm text-muted-foreground">
                    {userData.xp} / {userData.xpToNextLevel} XP
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {userData.xpToNextLevel - userData.xp} XP to Level {userData.level + 1}
                </span>
              </div>
              <Progress value={(userData.xp / userData.xpToNextLevel) * 100} className="h-2" />

              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div className="bg-secondary/30 rounded-lg p-3">
                  <div className="text-2xl font-bold">{userData.gamesPlayed}</div>
                  <div className="text-xs text-muted-foreground">Games Played</div>
                </div>
                <div className="bg-secondary/30 rounded-lg p-3">
                  <div className="text-2xl font-bold">{userData.tournamentsWon}</div>
                  <div className="text-xs text-muted-foreground">Tournaments Won</div>
                </div>
                <div className="bg-secondary/30 rounded-lg p-3">
                  <div className="text-2xl font-bold">${userData.totalEarnings.toFixed(2)}</div>
                  <div className="text-xs text-muted-foreground">Total Earnings</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
              <CardDescription>Unlocked {userData.achievements.length} achievements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {userData.achievements.map((achievement) => (
                  <div key={achievement.id} className="flex items-center gap-3 bg-secondary/20 p-3 rounded-lg">
                    <div className="h-10 w-10 rounded-full bg-secondary/30 flex items-center justify-center">
                      {achievement.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{achievement.name}</h4>
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            achievement.rarity === "Legendary"
                              ? "border-yellow-500 text-yellow-500"
                              : achievement.rarity === "Epic"
                                ? "border-purple-500 text-purple-500"
                                : achievement.rarity === "Rare"
                                  ? "border-blue-500 text-blue-500"
                                  : "border-gray-500 text-gray-500"
                          }`}
                        >
                          {achievement.rarity}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">Unlocked: {achievement.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Friends */}
          <Card>
            <CardHeader>
              <CardTitle>Friends</CardTitle>
              <CardDescription>Connected with {userData.friends.length} players</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {userData.friends.map((friend) => (
                  <div key={friend.id} className="flex items-center gap-2">
                    <div className="relative">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={friend.avatar || "/placeholder.svg"} alt={friend.username} />
                        <AvatarFallback>{friend.username.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span
                        className={`absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full ${
                          friend.status === "online"
                            ? "bg-green-500"
                            : friend.status === "idle"
                              ? "bg-yellow-500"
                              : "bg-gray-500"
                        } ring-1 ring-background`}
                      ></span>
                    </div>
                    <span className="text-sm font-medium truncate">{friend.username}</span>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Friends
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="games">
            <TabsList className="grid grid-cols-4 mb-4">
              <TabsTrigger value="games" className="flex items-center gap-1">
                <GamepadIcon className="h-4 w-4" />
                Games
              </TabsTrigger>
              <TabsTrigger value="tournaments" className="flex items-center gap-1">
                <Trophy className="h-4 w-4" />
                Tournaments
              </TabsTrigger>
              <TabsTrigger value="nfts" className="flex items-center gap-1">
                <Sparkles className="h-4 w-4" />
                NFTs
              </TabsTrigger>
              <TabsTrigger value="stats" className="flex items-center gap-1">
                <BarChart3 className="h-4 w-4" />
                Stats
              </TabsTrigger>
            </TabsList>

            <TabsContent value="games">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Games</CardTitle>
                  <CardDescription>Games you've played recently</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userData.recentGames.map((game) => (
                      <div key={game.id} className="flex items-center gap-4 p-3 bg-secondary/20 rounded-lg">
                        <Image
                          src={game.image || "/placeholder.svg"}
                          alt={game.name}
                          width={60}
                          height={60}
                          className="rounded-md"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium">{game.name}</h4>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            <span>Last played: {game.lastPlayed}</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-xs text-muted-foreground">Hours</div>
                            <div className="font-medium">{game.hoursPlayed}</div>
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground">Earnings</div>
                            <div className="font-medium text-primary">${game.earnings.toFixed(2)}</div>
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground">Rank</div>
                            <div className="font-medium">{game.rank}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View All Games
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tournaments">
              <Card>
                <CardHeader>
                  <CardTitle>Tournament History</CardTitle>
                  <CardDescription>Your tournament participation and results</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userData.tournaments.map((tournament) => (
                      <div key={tournament.id} className="flex items-center gap-4 p-3 bg-secondary/20 rounded-lg">
                        <div className="h-12 w-12 rounded-full bg-secondary/30 flex items-center justify-center">
                          <Trophy
                            className={`h-6 w-6 ${
                              tournament.position === "1st"
                                ? "text-yellow-400"
                                : tournament.position === "2nd"
                                  ? "text-gray-400"
                                  : tournament.position === "3rd"
                                    ? "text-amber-700"
                                    : "text-muted-foreground"
                            }`}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium">{tournament.name}</h4>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span>{tournament.date}</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-xs text-muted-foreground">Position</div>
                            <div
                              className={`font-medium ${
                                tournament.position === "1st"
                                  ? "text-yellow-400"
                                  : tournament.position === "2nd"
                                    ? "text-gray-400"
                                    : tournament.position === "3rd"
                                      ? "text-amber-700"
                                      : ""
                              }`}
                            >
                              {tournament.position}
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground">Prize</div>
                            <div className="font-medium text-primary">{tournament.prize}</div>
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground">Players</div>
                            <div className="font-medium">{tournament.participants}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View All Tournaments
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="nfts">
              <Card>
                <CardHeader>
                  <CardTitle>NFT Collection</CardTitle>
                  <CardDescription>Your in-game NFTs and collectibles</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {userData.nfts.map((nft) => (
                      <div key={nft.id} className="bg-secondary/20 rounded-lg overflow-hidden">
                        <div className="relative h-40 w-full">
                          <Image src={nft.image || "/placeholder.svg"} alt={nft.name} fill className="object-cover" />
                        </div>
                        <div className="p-3">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium">{nft.name}</h4>
                            <Badge
                              variant="outline"
                              className={`text-xs ${
                                nft.rarity === "Legendary"
                                  ? "border-yellow-500 text-yellow-500"
                                  : nft.rarity === "Epic"
                                    ? "border-purple-500 text-purple-500"
                                    : nft.rarity === "Rare"
                                      ? "border-blue-500 text-blue-500"
                                      : "border-gray-500 text-gray-500"
                              }`}
                            >
                              {nft.rarity}
                            </Badge>
                          </div>
                          <div className="text-xs text-muted-foreground">Game: {nft.game}</div>
                          <div className="text-xs text-muted-foreground">Acquired: {nft.acquired}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View All NFTs
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="stats">
              <Card>
                <CardHeader>
                  <CardTitle>Gaming Statistics</CardTitle>
                  <CardDescription>Your performance across all games</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-secondary/30 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold">{userData.gamesPlayed}</div>
                      <div className="text-sm text-muted-foreground">Games Played</div>
                    </div>
                    <div className="bg-secondary/30 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold">{userData.tournamentsWon}</div>
                      <div className="text-sm text-muted-foreground">Tournaments Won</div>
                    </div>
                    <div className="bg-secondary/30 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold">${userData.totalEarnings.toFixed(2)}</div>
                      <div className="text-sm text-muted-foreground">Total Earnings</div>
                    </div>
                    <div className="bg-secondary/30 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold">{userData.level}</div>
                      <div className="text-sm text-muted-foreground">Player Level</div>
                    </div>
                  </div>

                  <h3 className="text-lg font-medium mb-3">Game Performance</h3>
                  <div className="space-y-4">
                    {userData.recentGames.map((game) => (
                      <div key={game.id} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Image
                              src={game.image || "/placeholder.svg"}
                              alt={game.name}
                              width={24}
                              height={24}
                              className="rounded-md"
                            />
                            <span className="font-medium">{game.name}</span>
                          </div>
                          <span className="text-sm">{game.hoursPlayed} hours played</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 bg-secondary/30 rounded-full flex-1">
                            <div
                              className="h-2 bg-primary rounded-full"
                              style={{ width: `${Math.min(100, (game.hoursPlayed / 200) * 100)}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-muted-foreground">${game.earnings.toFixed(2)} earned</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-lg font-medium mt-6 mb-3">Earnings Over Time</h3>
                  <div className="h-48 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    Earnings chart visualization (placeholder)
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Account Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Email Notifications</h4>
                    <p className="text-sm text-muted-foreground">Receive email updates about tournaments and events</p>
                  </div>
                  <Switch checked={true} />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Two-Factor Authentication</h4>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Enable
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Privacy Settings</h4>
                    <p className="text-sm text-muted-foreground">Control who can see your profile and activity</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Configure
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Connected Accounts</h4>
                    <p className="text-sm text-muted-foreground">Manage your connected social accounts</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Manage
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
