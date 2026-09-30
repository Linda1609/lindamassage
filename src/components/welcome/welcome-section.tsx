"use client"

import Image from "next/image"
import { Button } from "../ui/button"

import { useState } from "react"
import BookingModal from "../booking/booking-modal"

export default function WelcomeSection() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <>
      <section className="py-20 bg-spa-sage-dark">
        <div className="max-w-[1236px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-spa-cream">
              <h2 className="font-serif text-4xl md:text-5xl mb-6 italic">
                Nurturing care,
                <br />
                just for you
              </h2>
              <p className="text-spa-cream/80 mb-8 leading-relaxed">
                Every service I offer is thoughtfully designed to nurture both body and mind. At Massage Therapy by
                Linda, your well-being is my passion, and your comfort is my priority.
              </p>
              <Button className="bg-spa-orange hover:bg-spa-orange-light text-spa-cream px-8 py-3 rounded-full text-sm font-medium">
                GET STARTED TODAY →
              </Button>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-spa-sage-dark overflow-hidden">
                      <Image
                        src={`/happy-spa-customer-portrait-person-.jpg?height=50&width=50&query=happy spa customer portrait person ${i}`}
                        alt={`Customer ${i}`}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-spa-cream/80">
                  <span className="font-semibold text-spa-cream">500+ Happy Clients</span>
                </p>
              </div>
            </div>

            {/* Right Content */}
            <div className="bg-spa-cream rounded-3xl p-8">
              <h3 className="font-serif text-2xl text-spa-brown mb-4">Welcome to Linda Massage, Spa and Wellness</h3>
              <p className="text-spa-brown/70 mb-6 leading-relaxed">
                Step into a sanctuary where tranquility meets transformation. I combine ancient techniques with modern
                wellness practices to deliver an experience that restores your natural balance.
              </p>
              <div className="flex gap-4">
                <Button
                  onClick={() => setIsBookingOpen(true)}
                  className="bg-spa-orange hover:bg-spa-orange-light text-spa-cream px-6 py-2 rounded-full text-sm"
                >
                  Book Now
                </Button>
                <Button
                  variant="outline"
                  className="border-spa-orange text-spa-orange hover:bg-spa-orange hover:text-spa-cream px-6 py-2 rounded-full text-sm bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  )
}
