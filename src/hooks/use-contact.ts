"use client";

import { useMutation } from "@tanstack/react-query";
import { FormPayload } from "../types/contact";

async function submitForm(data: FormPayload) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message ?? "Something went wrong");
  }

  return result;
}

export function useContact() {
  return useMutation({
    mutationFn: submitForm,
  });
}