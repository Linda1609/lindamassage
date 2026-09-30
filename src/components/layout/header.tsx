"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Leaf,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "../ui/button";
import BookingModal from "../booking/booking-modal";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const pathname = usePathname();

  /* =========================================================
     SCROLL DETECTION
  ========================================================= */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
  ========================================================= */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  /* =========================================================
     NAVIGATION
  ========================================================= */
  const navLinks = [
    {
      name: "About",
      href: "/about",
    },
    // {
    //   name: "Treatments",
    //   href: "/services",
    // },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Check YourGift Card",
      href: "/gift-card-balance",
    },
  ];

  return (
    <>
      {/* =====================================================
          HEADER
      ====================================================== */}
      <header
        className={`
          fixed
          left-0
          right-0
          top-0
          z-50
          transition-all
          duration-300

          ${
            isScrolled
              ? "bg-[#f5efe7]/95 shadow-sm backdrop-blur-md"
              : "bg-transparent"
          }
        `}
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1236px]
            px-5
            py-4
            sm:px-7
            lg:px-8
          "
        >
          {/* =================================================
              MAIN HEADER ROW
          ================================================== */}
          <div className="flex min-h-[48px] items-center justify-between">

            {/* =================================================
                LOGO — LEFT
            ================================================== */}
            <Link
              href="/"
              className="
                flex
                flex-shrink-0
                items-center
                gap-2.5
              "
            >
              {/* Logo icon */}
              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-[#ADB718]
                "
              >
                <Leaf className="h-4 w-4 text-white" />
              </div>

              {/* Logo text */}
              <span
                className={`
                  font-serif
                  text-lg
                  font-semibold
                  transition-colors
                  duration-300

                  ${
                    isScrolled
                      ? "text-[#30251f]"
                      : "text-white"
                  }
                `}
              >
                Linda's Studio
              </span>
            </Link>

            {/* =================================================
                RIGHT SIDE
                NAV + BOOK BUTTON
            ================================================== */}
            <div
              className="
                hidden
                items-center
                gap-3
                md:flex
              "
            >
              {/* =================================================
                  DESKTOP NAV
              ================================================== */}
              <nav
                className={`
                  flex
                  items-center
                  gap-5
                  rounded-full
                  px-5
                  py-3
                  transition-all
                  duration-300

                  ${
                    isScrolled
                      ? "bg-black/5"
                      : "bg-black/15 backdrop-blur-sm"
                  }
                `}
              >
                {navLinks.map((link) => {
                  const isActive =
                    pathname === link.href;

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`
                        whitespace-nowrap
                        text-xs
                        font-medium
                        transition-colors
                        duration-200

                        ${
                          isScrolled
                            ? isActive
                              ? "text-[#c56d32]"
                              : "text-[#30251f]/80 hover:text-[#c56d32]"
                            : isActive
                              ? "text-white"
                              : "text-white/85 hover:text-white"
                        }
                      `}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              {/* =================================================
                  BOOK APPOINTMENT BUTTON
              ================================================== */}
              <Button
                onClick={() => setIsBookingOpen(true)}
                className={`
                  group
                  flex
                  h-[42px]
                  flex-shrink-0
                  items-center
                  gap-2
                  rounded-full
                  px-4
                  text-[11px]
                  font-semibold
                  shadow-sm
                  transition-all
                  duration-300

                  ${
                    isScrolled
                      ? `
                        bg-[#ADB718]
                        text-white
                        hover:bg-[#263653]
                      `
                      : `
                        bg-white
                        text-[#172238]
                        hover:bg-[#f5eee7]
                      `
                  }
                `}
              >
                Book Your Session

                {/* Arrow circle */}
                <span
                  className={`
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    transition-transform
                    duration-300
                    group-hover:rotate-45

                    ${
                      isScrolled
                        ? "bg-white text-[#172238]"
                        : "bg-[#ADB718] text-white"
                    }
                  `}
                >
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Button>
            </div>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================== */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className={`
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                transition-all
                duration-300
                md:hidden

                ${
                  isScrolled
                    ? "bg-[#172238] text-white"
                    : "bg-white/15 text-white backdrop-blur-sm"
                }
              `}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* =======================================================
          MOBILE MENU
      ======================================================== */}
      {isMobileMenuOpen && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            h-[450px]
            bg-[#ADB718]
            p-6
            text-white
            rounded-[10px]
          "
        >
          {/* =================================================
              MOBILE MENU HEADER
          ================================================== */}
          <div className="flex items-center justify-between">

            {/* Mobile logo */}
            <Link
              href="/"
              onClick={() =>
                setIsMobileMenuOpen(false)
              }
              className="
                flex
                items-center
                gap-2
              "
            >
              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                "
              >
                <Leaf className="h-4 w-4 text-[#172238]" />
              </div>

              <span
                className="
                  font-serif
                  text-lg
                  font-semibold
                "
              >
                Linda's Studio
              </span>
            </Link>

            {/* Close button */}
            <button
              onClick={() =>
                setIsMobileMenuOpen(false)
              }
              aria-label="Close navigation menu"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-white/10
              "
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* =================================================
              MOBILE NAVIGATION
          ================================================== */}
          <nav
            className="
              mt-16
              flex
              flex-col
              gap-5
            "
          >
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() =>
                    setIsMobileMenuOpen(false)
                  }
                  className={`
                    border-b
                    border-white/10
                    pb-4
                    text-lg
                    transition-colors

                    ${
                      isActive
                        ? "text-[#e09a62]"
                        : "text-white hover:text-black"
                    }
                  `}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* =================================================
                MOBILE BOOK BUTTON
            ================================================== */}
            <Button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsBookingOpen(true);
              }}
              className="
                mt-5
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-white
                py-6
                text-[#172238]
                text-2xl
                hover:bg-[#f5eee7]
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
                  bg-[#172238]
                  text-white
                "
              >
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Button>
          </nav>
        </div>
      )}

      {/* =======================================================
          BOOKING MODAL
      ======================================================== */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}
