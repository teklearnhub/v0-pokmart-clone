"use client"

import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"

export function WhatsAppWidget() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href="https://wa.me/6596899591?text=I'm%20interested%20in%20your%20services!"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
          aria-label="Contact us on WhatsApp"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </a>
    </div>
  )
}
