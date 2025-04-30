"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { ShoppingBag, Search, Filter, ChevronDown, Star, Wallet, Tag, Truck } from "lucide-react"
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
import { toast } from "@/hooks/use-toast"

export default function ThrivePage() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [redeeming, setRedeeming] = useState(false)
  const [walletBalance] = useState(1250) // In a real app, this would come from the user's wallet

  const handleRedeem = (product: any) => {
    setRedeeming(true)
    // Simulate API call
    setTimeout(() => {
      setRedeeming(false)
      toast({
        title: "Discount code generated!",
        description: `You've redeemed a ${product.discount}% discount for ${product.title}.`,
      })
    }, 1500)
  }

  const products = [
    {
      id: 1,
      title: "Thrive Gaming T-Shirt",
      image: "/placeholder.svg?height=300&width=400",
      price: 29.99,
      discountPrice: 19.99,
      discount: 30,
      tokenCost: 500,
      category: "Apparel",
      rating: 4.8,
      reviews: 124,
      colors: ["Black", "White", "Gray"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      description:
        "Premium gaming t-shirt with the Thrive logo. Made from 100% organic cotton for maximum comfort during long gaming sessions.",
    },
    {
      id: 2,
      title: "Thrive Hoodie",
      image: "/placeholder.svg?height=300&width=400",
      price: 59.99,
      discountPrice: 44.99,
      discount: 25,
      tokenCost: 800,
      category: "Apparel",
      rating: 4.9,
      reviews: 87,
      colors: ["Black", "Navy", "Gray"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      description:
        "Stay warm and stylish with this premium gaming hoodie. Features embroidered Thrive logo and extra comfortable fabric.",
    },
    {
      id: 3,
      title: "Thrive Snapback Cap",
      image: "/placeholder.svg?height=300&width=400",
      price: 24.99,
      discountPrice: 19.99,
      discount: 20,
      tokenCost: 350,
      category: "Accessories",
      rating: 4.7,
      reviews: 56,
      colors: ["Black", "White", "Red"],
      sizes: ["One Size"],
      description:
        "Adjustable snapback cap with embroidered Thrive logo. Perfect for casual wear or representing your gaming passion.",
    },
    {
      id: 4,
      title: "Thrive Gaming Mouse Pad",
      image: "/placeholder.svg?height=300&width=400",
      price: 19.99,
      discountPrice: 14.99,
      discount: 25,
      tokenCost: 250,
      category: "Accessories",
      rating: 4.6,
      reviews: 92,
      colors: ["Black"],
      sizes: ["Standard", "XL"],
      description:
        "Professional gaming mouse pad with smooth surface for precise mouse movements. Features the Thrive logo and non-slip base.",
    },
    {
      id: 5,
      title: "Thrive Backpack",
      image: "/placeholder.svg?height=300&width=400",
      price: 69.99,
      discountPrice: 49.99,
      discount: 30,
      tokenCost: 900,
      category: "Accessories",
      rating: 4.9,
      reviews: 43,
      colors: ["Black", "Gray"],
      sizes: ["One Size"],
      description:
        "Premium gaming backpack with padded laptop compartment, multiple pockets for accessories, and embroidered Thrive logo.",
    },
    {
      id: 6,
      title: "Thrive Water Bottle",
      image: "/placeholder.svg?height=300&width=400",
      price: 24.99,
      discountPrice: 19.99,
      discount: 20,
      tokenCost: 300,
      category: "Accessories",
      rating: 4.5,
      reviews: 38,
      colors: ["Black", "Silver", "Blue"],
      sizes: ["500ml", "750ml"],
      description:
        "Stay hydrated during intense gaming sessions with this premium insulated water bottle featuring the Thrive logo.",
    },
  ]

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
          <ShoppingBag className="h-8 w-8 text-primary" />
          Thrive Merchandise
        </h1>
        <p className="text-muted-foreground">
          Redeem your gaming earnings for exclusive Thrive merchandise and discounts
        </p>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search products..." className="pl-10" />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2 bg-secondary/30 px-4 py-2 rounded-lg">
          <Wallet className="h-5 w-5 text-primary" />
          <div>
            <div className="text-sm font-medium">Your Balance</div>
            <div className="text-lg font-bold">{walletBalance} Tokens</div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All Products</TabsTrigger>
          <TabsTrigger value="apparel">Apparel</TabsTrigger>
          <TabsTrigger value="accessories">Accessories</TabsTrigger>
          <TabsTrigger value="limited">Limited Edition</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden bg-card border-border h-full">
                <div className="relative h-48">
                  <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-primary hover:bg-primary/80">{product.discount}% OFF</Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{product.title}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {product.category}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {product.colors.length} colors
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-muted-foreground line-through">${product.price}</div>
                      <div className="text-lg font-bold">${product.discountPrice}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Token Cost</div>
                      <div className="text-primary font-bold">{product.tokenCost}</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" onClick={() => setSelectedProduct(product)}>
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>{product.title}</DialogTitle>
                        <DialogDescription>
                          Redeem your tokens for exclusive discounts on Thrive merchandise.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="relative h-48 w-full">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.title}
                            fill
                            className="object-cover rounded-md"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="text-sm text-muted-foreground">Price</div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-muted-foreground line-through">${product.price}</span>
                              <span className="text-lg font-bold">${product.discountPrice}</span>
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Token Cost</div>
                            <div className="text-lg font-bold text-primary">{product.tokenCost}</div>
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Select Size</div>
                          <Select defaultValue={product.sizes[0]}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select size" />
                            </SelectTrigger>
                            <SelectContent>
                              {product.sizes.map((size) => (
                                <SelectItem key={size} value={size}>
                                  {size}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Select Color</div>
                          <Select defaultValue={product.colors[0]}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select color" />
                            </SelectTrigger>
                            <SelectContent>
                              {product.colors.map((color) => (
                                <SelectItem key={color} value={color}>
                                  {color}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <DialogFooter className="flex flex-col sm:flex-row gap-2">
                        <Button
                          variant="outline"
                          className="flex-1"
                          onClick={() => {
                            window.open(`https://example.com/shop/${product.id}`, "_blank")
                          }}
                        >
                          Shop Now
                        </Button>
                        <Button
                          className="flex-1"
                          onClick={() => handleRedeem(product)}
                          disabled={redeeming || walletBalance < product.tokenCost}
                        >
                          {redeeming
                            ? "Processing..."
                            : walletBalance < product.tokenCost
                              ? "Insufficient Tokens"
                              : `Redeem ${product.tokenCost} Tokens`}
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <Button
                    onClick={() => handleRedeem(product)}
                    disabled={redeeming || walletBalance < product.tokenCost}
                  >
                    {walletBalance < product.tokenCost ? "Insufficient" : "Redeem"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="apparel" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products
              .filter((product) => product.category === "Apparel")
              .map((product) => (
                <Card key={product.id} className="overflow-hidden bg-card border-border h-full">
                  <div className="relative h-48">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-primary hover:bg-primary/80">{product.discount}% OFF</Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{product.title}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{product.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {product.category}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {product.colors.length} colors
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-muted-foreground line-through">${product.price}</div>
                        <div className="text-lg font-bold">${product.discountPrice}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Token Cost</div>
                        <div className="text-primary font-bold">{product.tokenCost}</div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between">
                    <Button variant="outline">View Details</Button>
                    <Button
                      onClick={() => handleRedeem(product)}
                      disabled={redeeming || walletBalance < product.tokenCost}
                    >
                      {walletBalance < product.tokenCost ? "Insufficient" : "Redeem"}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="accessories" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products
              .filter((product) => product.category === "Accessories")
              .map((product) => (
                <Card key={product.id} className="overflow-hidden bg-card border-border h-full">
                  <div className="relative h-48">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-primary hover:bg-primary/80">{product.discount}% OFF</Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{product.title}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{product.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {product.category}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {product.colors.length} colors
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-muted-foreground line-through">${product.price}</div>
                        <div className="text-lg font-bold">${product.discountPrice}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Token Cost</div>
                        <div className="text-primary font-bold">{product.tokenCost}</div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between">
                    <Button variant="outline">View Details</Button>
                    <Button
                      onClick={() => handleRedeem(product)}
                      disabled={redeeming || walletBalance < product.tokenCost}
                    >
                      {walletBalance < product.tokenCost ? "Insufficient" : "Redeem"}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="limited" className="mt-6">
          <div className="text-center py-12">
            <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-xl font-semibold mb-2">Limited Edition Coming Soon</h2>
            <p className="text-muted-foreground mb-4 max-w-md mx-auto">
              We're working on exclusive limited edition merchandise. Check back soon for special drops!
            </p>
            <Button>Get Notified</Button>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-card border-border">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Tag className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-lg font-semibold mb-2">Exclusive Discounts</h3>
            <p className="text-sm text-muted-foreground">
              Redeem your gaming tokens for exclusive discounts on premium Thrive merchandise.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Wallet className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-lg font-semibold mb-2">Earn While Playing</h3>
            <p className="text-sm text-muted-foreground">
              Earn tokens by playing your favorite web3 games and redeem them for real-world items.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Truck className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-lg font-semibold mb-2">Worldwide Shipping</h3>
            <p className="text-sm text-muted-foreground">
              We ship our premium gaming merchandise to players around the world.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
