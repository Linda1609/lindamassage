import { useState } from "react";
import { BookingFormData, Step } from "./types/booking";


export function useBookingState() {
  const [step, setStep] = useState<Step>(1);

  const [selectedService, setSelectedService] = useState("");
  const [selectedBooking, setSelectedBooking] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const reset = () => {
    setStep(1);
    setSelectedService("");
    setSelectedBooking("");
    setSelectedDate("");
    setSelectedTime("");
    setFormData({ name: "", email: "", phone: "", notes: "" });
  };

  return {
    step,
    setStep,
    selectedService,
    setSelectedService,
    selectedBooking,
    setSelectedBooking,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    formData,
    setFormData,
    reset,
  };
}