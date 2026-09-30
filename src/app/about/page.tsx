"use client"

import { useState } from "react"
import Header from "@/components/layout/header"
import Image from "next/image"
import { Leaf, Heart, Award, Star } from "lucide-react"
import BookingModal from "@/components/booking/booking-modal"
import WhatsAppWidget from "@/components/Whatsapp"

export default function AboutPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const values = [
    {
      icon: Heart,
      title: "Holistic Wellness",
      description:
        "I believe in treating the whole person - mind, body, and spirit - through my comprehensive wellness approach.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "With years of experience and continuous training, I deliver exceptional therapeutic techniques.",
    },
    {
      icon: Star,
      title: "Personalized Care",
      description:
        "Every treatment is tailored to your unique needs, ensuring the most effective and relaxing experience.",
    },
    {
      icon: Leaf,
      title: "Natural Products",
      description:
        "I use only premium, organic products that are gentle on your skin and the environment.",
    },
  ]

  return (
    <main className="min-h-screen bg-spa-cream">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#ADB718] overflow-hidden">
        <div className="max-w-[1236px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl text-spa-cream mb-6 text-balance">
              About Linda Massage & Wellness
            </h1>

            <p className="text-spa-cream/90 text-lg leading-relaxed">
              A sanctuary of wellness where ancient healing traditions meet
              modern relaxation techniques.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-spa-cream rounded-t-[50%]" />
      </section>

      {/* About Linda */}
      <section className="py-24 bg-[#faf7f2]">
        <div className="max-w-[1236px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Image */}
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-24 h-24 rounded-full border border-spa-orange/30" />

              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl">
                <Image
                  src="/images/linda4.jpg"
                  alt="Linda - Massage Therapist"
                  width={600}
                  height={750}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-2xl shadow-lg px-6 py-5">
                <p className="text-xs uppercase tracking-widest text-spa-orange font-medium">
                  Personalized Care
                </p>

                <p className="font-serif text-xl text-spa-brown mt-1">
                  Relax. Restore. Reconnect.
                </p>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="inline-block text-spa-orange font-medium text-sm uppercase tracking-[0.2em]">
                Meet Linda
              </span>

              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-spa-brown mt-3 mb-7">
                A Relaxing Experience, Designed Around You
              </h2>

              <div className="space-y-5 text-spa-brown/75 leading-relaxed">
                <p>
                  Welcome, I’m Linda. I believe massage should be more than
                  simply taking time out of your day — it should be an
                  opportunity to slow down, release tension, and enjoy a moment
                  completely dedicated to your wellbeing.
                </p>

                <p>
                  My approach is warm, attentive, and personalized. Every
                  session is tailored to your preferences, whether you’re
                  looking to ease everyday tension, unwind after a busy week,
                  or simply enjoy a peaceful escape from your routine.
                </p>

                <p>
                  I value genuine connection, respectful communication, and
                  creating an environment where you can feel comfortable from
                  the moment you arrive.
                </p>

                <p>
                  Take a little time for yourself. Step away from the noise,
                  settle in, and let the experience be about you.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-6 mt-9 pt-8 border-t border-spa-brown/10">
                <div>
                  <p className="font-serif text-xl text-spa-brown">
                    Personalized
                  </p>

                  <p className="text-sm text-spa-brown/60 mt-1">
                    Sessions tailored to you
                  </p>
                </div>

                <div>
                  <p className="font-serif text-xl text-spa-brown">
                    Welcoming
                  </p>

                  <p className="text-sm text-spa-brown/60 mt-1">
                    A calm, comfortable atmosphere
                  </p>
                </div>
              </div>

              {/* Booking Button */}
              <div className="mt-9">
                <button
                  type="button"
                  onClick={() => setIsBookingOpen(true)}
                  className="inline-flex items-center justify-center rounded-full bg-spa-brown text-white px-7 py-3.5 text-sm font-medium hover:bg-[#ADB718] transition-colors duration-300"
                >
                  Book a Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
     <section className="py-20 bg-spa-beige/50">
  <div className="max-w-[1236px] mx-auto px-6">
    <div className="text-center max-w-2xl mx-auto mb-16">
      <span className="text-spa-orange font-medium text-sm uppercase tracking-wider">
        My Values
      </span>

      <h2 className="font-serif text-3xl md:text-4xl text-spa-brown mt-2 text-balance">
        What I Stand For
      </h2>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {values.map((value, index) => {
        const Icon = value.icon

        return (
          <div
            key={index}
            className="bg-spa-cream rounded-tl-3xl rounded-bl-3xl p-8 text-center hover:shadow-lg transition-shadow"
          >
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <Icon className="w-8 h-8 text-green-600" />
            </div>

            <h3 className="font-serif text-xl text-spa-brown mb-3">
              {value.title}
            </h3>

            <p className="text-spa-brown/70 text-sm leading-relaxed">
              {value.description}
            </p>
          </div>
        )
      })}
    </div>
  </div>
</section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
      <WhatsAppWidget/>
    </main>
  )
}
