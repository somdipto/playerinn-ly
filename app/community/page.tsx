"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  MessageSquare,
  Users,
  Search,
  PlusCircle,
  Send,
  Hash,
  UserPlus,
  Settings,
  Bell,
  MoreHorizontal,
  Phone,
  Video,
  Smile,
  Paperclip,
  ImageIcon,
  UserCircle,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function CommunityPage() {
  const [activeChat, setActiveChat] = useState<string | null>("general")
  const [message, setMessage] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const sendMessage = () => {
    if (message.trim()) {
      // In a real app, you would send the message to the server
      console.log("Sending message:", message)
      setMessage("")
    }
  }

  const publicChannels = [
    { id: "general", name: "general", unread: 3, members: 1240 },
    { id: "crypto-racer", name: "crypto-racer", unread: 0, members: 568 },
    { id: "metaverse-heroes", name: "metaverse-heroes", unread: 12, members: 782 },
    { id: "nft-legends", name: "nft-legends", unread: 0, members: 345 },
    { id: "tournaments", name: "tournaments", unread: 5, members: 890 },
  ]

  const privateGroups = [
    { id: "pro-gamers", name: "Pro Gamers", unread: 2, members: 8 },
    { id: "team-alpha", name: "Team Alpha", unread: 0, members: 5 },
    { id: "crypto-squad", name: "Crypto Squad", unread: 7, members: 12 },
  ]

  const directMessages = [
    {
      id: "user1",
      name: "CryptoKing",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "online",
      lastSeen: "now",
      unread: 3,
    },
    {
      id: "user2",
      name: "BlockchainQueen",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "online",
      lastSeen: "now",
      unread: 0,
    },
    {
      id: "user3",
      name: "NFTHunter",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "offline",
      lastSeen: "2h ago",
      unread: 0,
    },
    {
      id: "user4",
      name: "TokenMaster",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "idle",
      lastSeen: "30m ago",
      unread: 1,
    },
    {
      id: "user5",
      name: "CryptoNinja",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "offline",
      lastSeen: "1d ago",
      unread: 0,
    },
  ]

  const messages = [
    {
      id: 1,
      sender: "CryptoKing",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "Hey everyone! Who's joining the tournament this weekend?",
      time: "10:30 AM",
      isCurrentUser: false,
    },
    {
      id: 2,
      sender: "BlockchainQueen",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "I'll be there! Looking forward to defending my title.",
      time: "10:32 AM",
      isCurrentUser: false,
    },
    {
      id: 3,
      sender: "NFTHunter",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "Count me in! Has anyone tried the new CryptoRacer update?",
      time: "10:35 AM",
      isCurrentUser: false,
    },
    {
      id: 4,
      sender: "TokenMaster",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "Yeah, the new tracks are amazing! Much better rewards too.",
      time: "10:38 AM",
      isCurrentUser: false,
    },
    {
      id: 5,
      sender: "You",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "I'm still learning the new mechanics. Anyone want to practice later?",
      time: "10:40 AM",
      isCurrentUser: true,
    },
    {
      id: 6,
      sender: "CryptoKing",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "Sure, I can help you practice. Let's meet at 3 PM?",
      time: "10:42 AM",
      isCurrentUser: false,
    },
    {
      id: 7,
      sender: "You",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "Perfect! See you then.",
      time: "10:45 AM",
      isCurrentUser: true,
    },
  ]

  const filteredChannels = publicChannels.filter((channel) =>
    channel.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredGroups = privateGroups.filter((group) => group.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const filteredDMs = directMessages.filter((dm) => dm.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-64 border-r border-border bg-black/50 flex flex-col">
        <div className="p-3 border-b border-border">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-3">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-semibold text-muted-foreground">PUBLIC CHANNELS</h3>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-5 w-5">
                    <PlusCircle className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create a new channel</DialogTitle>
                    <DialogDescription>
                      Channels are where communities come together to discuss topics.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <label htmlFor="channel-name">Channel name</label>
                      <Input id="channel-name" placeholder="e.g. crypto-discussion" />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="channel-description">Description (optional)</label>
                      <Textarea id="channel-description" placeholder="What's this channel about?" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button>Create Channel</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            {filteredChannels.map((channel) => (
              <button
                key={channel.id}
                className={`flex items-center justify-between w-full rounded-md px-2 py-1.5 text-sm ${
                  activeChat === channel.id ? "bg-secondary text-white" : "text-muted-foreground hover:bg-secondary/50"
                }`}
                onClick={() => setActiveChat(channel.id)}
              >
                <div className="flex items-center gap-2">
                  <Hash className="h-4 w-4" />
                  <span>{channel.name}</span>
                </div>
                {channel.unread > 0 && (
                  <Badge variant="secondary" className="bg-primary text-white">
                    {channel.unread}
                  </Badge>
                )}
              </button>
            ))}

            <div className="flex items-center justify-between mt-4 mb-2">
              <h3 className="text-xs font-semibold text-muted-foreground">PRIVATE GROUPS</h3>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-5 w-5">
                    <PlusCircle className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create a private group</DialogTitle>
                    <DialogDescription>Invite specific people to join your private group.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <label htmlFor="group-name">Group name</label>
                      <Input id="group-name" placeholder="e.g. Tournament Team" />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="group-members">Add members</label>
                      <Input id="group-members" placeholder="Search for users..." />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button>Create Group</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            {filteredGroups.map((group) => (
              <button
                key={group.id}
                className={`flex items-center justify-between w-full rounded-md px-2 py-1.5 text-sm ${
                  activeChat === group.id ? "bg-secondary text-white" : "text-muted-foreground hover:bg-secondary/50"
                }`}
                onClick={() => setActiveChat(group.id)}
              >
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>{group.name}</span>
                </div>
                {group.unread > 0 && (
                  <Badge variant="secondary" className="bg-primary text-white">
                    {group.unread}
                  </Badge>
                )}
              </button>
            ))}

            <div className="flex items-center justify-between mt-4 mb-2">
              <h3 className="text-xs font-semibold text-muted-foreground">DIRECT MESSAGES</h3>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-5 w-5">
                    <PlusCircle className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>New message</DialogTitle>
                    <DialogDescription>Start a conversation with another player.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <label htmlFor="recipient">To:</label>
                      <Input id="recipient" placeholder="Search for a user..." />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button>Start Conversation</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            {filteredDMs.map((dm) => (
              <button
                key={dm.id}
                className={`flex items-center justify-between w-full rounded-md px-2 py-1.5 text-sm ${
                  activeChat === dm.id ? "bg-secondary text-white" : "text-muted-foreground hover:bg-secondary/50"
                }`}
                onClick={() => setActiveChat(dm.id)}
              >
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Avatar className="h-5 w-5">
                      <AvatarImage src={dm.avatar || "/placeholder.svg"} alt={dm.name} />
                      <AvatarFallback>{dm.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span
                      className={`absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full ${
                        dm.status === "online" ? "bg-green-500" : dm.status === "idle" ? "bg-yellow-500" : "bg-gray-500"
                      } ring-1 ring-background`}
                    ></span>
                  </div>
                  <span>{dm.name}</span>
                </div>
                {dm.unread > 0 && (
                  <Badge variant="secondary" className="bg-primary text-white">
                    {dm.unread}
                  </Badge>
                )}
              </button>
            ))}
          </div>
        </ScrollArea>

        <div className="p-3 border-t border-border">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium">Your Username</p>
              <p className="text-xs text-muted-foreground truncate">Online</p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <UserCircle className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Bell className="mr-2 h-4 w-4" />
                  <span>Notifications</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {activeChat ? (
          <>
            <div className="h-14 border-b border-border flex items-center justify-between px-4">
              <div className="flex items-center gap-2">
                {activeChat === "general" || publicChannels.some((c) => c.id === activeChat) ? (
                  <Hash className="h-5 w-5" />
                ) : privateGroups.some((g) => g.id === activeChat) ? (
                  <Users className="h-5 w-5" />
                ) : (
                  <Avatar className="h-6 w-6">
                    <AvatarImage
                      src={directMessages.find((dm) => dm.id === activeChat)?.avatar || "/placeholder.svg"}
                      alt="User"
                    />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                )}
                <div>
                  <h2 className="text-sm font-medium">
                    {activeChat === "general"
                      ? "general"
                      : publicChannels.find((c) => c.id === activeChat)?.name ||
                        privateGroups.find((g) => g.id === activeChat)?.name ||
                        directMessages.find((dm) => dm.id === activeChat)?.name}
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    {publicChannels.some((c) => c.id === activeChat)
                      ? `${publicChannels.find((c) => c.id === activeChat)?.members} members`
                      : privateGroups.some((g) => g.id === activeChat)
                        ? `${privateGroups.find((g) => g.id === activeChat)?.members} members`
                        : directMessages.find((dm) => dm.id === activeChat)?.status === "online"
                          ? "Online"
                          : `Last seen ${directMessages.find((dm) => dm.id === activeChat)?.lastSeen}`}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {directMessages.some((dm) => dm.id === activeChat) && (
                  <>
                    <Button variant="ghost" size="icon">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Video className="h-4 w-4" />
                    </Button>
                  </>
                )}
                <Button variant="ghost" size="icon">
                  <UserPlus className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Search className="h-4 w-4" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Mute notifications</DropdownMenuItem>
                    <DropdownMenuItem>Pin conversation</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-500">Leave channel</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex gap-3 ${msg.isCurrentUser ? "justify-end" : ""}`}>
                    {!msg.isCurrentUser && (
                      <Avatar>
                        <AvatarImage src={msg.avatar || "/placeholder.svg"} alt={msg.sender} />
                        <AvatarFallback>{msg.sender.charAt(0)}</AvatarFallback>
                      </Avatar>
                    )}
                    <div className={`max-w-[70%] ${msg.isCurrentUser ? "text-right" : ""}`}>
                      <div className="flex items-center gap-2 mb-1">
                        {!msg.isCurrentUser && <span className="font-medium text-sm">{msg.sender}</span>}
                        <span className="text-xs text-muted-foreground">{msg.time}</span>
                      </div>
                      <div
                        className={`rounded-lg px-3 py-2 text-sm ${
                          msg.isCurrentUser ? "bg-primary text-white" : "bg-secondary text-secondary-foreground"
                        }`}
                      >
                        {msg.content}
                      </div>
                    </div>
                    {msg.isCurrentUser && (
                      <Avatar>
                        <AvatarImage src={msg.avatar || "/placeholder.svg"} alt={msg.sender} />
                        <AvatarFallback>{msg.sender.charAt(0)}</AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="p-4 border-t border-border">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div className="flex-1 flex items-center gap-2 bg-secondary/50 rounded-lg px-3 py-2">
                  <Input
                    placeholder={`Message ${
                      activeChat === "general"
                        ? "#general"
                        : publicChannels.find((c) => c.id === activeChat)?.name
                          ? `#${publicChannels.find((c) => c.id === activeChat)?.name}`
                          : privateGroups.find((g) => g.id === activeChat)?.name ||
                            directMessages.find((dm) => dm.id === activeChat)?.name
                    }`}
                    className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault()
                        sendMessage()
                      }
                    }}
                  />
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Smile className="h-5 w-5 text-muted-foreground" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Paperclip className="h-5 w-5 text-muted-foreground" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ImageIcon className="h-5 w-5 text-muted-foreground" />
                  </Button>
                </div>
                <Button size="icon" className="h-8 w-8" onClick={sendMessage}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <MessageSquare className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-xl font-semibold mb-2">Welcome to Community Chat</h2>
              <p className="text-muted-foreground mb-4">Select a channel or direct message to start chatting</p>
              <Button>Create a Channel</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
