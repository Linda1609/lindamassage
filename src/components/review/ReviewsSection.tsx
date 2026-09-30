"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Star,
} from "lucide-react";
import { reviews } from "@/constants/review";

export default function ReviewsSection() {
  const [currentPage, setCurrentPage] = useState(0);

  /*
   * Sort newest reviews first
   */
  const sortedReviews = useMemo(() => {
    return [...reviews].sort(
      (a, b) =>
        new Date(b.date).getTime() -
        new Date(a.date).getTime()
    );
  }, []);

  /*
   * Three reviews per page
   */
  const reviewsPerPage = 3;

  const totalPages = Math.ceil(
    sortedReviews.length / reviewsPerPage
  );

  const currentReviews = sortedReviews.slice(
    currentPage * reviewsPerPage,
    currentPage * reviewsPerPage + reviewsPerPage
  );

  const handlePrevious = () => {
    setCurrentPage((prev) =>
      prev === 0 ? totalPages - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentPage((prev) =>
      prev === totalPages - 1 ? 0 : prev + 1
    );
  };

  if (!reviews.length) {
    return null;
  }

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[#e7eee2] px-5 py-20 sm:px-8 lg:py-24"
    >
      {/* Decorative background circles */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-[360px] w-[360px] rounded-full border border-[#d1ddca]" />

      <div className="pointer-events-none absolute -bottom-40 -right-32 h-[400px] w-[400px] rounded-full border border-[#d1ddca]" />

      <div className="pointer-events-none absolute left-1/2 top-20 h-40 w-40 -translate-x-1/2 rounded-full bg-white/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* =========================================
            HEADER
        ========================================== */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#72816b]">
            Client Experiences
          </p>

          <h2 className="font-serif text-4xl font-normal tracking-tight text-[#2e422c] sm:text-5xl">
            Words From My Clients
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#aebca5]" />

            <span className="h-1.5 w-1.5 rounded-full bg-[#65775e]" />

            <span className="h-px w-10 bg-[#aebca5]" />
          </div>
        </div>

        {/* =========================================
            TESTIMONIAL CARDS
        ========================================== */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {currentReviews.map((review) => (
            <article
              key={review.id}
              className="
                group
                relative
                flex
                min-h-[300px]
                flex-col
                overflow-hidden
                rounded-[18px]
                border
                border-[#d3ddce]
                bg-[#fbfcf8]
                px-6
                py-6
                shadow-[0_10px_35px_rgba(48,77,43,0.06)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_18px_40px_rgba(48,77,43,0.11)]
                sm:px-7
              "
            >
              {/* Top accent */}
              <div className="absolute left-0 top-0 h-[3px] w-full bg-[#3d5837]" />

              {/* =====================================
                  CUSTOMER INFO — TOP
              ====================================== */}
              <div className="flex items-start justify-between gap-4">
                {/* Left: image + name */}
                <div className="flex min-w-0 items-center gap-3.5">
                  {/* Customer image */}
                  <div className="h-[58px] w-[58px] shrink-0 overflow-hidden rounded-full border-2 border-[#dce4d7] bg-[#e3eadf] p-1">
                    <div className="h-full w-full overflow-hidden rounded-full">
                      {review.image ? (
                        <Image
                          src={review.image}
                          alt={review.name}
                          width={58}
                          height={58}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-[#3d5837] font-serif text-base text-white">
                          {review.initials}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Name + date */}
                  <div className="min-w-0">
                    <h3 className="truncate font-serif text-[17px] font-medium text-[#293b27]">
                      {review.name}
                    </h3>

                    <p className="mt-1 text-[10px] uppercase tracking-[0.13em] text-[#899682]">
                      {new Date(review.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>

                {/* Verified */}
                {review.verified && (
                  <div className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#edf3e9] px-2.5 py-1.5">
                    <CheckCircle2
                      size={14}
                      strokeWidth={2}
                      className="text-[#4d7148]"
                    />

                    <span className="hidden text-[10px] font-medium uppercase tracking-[0.08em] text-[#4d7148] sm:inline">
                      Verified
                    </span>
                  </div>
                )}
              </div>

              {/* =====================================
                  STAR RATING
              ====================================== */}
              <div className="mt-5 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => {
                  const isFilled = index < review.rating;

                  return (
                    <Star
                      key={index}
                      size={16}
                      strokeWidth={1.5}
                      className={
                        isFilled
                          ? "fill-[#c59b45] text-[#c59b45]"
                          : "fill-transparent text-[#d6d8cf]"
                      }
                    />
                  );
                })}

                <span className="ml-2 text-xs font-medium text-[#778273]">
                  {review.rating}.0
                </span>
              </div>

              {/* Divider */}
              <div className="my-5 h-px w-full bg-[#e5e9e1]" />

              {/* =====================================
                  REVIEW TEXT
              ====================================== */}
              <div className="relative flex-1">
                {/* Decorative quote */}
                <span className="absolute -left-1 -top-4 font-serif text-4xl leading-none text-[#dce5d8]">
                  “
                </span>

                <p className="relative z-10 pl-4 font-serif text-[15px] leading-[1.75] text-[#4b5848]">
                  {review.review}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* =========================================
            NAVIGATION
        ========================================== */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center">
            <div className="flex items-center gap-5">
              {/* Previous */}
              <button
                type="button"
                onClick={handlePrevious}
                aria-label="Previous testimonials"
                className="
                  group
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#b8c6b1]
                  bg-[#f5f8f2]
                  text-[#53634e]
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-[#3d5837]
                  hover:bg-[#3d5837]
                  hover:text-white
                "
              >
                <ChevronLeft
                  size={19}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:-translate-x-0.5"
                />
              </button>

              {/* Page indicator */}
              <div className="flex items-center gap-3">
                <span className="font-serif text-lg text-[#3d5837]">
                  {String(currentPage + 1).padStart(2, "0")}
                </span>

                <span className="h-px w-7 bg-[#9faf98]" />

                <span className="text-xs tracking-wider text-[#82907d]">
                  {String(totalPages).padStart(2, "0")}
                </span>
              </div>

              {/* Next */}
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonials"
                className="
                  group
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#b8c6b1]
                  bg-[#f5f8f2]
                  text-[#53634e]
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-[#3d5837]
                  hover:bg-[#3d5837]
                  hover:text-white
                "
              >
                <ChevronRight
                  size={19}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </button>
            </div>
          </div>
        )}

        {/* =========================================
            PAGINATION DOTS
        ========================================== */}
        {totalPages > 1 && (
          <div className="mt-5 flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentPage(index)}
                aria-label={`Show testimonial group ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentPage
                    ? "w-7 bg-[#3d5837]"
                    : "w-1.5 bg-[#b9c5b3] hover:bg-[#71816b]"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
