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
import { useContact } from "@/hooks/use-contact";
import Header from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
      icon: MapPin,
      title: "Visit Us",
      details: ["24 Willow Lane", "Nashville, TN 37203"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (951) 536-8206"],
    },
    {
      icon: Mail,
      title: "Email Us",
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
      <section className="relative pt-32 pb-20 bg-black overflow-hidden">
        <div className="max-w-[1236px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-spa-cream font-medium text-sm uppercase tracking-[0.2em]">
              Get In Touch
            </span>

            <h1 className="font-serif text-4xl md:text-6xl text-spa-cream mt-3 mb-6">
              Contact Us
            </h1>

            <p className="text-spa-cream/80 text-lg leading-relaxed max-w-2xl mx-auto">
              Whether you have a question about our treatments, would like to
              arrange an appointment, or simply want to learn more, we&apos;re
              here to make getting in touch easy.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-spa-cream rounded-t-[50%]" />
      </section>

      {/* =====================================================
          CONTACT INFORMATION
      ====================================================== */}
      <section className="py-14">
        <div className="max-w-[1236px] mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
           {contactInfo.map((info, index) => {
  const Icon = info.icon;

  return (
    <div
      key={index}
      className="bg-white border border-spa-brown/5 rounded-tl-3xl rounded-bl-3xl p-6 text-center hover:-translate-y-1 hover:shadow-md transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
        <Icon className="w-5 h-5 text-green-600" />
      </div>

      <h3 className="font-serif text-lg text-spa-brown mb-2">
        {info.title}
      </h3>

      {info.details.map((detail, i) => (
        <p
          key={i}
          className="text-spa-brown/65 text-sm leading-6"
        >
          {detail}
        </p>
      ))}
    </div>
  );
})}

          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT CONTENT + FORM
      ====================================================== */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-20 items-start">

            {/* LEFT CONTENT */}
            <div className="lg:sticky lg:top-28">

              <span className="text-[#ADB718] font-medium text-sm uppercase tracking-[0.2em]">
                Let&apos;s Connect
              </span>

              <h2 className="font-serif text-3xl md:text-5xl text-spa-brown mt-3 mb-6 leading-tight">
                A little conversation <span className="italic text-[#ADB718]">
                  can be the beginning.
                </span>
                <br />
                
              </h2>

              <div className="space-y-5 text-spa-brown/65 leading-7">
                <p>
                  Choosing a wellness experience should feel simple and
                  comfortable. If you&apos;re curious about a treatment,
                  planning your first visit, or simply have a question, feel
                  free to reach out.
                </p>

                {/* <p>
                  Every guest has different needs. That&apos;s why we take the
                  time to listen, answer your questions, and make sure you
                  have the information you need before your appointment.
                </p> */}

                <p>
                  Send us a message and tell us what you&apos;re looking for.
                  We&apos;ll get back to you as soon as possible.
                </p>
              </div>

          
            </div>

            {/* RIGHT FORM */}
            <div className="bg-white rounded-2xl p-7 md:p-10 shadow-sm border border-spa-brown/5">

              {isSubmitted ? (
                <div className="text-center py-16">

                  <div className="w-20 h-20 rounded-full bg-spa-sage/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-spa-sage-dark" />
                  </div>

                  <h3 className="font-serif text-3xl text-spa-brown mb-3">
                    Message Sent
                  </h3>

                  <p className="text-spa-brown/65 max-w-md mx-auto leading-7 mb-7">
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
                    className="border-spa-orange text-spa-orange hover:bg-spa-orange/10 rounded-full px-6"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="font-serif text-2xl md:text-3xl text-spa-brown mb-2">
                      Send Us a Message
                    </h2>

                    <p className="text-spa-brown/60 text-sm leading-6">
                      Fill in the details below and we&apos;ll be in touch
                      with you shortly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">

                    <div className="grid sm:grid-cols-2 gap-5">

                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="text-spa-brown"
                        >
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
                        <Label
                          htmlFor="email"
                          className="text-spa-brown"
                        >
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

                    <div className="grid sm:grid-cols-2 gap-5">

                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="text-spa-brown"
                        >
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
                        <Label
                          htmlFor="subject"
                          className="text-spa-brown"
                        >
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

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-spa-brown"
                      >
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
                        className="rounded-lg border-spa-beige bg-spa-cream/30 focus:border-spa-orange focus:ring-spa-orange resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isPending}
                      className="w-full bg-[#ADB718] hover:bg-[#ADB718]/80 text-spa-cream rounded-full py-3.5 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />

                      {isPending ? "Sending..." : "Send Message"}

                      {!isPending && (
                        <ArrowRight className="w-4 h-4 ml-1" />
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
      <section className="py-20 bg-spa-beige/30">
        <div className="max-w-[1236px] mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto mb-12">

            <span className="text-[#ADB718] font-medium text-sm uppercase tracking-wider">
              FAQ
            </span>

            <h2 className="font-serif text-3xl md:text-4xl text-spa-brown mt-2">
              Frequently Asked Questions
            </h2>

            <p className="text-spa-brown/60 text-sm mt-4 leading-6">
              A few helpful answers before your first visit.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-spa-brown/5"
              >
                <h3 className="font-serif text-lg text-spa-brown mb-2">
                  {faq.question}
                </h3>

                <p className="text-spa-brown/65 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
