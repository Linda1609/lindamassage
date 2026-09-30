import { Calendar, Clock } from "lucide-react";

export function DateTimeStep({
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
}: any) {
  return (
    <div>
      <h3 className="font-serif text-xl mb-4">Choose Date & Time</h3>

      {/* DATE */}
      <div className="mb-6">
        <label className="flex items-center gap-2 mb-2 text-spa-brown">
          <Calendar className="w-4 h-4" />
          Date
        </label>

        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full border rounded-xl p-3"
        />
      </div>

      {/* QUICK TIME BUTTONS */}
      <div className="mb-4">
        <label className="flex items-center gap-2 mb-2 text-spa-brown">
          <Clock className="w-4 h-4" />
          Quick Times
        </label>

        <div className="grid grid-cols-3 gap-2">
          {["9 AM", "12 PM", "3 PM", "6 PM"].map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTime(t)}
              className={`p-2 rounded-lg text-sm ${
                selectedTime === t
                  ? "bg-spa-orange text-white"
                  : "bg-spa-beige"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* CUSTOM TIME INPUT (🔥 NEW) */}
      <div>
        <label className="text-spa-brown text-sm mb-2 block">
          Or enter custom time
        </label>

        <input
          type="text"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          placeholder="e.g. 11:37 PM, Midnight, 2:15 AM"
          className="w-full border rounded-xl p-3"
        />
      </div>
    </div>
  );
}