"use client";

import { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import BookingModal from "./booking/booking-modal";
import { services } from "@/constants/services";
import { ArrowUpRight } from "lucide-react";
export default function RateCardSection() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState("");

  const openBooking = (serviceId) => {
    setSelectedBooking(serviceId);
    setIsBookingOpen(true);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[#f6f2e9] py-20 md:py-28">

        {/* Decorative background */}
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#adb718]/10 blur-[100px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#c8a97e]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-[1236px] px-6">

          {/* ================= HEADER ================= */}
          <Fade direction="up" duration={900} triggerOnce>
            <div className="mb-14 text-center">

              <div className="mb-4 flex items-center justify-center gap-4">
                <span className="h-px w-10 bg-[#adb718]" />

                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8d792d]">
                  Our Treatments
                </p>

                <span className="h-px w-10 bg-[#adb718]" />
              </div>

              <h2 className="font-serif text-4xl leading-tight text-[#332424] sm:text-5xl md:text-6xl">
                Choose your
                <span className="ml-2 italic text-[#8d9920]">
                  experience.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#332424]/60 sm:text-base">
                Take a moment for yourself with one of our carefully selected
                massage and wellness experiences.
              </p>
            </div>
          </Fade>

          {/* ================= SERVICE CARDS ================= */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Slide
                  key={service.id}
                  direction="up"
                  triggerOnce
                  duration={700}
                  delay={index * 80}
                >
                  <article
                    className="
                      group
                      relative
                      flex
                      min-h-[390px]
                      flex-col
                      overflow-hidden
                      rounded-[2rem]
                      bg-white
                      p-7
                      shadow-[0_10px_40px_rgba(51,36,36,0.06)]
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      hover:shadow-[0_25px_60px_rgba(51,36,36,0.12)]
                      sm:p-9
                    "
                  >

                    {/* Decorative circle */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-20
                        -top-20
                        h-52
                        w-52
                        rounded-full
                        bg-[#adb718]/10
                        transition-all
                        duration-700
                        group-hover:scale-150
                        group-hover:bg-[#adb718]/15
                      "
                    />

                    {/* Number */}
                    <span
                      className="
                        absolute
                        right-8
                        top-7
                        font-serif
                        text-5xl
                        italic
                        text-[#332424]/[0.06]
                        transition-colors
                        duration-500
                        group-hover:text-[#adb718]/20
                      "
                    >
                      {service.number}
                    </span>

                    {/* Icon */}
                    <div
                      className="
                        relative
                        flex
                        h-16
                        w-16
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#f2f3dc]
                        text-[#8d9920]
                        transition-all
                        duration-500
                        group-hover:rotate-6
                        group-hover:bg-[#adb718]
                        group-hover:text-white
                      "
                    >
                      <Icon
                        size={28}
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Content */}
                    <div className="relative mt-8">

                      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8d9920]">
                        {service.subtitle}
                      </p>

                      <h3 className="mt-2 font-serif text-3xl text-[#332424] sm:text-4xl">
                        {service.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-[#332424]/60">
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom */}
                    <div className="mt-auto flex items-end justify-between gap-4 border-t border-[#332424]/10 pt-6">

                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#332424]/40">
                          Starting from
                        </p>

                        <div className="mt-1 flex items-baseline gap-1">
                          <span className="font-serif text-3xl text-[#332424]">
                            $250
                          </span>

                          <span className="text-xs text-[#332424]/40">
                            / hour
                          </span>
                        </div>
                      </div>

                      {/* Book Button */}
                      <button
                        type="button"
                        onClick={() => openBooking(service.id)}
                        className="
                          group/button
                          flex
                          items-center
                          gap-2
                          rounded-full
                          bg-[#332424]
                          px-5
                          py-3
                          text-xs
                          font-semibold
                          uppercase
                          tracking-[0.12em]
                          text-white
                          transition-all
                          duration-300
                          hover:bg-[#adb718]
                        "
                      >
                        Book

                        <span
                          className="
                            flex
                            h-6
                            w-6
                            items-center
                            justify-center
                            rounded-full
                            bg-white/10
                            transition-transform
                            duration-300
                            group-hover/button:translate-x-1
                          "
                        >
                          <ArrowUpRight size={13} />
                        </span>
                      </button>
                    </div>
                  </article>
                </Slide>
              );
            })}
          </div>

          {/* Bottom note */}
          <Fade direction="up" triggerOnce delay={300}>
            <div className="mt-10 flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
              <p className="text-xs text-[#332424]/40">
                Every session is personalized to your comfort and wellness
                needs.
              </p>

              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#332424]/40">
                <span className="h-2 w-2 rounded-full bg-[#adb718]" />
                Massage • Spa • Wellness
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultBooking={selectedBooking}
      />
    </>
  );
}
