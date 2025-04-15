import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { MapPin, ChevronDown, Search, SlidersHorizontal } from "lucide-react"

export default function PropertiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full bg-white border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center">
              <Image
                src="/placeholder.svg?height=32&width=140&text=Propseller"
                alt="Propseller"
                width={140}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <nav className="hidden md:flex gap-1">
              <div className="relative group">
                <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
                  Sell
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1">
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Sell your property
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Property valuation
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Selling guides
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <button className="flex items-center px-3 py-2 text-sm font-medium text-blue-600">
                  Buy
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1">
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Find properties
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Buying guides
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Home loans
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
                  Company
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1">
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      About us
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Reviews
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Careers
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Contact us
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden md:flex">
              Log in
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Get a Free Consultation</Button>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-gray-50">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h1 className="text-2xl font-bold mb-4 md:mb-0">Properties For Sale</h1>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Input placeholder="Search by location, project..." className="pl-10 w-[240px]" />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              <Select defaultValue="newest">
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-lg">Filters</h3>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 h-8 px-2">
                      Reset
                    </Button>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-3">Property Type</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="hdb" />
                          <label htmlFor="hdb" className="text-sm">
                            HDB
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="condo" />
                          <label htmlFor="condo" className="text-sm">
                            Condominium
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="landed" />
                          <label htmlFor="landed" className="text-sm">
                            Landed
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="commercial" />
                          <label htmlFor="commercial" className="text-sm">
                            Commercial
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Price Range</h4>
                      <div className="space-y-4">
                        <Slider defaultValue={[500000, 2000000]} min={0} max={5000000} step={100000} className="mt-6" />
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">S$500,000</span>
                          <span className="text-sm text-gray-600">S$2,000,000</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Number of Bedrooms</h4>
                      <div className="flex flex-wrap gap-2">
                        {[1, 2, 3, 4, 5].map((bedrooms) => (
                          <Button key={bedrooms} variant="outline" className="h-8 px-4 rounded-full text-sm">
                            {bedrooms}
                          </Button>
                        ))}
                        <Button variant="outline" className="h-8 px-4 rounded-full text-sm">
                          5+
                        </Button>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Location</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="central" />
                          <label htmlFor="central" className="text-sm">
                            Central
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="east" />
                          <label htmlFor="east" className="text-sm">
                            East
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="west" />
                          <label htmlFor="west" className="text-sm">
                            West
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="north" />
                          <label htmlFor="north" className="text-sm">
                            North
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="northeast" />
                          <label htmlFor="northeast" className="text-sm">
                            North-East
                          </label>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Filters</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Property Listings */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 9 }).map((_, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative">
                      <Link href={`/property/${index + 1}`}>
                        <div className="relative h-48">
                          <Image
                            src={`/placeholder.svg?height=192&width=384&text=Property+${index + 1}`}
                            alt={`Property ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </Link>
                      <Badge className="absolute top-2 right-2 bg-blue-600">For Sale</Badge>
                    </div>
                    <CardContent className="p-4">
                      <Link href={`/property/${index + 1}`} className="hover:text-blue-600">
                        <h3 className="font-bold text-lg mb-1">S$ {(Math.random() * 2 + 1).toFixed(2)} Million</h3>
                      </Link>
                      <div className="flex items-center mb-2">
                        <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-600">
                          {["Orchard", "Tampines", "Jurong", "Woodlands", "Marine Parade"][index % 5]}, Singapore
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <span>{(index % 4) + 1} Bedrooms</span>
                        <span>{(index % 3) + 1} Bathrooms</span>
                        <span>{(Math.random() * 1000 + 600).toFixed(0)} sqft</span>
                      </div>
                      <div className="flex justify-between items-center border-t pt-3">
                        <span className="text-xs text-gray-500">Listed {(index % 7) + 1} days ago</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-2"
                        >
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center mt-10">
                <div className="flex items-center space-x-1">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" className="bg-blue-600 text-white">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/placeholder.svg?height=32&width=140&text=Propseller"
                alt="Propseller"
                width={140}
                height={32}
                className="h-8 w-auto mb-4 brightness-200"
              />
              <p className="text-gray-400 mt-4">
                Simplifying property transactions in Singapore with technology and exceptional service.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">For Sellers</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Sell your property
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Property valuation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Seller guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Selling calculator
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">For Buyers</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Find properties
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Buyer guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Home loans
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Affordability calculator
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Propseller. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Filter Button */}
      <div className="lg:hidden fixed bottom-4 left-4 z-50">
        <Button className="rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg">
          <SlidersHorizontal className="h-5 w-5 mr-2" /> Filters
        </Button>
      </div>
    </div>
  )
}
