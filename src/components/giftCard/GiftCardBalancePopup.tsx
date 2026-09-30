"use client";

import GiftCardBalanceForm from "./GiftCardBalanceForm";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function GiftCardBalancePopup({
  open,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-7xl max-h-[95vh] overflow-y-auto rounded-3xl bg-white shadow-2xl">

        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-20 rounded-full bg-white p-2 shadow"
        >
          <X className="h-5 w-5" />
        </button>

        <GiftCardBalanceForm
          onCancel={onClose}
          onSubmit={() => onClose()}
        />

      </div>
    </div>
  );
}