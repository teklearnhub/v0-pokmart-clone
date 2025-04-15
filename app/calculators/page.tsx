"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, Info, Calculator } from "lucide-react"

export default function PropertyCalculatorPage() {
  // Purchase details
  const [propertyPrice, setPropertyPrice] = useState(1000000)
  const [propertyType, setPropertyType] = useState("private")
  const [buyerProfile, setBuyerProfile] = useState("firstTimer")

  // Loan details
  const [loanTenure, setLoanTenure] = useState(30)
  const [interestRate, setInterestRate] = useState(3.5)
  const [downpaymentPercent, setDownpaymentPercent] = useState(25)

  // Calculated values
  const [buyerStampDuty, setBuyerStampDuty] = useState(0)
  const [additionalBuyerStampDuty, setAdditionalBuyerStampDuty] = useState(0)
  const [legalFees, setLegalFees] = useState(3000)
  const [otherFees, setOtherFees] = useState(1000)
  const [downpayment, setDownpayment] = useState(0)
  const [loanAmount, setLoanAmount] = useState(0)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [principalPayment, setPrincipalPayment] = useState(0)
  const [interestPayment, setInterestPayment] = useState(0)

  // Calculate BSD (Buyer Stamp Duty)
  const calculateBSD = (price) => {
    let bsd = 0

    if (price <= 180000) {
      bsd = price * 0.01
    } else if (price <= 360000) {
      bsd = 1800 + (price - 180000) * 0.02
    } else if (price <= 1000000) {
      bsd = 5400 + (price - 360000) * 0.03
    } else if (price <= 1500000) {
      bsd = 24600 + (price - 1000000) * 0.04
    } else {
      bsd = 44600 + (price - 1500000) * 0.05
    }

    return Math.round(bsd)
  }

  // Calculate ABSD (Additional Buyer Stamp Duty)
  const calculateABSD = (price, profile, type) => {
    let rate = 0

    if (type === "private") {
      if (profile === "firstTimer") {
        rate = 0
      } else if (profile === "secondTimer") {
        rate = 0.2 // 20% for Singapore Citizens buying 2nd property
      } else if (profile === "thirdTimer") {
        rate = 0.3 // 30% for Singapore Citizens buying 3rd and subsequent properties
      } else if (profile === "pr") {
        rate = 0.3 // 30% for Permanent Residents
      } else if (profile === "foreigner") {
        rate = 0.6 // 60% for Foreigners
      }
    }

    return Math.round(price * rate)
  }

  // Calculate monthly mortgage payment
  const calculateMonthlyPayment = (principal, interestRate, tenureYears) => {
    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = tenureYears * 12

    if (monthlyRate === 0) return principal / numberOfPayments

    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

    return Math.round(monthlyPayment)
  }

  // Calculate first month's principal and interest payments
  const calculatePrincipalAndInterest = (loanAmount, monthlyPayment, interestRate) => {
    const monthlyInterestRate = interestRate / 100 / 12
    const interestPayment = Math.round(loanAmount * monthlyInterestRate)
    const principalPayment = Math.round(monthlyPayment - interestPayment)

    return { principalPayment, interestPayment }
  }

  // Update calculations when inputs change
  useEffect(() => {
    // Calculate stamp duties
    const bsd = calculateBSD(propertyPrice)
    const absd = calculateABSD(propertyPrice, buyerProfile, propertyType)

    // Calculate loan and downpayment
    const calculatedDownpayment = Math.round(propertyPrice * (downpaymentPercent / 100))
    const calculatedLoanAmount = propertyPrice - calculatedDownpayment

    // Calculate monthly payment
    const calculatedMonthlyPayment = calculateMonthlyPayment(calculatedLoanAmount, interestRate, loanTenure)

    // Calculate principal and interest breakdown
    const { principalPayment, interestPayment } = calculatePrincipalAndInterest(
      calculatedLoanAmount,
      calculatedMonthlyPayment,
      interestRate,
    )

    // Update state
    setBuyerStampDuty(bsd)
    setAdditionalBuyerStampDuty(absd)
    setDownpayment(calculatedDownpayment)
    setLoanAmount(calculatedLoanAmount)
    setMonthlyPayment(calculatedMonthlyPayment)
    setPrincipalPayment(principalPayment)
    setInterestPayment(interestPayment)
  }, [propertyPrice, propertyType, buyerProfile, loanTenure, interestRate, downpaymentPercent])

  // Total upfront costs
  const totalUpfrontCost = downpayment + buyerStampDuty + additionalBuyerStampDuty + legalFees + otherFees

  // Percentages for charts
  const downpaymentPercOfTotal = Math.round(
    (downpayment / (propertyPrice + buyerStampDuty + additionalBuyerStampDuty + legalFees + otherFees)) * 100,
  )
  const taxesFeesPercOfTotal = Math.round(
    ((buyerStampDuty + additionalBuyerStampDuty + legalFees + otherFees) /
      (propertyPrice + buyerStampDuty + additionalBuyerStampDuty + legalFees + otherFees)) *
      100,
  )
  const loanPercOfTotal = Math.round(
    (loanAmount / (propertyPrice + buyerStampDuty + additionalBuyerStampDuty + legalFees + otherFees)) * 100,
  )

  const principalPercOfPayment = Math.round((principalPayment / monthlyPayment) * 100)
  const interestPercOfPayment = Math.round((interestPayment / monthlyPayment) * 100)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full bg-white border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center">
              <Image
                src="/placeholder.svg?height=32&width=140&text=PÛRE"
                alt="PÛRE"
                width={140}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <nav className="hidden md:flex gap-6">
              <div className="relative group">
                <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
                  PURE Advantage
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1">
                    <Link href="/calculators" className="block px-4 py-2 text-sm text-blue-600 bg-gray-50">
                      Property Calculator
                    </Link>
                    <Link href="/property-report" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Get a Free Property Report
                    </Link>
                    <Link href="/agents" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Our Agents
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="flex items-center">
            <Link
              href="https://wa.me/6596899591?text=I'm%20interested%20in%20your%20services!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-blue-600 hover:bg-blue-700">Get a Free Consultation</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-gray-50 py-12">
        <div className="container">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <Calculator className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Property Calculator</h1>
          </div>

          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Plan your property purchase with our comprehensive calculator. Estimate your stamp duties, mortgage
            payments, and total costs when buying property in Singapore.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Inputs */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Purchase Price</CardTitle>
                  <CardDescription>Enter the property details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="propertyPrice">Price (S$)</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">S$</span>
                      <Input
                        id="propertyPrice"
                        type="number"
                        value={propertyPrice}
                        onChange={(e) => setPropertyPrice(Number(e.target.value))}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="propertyType">Property Type</Label>
                    <Select value={propertyType} onValueChange={setPropertyType}>
                      <SelectTrigger id="propertyType">
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hdb">HDB</SelectItem>
                        <SelectItem value="private">Private Residential</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="buyerProfile">Buyer Profile</Label>
                    <Select value={buyerProfile} onValueChange={setBuyerProfile}>
                      <SelectTrigger id="buyerProfile">
                        <SelectValue placeholder="Select buyer profile" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="firstTimer">Singapore Citizen (First Property)</SelectItem>
                        <SelectItem value="secondTimer">Singapore Citizen (Second Property)</SelectItem>
                        <SelectItem value="thirdTimer">Singapore Citizen (Third+ Property)</SelectItem>
                        <SelectItem value="pr">Singapore PR</SelectItem>
                        <SelectItem value="foreigner">Foreigner</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Loan Details</CardTitle>
                  <CardDescription>Configure your mortgage</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="downpaymentPercent">Downpayment (%)</Label>
                    <div className="relative">
                      <Input
                        id="downpaymentPercent"
                        type="number"
                        min="20"
                        max="100"
                        value={downpaymentPercent}
                        onChange={(e) => setDownpaymentPercent(Number(e.target.value))}
                        className="pr-10"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
                    </div>
                    <p className="text-xs text-gray-500">Minimum 20% for private properties, 15% for HDB</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interestRate">Interest Rate (%)</Label>
                    <div className="relative">
                      <Input
                        id="interestRate"
                        type="number"
                        step="0.1"
                        min="0"
                        max="10"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="pr-10"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="loanTenure">Loan Tenure (Years)</Label>
                    <Select value={loanTenure.toString()} onValueChange={(value) => setLoanTenure(Number(value))}>
                      <SelectTrigger id="loanTenure">
                        <SelectValue placeholder="Select loan tenure" />
                      </SelectTrigger>
                      <SelectContent>
                        {[5, 10, 15, 20, 25, 30, 35].map((year) => (
                          <SelectItem key={year} value={year.toString()}>
                            {year} years
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Other Costs</CardTitle>
                  <CardDescription>Legal fees and other expenses</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="legalFees">Legal Fees (S$)</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">S$</span>
                      <Input
                        id="legalFees"
                        type="number"
                        value={legalFees}
                        onChange={(e) => setLegalFees(Number(e.target.value))}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="otherFees">Other Fees (S$)</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">S$</span>
                      <Input
                        id="otherFees"
                        type="number"
                        value={otherFees}
                        onChange={(e) => setOtherFees(Number(e.target.value))}
                        className="pl-10"
                      />
                    </div>
                    <p className="text-xs text-gray-500">Valuation, agent commission, etc.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Results */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Breakdown</CardTitle>
                  <CardDescription>Total upfront costs and financing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-medium">Total Downpayment, Taxes & Fees</h3>
                    <p className="text-2xl font-bold text-blue-600">S$ {totalUpfrontCost.toLocaleString()}</p>
                  </div>

                  {/* Bar chart for payment breakdown */}
                  <div className="space-y-2 mb-6">
                    <div className="flex w-full h-8 rounded-md overflow-hidden">
                      <div
                        className="bg-blue-400"
                        style={{ width: `${downpaymentPercOfTotal}%` }}
                        title={`Downpayment: S$ ${downpayment.toLocaleString()} (${downpaymentPercOfTotal}%)`}
                      ></div>
                      <div
                        className="bg-teal-500"
                        style={{ width: `${taxesFeesPercOfTotal}%` }}
                        title={`Taxes and Fees: S$ ${(buyerStampDuty + additionalBuyerStampDuty + legalFees + otherFees).toLocaleString()} (${taxesFeesPercOfTotal}%)`}
                      ></div>
                      <div
                        className="bg-gray-800"
                        style={{ width: `${loanPercOfTotal}%` }}
                        title={`Loan: S$ ${loanAmount.toLocaleString()} (${loanPercOfTotal}%)`}
                      ></div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                        <span>
                          Downpayment S$ {downpayment.toLocaleString()} ({downpaymentPercOfTotal}%)
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-teal-500 rounded-full mr-2"></div>
                        <span>
                          Taxes and Fees S${" "}
                          {(buyerStampDuty + additionalBuyerStampDuty + legalFees + otherFees).toLocaleString()} (
                          {taxesFeesPercOfTotal}%)
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gray-800 rounded-full mr-2"></div>
                        <span>
                          Loan S$ {loanAmount.toLocaleString()} ({loanPercOfTotal}%)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3">Upfront Costs</h4>
                      <table className="w-full text-sm">
                        <tbody>
                          <tr className="border-b">
                            <td className="py-2">Downpayment</td>
                            <td className="py-2 text-right font-medium">S$ {downpayment.toLocaleString()}</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2">Buyer Stamp Duty (BSD)</td>
                            <td className="py-2 text-right font-medium">S$ {buyerStampDuty.toLocaleString()}</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 flex items-center">
                              Additional Buyer Stamp Duty (ABSD)
                              <Info
                                className="h-4 w-4 ml-1 text-gray-400"
                                title="Depends on citizenship status and number of properties owned"
                              />
                            </td>
                            <td className="py-2 text-right font-medium">
                              S$ {additionalBuyerStampDuty.toLocaleString()}
                            </td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2">Legal Fees</td>
                            <td className="py-2 text-right font-medium">S$ {legalFees.toLocaleString()}</td>
                          </tr>
                          <tr>
                            <td className="py-2">Other Fees</td>
                            <td className="py-2 text-right font-medium">S$ {otherFees.toLocaleString()}</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr className="border-t">
                            <td className="py-2 font-bold">Total Upfront</td>
                            <td className="py-2 text-right font-bold">S$ {totalUpfrontCost.toLocaleString()}</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Financing</h4>
                      <table className="w-full text-sm">
                        <tbody>
                          <tr className="border-b">
                            <td className="py-2">Property Price</td>
                            <td className="py-2 text-right font-medium">S$ {propertyPrice.toLocaleString()}</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2">Downpayment</td>
                            <td className="py-2 text-right font-medium">S$ {downpayment.toLocaleString()}</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2">Loan Amount</td>
                            <td className="py-2 text-right font-medium">S$ {loanAmount.toLocaleString()}</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2">Loan-to-Value (LTV)</td>
                            <td className="py-2 text-right font-medium">{(100 - downpaymentPercent).toFixed(0)}%</td>
                          </tr>
                          <tr>
                            <td className="py-2">Loan Tenure</td>
                            <td className="py-2 text-right font-medium">{loanTenure} years</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Mortgage</CardTitle>
                  <CardDescription>Monthly payment breakdown</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-medium">Estimated Monthly Payment</h3>
                    <p className="text-2xl font-bold text-blue-600">S$ {monthlyPayment.toLocaleString()}/month</p>
                  </div>

                  {/* Bar chart for monthly payment breakdown */}
                  <div className="space-y-2 mb-6">
                    <div className="flex w-full h-8 rounded-md overflow-hidden">
                      <div
                        className="bg-blue-400"
                        style={{ width: `${principalPercOfPayment}%` }}
                        title={`Principal (1st Payment): S$ ${principalPayment.toLocaleString()} (${principalPercOfPayment}%)`}
                      ></div>
                      <div
                        className="bg-teal-500"
                        style={{ width: `${interestPercOfPayment}%` }}
                        title={`Interest (1st Payment): S$ ${interestPayment.toLocaleString()} (${interestPercOfPayment}%)`}
                      ></div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                        <span>
                          Principal (1st Payment) S$ {principalPayment.toLocaleString()} ({principalPercOfPayment}%)
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-teal-500 rounded-full mr-2"></div>
                        <span>
                          Interest (1st Payment) S$ {interestPayment.toLocaleString()} ({interestPercOfPayment}%)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3">Monthly Payment Details</h4>
                      <table className="w-full text-sm">
                        <tbody>
                          <tr className="border-b">
                            <td className="py-2">Monthly Payment</td>
                            <td className="py-2 text-right font-medium">S$ {monthlyPayment.toLocaleString()}</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2">Principal (1st Payment)</td>
                            <td className="py-2 text-right font-medium">S$ {principalPayment.toLocaleString()}</td>
                          </tr>
                          <tr>
                            <td className="py-2">Interest (1st Payment)</td>
                            <td className="py-2 text-right font-medium">S$ {interestPayment.toLocaleString()}</td>
                          </tr>
                        </tbody>
                      </table>
                      <p className="text-xs text-gray-500 mt-2">
                        Note: As you pay down your loan, the principal portion increases and the interest portion
                        decreases.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Loan Summary</h4>
                      <table className="w-full text-sm">
                        <tbody>
                          <tr className="border-b">
                            <td className="py-2">Total Principal</td>
                            <td className="py-2 text-right font-medium">S$ {loanAmount.toLocaleString()}</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2">Total Interest (Est.)</td>
                            <td className="py-2 text-right font-medium">
                              S$ {Math.round(monthlyPayment * loanTenure * 12 - loanAmount).toLocaleString()}
                            </td>
                          </tr>
                          <tr>
                            <td className="py-2">Total Amount Payable</td>
                            <td className="py-2 text-right font-medium">
                              S$ {Math.round(monthlyPayment * loanTenure * 12).toLocaleString()}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>Disclaimer:</strong> This calculator provides estimates only and should not be considered
                  financial advice. Actual costs may vary. For accurate calculations, please consult with a mortgage
                  advisor or property agent.
                </p>
              </div>

              <div className="flex justify-center">
                <Link
                  href="https://wa.me/6596899591?text=I'm%20interested%20in%20your%20services!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-blue-600 hover:bg-blue-700">Get a Free Consultation</Button>
                </Link>
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
                src="/placeholder.svg?height=32&width=140&text=PÛRE"
                alt="PÛRE"
                width={140}
                height={32}
                className="h-8 w-auto mb-4 brightness-200"
              />
              <p className="text-gray-400 mt-4">
                People Under Real Estate - Simplifying property transactions in Singapore with technology and
                exceptional service.
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
                  <Link href="/calculators" className="text-gray-400 hover:text-white">
                    Property calculator
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
