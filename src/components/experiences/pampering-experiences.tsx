import Image from "next/image"

const experiences = [
  {
    image: "/woman-relaxing-luxury-spa-pampering-treatment.jpg",
    category: "Pampering Experiences",
    title: "Pampering Experiences You Deserve",
  },
  {
    image: "/peaceful-spa-massage-relaxation-therapy.jpg",
    category: "Pure • Peaceful • Luxe",
    title: "Experience the Gentle Touch of Relaxation That Restores",
  },
  {
    image: "/luxury-spa-interior-design-serene-atmosphere.jpg",
    category: "Discover • Enjoy • Unwind",
    title: "Immerse in the Lap of Luxury, Where Every Detail is Designed",
  },
]

export default function PamperingExperiences() {
  return (
    <section className="py-20 bg-spa-beige">
      <div className="max-w-[1236px] mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={exp.image || "/placeholder.svg"}
                  alt={exp.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-xs text-spa-orange mb-2 tracking-wider">{exp.category}</p>
              <h3 className="font-serif text-lg text-spa-brown leading-snug">{exp.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
