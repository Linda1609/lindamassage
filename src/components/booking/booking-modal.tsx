"use client";

import { useState } from "react";
import { X, Calendar, Clock, User, Phone, Mail } from "lucide-react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useContact } from "@/hooks/use-contact";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  { id: "swedish-massage", name: "SWEDISH MASSAGE" },
  { id: "deep-tissue-massage", name: "DEEP TISSUE MASSAGE" },
  { id: "hot-stone-massage", name: "HOT STONE MASSAGE" },
  { id: "sports-massage", name: "SPORTS MASSAGE" },
  { id: "aromatherapy-massage", name: "AROMATHERAPY MASSAGE" },
  { id: "nuru-massage", name: "NURU MASSAGE" },
];

const bookingOptions = [
  { id: "1-hour", duration: "1 HOUR", price: "$250.00" },
  { id: "2-hours", duration: "2 HOURS", price: "$450.00" },
  { id: "3-hours", duration: "3 HOURS", price: "$550.00" },
  { id: "4-6-hours", duration: "4–6 HOURS", price: "$750.00" },
  {
    id: "10-12-hours",
    duration: "10–12 HOURS (OVERNIGHT/DAY)",
    price: "$1,000.00",
  },
];

const timeSlots = [
  "9:00AM",
  "10:00AM",
  "11:00AM",
  "12:00PM",
  "1:00PM",
  "2:00PM",
  "3:00PM",
  "4:00PM",
  "5:00PM",
];

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);

  const [selectedService, setSelectedService] = useState("");
  const [selectedBooking, setSelectedBooking] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const [selectedTime, setSelectedTime] = useState("");
  const [customTime, setCustomTime] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const { mutate, isPending } = useContact();
  const [isSuccess, setIsSuccess] = useState(false);

  const finalTime = customTime || selectedTime;

  const handleSubmit = () => {
    const selectedDuration = bookingOptions.find(
      (b) => b.id === selectedBooking,
    );

    mutate(
      {
        type: "booking",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: services.find((s) => s.id === selectedService)?.name ?? "",
        duration: selectedDuration?.duration ?? "",
        price: selectedDuration?.price ?? "",
        date: selectedDate,
        time: finalTime,
        notes: formData.notes,
      },
      {
        onSuccess: () => setIsSuccess(true),
        onError: (error) => alert(error.message),
      },
    );
  };

  const reset = () => {
    setStep(1);
    setSelectedService("");
    setSelectedBooking("");
    setSelectedDate("");
    setSelectedTime("");
    setCustomTime("");
    setFormData({
      name: "",
      email: "",
      phone: "",
      notes: "",
    });
    setIsSuccess(false);
  };

  const close = () => {
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      {/* BACKDROP */}
      <div className="absolute inset-0 bg-black/60" onClick={close} />

      {/* MODAL */}
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-spa-cream shadow-2xl">
        {/* CLOSE */}
        <button onClick={close} className="absolute right-4 top-4 p-2">
          <X className="h-5 w-5" />
        </button>

        {/* HEADER */}
        <div className="border-b p-8">
          <h2 className="font-serif text-2xl">Book Appointment</h2>

          {/* STEP INDICATOR */}
          {!isSuccess && (
            <div className="ml-2 mt-6 flex gap-3">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${
                      step >= s ? "bg-[#3d5837] text-white" : "bg-gray-200"
                    }`}
                  >
                    {s}
                  </div>

                  {s < 3 && <div className="mx-1 h-0.5 w-10 bg-gray-300" />}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* BODY */}
        <div className="p-8">
          {/* SUCCESS */}
          {isSuccess ? (
            <div className="text-center">
              <h3 className="mb-4 text-xl">Booking Confirmed</h3>

              <Button
                onClick={close}
                className="bg-[#3d5837] text-white hover:bg-[#2f452c]"
              >
                Done
              </Button>
            </div>
          ) : (
            <>
              {/* STEP 1 */}
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="font-semibold">Select Service</h3>

                  {services.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedService(s.id)}
                      className={`w-full rounded-xl border p-4 text-start transition ${
                        selectedService === s.id
                          ? "border-[#3d5837] bg-[#e7eee2]"
                          : ""
                      }`}
                    >
                      {s.name}
                    </button>
                  ))}

                  <h3 className="mt-6 font-semibold">Select Duration</h3>

                  {bookingOptions.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => setSelectedBooking(b.id)}
                      className={`flex w-full justify-between rounded-xl border p-4 transition ${
                        selectedBooking === b.id
                          ? "border-[#3d5837] bg-[#e7eee2]"
                          : ""
                      }`}
                    >
                      <span>{b.duration}</span>
                      <span>{b.price}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-xl text-spa-brown">Date</h3>

                    <Input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                    />
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-spa-brown">
                      Pick a Time
                    </h3>

                    <div className="mt-2 grid grid-cols-3 gap-2">
                      {timeSlots.map((t) => (
                        <button
                          key={t}
                          onClick={() => {
                            setSelectedTime(t);
                            setCustomTime("");
                          }}
                          className={`rounded border p-2 transition ${
                            selectedTime === t
                              ? "border-[#3d5837] bg-[#e7eee2]"
                              : ""
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>

                    {/* CUSTOM TIME */}
                    <div className="mt-4">
                      <h3 className="font-serif text-xl text-spa-brown">
                        Choose Your Prefrred Time
                      </h3>

                      <Input
                        className={
                          customTime
                            ? "border-[#3d5837] ring-1 ring-[#3d5837]"
                            : ""
                        }
                        type="time"
                        value={customTime}
                        onChange={(e) => {
                          setCustomTime(e.target.value);
                          setSelectedTime("");
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div>
                  <h3 className="mb-4 font-serif text-xl text-spa-brown">
                    Your Details
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <Label
                        htmlFor="name"
                        className="mb-2 flex items-center gap-2 text-spa-brown"
                      >
                        <User className="h-4 w-4" />
                        Full Name
                      </Label>

                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            name: e.target.value,
                          })
                        }
                        placeholder="Enter your full name"
                        className="w-full rounded-xl border-spa-beige focus:border-[#3d5837] focus:ring-[#3d5837]"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="email"
                        className="mb-2 flex items-center gap-2 text-spa-brown"
                      >
                        <Mail className="h-4 w-4" />
                        Email Address
                      </Label>

                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        placeholder="Enter your email"
                        className="w-full rounded-xl border-spa-beige focus:border-[#3d5837] focus:ring-[#3d5837]"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="phone"
                        className="mb-2 flex items-center gap-2 text-spa-brown"
                      >
                        <Phone className="h-4 w-4" />
                        Phone Number
                      </Label>

                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phone: e.target.value,
                          })
                        }
                        placeholder="Enter your phone number"
                        className="w-full rounded-xl border-spa-beige focus:border-[#3d5837] focus:ring-[#3d5837]"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="notes"
                        className="mb-2 block text-spa-brown"
                      >
                        Special Requests (Optional)
                      </Label>

                      <textarea
                        id="notes"
                        value={formData.notes}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            notes: e.target.value,
                          })
                        }
                        placeholder="Any special requests or notes..."
                        rows={3}
                        className="w-full resize-none rounded-xl border border-spa-beige p-3 outline-none focus:border-[#3d5837] focus:ring-1 focus:ring-[#3d5837]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* NAVIGATION */}
              <div className="mt-8 flex justify-between">
                {step > 1 && (
                  <Button
                    onClick={() => setStep(step - 1)}
                    className="border border-[#3d5837] bg-[#e7eee2] text-[#3d5837] hover:bg-[#d8e5d2] hover:text-[#2f452c]"
                  >
                    Back
                  </Button>
                )}

                {step < 3 ? (
                  <Button
                    onClick={() => setStep(step + 1)}
                    disabled={
                      (step === 1 && (!selectedService || !selectedBooking)) ||
                      (step === 2 &&
                        (!selectedDate || (!selectedTime && !customTime)))
                    }
                    className="bg-[#3d5837] text-white hover:bg-[#2f452c]"
                  >
                    Continue
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={
                      !formData.name ||
                      !formData.email ||
                      !formData.phone ||
                      isPending
                    }
                    className="bg-[#3d5837] text-white hover:bg-[#2f452c]"
                  >
                    {isPending ? "Booking..." : "Confirm"}
                  </Button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
