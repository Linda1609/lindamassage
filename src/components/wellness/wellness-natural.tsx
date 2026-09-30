import Image from "next/image"
import Link from "next/link"

export default function WellnessNatural() {
  return (
    <section className="py-20 bg-spa-cream">
      <div className="max-w-[1236px] mx-auto px-6">
        
        {/* Title Row */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-spa-brown">
            Wellness, The Natural Way
          </h2>
          <Link href="#" className="text-spa-orange text-sm font-medium hover:underline">
            SEE MORE →
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* LARGE LEFT CARD */}
          <div className="relative rounded-2xl overflow-hidden h-[340px] md:col-span-1">
            <Image
              src="/organic-natural-spa-ingredients-herbs-flowers-in-w.jpg"
              alt="Spa relaxation"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-xs opacity-80">Come • October 24, 2025</p>
              <h3 className="text-lg font-semibold">Pampering Experiences You Deserve</h3>
            </div>
          </div>

          {/* RIGHT COLUMN (2 cards stacked) */}
          <div className="flex flex-col gap-6 md:col-span-2">

            {/* CARD 2 + CARD 3 */}
            <div className="grid grid-cols-2 gap-6">

              {/* CARD 2 */}
              <div className="bg-white/25 p-4 rounded-2xl overflow-hidden shadow-sm w-full">
                <div className="relative w-full h-48 rounded-xl overflow-hidden">
                  <Image
                    src="/woman-enjoying-natural-herbal-spa-treatment-with-l.jpg"
                    alt="Relaxation massage"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-spa-brown/60">Chiew • March 5, 2025</p>
                  <h4 className="text-base font-semibold text-spa-brown">
                    Experience the Gentle Touch of Relaxation That Restores
                  </h4>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="bg-[#efe3d3] p-4 rounded-2xl overflow-hidden shadow-sm w-full">
                <div className="relative w-full h-48 rounded-xl overflow-hidden">
                  <Image
                    src="/woman-enjoying-natural-herbal-spa-treatment-with-l.jpg"
                    alt="Luxury spa moment"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-spa-brown/60">Donna • August 2, 2019</p>
                  <h4 className="text-base font-semibold text-spa-brown">
                    Unwind in the Lap of Luxury, Where Every Detail is Designed
                  </h4>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
