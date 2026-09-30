import { Button } from "../ui/button";


export default function ContactCTA() {
  return (
    <section className="relative bg-spa-cream py-36 overflow-hidden">

      {/* ---------- Corner Images (top & bottom edges) ---------- */}
      {/* Top Left */}
      <img
        src="/spa1.jpg"
        alt=""
        className="absolute top-8 left-8 w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover shadow-lg"
      />

      {/* Top Right */}
      <img
        src="/spa2.jpg"
        alt=""
        className="absolute top-8 right-8 w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover shadow-lg"
      />

      {/* Bottom Left */}
      <img
        src="/spa3.jpg"
        alt=""
        className="absolute bottom-8 left-8 w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover shadow-lg"
      />

      {/* Bottom Right */}
      <img
        src="/spa4.jpg"
        alt=""
        className="absolute bottom-8 right-8 w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover shadow-lg"
      />

      {/* ---------- Center CTA Content ---------- */}
      <div className="relative z-10 max-w-[1236px] mx-auto px-6 text-center my-32">
        <h2 className="font-serif text-3xl md:text-4xl text-spa-brown mb-4">
          HAVE QUESTIONS? WE&apos;RE <br /> JUST A CALL AWAY
        </h2>

        <p className="text-spa-brown/70 max-w-xl mx-auto mb-8">
          Whether you're ready to book your next spa day or simply have a
          question, we’re here to assist you anytime.
        </p>

        <Button className="bg-spa-orange hover:bg-spa-orange-light text-spa-cream px-8 py-3 rounded-full font-medium">
          CONTACT US
        </Button>
      </div>
    </section>
  )
}
