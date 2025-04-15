import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { ChevronDown, Star, MapPin, BedDouble, Bath, Square, Phone, Mail, Calendar, Heart, Share2 } from "lucide-react"

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const propertyId = params.id

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
          <Link href="/properties" className="text-blue-600 hover:underline flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to search results
          </Link>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Property Images and Details */}
            <div className="lg:w-2/3">
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-4">
                <Image
                  src={`/placeholder.svg?height=500&width=800&text=Property+${propertyId}`}
                  alt={`Property ${propertyId} Main Image`}
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600">For Sale</Badge>
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button variant="outline" size="icon" className="bg-white hover:bg-gray-100 rounded-full h-10 w-10">
                    <Heart className="h-5 w-5 text-gray-700" />
                  </Button>
                  <Button variant="outline" size="icon" className="bg-white hover:bg-gray-100 rounded-full h-10 w-10">
                    <Share2 className="h-5 w-5 text-gray-700" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-8">
                {[1, 2, 3, 4].map((imgNum) => (
                  <div key={imgNum} className="relative h-24 rounded-lg overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=96&width=144&text=Image+${imgNum}`}
                      alt={`Property ${propertyId} Image ${imgNum}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-lg p-6 mb-8">
                <h1 className="text-2xl font-bold mb-2">Modern Condominium in District 10</h1>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Orchard Road, Singapore</span>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold text-blue-600">S$ 2.38 Million</h2>
                  <Badge variant="outline" className="text-sm">
                    Freehold
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-6 border-t border-b py-6 mb-6">
                  <div className="flex items-center gap-2">
                    <BedDouble className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-gray-500 text-sm">Bedrooms</p>
                      <p className="font-medium">3</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-gray-500 text-sm">Bathrooms</p>
                      <p className="font-medium">2</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-gray-500 text-sm">Floor Area</p>
                      <p className="font-medium">1,200 sqft</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-gray-500 text-sm">Built in</p>
                      <p className="font-medium">2018</p>
                    </div>
                  </div>
                </div>

                <Tabs defaultValue="description">
                  <TabsList className="grid grid-cols-3 mb-4">
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="location">Location</TabsTrigger>
                  </TabsList>

                  <TabsContent value="description" className="pt-2">
                    <div className="space-y-4">
                      <p>
                        This luxurious condominium in the heart of Singapore's prestigious District 10 offers the
                        perfect blend of comfort, convenience, and elegance. The spacious layout features three
                        well-appointed bedrooms, including a master suite with an en-suite bathroom.
                      </p>
                      <p>
                        The unit comes with a modern kitchen equipped with premium appliances, and a generous living and
                        dining area perfect for entertaining guests. Floor-to-ceiling windows throughout the apartment
                        allow for abundant natural light and showcase stunning city views.
                      </p>
                      <p>
                        Residents enjoy exclusive access to a comprehensive suite of facilities including a swimming
                        pool, fully-equipped gymnasium, tennis court, BBQ pits, and 24-hour security.
                      </p>
                      <p>
                        The property is within walking distance to MRT stations and is surrounded by prestigious
                        schools, making it an ideal home for families.
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="features" className="pt-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold mb-4">Unit Features</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                            <span>Air conditioning throughout</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                            <span>Built-in wardrobes</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                            <span>Marble flooring</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                            <span>High ceilings</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                            <span>Smart home features</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                            <span>Private balcony</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold mb-4">Building Facilities</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                            <span>Swimming pool</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                            <span>Gym</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                            <span>Tennis court</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                            <span>24-hour security</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                            <span>BBQ area</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                            <span>Residents' lounge</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="location" className="pt-2">
                    <div className="space-y-6">
                      <div className="relative h-[300px] rounded-lg overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=300&width=800&text=Map"
                          alt="Property Map"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="font-bold mb-4">Nearby Amenities</h3>
                          <ul className="space-y-4">
                            <li>
                              <p className="font-medium">Shopping</p>
                              <p className="text-gray-600 text-sm">ION Orchard (5 min walk)</p>
                              <p className="text-gray-600 text-sm">Takashimaya (10 min walk)</p>
                            </li>
                            <li>
                              <p className="font-medium">Transportation</p>
                              <p className="text-gray-600 text-sm">Orchard MRT (3 min walk)</p>
                              <p className="text-gray-600 text-sm">Bus Stop (2 min walk)</p>
                            </li>
                            <li>
                              <p className="font-medium">Schools</p>
                              <p className="text-gray-600 text-sm">Anglo-Chinese School (1 km)</p>
                              <p className="text-gray-600 text-sm">Raffles Girls' School (2 km)</p>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-bold mb-4">Travel Times</h3>
                          <ul className="space-y-4">
                            <li>
                              <p className="font-medium">CBD</p>
                              <p className="text-gray-600 text-sm">15 minutes by car</p>
                            </li>
                            <li>
                              <p className="font-medium">Changi Airport</p>
                              <p className="text-gray-600 text-sm">25 minutes by car</p>
                            </li>
                            <li>
                              <p className="font-medium">Marina Bay</p>
                              <p className="text-gray-600 text-sm">10 minutes by car</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-bold mb-6">Similar Properties</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[1, 2, 3].map((item) => (
                    <Card key={item} className="overflow-hidden">
                      <div className="relative">
                        <div className="relative h-40">
                          <Image
                            src={`/placeholder.svg?height=160&width=320&text=Similar+${item}`}
                            alt={`Similar Property ${item}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <Badge className="absolute top-2 right-2 bg-blue-600">For Sale</Badge>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-bold mb-1">S$ {(Math.random() * 2 + 1).toFixed(2)} Million</h3>
                        <p className="text-sm text-gray-600 mb-2">Orchard Road, Singapore</p>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>{(item % 3) + 2} Beds</span>
                          <span>{(item % 2) + 1} Baths</span>
                          <span>{(Math.random() * 500 + 900).toFixed(0)} sqft</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Agent Information and Contact Form */}
            <div className="lg:w-1/3 space-y-6">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 pb-6 border-b">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=64&width=64&text=Agent"
                        alt="Agent Photo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">Jessica Tan</h3>
                      <p className="text-sm text-gray-600">Senior Property Consultant</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">4.9 (42 reviews)</span>
                      </div>
                    </div>
                  </div>

                  <div className="py-6 border-b">
                    <p className="text-gray-600 mb-6">
                      Listed by a top Propseller agent with over 10 years of experience in the Singapore property
                      market.
                    </p>
                    <div className="flex gap-4">
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                        <Phone className="h-4 w-4 mr-2" /> Call
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Mail className="h-4 w-4 mr-2" /> Email
                      </Button>
                    </div>
                  </div>

                  <div className="pt-6">
                    <h3 className="font-bold mb-4">Request viewing or information</h3>
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input id="name" placeholder="Your name" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input id="email" type="email" placeholder="Your email" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone
                        </label>
                        <Input id="phone" placeholder="Your phone number" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <textarea
                          id="message"
                          className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="I'm interested in this property and would like to know more."
                        ></textarea>
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Inquiry</Button>
                      <p className="text-xs text-gray-500 text-center">
                        By submitting, you agree to our privacy policy and terms of service.
                      </p>
                    </form>
                  </div>
                </CardContent>
              </Card>
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
    </div>
  )
}
