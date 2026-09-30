"use client";

import { Trash2, AlertCircle, CheckCircle2 } from "lucide-react";
import { GiftCard } from "./types";

interface GiftCardItemProps {
  index: number;
  card: GiftCard;
  errors?: {
    cardNumber?: string;
    // pin?: string;
  };
  onChange: (
    id: number,
    field: keyof GiftCard,
    value: string | boolean
  ) => void;
  onRemove: (id: number) => void;
  canRemove?: boolean;
}

export default function GiftCardItem({
  index,
  card,
  errors,
  onChange,
  onRemove,
  canRemove = true,
}: GiftCardItemProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Gift Card #{index + 1}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Enter your gift card details below.
          </p>
        </div>

        {canRemove && (
          <button
            type="button"
            onClick={() => onRemove(card.id)}
            className="rounded-lg p-2 text-red-500 transition hover:bg-red-50"
          >
            <Trash2 size={18} />
          </button>
        )}
      </div>

      <div className="space-y-6">
        {/* Card Number */}
        <div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-900">
              Gift Card Number
            </label>

            <p className="mt-1 text-sm text-gray-500">
              Enter the 16-character gift card number that starts with X.
            </p>
          </div>

          <input
            type="text"
            value={card.cardNumber}
            onChange={(e) =>
              onChange(card.id, "cardNumber", e.target.value)
            }
            placeholder="e.g. X123456789012345"
            className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
              errors?.cardNumber
                ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                : "border-gray-300 focus:border-violet-600 focus:ring-2 focus:ring-violet-100"
            }`}
          />

          {errors?.cardNumber && (
            <div className="mt-2 flex items-center gap-2 text-sm text-red-600">
              <AlertCircle size={16} />
              <span>{errors.cardNumber}</span>
            </div>
          )}
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* PIN SECTION (Disabled for now - keep for future use)               */}
        {/* ------------------------------------------------------------------ */}

        {/*
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-900">
            PIN
          </label>

          <input
            type="password"
            value={card.pin}
            disabled={card.noPin}
            onChange={(e) =>
              onChange(card.id, "pin", e.target.value)
            }
            placeholder={
              card.noPin ? "PIN not required" : "Enter PIN"
            }
            className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
              card.noPin
                ? "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400"
                : errors?.pin
                ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                : "border-gray-300 focus:border-violet-600 focus:ring-2 focus:ring-violet-100"
            }`}
          />

          {errors?.pin && (
            <div className="mt-2 flex items-center gap-2 text-sm text-red-600">
              <AlertCircle size={16} />
              <span>{errors.pin}</span>
            </div>
          )}
        </div>

        <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-gray-200 p-4 transition hover:border-gray-300">
          <input
            type="checkbox"
            checked={card.noPin}
            onChange={(e) =>
              onChange(card.id, "noPin", e.target.checked)
            }
            className="mt-1 h-4 w-4 rounded border-gray-300"
          />

          <div>
            <p className="text-sm font-medium text-gray-900">
              This gift card doesn't have a PIN
            </p>

            <p className="text-xs text-gray-500">
              Check this option if your card doesn't include a PIN.
            </p>
          </div>
        </label>
        */}

        {/* Requirements */}
        {(!card.cardNumber || errors?.cardNumber) && (
          <div className="rounded-xl border border-violet-100 bg-violet-50 p-4">
            <h4 className="mb-3 font-semibold text-gray-900">
              Gift Card Number Requirements
            </h4>

            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle2
                  size={16}
                  className="text-violet-600"
                />
                Be exactly 16 characters long.
              </li>

              <li className="flex items-center gap-2">
                <CheckCircle2
                  size={16}
                  className="text-violet-600"
                />
                Start with the letter X (uppercase).
              </li>

              <li className="flex items-center gap-2">
                <CheckCircle2
                  size={16}
                  className="text-violet-600"
                />
                Letters and numbers only (no spaces).
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}