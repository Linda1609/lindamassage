import Image from "next/image"

export default function FacialBenefits() {
  return (
    <section className="py-20 bg-spa-orange">
      <div className="max-w-[1236px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-spa-cream mb-6">
              ADVANTAGES OF
              <br />
              FACIAL MASSAGE
            </h2>
            <ul className="space-y-4 text-spa-cream/90">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-spa-cream mt-2 flex-shrink-0" />
                <span>Improves blood circulation and lymphatic drainage</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-spa-cream mt-2 flex-shrink-0" />
                <span>Reduces facial tension and relieves stress</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-spa-cream mt-2 flex-shrink-0" />
                <span>Promotes collagen production for youthful skin</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-spa-cream mt-2 flex-shrink-0" />
                <span>Enhances absorption of skincare products</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-spa-cream mt-2 flex-shrink-0" />
                <span>Naturally lifts and tones facial muscles</span>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="relative h-80 md:h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="/woman-facial-massage-spa-treatment-serene-close-up.jpg"
                alt="Facial massage treatment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
