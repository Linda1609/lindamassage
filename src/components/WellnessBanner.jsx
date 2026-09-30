"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Heart,
  Sparkles,
  Flower2,
} from "lucide-react";
import BookingModal from "./booking/booking-modal";


export default function WellnessBanner() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-[#332424]">
        {/* ================= BACKGROUND ================= */}

        {/* Olive glow */}
        <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#adb718]/20 blur-[100px]" />

        {/* Gold glow */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#c8a97e]/15 blur-[100px]" />

        {/* Decorative circles */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full border border-[#adb718]/20" />

        <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full border border-[#adb718]/10" />

        <div className="pointer-events-none absolute -bottom-40 -right-20 h-[450px] w-[450px] rounded-full border-[50px] border-[#c8a97e]/5" />

        {/* ================= CONTENT ================= */}

        <div className="relative mx-auto max-w-[1236px] px-6 py-20 sm:py-24 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto_1fr]">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#adb718]" />

                <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#c8a97e]">
                  Massage • Spa • Wellness
                </span>
              </div>

              <h2 className="mt-5 max-w-xl font-serif text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                Give yourself
                <span className="block italic text-[#adb718]">
                  permission to relax.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-base leading-7 text-white/60 sm:text-lg">
                Step away from the everyday and take a moment to reconnect
                with yourself through personalized massage and wellness care.
              </p>
            </motion.div>

            {/* CENTER ICON */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:flex"
            >
              <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-[#adb718]/30">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#adb718]/10">
                  <Flower2
                    size={38}
                    strokeWidth={1}
                    className="text-[#adb718]"
                  />
                </div>

                {/* Rotating ring */}
                <div className="absolute inset-3 rounded-full border border-dashed border-[#c8a97e]/30 animate-[spin_20s_linear_infinite]" />
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:justify-self-end"
            >
              {/* Features */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#adb718]/15">
                    <Heart
                      size={18}
                      className="text-[#adb718]"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">
                      Personalized Care
                    </p>
                    <p className="mt-1 text-xs text-white/40">
                      Designed around you
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#adb718]/15">
                    <Sparkles
                      size={18}
                      className="text-[#adb718]"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">
                      Relaxing Experience
                    </p>
                    <p className="mt-1 text-xs text-white/40">
                      Slow down & recharge
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#adb718]/15">
                    <Flower2
                      size={18}
                      className="text-[#adb718]"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">
                      Complete Wellness
                    </p>
                    <p className="mt-1 text-xs text-white/40">
                      Body • Mind • Balance
                    </p>
                  </div>
                </div>

              </div>

              {/* CTA */}
              <button
                type="button"
                onClick={() => setIsBookingOpen(true)}
                className="
                  group
                  mt-7
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-full
                  bg-[#adb718]
                  px-6
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#c0c929]
                  hover:shadow-[0_10px_40px_rgba(173,183,24,0.2)]
                "
              >
                <span>Book Your Wellness Session</span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowUpRight size={17} />
                </span>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#adb718] to-transparent opacity-60" />
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}
