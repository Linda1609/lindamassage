"use client";

import { denominations } from "./types";

interface Props {
  value: number | null;
  onChange: (value: number | null) => void;
}

export default function DenominationSelector({
  value,
  onChange,
}: Props) {
  return (
    <div className="space-y-3">
      <div>
        <h3 className="text-2xl font-semibold text-gray-800">
          1. Select Gift Card Value
        </h3>

        <p className="text-base text-gray-500 mt-1">
          Please select the value of your gift card before checking the balance.
        </p>
      </div>

      <select
        required
        value={value ?? ""}
        onChange={(e) =>
          onChange(
            e.target.value === "" ? null : Number(e.target.value)
          )
        }
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-700 shadow-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
      >
        <option value="" disabled>
          Select Amount
        </option>

        {denominations.map((amount) => (
          <option key={amount} value={amount}>
            ${amount}
          </option>
        ))}
      </select>
    </div>
  );
}