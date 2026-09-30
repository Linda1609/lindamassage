"use client";

import { useState } from "react";
import { X } from "lucide-react";

type ReviewFormProps = {
  onClose?: () => void;
};

export default function ReviewForm({
  onClose,
}: ReviewFormProps) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Upload image -> Base64
  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  const submitReview = async () => {
    if (!name.trim() || !message.trim()) {
      alert("Please fill all fields.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          text: message,
          image: image || `https://i.pravatar.cc/150?u=${name}`,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit review.");
      }

      // Reset form
      setName("");
      setMessage("");
      setImage(null);

      // Refresh reviews
      window.dispatchEvent(new Event("review-submitted"));

      // Close popup
      onClose?.();
    } catch (error) {
      console.error(error);
      alert("Failed to submit review.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative rounded-xl bg-white p-6 shadow-lg">
      {/* Close Button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 transition hover:bg-gray-100"
        >
          <X size={20} />
        </button>
      )}

      <h2 className="mb-6 text-2xl font-semibold text-gray-900">
        Leave a Review
      </h2>

      {/* Name */}
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#d94a45]"
      />

      {/* Upload */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-4 block w-full text-sm text-gray-600"
      />

      {/* Preview */}
      {image && (
        <div className="mb-4">
          <img
            src={image}
            alt="Preview"
            className="h-20 w-20 rounded-full border object-cover"
          />
        </div>
      )}

      {/* Review */}
      <textarea
        placeholder="Write your review..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={5}
        className="mb-6 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#d94a45]"
      />

      {/* Buttons */}
      <div className="flex gap-3">
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-lg border border-gray-300 py-3 font-medium transition hover:bg-gray-100"
          >
            Cancel
          </button>
        )}

        <button
          type="button"
          onClick={submitReview}
          disabled={loading}
          className="flex-1 rounded-lg bg-spa-orange py-3 font-medium text-white transition hover:bg-spa-orange/70 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Submitting..." : "Submit Review"}
        </button>
      </div>
    </div>
  );
}