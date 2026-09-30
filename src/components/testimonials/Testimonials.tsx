"use client"

import { useEffect, useState } from "react"
import { Star, CheckCircle } from "lucide-react"
import Image from "next/image"
import ReviewForm from "../review/reviewForm"


type Testimonial = {
  name: string
  text: string
  role?: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Client",
    text: "Absolutely relaxing experience. Linda’s hands are magic.",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Emily Carter",
    role: "Client",
    text: "Best massage therapy I’ve ever had. Highly recommended.",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Michael Brown",
    role: "Client",
    text: "I had severe back pain and now I feel so much better.",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Jessica Lee",
    role: "Client",
    text: "Very peaceful studio. I felt relaxed instantly.",
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "David Wilson",
    role: "Client",
    text: "Professional and calming experience. Loved it.",
    image: "https://i.pravatar.cc/150?img=5",
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [toast, setToast] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 4500)

    return () => clearInterval(interval)
  }, [])

  const current = testimonials[index]

  // show toast after review submit (triggered from form via event)
  useEffect(() => {
    const handler = () => {
      setToast(true)
      setTimeout(() => setToast(false), 3000)
    }

    window.addEventListener("review-submitted", handler)
    return () => window.removeEventListener("review-submitted", handler)
  }, [])

  return (
    <section className="py-16 md:py-20 bg-spa-cream relative">
      <div className="max-w-[1236px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* TITLE */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-spa-brown italic">
            What Our Clients Say
          </h2>
        </div>

        {/* MAIN GRID */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">

          {/* LEFT - TESTIMONIAL CAROUSEL */}
          <div className="flex">
  <div className="w-full h-full">

              <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 text-center border border-spa-orange/10 h-full flex flex-col justify-center">

                {/* Avatar */}
                <div className="flex justify-center mb-4">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-spa-orange">
                    <Image
                      src={current.image}
                      alt={current.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-spa-orange fill-spa-orange"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-spa-brown/80 text-sm sm:text-base leading-relaxed mb-6 min-h-[80px]">
                  “{current.text}”
                </p>

                {/* Name */}
                <h4 className="font-serif text-spa-brown text-lg">
                  {current.name}
                </h4>

                <span className="text-xs text-spa-brown/60">
                  {current.role}
                </span>
              </div>

              {/* DOTS */}
              <div className="flex justify-center mt-6 gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === index
                        ? "bg-spa-orange scale-110"
                        : "bg-spa-orange/30"
                    }`}
                  />
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT - REVIEW FORM */}
          <div className="flex">
  <div className="w-full h-full">

              <div className="text-center mb-4">
                <h3 className="font-serif text-xl md:text-2xl text-spa-brown">
                  Leave Your Review
                </h3>
                <p className="text-spa-brown/60 text-sm mt-1">
                  Share your experience with us
                </p>
              </div>

              <div className="h-full">
  <ReviewForm />
</div>

            </div>
          </div>

        </div>
      </div>

      {/* TOAST */}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-2">
          <CheckCircle className="w-5 h-5" />
          Review submitted successfully!
        </div>
      )}
    </section>
  )
}