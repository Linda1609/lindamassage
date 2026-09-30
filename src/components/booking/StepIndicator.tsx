export default function StepIndicator({ step }: { step: number }) {
  return (
    <div className="flex items-center gap-2 mt-4">
      {[1, 2, 3].map((s) => (
        <div key={s} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
              step >= s
                ? "bg-spa-orange text-white"
                : "bg-spa-beige text-spa-brown/50"
            }`}
          >
            {s}
          </div>

          {s < 3 && (
            <div className={`w-10 h-0.5 ${step > s ? "bg-spa-orange" : "bg-spa-beige"}`} />
          )}
        </div>
      ))}
    </div>
  );
}