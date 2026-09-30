import Link from "next/link";
import Image from "next/image";
import { Leaf, Mail, Phone } from "lucide-react";

export default function Footer() {
  const paymentMethods = [
    { name: "Chime", icon: "/payments/chime.png" },
    { name: "Bitcoin", icon: "/payments/bitcoin.png" },
    { name: "Gift Card", icon: "/payments/giftcard.png" },
    { name: "Zelle", icon: "/payments/zelle.png" },
    { name: "Cash App", icon: "/payments/cashapp.png" },
  ];

  const services = [
    "Swedish Massage",
    "Deep Tissue Massage",
    "Hot Stone Massage",
    "Sports Massage",
    "Aromatherapy Massage",
    "Nuru Massage",
  ];

  return (
    <footer className="bg-[#303822] text-[#f7f3eb]">
      <div className="mx-auto max-w-[1236px] px-6 py-12">

        {/* Main Footer */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="mb-4 flex items-center gap-3"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#adb718]">
                <Leaf size={17} className="text-white" />
              </div>

              <span className="font-serif text-xl font-semibold">
                Linda Massage
              </span>
            </Link>

            <p className="max-w-xs text-sm leading-6 text-white/60">
              A peaceful space for massage, relaxation, and wellness.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-serif text-lg">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2.5 text-sm text-white/60">
              <Link
                href="/"
                className="transition hover:text-[#adb718]"
              >
                Home
              </Link>

              <Link
                href="/contact"
                className="transition hover:text-[#adb718]"
              >
                Contact
              </Link>

              <a
                href="#reviews"
                className="transition hover:text-[#adb718]"
              >
                Reviews
              </a>

              <a
                href="#about"
                className="transition hover:text-[#adb718]"
              >
                About
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-serif text-lg">
              Services
            </h3>

            <div className="grid grid-cols-1 gap-2.5 text-sm text-white/60">
              {services.map((service) => (
                <a
                  key={service}
                  href="#services"
                  className="transition hover:text-[#adb718]"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-serif text-lg">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-white/60">

              <a
                href="tel:+16154579792"
                className="flex items-center gap-3 transition hover:text-[#adb718]"
              >
                <Phone size={15} />
                <span>+1 (951) 536-8206</span>
              </a>

              <a
                href="mailto:sdbrooke1005@gmail.com"
                className="flex items-start gap-3 transition hover:text-[#adb718]"
              >
                <Mail
                  size={15}
                  className="mt-1 shrink-0"
                />

                <span className="break-all">
                  sm160957a@gmail.com
                </span>
              </a>

              <p className="pt-1">
                Available for Incall & Outcall
              </p>

            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-7 lg:flex-row lg:items-center lg:justify-between">

          {/* Payment Methods */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs text-white/50">
              We Accept:
            </span>

            {paymentMethods.map((method) => (
              <div
                key={method.name}
                title={method.name}
                className="
                  flex
                  h-9
                  w-12
                  items-center
                  justify-center
                  rounded-md
                  bg-white
                  p-1.5
                  transition
                  hover:scale-105
                "
              >
                <Image
                  src={method.icon}
                  alt={method.name}
                  width={40}
                  height={24}
                  className="max-h-6 w-auto object-contain"
                />
              </div>
            ))}

            <div
              className="
                flex
                h-9
                items-center
                rounded-md
                bg-black
                px-3
                text-[10px]
                text-white
              "
            >
              Cash
            </div>
          </div>

          {/* Copyright */}
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Linda Massage Spa & Wellness
          </p>

        </div>
      </div>
    </footer>
  );
}
