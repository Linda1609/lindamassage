"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";
import { Button } from "../ui/button";
import GiftCardBalancePopup from "../giftCard/GiftCardBalancePopup";
import BookingModal from "../booking/booking-modal";

export default function HeroSection() {
  const [giftCardOpen, setGiftCardOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[110svh] w-full overflow-hidden bg-black">
        {/* =====================================================
            HERO IMAGE
        ====================================================== */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/linda.jpg"
            alt=""
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
              scale-x-[-1]
            "
          />
        </div>

        {/* =====================================================
            HERO CONTENT
        ====================================================== */}
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[100svh]
            w-full
            max-w-[1236px]
            flex-col
            justify-end
            px-6
            pb-20
            pt-32
            sm:px-8
            sm:pb-24
            lg:px-10
            lg:pb-[125px]
          "
        >
          {/* =================================================
              MAIN COPY
          ================================================== */}
          <div className="max-w-[560px]">
            {/* HEADING */}
            <h1
              className="
                font-serif
                text-[42px]
                font-medium
                leading-[0.98]
                tracking-[-0.035em]
                text-white
                sm:text-[54px]
                md:text-[62px]
                lg:text-[72px]
              "
            >
              Feel Better.
              <br />
              Move Freely.
              <br />
              Live Pain-Free.
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-5
                max-w-[430px]
                text-[13px]
                leading-[1.55]
                text-white/80
                sm:text-sm
              "
            >
              Personalized therapeutic massage designed to reduce pain,
              relieve stress, and restore your body's natural balance —
              delivered by highly trained therapists.
            </p>

            {/* =================================================
                CTA BUTTONS
            ================================================== */}
            <div
              className="
                mt-7
                flex
                w-full
                flex-col
                gap-3
                sm:w-auto
                sm:flex-row
              "
            >
              {/* PRIMARY — BOOK SESSION */}
              <Button
                onClick={() => setBookingOpen(true)}
                className="
                  h-[48px]
                  w-full
                  rounded-full
                  bg-white
                  px-6
                  text-[13px]
                  font-semibold
                  text-[#29231f]
                  shadow-lg
                  transition-all
                  hover:scale-[1.02]
                  hover:bg-[#f4eee8]
                  sm:w-auto
                "
              >
                Book Your Session
              </Button>

              {/* SECONDARY — EXPLORE TREATMENTS */}
              <a
                href="#treatments"
                className="block w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  className="
                    group
                    h-[48px]
                    w-full
                    rounded-full
                    border
                    border-white/60
                    bg-white/5
                    px-5
                    text-[13px]
                    font-medium
                    text-white
                    backdrop-blur-sm
                    transition-all
                    hover:bg-white
                    hover:text-[#29231f]
                    sm:w-auto
                  "
                >
                  Explore Treatments

                  <span
                    className="
                      ml-2
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-[#29231f]
                      transition-transform
                      duration-300
                      group-hover:rotate-45
                    "
                  >
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Button>
              </a>
            </div>
          </div>

          {/* =================================================
              CUSTOMER RATING
          ================================================== */}
          <div
            className="
              mt-10
              flex
              items-center
              gap-4
              sm:mt-12
            "
          >
            {/* CUSTOMER COUNT */}
            <div>
              <p
                className="
                  text-[17px]
                  font-semibold
                  leading-none
                  text-white
                "
              >
                1k+
              </p>

              <p
                className="
                  mt-1
                  text-[10px]
                  text-white/65
                "
              >
                Satisfied Customers
              </p>
            </div>

            {/* DIVIDER */}
            <div className="h-9 w-px bg-white/25" />

            {/* RATING */}
            <div>
              <div className="flex items-center gap-[2px]">
                {[1, 2, 3, 4, 5].map((item) => (
                  <Star
                    key={item}
                    className="
                      h-[15px]
                      w-[15px]
                      fill-[#f5a623]
                      text-[#f5a623]
                    "
                  />
                ))}
              </div>

              <p className="mt-1 text-[10px] text-white/80">
                <span className="font-semibold text-white">
                  4.9
                </span>{" "}
                average rating
              </p>
            </div>

            {/* AVATARS */}
            {/* AVATARS */}
<div className="ml-1 hidden items-center sm:flex">
  {[
    "/reviews/Michael.jpg",
    "/reviews/Robert.jpg",
    "/reviews/Daniel.jpg",
    "/reviews/Kevin.jpg",
    "/reviews/James-Olivia.jpg",
  ].map((avatar, index) => (
    <div
      key={avatar}
      className="
        -ml-2
        h-8
        w-8
        overflow-hidden
        rounded-full
        border-2
        border-white/70
        bg-[#ddd]
      "
      style={{
        zIndex: 10 - index,
      }}
    >
      <img
        src={avatar}
        alt=""
        className="
          h-full
          w-full
          object-cover
        "
      />
    </div>
  ))}
</div>

          </div>

          {/* =================================================
              FLOATING EXPERIENCE CARD
          ================================================== */}
          <div
            className="
              absolute
              bottom-10
              right-6
              hidden
              w-[300px]
              rounded-[18px]
              border
              border-white/20
              bg-black/30
              p-2
              shadow-2xl
              backdrop-blur-xl
              md:block
              lg:right-10
            "
          >
            <div className="flex items-center gap-3 ">
              {/* IMAGE */}
              <div
                className="
                  h-[78px]
                  w-[78px]
                  flex-shrink-0
                  overflow-hidden
                  rounded-[13px]
                  bg-cover
                  bg-center
                "
                style={{
                  backgroundImage: "url('/images/linda2.jpg')",
                }}
              />

              {/* TEXT */}
              <div className="min-w-0 flex-1">
                <p
                  className="
                    text-[11px]
                    leading-[1.45]
                    text-white/90
                  "
                >
                  A premium wellness experience designed for your
                  body, needs, and tranquility.
                </p>

                {/* ARROWS */}
                <div className="mt-3 flex gap-1.5">
                  <button
                    type="button"
                    aria-label="Previous"
                    className="
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/20
                      bg-white/10
                      text-white
                      transition-colors
                      hover:bg-white/20
                    "
                  >
                    <ChevronLeft className="h-3 w-3" />
                  </button>

                  <button
                    type="button"
                    aria-label="Next"
                    className="
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/20
                      bg-white/10
                      text-white
                      transition-colors
                      hover:bg-white/20
                    "
                  >
                    <ChevronRight className="h-3 w-3" />
                  </button>
                </div>
              </div>

              {/* ROUND ARROW */}
              <button
                type="button"
                aria-label="Explore"
                className="
                  flex
                  h-10
                  w-10
                  flex-shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-[#30251f]
                  transition-transform
                  duration-300
                  hover:rotate-45
                "
              >
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BOOKING MODAL
      ====================================================== */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />

      {/* =====================================================
          GIFT CARD POPUP
      ====================================================== */}
      <GiftCardBalancePopup
        open={giftCardOpen}
        onClose={() => setGiftCardOpen(false)}
      />
    </>
  );
}