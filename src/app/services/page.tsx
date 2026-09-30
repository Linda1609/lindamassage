"use client"

import { useState } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Image from "next/image"
import { Clock, ArrowRight } from "lucide-react"
import BookingModal from "@/components/booking/booking-modal"

export default function ServicesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const services = [
    {
      category: "MASSAGE THERAPY",
      description:
        "Thoughtfully designed treatments to release tension, restore balance, and leave you feeling deeply renewed.",
      treatments: [
        {
          name: "SWEDISH MASSAGE",
          description:
            "A gentle, relaxing massage using long, flowing strokes to improve circulation, reduce stress, and ease everyday muscle tension.",
          duration: "60 min",
          price: "$90",
          image: "/relaxing-swedish-massage-therapy.jpg",
        },
        {
          name: "DEEP TISSUE MASSAGE",
          description:
            "A focused therapeutic treatment targeting deeper layers of muscle to help relieve stiffness, tension, and persistent muscle discomfort.",
          duration: "60 min",
          price: "$110",
          image: "/deep-tissue-massage-therapy-back.jpg",
        },
        {
          name: "SPORTS MASSAGE",
          description:
            "A targeted treatment for active individuals designed to support muscle recovery, flexibility, mobility, and overall physical wellbeing.",
          duration: "90 min",
          price: "$130",
          image: "/thai-massage-stretching-therapy.jpg",
        },
        {
          name: "HOT STONE MASSAGE",
          description:
            "Warm basalt stones combined with therapeutic massage techniques to encourage deep relaxation and ease muscular tension.",
          duration: "75 min",
          price: "$120",
          image: "/hot-stone-massage-therapy-spa.jpg",
        },
        {
          name: "AROMATHERAPY MASSAGE",
          description:
            "A calming massage experience incorporating carefully selected essential oils to create a soothing atmosphere and encourage relaxation.",
          duration: "75 min",
          price: "$120",
          image: "/hot-stone-massage-therapy-spa.jpg",
        },
      ],
    },
  ]

  const openBooking = () => {
    setIsBookingOpen(true)
  }

  const closeBooking = () => {
    setIsBookingOpen(false)
  }

  return (
    <main className="min-h-screen bg-spa-cream">
      <Header />

      {/* =========================
          HERO
      ========================== */}
      <section className="relative pt-32 pb-24 bg-spa-orange overflow-hidden">
        <div className="max-w-[1236px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-spa-cream/70 text-xs font-medium uppercase tracking-[0.25em] mb-5">
              Treatments & Wellness
            </span>

            <h1 className="font-serif text-4xl md:text-6xl text-spa-cream mb-6">
              Our Services
            </h1>

            <p className="text-spa-cream/90 text-lg leading-relaxed max-w-2xl mx-auto">
              Thoughtful treatments designed to help you slow down, release
              tension, and reconnect with a sense of calm.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-spa-cream rounded-t-[50%]" />
      </section>

      {/* =========================
          SERVICES
      ========================== */}
      {services.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`py-20 ${
            categoryIndex % 2 === 1
              ? "bg-spa-beige/30"
              : "bg-spa-cream"
          }`}
        >
          <div className="max-w-[1236px] mx-auto px-6">

            {/* Section Header */}
            <div className="max-w-2xl mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-spa-orange text-xs font-medium tracking-[0.2em]">
                  {String(categoryIndex + 1).padStart(2, "0")}
                </span>

                <span className="h-px w-10 bg-spa-orange/40" />

                <span className="text-spa-brown/50 text-xs uppercase tracking-[0.18em]">
                  Treatments
                </span>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl text-spa-brown leading-tight mb-4">
                {category.category}
              </h2>

              <p className="text-spa-brown/65 leading-7 max-w-xl">
                {category.description}
              </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.treatments.map((treatment, index) => (
                <article
                  key={index}
                  className="group bg-white border border-spa-brown/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-spa-brown/20 hover:shadow-md"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-spa-beige">
                    <Image
                      src={treatment.image || "/placeholder.svg"}
                      alt={treatment.name}
                      width={600}
                      height={375}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />

                    {/* Number */}
                    <div className="absolute top-4 left-4 w-8 h-8 rounded-md bg-spa-cream/95 flex items-center justify-center">
                      <span className="text-[11px] font-medium tracking-wider text-spa-brown">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">

                    {/* Title + Price */}
                    <div className="flex items-start justify-between gap-4 pb-4 border-b border-spa-brown/10">
                      <div>
                        <h3 className="font-serif text-xl text-spa-brown leading-tight">
                          {treatment.name}
                        </h3>

                        <div className="flex items-center gap-1.5 mt-2 text-spa-brown/50 text-xs">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{treatment.duration}</span>
                        </div>
                      </div>

                      <span className="font-serif text-lg text-spa-orange whitespace-nowrap">
                        {treatment.price}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-spa-brown/60 text-sm leading-6 mt-4">
                      {treatment.description}
                    </p>

                    {/* Action */}
                    <div className="mt-5 pt-4 border-t border-spa-brown/10">
                      <button
                        type="button"
                        onClick={openBooking}
                        className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] font-medium text-spa-brown hover:text-spa-orange transition-colors"
                      >
                        Reserve Treatment

                        <span className="flex items-center justify-center w-7 h-7 rounded-full border border-spa-brown/15 group-hover:border-spa-orange group-hover:bg-spa-orange group-hover:text-white transition-all duration-300">
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* =========================
          BOOKING CTA
      ========================== */}
      <section className="py-20 bg-spa-sage-dark">
        <div className="max-w-[1236px] mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">

            <span className="inline-block text-spa-orange text-xs font-medium uppercase tracking-[0.2em] mb-4">
              Your Time
            </span>

            <h2 className="font-serif text-4xl md:text-5xl text-spa-cream mb-5">
              Make Time For Yourself
            </h2>

            <p className="text-spa-cream/70 max-w-xl mx-auto mb-8 leading-7">
              Choose a treatment and take a moment to slow down, release
              tension, and enjoy a little time dedicated to your wellbeing.
            </p>

            <button
              type="button"
              onClick={openBooking}
              className="inline-flex items-center gap-3 bg-white hover:bg-spa-orange-light text-black px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300"
            >
              Book an Appointment
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================
          BOOKING MODAL
      ========================== */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={closeBooking}
      />

    </main>
  )
}
