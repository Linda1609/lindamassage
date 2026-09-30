import { X } from "lucide-react";

export default function BookingHeader({ onClose }: { onClose: () => void }) {
  return (
    <div className="p-6 border-b border-spa-beige flex justify-between items-center">
      <div>
        <h2 className="font-serif text-2xl text-spa-brown">
          Book Your Appointment
        </h2>
        <p className="text-spa-brown/70 text-sm mt-1">
          Schedule your relaxation journey
        </p>
      </div>

      <button onClick={onClose}>
        <X className="w-5 h-5 text-spa-brown" />
      </button>
    </div>
  );
}