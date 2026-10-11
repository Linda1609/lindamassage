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
  const [selectedHour, setSelectedHour] = useState(9);
  const [selectedMinute, setSelectedMinute] = useState(0);
  const [selectedPeriod, setSelectedPeriod] = useState<"AM" | "PM">("AM");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const { mutate, isPending } = useContact();
  const [isSuccess, setIsSuccess] = useState(false);

  const finalTime = `${selectedHour}:${String(selectedMinute).padStart(2, "0")} ${selectedPeriod}`;

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
  setSelectedHour(9);
  setSelectedMinute(0);
  setSelectedPeriod("AM");

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
       
<button
  type="button"
  onClick={close}
  aria-label="Close booking modal"
  className="absolute right-4 top-4 z-50 rounded-full p-2 hover:bg-black/10"
>
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

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-6">
                  {/* DATE */}
                  <div>
                    <h3 className="font-serif text-xl text-spa-brown">Date</h3>

                    <Input
  type="date"
  value={selectedDate}
  min={new Date().toLocaleDateString("en-CA")}
  onChange={(e) => setSelectedDate(e.target.value)}
  className="mt-2"
/>
                  </div>

                  {/* ALARM-STYLE TIME PICKER */}
                  <div>
                    <h3 className="mb-4 font-serif text-xl text-spa-brown">
                      Pick a Time
                    </h3>

                    <div className="mx-auto w-full max-w-md rounded-3xl bg-[#1c1c1e] p-4 text-white shadow-inner">
                      <div className="relative mx-auto flex h-64 max-w-sm items-center justify-center gap-2 overflow-hidden">
                        {/* SELECTED ROW */}
                        <div className="pointer-events-none absolute inset-x-0 top-1/2 z-0 h-16 -translate-y-1/2 rounded-full bg-[#303034]" />

                        {/* HOURS */}
                        <div className="relative z-10 h-full min-w-0 flex-1 overflow-y-auto snap-y snap-mandatory text-center [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                          <div className="h-[calc(50%-2rem)]" />

                          {Array.from({ length: 12 }, (_, i) => i + 1).map(
                            (hour) => (
                              <button
                                key={hour}
                                type="button"
                                onClick={() => setSelectedHour(hour)}
                                className={`flex h-16 w-full snap-center items-center justify-center text-3xl transition-colors ${
                                  selectedHour === hour
                                    ? "font-medium text-white"
                                    : "text-white/35"
                                }`}
                              >
                                {hour}
                              </button>
                            ),
                          )}

                          <div className="h-[calc(50%-2rem)]" />
                        </div>

                        {/* MINUTES */}
                        <div className="relative z-10 h-full min-w-0 flex-1 overflow-y-auto snap-y snap-mandatory text-center [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                          <div className="h-[calc(50%-2rem)]" />

                          {Array.from({ length: 60 }, (_, minute) => (
                            <button
                              key={minute}
                              type="button"
                              onClick={() => setSelectedMinute(minute)}
                              className={`flex h-16 w-full snap-center items-center justify-center text-3xl transition-colors ${
                                selectedMinute === minute
                                  ? "font-medium text-white"
                                  : "text-white/35"
                              }`}
                            >
                              {String(minute).padStart(2, "0")}
                            </button>
                          ))}

                          <div className="h-[calc(50%-2rem)]" />
                        </div>

                        {/* AM / PM */}
                        <div className="relative z-10 h-full min-w-0 flex-1 overflow-y-auto snap-y snap-mandatory text-center [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                          <div className="h-[calc(50%-2rem)]" />

                          {(["AM", "PM"] as const).map((period) => (
                            <button
                              key={period}
                              type="button"
                              onClick={() => setSelectedPeriod(period)}
                              className={`flex h-16 w-full snap-center items-center justify-center text-3xl transition-colors ${
                                selectedPeriod === period
                                  ? "font-medium text-white"
                                  : "text-white/35"
                              }`}
                            >
                              {period}
                            </button>
                          ))}

                          <div className="h-[calc(50%-2rem)]" />
                        </div>
                      </div>

                      {/* SELECTED TIME */}
                      {/* <p className="mt-3 text-center text-sm text-white/60">
          Selected time
        </p> */}

                      <p className="mt-1 text-center text-lg font-medium text-white">
                        {selectedHour}:{String(selectedMinute).padStart(2, "0")}{" "}
                        {selectedPeriod}
                      </p>
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
            
{/* NAVIGATION */}
<div className="mt-8 flex justify-between">
  {step > 1 && (
    <Button
      type="button"
      onClick={() => setStep((current) => current - 1)}
      className="border border-[#3d5837] bg-[#e7eee2] text-[#3d5837] hover:bg-[#d8e5d2] hover:text-[#2f452c]"
    >
      Back
    </Button>
  )}

  {step < 3 ? (
    <Button
      type="button"
      onClick={() => setStep((current) => current + 1)}
      disabled={
        step === 1
          ? !selectedService || !selectedBooking
          : !selectedDate
      }
      className="bg-[#3d5837] text-white hover:bg-[#2f452c] disabled:cursor-not-allowed disabled:opacity-50"
    >
      Continue
    </Button>
  ) : (
    <Button
      type="button"
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
