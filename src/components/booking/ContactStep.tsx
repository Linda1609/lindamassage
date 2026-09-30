export function ContactStep({ formData, setFormData }: any) {
  return (
    <div className="space-y-4">
      <input
        placeholder="Full Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
        className="w-full border p-3 rounded-xl"
      />

      <input
        placeholder="Email"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
        className="w-full border p-3 rounded-xl"
      />

      <input
        placeholder="Phone"
        value={formData.phone}
        onChange={(e) =>
          setFormData({ ...formData, phone: e.target.value })
        }
        className="w-full border p-3 rounded-xl"
      />

      <textarea
        placeholder="Notes"
        value={formData.notes}
        onChange={(e) =>
          setFormData({ ...formData, notes: e.target.value })
        }
        className="w-full border p-3 rounded-xl"
      />
    </div>
  );
}