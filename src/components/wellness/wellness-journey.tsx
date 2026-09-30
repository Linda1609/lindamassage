import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function WellnessJourney() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-spa-cream">
      <div className="max-w-[1236px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* IMAGE GRID */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 order-1 md:order-1">

            <div className="space-y-3 sm:space-y-4">
              <div className="relative h-40 sm:h-48 rounded-2xl overflow-hidden">
                <Image
                  src="/woman-spa-facial-treatment-relaxing-peaceful-cucum.jpg"
                  alt="Facial treatment"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-28 sm:h-32 rounded-2xl overflow-hidden">
                <Image
                  src="/spa-candles-aromatherapy-zen-peaceful-warm-lightin.jpg"
                  alt="Aromatherapy"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-8">
              <div className="relative h-28 sm:h-32 rounded-2xl overflow-hidden">
                <Image
                  src="/hot-stone-massage-spa-treatment-warm-stones-back.jpg"
                  alt="Hot stone massage"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-40 sm:h-48 rounded-2xl overflow-hidden">
                <Image
                  src="/woman-back-massage-spa-relaxation-professional-the.jpg"
                  alt="Back massage"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>

          {/* CONTENT */}
          <div className="order-2 md:order-2">

            <h2 className="font-serif text-2xl md:text-2xl text-spa-brown mb-5 md:mb-6 leading-tight">
              DISCOVER PEACE AND COMFORT, START YOUR WELLNESS JOURNEY WITH US TODAY
            </h2>

            <p className="text-spa-brown/70 mb-4 md:mb-6 leading-relaxed text-sm sm:text-base">
              Linda&apos; Relax Studio, every detail is designed to help you let go of stress and tensions without. From soothing
              environments to personalized care, each experience is designed to promote deep relaxation and renewal that lasts.
            </p>

            <p className="text-spa-brown/70 mb-6 md:mb-8 leading-relaxed text-sm sm:text-base">
              We combine expert techniques with premium products such as custom candles and blends to create deeply
              calming moments. Whether you seek relief, energy or balance, our treatments are tailored to your body and
              mind. Whether you&apos;re looking to unwind after a busy week or treat yourself. You&apos;re more than just self-care —
              it&apos;s your personal break from a busy world & moment for yourself.
            </p>

            <Button className="bg-spa-orange hover:bg-spa-orange-light text-spa-cream px-6 sm:px-8 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2">
              Read More
              <ArrowRight className="w-4 h-4" />
            </Button>

          </div>

        </div>
      </div>
    </section>
  )
}