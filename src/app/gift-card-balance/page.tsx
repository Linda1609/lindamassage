"use client";

import GiftCardBalanceForm from "@/components/giftCard/GiftCardBalanceForm";

export default function GiftCardBalancePage() {
  const handleSubmit = async (data: any) => {
    console.log("submitted:", data);

    await new Promise((r) => setTimeout(r, 2000));

    // 🔌 call API here later
  };

  return (
    <div className="min-h-screen bg-gray-100 py-24">
      <div className="mx-auto w-full">
        <GiftCardBalanceForm
          onSubmit={handleSubmit}
          onCancel={() => (window.location.href = "/")}
        />
      </div>
    </div>
  );
}