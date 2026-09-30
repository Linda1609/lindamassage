import Image from "next/image";

const galleryImages = [
  { src: "/aromatherapy-essential-oils-spa-bottles-warm-light.jpg", alt: "Portrait spa girl" },
  { src: "/aromatherapy-essential-oils-spa-bottles-warm-candl.jpg", alt: "Oil pouring" },
  { src: "/spa.jpg", alt: "Face massage" },
  { src: "/zen-spa-setup-with-hot-stones-candles-and-bamboo.jpg", alt: "Face mask woman" },
  { src: "/woman-receiving-luxury-facial-mask-treatment-at-sp.jpg", alt: "Green facial" },
  { src: "/luxury-spa-amenities-towels-flowers-and-wellness-p.jpg", alt: "Massage bed" },
  { src: "/luxury-spa-amenities-towels-flowers-and-wellness-p.jpg", alt: "Spa relaxation" },
];

export default function SpaGallery() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-spa-beige">
      <div className="max-w-[1236px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-spa-brown italic">
            Our Spa in Focus
          </h2>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">

          {/* LEFT COLUMN */}
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:col-span-2">
            {[0, 1].map((i) => (
              <div
                key={i}
                className="relative h-40 sm:h-48 md:h-44 rounded-lg overflow-hidden"
              >
                <Image
                  src={galleryImages[i].src}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* MIDDLE COLUMN (BIG IMAGE) */}
          <div className="md:col-span-7">
            <div className="relative h-64 sm:h-80 md:h-[420px] rounded-lg overflow-hidden">
              <Image
                src={galleryImages[2].src}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT GRID */}
          <div className="grid grid-cols-2 gap-4 md:col-span-3">
            {[3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="relative h-32 sm:h-40 md:h-[200px] rounded-lg overflow-hidden"
              >
                <Image
                  src={galleryImages[i].src}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}