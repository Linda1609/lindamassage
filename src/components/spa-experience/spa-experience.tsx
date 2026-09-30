import Image from "next/image";
import Link from "next/link";
import { Spade, Heart, Smile } from "lucide-react";

const experiences = [
  {
    icon: <Spade className="w-8 h-8 text-spa-orange" />,
    title: "HAIR SPA",
    description:
      "Experience a deeply rejuvenating treatment that relieves dull, damaged, or stressed hair. Our therapies are crafted to restore strength.",
    services: [
      { name: "HAIR THERAPY", time: "30 Minutes" },
      { name: "HAIR NOURISHMENT", time: "45 Minutes" },
      { name: "HAIR RENEWAL", time: "60 Minutes" },
    ],
  },
  {
    icon: <Heart className="w-8 h-8 text-spa-orange" />,
    title: "BODY MASSAGE",
    description:
      "Enjoy a nourishing care session that breathes life into tired muscles, cleanses, or relaxes the body. Our treatments aim to fortify and protect.",
    services: [
      { name: "FULL BODY MASSAGE", time: "90 Minutes" },
      { name: "BODY RELAXATION", time: "85 Minutes" },
      { name: "MUSCLE RELIEF", time: "60 Minutes" },
    ],
  },
  {
    icon: <Smile className="w-8 h-8 text-spa-orange" />,
    title: "FACE MASSAGE",
    description:
      "Pamper yourself with a rich, revitalizing experience that renews and strengthens weakened or stressed skin. Immerse in a luxurious treatment that pleases.",
    services: [
      { name: "FACIAL THERAPY", time: "55 Minutes" },
      { name: "FACE TREATMENT", time: "65 Minutes" },
      { name: "SKIN REJUVENATION", time: "120 Minutes" },
    ],
  },
];

export default function SpaExperience() {
  return (
    <section className="py-20 bg-[#A6B88F]">
      <div className="max-w-[1250px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">
            The Ultimate Spa Experience
          </h2>
          <p className="text-white/90 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            The Ultimate Spa Experience combines luxury, comfort, and expert
            care to leave you feeling completely renewed.
          </p>
        </div>

        {/* Top 3 Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md border border-orange-50 hover:shadow-lg transition"
            >
              {/* Icon */}
              <div className="mb-5">{exp.icon}</div>

              {/* Title */}
              <h3 className="font-serif text-xl text-spa-brown mb-3 tracking-wide">
                {exp.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-spa-brown/70 mb-6 leading-relaxed">
                {exp.description}
              </p>

              {/* Service List */}
              <div className="space-y-4">
                {exp.services.map((service, sIndex) => (
                  <div
                    key={sIndex}
                    className="flex justify-between items-center text-sm border-b border-spa-cream/60 pb-2"
                  >
                    <span className="text-spa-brown">{service.name}</span>
                    <span className="text-spa-orange font-medium">
                      {service.time}
                    </span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <Link
                href="#"
                className="inline-block mt-6 border border-spa-green text-spa-green py-2 px-4 rounded-md text-sm hover:bg-spa-green hover:text-white transition"
              >
                LEARN MORE
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Hero Image + Overlay Block */}
       {/* Bottom Hero Image + Overlay Block */}
<div className="relative rounded-3xl overflow-hidden h-[430px] md:h-[520px] shadow-lg">

  {/* BG IMAGE */}
  <Image
    src="/faciaimg.jpg"
    alt="Spa Massage"
    fill
    className="object-cover"
    priority
  />

  {/* Top-left overlay box (LIKE SCREENSHOT) */}
  <div className="
      absolute 
      top-2 left-3
      w-[280px] md:w-[200px] 
      bg-black/45 
      backdrop-blur-sm 
      rounded-xl 
      p-6 
      shadow-md
    "
  >
    <h3 className="text-white font-serif text-base mb-3 leading-snug">
      ADVANTAGES OF<br />FACIAL MASSAGE
    </h3>

    <p className="text-white/90 text-xs leading-relaxed">
      A facial massage is more than just relaxation — it’s a powerful
      way to boost skin health and restore your natural glow.
    </p>
  </div>
</div>

      </div>
    </section>
  );
}
