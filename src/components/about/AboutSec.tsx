"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Gallery from "./Gallery";
import BookingModal from "../booking/booking-modal";


export default function AboutSec() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-[#f7f3eb] py-20 md:py-28 lg:py-36">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#adb718]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#c8a97e]/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1236px] px-6">
          <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">

            {/* ================= IMAGE SIDE ================= */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto w-full max-w-[520px]"
            >
              {/* Main image */}
              <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/linda1.jpg"
                  alt="Linda massage therapist"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Small overlapping image */}
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                }}
                className="
                  absolute
                  -bottom-8
                  -right-5
                  z-20
                  h-44
                  w-40
                  overflow-hidden
                  rounded-2xl
                  border-[6px]
                  border-[#f7f3eb]
                  shadow-2xl
                  sm:h-52
                  sm:w-48
                  md:-right-10
                "
              >
                <Image
                  src="/images/therapy1.jpg"
                  alt="Relaxing massage treatment room"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </motion.div> */}

              {/* Floating experience card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                }}
                className="
                  absolute
                  -left-4
                  bottom-8
                  z-30
                  rounded-2xl
                  bg-white
                  px-5
                  py-4
                  shadow-xl
                  sm:-left-8
                "
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#adb718]/15">
                    <Sparkles
                      size={18}
                      className="text-[#7d8500]"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#332424]">
                      Personal Care
                    </p>

                    <p className="text-xs text-[#332424]/60">
                      Relax • Restore • Reconnect
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative circle */}
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full border border-[#adb718]/30 sm:h-36 sm:w-36" />
            </motion.div>

            {/* ================= CONTENT SIDE ================= */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              {/* Eyebrow */}
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-10 bg-[#adb718]" />

                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8d792d]">
                  Meet Linda
                </span>
              </div>

              {/* Heading */}
              <h2
                className="
                  max-w-xl
                  font-serif
                  text-4xl
                  leading-[1.08]
                  text-[#332424]
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                A moment of calm,
                <span className="block italic text-[#8d9920]">
                  made just for you.
                </span>
              </h2>

              {/* Intro */}
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#332424]/70">
                Welcome. I’m Linda, and my approach to massage is centered
                around creating a calm, comfortable and personalized wellness
                experience.
              </p>

              {/* Divider */}
              <div className="my-8 h-px w-full max-w-xl bg-[#332424]/10" />

              {/* Content */}
              <div className="max-w-xl space-y-5 text-[15px] leading-7 text-[#332424]/65">
                <p>
                  With experience in therapeutic massage and holistic wellness,
                  I combine traditional techniques with a thoughtful,
                  contemporary approach to relaxation and self-care.
                </p>

                <p>
                  Every session is designed around your individual needs,
                  whether your goal is to unwind after a demanding week,
                  release everyday tension, or simply make time for yourself.
                </p>

                <p>
                  My goal is simple: to create an environment where you can
                  slow down, relax and leave feeling refreshed.
                </p>
              </div>

              {/* Bottom information */}
              <div className="mt-9 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

                {/* BOOK SESSION BUTTON */}
                <button
                  type="button"
                  onClick={() => setIsBookingOpen(true)}
                  className="
                    group
                    inline-flex
                    w-fit
                    items-center
                    gap-3
                    rounded-full
                    bg-[#adb718]
                    px-7
                    py-4
                    text-sm
                    font-semibold
                    text-white
                    transition
                    duration-300
                    hover:bg-[#8f980b]
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#adb718]
                    focus:ring-offset-2
                  "
                >
                  Book Your Session

                  <span
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      bg-white/20
                      transition
                      group-hover:translate-x-1
                    "
                  >
                    <ArrowUpRight size={15} />
                  </span>
                </button>

                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#332424]/50">
                  <span className="h-2 w-2 rounded-full bg-[#adb718]" />
                  Wellness & Massage
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <Gallery />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}
