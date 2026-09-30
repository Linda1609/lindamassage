export type BookingPayload = {
  type: "booking";

  service: string;
  duration: string;
  price: string;

  date: string;
  time: string;

  name: string;
  email: string;
  phone: string;
  notes?: string;
};

export type ContactPayload = {
  type: "contact";

  name: string;
  email: string;
  phone?: string;

  subject: string;
  message: string;
};

export type FormPayload = BookingPayload | ContactPayload;