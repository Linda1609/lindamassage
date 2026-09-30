"use client";

interface Props {
  open: boolean;
  amount: number | null;
  onClose: () => void;
}

export default function BalanceConfirmModal({
  open,
  amount,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60">
      <div className="w-[420px] rounded-2xl bg-white p-6 shadow-2xl">
        <h2 className="text-center text-2xl font-semibold">
          Your Gift Card Balance
        </h2>

        <div className="mt-8 text-center">
          <p className="text-gray-500">Available Balance</p>

          <p className="mt-3 text-5xl font-bold text-orange-700">
            ${amount}
          </p>
        </div>

        <button
          onClick={onClose}
          className="mt-8 w-full rounded-lg bg-black py-3 text-white hover:bg-gray-900"
        >
          Close
        </button>
      </div>
    </div>
  );
}