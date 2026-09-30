"use client";

import { useState, useRef, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  // WhatsApp direct message link
  const url = "https://wa.me/message/B55K3TDCULYMN1";

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        widgetRef.current &&
        !widgetRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Animate widget appearance
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={widgetRef}
      className={`fixed bottom-6 right-6 z-50 transition-all duration-700 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      {/* Chat Box */}
      {open && (
        <div className="mb-4 w-72 overflow-hidden rounded-2xl bg-white shadow-2xl animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="flex items-center gap-3 bg-green-500 p-2 text-white">
            <Image
              src="/images/linda4.jpg"
              alt="Kolawole"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />

            <div>
              <p className="text-sm font-semibold">Linda</p>
              <p className="text-xs opacity-90">
                Online • replies instantly
              </p>
            </div>
          </div>

          {/* Message */}
          <div className="bg-gray-50 p-4">
            <div className="rounded-xl bg-white p-2 text-sm shadow">
              Hi there 👋
              <br />
              How can I help you?
            </div>
          </div>

          {/* Start Chat */}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 p-3 font-medium text-white transition-colors hover:bg-green-600"
          >
            <FaWhatsapp size={18} />
            Start Chat
          </a>
        </div>
      )}

      {/* Floating Button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-green-500 to-green-400 text-white shadow-2xl transition-all duration-300 hover:scale-110"
      >
        {/* Pulse ring */}
        <span className="absolute h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />

        {/* Notification dot */}
        <span className="absolute right-1 top-1 h-3 w-3 rounded-full border-2 border-white bg-red-500" />

        {/* WhatsApp icon */}
        <FaWhatsapp
          size={26}
          className="relative z-10"
        />
      </button>
    </div>
  );
};

export default WhatsAppWidget;
