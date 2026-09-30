import Image from "next/image"
import Link from "next/link"

const products = [
  {
    image: "/luxury-gold-hand-balm-skincare-product-elegant-pac.jpg",
    name: "Nourishing Hand Balm",
    price: "$45.00",
  },
  {
    image: "/soft-touch-hand-cream-spa-product-white-tube.jpg",
    name: "Soft Touch Hand Cream",
    price: "$38.99",
  },
  {
    image: "/silk-restore-hand-lotion-spa-product-elegant-bottl.jpg",
    name: "Silk Restore Hand Lotion",
    price: "$42.00",
  },
]

export default function StoreProducts() {
  return (
    <section className="py-20 bg-spa-cream">
      <div className="max-w-[1236px] mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-serif text-3xl text-spa-brown">OUR STORE</h2>
          <Link href="#" className="text-spa-orange text-sm font-medium hover:underline">
            SHOP ALL →
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative h-80 bg-spa-beige/50 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-8 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-spa-brown font-medium mb-1">{product.name}</h3>
              <p className="text-spa-orange font-semibold">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
