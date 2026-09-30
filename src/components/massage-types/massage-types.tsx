import {
  Smile,
  Hand,
  Flame,
  Dumbbell,
  Flower2,
  Sparkles,
} from "lucide-react";

const massageTypes = [
  {
    icon: Smile,
    title: "SWEDISH MASSAGE",
    description:
      "A gentle, relaxing massage using long, smooth strokes to reduce stress, improve circulation, and ease muscle tension.",
  },
  {
    icon: Hand,
    title: "DEEP TISSUE MASSAGE",
    description:
      "Uses firm pressure and slow strokes to target deep muscle layers, helping relieve chronic pain, tight muscles, and stiffness.",
  },
  {
    icon: Flame,
    title: "HOT STONE MASSAGE",
    description:
      "Warm, smooth stones are placed on the body to relax muscles, improve circulation, and promote deep relaxation.",
  },
  {
    icon: Dumbbell,
    title: "SPORTS MASSAGE",
    description:
      "Designed for active people and athletes to improve performance, prevent injuries, reduce muscle soreness, and speed up recovery.",
  },
  {
    icon: Flower2,
    title: "AROMATHERAPY MASSAGE",
    description:
      "A relaxing massage combined with essential oils to reduce stress, improve mood, ease tension, and promote overall well-being.",
  },
  {
    icon: Sparkles,
    title: "NURU MASSAGE",
    description:
      "A body-to-body massage using a warm, silky gel for smooth, full-body contact and a deeply relaxing experience.",
  },
];

export default function MassageTypes() {
  return (
    <section className="bg-spa-beige py-20">
      <div className="mx-auto max-w-[1236px] px-6">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">
            Our Massage Services
          </p>

          <h2 className="mt-4 font-serif text-5xl text-spa-brown">
            Relax, Restore & Rejuvenate
          </h2>

          <p className="mt-6 text-lg leading-8 text-spa-brown/70">
            Discover our carefully curated massage treatments designed to ease
            tension, restore balance, and provide a luxurious wellness
            experience tailored to your individual needs.
          </p>
        </div>

        {/* Services */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {massageTypes.map((massage, index) => {
            const IconComponent = massage.icon;

            return (
              <div
                key={index}
                className="group cursor-pointer text-center transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                  <IconComponent
                    className="h-9 w-9 text-spa-brown transition-colors duration-300 group-hover:text-amber-600"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="mb-3 font-serif text-xl text-spa-brown">
                  {massage.title}
                </h3>

                <p className="mx-auto max-w-sm leading-7 text-spa-brown/70">
                  {massage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}