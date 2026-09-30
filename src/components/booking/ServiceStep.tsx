export function ServiceStep({
  services,
  bookingOptions,
  selectedService,
  setSelectedService,
  selectedBooking,
  setSelectedBooking,
}: any) {
  return (
    <div>
      <h3 className="font-serif text-xl mb-4">Select Service</h3>

      <div className="grid gap-3 mb-6">
        {services.map((s: any) => (
          <button
            key={s.id}
            onClick={() => setSelectedService(s.id)}
            className={`p-4 border rounded-xl text-left ${
              selectedService === s.id
                ? "border-spa-orange bg-spa-orange/5"
                : "border-spa-beige"
            }`}
          >
            {s.name}
          </button>
        ))}
      </div>

      <h3 className="font-serif text-xl mb-4">Select Duration</h3>

      <div className="grid gap-3">
        {bookingOptions.map((b: any) => (
          <button
            key={b.id}
            onClick={() => setSelectedBooking(b.id)}
            className={`p-4 border rounded-xl flex justify-between ${
              selectedBooking === b.id
                ? "border-spa-orange bg-spa-orange/5"
                : "border-spa-beige"
            }`}
          >
            <span>{b.duration}</span>
            <span className="text-spa-orange">{b.price}</span>
          </button>
        ))}
      </div>
    </div>
  );
}