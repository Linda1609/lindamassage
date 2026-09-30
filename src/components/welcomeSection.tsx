"use client";

import { useState } from "react";
import BookingModal from "./booking/booking-modal";
import WhatsAppWidget from "./Whatsapp";


export default function WelcomeSection() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-[#adb718]">
        {/* Decorative background shapes */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Left decoration */}
          <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full border-[55px] border-[#8c970d] opacity-30" />

          <div className="absolute -left-20 bottom-[-180px] h-[420px] w-[420px] rounded-full border-[50px] border-[#8c970d] opacity-25" />

          {/* Right decoration */}
          <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border-[55px] border-[#8c970d] opacity-30" />

          <div className="absolute -right-20 bottom-[-180px] h-[420px] w-[420px] rounded-full border-[50px] border-[#8c970d] opacity-25" />
        </div>

        {/* Main content */}
        <div className="relative mx-auto flex max-w-6xl items-center justify-center px-5 py-12 sm:px-8 sm:py-14">
          <div className="w-full max-w-4xl text-center">

            {/* Heading */}
            <h1
              className="
                text-4xl
                font-light
                tracking-tight
                text-white
                sm:text-5xl
                md:text-6xl
              "
            >
              Welcome to Linda Studio
            </h1>

            {/* Description */}
            <p
              className="
                mx-auto
                mt-5
                max-w-3xl
                font-serif
                text-base
                italic
                leading-7
                text-white
                sm:mt-6
                sm:text-lg
                sm:leading-8
                md:text-xl
              "
            >
              Linda Massage, Spa & Wellness features a highly trained group of
              certified massage therapists who are dedicated to helping clients
              improve their health and achieve a balanced lifestyle
            </p>

            {/* Book Now */}
            <div
              className="
                mt-6
                flex
                justify-center
                sm:mt-7
              "
            >
              <button
                type="button"
                onClick={() => setIsBookingOpen(true)}
                className="
                  flex
                  w-full
                  max-w-xs
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-sm
                  bg-white
                  px-12
                  py-3
                  text-lg
                  font-medium
                  text-[#5d6300]
                  shadow-sm
                  transition
                  duration-200
                  hover:bg-gray-100
                  focus:outline-none
                  focus:ring-2
                  focus:ring-white
                  focus:ring-offset-2
                  focus:ring-offset-[#adb718]
                  sm:w-auto
                  sm:max-w-none
                  sm:px-20
                  sm:py-4
                  sm:text-xl
                "
              >
                BOOK NOW
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
      <WhatsAppWidget/>
    </>
  );
}
