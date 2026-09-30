"use client";

import type React from "react";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useContact } from "@/hooks/use-contact";
import Header from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import WhatsAppWidget from "@/components/Whatsapp";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const { mutate, isPending } = useContact();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutate(
      {
        type: "contact",
        ...formData,
      },
      {
        onSuccess: () => {
          setIsSubmitted(true);

          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        },

        onError: (error) => {
          alert(error.message);
        },
      },
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: FaWhatsapp,
      title: "Message Me",
      details: ["Send a DM"],
      link: "https://wa.me/message/B55K3TDCULYMN1",
    },
    {
      icon: Phone,
      title: "Call Me",
      details: ["+1 (951) 536-8206"],
    },
    {
      icon: Mail,
      title: "Email Me",
      details: ["sm160957a@gmail.com"],
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: ["Available for Incall & Outcall"],
    },
  ];

  const faqs = [
    {
      question: "How far in advance should I book my appointment?",
      answer:
        "Appointments can sometimes be arranged at short notice, but we recommend booking in advance if you have a preferred day or time.",
    },
    {
      question: "Can I ask about a treatment before booking?",
      answer:
        "Absolutely. Send us a message and we will be happy to answer your questions and help you choose a treatment that suits your needs.",
    },
    {
      question: "How quickly will I receive a response?",
      answer:
        "We generally respond to messages within 24 hours during our regular opening hours.",
    },
  ];

  return (
    <main className="min-h-screen bg-spa-cream">
      <Header />

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-black pb-20 pt-32">
        <div className="mx-auto max-w-[1236px] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-spa-cream">
              Get In Touch
            </span>

            <h1 className="mt-3 mb-6 font-serif text-4xl text-spa-cream md:text-6xl">
              Contact Us
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-spa-cream/80">
              Whether you have a question about our treatments, would like to
              arrange an appointment, or simply want to learn more, we&apos;re
              here to make getting in touch easy.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 rounded-t-[50%] bg-spa-cream" />
      </section>

      {/* =====================================================
          CONTACT INFORMATION
      ====================================================== */}
      <section className="py-14">
        <div className="mx-auto max-w-[1236px] px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;

              const card = (
                <div className="rounded-tl-3xl rounded-bl-3xl border border-spa-brown/5 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  {/* Icon */}
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <Icon className="h-5 w-5 text-green-600" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 font-serif text-lg text-spa-brown">
                    {info.title}
                  </h3>

                  {/* Details */}
                  {info.details.map((detail, i) => (
                    <p
                      key={i}
                      className="text-sm leading-6 text-spa-brown/65"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              );

              // WhatsApp card
              if (info.link) {
                return (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    aria-label="Message us on WhatsApp"
                  >
                    {card}
                  </a>
                );
              }

              // Normal cards
              return <div key={index}>{card}</div>;
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT CONTENT + FORM
      ====================================================== */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            {/* LEFT CONTENT */}
            <div className="lg:sticky lg:top-28">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#ADB718]">
                Let&apos;s Connect
              </span>

              <h2 className="mt-3 mb-6 font-serif text-3xl leading-tight text-spa-brown md:text-5xl">
                A little conversation{" "}
                <span className="italic text-[#ADB718]">
                  can be the beginning.
                </span>
                <br />
              </h2>

              <div className="space-y-5 leading-7 text-spa-brown/65">
                <p>
                  Choosing a wellness experience should feel simple and
                  comfortable. If you&apos;re curious about a treatment,
                  planning your first visit, or simply have a question, feel
                  free to reach out.
                </p>

                <p>
                  Send us a message and tell us what you&apos;re looking for.
                  We&apos;ll get back to you as soon as possible.
                </p>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="rounded-2xl border border-spa-brown/5 bg-white p-7 shadow-sm md:p-10">
              {isSubmitted ? (
                <div className="py-16 text-center">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-spa-sage/20">
                    <CheckCircle className="h-10 w-10 text-spa-sage-dark" />
                  </div>

                  <h3 className="mb-3 font-serif text-3xl text-spa-brown">
                    Message Sent
                  </h3>

                  <p className="mx-auto mb-7 max-w-md leading-7 text-spa-brown/65">
                    Thank you for reaching out. Your message has been received
                    and we&apos;ll get back to you shortly.
                  </p>

                  <Button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    variant="outline"
                    className="rounded-full border-spa-orange px-6 text-spa-orange hover:bg-spa-orange/10"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="mb-2 font-serif text-2xl text-spa-brown md:text-3xl">
                      Send Us a Message
                    </h2>

                    <p className="text-sm leading-6 text-spa-brown/60">
                      Fill in the details below and we&apos;ll be in touch with
                      you shortly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name + Email */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-spa-brown">
                          Full Name *
                        </Label>

                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="h-12 rounded-lg border-spa-beige bg-spa-cream/30 focus:border-spa-orange focus:ring-spa-orange"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-spa-brown">
                          Email Address *
                        </Label>

                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="h-12 rounded-lg border-spa-beige bg-spa-cream/30 focus:border-spa-orange focus:ring-spa-orange"
                        />
                      </div>
                    </div>

                    {/* Phone + Subject */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-spa-brown">
                          Phone Number
                        </Label>

                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="h-12 rounded-lg border-spa-beige bg-spa-cream/30 focus:border-spa-orange focus:ring-spa-orange"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-spa-brown">
                          Subject *
                        </Label>

                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="Appointment Inquiry"
                          className="h-12 rounded-lg border-spa-beige bg-spa-cream/30 focus:border-spa-orange focus:ring-spa-orange"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-spa-brown">
                        Your Message *
                      </Label>

                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={7}
                        placeholder="Tell us how we can help you..."
                        className="resize-none rounded-lg border-spa-beige bg-spa-cream/30 focus:border-spa-orange focus:ring-spa-orange"
                      />
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      disabled={isPending}
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-[#ADB718] py-3.5 text-spa-cream hover:bg-[#ADB718]/80"
                    >
                      <Send className="h-4 w-4" />

                      {isPending ? "Sending..." : "Send Message"}

                      {!isPending && (
                        <ArrowRight className="ml-1 h-4 w-4" />
                      )}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}
      <section className="bg-spa-beige/30 py-20">
        <div className="mx-auto max-w-[1236px] px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-[#ADB718]">
              FAQ
            </span>

            <h2 className="mt-2 font-serif text-3xl text-spa-brown md:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-4 text-sm leading-6 text-spa-brown/60">
              A few helpful answers before your first visit.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-spa-brown/5 bg-white p-6"
              >
                <h3 className="mb-2 font-serif text-lg text-spa-brown">
                  {faq.question}
                </h3>

                <p className="text-sm leading-relaxed text-spa-brown/65">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Widget */}
      <WhatsAppWidget />
    </main>
  );
}
